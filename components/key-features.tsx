import Image from "next/image";
import SectionLabel from "./section-label";
import { CheckCircle2 } from "lucide-react";

export default function KeyFeatures() {
  const features = [
    {
      title: "Schedule Your Site Visits",
      description:
        "Get regular updates of your open lands, under-construction properties to stay informed about the local developments",
      imagePath: "/assets/key-feature-1.svg",
    },
    {
      title: "Dashboard To Keep Track",
      description:
        "Track and manage your assets in a single dashboard with Photo Documentation",
      imagePath: "/assets/key-feature-2.svg",
    },
    {
      title: "Cost Effective",
      description:
        "Reduces burden and time for owners to monitor multiple sites at the comfort of home",
      imagePath: "/assets/key-feature-3.svg",
    },
    {
      title: "Zero Hurdle",
      description:
        "Simple and straightforward process -- completely autonomous and online.",
      imagePath: "/assets/key-feature-4.svg",
    },
  ];

  return (
    <section
      id="features"
      className="w-full bg-[#1a1d1f] text-[#FFFDFD] py-8 md:py-16 px-4 md:px-40"
    >
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex justify-center mb-8 md:mb-12">
          <SectionLabel text="Key Features" />
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex flex-col items-center justify-center text-center p-6 md:p-16 aspect-square bg-coral rounded-lg hover:bg-opacity-90 transition-all duration-300">
              <Image
                src={features[0].imagePath}
                alt={features[0].title}
                width={200}
                height={100}
                className="mb-4 md:mb-6 w-[40%] md:w-[50%] h-auto"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-white">
                {features[0].title}
              </h3>
              <p className="text-sm md:text-base text-white/90 mb-4">{features[0].description}</p>
              <div className="flex gap-4 items-center justify-center">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-lime" />
                  <span className="text-sm text-white">Weekly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-lime" />
                  <span className="text-sm text-white">Monthly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-lime" />
                  <span className="text-sm text-white">Quarterly</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-6 md:p-16 h-[250px] md:h-[300px] bg-coral rounded-lg hover:bg-opacity-90 transition-all duration-300">
              <Image
                src={features[2].imagePath}
                alt={features[2].title}
                width={80}
                height={80}
                className="mb-4 md:mb-6 w-[15%] md:w-[20%] h-auto"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-white">
                {features[2].title}
              </h3>
              <p className="text-sm md:text-base text-white/90">{features[2].description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex flex-col items-center justify-center text-center p-6 md:p-16 h-[250px] md:h-[300px] bg-coral rounded-lg hover:bg-opacity-90 transition-all duration-300">
              <Image
                src={features[1].imagePath}
                alt={features[1].title}
                width={80}
                height={80}
                className="mb-4 md:mb-6 w-[30%] md:w-[40%] h-auto"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-white">
                {features[1].title}
              </h3>
              <p className="text-sm md:text-base text-white/90">{features[1].description}</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-6 md:p-16 aspect-square bg-coral rounded-lg hover:bg-opacity-90 transition-all duration-300">
              <Image
                src={features[3].imagePath}
                alt={features[3].title}
                width={80}
                height={80}
                className="mb-4 md:mb-6 w-[25%] md:w-[30%] h-auto"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-white">
                {features[3].title}
              </h3>
              <p className="text-sm md:text-base text-white/90">{features[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
