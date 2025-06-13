import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

const TermsOfService = () => {
  return (
    <PageWrapper>
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using XicoTrading services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service govern your use of our website and services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Product Information</h2>
            <p>All precious metals sold through XicoTrading are:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Certified for purity and authenticity</li>
              <li>Sourced from reputable refineries</li>
              <li>Accompanied by certificates of authenticity</li>
              <li>Subject to market price fluctuations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Pricing and Payment</h2>
            <p>Our pricing policies include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prices are subject to change based on market conditions</li>
              <li>All prices are in USD unless otherwise specified</li>
              <li>Payment must be received before shipment</li>
              <li>We accept major credit cards and wire transfers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Shipping and Delivery</h2>
            <p>Shipping terms and conditions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All shipments are fully insured</li>
              <li>Delivery times vary by location and product</li>
              <li>Signature confirmation required for delivery</li>
              <li>Customer responsible for import duties and taxes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Returns and Exchanges</h2>
            <p>Our return policy includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Returns accepted within 30 days of delivery</li>
              <li>Products must be in original condition</li>
              <li>Return shipping fees may apply</li>
              <li>Refunds processed within 5-7 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Investment Disclaimer</h2>
            <p className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <strong>Important:</strong> Precious metals investments carry inherent risks. Past performance does not guarantee future results. Please consult with a financial advisor before making investment decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p>XicoTrading shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or products.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Email:</strong> Xicotradinglimited@gmail.com</p>
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

export default TermsOfService;
