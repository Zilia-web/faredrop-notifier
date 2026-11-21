import { ArrowDownRight, Mail } from "lucide-react";

// Decorative illustration of an alert email. Sample values only.
export function FareAlertPreview() {
  return (
    <div className="animate-float-soft relative mx-auto w-full max-w-md">
      <div className="bg-gradient-primary absolute -inset-6 rounded-[2rem] opacity-25 blur-3xl" />
      <div className="shadow-card relative rounded-2xl border border-border bg-card/90 p-5 backdrop-blur sm:p-6">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <span className="bg-gradient-primary flex size-9 items-center justify-center rounded-lg text-primary-foreground">
            <Mail className="size-4" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-foreground">機票降價了！TPE → NRT</p>
            <p className="text-xs text-muted-foreground">Flight Price Notifier · 剛剛</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-4">
          <div className="rounded-xl border border-border bg-muted p-3">
            <p className="text-xs text-muted-foreground">目標價 Target</p>
            <p className="mt-1 text-lg font-semibold text-foreground">NT$6,000</p>
          </div>
          <div className="rounded-xl border border-primary/40 bg-accent p-3">
            <p className="text-xs text-accent-foreground/80">最低價 Lowest</p>
            <p className="mt-1 flex items-center gap-1 text-lg font-semibold text-success">
              NT$5,480
              <ArrowDownRight className="size-4" aria-hidden="true" />
            </p>
          </div>
        </div>
        <div className="bg-gradient-primary mt-4 rounded-lg py-2.5 text-center text-sm font-medium text-primary-foreground">
          立即訂購 Book now
        </div>
      </div>
    </div>
  );
}
