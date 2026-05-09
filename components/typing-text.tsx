"use client";

import { useEffect, useState } from "react";

export function TypingText({ items }: { items: string[] }) {
  const [itemIndex, setItemIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = items[itemIndex] ?? "";
    const complete = charIndex === current.length;
    const empty = charIndex === 0;
    const delay = complete && !deleting ? 1300 : deleting ? 35 : 70;

    const timeout = window.setTimeout(() => {
      if (complete && !deleting) {
        setDeleting(true);
        return;
      }

      if (empty && deleting) {
        setDeleting(false);
        setItemIndex((index) => (index + 1) % items.length);
        return;
      }

      setCharIndex((index) => index + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [charIndex, deleting, itemIndex, items]);

  return (
    <span className="inline-flex min-h-8 items-center text-cyan-200">
      {items[itemIndex]?.slice(0, charIndex)}
      <span className="ml-1 h-6 w-px animate-pulse bg-cyan-300" />
    </span>
  );
}
