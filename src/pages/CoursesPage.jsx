import CourseInfoCard from '../components/CourseInfoCard'
import SectionTitle from '../components/SectionTitle'

const courses = [
  {
    icon: '📚',
    title: 'Board Exam Prep (Class 11 & 12)',
    description: 'Comprehensive coaching for Gujarat Board (GSEB) & CBSE. Full syllabus coverage with tests, assignments, and doubt-clearing sessions.',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
  },
  {
    icon: '🧩',
    title: 'Foundation Course (Class 9 & 10)',
    description: 'Strong foundations for GSEB & CBSE syllabus. Science, Maths — taught with conceptual clarity and regular practice.',
    subjects: ['Science', 'Mathematics', 'English'],
  },
  {
    icon: '🔬',
    title: 'Science Specialization',
    description: 'Focused coaching in Physics, Chemistry, and Biology for students aiming to strengthen science fundamentals.',
    subjects: ['Physics', 'Chemistry', 'Biology'],
  },
  {
    icon: '📐',
    title: 'Mathematics Excellence',
    description: 'Master Mathematics from basic concepts to advanced problem-solving techniques.',
    subjects: ['Algebra', 'Geometry', 'Calculus'],
  },
  {
    icon: '🎯',
    title: 'NDA Written Exam',
    description: 'Preparation as per UPSC NDA pattern with mock tests, previous year papers, and weekly doubt sessions.',
    subjects: ['Mathematics', 'General Ability', 'English'],
  },
  {
    icon: '📝',
    title: 'Crash Courses & Test Series',
    description: 'Intensive revision programs and mock tests for final board exams and competitive entrance tests.',
    subjects: ['Full Syllabus', 'Mock Tests', 'Revision'],
  },
]

const faqs = [
  { q: 'What courses do you offer?', a: 'Board Exam prep for GSEB & CBSE (Class 9-12), Foundation courses, Science & Math specialization, NDA preparation, and Crash Courses.' },
  { q: 'Where are you located?', a: 'Krushn Kunj Shopping Center, Shivdhara Society, Arbudanagar, Odhav, Ahmedabad, Gujarat 382415.' },
  { q: 'How can I enroll?', a: 'Call or WhatsApp +91 93279 93935, email kalakigroup@gmail.com, or visit our center directly.' },
  { q: 'Do you offer online classes?', a: 'Yes, we offer both online and offline coaching options.' },
]

export default function CoursesPage() {
  return (
    <div className="pt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle
          title="Our Courses"
          subtitle="Gujarat Board (GSEB) & CBSE focused programs for every student"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {courses.map((course) => (
            <CourseInfoCard key={course.title} {...course} />
          ))}
        </div>

        <SectionTitle title="FAQs" subtitle="Got questions? We have answers." />
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="bg-white rounded-lg border border-gray-200">
              <summary className="px-5 py-3.5 text-primary font-medium text-sm cursor-pointer list-none flex items-center justify-between">
                {faq.q}
                <svg className="w-4 h-4 text-gray-400 shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-3.5 text-gray-500 text-sm border-t border-gray-100 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            Enroll Now — Limited Seats
          </a>
        </div>
      </div>
    </div>
  )
}
