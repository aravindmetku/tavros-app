import Image from 'next/image';
import SectionLabel from './section-label';

export default function KeyFeatures() {
  const features = [
    {
      title: 'Schedule for Latest Site Visits',
      description: 'Book a latest video tour of your property at your convenience.'
    },
    {
      title: 'Dashboard To Keep Track',
      description: 'Monitor all your property insights and updates in one centralized dashboard.'
    },
    {
      title: 'Cost Effective',
      description: 'Get comprehensive property monitoring services at competitive prices.'
    },
    {
      title: 'Zero Hurdle',
      description: 'Simple and straightforward process -- completely autonomous and online.'
    }
  ];

  return (
    <section id="features" className="w-full bg-[#1a1d1f] text-[#FFFDFD] py-16 px-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <SectionLabel text="Key Features" />
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex flex-col items-center justify-center text-center p-16 aspect-square bg-[#ff7044] rounded-lg hover:bg-opacity-90 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-white">{features[0].title}</h3>
              <p className="text-white/90">{features[0].description}</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-16 h-[300px] bg-[#ff7044] rounded-lg hover:bg-opacity-90 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-white">{features[2].title}</h3>
              <p className="text-white/90">{features[2].description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex flex-col items-center justify-center text-center p-16 h-[300px] bg-[#ff7044] rounded-lg hover:bg-opacity-90 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-white">{features[1].title}</h3>
              <p className="text-white/90">{features[1].description}</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-16 aspect-square bg-[#ff7044] rounded-lg hover:bg-opacity-90 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-white">{features[3].title}</h3>
              <p className="text-white/90">{features[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}