"use client";
import React, { useState } from "react";

function MainComponent() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [openQuestion, setOpenQuestion] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/db/waitlist-entries-8944685", {
        method: "POST",
        body: JSON.stringify({
          query:
            "INSERT INTO `waitlist` (`email`, `signup_date`) VALUES (?, ?)",
          values: [email, new Date().toISOString()],
        }),
      });
      setSubmitted(true);
      setEmail("");
      setError("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1f] via-[#141432] to-[#0a0a1f] flex flex-col relative overflow-hidden pb-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTIwLDAgTDQwLDIwIEw2MCwwIEw4MCwyMCBMNjAsNDAgTDgwLDYwIEw2MCw4MCBMNDAsNjAgTDIwLDgwIEwwLDYwIEwyMCw0MCBMMCwyMCBaIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoOTksIDEwMiwgMjQxLCAwLjEpIiBzdHJva2Utd2lkdGg9IjMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#141432]/50 to-[#0a0a1f] pointer-events-none"></div>
      <nav className="fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0"></div>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-10 py-24 relative z-10">
        <div className="max-w-3xl mx-auto w-full">
          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-montserrat leading-tight mb-8 tracking-tight">
              <div>
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  The future of car marketplace
                </span>
              </div>
              <div>
                <span className="bg-gradient-to-r from-[#4F46E5] to-[#9333EA] bg-clip-text text-transparent">
                  is here.
                </span>
              </div>
            </h1>
            <p className="text-lg text-gray-300 font-roboto font-normal mb-8 leading-relaxed tracking-[0.075em]">
              Transform your car buying and selling experience with our
              innovative marketplace. Join our waitlist to be the first to
              access exclusive deals, seamless transactions, and a revolutionary
              way to trade vehicles.
            </p>
            <div className="flex items-center space-x-2 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <p className="text-lg font-montserrat font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#9333EA]">
                Be the first to revolutionize your car trading experience 🚗
              </p>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 pr-36 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5] transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2 focus:ring-offset-[#0a0a1f]"
                  >
                    <span className="flex items-center space-x-2">
                      <span>Join Waitlist</span>
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </button>
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
              </form>
            ) : (
              <div className="bg-[#4F46E5]/10 border border-[#4F46E5]/20 text-white p-8 rounded-lg space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-arrow-right text-3xl text-[#4F46E5]"></i>
                  <h3 className="text-2xl font-bold font-montserrat">
                    You're on the list!
                  </h3>
                </div>
                <p className="text-gray-300 font-light">
                  Thanks for joining! We'll keep you updated on all the exciting
                  developments.
                </p>
              </div>
            )}
          </div>
          <div className="absolute -z-10 top-1/4 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 bg-[#4F46E5] rounded-full mix-blend-multiply filter blur-[128px] opacity-20">
              <style jsx global>{`
                @keyframes slowPulse {
                  0%,
                  100% {
                    opacity: 0.2;
                  }
                  50% {
                    opacity: 0.1;
                  }
                }
                .animate-slow-pulse {
                  animation: slowPulse 8s ease-in-out infinite;
                }
              `}</style>
              <div className="w-full h-full animate-slow-pulse"></div>
            </div>
            <div className="absolute inset-0 bg-[#9333EA] rounded-full mix-blend-multiply filter blur-[128px] opacity-20">
              <div
                className="w-full h-full animate-slow-pulse"
                style={{ animationDelay: "4s" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto w-full mt-4">
          <div className="p-8 md:p-12">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold font-montserrat mb-8">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <div className="space-y-4">
              <div className="border border-white/10 rounded-xl p-4 hover:border-[#4F46E5]/40 transition-colors">
                <button
                  onClick={() => setOpenQuestion(openQuestion === 0 ? null : 0)}
                  className="w-full flex justify-between items-center text-xl font-montserrat font-medium"
                >
                  <span className="bg-gradient-to-r from-[#4F46E5] to-[#9333EA] bg-clip-text text-transparent">
                    What is UpMarket?
                  </span>
                  <i
                    className={`fas fa-chevron-down text-[#4F46E5] transition-transform ${
                      openQuestion === 0 ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
                <div
                  className={`mt-4 transition-all duration-300 ease-in-out ${
                    openQuestion === 0
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-300 tracking-wide font-light">
                    UpMarket is an AI-powered marketing platform that helps
                    businesses optimize their marketing strategies through
                    advanced analytics and automation.
                  </p>
                </div>
              </div>
              <div className="border border-white/10 rounded-xl p-4 hover:border-[#4F46E5]/40 transition-colors">
                <button
                  onClick={() => setOpenQuestion(openQuestion === 1 ? null : 1)}
                  className="w-full flex justify-between items-center text-xl font-montserrat font-medium"
                >
                  <span className="bg-gradient-to-r from-[#4F46E5] to-[#9333EA] bg-clip-text text-transparent">
                    How does it work?
                  </span>
                  <i
                    className={`fas fa-chevron-down text-[#4F46E5] transition-transform ${
                      openQuestion === 1 ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
                <div
                  className={`mt-4 transition-all duration-300 ease-in-out ${
                    openQuestion === 1
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-300 tracking-wide font-light">
                    Our platform analyzes your marketing data using AI to
                    provide actionable insights and automate repetitive tasks,
                    helping you make data-driven decisions.
                  </p>
                </div>
              </div>

              <div className="border border-white/10 rounded-xl p-4 hover:border-[#4F46E5]/40 transition-colors">
                <button
                  onClick={() => setOpenQuestion(openQuestion === 2 ? null : 2)}
                  className="w-full flex justify-between items-center text-xl font-montserrat font-medium"
                >
                  <span className="bg-gradient-to-r from-[#4F46E5] to-[#9333EA] bg-clip-text text-transparent">
                    When will it be available?
                  </span>
                  <i
                    className={`fas fa-chevron-down text-[#4F46E5] transition-transform ${
                      openQuestion === 2 ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
                <div
                  className={`mt-4 transition-all duration-300 ease-in-out ${
                    openQuestion === 2
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-300 tracking-wide font-light">
                    We're currently in the final stages of development. Join our
                    waitlist to be among the first to access the platform when
                    we launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
