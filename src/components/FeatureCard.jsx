export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl p-6 card border border-gray-100">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-xl mb-4">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
