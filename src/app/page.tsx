import { HeroSection } from '@/components/sections/HeroSection';
import { PortalSelector } from '@/components/sections/PortalSelector';
import { FeatureGrid } from '@/components/sections/FeatureGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <HeroSection 
          title="kwosk-healthcare-patient-portal-1754191177543"
          description="Secure patient management system with appointment scheduling, medical records, prescription tracking, and communication features. Compliant with healthcare regulations."
        />
        <PortalSelector />
        <FeatureGrid />
      </div>
    </main>
  );
}