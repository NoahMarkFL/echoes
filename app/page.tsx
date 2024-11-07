/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Globe, Heart, Mic, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">VoicesUnited</h1>

          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Empowering Young Voices, <br />
            <span className="text-orange-600">Connecting Hearts</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Give underprivileged children a platform to share their stories,
            express themselves, and connect with others around the world.
          </p>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg">
            Join Our Community
          </Button>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
              How VoicesUnited Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Mic,
                  title: "Share Stories",
                  description: "Record and share your unique experiences",
                },
                {
                  icon: Users,
                  title: "Connect",
                  description: "Meet children from diverse backgrounds",
                },
                {
                  icon: Globe,
                  title: "Explore Cultures",
                  description: "Learn about different ways of life",
                },
                {
                  icon: Heart,
                  title: "Feel Valued",
                  description: "Know that your voice matters",
                },
              ].map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <feature.icon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-8">Our Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "10,000+", description: "Stories Shared" },
                { number: "50+", description: "Countries Reached" },
                { number: "100,000+", description: "Lives Touched" },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl font-bold mb-2">{stat.number}</p>
                  <p className="text-xl">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-12">
              Voices of Change
            </h3>
            <blockquote className="text-2xl italic text-gray-600 max-w-3xl mx-auto">
              "VoicesUnited has given me a chance to share my story and connect
              with kids just like me from all over the world. I feel heard and
              understood for the first time."
            </blockquote>
            <p className="mt-4 text-gray-800 font-semibold">
              - Aisha, 12 years old
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-orange-100">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Join Us in Amplifying Young Voices
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Together, we can create a global community where every child's
              story matters.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 VoicesUnited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
