import { ArrowDownToLine, ArrowUpFromLine } from "lucide-react";
import { shipments } from "@/lib/data";

const statusClasses: Record<string, string> = {
  Scheduled: "text-slate-700 bg-slate-100",
  "In Transit": "text-blue-700 bg-blue-50",
  Delivered: "text-emerald-700 bg-emerald-50",
  Delayed: "text-red-700 bg-red-50",
};

export default function ShipmentsPanel() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900">Recent Shipments</h3>
      <p className="text-xs text-slate-500">Inbound and outbound activity</p>
      <ul className="mt-4 space-y-3">
        {shipments.map((s) => (
          <li key={s.id} className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 p-3">
            <div className="flex items-center gap-3">
              <div className={`rounded-md p-2 ${s.type === "Inbound" ? "bg-blue-50" : "bg-orange-50"}`}>
                {s.type === "Inbound" ? (
                  <ArrowDownToLine className="h-4 w-4 text-blue-600" />
                ) : (
                  <ArrowUpFromLine className="h-4 w-4 text-orange-600" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">{s.ref} · {s.partner}</p>
                <p className="text-xs text-slate-500">{s.items} items · {s.date}</p>
              </div>
            </div>
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusClasses[s.status]}`}>
              {s.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
