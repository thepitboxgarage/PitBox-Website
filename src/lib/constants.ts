import type { Duration, DurationOption } from '../types';

export const PRICING: Record<Duration, DurationOption> = {
  hourly: {
    key: "hourly",
    label: "Hourly",
    duration: 60,
    price: 65,
    description: "1 hour — perfect for a quick job",
  },
  "half-day": {
    key: "half-day",
    label: "Half-Day",
    duration: 240,
    price: 320,
    description: "6 hours — tackle a full service",
  },
  "full-day": {
    key: "full-day",
    label: "Full-Day",
    duration: 540,
    price: 550,
    description: "12 hours — full day access, 9 AM – 9 PM",
  },
};

export const DURATIONS = Object.values(PRICING);

export const BAY_COUNT = 6;

export const FACILITY_HOURS = {
  open: "9:00 AM",
  close: "9:00 PM",
  openHour: 9,
  closeHour: 21,
};

export const FACILITY_ADDRESS = "unit 1 - 5438 176 street Surrey BC, V3C 4S3";
export const FACILITY_PHONE = "1+ (257)-757-0983";
export const FACILITY_EMAIL = "info@thepitbox.ca";

export const BOOKING_STEPS = [
  { number: 1, label: "Bay & Duration" },
  { number: 2, label: "Date & Time" },
  { number: 3, label: "Your Details" },
  { number: 4, label: "Waiver" },
  { number: 5, label: "Payment" },
];

// Third-party embed IDs
export const CLEVERWAIVER_TEMPLATE_ID = "6a00e18ba47d80b6f0879440";
export const ACUITY_OWNER_ID = "39248460";

// Navigation
export const NAV_LINKS = [
  { to: "/bays", label: "The Bays" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const FOOTER_LINKS: Record<string, { to: string; label: string }[]> = {
  Facility: [
    { to: "/bays", label: "The Bays" },
    { to: "/about", label: "About PitBox" },
    { to: "/book", label: "Book a Bay" },
    { to: "/contact", label: "Contact Us" },
  ],
  Information: [
    { to: "/about#faq", label: "FAQ" },
    { to: "/about#safety", label: "Safety Guidelines" },
    { to: "/about#tools", label: "Tool Inventory" },
  ],
};

// Home page
export const STATS = [
  { value: "6", unit: "bays", label: "Premium Bays" },
  { value: "30+", unit: "tools", label: "Tools Per Bay" },
  { value: "320", unit: "sq ft", label: "Per Bay" },
  { value: "6", unit: "days", label: "Days a Week" },
];

// Contact page
export const INQUIRY_TYPES = [
  "Bay Rental",
  "Custom Fabrication",
  "Professional Services",
  "Vehicle Storage",
  "General Inquiry",
];

export const SERVICE_PARAM_MAP: Record<string, string> = {
  fabrication: "Custom Fabrication",
  professional: "Professional Services",
  storage: "Vehicle Storage",
};

// About page
export const STORY_STATS = [
  { label: "Bays", value: "6" },
  { label: "Tools per bay", value: "30+" },
  { label: "Operating hours", value: "12 hrs/day" },
  { label: "Open", value: "6 days" },
];

export const MANUAL_SYSTEM_FEATURES = [
  "Covers 10,000+ vehicle make/model/year combinations",
  "OEM torque specs and fluid specifications",
  "Step-by-step illustrated service procedures",
  'Touch-enabled 55" 4K display',
  "Keyboard and wireless mouse included",
  "Updated quarterly with new content",
  "Searchable by VIN for exact fitment",
];

export const SAFETY_ITEMS = [
  {
    title: "Safety Briefing",
    body: "Every renter receives a mandatory 5-minute safety walkthrough on their first visit — or any time they request one.",
  },
  {
    title: "On-Site Staff",
    body: "Trained staff are present during all operating hours. We're here to help, not hover.",
  },
  {
    title: "First Aid Certified",
    body: "All PitBox team members hold valid standard first aid certification.",
  },
  {
    title: "Fire Safety",
    body: "Dry chemical extinguishers and fire suppression systems are installed in every bay. Emergency exits are clearly marked.",
  },
  {
    title: "Eyewash Stations",
    body: "Emergency eyewash stations are located at both ends of the facility.",
  },
  {
    title: "PPE Available",
    body: "Safety glasses, nitrile gloves, and hearing protection are available at the front desk at no charge.",
  },
];

export const FAQ_ITEMS = [
  {
    q: "Do I need to bring my own tools?",
    a: "No. Every bay comes fully equipped with 30+ professional tools. If you have a specialty tool you prefer, you're welcome to bring it.",
  },
  {
    q: "Can I bring a friend to help?",
    a: "Yes — you may have one guest in the bay with you at no additional charge. Additional guests must wait in the lounge area.",
  },
  {
    q: "What if I need more time than I booked?",
    a: "If the bay is available, you can extend at the front desk. We recommend booking a buffer if your job scope is uncertain.",
  },
  {
    q: "Do you have a lift (hoist)?",
    a: "We currently offer floor jacks and jack stands. Hydraulic vehicle lifts are planned for a future expansion.",
  },
  {
    q: "Can I book same-day?",
    a: "Yes, subject to availability. You can book up to 30 days in advance or as little as 1 hour before your slot.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Full refund for cancellations made 24+ hours in advance. No refund for same-day cancellations or no-shows.",
  },
];

// Bays page
export const BAY_FEATURES = [
  "320 sq ft of dedicated workspace",
  "3-ton floor jack + 4 jack stands included",
  '55" flatscreen with automotive manual catalog',
  "OBD-II scanner and digital multimeter",
  "Full hand tool, power tool & specialty kit",
  "Dedicated parts cleaning station",
];

export const BAY_MANUAL_FEATURES = [
  "10,000+ vehicles covered",
  "OEM torque specs",
  "Wiring diagrams",
  "VIN search",
  "Touch + keyboard control",
  "Updated quarterly",
];

export const BAY_MANUAL_UI_LINES = [
  "Search by Make / Model / Year",
  "Step-by-step repair guides",
  "Torque specs & fluid capacities",
  "Illustrated procedures",
];

export const BAY_TOOL_LIST = [
  "3-ton floor jack + 4 jack stands",
  "Socket & ratchet set — metric & imperial",
  "Combination wrench set — metric & imperial",
  'Torque wrench — ¼", ⅜", ½" drive',
  'Impact wrench — ½" & ¾" drive',
  'Breaker bar — ½" drive',
  "Pry bars & slide hammer",
  "Ball-peen & rubber mallets",
  "Pliers, cutters & locking pliers",
  "Screwdriver set — flat & Phillips",
  "Hex key set — metric & imperial",
  "OBD-II diagnostic scanner",
  "Digital multimeter",
  "Oil drain pan & filter wrench set",
  "Brake caliper wind-back tool kit",
  "Parts cleaning station",
];
