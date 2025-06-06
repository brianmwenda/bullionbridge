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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Bullion Bridge Store</h1>
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
                Bullion Bridge was founded with a simple mission: to provide access to the finest
                gold products directly from Kenya's rich mining regions. We work closely with local
                miners and certified refineries to ensure authenticity and quality.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experts has experience in the gold industry,
                providing our customers with confidence in every transaction. We understand the
                value of trust when dealing with precious metals.
              </p>
              <p className="text-gray-600">
                From small-scale artisanal mining operations to large commercial ventures, we
                maintain relationships across Kenya's gold-producing regions to source the
                highest quality products for our global clientele.
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
              These core principles guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                Honest business practices and transparent communication in all our dealings
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                Rigorous testing and certification processes ensure product authenticity
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Trust</h3>
              <p className="text-gray-600">
                Building long-term relationships through reliable service and support
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
              Meet the professionals behind Kenyan Gold Store
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
                Direct partnerships with certified mining operations across Kenya
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
