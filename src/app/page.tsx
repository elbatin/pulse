import { CinematicHero } from "@/components/ui/cinematic-landing-hero";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full min-h-screen">
      <CinematicHero
        brandName="PULSE"
        tagline1="See your business"
        tagline2="breathe."
        cardHeading="Data that actually makes sense."
        cardDescription={
          <>
            Pulse turns your raw numbers into real decisions. Track revenue,
            users, and conversions in real time — all in one beautiful dashboard
            built for founders who move fast.
          </>
        }
        metricValue={98}
        metricLabel="Uptime Score"
        ctaHeading="Start seeing clearly."
        ctaDescription="No setup fees. No lock-in. Just clarity."
      />
    </div>
  );
}