import { Link } from "@tanstack/react-router";
import { Plane } from "lucide-react";

export function BrandMark() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="bg-gradient-primary shadow-glow flex size-8 items-center justify-center rounded-lg text-primary-foreground transition-transform group-hover:-rotate-6">
        <Plane className="size-4" aria-hidden="true" />
      </span>
      <span className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
        Flight Price Notifier
      </span>
    </Link>
  );
}
