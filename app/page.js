import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CategoryCarousal from "@/components/CategoryCarousal";
import Image from "next/image";
import Banner from "@/components/Banner";
import ShopCarousel from "@/components/ShopCarousal";
import ServiceCarousel from "@/components/ServiceCarousal";
import PromotionsBanner from "@/components/PromotionsBanner";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex- bg-gray-100 ">

     <CategoryCarousal/>
     <Banner/>
     <ShopCarousel/>
     <ServiceCarousel/>
     <PromotionsBanner/>


    </div>
  );
}
