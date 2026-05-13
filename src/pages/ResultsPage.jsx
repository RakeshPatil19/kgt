import SectionTitle from '../components/SectionTitle'

const results = [
  {
    name: 'Priya Sharma',
    exam: 'Gujarat Board (GSEB) Class 12',
    score: '95.6%',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Rahul Patel',
    exam: 'CBSE Class 10',
    score: '97.2%',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Kavita Desai',
    exam: 'Gujarat Board (GSEB) Class 12',
    score: '94.8%',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Amit Shah',
    exam: 'CBSE Class 12',
    score: '96.1%',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Neha Gupta',
    exam: 'Gujarat Board (GSEB) Class 10',
    score: '98.4%',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Vikas Joshi',
    exam: 'CBSE Class 10',
    score: '95.9%',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Sneha Patel',
    exam: 'Gujarat Board (GSEB) Class 12',
    score: '93.7%',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Arjun Singh',
    exam: 'CBSE Class 10',
    score: '96.8%',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Riya Mehta',
    exam: 'Gujarat Board (GSEB) Class 12',
    score: '95.2%',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Karan Dave',
    exam: 'CBSE Class 12',
    score: '94.5%',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Pooja Verma',
    exam: 'Gujarat Board (GSEB) Class 10',
    score: '97.3%',
    img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Deep Patel',
    exam: 'CBSE Class 10',
    score: '95.1%',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
]

export default function ResultsPage() {
  return (
    <div className="pt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle
          title="Our Student Results"
          subtitle="Celebrating the success and achievements of our bright students"
          gradient
        />

        <p className="text-center text-lg sm:text-xl md:text-2xl font-bold text-secondary mb-8">
          ⭐ Kalaki Stars 2026 ⭐
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {results.map((student) => (
            <div key={student.name} className="bg-white rounded-xl border border-gray-100 overflow-hidden card text-center">
              <div className="aspect-square overflow-hidden bg-gray-50">
                <img
                  src={student.img}
                  alt={student.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-primary truncate">{student.name}</h3>
                <p className="text-xs text-gray-400 truncate">{student.exam}</p>
                <p className="text-lg font-bold text-secondary mt-1">{student.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
