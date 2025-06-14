import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Onion Note",
  description: "Terms of Service for Onion Note - Privacy-First Note Sharing Service",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen p-8 mt-20">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="text-sm text-gray-600 mb-8">
            Last modified: 2025-06-14
          </p>

          <h2 className="text-xl font-semibold mb-4">1. Service Description</h2>
          <p className="mb-6">
            Onion Note is a free web-based service that allows users to create encrypted notes that they can share 
            over the internet as unique one-time-use HTTPS URLs (hereafter referred to as links) which by default 
            expire after its first access via any web browser.
          </p>

          <h2 className="text-xl font-semibold mb-4">2. User Responsibilities</h2>
          <p className="mb-6">
            Users are solely responsible for:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Maintaining the confidentiality of their note links and passwords</li>
            <li>Choosing appropriate communication channels for sharing note links</li>
            <li>The content of their notes and ensuring it complies with applicable laws</li>
            <li>Any consequences resulting from the loss or unauthorized access to their note links</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">3. Disclaimer of Warranties</h2>
          <p className="mb-6">
            Onion Note and its operators make no warranties, express or implied, and hereby disclaim and negate 
            all other warranties, including without limitation, implied warranties or conditions of merchantability, 
            fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p className="mb-6">
            In no event shall Onion Note or its operators be liable for any damages (including, without limitation, 
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
            to use the materials on Onion Note's website or service, even if Onion Note or an authorized representative 
            has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2 className="text-xl font-semibold mb-4">4. Limitation of Liability</h2>
          <p className="mb-6">
            Onion Note shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary 
            damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other 
            intangible losses resulting from:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>The use or inability to use the service</li>
            <li>Unauthorized access to or alteration of your notes</li>
            <li>Any other matter relating to the service</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">5. Service Modifications</h2>
          <p className="mb-6">
            Onion Note reserves the right to modify or discontinue, temporarily or permanently, the service with or 
            without notice. We shall not be liable to you or any third party for any modification, suspension, or 
            discontinuance of the service.
          </p>

          <h2 className="text-xl font-semibold mb-4">6. Prohibited Uses</h2>
          <p className="mb-6">
            Users are prohibited from using the service to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Transmit any material that is illegal, harmful, threatening, abusive, harassing, defamatory, or invasive of privacy</li>
            <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
            <li>Interfere with or disrupt the service or servers or networks connected to the service</li>
            <li>Attempt to gain unauthorized access to any portion of the service or any other systems or networks connected to the service</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">7. Use of Cookies</h2>
          <p className="mb-6">
            Currently, Onion Note does not use any cookies. If we implement cookie usage in the future,
            we will update this policy and notify users of any changes.
          </p>

          <h2 className="text-xl font-semibold mb-4">8. Governing Law</h2>
          <p className="mb-6">
            These terms shall be governed by and construed in accordance with the laws of Japan, without regard to 
            its conflict of law provisions. Any disputes arising under or in connection with these terms shall be 
            subject to the exclusive jurisdiction of the courts of Japan.
          </p>

          <h2 className="text-xl font-semibold mb-4">9. Changes to Terms</h2>
          <p className="mb-6">
            Onion Note reserves the right to modify these terms at any time. We will notify users of any material 
            changes by posting the new terms on this page. Your continued use of the service after such modifications 
            will constitute your acknowledgment of the modified terms.
          </p>
        </div>
      </div>
    </main>
  );
} 