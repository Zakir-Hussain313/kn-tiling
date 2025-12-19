import { FaCheckCircle } from "react-icons/fa";

const reasons = [
  {
    title: "15+ Years Experience",
    desc: "Decades of hands-on tiling expertise across residential and commercial projects.",
  },
  {
    title: "Quality Craftsmanship",
    desc: "We deliver precision workmanship using premium materials and proven techniques.",
  },
  {
    title: "Fully Licensed & Insured",
    desc: "Peace of mind knowing your project is protected and compliant.",
  },
  {
    title: "On-Time & Reliable",
    desc: "We respect your time and always deliver projects as promised.",
  },
  {
    title: "Competitive Pricing",
    desc: "High-quality tiling services at fair and transparent prices.",
  },
  {
    title: "Customer Satisfaction",
    desc: "95% happy clients with repeat business across Sydney.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#e9f6ef] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#20244d]">
            Why Choose Us
          </h2>
          <p className="text-gray-700 mt-1">
            Trusted Tiling Experts Across Sydney
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-[#fffaf6] border border-gray-300 shadow-sm hover:shadow-md transition p-6"
            >
              {/* Icon */}
              <FaCheckCircle className="text-[#1a300d] text-3xl mb-4" />

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
