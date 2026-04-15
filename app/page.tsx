import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import MissionSection from "@/components/mission-section"
import ExperienceSection from "@/components/experience-section"
import AchievementsSection from "@/components/achievements-section"
import ServicesSection from "@/components/services-section"
import SpeakingSection from "@/components/speaking-section"
import SocialSection from "@/components/social-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <div className="relative z-10">
        <MissionSection />
        <ExperienceSection />
        <AchievementsSection />
        <ServicesSection />
        <SpeakingSection />
        <SocialSection />
        <Footer />
      </div>
    </main>
  )
}
