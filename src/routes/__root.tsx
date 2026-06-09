import { createRootRoute, Navigate, Outlet } from '@tanstack/react-router'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col bg-pitbox-black">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
  notFoundComponent: () => <Navigate to="/404" />,
})
