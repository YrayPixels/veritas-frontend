"use client";

import { Email } from "@mui/icons-material";
import { useState } from "react";
import InputComp from "./custominput";

export default function About() {


    return (
        < div className="grid grid-cols-2 items-center overflow-hidden container-fluid  rounded-[64px] bg-main text-white" >
            <div className="p-5 space-y-4">
                <div>

                    <h2 className="sora-bold font-bold text-[60px]">About</h2>
                    <p className="nunito-normal">
                        Veritas is pioneering a new era of supply chain transparency and security. Our innovative, blockchain-powered solution leverages the power of NFTs to ensure the authenticity and integrity of products, from source to shelf.
                    </p>
                </div>

                <div>

                    <h3 className="text-[24px] sora-bold font-bold">Our Vision</h3>
                    <p>A future where consumers can trust the products they purchase, and businesses can operate with confidence, knowing their supply chains are secure and transparent.</p>
                </div>
                <div>
                    <InputComp
                        placeholder="Enter your email address"
                        sx="bg-[#001964] border border-gray-500"
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

            <div className="h-[100%]">
                <img src="/images/quality.png" className="w-[100%] h-[100%] object-cover" alt="quality" />
            </div>


        </div >
    );
}
