import { createFileRoute } from "@tanstack/react-router";

import { AuthForm } from "@/components/AuthForm";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign in — Flight Price Notifier" },
      { name: "description", content: "登入 Flight Price Notifier，查看你的機票降價追蹤。" },
      { property: "og:title", content: "Sign in — Flight Price Notifier" },
      { property: "og:description", content: "登入 Flight Price Notifier，查看你的機票降價追蹤。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SignInPage,
});

function SignInPage() {
  return <AuthForm mode="signin" />;
}
