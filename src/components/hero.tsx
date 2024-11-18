"use client";

import { Email } from "@mui/icons-material";
import { useState } from "react";
import InputComp from "./custominput";

export default function Hero() {


    return (
        <div className="bg-[url('/images/bg.png')] bg-cover">
            <div className="container-fluid">
                {/* Hero */}
                <div className="centered-col h-screen space-y-4 ">
                    <h1 className="sora-bold text-main text-[128px] font-extrabold">Veritas</h1>
                    <p>Product Tokenization to prevent counterfieting</p>
                    <div>
                        <InputComp
                            placeholder="Enter your email address"
                            sx=" border border-gray-500"
                            startItem={
                                <Email className="text-main" />
                            }
                            endItem={
                                <div className="border p-[2px] border-main min-w-[150px] overflow-hidden rounded-3xl">
                                    <button className="bg-main text-white rounded-3xl w-full text-center py-2 text-nowrap"> Join waitlist</button>
                                </div>
                            }
                        />
                    </div>
                </div>


            </div>
        </div>
    );
}
