import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/404')({
  component: NotFoundPage,
})

function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-4">404</p>
      <h1 className="font-display font-black uppercase text-pitbox-text mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05 }}>
        Page Not Found
      </h1>
      <p className="text-pitbox-muted text-lg mb-10 max-w-md">
        We couldn't find what you were looking for. The page may have moved or doesn't exist.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/">
          <button className="bg-pitbox-amber text-pitbox-black font-bold px-8 py-3 rounded-xl hover:bg-pitbox-amber-light transition-colors">
            Back to Home
          </button>
        </Link>
        <Link to="/book">
          <button className="border border-pitbox-border text-pitbox-muted font-semibold px-8 py-3 rounded-xl hover:text-pitbox-text hover:border-pitbox-subtle transition-colors">
            Book a Bay
          </button>
        </Link>
      </div>
    </div>
  )
}
