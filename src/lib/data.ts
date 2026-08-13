// Sourced from "D:\Sharjah Warehouse\Store Items\SHJ Files\Inventory.xlsx"
// Reorder levels are not in the source file — estimated at ~25% of "Received"
// totals per item so Low Stock status has something to trigger on.

export type InventoryItem = {
  id: string;
  sku: string;
  name: string;
  category: string;
  quantity: number;
  reorderLevel: number;
  boxSize: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
};

export const inventory: InventoryItem[] = [
  { id: "1", sku: "BMS-01", name: "BMS", category: "BMS", quantity: 391, reorderLevel: 100, boxSize: 14, status: "In Stock" },
  { id: "2", sku: "MC-CHG-01", name: "Motor Cycle Charger", category: "Charger", quantity: 8, reorderLevel: 10, boxSize: 1, status: "Low Stock" },
  { id: "3", sku: "MC-CEL-01", name: "Motor Cycle Cells", category: "Cells", quantity: 10, reorderLevel: 15, boxSize: 1, status: "Low Stock" },
  { id: "4", sku: "CEL-BLK-01", name: "Cells Black", category: "Cells", quantity: 199, reorderLevel: 50, boxSize: 8, status: "In Stock" },
  { id: "5", sku: "CEL-BLU-01", name: "Cells Blue", category: "Cells", quantity: 150, reorderLevel: 50, boxSize: 8, status: "In Stock" },
];

export type StockMovement = {
  id: string;
  item: string;
  type: "Inbound" | "Outbound";
  quantity: number;
  date: string;
  note?: string;
};

// Most recent movements first, taken from each sheet's dated Received/Sent columns.
export const shipments: StockMovement[] = [
  { id: "1", item: "Cells Black", type: "Inbound", quantity: 200, date: "2026-08-11" },
  { id: "2", item: "Cells Black", type: "Outbound", quantity: 1, date: "2026-08-11", note: "To Amin as sample" },
  { id: "3", item: "BMS", type: "Outbound", quantity: 163, date: "2026-07-24" },
  { id: "4", item: "Cells Black", type: "Outbound", quantity: 150, date: "2026-07-21" },
  { id: "5", item: "Cells Black", type: "Inbound", quantity: 200, date: "2026-07-07" },
  { id: "6", item: "Cells Black", type: "Outbound", quantity: 50, date: "2026-07-07" },
  { id: "7", item: "Cells Blue", type: "Inbound", quantity: 200, date: "2026-07-06" },
  { id: "8", item: "Cells Blue", type: "Outbound", quantity: 50, date: "2026-07-06" },
];

// Received vs. Sent aggregated by month across all items in the sheet.
export const monthlyThroughput = [
  { month: "Apr", received: 954, sent: 200 },
  { month: "Jun", received: 20, sent: 200 },
  { month: "Jul", received: 400, sent: 415 },
  { month: "Aug", received: 200, sent: 1 },
];

export const categoryBreakdown = inventory.map((i) => ({ name: i.name, value: i.quantity }));

export const totalsAllTime = {
  received: monthlyThroughput.reduce((sum, m) => sum + m.received, 0),
  sent: monthlyThroughput.reduce((sum, m) => sum + m.sent, 0),
};
