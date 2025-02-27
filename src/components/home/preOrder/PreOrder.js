import { ImagePlus } from "lucide-react";
import Image from "next/image";

const inputFieldStyles =
  "w-full h-12 rounded-md outline-none p-3 sm:p-4 text-sm bg-white text-gray-600 border focus:border-primary transition-all duration-300";

function PreOrder() {
  return (
    <section className="container mx-auto px-4">
      <div className="w-full sm:max-h-[600px] h-full bg-[#B2E4DB] rounded-md relative flex flex-col lg:flex-row overflow-hidden sm:pt-6">
        {/* Image Section (Always Visible) */}
        <div className="w-full lg:w-[35%] flex justify-center items-end">
          <Image
            src="/images/preOrder.png"
            width={400}
            height={400}
            alt="Pre Order"
            className="w-auto h-auto object-contain hidden lg:block"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-[65%] py-6 px-3 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-start text-[#38311F] font-semibold mb-6 ">
            Pre-Order Your Favorite <br /> Product Now
          </h2>

          <form className="space-y-2 lg:space-y-4">
            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={inputFieldStyles}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={inputFieldStyles}
              />
              <input
                type="text"
                name="number"
                placeholder="Your Phone Number"
                className={inputFieldStyles}
              />
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className={inputFieldStyles}
              />
            </div>

            {/* Textarea */}
            <textarea
              name="productDetails"
              rows="4"
              className="w-full p-3 sm:p-4 text-sm rounded-md outline-none border focus:border-primary transition-all duration-300"
              placeholder="Enter Your Product Details"
            />

            {/* File Upload & Product Link */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
              {/* File Upload Section */}
              <div className="relative flex items-center border border-gray-300 bg-[#E5E5E5] rounded-md h-12 overflow-hidden">
                {/* Icon Section */}
                <div className="w-[20%] h-full flex items-center justify-center bg-[#D8D8D8]">
                  <ImagePlus
                    size={24}
                    strokeWidth={1.75}
                    className="text-gray-500"
                  />
                </div>
                {/* Input Section */}
                <div className="w-[80%] px-4 text-sm text-gray-600">
                  <label htmlFor="file" className="cursor-pointer block">
                    No Image Added
                  </label>
                  <input type="file" id="file" name="file" className="hidden" />
                </div>
              </div>

              <input
                type="text"
                name="link"
                placeholder="Add Product Link"
                className={inputFieldStyles}
              />
            </div>

            {/* Submit Button */}
            <button className="sm:max-w-[250px] w-full h-11 mx-auto lg:mx-0 flex items-center justify-center rounded-md bg-gradient-primary text-white font-semibold shadow-md hover:opacity-90 transition-all">
              Order Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PreOrder;
