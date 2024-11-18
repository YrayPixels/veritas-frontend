"use client";
import { faqs } from "@/helpers/faqs";
import Image from "next/image";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import { Add, Remove } from "@mui/icons-material"

import { useState } from "react";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  const [selectedFaq, setSelectedFaq] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Faq />
      <Footer />
    </>
  );
}
