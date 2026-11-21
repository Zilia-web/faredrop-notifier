import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BellRing, CircleOff, Radar } from "lucide-react";

import { FareAlertPreview } from "@/components/FareAlertPreview";
import { FeatureCard } from "@/components/FeatureCard";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";

const TITLE = "Flight Price Notifier — 機票降價通知";
const DESCRIPTION =
  "設定航線與目標價，機票降價就通知你。Set a route and a target price — we email you when the fare drops.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FEATURES = [
  {
    icon: Radar,
    title: "盯緊熱門航線 (Always-on route watching)",
    description: "持續監控台北出發的熱門航線（東京、首爾），自動抓最低票價。",
  },
  {
    icon: BellRing,
    title: "達標自動通知 (Target-price email alerts)",
    description: "低於你設定的目標價，就寄 email 提醒你，附上立即訂購連結。",
  },
  {
    icon: CircleOff,
    title: "隨時取消 (Cancel anytime)",
    description: "月訂閱制，不想用隨時停，沒有綁約。",
  },
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-hero relative overflow-hidden">
          <div className="bg-grid pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28 lg:grid-cols-[1.15fr_1fr]">
            <div className="animate-in fade-in slide-in-from-bottom-4 text-center duration-700 lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent/60 px-3 py-1 text-xs font-medium text-accent-foreground">
                <span className="size-1.5 rounded-full bg-success" />
                台北出發 · 東京 · 首爾
              </span>
              <h1 className="text-gradient mt-6 text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl">
                Flight Price Notifier
              </h1>
              <p className="mt-6 text-xl font-medium text-foreground sm:text-2xl">
                設定航線與目標價，機票降價就通知你
              </p>
              <p className="mx-auto mt-3 max-w-lg text-base text-muted-foreground lg:mx-0">
                Set a route and a target price — we email you when the fare drops.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Button asChild variant="hero" size="xl">
                  <Link to="/signup">
                    Get started / 立即開始
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="xl">
                  <Link to="/signin">Sign in / 登入</Link>
                </Button>
              </div>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-6 delay-150 duration-1000 fill-mode-both">
              <FareAlertPreview />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium tracking-wide text-primary-glow uppercase">Features</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              不在乎哪天飛，只在乎價格
            </h2>
            <p className="mt-3 text-muted-foreground">
              Built for budget-first travelers — tell us your price, we'll do the watching.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <Reveal key={feature.title} delayMs={index * 120} className="h-full">
                <FeatureCard {...feature} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
