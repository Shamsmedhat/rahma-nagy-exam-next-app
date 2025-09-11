import { Button } from "@/components/ui";
import { ArrowLeftIcon } from "lucide-react";
import type { ReactNode } from "react";

interface Step_Props {
  heading: string;
  subheading: string;
  children: ReactNode;
  onBack?: VoidFunction;
}

export default function Step({ heading, subheading, children, onBack }: Step_Props) {
  return (
    <div>
      {onBack && (
        <Button size="icon" variant="outline" onClick={onBack} className="mb-5">
          <ArrowLeftIcon />
        </Button>
      )}
      <div>
        <h2 className="text-3xl font-semibold">{heading}</h2>
        <p className="text-xl text-gray-500 mt-3 mb-10">{subheading}</p>
      </div>
      {children}
    </div>
  );
}
