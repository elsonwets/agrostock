import { getCliClient } from "sanity/cli";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { warehouses } from "../data/warehouses";

const client = getCliClient();
const uploadedAssets = new Map<string, string>();

async function assetRefFor(imagePath: string) {
  const cached = uploadedAssets.get(imagePath);
  if (cached) return cached;
  const filePath = join(process.cwd(), "public", imagePath.replace(/^\//, ""));
  const asset = await client.assets.upload("image", readFileSync(filePath), { filename: imagePath.split("/").pop() });
  uploadedAssets.set(imagePath, asset._id);
  return asset._id;
}

async function run() {
  for (const w of warehouses) {
    const assetId = await assetRefFor(w.image);
    await client.createOrReplace({
      _id: w.id,
      _type: "warehouse",
      name: w.name,
      owner: { name: w.owner },
      city: w.location,
      neighborhood: w.neighborhood,
      status: w.status,
      dealKind: w.type,
      category: w.category,
      area: w.area,
      price: w.price,
      priceLabel: w.priceLabel,
      companies: w.companies,
      equipment: w.tags,
      description: w.description,
      images: [{ _type: "image", asset: { _type: "reference", _ref: assetId } }],
      featured: w.featured || false,
      coordinates: { _type: "geopoint", lat: w.coordinates[0], lng: w.coordinates[1] },
      reviewStatus: "published",
      submittedByOwner: false,
    });
    console.log("Seeded:", w.name);
  }
  console.log(`Done — ${warehouses.length} warehouses seeded.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
