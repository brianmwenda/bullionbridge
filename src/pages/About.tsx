import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

const About = () => {
  return (
    <PageWrapper>
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Gold Mandate</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted partner in premium gold since 2015
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                GoldMandate was founded with a clear purpose: <strong> to bridge trusted gold sellers 
                  from rich mining regions with serious global buyers. </strong> 
                  
                  We work directly with vetted small-scale miners, licensed dealers, and 
                  certified refineries to ensure that every transaction is rooted in authenticity, compliance, and quality.


              </p>
              <p className="text-gray-600 mb-4">
                From artisanal operations to large-scale ventures, our mandate relationships span across Kenya’s key gold-producing zones. Backed by industry experience and a strong commitment to transparency, our team provides buyers with the confidence and clarity they need when sourcing investment-grade gold.


              </p>
              <p className="text-gray-600">
                At GoldMandate, we understand that in the gold trade, trust isn't optional, it's everything.
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/cc73534c-1aea-473e-91c6-0a4ca2af6021.jpg" 
                alt="Gold mining in Kenya"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At GoldMandate, our commitment to trust, transparency, and authenticity is unwavering. 
              These core principles guide every transaction we undertake, ensuring that our clients and 
              partners can rely on us to deliver consistent results. We connect verified gold sellers 
              with global buyers, ensuring certified quality and secure dealings. This dedication to our 
              values makes us a trusted partner in sourcing gold and investment-grade precious metals worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We uphold honest business practices and maintain transparent communication in every 
                transaction. At GoldMandate, integrity is the foundation of our role as trusted intermediaries, 
                ensuring both gold buyers and sellers can engage with confidence, knowing every deal is handled
                 with professionalism, ethics, and full disclosure.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                At GoldMandate, quality is non-negotiable. Every gold product we facilitate undergoes rigorous testing 
                and is backed by trusted certification to ensure authenticity and purity. Our commitment to high standards 
                guarantees that buyers receive only verified, investment-grade gold from reliable sources across Kenya’s gold-producing regions.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Trust</h3>
              <p className="text-gray-600">
                Trust is at the heart of GoldMandate. We build lasting relationships by delivering consistent, reliable service and dedicated support. 
                Through verified partnerships and transparent processes, we ensure that every gold transaction is secure, compliant, 
                and backed by the confidence our global clients depend on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the professionals behind GoldMandate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">

              <img 
                  src="/lovable-uploads/mine icon.png" 
                  alt="Mining Operations" 
                  className="w-20 h-20 mx-auto mb-4 object-cover"
                />
              <h3 className="text-xl font-bold mb-2">Mining Operations</h3>
              <p className="text-gray-600">
                Direct partnerships with certified mining operations across the world.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
               <img 
                  src="/lovable-uploads/quality.png" 
                  alt="Mining Operations" 
                  className="w-20 h-20 mx-auto mb-4 object-cover"
                />
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Certified gemologists and metallurgists ensure product authenticity
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img 
                  src="/lovable-uploads/logistics.png" 
                  alt="Mining Operations" 
                  className="w-20 h-20 mx-auto mb-4 object-cover"
                />
              <h3 className="text-xl font-bold mb-2">Global Logistics</h3>
              <p className="text-gray-600">
                Secure international shipping and handling of precious metals
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageWrapper>
  );
};

export default About;
