import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Categories } from "@/components/Categories";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Occasions } from "@/components/Occasions";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Plantas, Flores, Vasos e Jardim Completo em Porto Alegre",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Categories />
      <FeaturedProducts />
      <Occasions />
      <Testimonials />
      <About />
      <Gallery />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
