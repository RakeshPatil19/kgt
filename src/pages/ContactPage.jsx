import ContactForm from '../components/ContactForm'
import SectionTitle from '../components/SectionTitle'
import MapView from '../components/MapView'

export default function ContactPage() {
  return (
    <div className="pt-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have questions? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-base font-semibold text-primary mb-3">📍 Our Address</h3>
              <p className="text-gray-500 text-sm">
                Krushn Kunj Shopping Center, Shivdhara Society,<br />
                Arbudanagar, Odhav,<br />
                Ahmedabad, Gujarat 382415
              </p>
              <a
                href="https://maps.google.com/?q=Krushn+Kunj+Shopping+Center+Odhav+Ahmedabad+Gujarat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary text-sm mt-2 hover:underline"
              >
                View on Google Maps &rarr;
              </a>
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
              <h3 className="text-base font-semibold text-primary mb-2">🕐 Office Hours</h3>
              <p className="text-gray-500 text-sm">Mon — Sat, 9:00 AM — 7:00 PM</p>
              <p className="text-gray-500 text-sm">Sunday: Closed</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-base font-semibold text-primary mb-4">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-200">
          <MapView />
        </div>
        <p className="text-center text-xs text-gray-400 mt-2">
          <a
            href="https://www.openstreetmap.org/?mlat=23.0216&mlon=72.6683#map=16/23.0216/72.6683"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            View Larger Map &rarr;
          </a>
        </p>
      </div>
    </div>
  )
}
