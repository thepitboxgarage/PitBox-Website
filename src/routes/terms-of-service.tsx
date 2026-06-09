import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms-of-service')({
  component: TermsPage,
})

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-pitbox-text mb-3">{title}</h2>
      <div className="text-pitbox-muted leading-relaxed space-y-3">{children}</div>
    </div>
  )
}

function TermsPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-4">
          Legal
        </p>
        <h1 className="font-display font-black uppercase text-pitbox-text mb-2 text-4xl">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-pitbox-subtle mb-12">
          These terms and conditions (the "Terms and Conditions") govern the use of{' '}
          <strong className="text-pitbox-muted">thepitbox.ca</strong> (the "Site"). This Site is owned and
          operated by The Pit Box.
        </p>

        <div className="prose-like divide-y divide-pitbox-surface-2">
          <div className="pb-8 mb-8 text-pitbox-muted leading-relaxed">
            <p>
              By using this Site, you indicate that you have read and understand these Terms and Conditions and
              agree to abide by them at all times.
            </p>
          </div>

          <Section title="Intellectual Property">
            <p>
              All content published and made available on our Site is the property of The Pit Box and the
              Site's creators. This includes, but is not limited to images, text, logos, documents, downloadable
              files and anything that contributes to the composition of our Site.
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <p>
              The Pit Box and our directors, officers, agents, employees, subsidiaries, and affiliates will not
              be liable for any actions, claims, losses, damages, liabilities and expenses including legal fees
              from your use of the Site.
            </p>
          </Section>

          <Section title="Indemnity">
            <p>
              Except where prohibited by law, by using this Site you indemnify and hold harmless The Pit Box
              and our directors, officers, agents, employees, subsidiaries, and affiliates from any actions,
              claims, losses, damages, liabilities and expenses including legal fees arising out of your use of
              our Site or your violation of these Terms and Conditions.
            </p>
          </Section>

          <Section title="Applicable Law">
            <p>
              These Terms and Conditions are governed by the laws of the Province of British Columbia.
            </p>
          </Section>

          <Section title="Severability">
            <p>
              If at any time any of the provisions set forth in these Terms and Conditions are found to be
              inconsistent or invalid under applicable laws, those provisions will be deemed void and will be
              removed from these Terms and Conditions. All other provisions will not be affected by the removal
              and the rest of these Terms and Conditions will still be considered valid.
            </p>
          </Section>

          <Section title="Changes">
            <p>
              These Terms and Conditions may be amended from time to time in order to maintain compliance with
              the law and to reflect any changes to the way we operate our Site and the way we expect users to
              behave on our Site. We will notify users by email of changes to these Terms and Conditions or post
              a notice on our Site.
            </p>
          </Section>

          <Section title="Contact Details">
            <p>Please contact us if you have any questions or concerns. Our contact details are as follows:</p>
            <ul className="list-none space-y-1 text-sm">
              <li>(257) 757-0973</li>
              <li><a href="mailto:info@thepitbox.ca" className="text-pitbox-amber hover:underline">info@thepitbox.ca</a></li>
              <li>1-5438 176 Street, Surrey BC V3S 4C3</li>
            </ul>
          </Section>
        </div>
      </div>
    </div>
  )
}
