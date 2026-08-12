import { inventory } from "@/lib/data";

const statusClasses: Record<string, string> = {
  "In Stock": "text-emerald-700 bg-emerald-50 ring-emerald-200",
  "Low Stock": "text-amber-700 bg-amber-50 ring-amber-200",
  "Out of Stock": "text-red-700 bg-red-50 ring-red-200",
};

export default function InventoryTable() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between p-5 pb-0">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Inventory</h3>
          <p className="text-xs text-slate-500">Live stock levels across the warehouse</p>
        </div>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-y border-slate-200 text-xs uppercase tracking-wide text-slate-500">
              <th className="px-5 py-2 font-medium">SKU</th>
              <th className="px-5 py-2 font-medium">Item</th>
              <th className="px-5 py-2 font-medium">Category</th>
              <th className="px-5 py-2 font-medium">Location</th>
              <th className="px-5 py-2 font-medium text-right">Qty</th>
              <th className="px-5 py-2 font-medium text-right">Reorder At</th>
              <th className="px-5 py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                <td className="px-5 py-3 font-mono text-xs text-slate-500">{item.sku}</td>
                <td className="px-5 py-3 font-medium text-slate-900">{item.name}</td>
                <td className="px-5 py-3 text-slate-600">{item.category}</td>
                <td className="px-5 py-3 text-slate-600">{item.location}</td>
                <td className="px-5 py-3 text-right text-slate-900">{item.quantity.toLocaleString()}</td>
                <td className="px-5 py-3 text-right text-slate-500">{item.reorderLevel.toLocaleString()}</td>
                <td className="px-5 py-3">
                  <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${statusClasses[item.status]}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
