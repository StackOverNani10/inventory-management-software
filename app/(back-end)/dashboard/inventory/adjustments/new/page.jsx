import AdjustmentForm from "@/components/dashboard/AdjustmentForm";
import { getData } from "@/lib/getData";

export default async function NewAdjustments() {
  const itemsData = getData("items");
  const warehousesData = getData("warehouse");
  const [items, warehouses] = await Promise.all([itemsData, warehousesData]);
  return <AdjustmentForm items={items} warehouses={warehouses} />;
}
