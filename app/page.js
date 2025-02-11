"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white mt-40">

      <HeroSection />

   
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
          Everything you need to manage your expenses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card className="p-6" key={index}>
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Whatt Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <Card className="p-6 h-full flex items-center justify-center shadow-lg">
                      <CardContent className="text-center">
                        <div className="transform transition-transform duration-500 hover:scale-110">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="rounded-full mx-auto mb-4"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="font-semibold text-xl">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {testimonial.role}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back">
                    <Card className="p-6 h-full flex items-center justify-center shadow-lg">
                      <CardContent>
                        <p className="text-gray-600 text-center">
                          {testimonial.quote}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .flip-card {
            perspective: 1000px;
            height: 290px; /* Adjust height as needed */
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.8s ease-in-out;
            transform-style: preserve-3d;
          }

          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 8px;
          }

          .flip-card-front {
            background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
          }

          .flip-card-back {
            transform: rotateY(180deg);
            background: linear-gradient(135deg, #e5e7eb, #f3f4f6);
          }
        `}</style>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Take Control of Your Expenses?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of users who are already managing their expenses
          smarter with Expenzo
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
