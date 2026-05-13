import { useEffect } from 'react'

const CLEVERWAIVER_TEMPLATE_ID = "6a00e18ba47d80b6f0879440"

export function WaiverEmbed() {
  useEffect(() => {
    const handleScroll = () => {
      const ifr = document.getElementById('ifr_template') as HTMLIFrameElement
      if (!ifr) return
      const s = (document.documentElement.scrollTop || document.body.scrollTop) - ifr.offsetTop
      const h = window.innerHeight
      ifr.contentWindow?.postMessage(
        { type: 'ifr_scroll', scrollTop: s, innerHeight: h },
        'https://app.cleverwaiver.com',
      )
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Hidden links required by CleverWaiver terms */}
      <span><a href="https://www.cleverwaiver.com" style={{ display: 'block', width: 0, height: 0, overflow: 'hidden' }}>online waiver</a></span>
      <span><a href="https://www.cleverwaiver.com" style={{ display: 'block', width: 0, height: 0, overflow: 'hidden' }}>waiver app</a></span>
      <span><a href="https://www.cleverwaiver.com" style={{ display: 'block', width: 0, height: 0, overflow: 'hidden' }}>electronic waiver</a></span>
      <span><a href="https://www.cleverwaiver.com" style={{ display: 'block', width: 0, height: 0, overflow: 'hidden' }}>digital waiver</a></span>
      <iframe
        id="ifr_template"
        style={{ width: '100%', height: 1000 }}
        src={`https://app.cleverwaiver.com/render/templateByRefId/${CLEVERWAIVER_TEMPLATE_ID}`}
        frameBorder={0}
        title="Liability Waiver"
      />
    </>
  )
}
