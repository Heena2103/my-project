import { PackageCheck, TriangleAlert, Truck } from "lucide-react";
import StatCard from "@/components/StatCard";
import ThroughputChart from "@/components/ThroughputChart";
import CategoryChart from "@/components/CategoryChart";
import InventoryTable from "@/components/InventoryTable";
import ShipmentsPanel from "@/components/ShipmentsPanel";
import { inventory, shipments } from "@/lib/data";

export default function Home() {
  const totalUnits = inventory.reduce((sum, i) => sum + i.quantity, 0);
  const lowStock = inventory.filter((i) => i.status === "Low Stock").length;
  const outOfStock = inventory.filter((i) => i.status === "Out of Stock").length;
  const inTransit = shipments.filter((s) => s.status === "In Transit" || s.status === "Scheduled").length;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <h1 className="text-xl font-semibold text-slate-900">Sharjah Warehouse Dashboard</h1>
          <p className="text-sm text-slate-500">Live overview of inventory, shipments and throughput</p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-6 px-6 py-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total Units in Stock" value={totalUnits.toLocaleString()} iconSrc="/icons/total-units.png" delta="Across 4 categories" deltaTone="neutral" />
          <StatCard label="Low Stock Items" value={String(lowStock)} icon={TriangleAlert} delta="Needs reorder soon" deltaTone="negative" />
          <StatCard label="Out of Stock" value={String(outOfStock)} icon={PackageCheck} delta="Blocking fulfillment" deltaTone="negative" />
          <StatCard label="Shipments in Progress" value={String(inTransit)} icon={Truck} delta="Scheduled + In Transit" deltaTone="positive" />
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
