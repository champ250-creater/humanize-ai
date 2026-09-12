export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:px-8 prose prose-zinc prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
      <h1 className="text-3xl font-bold text-zinc-900 mb-8">Privacy Policy</h1>
      <div className="text-zinc-700 space-y-6">
        <p>Last updated: September 12, 2026</p>
        
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 mt-8 mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, including your name, email address, and any content you upload for processing, such as writing samples and documents.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, process payments, communicate with you, and personalize your experience.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 mt-8 mb-4">3. Data Retention</h2>
          <p>We retain your personal information for as long as your account is active or as needed to provide you services, comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 mt-8 mb-4">4. Third-Party Services</h2>
          <p>We use third-party services to operate our platform:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>Clerk:</strong> For authentication and user management.</li>
            <li><strong>Anthropic:</strong> For AI processing and text generation.</li>
            <li><strong>Stripe:</strong> For secure payment processing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 mt-8 mb-4">5. Your Rights</h2>
          <p>Depending on your location (e.g., GDPR in Europe, CCPA in California), you may have the right to access, correct, delete, or restrict the processing of your personal data. Contact us to exercise these rights.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 mt-8 mb-4">6. Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 mt-8 mb-4">7. Children's Privacy</h2>
          <p>Our service is not directed to children under 13, and we do not knowingly collect personal information from children under 13.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 mt-8 mb-4">8. Changes to Privacy Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 mt-8 mb-4">9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@humanizeai.com.</p>
        </section>
      </div>
    </div>
  );
}
