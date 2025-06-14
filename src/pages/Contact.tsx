
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

const Contact = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Get in touch with our precious metals experts. We're here to help with your gold investment journey.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              <div className="grid md:grid-cols-2 gap-12">
                
                {/* Contact Info */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-yellow-600 mb-4">Phone</h3>
                      <p className="text-gray-600 mb-2">Sales: +(254) 770 012 574</p>
                       <p className="text-gray-600 text-sm">Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-yellow-600 mb-4">Email</h3>
                      <p className="text-gray-600 mb-2">xicotradinglimited@gmail.com</p>
                      <p className="text-gray-600 text-sm">We respond within 24 hours</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-yellow-600 mb-4">Address</h3>
                      <p className="text-gray-600 mb-2">Lavington, Kenya</p>
                      <p className="text-gray-600 mb-2">00100, Nairobi</p>
                      <p className="text-gray-600 text-sm">Visit by appointment only</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-yellow-600 mb-4">WhatsApp</h3>
                      <p className="text-gray-600 mb-2">+(254) 770 012 574</p>
                      <p className="text-gray-600 text-sm">Quick questions and order updates</p>
                    </div>
                  </div>
                </div>

                {/* Business Hours & FAQ */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Business Hours</h2>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday</span>
                        <span className="text-gray-800 font-semibold">8:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday</span>
                        <span className="text-gray-800 font-semibold">9:00 AM - 4:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sunday</span>
                        <span className="text-gray-800 font-semibold">Closed</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Questions?</h3>
                  <div className="space-y-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">What forms of payment do you accept?</h4>
                      <p className="text-gray-600 text-sm">We accept bank wire transfers, cashier's checks, and personal checks (with verification).</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Do you offer storage services?</h4>
                      <p className="text-gray-600 text-sm">Yes, we partner with secure depositories to offer insured storage solutions.</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">What is your return policy?</h4>
                      <p className="text-gray-600 text-sm">We offer a 7-day return policy on most products. Items must be in original condition.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  );
};

export default Contact;