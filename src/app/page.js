import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HeroSection from './components/Sections/HeroSection'
import CategoriesSection from './components/Sections/CategoriesSection'
import AboutSection from './components/Sections/AboutSection'
import StepsSection from './components/Sections/StepsSection'
import TabsSection from './components/Sections/TabsSection'
import SliderSection from './components/Sections/SliderSection'
import CareerSolutions from './components/Sections/CareerSolutions'
// import WorkingSection from './components/Sections/WorkingSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <AboutSection />
        <StepsSection />
        <TabsSection />
        <SliderSection />
        <CareerSolutions />
      </main>
      <Footer />
    </>
  )
}