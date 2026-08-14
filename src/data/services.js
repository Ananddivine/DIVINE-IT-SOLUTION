export const serviceCategories = [
  {
    id: "hardware",
    label: "Hardware Repair",
    eyebrow: "Component-level",
    description:
      "We open the machine, find the exact failed component, and fix it — instead of guessing and swapping whole boards.",
    items: [
      {
        name: "Chip-Level Motherboard Repair",
        detail:
          "Dead board, no display, no power, short circuit, or liquid/water damage. BGA chip reballing and reflow on the affected IC only.",
        featured: true,
      },
      {
        name: "Screen & Display Replacement",
        detail: "Cracked screens, flickering, no backlight, broken hinges — replaced with tested panels.",
      },
      {
        name: "Keyboard Repair & Replacement",
        detail: "Single key repair, full keyboard swap, keys not registering, or spill damage.",
      },
      {
        name: "Panel / LCD / LED Replacement",
        detail: "Full panel swaps for cracked or dead displays across major brands.",
      },
      {
        name: "Battery Replacement",
        detail: "Not charging, swelling, or battery draining fast — replaced with genuine-spec cells.",
      },
      {
        name: "Charging Port / DC Jack Repair",
        detail: "Loose, broken, or bent charging ports re-soldered or replaced at board level.",
      },
      {
        name: "RAM & Storage Upgrades",
        detail: "HDD-to-SSD migration and RAM upgrades to bring old machines back to speed.",
      },
      {
        name: "Cooling & Overheating Fix",
        detail: "Fan repair, heatsink cleaning, and thermal paste replacement for overheating laptops.",
      },
      {
        name: "Hinge & Chassis Repair",
        detail: "Cracked hinges, broken body panels, and chassis reinforcement.",
      },
      {
        name: "Data Recovery",
        detail: "Recovering files from dead, corrupted, or non-booting drives.",
      },
      {
        name: "GPU / Graphics Chip Repair",
        detail: "Artifacting, no-display, or overheating graphics chips diagnosed and repaired at IC level.",
        featured: true,
      },
      {
        name: "Desktop & PCB Repair",
        detail: "Component-level repair for desktop motherboards and power supplies.",
      },
    ],
  },
  {
    id: "software",
    label: "Software Services",
    eyebrow: "Setup & recovery",
    description:
      "Once the hardware is sound, we make sure the software runs clean, fast, and safe.",
    items: [
      { name: "OS Installation & Reinstallation", detail: "Windows, macOS, and Linux — clean installs or repairs." },
      { name: "Virus & Malware Removal", detail: "Full system clean-up and protection setup." },
      { name: "Software Troubleshooting", detail: "Driver issues, crashes, and compatibility problems resolved." },
      { name: "Data Backup & Transfer", detail: "Moving your files safely between drives or to a new machine." },
      { name: "Performance Tuning", detail: "Fixing a slow laptop — startup cleanup, disk optimization, bloatware removal." },
      { name: "BIOS / UEFI & Password Reset", detail: "BIOS issues, boot problems, and locked-account recovery." },
    ],
  },
  {
    id: "business",
    label: "Business & Bulk Services",
    eyebrow: "For teams",
    description:
      "For offices, schools, and shops that need repairs handled reliably and on schedule.",
    items: [
      { name: "Annual Maintenance Contracts (AMC)", detail: "Scheduled upkeep for office fleets, with priority callout." },
      { name: "Bulk Repair for Institutions", detail: "Cyber cafes, schools, and offices — multiple units, one invoice." },
      { name: "Pickup & Drop Service", detail: "We collect the device, repair it, and bring it back." },
    ],
  },
];

export const brands = [
  "Dell", "HP", "Lenovo", "Asus", "Acer", "Apple / MacBook", "MSI", "Samsung", "Gaming Laptops", "Custom Desktops",
];

export const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "5000+", label: "Devices Repaired" },
  { value: "10+", label: "Brands Serviced" },
  { value: "24–48hr", label: "Typical Turnaround" },
];

export const process = [
  { title: "Diagnose", detail: "We open the device and trace the fault to the exact component — free of charge." },
  { title: "Quote", detail: "You get a clear, itemized quote before any work begins. No surprises." },
  { title: "Repair", detail: "Chip-level repair by hand, using genuine or tested-equivalent parts." },
  { title: "Test", detail: "Full stress-test under load before the device is called ready." },
  { title: "Deliver", detail: "Pickup in-store, or we drop it back to you." },
];
