import { cn } from "@/lib/utils";

interface GradiantBall_Props {
  className?: string;
}

export default function GradiantBall({ className }: GradiantBall_Props) {
  return <span className={cn("block size-200 rounded-full bg-radial from-blue-400 to-secondary/0 to-60%", className)} />;
}
