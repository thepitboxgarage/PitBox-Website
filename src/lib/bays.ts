import type { Bay } from '../types'

export const BAYS: Bay[] = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  name: `Bay ${i + 1}`,
  sqft: 320,
  tools: [
    // Lifting & Safety
    { name: '3-Ton Floor Jack', category: 'Lifting & Safety', description: 'Heavy-duty hydraulic floor jack, 3-ton capacity' },
    { name: 'Jack Stands (x4)', category: 'Lifting & Safety', description: '3-ton rated safety stands, adjustable height' },
    { name: 'Wheel Chocks (x4)', category: 'Lifting & Safety', description: 'Rubber wheel chocks for secure vehicle positioning' },
    { name: 'Creeper / Roller Stool', category: 'Lifting & Safety', description: 'Low-profile padded creeper for undercar work' },
    { name: 'Fender Covers (x2)', category: 'Lifting & Safety', description: 'Magnetic fender protectors — scratch-free work surface' },

    // Hand Tools
    { name: 'Ratchet Set — Metric & Imperial', category: 'Hand Tools', description: '1/4", 3/8", 1/2" ratchets with full socket sets' },
    { name: 'Torque Wrench (0–150 ft-lb)', category: 'Hand Tools', description: 'Click-type torque wrench for precise fastening' },
    { name: 'Breaker Bar (1/2")', category: 'Hand Tools', description: '24-inch breaker bar for seized fasteners' },
    { name: 'Combination Wrench Set', category: 'Hand Tools', description: 'Full metric and imperial open/box end wrenches' },
    { name: 'Screwdriver Set (16 pcs)', category: 'Hand Tools', description: 'Phillips, flathead, Torx — all sizes' },
    { name: 'Pliers Set (8 pcs)', category: 'Hand Tools', description: 'Needle-nose, slip-joint, locking, cutting' },
    { name: 'Pry Bar Set', category: 'Hand Tools', description: 'Assorted pry bars — 12", 18" and 36"' },
    { name: 'Trim Removal Kit', category: 'Hand Tools', description: 'Plastic trim clips and panel removal tools — no scratches' },

    // Power Tools
    { name: '1/2" Impact Wrench (Electric)', category: 'Power Tools', description: 'Cordless impact wrench, 700 ft-lb torque' },
    { name: '3/8" Impact Wrench (Electric)', category: 'Power Tools', description: 'Compact cordless impact for tight spaces' },
    { name: 'Angle Grinder', category: 'Power Tools', description: '4.5" angle grinder with cutting and grinding discs' },
    { name: 'Cordless Drill / Driver', category: 'Power Tools', description: '18V drill with full bit set' },

    // Diagnostic
    { name: 'OBD-II Scanner (Professional)', category: 'Diagnostic', description: 'Full bidirectional scan tool — reads and clears all codes' },
    { name: 'Digital Multimeter', category: 'Diagnostic', description: 'True RMS multimeter for electrical diagnostics' },
    { name: 'Battery Tester / Charger', category: 'Diagnostic', description: 'Load test and charge 12V batteries' },

    // Fluid Service
    { name: 'Oil Drain Pan (15L)', category: 'Fluid Service', description: 'Wide-mouth drain pan with pour spout' },
    { name: 'Fluid Pump (Manual)', category: 'Fluid Service', description: 'Hand pump for transmission and differential fluids' },
    { name: 'Brake Bleeder Kit', category: 'Fluid Service', description: 'Vacuum pump and one-man bleeder kit' },
    { name: 'Coolant Funnel Set', category: 'Fluid Service', description: 'No-spill funnel adapters for all common radiator necks' },

    // Specialty
    { name: 'Bearing Press Set', category: 'Specialty', description: 'Shop press adapters for wheel bearings and bushings' },
    { name: 'Ball Joint Press', category: 'Specialty', description: 'Universal ball joint C-clamp press kit' },
    { name: 'Spark Plug Socket Set', category: 'Specialty', description: 'Thin-wall spark plug sockets — 14mm & 16mm' },
    { name: 'Magnetic Parts Tray (x3)', category: 'Specialty', description: 'Keep bolts and small parts organized' },
    { name: 'Shop Light (LED, 5000 lm)', category: 'Specialty', description: 'Articulating LED work light — no shadows' },
    { name: 'Parts Cleaning Brush Set', category: 'Specialty', description: 'Wire and nylon brushes for cleaning components' },
  ],
}))

export function getBay(id: number): Bay | undefined {
  return BAYS.find((b) => b.id === id)
}
