export default function Hero() {
  return (
    <div className="w-full bg-[#1a1d1f] text-[#FFFDFD]">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-5xl font-bold leading-tight">
            Stay Informed.<br />
            Stay Ahead of Risks
          </h1>
          <p className="text-lg text-[#e8e9e4]">
            We make your property visits on your behalf
          </p>
          <div className="flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white w-64"
            />
            <button className="bg-[#e0fa60] text-[#1a1d1f] px-6 py-3 rounded-lg font-medium hover:bg-opacity-90">
              Avail early bird offer
            </button>
          </div>
          <ul className="space-y-3 text-[#e8e9e4]">
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#e0fa60]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Get latest insights, Anywhere from the world</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#e0fa60]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Cost effective site visit, Avoid hastle of travelling!</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#e0fa60]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>100% private & secure</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-full h-[500px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover rounded-lg w-full h-full"
            >
              <source src="/assets/hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
