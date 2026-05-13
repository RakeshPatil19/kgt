import FeatureCard from '../components/FeatureCard'
import SectionTitle from '../components/SectionTitle'

const features = [
  {
    icon: '👨‍🏫',
    title: 'Expert Faculty',
    description: 'Learn from experienced educators dedicated to teaching Physics, Chemistry, and Mathematics for Gujarat Board & CBSE students.',
  },
  {
    icon: '📖',
    title: 'Quality Study Material',
    description: 'Comprehensive, exam-oriented study material covering complete syllabus with practice questions.',
  },
  {
    icon: '📝',
    title: 'Regular Testing',
    description: 'Weekly tests and mock exams to track progress and identify areas for improvement.',
  },
  {
    icon: '❓',
    title: 'Doubt Clearing',
    description: 'Dedicated doubt-clearing sessions ensuring every concept is crystal clear.',
  },
  {
    icon: '👥',
    title: 'Small Batches',
    description: 'Small batch sizes ensure personal attention and focused preparation for every student.',
  },
  {
    icon: '🏆',
    title: 'Proven Results',
    description: 'Consistent success with students achieving top scores in Gujarat Board & CBSE examinations.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Choose Us"
          subtitle="What makes Kalaki Group Tution the preferred choice in Ahmedabad"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
