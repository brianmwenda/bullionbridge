
import { Award, Star, Users } from "lucide-react";
import React from "react";

const values = [
  {
    icon: <Award size={32} className="text-yellow-400 drop-shadow" />,
    title: "Integrity",
    description:
      "We uphold honest business practices and maintain transparent communication in every transaction. At XicoTrading, integrity is the foundation of our role as trusted intermediaries, ensuring both gold buyers and sellers can engage with confidence, knowing every deal is handled with professionalism, ethics, and full disclosure.",
  },
  {
    icon: <Star size={32} className="text-yellow-400 drop-shadow" />,
    title: "Quality",
    description:
      "At XicoTrading, quality is non-negotiable. Every gold product we facilitate undergoes rigorous testing and is backed by trusted certification to ensure authenticity and purity. Our commitment to high standards guarantees that buyers receive only verified, investment-grade gold from reliable sources across Kenya’s gold-producing regions.",
  },
  {
    icon: <Users size={32} className="text-yellow-400 drop-shadow" />,
    title: "Trust",
    description:
      "Trust is at the heart of XicoTrading. We build lasting relationships by delivering consistent, reliable service and dedicated support. Through verified partnerships and transparent processes, we ensure that every gold transaction is secure, compliant, and backed by the confidence our global clients depend on.",
  },
];

const AboutValues = () => {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/background.jpg')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Parallax/dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-yellow-900/40 to-black/90 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3 tracking-tight drop-shadow-lg">
            Our Values
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            At XicoTrading, our commitment to trust, transparency, and authenticity is unwavering. These core
            principles guide every transaction we undertake, ensuring that our clients and partners can rely on us to
            deliver consistent results. We connect verified gold sellers with global buyers, ensuring certified quality
            and secure dealings. This dedication to our values makes us a trusted partner in sourcing gold and
            investment-grade precious metals worldwide.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className={`relative bg-white/10 rounded-3xl shadow-xl border border-white/20 p-10 w-full max-w-xs mx-auto flex flex-col 
                items-center backdrop-blur-md 
                hover:scale-105 transition-transform duration-300`}
              style={{
                animation:
                  index === 1
                    ? "fade-in 0.6s cubic-bezier(.6,1.7,.5,1.03), float 6s ease-in-out infinite"
                    : "fade-in 0.7s cubic-bezier(.6,1.7,.5,1.03)",
              }}
            >
              <div className="mb-6">{value.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-yellow-300 text-center">
                <span className="story-link relative after:block after:h-1 after:bg-yellow-400 after:mt-1 after:rounded-full after:scale-x-50 hover:after:scale-x-100 after:transition-transform after:duration-300">
                  {value.title}
                </span>
              </h3>
              <p className="text-white/90 text-base leading-relaxed font-medium text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Parallax effect overlay layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 to-transparent pointer-events-none z-0" />
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px);}
            50% { transform: translateY(-12px);}
            100% { transform: translateY(0px);}
          }
        `}
      </style>
    </section>
  );
};

export default AboutValues;
