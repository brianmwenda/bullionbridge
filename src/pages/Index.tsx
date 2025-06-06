
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Values from "@/components/Values";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const Index = () => {
  return (
    <PageWrapper>
    <div className="min-h-screen">
      <Header />
      <Hero />
      <br /><br />
         <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Gold Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of investment-grade precious metals, 
            each piece certified for purity and authenticity.
          </p>
        </div>

      <ProductGrid />
        <div className="text-center mt-12">
          <Link to="/shop-gold-now">
          <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-black">
            View All Products
          </Button></Link>
          <br /><br />
        </div>
      <Features />
      <Values />
      <Footer />
    </div>
    </PageWrapper>
  );
};

export default Index;
