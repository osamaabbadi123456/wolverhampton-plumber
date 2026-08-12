import type { IconName } from "../_data/siteContent";

const paths: Record<IconName, string[]> = {
  alert: ["M12 3 2 21h20L12 3z", "M12 9v5", "M12 17h.01"],
  bath: ["M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3z", "M7 12V7a3 3 0 0 1 3-3h1", "M8 21l1-2", "M16 21l-1-2"],
  boiler: ["M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", "M9 7h6", "M12 11a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"],
  backup: ["M4 17h8a4 4 0 0 0 0-8H8", "M8 5 4 9l4 4", "M20 7v10"],

  camera: ["M4 8h4l2-3h4l2 3h4v11H4z", "M12 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M7 11h.01"],
  list: ["M8 6h13", "M8 12h13", "M8 18h13", "M3 6h.01", "M3 12h.01", "M3 18h.01"],
  mapPin: ["M12 21s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11z", "M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"],
  message: ["M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z", "M8 9h8", "M8 13h5"],
  check: ["M20 6 9 17l-5-5"],
  clock: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M12 7v5l3 2"],
  drain: ["M5 7h14", "M7 11h10", "M9 15h6", "M12 15v5", "M6 7l2 13", "M18 7l-2 13"],
  droplet: ["M12 3s6 6.2 6 11a6 6 0 0 1-12 0c0-4.8 6-11 6-11z"],
  gauge: ["M4 15a8 8 0 1 1 16 0", "M12 15l4-5", "M7 15h.01", "M17 15h.01"],
  home: ["M3 11 12 4l9 7", "M5 10v10h14V10", "M9 20v-6h6v6"],
  leak: ["M12 3s5 5.4 5 9a5 5 0 0 1-10 0c0-3.6 5-9 5-9z", "M19 14c1.5 1.5 2 3 1 5", "M5 18c-1 1-1 2 0 3"],
  pipe: ["M4 8h8a4 4 0 0 1 4 4v8", "M4 8V4", "M16 20h4", "M8 8v8h8"],
  radiator: ["M6 5h12v14H6z", "M9 5v14", "M12 5v14", "M15 5v14", "M8 3h8", "M8 21h8"],
  shower: ["M7 6a5 5 0 0 1 10 0", "M17 6v3H7V6", "M8 13h.01", "M12 13h.01", "M16 13h.01", "M9 17h.01", "M15 17h.01"],
  sink: ["M5 11h14v3a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5v-3z", "M9 11V7a3 3 0 0 1 6 0v4", "M10 21h4"],
  smell: ["M8 20c2-2-2-4 0-6s4-4 0-6", "M12 20c2-2-2-4 0-6s4-4 0-6", "M16 20c2-2-2-4 0-6s4-4 0-6"],
  tap: ["M9 7h6", "M12 7v4", "M7 11h10", "M17 11v3a4 4 0 0 1-4 4h-1", "M12 3v4", "M10 3h4"],
  toilet: ["M7 4h10v7a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5V4z", "M9 20h6", "M10 16l-1 4", "M14 16l1 4"],
  valve: ["M6 12h12", "M12 6v12", "M8 6h8", "M7 18h10"],
  washer: ["M6 3h12v18H6z", "M9 6h.01", "M12 6h3", "M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"],
  water: ["M4 14c4-4 8 4 16 0", "M4 18c4-4 8 4 16 0"],
  waves: ["M3 12c3-3 6 3 9 0s6 3 9 0", "M3 17c3-3 6 3 9 0s6 3 9 0"],
  wrench: ["M14 7a5 5 0 0 0 6 6L10 23l-4-4L16 9a5 5 0 0 0-2-2z"],
};

export function ServiceIcon({ name }: { name: IconName }) {
  return (
    <svg className="" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {paths[name].map((d) => <path key={d} d={d} />)}
    </svg>
  );
}



