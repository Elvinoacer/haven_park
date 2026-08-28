import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { TrustBar } from "@/components/site/trust-bar";
import { Services } from "@/components/site/services";
import { Vernacular } from "@/components/site/vernacular";
import { Emergency } from "@/components/site/emergency";
import { Prep } from "@/components/site/prep";
import { About } from "@/components/site/about";
import { Booking } from "@/components/site/booking";
import { Location } from "@/components/site/location";
import { Faq } from "@/components/site/faq";
import { SiteFooter } from "@/components/site/site-footer";
import { FloatingBar } from "@/components/site/floating-bar";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pb-[5.5rem] sm:pb-0">
        <Hero />
        <TrustBar />
        <Services />
        <Vernacular />
        <Emergency />
        <Prep />
        <About />
        <Booking />
        <Location />
        <Faq />
      </main>
      <SiteFooter />
      <FloatingBar />
    </>
  );
}
