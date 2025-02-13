//Deal Of The Day DATA

import CouponCart from "@/components/couponCart/CouponCart";

const dealOfTheDayData = [
  {
    image: "/images/product5.jpg",
    title: "August Gift Voucher",
    off: "10",
    hours: "20",
    coupon: "TRUST230",
    active: true,
  },
  {
    image: "/images/product6.jpg",
    title: "August Gift Voucher",
    off: "20",
    hours: "20",
    coupon: "TRUNEST200",
    active: true,
  },
  {
    image: "/images/product7.jpg",
    title: "August Gift Voucher",
    off: "5",
    hours: "20",
    coupon: "TRUST2600",
    active: true,
  },
  {
    image: "/images/products3.png",
    title: "August Gift Voucher",
    off: "30",
    hours: "20",
    coupon: "TRUST230",
    active: true,
  },
  {
    image: "/images/products1.png",
    title: "August Gift Voucher",
    off: "50",
    hours: "20",
    coupon: "TRUST230",
    active: true,
  },
  {
    image: "/images/products2.png",
    title: "August Gift Voucher",
    off: "15",
    hours: "20",
    coupon: "TRUST230",
    active: false,
  },
];

function DealOfTheDay() {
  return (
    <main className="container mx-auto px-4 space-y-5 sm:space-y-7">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl">Deal Of The Day</h2>
      {/* COUPON CART COMPONENTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-5 xl:gap-6">
        {dealOfTheDayData.map((dealData, ind) => (
          <CouponCart key={ind} product={dealData} />
        ))}
      </div>
    </main>
  );
}

export default DealOfTheDay;
