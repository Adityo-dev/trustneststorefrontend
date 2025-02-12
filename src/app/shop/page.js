import SectionHeader from "@/components/relativeComponents/sectionHeader/SectionHeader";
import ProductFilters from "./_components/ProductFilter";

export default function ShopPage() {
  return (
    <>
      <SectionHeader title={"TrustNest Shop"} linkName={"shop"} />
      <ProductFilters />
    </>
  );
}
