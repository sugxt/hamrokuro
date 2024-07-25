import Link from "next/link";
import { RecordModel } from "pocketbase";
import React from "react";
import { GiButterflyFlower } from "react-icons/gi";
import { MdVerified } from "react-icons/md";

const UserDetails = ({ UserDetails }: { UserDetails: any }) => {
  return (
    <div className="title flex flex-col justify-between gap-0">
      <Link
        href={`/guffadi/${UserDetails.username}`}
        className="flex flex-row gap-0.5 items-center"
      >
        <h1 className="font-semibold">{UserDetails.name}</h1>
        {UserDetails.verified && (
          <MdVerified className="text-cyan-800 text-base" />
        )}
        {UserDetails.isBloom && (
          <GiButterflyFlower className="text-pink-600 text-base" />
        )}
      </Link>
      <p className="font-normal text-sm text-neutral-700">
        @{UserDetails.username}
      </p>
    </div>
  );
};

export default UserDetails;
