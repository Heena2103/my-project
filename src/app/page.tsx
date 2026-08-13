import { TriangleAlert, ArrowDownToLine, ArrowUpFromLine } from "lucide-react";
import StatCard from "@/components/StatCard";
import ThroughputChart from "@/components/ThroughputChart";
import CategoryChart from "@/components/CategoryChart";
import InventoryTable from "@/components/InventoryTable";
import ShipmentsPanel from "@/components/ShipmentsPanel";
import { inventory, totalsAllTime } from "@/lib/data";

export default function Home() {
  const totalUnits = inventory.reduce((sum, i) => sum + i.quantity, 0);
  const lowStock = inventory.filter((i) => i.status === "Low Stock").length;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <h1 className="text-xl font-semibold text-slate-900">SHJ Inventory Dashboard</h1>
          <p className="text-sm text-slate-500">BMS, chargers and battery cells — Sharjah warehouse</p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-6 px-6 py-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total Units in Stock" value={totalUnits.toLocaleString()} iconSrc="/icons/total-units.png" delta={`Across ${inventory.length} items`} deltaTone="neutral" />
          <StatCard label="Low Stock Items" value={String(lowStock)} icon={TriangleAlert} delta="Needs reorder soon" deltaTone="negative" />
          <StatCard label="Total Received" value={totalsAllTime.received.toLocaleString()} icon={ArrowDownToLine} delta="All time" deltaTone="positive" />
          <StatCard label="Total Sent" value={totalsAllTime.sent.toLocaleString()} icon={ArrowUpFromLine} delta="All time" deltaTone="neutral" />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ThroughputChart />
          </div>
          <CategoryChart />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <InventoryTable />
          </div>
          <ShipmentsPanel />
        </div>
      </main>
    </div>
  );
}
