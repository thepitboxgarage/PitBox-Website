import { useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'

const ACUITY_OWNER_ID = "39248460"

export function ScheduleEmbed() {
  const navigate = useNavigate()

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === 'acuity_confirmed') {
        navigate({ to: '/book/manual' })
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [navigate])

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://embed.acuityscheduling.com/js/embed.js'
    script.type = 'text/javascript'
    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="rounded-xl overflow-hidden border border-pitbox-border">
      <iframe
        src={`https://app.acuityscheduling.com/schedule.php?owner=${ACUITY_OWNER_ID}&ref=embedded_csp`}
        title="Schedule Appointment"
        width="100%"
        height="800"
        frameBorder={0}
        allow="payment"
      />
    </div>
  )
}
