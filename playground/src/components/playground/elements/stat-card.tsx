import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { StatCard as StatCardType } from "../types";

interface StatCardProps {
  card: StatCardType;
}

export function StatCard({ card }: StatCardProps) {
  const Icon = card.icon;

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>{card.title}</CardDescription>
        <CardAction>
          <div className={cn("p-2 rounded-lg", card.color.bg)}>
            <Icon className={cn("size-4", card.color.text)} />
          </div>
        </CardAction>
      </CardHeader>
      <CardContent className="text-3xl font-semibold tabular-nums @[250px]/card:text-3xl">
        {card.value}
      </CardContent>
      <CardFooter className="text-xs font-light text-muted-foreground">
        {card.footer}
      </CardFooter>
    </Card>
  );
}
