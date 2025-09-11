"use client";

import { ProgressRadial } from "@/components/ui";
import { useEffect, useState } from "react";

interface Timer_Props {
  duration: number;
  onTimeUp?: VoidFunction;
}

export default function Timer({ duration, onTimeUp }: Timer_Props) {
  const totalSeconds = duration * 60;
  const [remaining, setRemaining] = useState(totalSeconds);

  useEffect(() => {
    if (remaining <= 0) {
      onTimeUp?.();
      return;
    }

    const timerInterval = setInterval(() => {
      setRemaining((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  const formatted = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  return <ProgressRadial value={(remaining / totalSeconds) * 360} visibleValue={formatted} />;
}
