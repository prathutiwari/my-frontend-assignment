"use client";

import React from "react";
import Image from "next/image";
import user from "../assets/user.png"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.png"
import img from "../assets/img.png"

const LeftPanel = () => {
    return (
        <div className="flex flex-col gap-6 px-4 flex-1">
            {/* Card 1 */}
            <div className="bg-[radial-gradient(141.22%_109.95%_at_-41.22%_109.95%,rgba(127,139,210,0.3)_0%,rgba(89,106,197,0)_100%),linear-gradient(0deg,#191934,#191934)]
 from-[#2C2C44] to-[#1C1C24] p-6 flex flex-col justify-between rounded-3xl shadow-md h-[50%]">
                <h2 className="text-[36px] font-semibold text-white mb-2 leading-[40px]">Create your own template</h2>
                <p className="text-[18px] text-gray-400">
                    <span className="font-semibold">14 days trial</span>
                    <br />
                    after – $5/month
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[radial-gradient(141.22%_109.95%_at_-41.22%_109.95%,rgba(127,139,210,0.3)_0%,rgba(89,106,197,0)_100%),linear-gradient(0deg,#191934,#191934)]
 from-[#2C2C44] to-[#1C1C24] p-6 rounded-3xl shadow-md flex flex-col items-center justify-between h-[30%]">
                <div className="text-center">
                    <h2 className="text-[62px] font-bold text-orange-400 mb-2 leading-[40px] mt-3">20</h2>
                    <p className="text-[18px] mb-2 text-[#B2A1FD]">Top Users</p>
                </div>
                <div className="flex">
                    {/* Replace with actual images */}
                    <Image
                        src={user}
                        alt="User 1"
                        width={56}
                        height={56}
                        className="rounded-full"
                    />
                    <Image
                        src={user2}
                        alt="User 2"
                        width={56}
                        height={56}
                        className="rounded-full ml-[-14px]"
                    />
                    <Image
                        src={user3}
                        alt="User 3"
                        width={56}
                        height={56}
                        className="rounded-full ml-[-14px]"
                    />
                </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[radial-gradient(141.22%_109.95%_at_-41.22%_109.95%,rgba(127,139,210,0.3)_0%,rgba(89,106,197,0)_100%),linear-gradient(0deg,#191934,#191934)]
 from-[#2C2C44] to-[#1C1C24] p-4 rounded-3xl shadow-md flex items-center justify-center h-[20%]">
                <button
  className="relative bg-gradient-to-r from-[#9B45F7] to-[#6E28C3] hover:from-[#6E28C3] hover:to-[#9B45F7] transition-colors px-6 py-2 rounded-full text-white text-[20px] font-semibold flex justify-center items-baseline gap-2 w-[90%]"
  style={{
    boxShadow: '1px 0px 1px 10px rgba(1, 5, 30, 0.5)',
  }}
>
  <Image
    src={img}
    alt="Generate"
    width={23}
    height={23}
  />
  <p className="text-[18px]">Generate</p>
</button>


            </div>
        </div>
    );
};

export default LeftPanel;
