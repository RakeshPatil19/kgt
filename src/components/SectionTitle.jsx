export default function SectionTitle({ title, subtitle, light }) {
  return (
    <div className="text-center mb-12">
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      <div className="w-16 h-1 bg-secondary mx-auto mb-4 rounded-full" />
      {subtitle && (
        <p className={`max-w-2xl mx-auto text-base sm:text-lg ${light ? 'text-white/60' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
