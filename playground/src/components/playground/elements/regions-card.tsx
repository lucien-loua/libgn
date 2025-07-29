import libgn from "libgn";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RegionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Régions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {libgn.allRegions.map((region) => (
            <div
              key={region.code}
              className="flex items-center justify-between p-3 bg-background border rounded-md"
            >
              <div>
                <p className="font-medium text-sm">{region.name}</p>
                <p className="text-xs font-light text-muted-foreground">
                  {region.population.toLocaleString()} hab.
                </p>
              </div>
              <Badge>
                {region.code}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
