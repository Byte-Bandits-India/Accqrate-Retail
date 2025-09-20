import Hero from "@/components/Hero";
import Onboard from "@/components/Onboard";
import AccountReceivables from "@/components/Receivabales";
import AccountSections from "@/components/Financial";
import AutomationSection from "@/components/Automatic";
export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Onboard />
      <AccountReceivables />
      <AccountSections />
      <AutomationSection />
    </main>
  );
}
