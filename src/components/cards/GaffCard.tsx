import { RecordModel } from "pocketbase";
import React from "react";

const GaffCard = ({ data }: { data: RecordModel }) => {
  return (
    <div className="gaff-main flex flex-col w-full items-center justify-center">
      <div className="profile-block w-80">
        {data.expand && <div>{data.expand.gaff_by.username}</div>}
      </div>
      <div className="content-block">
        <h1>{data.gaff}</h1>
      </div>
    </div>
  );
};

export default GaffCard;
