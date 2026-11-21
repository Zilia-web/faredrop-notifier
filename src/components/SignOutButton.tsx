import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

export function SignOutButton() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);

  async function handleSignOut() {
    setPending(true);
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/signin", replace: true });
  }

  return (
    <Button variant="glass" size="sm" onClick={handleSignOut} disabled={pending}>
      <LogOut aria-hidden="true" />
      Sign out / 登出
    </Button>
  );
}
