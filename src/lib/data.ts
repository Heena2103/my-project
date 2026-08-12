export type InventoryItem = {
  id: string;
  sku: string;
  name: string;
  category: string;
  quantity: number;
  reorderLevel: number;
  location: string;
  status: "In Stock" | "Low Stock" | "Out of Stock";
};

export const inventory: InventoryItem[] = [
  { id: "1", sku: "SKU-1001", name: "Steel Pallet Rack", category: "Storage", quantity: 240, reorderLevel: 50, location: "A1-03", status: "In Stock" },
  { id: "2", sku: "SKU-1002", name: "Forklift Battery Pack", category: "Equipment", quantity: 12, reorderLevel: 15, location: "B2-11", status: "Low Stock" },
  { id: "3", sku: "SKU-1003", name: "Cardboard Boxes (L)", category: "Packaging", quantity: 3800, reorderLevel: 500, location: "C1-01", status: "In Stock" },
  { id: "4", sku: "SKU-1004", name: "Shrink Wrap Rolls", category: "Packaging", quantity: 0, reorderLevel: 100, location: "C1-05", status: "Out of Stock" },
  { id: "5", sku: "SKU-1005", name: "Safety Helmets", category: "Safety", quantity: 88, reorderLevel: 40, location: "D3-02", status: "In Stock" },
  { id: "6", sku: "SKU-1006", name: "Barcode Scanners", category: "Equipment", quantity: 9, reorderLevel: 10, location: "B2-14", status: "Low Stock" },
  { id: "7", sku: "SKU-1007", name: "Wooden Pallets", category: "Storage", quantity: 620, reorderLevel: 150, location: "A2-08", status: "In Stock" },
  { id: "8", sku: "SKU-1008", name: "Fire Extinguishers", category: "Safety", quantity: 22, reorderLevel: 20, location: "D1-01", status: "In Stock" },
  { id: "9", sku: "SKU-1009", name: "Packing Tape", category: "Packaging", quantity: 45, reorderLevel: 200, location: "C1-09", status: "Low Stock" },
  { id: "10", sku: "SKU-1010", name: "Loading Dock Ramps", category: "Equipment", quantity: 0, reorderLevel: 4, location: "E1-01", status: "Out of Stock" },
];

export type Shipment = {
  id: string;
  ref: string;
  type: "Inbound" | "Outbound";
  partner: string;
  items: number;
  status: "Scheduled" | "In Transit" | "Delivered" | "Delayed";
  date: string;
};

export const shipments: Shipment[] = [
  { id: "1", ref: "SHP-2201", type: "Inbound", partner: "Al Futtaim Logistics", items: 340, status: "In Transit", date: "2026-08-13" },
  { id: "2", ref: "SHP-2202", type: "Outbound", partner: "Carrefour UAE", items: 120, status: "Scheduled", date: "2026-08-13" },
  { id: "3", ref: "SHP-2203", type: "Outbound", partner: "Lulu Hypermarket", items: 75, status: "Delivered", date: "2026-08-11" },
  { id: "4", ref: "SHP-2204", type: "Inbound", partner: "Gulftainer", items: 500, status: "Delayed", date: "2026-08-12" },
  { id: "5", ref: "SHP-2205", type: "Outbound", partner: "Noon Fulfillment", items: 210, status: "Scheduled", date: "2026-08-14" },
];

export const weeklyThroughput = [
  { day: "Mon", inbound: 420, outbound: 380 },
  { day: "Tue", inbound: 510, outbound: 460 },
  { day: "Wed", inbound: 380, outbound: 490 },
  { day: "Thu", inbound: 600, outbound: 520 },
  { day: "Fri", inbound: 460, outbound: 610 },
  { day: "Sat", inbound: 300, outbound: 340 },
  { day: "Sun", inbound: 180, outbound: 200 },
];

export const categoryBreakdown = [
  { name: "Storage", value: 860 },
  { name: "Packaging", value: 3845 },
  { name: "Equipment", value: 21 },
  { name: "Safety", value: 110 },
];
