import React from 'react';
import { Car, Calculator, Calendar, Shield } from 'lucide-react';

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-inter mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Comprehensive automotive solutions powered by advanced AI technology
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Car Sales */}
        <div className="bg-gray-800 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <Car className="text-primary mr-4" size={32} />
            <h2 className="text-2xl font-bold">Car Sales</h2>
          </div>
          <p className="text-gray-400 mb-6">
            Browse our extensive collection of vehicles, from luxury cars to practical family vehicles.
            Our AI-powered search helps you find the perfect match.
          </p>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              AI-powered vehicle matching
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Virtual showroom tours
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Price comparison tools
            </li>
          </ul>
        </div>

        {/* Financing */}
        <div className="bg-gray-800 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <Calculator className="text-primary mr-4" size={32} />
            <h2 className="text-2xl font-bold">Financing</h2>
          </div>
          <p className="text-gray-400 mb-6">
            Get personalized financing options and calculate your monthly payments with our
            advanced financing calculator.
          </p>
          <div className="bg-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Financing Calculator</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Vehicle Price ($)
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 bg-gray-600 rounded-md text-white"
                  placeholder="Enter vehicle price"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Down Payment ($)
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 bg-gray-600 rounded-md text-white"
                  placeholder="Enter down payment"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Loan Term (months)
                </label>
                <select className="w-full px-3 py-2 bg-gray-600 rounded-md text-white">
                  <option>36 months</option>
                  <option>48 months</option>
                  <option>60 months</option>
                  <option>72 months</option>
                </select>
              </div>
              <button className="w-full bg-primary hover:bg-accent text-white font-bold py-2 rounded-md transition-colors">
                Calculate Payment
              </button>
            </div>
          </div>
        </div>

        {/* Service Booking */}
        <div className="bg-gray-800 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <Calendar className="text-primary mr-4" size={32} />
            <h2 className="text-2xl font-bold">Service Booking</h2>
          </div>
          <p className="text-gray-400 mb-6">
            Schedule maintenance and repairs with our network of certified service centers.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Service Type
              </label>
              <select className="w-full px-3 py-2 bg-gray-700 rounded-md text-white">
                <option>Regular Maintenance</option>
                <option>Repair Service</option>
                <option>Inspection</option>
                <option>Custom Service</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 bg-gray-700 rounded-md text-white"
              />
            </div>
            <button className="w-full bg-primary hover:bg-accent text-white font-bold py-2 rounded-md transition-colors">
              Book Service
            </button>
          </div>
        </div>

        {/* Insurance */}
        <div className="bg-gray-800 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <Shield className="text-primary mr-4" size={32} />
            <h2 className="text-2xl font-bold">Insurance</h2>
          </div>
          <p className="text-gray-400 mb-6">
            Get competitive insurance quotes from leading providers, tailored to your needs.
          </p>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Instant quote comparison
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Comprehensive coverage options
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Easy online enrollment
            </li>
          </ul>
          <button className="w-full bg-primary hover:bg-accent text-white font-bold py-2 rounded-md mt-6 transition-colors">
            Get Insurance Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;