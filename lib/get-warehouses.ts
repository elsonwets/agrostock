import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { isSanityConfigured } from "@/sanity/env";
import { warehouses as staticWarehouses, type Warehouse, type WarehouseStatus } from "@/data/warehouses";
import type { Image } from "sanity";

const QUERY = `*[_type == "warehouse" && reviewStatus == "published"] | order(featured desc, _createdAt desc){
  _id,
  name,
  "owner": owner.name,
  city,
  neighborhood,
  status,
  dealKind,
  category,
  area,
  price,
  priceLabel,
  companies,
  equipment,
  description,
  images,
  featured,
  coordinates
}`;

type SanityWarehouseDoc = {
  _id: string;
  name: string;
  owner?: string;
  city?: string;
  neighborhood?: string;
  status: WarehouseStatus;
  dealKind?: "Location" | "Vente";
  category?: string;
  area?: number;
  price?: number;
  priceLabel?: string;
  companies?: string[];
  equipment?: string[];
  description?: string;
  images?: Image[];
  featured?: boolean;
  coordinates?: { lat: number; lng: number };
};

function mapDoc(doc: SanityWarehouseDoc): Warehouse {
  return {
    id: doc._id,
    name: doc.name,
    location: doc.city || "",
    neighborhood: doc.neighborhood || "",
    status: doc.status,
    type: doc.dealKind,
    category: doc.category || "",
    area: doc.area || 0,
    price: doc.price,
    priceLabel: doc.priceLabel,
    image: doc.images?.[0] ? urlFor(doc.images[0]).width(1200).height(900).fit("crop").url() : "/warehouse-interior.svg",
    featured: doc.featured,
    tags: doc.equipment || [],
    description: doc.description || "",
    coordinates: doc.coordinates ? [doc.coordinates.lat, doc.coordinates.lng] : [0, 0],
    owner: doc.owner || "",
    companies: doc.companies,
  };
}

export async function getWarehouses(): Promise<Warehouse[]> {
  if (!isSanityConfigured) return staticWarehouses;
  try {
    const docs = await client.fetch<SanityWarehouseDoc[]>(QUERY, {}, { next: { revalidate: 60 } });
    return docs.length ? docs.map(mapDoc) : staticWarehouses;
  } catch {
    return staticWarehouses;
  }
}
