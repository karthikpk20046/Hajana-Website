'use client'

import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">HT</span>
              </div>
              <span className="text-white font-bold text-lg">Hajana Technologies</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Leading Salesforce and AI technology company transforming businesses through intelligent solutions since 2014. We specialize in comprehensive CRM implementations, custom AI development, and enterprise integration services.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/hajana-technologies" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/hajanatech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:info@hajanatechnologies.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/salesforce-sales-cloud" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Salesforce Sales Cloud</a></li>
              <li><a href="/services/einstein-ai-and-machine-learning" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Einstein AI & Machine Learning</a></li>
              <li><a href="/services/service-cloud-automation" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Service Cloud Automation</a></li>
              <li><a href="/services/marketing-cloud-intelligence" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Marketing Cloud Intelligence</a></li>
              <li><a href="/services/custom-ai-model-development" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Custom AI Model Development</a></li>
              <li><a href="/services/iot-and-real-time-analytics" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">IoT & Real-time Analytics</a></li>
              <li><a href="/services/lightning-web-components" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Lightning Web Components</a></li>
              <li><a href="/services/mulesoft-integration-services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">MuleSoft Integration Services</a></li>
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                <span>+1 (669) 235-6845</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                <span>info@hajanatechnologies.com</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-cyan-400" />
                <div>
                  <div>439 West Audubon Drive</div>
                  <div>Fresno, California USA 93711</div>
                  <div className="mt-2">9th Floor, RMZ Latitude Commercial</div>
                  <div>WeWork Latitude, Bellary Rd</div>
                  <div>Bengaluru, Karnataka 560024</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Hajana Technologies. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Terms of Service</a>
              <a href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}