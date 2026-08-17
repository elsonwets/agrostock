import { WarehouseDirectory } from "@/components/warehouse-directory";
import { warehouses } from "@/data/warehouses";

export default function Home() {
  return <WarehouseDirectory warehouses={warehouses} />;
}
