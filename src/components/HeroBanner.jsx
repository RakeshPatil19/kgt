import { Link } from 'react-router-dom'

export default function HeroBanner() {
  return (
    <section id="home" className="bg-primary pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-white/80 text-xs sm:text-sm font-medium tracking-wide uppercase">
              Now Enrolling for 2026 Batches
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 leading-tight">
            <span className="block text-lg sm:text-xl md:text-2xl font-bold text-amber-400 mb-3 guj-font">
              ગુજરાતનું સૌથી વિશ્વસનીય કોચિંગ સેન્ટર
            </span>
            Welcome to{' '}
            <span className="text-amber-400">Kalaki Group Tution</span>
          </h1>

          <p className="text-base sm:text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Expert coaching for Gujarat Board (GSEB) &amp; CBSE — Science, Mathematics &amp; more.
            Concept-based learning with personal attention in Ahmedabad.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/courses"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-7 py-3 rounded-lg transition-colors"
            >
              Explore Courses
            </Link>
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-7 py-3 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto border-t border-white/20 pt-8">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '500+', label: 'Students Taught' },
              { value: '95%', label: 'Success Rate' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
