
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const ProductGrid = () => {
  
  const { addToCart } = useCart();
  const { toast } = useToast();
  const products = [
    {
      id: 1,
      name: "23k Gold Bars - DRC",
      price: "$70,000.00",
      originalPrice: "$70,000.00",
      image: "/lovable-uploads/8fa12c23-7e6b-4dd0-95a3-95b4419b4d4f.png",
      badge: "Best Seller",
      rating: 8.5,
      reviews: 156
    },
    {
      id: 2,
      name: "23k Gold Nuggets Rough",
      price: "$70,000.00",
      originalPrice: null,
      image: "/lovable-uploads/3eab1b5f-995d-42f3-a571-8593e7ef7d82.png",
      badge: "Rare",
      rating: 9.5,
      reviews: 89
    },
    {
      id: 3,
      name: "23k Gold Nuggets Rounded",
      price: "$70,000.00",
      originalPrice: "$70,000.00",
      image: "/lovable-uploads/a5a2b5e8-cf09-4c93-af15-821caa576802.jpg",
      badge: "Limited",
      rating: 9.0,
      reviews: 34
    },
    {
      id: 4,
      name: "22k Gold Bars - Raw Gold",
      price: "$65,000.00",
      originalPrice: null,
      image: "/lovable-uploads/e0049816-dbab-4b43-be2c-ec8590dd08a1.png",
      badge: "Premium",
      rating: 8.5,
      reviews: 67
    },
    {
      id: 5,
      name: "23k Gold Bars Vault Reserve",
      price: "$70,000.00",
      originalPrice: "$70,000.00",
      image: "/lovable-uploads/615ecc60-7806-4ef1-a21a-3e88d5fba90c.jpg",
      badge: "Wholesale",
      rating: 9.0,
      reviews: 23
    },
    {
      id: 6,
      name: "23k Gold bar Collection",
      price: "$70,000.00",
      originalPrice: null,
      image: "/lovable-uploads/23c0b343-dcbb-4dad-bebd-5bbe1d1598f1.png",
      badge: "New",
      rating: 8.0,
      reviews: 45
    }
  ];



 const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
       
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
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
                    <span className="text-2xl font-bold text-yellow-600">{product.price}</span>
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
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold"
                  onClick={() => {
                    const whatsappNumber = "254770012574";
                    const message = `Hi, I'm interested in the ${product.name}. Can you tell me more about it?`;
                    const whatsappUrl = `https://wa.me/254770012574?text=${message}`;
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
  );
};

export default ProductGrid;
