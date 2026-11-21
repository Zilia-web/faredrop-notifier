import { createFileRoute } from "@tanstack/react-router";
import { Radar } from "lucide-react";

import { BrandMark } from "@/components/BrandMark";
import { SignOutButton } from "@/components/SignOutButton";

export const Route = createFileRoute("/_authenticated/app")({
  head: () => ({
    meta: [
      { title: "Dashboard — Flight Price Notifier" },
      { name: "description", content: "你的機票降價追蹤儀表板。" },
      { property: "og:title", content: "Dashboard — Flight Price Notifier" },
      { property: "og:description", content: "你的機票降價追蹤儀表板。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AppDashboard,
});

function AppDashboard() {
  const { user } = Route.useRouteContext();

  return (
    <div className="bg-hero flex min-h-screen flex-col">
      <header className="border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <BrandMark />
          <SignOutButton />
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-3xl font-semibold tracking-tight break-all text-foreground sm:text-4xl">
            Hi {user.email}
          </h1>

          <section className="shadow-card mt-8 flex flex-col items-start gap-5 rounded-2xl border border-border bg-card/80 p-6 backdrop-blur sm:flex-row sm:items-center sm:p-8">
            <span className="bg-gradient-primary shadow-glow flex size-12 shrink-0 items-center justify-center rounded-xl text-primary-foreground">
              <Radar className="size-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-base font-medium text-foreground sm:text-lg">
                你的航線追蹤儀表板即將上線 — 下一個里程碑會加上訂閱航線的功能。
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Your dashboard is coming soon. Route-subscription will be added in the next
                milestone.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
