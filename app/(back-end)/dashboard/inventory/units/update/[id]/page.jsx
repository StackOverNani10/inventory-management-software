import React from "react";
import { getData } from "@/lib/getData";
import NewUnit from "../../new/page";

export default async function Update({ params: { id } }) {
  const data = await getData(`units/${id}`);
  return <NewUnit initialData={data} isUpdate={true} />;
}
