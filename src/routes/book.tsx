import { createFileRoute, Outlet, useRouterState } from '@tanstack/react-router'
import { BookingSteps } from '../components/booking/BookingSteps'

export const Route = createFileRoute('/book')({
  component: BookLayout,
})

function BookLayout() {
  const { location } = useRouterState()
  const step: 1 | 2 | 3 =
    location.pathname.startsWith('/book/schedule') ? 3 :
    location.pathname.startsWith('/book/waiver') ? 2 :
    1

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <BookingSteps current={step} />
        </div>
        <Outlet />
      </div>
    </div>
  )
}
