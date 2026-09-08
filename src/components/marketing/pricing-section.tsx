"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: { monthly: "$0", annual: "$0" },
    description: "Perfect to try out the platform.",
    features: [
      "2,500 words / month",
      "3 AI detections / day",
      "10 auto-citations",
      "5 document uploads",
      "PDF export only"
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: { monthly: "$9.99", annual: "$7.99" },
    description: "For serious students.",
    features: [
      "Unlimited words",
      "Unlimited AI detections",
      "All citation formats",
      "All export formats",
      "Voice fingerprint learning",
      "Chat with your paper",
      "All academic disciplines"
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Team",
    price: { monthly: "$7.99", annual: "$5.99" },
    description: "For study groups.",
    features: [
      "Everything in Pro",
      "Real-time collaboration",
      "Shared workspace",
      "Team billing",
      "Priority support",
    ],
    cta: "Contact Sales",
    popular: false,
    perUser: true,
  }
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            Simple, Student-Friendly Pricing
          </h2>
          
          <div className="flex items-center justify-center gap-3">
            <span className={cn("text-sm font-medium", !isAnnual ? "text-zinc-900" : "text-zinc-500")}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600 transition-colors focus:outline-none"
            >
              <span className={cn("inline-block h-4 w-4 transform rounded-full bg-white transition-transform", isAnnual ? "translate-x-6" : "translate-x-1")} />
            </button>
            <span className={cn("text-sm font-medium flex items-center gap-1.5", isAnnual ? "text-zinc-900" : "text-zinc-500")}>
              Annual
              <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl bg-white p-8",
                plan.popular 
                  ? "border-2 border-indigo-600 shadow-xl scale-100 md:scale-105 z-10"
                  : "border border-zinc-200 shadow-sm"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-zinc-900">{plan.name}</h3>
                <p className="text-sm text-zinc-500 mt-2">{plan.description}</p>
              </div>
              
              <div className="mb-6 flex items-baseline text-zinc-900">
                <span className="text-4xl font-extrabold tracking-tight">
                  {isAnnual ? plan.price.annual : plan.price.monthly}
                </span>
                <span className="text-sm text-zinc-500 ml-1 font-medium">
                  /mo{plan.perUser ? " per user" : ""}
                </span>
              </div>
              
              {plan.popular && (
                <p className="text-sm text-indigo-600 font-medium mb-6">
                  {isAnnual ? "$6.99/mo" : "$6.99/mo"} with .edu email
                </p>
              )}

              <ul className="mb-8 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-indigo-600 shrink-0" />
                    <span className="text-sm text-zinc-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  "w-full rounded-full py-3 px-4 text-sm font-semibold transition-all",
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md"
                    : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                )}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
