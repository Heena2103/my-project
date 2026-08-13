import { ArrowDownToLine, ArrowUpFromLine } from "lucide-react";
import { shipments } from "@/lib/data";

export default function ShipmentsPanel() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900">Recent Stock Movements</h3>
      <p className="text-xs text-slate-500">Latest received and sent activity</p>
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
                <p className="text-sm font-medium text-slate-900">{s.item}</p>
                <p className="text-xs text-slate-500">
                  {s.quantity} units · {s.date}
                  {s.note ? ` · ${s.note}` : ""}
                </p>
              </div>
            </div>
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${s.type === "Inbound" ? "text-blue-700 bg-blue-50" : "text-orange-700 bg-orange-50"}`}>
              {s.type}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
