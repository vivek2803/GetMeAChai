import HomePage from "@/components/HomePage";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <>
      <SpeedInsights/>
      <Analytics/>
      <HomePage />
    </>
  );
}
