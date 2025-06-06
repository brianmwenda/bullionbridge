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
      name: "24k Gold Bar - PAMP Suisse",
      price: "$80,089.99",
      image: "/lovable-uploads/8fa12c23-7e6b-4dd0-95a3-95b4419b4d4f.png",
      rating: 4.9,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "23k Gold Nuggets Collection",
      price: "$68,245.50",
      image: "/lovable-uploads/3eab1b5f-995d-42f3-a571-8593e7ef7d82.png",
      rating: 4.8,
      badge: "Rare"
    },
    {
      id: 3,
      name: "Professional Gold Bars",
      price: "$79,890.99",
      image: "/lovable-uploads/e0049816-dbab-4b43-be2c-ec8590dd08a1.png",
      rating: 4.9,
      badge: "Premium"
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
                <div
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
                      <h3 className="font-semibold text-gray-900"> <Link to="/shop-gold-now">{product.name}</Link> </h3>
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
                </div>
              ))
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
