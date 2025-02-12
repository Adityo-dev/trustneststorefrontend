import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CopyRight from "./CopyRight";
import ContactInfo from "./ContactInfo";
import Newsletter from "@/components/newsletter/Newsletter";

const footerData = [
  {
    title: "Information",
    info: [
      { name: "Custom Service", url: "#" },
      { name: "Order Tracking", url: "#" },
      { name: "Contacts", url: "#" },
      { name: "Events", url: "#" },
      { name: "About Us", url: "#" },
    ],
  },
  {
    title: "Quick Links",
    info: [
      { name: "Support Center", url: "#" },
      { name: "Terms & Condition", url: "#" },
      { name: "Shipping", url: "#" },
      { name: "Privacy Policy", url: "#" },
      { name: "Products Returns", url: "#" },
    ],
  },
  {
    title: "About Us",
    info: [
      { name: "Support Center", url: "#" },
      { name: "Terms & Condition", url: "#" },
      { name: "Shipping", url: "#" },
      { name: "Privacy Policy", url: "#" },
      { name: "Products Returns", url: "#" },
    ],
  },
];

// SOCIAL MEDIA DATA
const socialMediaData = [
  {
    icon: <Facebook size={20} strokeWidth={1.5} />,
    url: "https://www.facebook.com/TrustNestStore",
  },
  { icon: <Twitter size={20} strokeWidth={1.5} />, url: "" },
  { icon: <Instagram size={20} strokeWidth={1.5} />, url: "" },
];

function Footer() {
  return (
    <main className="w-full mt-12 sm:mt-80 pt-12 sm:pt-40 pb-10 bg-[#152327] text-white relative">
      {/* NEWS LETTER COMPONENTS */}
      <section className="relative container mx-auto px-4">
        <div className="w-full absolute -top-72 hidden sm:block">
          <Newsletter />
        </div>
      </section>

      <section className="container mx-auto px-4 flex flex-col sm:grid grid-cols-12 gap-10 sm:gap-20 ">
        <div className="col-span-4">
          {/* LOGO AND SUBTITLE */}
          <Image
            src={"/logo/trustNestStore.png"}
            width={400}
            height={400}
            alt="trust nest store logo"
            className="max-w-40 w-full"
          />
          <p className="mt-4 sm:mt-7 text-[#ACB5BD] leading-6 sm:leading-7 text-sm sm:text-base">
            Elegant pink origami design three-dimensional view and decoration
            co-exist. Great for adding a decorative touch to any room’s decor.
          </p>
          {/* SOCIAL MEDIA */}
          <div className="flex items-center gap-2 sm:gap-4 mt-4 sm:mt-7">
            {socialMediaData.map((media, ind) => (
              <Link
                href={media?.url}
                key={ind}
                className="w-8 sm:w-10 h-8 sm:h-10 bg-[#203342] flex items-center justify-center rounded-full p-2"
              >
                {media?.icon}
              </Link>
            ))}
          </div>
        </div>
        {/* FOOTER MENU LINK */}
        <div className="col-span-8 flex flex-col sm:flex-row justify-between gap-7">
          {footerData.map((footer, ind) => (
            <div key={ind}>
              <h3 className="sm:text-lg">{footer?.title}</h3>
              <div className="flex flex-col mt-3 sm:mt-7 gap-2 sm:gap-3 text-[#ACB5BD]">
                {footer?.info.map((data, ind) => (
                  <Link
                    href={data?.url}
                    key={ind}
                    className="text-sm sm:text-base"
                  >
                    {data?.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CONTACT INFO */}
      <div className=" mt-12 sm:mt-20 mb-8 sm:mb-16">
        <ContactInfo />
      </div>
      {/* COPY RIGHT SECTION */}
      <CopyRight />
    </main>
  );
}

export default Footer;
