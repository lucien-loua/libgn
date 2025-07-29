import libgn from "libgn";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BasicInfoCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Informations</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-muted-foreground">Capitale</p>
            <p className="font-medium">{libgn.capital}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Code ISO</p>
            <p className="font-medium">{libgn.basicInfo.isoCode}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Population</p>
            <p className="font-medium">
              {libgn.basicInfo.population.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Superficie</p>
            <p className="font-medium">
              {libgn.basicInfo.area.toLocaleString()} km²
            </p>
          </div>
        </div>
        <div>
          <p className="text-muted-foreground text-sm mb-2">
            Langues nationales
          </p>
          <div className="flex flex-wrap gap-1">
            {libgn.languages.national.map((lang) => (
              <Badge key={lang} >
                {lang}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
