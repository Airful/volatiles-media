import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveLightArt from "@/components/InteractiveLightArt";
import ArtSurfaces from "@/components/ArtSurfaces";
import TechnologySection from "@/components/TechnologySection";
import Testimonial from "@/components/Testimonial";
import SpacesTransformed from "@/components/SpacesTransformed";
import WhyPartner from "@/components/WhyPartner";
import TeamSection from "@/components/TeamSection";
import ConsultationForm from "@/components/ConsultationForm";

export default function Home() {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <InteractiveLightArt />
      <ArtSurfaces />
      <TechnologySection />
      <Testimonial />
      <SpacesTransformed />
      <WhyPartner />
      <TeamSection />
      <ConsultationForm />
    </main>
  );
}
