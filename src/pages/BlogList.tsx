
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BLOGS = [
  {
    id: "1",
    title: "Investing in Gold: A Beginner's Guide",
    summary: "Learn how to start investing in gold, the benefits, and what to look for when buying bullion.",
    date: "2025-06-13",
    cover: "/lovable-uploads/blog/howtoinvestgold.jpg",
    author: "XicoTrading"
  },
  {
    id: "2",
    title: "Gold vs. Cryptocurrency: Which is the Better Hedge?",
    summary: "We compare gold and cryptocurrencies to help you decide which is the better option to hedge against inflation.",
    date: "2025-06-14",
    cover: "/lovable-uploads/blog/goldvscrypto.jpeg",
    author: "XicoTrading"
  },
  {
    id: "3",
    title: "How Physical Gold Protects Your Wealth",
    summary: "Understand the importance of physical gold ownership for financial security in uncertain times.",
    date: "2025-06-15",
    cover: "/lovable-uploads/blog/investment.jpg",
    author: "XicoTrading"
  },
];

const BlogList = () => (
  <PageWrapper>
    <div className="min-h-screen">
      <Header />
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-3">Our Blog</h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Insights, guides, and news on gold investments, market trends, and financial security.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {BLOGS.map((blog) => (
              <Card key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow h-full flex flex-col">
                <img src={blog.cover} alt={blog.title} className="w-full h-full object-cover" />
                <CardContent className="flex flex-col flex-1 justify-between p-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">{blog.title}</h2>
                    <p className="text-sm text-gray-500 mb-2">{blog.author} • {new Date(blog.date).toLocaleDateString()}</p>
                    <p className="text-gray-700 mb-4">{blog.summary}</p>
                  </div>
                  <Link to={`/blog/${blog.id}`}>
                    <Button variant="outline" className="border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-black font-medium w-full">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </PageWrapper>
);

export default BlogList;
