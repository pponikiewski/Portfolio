import { useEffect, useState } from 'react'
import { Map, MapMarker, MarkerContent } from '@/components/ui/map'

type Theme = 'light' | 'dark'

const BIELSKO: [number, number] = [19.0438, 49.8224]

function readTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export function HeroMap() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    setTheme(readTheme())
    const observer = new MutationObserver(() => setTheme(readTheme()))
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    return () => observer.disconnect()
  }, [])

  return (
    <Map
      theme={theme}
      center={BIELSKO}
      zoom={1.7}
      projection={{ type: 'globe' }}
      interactive={true}
      attributionControl={false}
      className="hero-map-canvas"
    >
      <MapMarker longitude={BIELSKO[0]} latitude={BIELSKO[1]}>
        <MarkerContent>
          <span className="map-pin" aria-hidden="true" />
        </MarkerContent>
      </MapMarker>
    </Map>
  )
}
