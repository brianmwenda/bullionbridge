import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

const PrivacyPolicy = () => {
  return (
    <PageWrapper>
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p>At GoldMandate, we collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Purchase history and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your account and purchases</li>
              <li>Provide customer support</li>
              <li>Send you promotional communications (with your consent)</li>
              <li>Improve our products and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers who assist us in operating our business</li>
              <li>Payment processors for transaction processing</li>
              <li>Shipping companies for order fulfillment</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>SSL encryption for data transmission</li>
              <li>Secure data storage systems</li>
              <li>Regular security audits</li>
              <li>Limited access to personal information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Email:</strong> goldmandate254@gmail.com</p>
              <p><strong>Phone:</strong> +(254) 770 012 574</p>
              <p><strong>Address:</strong> Nairobi, Kenya, East Africa</p>
            </div>
          </section>

          <p className="text-sm text-gray-600 mt-8">Last updated: June 2025</p>
        </div>
      </div>
      <Footer />
    </div>
    </PageWrapper>
  );
};

export default PrivacyPolicy;