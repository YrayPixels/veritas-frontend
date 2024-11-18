"use client";

import { ReactNode, useState } from "react";

interface InputInterface {
    sx?: string,
    endItem?: React.ReactNode,
    startItem?: React.ReactNode
    label?: string,
    placeholder?: string,
    type?: string,
}
export default function InputComp({ sx, endItem, startItem, label, type, placeholder }: InputInterface) {
    return (
        <div className={`${sx} rounded-3xl px-1 py-1 flex flex-row items-center justify-between`}>
            {startItem && startItem}
            <input className={"bg-transparent  w-full focus:outline-none text-[14px] p-2"} type={type ? type : "text"} placeholder={placeholder} />
            {endItem && endItem}

        </div>
    );
}
