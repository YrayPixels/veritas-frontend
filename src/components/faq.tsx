"use client";
import { faqs } from "@/helpers/faqs";
import Image from "next/image";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import { Add, Remove } from "@mui/icons-material"

import { useState } from "react";

export default function Faq() {
    const [selectedFaq, setSelectedFaq] = useState(0)

    return (

        <div className="grid grid-cols-2 container-fluid py-10 items-center justify-center">

            <div>
                <h1 className="text-deeper sora-bold text-[60px]">Frequently Asked Question</h1>
                <img src="/images/ai.png" alt="" />
            </div>
            <div>

                {faqs.map((item: any, index: number) => {
                    return (
                        <Accordion
                            key={index}
                            onChange={() => { setSelectedFaq(index) }}
                            expanded={selectedFaq == index ? true : false}
                            defaultExpanded={index == 0 ? true : false}
                            sx={{ background: 'transparent', boxShadow: '0px', border: '0px' }}
                            className=""
                        >
                            <AccordionSummary
                                sx={{ background: 'transparent', boxShadow: '0px', }}
                                expandIcon={selectedFaq == index ? <Remove className="" /> : <Add className="" />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography className='sora-bold text-deeper text-[16px] font-bold md:text-[32px]'>{item.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    className=""
                                >
                                    {item.text}
                                    <ul className="list-disc list-inside px-2">
                                        {item.list?.map((text: any, index: number) => <Typography key={index}><li>
                                            {text}</li></Typography>)}
                                    </ul>

                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })}

            </div>


        </div>




    );
}
