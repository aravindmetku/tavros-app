import Image from 'next/image';
import SectionLabel from './section-label';

export default function KeyFeatures() {
  const features = [
    {
      title: 'Schedule for Live On-Site Video',
      description: 'Book a live video tour of your property with our expert team at your convenience.'
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
      description: 'Simple and straightforward process with no complicated setup required.'
    }
  ];

  return (
    <section id="features" className="w-full bg-[#1a1d1f] text-[#FFFDFD] py-16 px-60">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <SectionLabel text="Key Features" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center text-center p-8 bg-[#ff7044] rounded-lg hover:bg-opacity-90 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-white">{features[0].title}</h3>
            <p className="text-white/90">{features[0].description}</p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-[#ff7044] rounded-lg hover:bg-opacity-90 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-white">{features[1].title}</h3>
            <p className="text-white/90">{features[1].description}</p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-[#ff7044] rounded-lg hover:bg-opacity-90 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-white">{features[2].title}</h3>
            <p className="text-white/90">{features[2].description}</p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-[#ff7044] rounded-lg hover:bg-opacity-90 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-white">{features[3].title}</h3>
            <p className="text-white/90">{features[3].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}