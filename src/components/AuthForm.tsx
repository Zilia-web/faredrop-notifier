import { useEffect, useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";

import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/hooks/useSession";

interface AuthFormProps {
  mode: "signin" | "signup";
}

export function AuthForm({ mode }: AuthFormProps) {
  const navigate = useNavigate();
  const { session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const isSignUp = mode === "signup";

  // Already signed in: skip the form.
  useEffect(() => {
    if (session) navigate({ to: "/app", replace: true });
  }, [session, navigate]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setNotice(null);
    setLoading(true);
    try {
      if (isSignUp) {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (signUpError) throw signUpError;
        if (data.session) {
          navigate({ to: "/app", replace: true });
        } else {
          setNotice("請到信箱點擊確認連結後再登入。Check your email to confirm your account.");
        }
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
        navigate({ to: "/app", replace: true });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-hero relative flex min-h-screen flex-col">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto flex h-16 w-full max-w-6xl items-center px-4 sm:px-6">
        <BrandMark />
      </div>
      <main className="relative flex flex-1 items-center justify-center px-4 py-12">
        <div className="animate-in fade-in slide-in-from-bottom-4 w-full max-w-sm duration-700">
          <div className="shadow-card rounded-2xl border border-border bg-card/80 p-6 backdrop-blur sm:p-8">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              {isSignUp ? "Create account / 註冊" : "Sign in / 登入"}
            </h1>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {isSignUp
                ? "建立帳號，開始追蹤你的機票目標價。"
                : "歡迎回來，登入查看你的航線追蹤。"}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password / 密碼</Label>
                <Input
                  id="password"
                  type="password"
                  autoComplete={isSignUp ? "new-password" : "current-password"}
                  placeholder={isSignUp ? "At least 6 characters" : "••••••••"}
                  minLength={6}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11"
                />
              </div>

              {error && (
                <p role="alert" className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                  {error}
                </p>
              )}
              {notice && (
                <p role="status" className="rounded-lg border border-primary/40 bg-accent px-3 py-2 text-sm text-accent-foreground">
                  {notice}
                </p>
              )}

              <Button type="submit" variant="hero" size="xl" className="w-full" disabled={loading}>
                {loading && <Loader2 className="animate-spin" aria-hidden="true" />}
                {isSignUp ? "Sign up / 註冊" : "Sign in / 登入"}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              {isSignUp ? "已經有帳號？" : "還沒有帳號？"}{" "}
              {isSignUp ? (
                <Link to="/signin" className="font-medium text-primary-glow hover:underline">
                  Sign in / 登入
                </Link>
              ) : (
                <Link to="/signup" className="font-medium text-primary-glow hover:underline">
                  Sign up / 註冊
                </Link>
              )}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
