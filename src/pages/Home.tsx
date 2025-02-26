import React from 'react';
import { Search, Star, Zap } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SEO from '../components/SEO';

const Home = () => {
  const featuredCars = [
    {
      id: 1,
      name: "Tesla Model S",
      price: "89,990",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800",
      features: ["Electric", "Autopilot", "Long Range"],
    },
    {
      id: 2,
      name: "BMW i8",
      price: "147,500",
      image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=800",
      features: ["Hybrid", "Sport Mode", "Premium Interior"],
    },
    {
      id: 3,
      name: "Porsche Taycan",
      price: "103,800",
      image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
      features: ["Electric", "Performance", "Advanced Tech"],
    },
  ];

  return (
    <>
      <SEO 
        title="AI-Powered Car Marketplace"
        description="Find your perfect car with our AI-powered marketplace. Browse luxury cars, electric vehicles, and more with personalized recommendations."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-inter mb-6">
            Find Your Perfect Car with
            <span className="text-primary"> AI</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Discover the future of car buying with our AI-powered marketplace
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for your dream car..."
              className="w-full px-6 py-4 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary hover:text-accent">
              <Search size={24} />
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Zap className="text-primary" size={32} />,
              title: "AI-Powered Search",
              description: "Our advanced AI helps you find the perfect car match based on your preferences",
            },
            {
              icon: <Star className="text-primary" size={32} />,
              title: "Premium Selection",
              description: "Curated collection of high-quality vehicles from trusted dealers",
            },
            {
              icon: <Search className="text-primary" size={32} />,
              title: "Smart Recommendations",
              description: "Get personalized car suggestions based on your driving style and needs",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Cars */}
        <h2 className="text-3xl font-bold mb-8">Featured Vehicles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <div key={car.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <LazyLoadImage
                src={car.image}
                alt={car.name}
                effect="blur"
                className="w-full h-48 object-cover"
                width={800}
                height={400}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                <p className="text-primary text-lg font-bold mb-4">${car.price}</p>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;