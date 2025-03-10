import React from "react";
import { IUser } from "@/models/IData";
import Link from "next/link";
import Image from "next/image";

const User = ({ user }: { user: IUser }) => {
  return (
    <div className="w-full sm:w-1/2">
      <Link href={`/users/${user.id}`} passHref>
        <div className="border border-orange-400 shadow-lg p-6">
          <div className="grid grid-cols-[1fr_1fr_6fr] gap-4">
            <div className="text-4xl font-thin opacity-30 tabular-nums">
              {user.id}
            </div>
            <div className="relative">
              <Image
                alt={user.firstName}
                fill={true}
                className="size-10 rounded-box object-contain"
                src={user.image}
              />
            </div>
            <div className="list-col-grow">
              <div>
                {user.firstName} {user.lastName}
              </div>
              <div className="text-xs uppercase font-semibold opacity-60">
                {user.bank.cardType} {user.bank.cardNumber}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default User;
