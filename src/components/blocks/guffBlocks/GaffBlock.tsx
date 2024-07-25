"use client"
import GaffCard from "@/components/cards/GaffCard";
import commentViewServices from "@/services/gaffServices/commentViewServices";
import { RecordModel } from "pocketbase";
import React, { useEffect, useState } from "react";

const GaffBlock = ({ gaff_id }: { gaff_id: string }) => {
  const [gaffs, setGaffs] = useState<RecordModel[] | null>(null);

  const fetchData = async () => {
    const response = await commentViewServices(gaff_id);
    if (response.isSuccess) {
      console.log(response.message);
      setGaffs(response.data);
    } else {
      console.log("Failed to Fetch Data", response.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [gaff_id]);

  return (
    <div className="flex flex-col gap-4">
      {gaffs && gaffs.map((gaff) => <GaffCard key={gaff.id} data={gaff} />)}
    </div>
  );
};

export default GaffBlock;
