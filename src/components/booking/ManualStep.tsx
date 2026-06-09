import { useState } from 'react'
import { Link } from '@tanstack/react-router'

const SHOP_RULES = [
  'No smoking, drugs or alcohol in the shop.',
  'Proper PPE is required for the task – gloves or eye-wear, as appropriate.',
  'Once on a lift, you may raise or lower your vehicle.',
  'Respect the work area of others.',
  'Drain fluids in appropriate catch cans provided – petroleum-based fluids or glycol/anti-freeze.',
  'Put away all tools and equipment in drawers and return any borrowed shop tools and equipment. Any missing tools or equipment will be charged to your bill.',
  'Swearing at yourself is allowed. Swearing at others is not.',
  'Use the proper tools and equipment for the task. If you don\'t know how something works, ask staff for help.',
  'Be aware of surrounding environment – people, vehicles, equipment and tools.',
  'Use aisles and walkways. Do not use shortcuts.',
  'Clean up spills immediately and alert staff if you require assistance.',
  'Oil filters are to be left in the catch can and will be disposed of by staff.',
]

const HOUSEKEEPING = [
  'Clean any spills immediately. Ask for assistance if you need help.',
  'Wipe and return tools to appropriate locations in tool box or to the staff to return to the tool room.',
  'Wipe the work bench to clean any debris or fluids.',
  'Place dirty rags in the rag collection hamper.',
  'Sweep bay once you are done.',
  'Place any trash, cardboard, or scrap metal in appropriate bins.',
]

const LIFT_TO_RAISE = [
  'Keep operation site clean.',
  'Lower the lifting arm to its lowest position.',
  'Retract the lifting arm to the shortest position.',
  'Open lifting arms out to the sides.',
  'Move the vehicle between columns — the curved arm of the lift is the front.',
  'Move the lifting arms to the vehicle\'s lifting points. Use the carrier adapter provided by the manufacturer. Swing the lifting arms under the vehicle, lift the vehicle lifting points as recommended by the vehicle manufacturer. If necessary, use the stackable extension adapter or optional saddle adapter to ensure good contact. All four lifting arms must simultaneously touch the vehicle.',
  'Push UP button until the lifting pads contact the underside of the vehicle totally and recheck lifting points.',
  'Continue to raise the lift slowly, ensure the balance of vehicle, lift the vehicle to the desired height, release the UP button.',
  'Press the release handle on power unit to lower the lift to the safety lock position. The vehicle cannot be repaired unless the safety is in lock position.',
]

const LIFT_TO_LOWER = [
  'Clear obstructions around and under the lift and be certain no people are around the lift.',
  'Push UP button to raise the vehicle slightly, then unlock the safety device, lower vehicle by pushing release handle on the power unit.',
  'Open the lifting arms out to the sides and retract the lifting arm to the shortest position.',
  'Drive away the vehicle.',
]

export function ManualStep() {
  const [acknowledged, setAcknowledged] = useState(false)

  return (
    <>
      <div className="bg-pitbox-surface border border-pitbox-border rounded-xl divide-y divide-pitbox-border mb-8">

        {/* Shop Rules */}
        <div className="p-6">
          <h3 className="text-sm font-semibold text-pitbox-text mb-4">Safety in the Shop</h3>
          <ol className="flex flex-col gap-2.5">
            {SHOP_RULES.map((rule, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                <span className="shrink-0 w-5 text-right font-medium text-pitbox-muted">{i + 1}.</span>
                <span>{rule}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Housekeeping */}
        <div className="p-6">
          <h3 className="text-sm font-semibold text-pitbox-text mb-4">Shop Housekeeping</h3>
          <ul className="flex flex-col gap-2.5">
            {HOUSEKEEPING.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-pitbox-amber" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lift: Raise */}
        <div className="p-6">
          <h3 className="text-sm font-semibold text-pitbox-text mb-1">Lift Operation — Raising a Vehicle</h3>
          <p className="text-xs text-pitbox-subtle mb-4">Read all instructions thoroughly before operating the lift. Failure to do so could lead to serious injury or death.</p>
          <ol className="flex flex-col gap-2.5">
            {LIFT_TO_RAISE.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                <span className="shrink-0 w-5 text-right font-medium text-pitbox-muted">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-5 flex flex-col gap-3">
            <div className="rounded-lg border border-yellow-600/40 bg-yellow-600/10 px-4 py-3 text-sm text-yellow-400 leading-relaxed">
              <span className="font-bold uppercase tracking-wide mr-1">Warning:</span>
              It is unsafe to work without locking the safety device after the vehicle has been raised. The vehicle may fall, potentially causing damage to the vehicle and lift, or injury and death to someone nearby.
            </div>
            <div className="rounded-lg border border-red-600/40 bg-red-600/10 px-4 py-3 text-sm text-red-400 leading-relaxed">
              <span className="font-bold uppercase tracking-wide mr-1">Danger:</span>
              When using the lifting points on the chassis recommended by the vehicle manufacturer, follow the instructions carefully. Failure to do so can make the vehicle unstable and fall, which can damage the vehicle and lift, and injure or kill anyone under the vehicle.
            </div>
          </div>
        </div>

        {/* Lift: Lower */}
        <div className="p-6">
          <h3 className="text-sm font-semibold text-pitbox-text mb-4">Lift Operation — Lowering a Vehicle</h3>
          <ol className="flex flex-col gap-2.5">
            {LIFT_TO_LOWER.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                <span className="shrink-0 w-5 text-right font-medium text-pitbox-muted">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

      </div>

      <div className="border-t border-pitbox-surface-2 pt-8 flex flex-col gap-6">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-0.5 shrink-0">
            <input
              type="checkbox"
              checked={acknowledged}
              onChange={(e) => setAcknowledged(e.target.checked)}
              className="sr-only"
            />
            <div className={`w-5 h-5 rounded border transition-colors flex items-center justify-center ${
              acknowledged
                ? 'bg-pitbox-amber border-pitbox-amber'
                : 'bg-transparent border-pitbox-subtle group-hover:border-[#737373]'
            }`}>
              {acknowledged && (
                <svg className="w-3 h-3 text-pitbox-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <span className="text-sm text-pitbox-muted leading-snug">
            I have read and understood the equipment manual above and agree to follow all safety guidelines during my session.
          </span>
        </label>

        <div className="flex justify-end">
          <Link to="/book/waiver">
            <button
              disabled={!acknowledged}
              className="whitespace-nowrap bg-pitbox-amber text-pitbox-black font-bold px-8 py-3 rounded-xl transition-colors flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-pitbox-amber-light disabled:hover:bg-pitbox-amber"
            >
              Continue to Waiver
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
