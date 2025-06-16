
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                🏆 Trusted Gold Mandates, Authentic Deals.
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Invest in 
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Gold</span>
                <br />
                Secure Your Future
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                At XicoTrading, we connect serious buyers with verified gold sellers for secure, 
                commission-based transactions. Whether you're investing in high-purity gold bars 
                or sourcing bulk supply, we ensure every deal is authentic, transparent, and competitively priced.


              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop-gold-now"> <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold">
                View Available Gold 
              </Button></Link>
              <Link to="/learn-more"><Button size="lg" variant="outline" className="border-yellow-400 text-black hover:bg-yellow-400 hover:text-white">
                  Learn More
              </Button></Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">95.91%</div>
                <div className="text-sm text-gray-400">Raw Gold</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">50K+</div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>

            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-3xl"></div>
            <img 
              src="/lovable-uploads/cc73534c-1aea-473e-91c6-0a4ca2af6021.jpg" 
              alt="Gold Bar"
              className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
              94.91% - 97.63% Pure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
