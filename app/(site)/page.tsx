import { WarehouseDirectory } from "@/components/warehouse-directory";
import { getWarehouses } from "@/lib/get-warehouses";

export const revalidate = 60;

export default async function Home() {
  const warehouses = await getWarehouses();
  return <WarehouseDirectory warehouses={warehouses} />;
}
