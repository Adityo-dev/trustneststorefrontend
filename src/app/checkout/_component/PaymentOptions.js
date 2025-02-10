import { useState } from "react";
import Image from "next/image";

const paymentMethods = [
  {
    id: "1",
    type: "MasterCard",
    lastDigits: "014*****326",
    icon: "/logo/bkash-logo.png",
  },
  {
    id: "2",
    type: "PayPal",
    lastDigits: "014*****326",
    icon: "/logo/nogad-logo.png",
  },
];

export default function PaymentOptions() {
  const [selected, setSelected] = useState(paymentMethods[0].id);

  return (
    <section>
      <h2 className="text-lg font-semibold">Payment Options</h2>

      <div className="mt-6 space-y-4 p-6 rounded-lg bg-[#E5F7FF]">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center justify-between border-b last:border-0 cursor-pointer"
            onClick={() => setSelected(method.id)}
          >
            <div className="flex items-center gap-4 pb-4">
              <div className="w-20 h-14 p-3 bg-white rounded-lg">
                <Image
                  width={400}
                  height={400}
                  src={method.icon}
                  alt={method.type}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-medium">{method.lastDigits}</span>
            </div>
            <input
              type="radio"
              name="payment"
              checked={selected === method.id}
              onChange={() => setSelected(method.id)}
              className="form-radio text-blue-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
