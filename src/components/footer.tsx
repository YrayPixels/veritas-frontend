"use client";

import { Email } from "@mui/icons-material";
import { useState } from "react";
import InputComp from "./custominput";

export default function Footer() {


    return (
        <div className="bg-main rounded-t-3xl text-white h-[658px] overflow-hidden relative py-10">
            <div className="centered-col space-y-4">
                <h3 className="sora-bold text-[24px]">Join Waitlist</h3>
                <p>Be the first to know anything Veritas!</p>
                <div className="w-6/12 ">
                    <InputComp
                        placeholder="Enter your email address"
                        sx="bg-white w-full border border-gray-500"
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

                <hr />


            </div>
            <div className="absolute bottom-[-250px] w-full">
                <h2 className="sora-bold text-[399px]">Veritas</h2>
            </div>

        </div>
    );
}
