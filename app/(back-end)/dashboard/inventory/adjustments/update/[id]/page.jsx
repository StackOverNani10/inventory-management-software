import React from "react";
import { getData } from "@/lib/getData";
import NewAdjustments from "../../new/page";

export default async function Update({ params: { id } }) {
  const data = await getData(`adjustments/${id}`);
  return <NewAdjustments initialData={data} isUpdate={true} />;
}
