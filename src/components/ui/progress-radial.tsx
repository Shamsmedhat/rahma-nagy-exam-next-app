"use client";

import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

interface ProgressRadial_Props {
  value: number;
  visibleValue?: string;
  label?: string;
}

export function ProgressRadial({ value, visibleValue, label }: ProgressRadial_Props) {
  return (
    <ChartContainer config={{}} className="mx-auto aspect-square h-[70px]">
      <RadialBarChart data={[{ value, fill: "var(--primary)" }]} startAngle={0} endAngle={value} innerRadius={30} outerRadius={50}>
        <PolarGrid gridType="circle" radialLines={false} stroke="none" className="first:fill-muted last:fill-background" polarRadius={[86, 74]} />
        <RadialBar dataKey="value" background />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          {(visibleValue || label) && (
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                      {visibleValue && (
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-base font-medium">
                          {visibleValue}
                        </tspan>
                      )}
                      {label && (
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          {label}
                        </tspan>
                      )}
                    </text>
                  );
                }
              }}
            />
          )}
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
