// app/shop/page.js
import DynamicProductDisplay from "@/components/dynamicProductDisplay/DynamicProductDisplay";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
const products = [
  {
    id: 1,
    name: "Product 1",
    currentPrice: 100,
    image: "/images/product6.jpg",
    title: "Men’s full sleeve Jacket",
    oldPrice: "130.00",
    stock: 10,
    filters: [
      { filterName: "brand", value: "Brand A" },
      { filterName: "storage", value: "64GB" },
      { filterName: "stock", value: "in stock" },
    ],
  },
  {
    id: 2,
    name: "Product 2",
    currentPrice: 120,
    image: "/images/product7.jpg",
    title: "Women’s winter coat",
    oldPrice: "150.00",
    stock: 5,
    filters: [
      { filterName: "brand", value: "Brand B" },
      { filterName: "storage", value: "128GB" },
      { filterName: "stock", value: "low stock" },
    ],
  },
  {
    id: 3,
    name: "Product 3",
    currentPrice: 80,
    image: "/images/product8.jpg",
    title: "Kids’ rain jacket",
    oldPrice: "100.00",
    stock: 15,
    filters: [
      { filterName: "brand", value: "Brand C" },
      { filterName: "storage", value: "32GB" },
      { filterName: "stock", value: "in stock" },
    ],
  },
  {
    id: 4,
    name: "Product 4",
    currentPrice: 200,
    image: "/images/product10.jpg",
    title: "Men’s leather jacket",
    oldPrice: "250.00",
    stock: 8,
    filters: [
      { filterName: "brand", value: "Brand D" },
      { filterName: "storage", value: "256GB" },
      { filterName: "stock", value: "in stock" },
    ],
  },
  {
    id: 5,
    name: "Product 5",
    currentPrice: 150,
    image: "/images/product9.jpg",
    title: "Women’s summer dress",
    oldPrice: "180.00",
    stock: 12,
    filters: [
      { filterName: "brand", value: "Brand E" },
      { filterName: "storage", value: "64GB" },
      { filterName: "stock", value: "in stock" },
    ],
  },
  {
    id: 6,
    name: "Product 6",
    currentPrice: 90,
    image: "/images/product6.jpg",
    title: "Men’s casual shirt",
    oldPrice: "110.00",
    stock: 20,
    filters: [
      { filterName: "brand", value: "Brand F" },
      { filterName: "storage", value: "128GB" },
      { filterName: "stock", value: "in stock" },
    ],
  },
  {
    id: 7,
    name: "Product 7",
    currentPrice: 70,
    image: "/images/product7.jpg",
    title: "Women’s formal blouse",
    oldPrice: "90.00",
    stock: 18,
    filters: [
      { filterName: "brand", value: "Brand G" },
      { filterName: "storage", value: "32GB" },
      { filterName: "stock", value: "in stock" },
    ],
  },
  {
    id: 8,
    name: "Product 8",
    currentPrice: 300,
    image: "/images/product8.jpg",
    title: "Men’s winter coat",
    oldPrice: "350.00",
    stock: 6,
    filters: [
      { filterName: "brand", value: "Brand H" },
      { filterName: "storage", value: "512GB" },
      { filterName: "stock", value: "low stock" },
    ],
  },
  {
    id: 9,
    name: "Product 9",
    currentPrice: 110,
    image: "/images/product9.jpg",
    title: "Women’s casual top",
    oldPrice: "130.00",
    stock: 14,
    filters: [
      { filterName: "brand", value: "Brand I" },
      { filterName: "storage", value: "64GB" },
      { filterName: "stock", value: "in stock" },
    ],
  },
  {
    id: 10,
    name: "Product 10",
    currentPrice: 180,
    image: "/images/product10.jpg",
    title: "Men’s formal suit",
    oldPrice: "200.00",
    stock: 9,
    filters: [
      { filterName: "brand", value: "Brand J" },
      { filterName: "storage", value: "256GB" },
      { filterName: "stock", value: "in stock" },
    ],
  },
  {
    id: 11,
    name: "Product 11",
    currentPrice: 95,
    image: "/images/product11.jpg",
    title: "Women’s winter jacket",
    oldPrice: "120.00",
    stock: 7,
    filters: [
      { filterName: "brand", value: "Brand K" },
      { filterName: "storage", value: "128GB" },
      { filterName: "stock", value: "low stock" },
    ],
  },
  {
    id: 12,
    name: "Product 12",
    currentPrice: 130,
    image: "/images/product110.jpg",
    title: "Men’s casual pants",
    oldPrice: "150.00",
    stock: 11,
    filters: [
      { filterName: "brand", value: "Brand L" },
      { filterName: "storage", value: "64GB" },
      { filterName: "stock", value: "in stock" },
    ],
  },
  {
    id: 13,
    name: "Product 13",
    currentPrice: 85,
    image: "/images/product9.jpg",
    title: "Women’s summer skirt",
    oldPrice: "100.00",
    stock: 16,
    filters: [
      { filterName: "brand", value: "Brand M" },
      { filterName: "storage", value: "32GB" },
      { filterName: "stock", value: "in stock" },
    ],
  },
  {
    id: 14,
    name: "Product 14",
    currentPrice: 220,
    image: "/images/product6.jpg",
    title: "Men’s leather shoes",
    oldPrice: "250.00",
    stock: 4,
    filters: [
      { filterName: "brand", value: "Brand a" },
      { filterName: "storage", value: "512GB" },
      { filterName: "stock", value: "low stock" },
    ],
  },
  {
    id: 15,
    name: "Product 15",
    currentPrice: 160,
    image: "/images/product8.jpg",
    title: "Women’s winter boots",
    oldPrice: "180.00",
    stock: 13,
    filters: [
      { filterName: "brand", value: "Brand a" },
      { filterName: "storage", value: "128GB" },
      { filterName: "stock", value: "in stock" },
    ],
  },
  {
    id: 16,
    name: "Product 16",
    currentPrice: 75,
    image: "/images/product10.jpg",
    title: "Men’s casual shoes",
    oldPrice: "90.00",
    stock: 19,
    filters: [
      { filterName: "brand", value: "Brand a" },
      { filterName: "storage", value: "64GB" },
      { filterName: "stock", value: "in stock" },
    ],
  },
  {
    id: 17,
    name: "Product 17",
    currentPrice: 140,
    image: "/images/product7.jpg",
    title: "Women’s formal dress",
    oldPrice: "160.00",
    stock: 10,
    filters: [
      { filterName: "brand", value: "Brand Q" },
      { filterName: "storage", value: "256GB" },
      { filterName: "stock", value: "in stock" },
    ],
  },
  {
    id: 18,
    name: "Product 18",
    currentPrice: 95,
    image: "/images/product8.jpg",
    title: "Men’s winter gloves",
    oldPrice: "110.00",
    stock: 17,
    filters: [
      { filterName: "brand", value: "Brand R" },
      { filterName: "storage", value: "32GB" },
      { filterName: "stock", value: "in stock" },
    ],
  },
  {
    id: 19,
    name: "Product 19",
    currentPrice: 200,
    image: "/images/product9.jpg",
    title: "Women’s summer hat",
    oldPrice: "220.00",
    stock: 8,
    filters: [
      { filterName: "brand", value: "Brand S" },
      { filterName: "storage", value: "128GB" },
      { filterName: "stock", value: "low stock" },
    ],
  },
  {
    id: 20,
    name: "Product 20",
    currentPrice: 110,
    image: "/images/product10.jpg",
    title: "Men’s casual hat",
    oldPrice: "130.00",
    stock: 14,
    filters: [
      { filterName: "brand", value: "Brand T" },
      { filterName: "storage", value: "64GB" },
      { filterName: "stock", value: "in stock" },
    ],
  },
];

export default async function ShopPage() {
  return (
    <main className="space-y-6">
      <SectionHeader title={"TrustNest Shop"} linkName={"shop"} />
      <DynamicProductDisplay products={products} />
    </main>
  );
}
