import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPage,
})

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-pitbox-text mb-3">{title}</h2>
      <div className="text-pitbox-muted leading-relaxed space-y-3">{children}</div>
    </div>
  )
}

function PrivacyPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-pitbox-amber text-xs font-semibold uppercase tracking-widest mb-4">
          Legal
        </p>
        <h1 className="font-display font-black uppercase text-pitbox-text mb-2 text-4xl">
          Privacy Policy
        </h1>
        <p className="text-sm text-pitbox-subtle mb-12">
          <strong className="text-pitbox-muted">thepitbox.ca</strong> &mdash; Effective date: June 1, 2026
        </p>

        <div className="prose-like divide-y divide-pitbox-surface-2">
          <div className="pb-8 mb-8 text-pitbox-muted leading-relaxed space-y-3">
            <p>
              thepitbox.ca (the "Site") is owned and operated by The Pit Box. The Pit Box can be contacted at:
            </p>
            <ul className="list-none space-y-1 text-sm">
              <li><a href="mailto:tyler@thepitbox.ca" className="text-pitbox-amber hover:underline">tyler@thepitbox.ca</a></li>
              <li>(257) 757-0973</li>
              <li>1-5438 176 Street, Surrey BC V3S 4C3</li>
            </ul>
          </div>

          <Section title="Purpose">
            <p>
              The purpose of this Privacy Policy is to inform users of our Site of the following:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>The personal data we will collect;</li>
              <li>Use of collected data;</li>
              <li>Who has access to the data collected;</li>
              <li>The rights of Site users; and</li>
              <li>The Site's cookie policy.</li>
            </ul>
            <p>This Privacy Policy applies in addition to the terms and conditions of our Site.</p>
          </Section>

          <Section title="Consent">
            <p>By using our Site users agree that they consent to:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>The conditions set out in this Privacy Policy; and</li>
              <li>The collection, use, and retention of the data listed in this Privacy Policy.</li>
            </ul>
          </Section>

          <Section title="Personal Data We Collect">
            <p>
              We only collect data that helps us achieve the purpose set out in this Privacy Policy. We will not
              collect any additional data beyond the data listed below without notifying you first.
            </p>
            <p className="font-medium text-pitbox-text">Data Collected in a Non-Automatic Way</p>
            <p>We may also collect the following data when you perform certain functions on our Site:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>First and last name;</li>
              <li>Date of birth;</li>
              <li>Email address;</li>
              <li>Phone number;</li>
              <li>Address; and</li>
              <li>Payment information.</li>
            </ul>
            <p>This data may be collected using the following methods: online booking.</p>
          </Section>

          <Section title="How We Use Personal Data">
            <p>
              Data collected on our Site will only be used for the purposes specified in this Privacy Policy or
              indicated on the relevant pages of our Site. We will not use your data beyond what we disclose in
              this Privacy Policy.
            </p>
            <p>
              The data we collect when the user performs certain functions may be used for the following purposes:
              communication and invoicing.
            </p>
          </Section>

          <Section title="Who We Share Personal Data With">
            <p className="font-medium text-pitbox-text">Employees</p>
            <p>
              We may disclose user data to any member of our organization who reasonably needs access to user data
              to achieve the purposes set out in this Privacy Policy.
            </p>
            <p className="font-medium text-pitbox-text">Third Parties</p>
            <p>We may share user data with the following third parties: invoicing software.</p>
            <p>We may share user data with third parties for the following purposes: adding appointments into calendars.</p>
            <p>Third parties will not be able to access user data beyond what is reasonably necessary to achieve the given purpose.</p>
            <p className="font-medium text-pitbox-text">Other Disclosures</p>
            <p>We will not sell or share your data with other third parties, except in the following cases:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>If the law requires it;</li>
              <li>If it is required for any legal proceeding;</li>
              <li>To prove or protect our legal rights; and</li>
              <li>To buyers or potential buyers of this company in the event that we seek to sell the company.</li>
            </ul>
            <p>
              If you follow hyperlinks from our Site to another site, please note that we are not responsible for
              and have no control over their privacy policies and practices.
            </p>
          </Section>

          <Section title="How Long We Store Personal Data">
            <p>User data will be stored for ten years.</p>
            <p>You will be notified if your data is kept for longer than this period.</p>
            <p>
              While we take all reasonable precautions to ensure that user data is secure and that users are
              protected, there always remains the risk of harm. The Internet as a whole can be insecure at times
              and therefore we are unable to guarantee the security of user data beyond what is reasonably
              practical.
            </p>
          </Section>

          <Section title="International Data Transfers">
            <p>
              We transfer user personal data to the following countries: United States. When we transfer user
              personal data we will protect that data as described in this Privacy Policy and comply with
              applicable legal requirements for transferring personal data internationally.
            </p>
          </Section>

          <Section title="Children">
            <p>
              We do not knowingly collect or use personal data from children under 13 years of age. If we learn
              that we have collected personal data from a child under 13 years of age, the personal data will be
              deleted as soon as possible. If a child under 13 years of age has provided us with personal data
              their parent or guardian may contact our privacy officer.
            </p>
          </Section>

          <Section title="Cookie Policy">
            <p>
              A cookie is a small file, stored on a user's hard drive by a website. Its purpose is to collect
              data relating to the user's browsing habits. You can choose to be notified each time a cookie is
              transmitted. You can also choose to disable cookies entirely in your internet browser, but this may
              decrease the quality of your user experience.
            </p>
            <p>We do not use cookies on our Site.</p>
          </Section>

          <Section title="Modifications">
            <p>
              This Privacy Policy may be amended from time to time in order to maintain compliance with the law
              and to reflect any changes to our data collection process. When we amend this Privacy Policy we
              will update the "Effective Date" at the top of this Privacy Policy. We recommend that our users
              periodically review our Privacy Policy to ensure that they are notified of any updates. If
              necessary, we may notify users by email of changes to this Privacy Policy.
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}
