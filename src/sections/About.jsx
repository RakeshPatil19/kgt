import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Us"
          subtitle="Ahmedabad's trusted coaching center for Gujarat Board & CBSE"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Students studying"
              className="w-full h-72 object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-primary">Kalaki Group Tution</strong> was established with a
              mission to provide quality education and personal attention to every student in
              Ahmedabad. Led by{' '}
              <strong className="text-primary">Mahesh Samariya</strong>, we focus on building
              strong foundations in Science and Mathematics for Gujarat Board (GSEB) &amp; CBSE.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are dedicated to preparing students for board exams with patient, concept-based
              teaching that builds lasting understanding.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our students have excelled in board exams with flying colors. But more than results,
              what stays with them is a way of approaching problems — clearly, patiently, from the
              beginning.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: '10+', label: 'Years of Excellence' },
                { value: '500+', label: 'Students Mentored' },
                { value: '100%', label: 'Dedicated Faculty' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-secondary">{s.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
