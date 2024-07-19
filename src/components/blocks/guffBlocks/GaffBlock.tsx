import commentViewServices from "@/services/gaffServices/commentViewServices";
import { RecordModel } from "pocketbase";
import React, { useEffect, useState } from "react";

const GaffBlock = ({ id }: { id: string }) => {
  const [gaffs, setGaffs] = useState<RecordModel[] | null>(null);
  const fetchData = async () => {
    const response = await commentViewServices(id);
    if (response.isSuccess) {
      console.log(response.message);
      setGaffs(response.data);
    } else {
      console.log("Failed to Fetch Data", response.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  return <div>GaffBlock</div>;
};

export default GaffBlock;
