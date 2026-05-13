import HeroBanner from '../components/HeroBanner'
import About from '../sections/About'
import Courses from '../sections/Courses'
import Features from '../sections/Features'
import Results from '../sections/Results'
import Instructor from '../sections/Instructor'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <>
      <HeroBanner />
      <About />
      <Courses />
      <Features />
      <Results />
      <Instructor />
      <Contact />
    </>
  )
}
