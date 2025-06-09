import { Shield, Truck, CreditCard, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Authentic",
      description: "All our gold is certified and comes with authenticity guarantees from reputable refineries."
    },
    {
      icon: Truck,
      title: "Secure Shipping",
      description: "Fully insured shipping with signature confirmation and tracking for complete peace of mind."
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Multiple payment options including wire transfer, bank check, and cryptocurrency."
    },
    {
      icon: Award,
      title: "Expert Support",
      description: "Our precious metals specialists are available to guide you through your investment journey."
    }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-yellow-400">GoldMandate</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With decades of experience in precious metals, we provide unmatched quality, 
            security, and service to investors worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;