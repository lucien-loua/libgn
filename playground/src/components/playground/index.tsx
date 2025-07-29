import libgn, { PrefectureReferenceError, RegionReferenceError } from "libgn";
import { useState } from "react";
import {
  findNormalized,
  findSuggestions,
  includesNormalized,
  normalizeString,
} from "@/lib/normalize";
import { statCards } from "./data";
import {
  BasicInfoCard,
  CodeExampleCard,
  QuickAccessCard,
  RegionsCard,
  SearchSection,
  StatCard,
} from "./elements";
import type { SearchResult, SearchType } from "./types";

export function Playground() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState<SearchType>("region");
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResult({
        success: false,
        error: "Veuillez entrer un terme de recherche",
      });
      return;
    }

    try {
      if (searchType === "region") {
        const exactRegionName = findNormalized(
          libgn.allRegionNames,
          searchQuery,
          (name) => name,
        );

        if (!exactRegionName) {
          const exactMatch = libgn.allRegionNames.find((name) =>
            normalizeString(name).toLowerCase() === normalizeString(searchQuery).toLowerCase()
          );

          if (exactMatch) {
            const population = libgn.getRegionPopulation(exactMatch);
            const area = libgn.getRegionArea(exactMatch);
            const prefectures = libgn.getPrefecturesByRegion(exactMatch);
            setSearchResult({
              success: true,
              type: "region",
              data: { name: exactMatch, population, area, prefectures },
            });
            return;
          }

          const suggestions = findSuggestions(
            libgn.allRegionNames,
            searchQuery,
            (name) => name,
          );
          setSearchResult({
            success: false,
            error: `Région non trouvée: ${searchQuery}`,
            suggestions: suggestions.length > 0 ? suggestions : undefined,
          });
          return;
        }

        const population = libgn.getRegionPopulation(exactRegionName);
        const area = libgn.getRegionArea(exactRegionName);
        const prefectures = libgn.getPrefecturesByRegion(exactRegionName);
        setSearchResult({
          success: true,
          type: "region",
          data: { name: exactRegionName, population, area, prefectures },
        });
      } else if (searchType === "prefecture") {
        const exactPrefectureName = findNormalized(
          libgn.allPrefectureNames,
          searchQuery,
          (name) => name,
        );

        if (!exactPrefectureName) {
          const exactMatch = libgn.allPrefectureNames.find((name) =>
            normalizeString(name).toLowerCase() === normalizeString(searchQuery).toLowerCase()
          );

          if (exactMatch) {
            const region = libgn.getRegionOfPrefecture(exactMatch);
            const subPrefectures = libgn.getSubPrefecturesByPrefecture(exactMatch);
            setSearchResult({
              success: true,
              type: "prefecture",
              data: { name: exactMatch, region, subPrefectures },
            });
            return;
          }

          const suggestions = findSuggestions(
            libgn.allPrefectureNames,
            searchQuery,
            (name) => name,
          );
          setSearchResult({
            success: false,
            error: `Préfecture non trouvée: ${searchQuery}`,
            suggestions: suggestions.length > 0 ? suggestions : undefined,
          });
          return;
        }

        const region = libgn.getRegionOfPrefecture(exactPrefectureName);
        const subPrefectures =
          libgn.getSubPrefecturesByPrefecture(exactPrefectureName);
        setSearchResult({
          success: true,
          type: "prefecture",
          data: { name: exactPrefectureName, region, subPrefectures },
        });
      } else {
        const neighborhood = libgn.allNeighborhoods.find((n) =>
          includesNormalized(n, searchQuery),
        );
        if (neighborhood) {
          setSearchResult({
            success: true,
            type: "neighborhood",
            data: { name: neighborhood },
          });
        } else {
          const suggestions = findSuggestions(
            libgn.allNeighborhoods,
            searchQuery,
            (n) => n,
          );
          setSearchResult({
            success: false,
            error: `Quartier non trouvé: ${searchQuery}`,
            suggestions: suggestions.length > 0 ? suggestions : undefined,
          });
        }
      }
    } catch (error) {
      if (
        error instanceof RegionReferenceError ||
        error instanceof PrefectureReferenceError
      ) {
        setSearchResult({
          success: false,
          error: `${searchType === "region" ? "Région" : "Préfecture"} non trouvée: ${searchQuery}`,
        });
      } else {
        setSearchResult({
          success: false,
          error: "Erreur lors de la recherche",
        });
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <StatCard key={card.title} card={card} />
        ))}
      </div>

      <SearchSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchType={searchType}
        setSearchType={setSearchType}
        searchResult={searchResult}
        handleSearch={handleSearch}
      />

      <div className="grid lg:grid-cols-3 gap-6">
        <BasicInfoCard />
        <RegionsCard />
        <QuickAccessCard
          setSearchQuery={setSearchQuery}
          setSearchType={setSearchType}
        />
      </div>

      <CodeExampleCard />
    </div>
  );
}
