const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const EMBED_SRC = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Unit+1+5438+176+St+Surrey+BC+V3C+4S3&zoom=15`

export function MapEmbed() {
  return (
    <iframe
      src={EMBED_SRC}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}
