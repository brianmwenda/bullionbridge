
import { useState } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import SearchDialog from "./SearchDialog";
import CartDialog from "./CartDialog";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { getCartCount } = useCart();

  const cartCount = getCartCount();
  return (
    <>
      <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50 font-sans">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full"></div>
              <span className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                BullionBridge
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-base font-medium">
              <Link to="/" className="transition-colors hover:text-yellow-400">Home</Link>
              <Link to="/about" className="transition-colors hover:text-yellow-400">About</Link>
              <Link to="/shop-gold-now" className="transition-colors hover:text-yellow-400">Store</Link>
              <Link to="/learn-more" className="transition-colors hover:text-yellow-400">Returns & Exchanges</Link>
              
              <Link to="/contact" className="transition-colors hover:text-yellow-400">Contact</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="hidden sm:flex text-white hover:text-yellow-400"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:text-yellow-400 relative"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingCart className="w-4 h-4" />
                  {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Animated Mobile Navigation */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
              menuOpen ? "max-h-60 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
            }`}
          >
            <nav className="flex flex-col gap-2 px-4 pb-4 pt-2 text-base font-medium">
              <Link to="/" className="text-left text-white hover:text-yellow-400 transition-colors py-2">Home</Link>
              <Link to="/about" className="text-left text-white hover:text-yellow-400 transition-colors py-2">About</Link>
              <Link to="/shop-gold-now" className="text-left text-white hover:text-yellow-400 transition-colors py-2">Store</Link>
              <Link to="/learn-more" className="text-left text-white hover:text-yellow-400 transition-colors py-2">Returns & Exchanges</Link>
              
              <Link to="/contact" className="text-left text-white hover:text-yellow-400 transition-colors py-2">Contact</Link>
              <Button 
                variant="ghost" 
                size="sm" 
                className="justify-start text-white hover:text-yellow-400 px-0 py-2"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="w-4 h-4 mr-2" />
                Search Products
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      <CartDialog open={cartOpen} onOpenChange={setCartOpen} />
    </>
  );
};

export default Header;