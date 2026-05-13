export default function CourseInfoCard({ title, subjects, description, icon }) {
  return (
    <div className="bg-white rounded-xl p-6 card border border-gray-100">
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="text-base font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4 leading-relaxed">{description}</p>
      {subjects && (
        <div className="flex flex-wrap gap-1.5">
          {subjects.map((s) => (
            <span
              key={s}
              className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md"
            >
              {s}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
