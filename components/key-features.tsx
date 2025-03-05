import Image from 'next/image';
import SectionLabel from './section-label';

export default function KeyFeatures() {
  const features = [
    {
      title: 'Schedule Your Site Visits',
      description: 'Get regular updates of your open lands, under-construction properties to stay informed about the local developments',
      imagePath: '/assets/key-feature-1.svg'
    },
    {
      title: 'Dashboard To Keep Track',
      description: 'Track and manage your assets in a single dashboard with Photo Documentation',
      imagePath: '/assets/key-feature-2.svg'
    },
    {
      title: 'Cost Effective',
      description: 'Reduces burden and time for owners to monitor multiple sites at the comfort of home',
      imagePath: '/assets/key-feature-3.svg'
    },
    {
      title: 'Zero Hurdle',
      description: 'Simple and straightforward process -- completely autonomous and online.',
      imagePath: '/assets/key-feature-4.svg'
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
            <div className="flex flex-col items-center justify-center text-center p-16 aspect-square bg-[#c06d4f] rounded-lg hover:bg-opacity-90 transition-all duration-300">
              <Image src={features[0].imagePath} alt={features[0].title} width={200} height={100} className="mb-6 w-[50%] h-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-white">{features[0].title}</h3>
              <p className="text-white/90">{features[0].description}</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-16 h-[300px] bg-[#c06d4f] rounded-lg hover:bg-opacity-90 transition-all duration-300">
              <Image src={features[2].imagePath} alt={features[2].title} width={80} height={80} className="mb-6 w-[20%] h-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-white">{features[2].title}</h3>
              <p className="text-white/90">{features[2].description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex flex-col items-center justify-center text-center p-16 h-[300px] bg-[#c06d4f] rounded-lg hover:bg-opacity-90 transition-all duration-300">
              <Image src={features[1].imagePath} alt={features[1].title} width={80} height={80} className="mb-6 w-[40%] h-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-white">{features[1].title}</h3>
              <p className="text-white/90">{features[1].description}</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-16 aspect-square bg-[#c06d4f] rounded-lg hover:bg-opacity-90 transition-all duration-300">
              <Image src={features[3].imagePath} alt={features[3].title} width={80} height={80} className="mb-6 w-[30%] h-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-white">{features[3].title}</h3>
              <p className="text-white/90">{features[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}