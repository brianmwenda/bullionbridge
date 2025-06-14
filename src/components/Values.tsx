import React, { useRef } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Testimonials & avatar data
const testimonials = [
  {
    name: "Zayed",
    quote:
      "I am extremely satisfied with the fast and secure delivery of 50 kgs of gold to Dubai in less than a week!",
  },
  {
    name: "Alvaro",
    quote:
      "I am beyond impressed with the efficiency and professionalism of this service! Receiving 200 kgs of gold was seamless.",
  },
 
  {
    name: "Maria",
    quote:
      "Exceptional service every time. The XicoTrading team goes above and beyond to ensure smooth transactions.",
  },
   {
    name: "Mia",
    quote:
      "Professionalism and transparency from start to finish. I trust XicoTrading for all my gold sourcing needs.",
  },
  {
    name: "Sophia",
    quote:
      "Highly recommended! The process was clear and my package arrived secure and on time.",
  },
  {
    name: "Benjamin",
    quote:
      "Their step-by-step support and reliable delivery made my investment stress-free. A service I can depend on.",
  },
  {
    name: "Henry",
    quote:
      "From initial inquiry to final delivery, every interaction was courteous, clear, and trustworthy.",
  },
];

const avatarEmojis = [
  "🧔‍♂️",
  "🧔‍♂️",
  "👵",
  "👵",
  "👵",
  "🧔‍♂️",
  "🧔‍♂️"
];

const SCROLL_STEP = 320; // How many px to scroll on each button click

const Values = () => {
  // Ref for horizontal scroll area viewport (inner div)
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll handlers
  const handleScroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = dir === "left" ? -SCROLL_STEP : SCROLL_STEP;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
      {/* Colorful overlay that matches branding */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-yellow-900/40 to-black/90 z-0 pointer-events-none" />

      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3 tracking-tight drop-shadow-lg">
            Testimonials
          </h2>
          <p className="text-white max-w-2xl mx-auto text-lg">
            Honest feedback, real experiences, and trusted testimonials that reflect the quality, professionalism, and dedication we bring to every project.
          </p>
        </div>

        <div className="relative flex items-center max-w-6xl mx-auto">
          {/* Left scroll button */}
          <button
            aria-label="Scroll testimonials left"
            className="hidden sm:flex absolute left-0 z-50 bg-yellow-700/70 hover:bg-yellow-800/90 text-white rounded-full w-10 h-10 items-center justify-center shadow-lg transition-all"
            style={{ top: "50%", transform: "translateY(-50%)" }}
            onClick={() => handleScroll("left")}
            type="button"
          >
            <ArrowLeft size={24} />
          </button>

          {/* The scroll area containing testimonial cards */}
          <ScrollArea
            className="w-full"
            style={{
              // Heighened scroll area for taller cards
              height: 300,
              paddingLeft: 0,
              paddingRight: 0,
              position: "relative",
            }}
          >
            <div
              ref={scrollRef}
              className="
                flex flex-row gap-2 sm:gap-4
                px-1
                overflow-x-auto
                snap-x snap-mandatory
                scrollbar-hide
                h-full
                items-stretch
                "
              style={{
                scrollBehavior: "smooth",
                WebkitOverflowScrolling: "touch",
                minHeight: 300,
                alignItems: "stretch",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`
                    relative bg-white/[.10] rounded-2xl shadow-2xl border border-yellow-500/30 p-4 sm:p-6
                    w-64 h-full min-w-[15rem] max-w-xs flex flex-col snap-center
                    backdrop-blur-lg transition-transform duration-300
                    hover:scale-95
                   }
                  `}
                  style={{
                    boxShadow:
                      index === 2
                        ? "0px 12px 36px 0px rgba(255, 211, 77, 0.13)"
                        : "0px 4px 24px 0px rgba(220, 161, 22, 0.10)",
                    animation: "fade-in 0.9s cubic-bezier(.6,1.6,.5,1.01)",
                    height: 290,
                  }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-tr from-yellow-400 via-yellow-700 to-yellow-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
                    <span className="text-white text-2xl sm:text-3xl">
                      {avatarEmojis[index] || "🧔‍♂️"}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-2 text-yellow-200 text-center">
                    <span className="story-link relative after:block after:h-1 after:bg-yellow-300 after:mt-1 after:rounded-full after:scale-x-50 hover:after:scale-x-100 after:transition-transform after:duration-300">
                      {testimonial.name}
                    </span>
                  </h3>
                  <p className="text-white/90 text-xs sm:text-base leading-relaxed italic font-medium text-center">
                    "{testimonial.quote}"
                  </p>
                </div>
              ))}
            </div>

            {/* Show arrow buttons on mobile (floats above scroll area) */}
            <button
              aria-label="Scroll testimonials left"
              className="sm:hidden absolute left-1 top-1/2 transform -translate-y-1/2 bg-yellow-700/80 hover:bg-yellow-800/90 text-white rounded-full w-9 h-9 flex items-center justify-center z-50 shadow-lg"
              onClick={() => handleScroll("left")}
              type="button"
              style={{}}
            >
              <ArrowLeft size={20} />
            </button>
            <button
              aria-label="Scroll testimonials right"
              className="sm:hidden absolute right-1 top-1/2 transform -translate-y-1/2 bg-yellow-700/80 hover:bg-yellow-800/90 text-white rounded-full w-9 h-9 flex items-center justify-center z-50 shadow-lg"
              onClick={() => handleScroll("right")}
              type="button"
              style={{}}
            >
              <ArrowRight size={20} />
            </button>

          </ScrollArea>

          {/* Right scroll button */}
          <button
            aria-label="Scroll testimonials right"
            className="hidden sm:flex absolute right-0 z-50 bg-yellow-700/70 hover:bg-yellow-800/90 text-white rounded-full w-10 h-10 items-center justify-center shadow-lg transition-all"
            style={{ top: "50%", transform: "translateY(-50%)" }}
            onClick={() => handleScroll("right")}
            type="button"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Extra gradient for parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 pointer-events-none z-0" />
      <style>
        {`
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(18px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </section>
  );
};

export default Values;
