import { createContext, useContext } from "react";
import type { Session } from "@supabase/supabase-js";

export interface SessionState {
  session: Session | null;
  ready: boolean;
}

// Fed by the single onAuthStateChange listener in src/routes/__root.tsx.
export const SessionContext = createContext<SessionState>({ session: null, ready: false });

export function useSession(): SessionState {
  return useContext(SessionContext);
}
