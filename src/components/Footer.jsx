import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">
              Kalaki Group Tution
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students in Ahmedabad with quality education and expert guidance
              to achieve their academic goals.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Courses', to: '/courses' },
                { label: 'Results', to: '/results' },
                { label: 'Contact', to: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Krushn Kunj Shopping Center, Shivdhara Society, Arbudanagar, Odhav, Ahmedabad - 382415</li>
              <li>
                <a href="tel:9327993935" className="hover:text-white transition-colors">+91 93279 93935</a>
              </li>
              <li>
                <a href="mailto:kalakigroup@gmail.com" className="hover:text-white transition-colors">kalakigroup@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Kalaki Group Tution. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
