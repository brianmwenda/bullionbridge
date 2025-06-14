
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
               <div className="w-8 h-8 rounded-full bg-yellow-600 rounded-full"> </div>
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                XicoTrading
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              XicoTrading has been helping clients secure their financial future through strategic gold and silver 
              transactions. As a reliable mandate, we connect buyers with vetted sellers, offering authentic, 
              investment-grade metals with professionalism, transparency, and a strong commitment to long-term value.
            </p>
           
          </div>

      {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop-gold-now" className="text-gray-300 hover:text-yellow-400 transition-colors">Store</Link>
              </li>
              <li>
                <Link to="/learn-more" className="text-gray-300 hover:text-yellow-400 transition-colors">Learn More</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</Link>
              </li>
           
            </ul>
          </div>


          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-yellow-400 transition-colors">FAQ</Link>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-300 hover:text-yellow-400 transition-colors">T&C</a>
              </li>
              <li>
                <a href="/learn-more" className="text-gray-300 hover:text-yellow-400 transition-colors">Returns & Exchanges</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300">+(254) 770 012 574</span>
                
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300">xicotradinglimited@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400 mt-1" />
                <span className="text-gray-300">
                   Nairobi, Kenya<br />
                      East Africa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 XicoTrading. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">
              Terms of Service
            </Link>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
