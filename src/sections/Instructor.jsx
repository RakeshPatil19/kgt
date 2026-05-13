import SectionTitle from '../components/SectionTitle'

export default function Instructor() {
  return (
    <section id="instructor" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Meet Your Instructor"
          subtitle="Dedicated to transforming aspirations into achievements"
        />

        <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg shrink-0">
            <img
              src="/images/instructor.jpg"
              alt="Mahesh Samariya"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary">Mahesh Samariya</h3>
            <p className="text-secondary font-semibold">Founder & Lead Faculty</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Mahesh Samariya founded <strong>Kalaki Group Tution</strong> with a mission to
              make quality education accessible to every student in Ahmedabad. With years of
              teaching experience, he has helped countless students build strong conceptual
              foundations in Science and Mathematics.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Under his guidance, students have achieved top scores in Gujarat Board (GSEB) and
              CBSE examinations and secured admissions in reputed institutions across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
