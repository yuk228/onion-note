import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Onion Note",
  description: "Privacy Policy for Onion Note - Privacy-First Note Sharing Service",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen p-8 mt-20">
      <div className="max-w-4xl mx-auto bg-background rounded-lg shadow-lg p-8 border border-border">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose max-w-none">
          <p className="text-sm text-muted-foreground mb-8">Last modified: 2025-06-14</p>

          <p className="mb-6">
            At Onion Note, privacy is taken very seriously, since the main purpose of the site is to
            preserve it. This policy outlines the measures taken by Onion Note to protect the
            privacy of its users.
          </p>

          <h2 className="text-xl font-semibold mb-4">1. Service Description</h2>
          <p className="mb-6">
            Onion Note is a free web-based service that allows users to create encrypted notes that
            they can share over the internet as unique one-time-use HTTPS URLs (hereafter referred
            to as links) which by default expire after its first access via any web browser.
          </p>
          <p className="mb-6">
            As Onion Note does not provide any means for transmitting the link, the act of sending
            the link is the full responsibility of Onion Note users.
          </p>
          <p className="mb-6">
            Depending on the communication channel of your choice (e.g., e-mail, fax, SMS, phone,
            instant messaging, social media), there may be a certain risk that third parties
            intercept your communication, get knowledge of the communicated link and thus may be
            able to read your note.
          </p>

          <h2 className="text-xl font-semibold mb-4">
            2. How the Notes and Their Contents are Processed
          </h2>
          <p className="mb-6">
            The link is generated in the user's browser and at no time is sent as such to Onion
            Note. The link is thus in the sender's (and later possibly in the recipient's) hands
            only. Therefore, there is no way to recover a note if an Onion Note user loses the link.
          </p>
          <p className="mb-6">
            Since only the link binds the decryption key to the note's content and since Onion Note
            does not have the link, at no time is any note held in any readable format state at
            Onion Note. This assures that nobody (including Onion Note's administrators) can read a
            note.
          </p>
          <p className="mb-6">
            When using Onion Note's default functionality, when a note is retrieved, its data is
            completely removed from Onion Note; there is absolutely no way to recover it again.
          </p>
          <p className="mb-6">
            When a note is not retrieved after 30 days, Onion Note removes it permanently, just as
            if it were read.
          </p>

          <h2 className="text-xl font-semibold mb-4">3. Processing of IP Addresses</h2>
          <p className="mb-6">
            Onion Note processes IP addresses only for rate limiting purposes and to enable
            communication with Onion Note's servers. IP addresses are not logged and are deleted as
            soon as they are no longer needed for the purpose of communication.
          </p>

          <h2 className="text-xl font-semibold mb-4">4. Pseudonymous Data</h2>
          <p className="mb-6">
            The creator of the note can introduce personal data into the note. Even though this data
            is encrypted, the data can be decrypted again and thus constitutes pseudonymous
            (personal) data. In any case, one cannot deduce the note's creator from Onion Note's
            database, as Onion Note does not store IP addresses.
          </p>
          <p className="mb-6">
            The decryption of the note's data is in the users' hands (sender and recipient). Onion
            Note is not able to decrypt the note and access the data (personal or otherwise)
            introduced by the creator since Onion Note is never in possession of the decryption key
            which is contained only in the link.
          </p>

          <h2 className="text-xl font-semibold mb-4">5. Disclaimer</h2>
          <p className="mb-6">
            When a person clicks the Onion Note's link, Onion Note declines any responsibility
            related to the note's content.
          </p>

          <h2 className="text-xl font-semibold mb-4">6. Disclosure of Data to Third Party</h2>
          <p className="mb-6">
            Onion Note does not share nor sell any information to others, nor use it in any way not
            mentioned in this Privacy Policy.
          </p>

          <h2 className="text-xl font-semibold mb-4">7. Cookies</h2>
          <p className="mb-6">
            Currently, Onion Note does <strong>not</strong> use any cookies or local storage for
            tracking, analytics, or personalization. If we decide to implement cookies in the
            future—for example, to remember language preferences or to improve service usability—we
            will update this Privacy Policy in advance and request explicit consent from users where
            required by applicable law.
          </p>

          <h2 className="text-xl font-semibold mb-4">8. Children</h2>
          <p className="mb-6">
            Onion Note does not target and is not intended to attract children under the age of 16.
            Minors must obtain express consent from their parents or legal guardians prior to
            accessing or using Onion Note.
          </p>

          <h2 className="text-xl font-semibold mb-4">9. Validity of this Privacy Policy</h2>
          <p className="mb-6">
            Please note that this Privacy Policy may change from time to time. We expect most
            changes to be minor. Regardless, we will post any Policy changes on this page, and if
            the changes are significant, we will provide a more prominent notice such as a message
            on the home page. Each version of this Policy will be identified at the top of the page
            by its effective date.
          </p>
        </div>
      </div>
    </main>
  );
}
