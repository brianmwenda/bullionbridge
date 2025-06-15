import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Share, Facebook, Twitter, Linkedin } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import React from "react";

const BLOGS = [
  {
    id: "1",
    title: "Investing in Gold: A Beginner's Guide",
    summary: "Learn how to start investing in gold, the benefits, and what to look for when buying bullion.",
    date: "2025-06-13",
    cover: "/lovable-uploads/blog/howtoinvestgold.jpg",
    author: "XicoTrading",
    content: `
      
      <p>Gold has been valued for centuries, serving not just as a precious metal for jewelry but as a cornerstone for wealth preservation. In times of economic uncertainty, geopolitical tension, or market volatility, investors often turn to gold as a safe haven. For beginners, the world of gold investment may seem complex, but with the right information, it can be a rewarding strategy for securing your financial future.</p>

      <h3 class='text-xl font-bold mt-6 mb-2'>Why Invest in Gold?</h3>
      <p>Unlike stocks or bonds, gold is a tangible asset that maintains intrinsic value. It is globally recognized and accepted, making it an attractive option for diversification. Gold doesn't rely on creditworthiness or third-party promises; it simply exists as a universally trusted store of value.</p>

      <h3 class='text-xl font-bold mt-6 mb-2'>Benefits of Gold</h3>
      <ul class='list-disc ml-6 mb-4'>
        <li><strong>Inflation Hedge:</strong> Gold typically retains its value even as currency loses purchasing power.</li>
        <li><strong>Global Liquidity:</strong> It can be bought and sold easily across nearly every country in the world.</li>
        <li><strong>Stable Value Over Time:</strong> While short-term fluctuations occur, gold tends to hold value over the long run.</li>
      </ul>

      <h3 class='text-xl font-bold mt-6 mb-2'>Understanding Gold Investment Options</h3>
      <p>Before diving into gold investment, it’s crucial to understand the different forms in which gold can be held. Your choice will depend on your investment goals, storage capacity, and level of involvement.</p>

      <h4 class='text-lg font-semibold mt-4 mb-1'>1. Physical Gold</h4>
      <p>Physical gold comes in the form of <strong>gold bars</strong>, <strong>coins</strong>, or <strong>jewelry</strong>. While it provides a tangible sense of ownership, physical gold requires secure storage and insurance.</p>
      <ul class='list-disc ml-6 mb-4'>
        <li><strong>Coins:</strong> Popular coins include the American Eagle, Canadian Maple Leaf, and South African Krugerrand.</li>
        <li><strong>Bars:</strong> Available in various weights, from 1 gram to 1 kilogram or more.</li>
        <li><strong>Jewelry:</strong> While aesthetically pleasing, jewelry often includes added costs like craftsmanship and retail markups.</li>
      </ul>

      <h4 class='text-lg font-semibold mt-4 mb-1'>2. Paper Gold</h4>
      <p>If you're more comfortable with digital investments, paper gold options offer convenience without the hassles of storage.</p>
      <ul class='list-disc ml-6 mb-4'>
        <li><strong>ETFs (Exchange-Traded Funds):</strong> These track the price of gold and are traded like stocks.</li>
        <li><strong>Gold Mining Stocks:</strong> Invest in companies that extract gold, though they carry operational and market risks.</li>
        <li><strong>Gold Mutual Funds:</strong> A pooled investment option managed by professionals focusing on gold assets.</li>
      </ul>

      <h3 class='text-xl font-bold mt-6 mb-2'>Physical vs. Paper Gold</h3>
      <p>The choice between physical and paper gold depends on your investment goals. Physical gold provides a hedge against systemic risks and total financial collapse. In contrast, paper gold offers liquidity and ease of trading but may be subject to market and issuer risks.</p>

      <h3 class='text-xl font-bold mt-6 mb-2'>Tips for First-Time Gold Investors</h3>
      <ol class='list-decimal ml-6 mb-4'>
        <li><strong>Start Small:</strong> Begin with a small portion of your investment portfolio allocated to gold, typically 5–10%.</li>
        <li><strong>Buy from Reputable Dealers:</strong> Whether online or in person, ensure the seller is accredited and certified.</li>
        <li><strong>Verify Purity:</strong> Gold is measured in karats or purity (e.g., 24k is pure gold). Always ask for certification.</li>
        <li><strong>Consider Storage:</strong> For physical gold, invest in a secure home safe or bank deposit box.</li>
        <li><strong>Consult Experts:</strong> Speak to financial advisors or precious metal specialists before making significant purchases.</li>
      </ol>

      <h3 class='text-xl font-bold mt-6 mb-2'>Risks to Keep in Mind</h3>
      <p>Like all investments, gold comes with its own set of risks. Prices can be volatile in the short term and are influenced by global events, interest rates, and currency strength.</p>
      <ul class='list-disc ml-6 mb-4'>
        <li><strong>Market Volatility:</strong> Gold prices can fluctuate dramatically during crises.</li>
        <li><strong>Storage and Insurance Costs:</strong> Especially for physical gold, these can eat into your returns.</li>
        <li><strong>No Yield:</strong> Gold doesn’t generate income like dividends or interest.</li>
      </ul>

      <h3 class='text-xl font-bold mt-6 mb-2'>How to Spot a Trusted Gold Dealer</h3>
      <p>Ensure your gold investment is legitimate by dealing with certified sources. Look for:</p>
      <ul class='list-disc ml-6 mb-4'>
        <li>Accreditations from bodies like LBMA (London Bullion Market Association)</li>
        <li>Clear return policies and transparent pricing</li>
        <li>Third-party certifications and product assays</li>
      </ul>

      <h3 class='text-xl font-bold mt-6 mb-2'>Final Thoughts</h3>
      <p>Gold investment isn't about chasing quick profits—it's about securing a portion of your wealth against uncertainty. As a beginner, take time to understand your options, assess your risk tolerance, and build your portfolio slowly. Whether you opt for physical bullion or digital exposure, gold can be a valuable long-term asset in your investment strategy.</p>

      <p class='italic text-sm mt-8'>
        Disclaimer: This article is for educational purposes only and does not constitute financial advice. Always consult with a financial advisor before making investment decisions.
      </p>
    `

  },
  {
    id: "2",
    title: "Gold vs. Cryptocurrency: Which is the Better Hedge?",
    summary: "We compare gold and cryptocurrencies to help you decide which is the better option to hedge against inflation.",
    date: "2025-06-14",
    cover: "/lovable-uploads/blog/goldvscrypto.jpeg",
    author: "XicoTrading",
    content: `
       
        <p>In an age of economic uncertainty, inflationary pressures, and geopolitical instability, investors continue to seek reliable stores of value. Two of the most discussed options are gold — the ancient standard — and cryptocurrency — the digital newcomer. While both are viewed as potential hedges against inflation and market volatility, they represent fundamentally different assets with contrasting risk profiles and benefits.</p>

        <h3 class='text-xl font-bold mt-6 mb-2'>Historical Perspective</h3>
        <p>Gold has served as a store of value for over 5,000 years. It has been used in trade, currency systems, jewelry, and as a symbol of wealth and power. Its scarcity, durability, and universal acceptance make it a timeless hedge during financial downturns and geopolitical crises.</p>
        <p>Cryptocurrency, led by Bitcoin, emerged just over a decade ago in response to the 2008 financial crisis. It was designed to be decentralized, inflation-resistant, and independent of traditional financial systems. In less than 15 years, it has gone from a fringe technology to a multi-trillion-dollar global market.</p>

        <h3 class='text-xl font-bold mt-6 mb-2'>Key Differences</h3>
        <ul class='list-disc ml-6 mb-4'>
          <li><strong>Gold:</strong> Tangible, long-term stable</li>
          <li><strong>Crypto:</strong> Digital, high volatility</li>
        </ul>

        <h3 class='text-xl font-bold mt-6 mb-2'>Volatility and Risk</h3>
        <p>Volatility is a key differentiator between the two. Gold prices generally fluctuate within predictable ranges, making it a stable investment. During crises, gold often sees moderate gains as investors seek safety.</p>
        <p>Cryptocurrencies, however, are extremely volatile. Price swings of 10–20% in a single day are not uncommon. While this volatility presents opportunities for substantial short-term gains, it also brings considerable risk — particularly for inexperienced investors or those seeking capital preservation.</p>

        <h3 class='text-xl font-bold mt-6 mb-2'>Liquidity and Accessibility</h3>
        <p>Both gold and cryptocurrencies are highly liquid. Gold can be bought or sold through bullion dealers, exchanges, or ETFs. Cryptocurrency is even more accessible thanks to 24/7 global trading via online platforms. Digital wallets and exchanges have made crypto investing easy, even for beginners.</p>
        <p>However, cryptocurrencies come with a learning curve — from securing digital wallets to understanding blockchain technology. Additionally, cyber theft, forgotten passwords, and regulatory issues can limit access or increase the risk of loss.</p>

        <h3 class='text-xl font-bold mt-6 mb-2'>Store of Value and Inflation Hedge</h3>
        <p>Gold has proven itself as a long-term store of value. During periods of high inflation, like the 1970s, gold appreciated significantly while fiat currencies depreciated. It does not yield interest or dividends but preserves purchasing power over time.</p>
        <p>Cryptocurrencies, particularly Bitcoin, are often referred to as "digital gold" because of their finite supply and decentralization. Bitcoin’s supply is capped at 21 million, making it theoretically immune to inflation. However, since it's relatively new, its long-term effectiveness as an inflation hedge remains unproven.</p>

        <h3 class='text-xl font-bold mt-6 mb-2'>Regulatory Landscape</h3>
        <p>Gold operates in a well-established legal and regulatory framework. It’s accepted worldwide and is relatively straightforward to own and trade.</p>
        <p>Cryptocurrency faces constant regulatory evolution. Some governments embrace it, while others restrict or ban it. Changes in regulation can have massive effects on prices and access. For instance, tax reporting requirements, exchange shutdowns, or bans on crypto mining can impact its viability as a hedge.</p>

        <h3 class='text-xl font-bold mt-6 mb-2'>Security and Custody</h3>
        <p>Gold needs to be physically stored, which means either personal safekeeping or third-party vaulting. This involves storage and insurance costs. However, physical gold cannot be hacked or digitally erased.</p>
        <p>Crypto is digital and doesn’t require physical storage. But it demands digital security. Investors must safeguard private keys, avoid phishing attacks, and sometimes depend on third-party exchanges that have been historically vulnerable to hacks.</p>

        <h3 class='text-xl font-bold mt-6 mb-2'>Market Maturity</h3>
        <p>Gold’s market is mature, with relatively low speculation and established pricing mechanisms. It reacts predictably to macroeconomic signals such as inflation, interest rates, and central bank policy.</p>
        <p>Cryptocurrency markets are still evolving. Influences on pricing include speculative trading, news cycles, social media trends, and sentiment shifts. This immature market structure contributes to high volatility and unpredictability.</p>

        <h3 class='text-xl font-bold mt-6 mb-2'>Environmental Impact</h3>
        <p>Both assets have environmental costs. Gold mining is resource-intensive, impacting land, water, and ecosystems. Cryptocurrency mining, particularly Bitcoin, requires vast amounts of electricity — often derived from non-renewable sources — raising concerns about carbon emissions.</p>
        <p>That said, newer crypto networks are transitioning to energy-efficient models (e.g., Ethereum’s switch from Proof of Work to Proof of Stake).</p>

        <h3 class='text-xl font-bold mt-6 mb-2'>Diversification Strategy</h3>
        <p>Financial advisors often advocate for diversified portfolios. Including both gold and cryptocurrency can balance risk and return. Gold adds stability and crisis resilience. Cryptocurrency adds high-growth potential and exposure to emerging financial technologies.</p>
        <p>The key is proportion. Conservative investors might allocate 5–10% to gold and 1–2% to crypto. More aggressive investors may increase crypto exposure but should remain aware of its speculative nature.</p>

        <h3 class='text-xl font-bold mt-6 mb-2'>Final Verdict</h3>
        <p>So, which is the better hedge? The answer depends on your investment goals, risk tolerance, and time horizon.</p>
        <ul class='list-disc ml-6 mb-4'>
          <li><strong>Choose Gold</strong> if you want a stable, time-tested asset to preserve value through economic cycles.</li>
          <li><strong>Choose Cryptocurrency</strong> if you’re open to higher risk and want exposure to an emerging asset class with massive growth potential.</li>
          <li><strong>Choose Both</strong> if you want to diversify your inflation-hedging strategy and capitalize on the strengths of each.</li>
        </ul>

        <h3 class='text-xl font-bold mt-6 mb-2'>Conclusion</h3>
        <p>Gold and cryptocurrency both serve as hedges, but in very different ways. Gold is a defensive asset — slow, steady, and reliable. Cryptocurrency is aggressive — fast, volatile, and transformative. A thoughtful investor may find value in holding both, using gold for security and crypto for speculative upside. As always, research thoroughly, assess your goals, and consult a financial advisor before making significant investment decisions.</p>

        <p class='italic text-sm mt-8'>Disclaimer: This article is for educational purposes only and does not constitute investment advice. Please consult a licensed financial advisor before making any investment decisions.</p>
      `

  },
  {
    id: "3",
    title: "How Physical Gold Protects Your Wealth",
    summary: "Understand the importance of physical gold ownership for financial security in uncertain times.",
    date: "2025-06-15",
    cover: "/lovable-uploads/blog/investment.jpg",
    author: "XicoTrading",
    content: `
        
        <p>In a world of increasing digital exposure, systemic risks, and economic unpredictability, physical gold remains a timeless and reliable asset for protecting wealth. While digital and paper assets are vulnerable to cyberattacks, banking failures, and inflation, physical gold offers direct ownership, independence, and peace of mind. It requires no internet connection, no bank account, and no intermediary. It's tangible, private, and enduring traits that make it a powerful shield in times of uncertainty.</p>

        <h3 class='text-xl font-bold mt-6 mb-2'>Why Own Physical Gold?</h3>
        <p>Investors turn to physical gold not only for its historical stability but also because it provides a layer of control and privacy that other assets can’t. Below are key reasons why owning physical gold strengthens financial resilience:</p>
        <ul class='list-disc ml-6 mb-4'>
          <li><strong>No Counterparty Risk:</strong> Unlike stocks, bonds, or even bank deposits, physical gold carries no promise from a third party. You own it outright. If the issuer of a bond defaults or a bank collapses, your paper wealth can vanish — but your gold remains.</li>
          <li><strong>Universal Acceptance:</strong> Gold is globally recognized and traded. No matter where you are, gold is a universally accepted form of value, independent of currency systems or national economies.</li>
          <li><strong>Private and Portable:</strong> Physical gold can be held anonymously and moved discreetly. It does not require a bank or broker and can be easily transported during emergencies.</li>
        </ul>

        <h3 class='text-xl font-bold mt-6 mb-2'>A Historical Safe Haven</h3>
        <p>Gold’s track record as a store of value spans thousands of years. Empires have risen and fallen, currencies have come and gone, but gold has remained. In times of war, hyperinflation, or currency collapse, those who held physical gold were often better positioned to protect their wealth.</p>
        <p>During the 2008 financial crisis, for example, while equities plummeted, gold surged. In 2020, amid the COVID-19 pandemic, gold prices again rose as uncertainty dominated global markets. These patterns reinforce gold’s role as a safe haven in a crisis.</p>

        <h3 class='text-xl font-bold mt-6 mb-2'>Independence from the Financial System</h3>
        <p>One of physical gold’s most compelling features is its detachment from the traditional financial system. It is not stored on a server, not linked to an institution, and not subject to digital theft in the way that cryptocurrencies or online brokerage accounts are.</p>
        <p>With increasing threats like cyberattacks, banking restrictions, and even asset freezes in politically unstable regions, owning some wealth in a form that exists entirely outside the system is a prudent hedge. Gold cannot be “deleted,” hacked, or erased from a balance sheet.</p>

        <h3 class='text-xl font-bold mt-6 mb-2'>Protection Against Inflation</h3>
        <p>Inflation erodes the purchasing power of paper currencies over time. Central banks worldwide continue to print money to stimulate economies, especially during downturns, leading to concerns about long-term currency devaluation.</p>
        <p>Gold, on the other hand, is a finite resource. It cannot be printed or artificially inflated. Historically, as currencies lose value, gold’s price tends to rise. It doesn’t pay interest or dividends, but it preserves purchasing power. For investors seeking to maintain their wealth’s value across decades, physical gold is a proven ally.</p>

        <h3 class='text-xl font-bold mt-6 mb-2'>Privacy and Confidentiality</h3>
        <p>Most modern investments are linked to your identity — from your brokerage account to your digital wallet. They are monitored, taxed, and often accessible to third parties like banks, governments, or even hackers.</p>
        <p>Physical gold, however, offers a level of financial privacy that is becoming rare in the digital age. If purchased anonymously and stored securely, gold can act as a private reserve of wealth, offering discreet protection against external control or intrusion.</p>

        <h3 class='text-xl font-bold mt-6 mb-2'>Emergency Readiness</h3>
        <p>Physical gold is also a critical asset in emergency preparedness. In the event of severe economic collapse, hyperinflation, or national instability, having physical gold on hand can help cover necessities when other forms of money are unavailable or worthless.</p>
        <p>Unlike real estate or other large investments, gold is easily divisible and portable. A small stash can go a long way in securing basic goods or services during a crisis. It serves as an insurance policy for the truly unexpected.</p>

        <h3 class='text-xl font-bold mt-6 mb-2'>Forms of Physical Gold</h3>
        <p>There are several ways to own physical gold. The best choice depends on your investment goals, budget, and storage capabilities:</p>
        <ul class='list-disc ml-6 mb-4'>
          <li><strong>Gold Coins:</strong> These are minted by governments and often include legal tender status. Examples include the American Eagle, Canadian Maple Leaf, and South African Krugerrand.</li>
          <li><strong>Gold Bars:</strong> Ideal for bulk investment, gold bars offer lower premiums and are available in various sizes from 1 gram to 1 kilogram.</li>
          <li><strong>Jewelry:</strong> While beautiful and functional, jewelry typically includes high markups and should be purchased carefully for investment purposes.</li>
        </ul>

        <h3 class='text-xl font-bold mt-6 mb-2'>Storage and Security</h3>
        <p>Owning physical gold comes with the responsibility of secure storage. Options include:</p>
        <ul class='list-disc ml-6 mb-4'>
          <li><strong>Home Safes:</strong> Easily accessible but must be fireproof and hidden securely.</li>
          <li><strong>Bank Safety Deposit Boxes:</strong> Reliable but limited in accessibility during emergencies.</li>
          <li><strong>Private Vaulting Services:</strong> Third-party providers offer high-security vaulting with insurance and 24/7 monitoring.</li>
        </ul>
        <p>Regardless of where you store it, it’s important to insure your holdings and keep documentation to prove ownership if needed.</p>

        <h3 class='text-xl font-bold mt-6 mb-2'>How Much Should You Hold?</h3>
        <p>Experts generally recommend allocating 5–15% of your investment portfolio to physical gold, depending on your risk profile and financial goals. It’s not about chasing gains — it’s about wealth preservation. Gold isn’t designed to replace stocks or real estate, but it complements them by adding balance and insurance against systemic shocks.</p>

        <h3 class='text-xl font-bold mt-6 mb-2'>Conclusion</h3>
        <p>In uncertain times, financial independence and resilience are more valuable than ever. Physical gold offers a unique combination of stability, privacy, and control that few other assets can match. By allocating a portion of your wealth to physical precious metals, you add a solid, time-tested layer of protection that transcends the digital age. It’s not just an investment — it’s a safeguard for your future.</p>

        <p class='italic text-sm mt-8'>
          Disclaimer: This article is for informational purposes only and does not constitute financial or investment advice. Always consult a qualified advisor before making decisions about your portfolio.
        </p>
      `

  },
];

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOGS.find((b) => b.id === id);

  // Copy share function using navigator clipboard
  const handleShare = React.useCallback(() => {
    const url = window.location.origin + "/blog/" + id;
    navigator.clipboard.writeText(url)
      .then(() => {
        toast({
          title: "Link copied!",
          description: "The blog post URL has been copied to your clipboard.",
        });
      })
      .catch(() => {
        toast({
          title: "Copy failed",
          description: "Unable to copy the link.",
          variant: "destructive"
        });
      });
  }, [id]);

  // Social share handlers
  const postUrl = window.location.origin + "/blog/" + id;
  const postTitle = post?.title || "Check this blog post!";

  const handleSocialShare = (platform: "facebook" | "twitter" | "linkedin") => {
    let shareUrl = "";
    const encodedUrl = encodeURIComponent(postUrl);
    const encodedTitle = encodeURIComponent(postTitle);

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      default:
        break;
    }
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  if (!post) {
    return (
      <PageWrapper>
        <div className="min-h-screen bg-yellow-50 flex flex-col">
          <Header />
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Post not found</h2>
              <Link to="/blog">
                <Button variant="outline" className="border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-black font-medium mt-4">
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="min-h-screen">
        <Header />
        <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="mb-8">
              <img src={post.cover} alt={post.title} className="w-full h-74 object-cover rounded-lg shadow-lg" />
            </div>
            <p className="text-yellow-300 text-sm mb-1">{new Date(post.date).toLocaleDateString()}</p>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="text-yellow-300 text-sm mb-1">By {post.author}</div>
            <div className="prose prose-lg prose-yellow max-w-none text-white" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Share Buttons */}
            <div className="flex flex-col gap-2 mt-8 mb-8">
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  className="border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-black font-medium flex items-center gap-2"
                  onClick={handleShare}
                  aria-label="Copy link to blog post"
                >
                  <Share size={18} className="mr-1" />
                  Copy Link
                </Button>
                <span className="text-xs text-gray-400">Share this post</span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <Button
                  type="button"
                  variant="outline"
                  className="border-blue-700 text-blue-500 hover:bg-blue-600 hover:text-white"
                  aria-label="Share on Facebook"
                  onClick={() => handleSocialShare("facebook")}
                >
                  <Facebook size={18} />
                  <span className="hidden sm:inline ml-1">Facebook</span>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="border-blue-400 text-sky-400 hover:bg-sky-500 hover:text-white"
                  aria-label="Share on Twitter"
                  onClick={() => handleSocialShare("twitter")}
                >
                  <Twitter size={18} />
                  <span className="hidden sm:inline ml-1">Twitter</span>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-white"
                  aria-label="Share on LinkedIn"
                  onClick={() => handleSocialShare("linkedin")}
                >
                  <Linkedin size={18} />
                  <span className="hidden sm:inline ml-1">LinkedIn</span>
                </Button>
              </div>
            </div>

            <div className="mt-12">
              <Link to="/blog">
                <Button variant="outline" className="border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-black font-medium">
                  ← Back to All Posts
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </PageWrapper>
  );
};

export default BlogDetail;
