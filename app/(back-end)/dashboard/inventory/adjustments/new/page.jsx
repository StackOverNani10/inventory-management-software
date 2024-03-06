import AdjustmentForm from "@/components/dashboard/AdjustmentForm";
import { getData } from "@/lib/getData";

export default async function NewAdjustments({
  initialData = {},
  isUpdate = false,
}) {
  const itemsData = getData("items");
  const warehousesData = getData("warehouse");
  const supplierData = getData("suppliers");
  const [items, warehouses, suppliers] = await Promise.all([
    itemsData,
    warehousesData,
    supplierData,
  ]);
  return (
    <AdjustmentForm
      items={items}
      warehouses={warehouses}
      suppliers={suppliers}
      initialData={initialData}
      isUpdate={isUpdate}
    />
  );
}
