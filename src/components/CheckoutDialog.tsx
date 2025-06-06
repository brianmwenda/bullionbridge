import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CheckoutDialog = ({ open, onOpenChange }: CheckoutDialogProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems } = useCart();
  const { toast } = useToast();

  const whatsappNumber = "+254735389953"; // Replace with your actual WhatsApp number

  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[$,]/g, ''));
    return sum + (price * item.quantity);
  }, 0);
  
  const shipping = 299.99;
  const insurance = 199.99;
  const total = subtotal + shipping + insurance;

  const handleCheckout = async () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to proceed.",
        variant: "destructive",
      });
      return;
    }

    if (!email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Create order summary
      let orderDetails = `New Gold Order \n`;
      orderDetails += `Customer Email: ${email}\n\n`;
      orderDetails += `Order Summary:\n`;
      
      cartItems.forEach((item, index) => {
        orderDetails += `${index + 1}. ${item.name}\n`;
        orderDetails += `   Price: ${item.price}\n`;
        orderDetails += `   Quantity: ${item.quantity}\n\n`;
      });

      orderDetails += `Order Total:\n`;
      orderDetails += `Subtotal: $${subtotal.toLocaleString()}\n`;
      orderDetails += `Shipping & Handling: $${shipping.toLocaleString()}\n`;
      orderDetails += `Insurance: $${insurance.toLocaleString()}\n`;
      orderDetails += `Total: $${total.toLocaleString()}\n\n`;
      orderDetails += `Order Date: ${new Date().toLocaleDateString()}\n`;
      orderDetails += `Order Time: ${new Date().toLocaleTimeString()}`;

      // Encode the message for WhatsApp URL
      const encodedMessage = encodeURIComponent(orderDetails);
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Order Sent!",
        description: "Your order details have been sent via WhatsApp. We'll contact you soon!",
      });

      // Close the dialog
      onOpenChange(false);
      
      // Reset email
      setEmail("");

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Checkout</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Order Summary */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Items ({cartItems.length}):</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping & Handling:</span>
                <span>${shipping.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Insurance:</span>
                <span>${insurance.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total:</span>
                <span>${total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className="text-sm text-gray-600">
              We'll send your order confirmation and updates to this email.
            </p>
          </div>

          {/* Checkout Button */}
          <Button 
            onClick={handleCheckout}
            disabled={isLoading || !email}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            {isLoading ? "Sending..." : "Send Order via WhatsApp"}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            By proceeding, you'll be redirected to WhatsApp to complete your order.
            Our team will contact you to finalize payment and delivery details.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutDialog;