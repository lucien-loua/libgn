import { CheckCircle2, Search, XCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { SearchResult, SearchType } from "../types";
import { cn } from "@/lib/utils";

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchType: SearchType;
  setSearchType: (type: SearchType) => void;
  searchResult: SearchResult | null;
  handleSearch: () => void;
}

export function SearchSection({
  searchQuery,
  setSearchQuery,
  searchType,
  setSearchType,
  searchResult,
  handleSearch,
}: SearchSectionProps) {
  const searchTypes = [
    { value: "region" as const, label: "Région" },
    { value: "prefecture" as const, label: "Préfecture" },
    { value: "neighborhood" as const, label: "Quartier" },
  ];

  const getPlaceholder = () => {
    const typeMap = {
      region: "région",
      prefecture: "préfecture",
      neighborhood: "quartier",
    };
    return `Recherche ${typeMap[searchType]}...`;
  };

  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">Recherche</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <div className="flex bg-secondary border rounded-lg p-1">
            {searchTypes.map((type) => (
              <button
                type="button"
                key={type.value}
                onClick={() => setSearchType(type.value)}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-md transition-colors",
                  searchType === type.value
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <Input
            placeholder={getPlaceholder()}
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              e.key === "Enter" && handleSearch()
            }
          />
          <Button size="icon" onClick={handleSearch}>
            <Search className="size-4" />
          </Button>
        </div>

        {searchResult && (
          <Alert variant={searchResult.success ? "default" : "destructive"}>
            {searchResult.success ? (
              <CheckCircle2 className="size-4" />
            ) : (
              <XCircle className="size-4" />
            )}
            <AlertDescription>
              {searchResult.success ? (
                <div className="space-y-2">
                  {searchResult.type === "region" &&
                    <dl className="flex items-center gap-2">
                      <dt className="font-semibold">Région:</dt>
                      <dd className="font-light">{searchResult.data?.name}</dd>
                    </dl>
                  }
                  {searchResult.type === "prefecture" &&
                    <dl className="flex items-center gap-2">
                      <dt className="font-semibold">Préfecture:</dt>
                      <dd className="font-light">{searchResult.data?.name}</dd>
                    </dl>
                  }
                  {searchResult.type === "neighborhood" &&
                    <dl className="flex items-center gap-2">
                      <dt className="font-semibold">Quartier:</dt>
                      <dd className="font-light">{searchResult.data?.name}</dd>
                    </dl>
                  }

                  {searchResult.type === "region" && searchResult.data && (
                    <dl className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <dt className="font-semibold">Population:</dt>
                        <dd className="font-light">{searchResult.data.population?.toLocaleString()}</dd>
                      </div>
                      <div className="flex items-center gap-2">
                        <dt className="font-semibold">Superficie:</dt>
                        <dd className="font-light">{searchResult.data.area?.toLocaleString()} km²</dd>
                      </div>
                      <div className="flex flex-col">
                        <dt className="font-semibold">Préfectures</dt>
                        <dd className="font-light">{searchResult.data.prefectures?.join(", ")}</dd>
                      </div>
                    </dl>
                  )}
                  {searchResult.type === "prefecture" &&
                    searchResult.data && (
                      <dl className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <dt className="font-semibold">Région:</dt>
                          <dd className="font-light">{searchResult.data.region}</dd>
                        </div>
                        <div className="flex flex-col">
                          <dt className="font-semibold">Sous-préfectures</dt>
                          <dd className="font-light">
                            {searchResult.data.subPrefectures?.join(", ")}
                          </dd>
                        </div>
                      </dl>
                    )}
                </div>
              ) : (
                <div className="space-y-2">
                  <div>{searchResult.error}</div>
                  {searchResult.suggestions && searchResult.suggestions.length > 0 && (
                    <div>
                      <div className="text-sm font-medium mb-1">Suggestions :</div>
                      <div className="flex flex-wrap gap-1">
                        {searchResult.suggestions.map((suggestion) => (
                          <button
                            key={suggestion}
                            type="button"
                            onClick={() => setSearchQuery(suggestion)}
                            className="px-2 py-1 text-xs bg-secondary hover:bg-accent rounded-md transition-colors"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
