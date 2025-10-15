'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Joan Mitchell',
    position: 'CTO',
    company: 'TechCorp Industries',
    rating: 5,
    quote: 'Hajana Technologies transformed our CRM system with their AI-powered solutions. The efficiency gains have been remarkable, with a 40% increase in sales productivity.',
    avatar: '👩‍💼'
  },
  {
    name: 'Willson James',
    position: 'VP of Operations',
    company: 'Global Solutions Inc.',
    rating: 5,
    quote: 'Their Einstein AI implementation has revolutionized our predictive analytics. We now forecast customer behavior with unprecedented accuracy.',
    avatar: '👨‍💼'
  },
  {
    name: 'Harikrishnan Patel',
    position: 'Director of Technology',
    company: 'Innovation Labs',
    rating: 5,
    quote: 'The custom AI models developed by Hajana have given us a competitive edge. Their expertise in machine learning is truly world-class.',
    avatar: '👨‍🔬'
  },
  {
    name: 'John Nelson',
    position: 'CEO',
    company: 'Future Enterprises',
    rating: 5,
    quote: 'Outstanding service and support. The Lightning Web Components they built are fast, responsive, and have significantly improved our user experience.',
    avatar: '👨‍💼'
  }
];

export function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by industry leaders worldwide for exceptional AI and Salesforce solutions
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Client Info */}
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-4">{testimonials[currentIndex].avatar}</div>
                <h4 className="text-xl text-gray-900 mb-1">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600 mb-2">
                  {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                </p>
                
                {/* Star Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200/50 flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200/50 flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200/50">
            <div className="text-3xl text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200/50">
            <div className="text-3xl text-green-600 mb-2">150+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
            <div className="text-3xl text-purple-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
