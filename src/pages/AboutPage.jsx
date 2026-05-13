import SectionTitle from '../components/SectionTitle'

export default function AboutPage() {
  return (
    <div className="pt-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle
          title="About Kalaki Group Tution"
          subtitle="Ahmedabad's trusted coaching center for Gujarat Board & CBSE"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
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
              We believe that every student has the potential to excel. Our teaching methodology
              focuses on conceptual clarity, regular practice, and individual attention.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From foundation courses for Class 9 &amp; 10 to board exam preparation for Class 11 &amp; 12,
              our programs meet the needs of every student.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'Our Mission', desc: 'To make quality education accessible and affordable for every student, helping them achieve academic success through conceptual learning.', icon: '🎯' },
            { title: 'Our Vision', desc: 'To nurture young minds, build strong foundations, and create future leaders in science, technology, and beyond.', icon: '🔭' },
            { title: 'Our Values', desc: 'Integrity, transparency, and commitment to excellence in everything we do.', icon: '💎' },
          ].map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-xl p-6 card">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="text-base font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/courses"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            Explore Our Courses
          </a>
        </div>
      </div>
    </div>
  )
}
