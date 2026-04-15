import type { Metadata } from "next"
import SpeakingPageClient from "./speaking-page-client"

export const metadata: Metadata = {
  title: "Speaking | Noah Santoni",
  description:
    "Noah Santoni speaking at AI conferences, developer meetups, and sovereign wealth fund forums around the world.",
}

export default function SpeakingPage() {
  return <SpeakingPageClient />
}
