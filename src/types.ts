// ─── Duration ───────────────────────────────────────────────────────────────

export type Duration = 'hourly' | 'half-day' | 'full-day'

export interface DurationOption {
  key: Duration
  label: string
  /** minutes */
  duration: number
  price: number
  description: string
}

// ─── Tools & Bays ────────────────────────────────────────────────────────────

export type ToolCategory =
  | 'Lifting & Safety'
  | 'Hand Tools'
  | 'Power Tools'
  | 'Diagnostic'
  | 'Fluid Service'
  | 'Specialty'

export interface Tool {
  name: string
  category: ToolCategory
  description: string
}

export interface Bay {
  id: number
  name: string
  /** square footage */
  sqft: number
  tools: Tool[]
}
