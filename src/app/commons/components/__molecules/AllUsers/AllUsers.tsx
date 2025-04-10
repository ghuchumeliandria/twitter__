"use client";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/commons/firebase/firebase";
import { useEffect, useState } from "react";
import { AllUsers } from "@/app/commons/types/types";
export default function PremiumBar() {
  const [items, setItems] = useState<AllUsers[]>();
  useEffect(() => {
    const fetchItems = async (): Promise<void> => {
      const snapshot = await getDocs(collection(db, "users"));
      const users: AllUsers[] = snapshot.docs.map((doc) => {
        const data = doc.data() as Omit<AllUsers, "id">;
        return {
          ...data,
          id: doc.id,
        };
      });

      setItems(users);
    };
    fetchItems();
  }, []);

  console.log(items);
  return (
    <>
      <div className="w-full p-3 border-[1px] border-bordercolor rounded-[15px] mt-4">
        <h1 className="text-white text-[21px] font-semibold">You might Like</h1>
        <div className="flex flex-col gap-3 mt-4">
          {items?.map((item, index) => {
            return (
              <div key={index} className="flex gap-2 items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full pt-1">
                  <p className="text-white text-[17px] font-semibold text-center ">
                    {item.name.charAt(0)}
                  </p>
                </div>
                <div className="">
                  <h1 className="text-white text-[15px] font-semibold">
                    {item.name}
                  </h1>
                  <h1 className="text-textgray text-[14px]  ">{item.email}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
