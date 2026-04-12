"use client";

import { type ReactNode } from "react";
import CountdownTimer from "./CountdownTimer";
import { useCountdownFinished } from "./CountdownTimer";

export default function Countdown({
  children,
  showTimer = true,
}: {
  children?: ReactNode;
  showTimer?: boolean;
}) {
  const finished = useCountdownFinished();

  // Not yet hydrated on client — render nothing to avoid mismatch
  if (finished === undefined) return null;

  // Countdown finished — show children
  if (finished) {
    return <>{children}</>;
  }

  // Countdown active but this instance only hides content
  if (!showTimer) return null;

  return <CountdownTimer label="Programmation révélée dans" />;
}
