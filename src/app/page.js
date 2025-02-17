import Banner3 from "@/components/bannerGroup/Banner3";
import Banner4 from "@/components/bannerGroup/Banner4";
import BestSellers from "@/components/home/bestSellers/BestSellers";
import Brand from "@/components/home/brand/Brand";
import DealOfTheDay from "@/components/home/dealOfTheDay/DealOfTheDay";
import FeaturedProducts from "@/components/home/featuredProducts/FeaturedProducts";
import Hero from "@/components/home/hero/Hero";
import PreOrder from "@/components/home/preOrder/PreOrder";
import Service from "@/components/home/service/Service";
import Newsletter from "@/components/shared/newsletter/Newsletter";

export default function Home() {
  return (
    <main className="space-y-10 lg:space-y-16">
      <Hero />
      <DealOfTheDay />
      <PreOrder />
      <FeaturedProducts />
      <Banner3 />
      <BestSellers />
      <Banner4 />
      <Service />
      <Brand />
      <div className="px-4 block lg:hidden">
        <Newsletter />
      </div>
    </main>
  );
}
