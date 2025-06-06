import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import CheckoutDialog from "./CheckoutDialog";

interface CartDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CartDialog = ({ open, onOpenChange }: CartDialogProps) => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[$,]/g, ''));
    return sum + (price * item.quantity);
  }, 0);
  
  const shipping = 299.99;
  const insurance = 199.99;
  const total = subtotal + shipping + insurance;

  const handleProceedToCheckout = () => {
    onOpenChange(false);
    setCheckoutOpen(true);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Shopping Cart ({cartItems.length} items)
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-4">Add some precious metals to get started</p>
                <Button onClick={() => onOpenChange(false)} className="bg-yellow-500 text-black hover:bg-yellow-600">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-lg font-bold text-yellow-600">
                          {item.price}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 p-0"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 p-0"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 p-0 text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal:</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping & Handling:</span>
                    <span>${shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Insurance:</span>
                    <span>${insurance.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-gray-900 border-t pt-2">
                    <span>Total:</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Badge className="w-full justify-center bg-green-100 text-green-800 py-2">
                    ✓ Free Insured Shipping on Orders Over $50,000
                  </Badge>
                  <Button 
                    className="w-full bg-yellow-500 text-black hover:bg-yellow-600 font-semibold py-3"
                    onClick={handleProceedToCheckout}
                  >
                    Proceed to Checkout
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => onOpenChange(false)}>
                    Continue Shopping
                  </Button>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </>
  );
};

export default CartDialog;