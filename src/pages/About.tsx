import React from 'react';
import { Brain, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-inter mb-6">
          Revolutionizing Car Shopping with
          <span className="text-primary"> AI</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          At Insta Car AI, we're combining cutting-edge artificial intelligence with automotive expertise 
          to transform how people find and purchase their perfect vehicle.
        </p>
      </div>

      {/* Company Overview */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1552849397-7a2d7864a9c5?auto=format&fit=crop&q=80&w=800" 
            alt="Modern car showroom" 
            className="rounded-lg shadow-xl w-full h-[400px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-400 mb-4">
            Founded in 2025, Insta Car AI emerged from a simple observation: car buying 
            should be smarter, easier, and more personalized. Our team of automotive 
            enthusiasts and AI experts came together to create a platform that understands 
            exactly what you're looking for in your next vehicle.
          </p>
          <p className="text-gray-400">
            Today, we're proud to serve thousands of customers, helping them find their 
            perfect match through our advanced AI-powered recommendation system and 
            comprehensive marketplace platform.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-800 p-8 rounded-lg">
          <div className="flex justify-center mb-6">
            <Brain className="text-primary" size={48} />
          </div>
          <h3 className="text-xl font-bold mb-4 text-center">Our Mission</h3>
          <p className="text-gray-400 text-center">
            To revolutionize the car buying experience through innovative AI technology, 
            making it more intuitive, personalized, and enjoyable.
          </p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg">
          <div className="flex justify-center mb-6">
            <Target className="text-primary" size={48} />
          </div>
          <h3 className="text-xl font-bold mb-4 text-center">Our Vision</h3>
          <p className="text-gray-400 text-center">
            To become the world's leading AI-powered automotive marketplace, setting 
            new standards for car buying and selling.
          </p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg">
          <div className="flex justify-center mb-6">
            <Users className="text-primary" size={48} />
          </div>
          <h3 className="text-xl font-bold mb-4 text-center">Our Values</h3>
          <p className="text-gray-400 text-center">
            Innovation, transparency, and customer satisfaction drive everything we do, 
            ensuring the best possible experience for our users.
          </p>
        </div>
      </div>

      {/* AI Technology Section */}
      <div className="bg-gray-800 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our AI Technology</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Advanced Matching Algorithm</h3>
            <p className="text-gray-400 mb-6">
              Our proprietary AI algorithm analyzes thousands of data points to match you 
              with vehicles that perfectly align with your preferences, lifestyle, and budget.
            </p>
            <h3 className="text-xl font-bold mb-4">Real-time Market Analysis</h3>
            <p className="text-gray-400">
              Our AI continuously monitors market trends, pricing data, and vehicle 
              availability to ensure you get the best deals and insights.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Personalized Recommendations</h3>
            <p className="text-gray-400 mb-6">
              The more you interact with our platform, the better our AI understands your 
              preferences, delivering increasingly accurate vehicle suggestions.
            </p>
            <h3 className="text-xl font-bold mb-4">Predictive Analytics</h3>
            <p className="text-gray-400">
              Our AI helps predict future vehicle values, maintenance costs, and optimal 
              buying times, empowering you to make informed decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;