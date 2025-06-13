import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, Award, Users, Truck, RefreshCw } from "lucide-react";
import GoldPriceChart from '@/components/GoldPriceChart';
import { Link } from "react-router-dom";

const LearnMore = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Wealth Protection",
      description: "Gold has been a store of value for thousands of years, protecting wealth against inflation and economic uncertainty."
    },
    {
      icon: TrendingUp,
      title: "Portfolio Diversification",
      description: "Adding precious metals to your investment portfolio can help reduce overall risk and improve long-term returns."
    },
    {
      icon: Award,
      title: "Tangible Asset",
      description: "Unlike stocks or bonds, gold is a physical asset you can hold, providing security in uncertain times."
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our team of precious metals specialists is here to help you make informed investment decisions."
    },
    {
      icon: Truck,
      title: "Secure Delivery",
      description: "All shipments are fully insured and require signature confirmation for maximum security."
    },
    {
      icon: RefreshCw,
      title: "Buyback Guarantee",
      description: "We offer competitive buyback prices for products purchased through XicoTrading."
    }
  ];

  return (
    <PageWrapper>
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Why Invest in <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Precious Metals?</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              For centuries, gold and precious metals have been the ultimate store of value. 
              Learn how these timeless assets can strengthen your investment portfolio and protect your wealth.
            </p>
            <Link to="/contact"><Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-600 font-semibold px-8 py-3">
              Start Your Investment Journey
            </Button></Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Gold Investment</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover why investors worldwide choose precious metals as a cornerstone of their portfolios.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Performance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">A Track Record of Performance</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Over the past 50 years, gold has demonstrated its ability to preserve purchasing power and 
                provide positive returns during periods of economic uncertainty. While past performance doesn't 
                guarantee future results, gold's historical resilience makes it an attractive option for 
                long-term wealth preservation.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">10-Year Average Return:</span>
                  <span className="text-yellow-600 font-bold">7.8% annually</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">Inflation Protection:</span>
                  <span className="text-green-600 font-bold">Positive correlation</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">Portfolio Volatility Reduction:</span>
                  <span className="text-blue-600 font-bold">15-20%</span>
                </div>
              </div>
            </div>
            <div>
              <GoldPriceChart />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose XicoTrading?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best precious metals investment experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center p-6 border-yellow-200 hover:border-yellow-400 transition-colors">
                <CardContent className="pt-6">
                  <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Guide */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Investing?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our investment specialists are here to help you build a precious metals portfolio 
              that aligns with your financial goals and risk tolerance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop-gold-now"><Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-600 font-semibold">
                  Browse Our Collection
              </Button></Link>
              <Link to="/contact"><Button size="lg" variant="outline" className="border-yellow-400 text-black hover:bg-yellow-400 hover:text-white">
                 Schedule Consultation
              </Button></Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageWrapper>
  );
};

export default LearnMore;