import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({ iconUrl, iconRetinaUrl, shadowUrl })

export default function MapView({ height = 'h-72' }) {
  const mapRef = useRef(null)
  const mapInstance = useRef(null)

  useEffect(() => {
    if (mapInstance.current || !mapRef.current) return

    const map = L.map(mapRef.current, {
      center: [23.0216, 72.6683],
      zoom: 16,
      zoomControl: true,
      scrollWheelZoom: false,
    })

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(map)

    const marker = L.marker([23.0216, 72.6683]).addTo(map)
    marker.bindPopup('<b>Kalaki Group Tution</b><br>Krushn Kunj Shopping Center, Odhav, Ahmedabad').openPopup()

    mapInstance.current = map

    return () => {
      map.remove()
      mapInstance.current = null
    }
  }, [])

  return (
    <div
      ref={mapRef}
      className={`${height} w-full rounded-xl border border-gray-200 shadow-sm z-0`}
    />
  )
}
