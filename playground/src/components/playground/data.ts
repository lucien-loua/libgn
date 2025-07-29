import libgn from "libgn";
import { Building2, Home, MapPin, Users } from "lucide-react";
import type { StatCard } from "./types";

export const statCards: StatCard[] = [
  {
    title: "Régions",
    value: libgn.allRegionNames.length,
    icon: MapPin,
    color: { bg: "bg-blue-300/15", text: "text-blue-600" },
    footer: "Régions administratives",
  },
  {
    title: "Préfectures",
    value: libgn.allPrefectureNames.length,
    icon: Building2,
    color: { bg: "bg-green-300/15", text: "text-green-600" },
    footer: "Total des préfectures",
  },
  {
    title: "Quartiers",
    value: libgn.allNeighborhoods.length,
    icon: Home,
    color: { bg: "bg-purple-300/15", text: "text-purple-600" },
    footer: "Total des quartiers",
  },
  {
    title: "Population",
    value: `${(libgn.basicInfo.population / 1000000).toFixed(1)}M`,
    icon: Users,
    color: { bg: "bg-orange-300/15", text: "text-orange-600" },
    footer: "Population totale",
  },
];

export const popularPrefectures = ["Conakry", "Kindia", "Boké", "Labé", "N'Zérékoré"];
