"use client";
import postViewServices from "@/services/guffServices/postViewServices";
import { RecordModel } from "pocketbase";
import React, { useEffect, useState } from "react";

const GuffBlock = ({ guff_id }: { guff_id: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true); // Initialize with true to show loading initially
  const [data, setData] = useState<RecordModel | null>(null);

  const fetchData = async () => {
    const response = await postViewServices(guff_id);
    if (response.isSuccess) {
      console.log(response.data);
      setData(response.data);
    } else {
      console.log(response.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [guff_id]);

  return (
    <div className="guff-main">
      {isLoading ? (
        // Loading State
        <div>Loading...</div>
      ) : (
        <div>
          {!data ? (
            // No Data State
            <div>No Data Found</div>
          ) : (
            <div className="">
              {data.expand && (
                // Data Expansion with Guffadi Details
                <div className="username">{data.expand.guffadi.name}</div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GuffBlock;
