import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import { useSession } from "@/hooks/useSession";

export function SiteHeader() {
  const { session } = useSession();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <BrandMark />
        {session ? (
          <Button asChild variant="hero" size="sm">
            <Link to="/app">
              Dashboard / 儀表板
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        ) : (
          <Button asChild variant="hero" size="sm">
            <Link to="/signin">Sign in / 登入</Link>
          </Button>
        )}
      </div>
    </header>
  );
}
