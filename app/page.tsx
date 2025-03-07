import Hero from "@/components/hero";
import KeyFeatures from "@/components/key-features";
import UseCases from "@/components/use-cases";
import HowItWorks from "@/components/how-it-works";

export default async function Home() {
  return (
    <>
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <UseCases />
    </>
  );
}
