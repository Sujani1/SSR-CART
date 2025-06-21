import React from "react";
import FooterSection from "../Components/FooterSection";
import HeaderSection from "../Components/HeaderSection";
import HeroSection from "../Components/HeroSection";
import GallerySection from "../Components/GallerySection";
import ContentSection from "../Components/ContentSection";
import PricingSection from "../Components/PricingSection";
import ProductSection from "../Components/ProductSection";
import NavbarSection from "../Components/NavbarSection";
import LoginSection from "../Components/CartSection";
import CartSection from "../Components/CartSection";
import TestimonialSection from "../Components/TestimonialSection";

const LandingPage = () => {
    return(
        <>
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen transition-all">
      <HeaderSection />
      <NavbarSection />
      <HeroSection />
      <ContentSection />
      <GallerySection />
      <PricingSection />
      <ProductSection />
      <CartSection />
      <TestimonialSection />
      <FooterSection />
    </div>
        
        </>
    )
}

export default LandingPage