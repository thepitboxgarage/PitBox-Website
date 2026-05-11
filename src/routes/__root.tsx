import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
})
