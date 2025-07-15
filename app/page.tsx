'use client';
import React from 'react';
import dynamic from "next/dynamic";

// Dynamic import with no SSR - truly client-side only
const GridCursor = dynamic(() => import("./components/GridCursor"), {
  ssr: false,
});

export default function Home() {
  return <GridCursor />;
}
