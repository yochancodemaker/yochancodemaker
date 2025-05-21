"use client"

import type React from "react"
import SmoothScroll from "@/components/smooth-scroll"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SmoothScroll />
    </>
  )
}
