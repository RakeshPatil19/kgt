import ContactForm from '../components/ContactForm'
import SectionTitle from '../components/SectionTitle'
import MapView from '../components/MapView'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have questions? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-base font-semibold text-primary mb-3">📍 Our Address</h3>
              <p className="text-gray-500 text-sm">
                Krushn Kunj Shopping Center, Shivdhara Society,<br />
                Arbudanagar, Odhav,<br />
                Ahmedabad, Gujarat 382415
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-base font-semibold text-primary mb-3">📞 Contact</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <a href="tel:9327993935" className="text-gray-500 hover:text-primary transition-colors">
                    +91 93279 93935
                  </a>
                </p>
                <p>
                  <a href="mailto:kalakigroup@gmail.com" className="text-gray-500 hover:text-primary transition-colors">
                    kalakigroup@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-base font-semibold text-primary mb-3">🕐 Office Hours</h3>
              <p className="text-gray-500 text-sm">Mon — Sat, 9:00 AM — 7:00 PM</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-base font-semibold text-primary mb-4">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>

        <div className="mt-8 rounded-xl overflow-hidden border border-gray-200">
          <MapView height="h-64" />
        </div>
      </div>
    </section>
  )
}
