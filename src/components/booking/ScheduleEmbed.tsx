import { useEffect } from 'react'
import { ACUITY_OWNER_ID } from '../../lib/constants'

export function ScheduleEmbed() {
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
    <div className="rounded-xl overflow-hidden border border-[#262626]">
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
