import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Filter, SortAsc, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const ShopGoldNow = () => {
  const [filterType, setFilterType] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const { addToCart } = useCart();
  const { toast } = useToast();

  const products = [
    {
       id: 1,
      name: "23k Gold Bars - DRC",
      price: 70000.00,
      priceText: "$70,000.00",
      originalPrice: null,
      image: "/lovable-uploads/8fa12c23-7e6b-4dd0-95a3-95b4419b4d4f.png",
      badge: "Best Seller",
      rating: 8.5,
      reviews: 156,
      type: "bars"
    },
    {
      id: 2,
      name: "23k Gold Nuggets Rough",
      price: 70000.00,
      priceText: "$70,000.00",
      originalPrice: null,
      image: "/lovable-uploads/3eab1b5f-995d-42f3-a571-8593e7ef7d82.png",
      badge: "Rare",
      rating: 9.5,
      reviews: 89,
      type: "nuggets"
    },
    {
      id: 3,
      name: "23k Gold Nuggets Rounded",
      price: 70000.00,
      priceText: "$70,000.00",
      originalPrice: null,
      image: "/lovable-uploads/a5a2b5e8-cf09-4c93-af15-821caa576802.jpg",
      badge: "Limited",
      rating: 9.0,
      reviews: 34,
      type: "collections"
    },
    {
      id: 4,
      name: "22k Gold Bars - Raw Gold",
      price: 65000.00,
      priceText: "$65,000.00",
      originalPrice: null,
      image: "/lovable-uploads/e0049816-dbab-4b43-be2c-ec8590dd08a1.png",
      badge: "Premium",
      rating: 8.5,
      reviews: 67,
      type: "bars"
    },
    {
      id: 5,
      name: "23k Gold Bars Vault Reserve",
      price: 70000.00,
      priceText: "$70,000.00",
      originalPrice: null,
      image: "/lovable-uploads/615ecc60-7806-4ef1-a21a-3e88d5fba90c.jpg",
      badge: "Wholesale",
      rating: 9.0,
      reviews: 23,
      type: "bars"
    },
    {
      id: 6,
      name: "23k Gold bar Collection",
      price: 70000.00,
      priceText: "$70,000.00",
      originalPrice: null,
      image: "/lovable-uploads/23c0b343-dcbb-4dad-bebd-5bbe1d1598f1.png",
      badge: "New",
      rating: 8.0,
      reviews: 45,
      type: "collections"
    }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;
    
    // Filter by type
    if (filterType !== "all") {
      filtered = products.filter(product => product.type === filterType);
    }
    
    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });
    
    return sorted;
  }, [filterType, sortBy]);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.priceText,
      image: product.image
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <PageWrapper>
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Shop Our Gold Collection
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Discover our complete range of investment-grade precious metals. 
              From gold bars to rare collectibles, find the perfect addition to your portfolio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-black text-yellow-400 px-4 py-2 text-sm">✓ Certified Authentic</Badge>
              <Badge className="bg-black text-yellow-400 px-4 py-2 text-sm">✓ Fully Insured Shipping</Badge>
              <Badge className="bg-black text-yellow-400 px-4 py-2 text-sm">✓ 30-Day Returns</Badge>
            </div>
          </div>
        </section>

        {/* Filters and Sorting */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Filter className="w-4 h-4" />
                      Filter by Type
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setFilterType("all")}>
                      All Products
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setFilterType("bars")}>
                      Gold Bars
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setFilterType("nuggets")}>
                      Gold Nuggets
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setFilterType("collections")}>
                      Collections
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SortAsc className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                    <SelectItem value="price-low">Price (Low to High)</SelectItem>
                    <SelectItem value="price-high">Price (High to Low)</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="text-gray-600">
                Showing {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''}
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-3 left-3 bg-yellow-500 text-black hover:bg-yellow-600">
                        {product.badge}
                      </Badge>
                      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-2">
                        <div className="flex items-center space-x-1 text-white text-sm">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{product.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{product.name}</h3>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-2xl font-bold text-yellow-600">{product.priceText}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{product.rating} ({product.reviews} reviews)</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0">
                <Button
                  className="w-50 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold rounded-[10px] shadow-md transition active:scale-95"
                  onClick={() => {
                    const whatsappNumber = "254770012574";
                    const message = `Hi, I'm interested in the ${product.name}. Can you tell me more about it?`;
                    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  Inquire Now
                </Button>

              </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Guide CTA */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">New to Gold Investment?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Learn about the benefits of precious metals investment and how to build a diversified portfolio.
            </p>
            <Link to="/learn-more">
              <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-600 font-semibold">
                View Investment Guide
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  );
};

export default ShopGoldNow;