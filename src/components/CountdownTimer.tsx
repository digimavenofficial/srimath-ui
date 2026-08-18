"use client";

import { useEffect, useMemo, useState } from "react";

interface CountdownTimerProps {
  deadline?: string | null;
}

function getTimeLeft(deadline?: string | null) {
  if (!deadline) {
    return null;
  }

  const target = new Date(deadline).getTime();
  const now = Date.now();
  const difference = target - now;

  if (difference <= 0) {
    return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { expired: false, days, hours, minutes, seconds };
}

export default function CountdownTimer({ deadline }: CountdownTimerProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    expired: boolean;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    setIsMounted(true);
    if (!deadline) {
      return;
    }

    setTimeLeft(getTimeLeft(deadline));
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(deadline));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [deadline]);

  const items = useMemo(() => {
    if (!timeLeft) {
      return [
        { label: "Days", value: "--" },
        { label: "Hours", value: "--" },
        { label: "Minutes", value: "--" },
        { label: "Seconds", value: "--" },
      ];
    }

    return [
      { label: "Days", value: String(timeLeft.days).padStart(2, "0") },
      { label: "Hrs", value: String(timeLeft.hours).padStart(2, "0") },
      { label: "Min", value: String(timeLeft.minutes).padStart(2, "0") },
      { label: "Sec", value: String(timeLeft.seconds).padStart(2, "0") },
    ];
  }, [timeLeft]);

  if (!deadline) {
    return (
      <p className="text-sm text-gray-600">Deadline will be shared soon.</p>
    );
  }

  if (!isMounted) {
    return (
      <div className="space-y-3">
        <div className="grid grid-cols-4 gap-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-gray-200 bg-white p-3 text-center shadow-sm"
            >
              <p className="text-xl font-bold text-gray-900">--</p>
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600">
          Counting down to the launch date.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-4 gap-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-gray-200 bg-white p-3 text-center shadow-sm"
          >
            <p className="text-xl font-bold text-gray-900">{item.value}</p>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
              {item.label}
            </p>
          </div>
        ))}
      </div>
      {timeLeft?.expired ? (
        <p className="text-sm font-semibold text-red-600">
          The deadline has passed.
        </p>
      ) : (
        <p className="text-sm text-gray-600">
          Counting down to the launch date.
        </p>
      )}
    </div>
  );
}
