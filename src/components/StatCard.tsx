import { LucideIcon } from "lucide-react";

type Props = {
  label: string;
  value: string;
  delta?: string;
  deltaTone?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
};

const toneClasses: Record<NonNullable<Props["deltaTone"]>, string> = {
  positive: "text-emerald-600 bg-emerald-50",
  negative: "text-red-600 bg-red-50",
  neutral: "text-slate-600 bg-slate-100",
};

export default function StatCard({ label, value, delta, deltaTone = "neutral", icon: Icon }: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
        </div>
        <div className="rounded-lg bg-slate-100 p-2">
          <Icon className="h-5 w-5 text-slate-600" />
        </div>
      </div>
      {delta && (
        <span className={`mt-3 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${toneClasses[deltaTone]}`}>
          {delta}
        </span>
      )}
    </div>
  );
}
