import { Link } from 'react-router-dom'
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

export default function Courses() {
  return (
    <section id="courses" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Courses"
          subtitle="Gujarat Board (GSEB) & CBSE focused programs for every student"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <CourseInfoCard key={course.title} {...course} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            Enroll Now — Limited Seats
          </Link>
        </div>
      </div>
    </section>
  )
}
