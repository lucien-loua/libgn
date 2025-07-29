import libgn from "libgn";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { popularPrefectures } from "../data";
import type { SearchType } from "../types";

interface QuickAccessCardProps {
  setSearchQuery: (query: string) => void;
  setSearchType: (type: SearchType) => void;
}

export function QuickAccessCard({
  setSearchQuery,
  setSearchType,
}: QuickAccessCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Accès rapide</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 h-full">
        <div>
          <p className="text-sm text-muted-foreground mb-2">
            Préfectures populaires
          </p>
          <div className="flex flex-wrap gap-1">
            {popularPrefectures.map((prefecture) => (
              <Badge
                key={prefecture}
                variant="secondary"
                className="cursor-pointer hover:bg-accent"
                onClick={() => {
                  setSearchQuery(prefecture);
                  setSearchType("prefecture");
                }}
              >
                {prefecture}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-2">
            Quartiers de Conakry
          </p>
          <div className="flex flex-wrap gap-1">
            {libgn.allNeighborhoods.slice(0, 7).map((neighborhood) => (
              <Badge
                key={neighborhood}
                variant="outline"
                className="text-xs cursor-pointer hover:bg-accent"
                onClick={() => {
                  setSearchQuery(neighborhood);
                  setSearchType("neighborhood");
                }}
              >
                {neighborhood.length > 12
                  ? `${neighborhood.substring(0, 12)}...`
                  : neighborhood}
              </Badge>
            ))}
          </div>
        </div>


      </CardContent>
      <CardFooter className="border-t">
        <p className="text-xs font-light text-muted-foreground">
          Cliquez sur un élément pour le rechercher automatiquement
        </p>
      </CardFooter>
    </Card>
  );
}
