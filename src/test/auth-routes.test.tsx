import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

function leafRouteId(path: string) {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  return router.matchRoutes(path).at(-1)?.routeId;
}

describe("Auth routes", () => {
  it("serves the dashboard at /app behind the sign-in gate", () => {
    expect(leafRouteId("/app")).toBe("/_authenticated/app");
  });

  it("has public sign-in and sign-up pages", () => {
    expect(leafRouteId("/signin")).toBe("/signin");
    expect(leafRouteId("/signup")).toBe("/signup");
  });
});
