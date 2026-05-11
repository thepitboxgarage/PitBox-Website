import { createFileRoute } from '@tanstack/react-router'
import { BaysHero } from '../components/bays/BaysHero'
import { BayOverview } from '../components/bays/BayOverview'
import { BayManualSystem } from '../components/bays/BayManualSystem'
import { BayToolInventory } from '../components/bays/BayToolInventory'

export const Route = createFileRoute('/bays')({
  component: BaysPage,
})

function BaysPage() {
  return (
    <div className="pt-24">
      <BaysHero />
      <BayOverview />
      <BayManualSystem />
      <BayToolInventory />
    </div>
  )
}
