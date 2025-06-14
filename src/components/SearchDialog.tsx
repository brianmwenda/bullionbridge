import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = [
    {
      id: 1,
      name: "23k Gold Bars - DRC",
      price: "$70,000.00",
      image: "/lovable-uploads/8fa12c23-7e6b-4dd0-95a3-95b4419b4d4f.png",
      rating: 8.5,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "23k Gold Nuggets Rough",
      price: "$70,000.00",
      image: "/lovable-uploads/3eab1b5f-995d-42f3-a571-8593e7ef7d82.png",
      rating: 9.5,
      badge: "Rare"
    },
       {
      id: 3,
      name: "23k Gold Nuggets Rounded",
      price: "$70,000.00",
      image: "/lovable-uploads/a5a2b5e8-cf09-4c93-af15-821caa576802.jpg",
      badge: "Limited",
      rating: 9.0,
    },
    {
      id: 4,
      name: "22k Gold Bars - Raw Gold",
      price: "$65,000.00",
      image: "/lovable-uploads/e0049816-dbab-4b43-be2c-ec8590dd08a1.png",
      rating: 8.5,
      badge: "Premium"
    },
    {
      id: 5,
      name: "23k Gold Bars Vault Reserve",
      price: "$70,000.00",
      image: "/lovable-uploads/615ecc60-7806-4ef1-a21a-3e88d5fba90c.jpg",
      badge: "Wholesale",
      rating: 9.0,
    },
    {
      id: 6,
      name: "23k Gold bar Collection",
      price: "$70,000.00",
      image: "/lovable-uploads/23c0b343-dcbb-4dad-bebd-5bbe1d1598f1.png",
      badge: "New",
      rating: 8.0,
    }
  ];

  const filteredResults = searchResults.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Search Products
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search for gold bars, coins, or collections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="space-y-3">
            {searchQuery === "" ? (
              <div className="text-center py-8 text-gray-500">
                Start typing to search our precious metals collection
              </div>
            ) : filteredResults.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No products found matching "{searchQuery}"
              </div>
            ) : (
              filteredResults.map((product) => (
                <Link to="/shop-gold-now"><div
                  key={product.id}
                  className="flex items-center gap-4 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900"> {product.name} </h3>
                      <Badge className="bg-yellow-500 text-black text-xs">
                        {product.badge}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-yellow-600">{product.price}</span>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </div></Link>
              ))
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
