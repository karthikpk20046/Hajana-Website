import { Cloud, Brain, Users, BarChart3, Cpu, Zap, Code, Link as LinkIcon } from 'lucide-react'

export interface Service {
  icon: any
  title: string
  description: string
  detailedDescription: string
  features: string[]
  color: string
  slug: string
}

// Optimized services data with reduced descriptions for better performance
export const SERVICES: Service[] = [
  {
    icon: Cloud,
    title: 'Salesforce Sales Cloud',
    description: 'AI-powered sales automation and customer relationship management.',
    detailedDescription: 'Transform your sales process with our comprehensive Salesforce Sales Cloud implementation. We provide end-to-end CRM solutions including Einstein AI integration for predictive lead scoring, automated workflows, comprehensive sales analytics, and mobile CRM capabilities. Our expert team ensures seamless integration with your existing systems while maximizing ROI and sales performance.',
    features: ['Einstein Lead Scoring', 'Automated Workflows', 'Mobile CRM', 'Sales Analytics', 'Pipeline Management', 'Territory Management'],
    color: 'from-blue-500 to-cyan-500',
    slug: 'salesforce-sales-cloud'
  },
  {
    icon: Brain,
    title: 'Einstein AI & Machine Learning',
    description: 'Advanced AI models for predictive analytics and intelligent decision making.',
    detailedDescription: 'Leverage the power of artificial intelligence with our Einstein AI and Machine Learning services. We develop custom machine learning models built on the Einstein platform, featuring natural language processing, computer vision, predictive analytics, and automated insights. Our solutions help businesses make data-driven decisions and automate complex processes.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Insights', 'Model Training', 'Data Visualization'],
    color: 'from-purple-500 to-pink-500',
    slug: 'einstein-ai-and-machine-learning'
  },
  {
    icon: Users,
    title: 'Service Cloud Automation',
    description: 'Streamlined customer service operations with AI-driven case routing.',
    detailedDescription: 'Revolutionize your customer service with our Service Cloud Automation solutions. We implement intelligent case routing, automated responses, omnichannel support, and performance analytics to enhance customer satisfaction. Our platform integrates seamlessly with your existing systems to provide a unified customer service experience.',
    features: ['Intelligent Case Routing', 'Omnichannel Support', 'Automated Responses', 'Performance Analytics', 'Knowledge Base', 'Live Chat Integration'],
    color: 'from-green-500 to-teal-500',
    slug: 'service-cloud-automation'
  },
  {
    icon: BarChart3,
    title: 'Marketing Cloud Intelligence',
    description: 'Data-driven marketing campaigns with personalization and optimization.',
    detailedDescription: 'Drive marketing success with our Marketing Cloud Intelligence platform. We provide AI-powered customer segmentation, personalized content delivery, comprehensive campaign analytics, A/B testing capabilities, and ROI tracking. Our solutions help you create targeted campaigns that deliver measurable results and improve customer engagement.',
    features: ['Customer Segmentation', 'Campaign Automation', 'A/B Testing', 'ROI Analytics', 'Email Marketing', 'Social Media Integration'],
    color: 'from-orange-500 to-red-500',
    slug: 'marketing-cloud-intelligence'
  },
  {
    icon: Cpu,
    title: 'Custom AI Model Development',
    description: 'Tailored machine learning solutions for specific business requirements.',
    detailedDescription: 'Build custom AI solutions tailored to your specific business needs with our end-to-end AI model development services. From data preparation and model training to deployment and performance monitoring, we provide comprehensive AI solutions including deep learning, specialized algorithms, and API integration for seamless business integration.',
    features: ['Deep Learning', 'Model Training', 'API Integration', 'Performance Monitoring', 'Data Preprocessing', 'Model Optimization'],
    color: 'from-indigo-500 to-blue-500',
    slug: 'custom-ai-model-development'
  },
  {
    icon: Zap,
    title: 'IoT & Real-time Analytics',
    description: 'Connected device integration with real-time data processing.',
    detailedDescription: 'Connect and analyze your IoT devices with our comprehensive IoT and Real-time Analytics platform. We provide edge computing capabilities, real-time data streaming, device monitoring, predictive maintenance, and advanced analytics for connected devices. Our solutions help you harness the power of IoT data for better decision-making and operational efficiency.',
    features: ['Edge Computing', 'Real-time Streaming', 'Device Monitoring', 'Predictive Maintenance', 'Data Visualization', 'Alert Systems'],
    color: 'from-yellow-500 to-orange-500',
    slug: 'iot-and-real-time-analytics'
  },
  {
    icon: Code,
    title: 'Lightning Web Components',
    description: 'Modern, responsive web components built with Lightning framework.',
    detailedDescription: 'Create modern, responsive web applications with our Lightning Web Components development services. We build custom components using modern JavaScript frameworks, implement responsive design patterns, and ensure seamless Salesforce integration. Our components are optimized for performance and provide an enhanced user experience.',
    features: ['Responsive Design', 'Modern JavaScript', 'Component Library', 'Performance Optimization', 'Accessibility', 'Cross-browser Compatibility'],
    color: 'from-teal-500 to-green-500',
    slug: 'lightning-web-components'
  },
  {
    icon: LinkIcon,
    title: 'MuleSoft Integration Services',
    description: 'Seamless API integration and data connectivity across technology ecosystem.',
    detailedDescription: 'Connect your entire technology ecosystem with our enterprise-grade MuleSoft Integration Services. We provide comprehensive API management, data integration, cloud connectivity, and security protocols for connecting applications, data, and devices across on-premises and cloud environments. Our solutions ensure seamless data flow and system integration.',
    features: ['API Management', 'Data Integration', 'Cloud Connectivity', 'Security Protocols', 'Real-time Sync', 'Error Handling'],
    color: 'from-pink-500 to-purple-500',
    slug: 'mulesoft-integration-services'
  }
]

// Optimized company data
export const COMPANY_STATS = [
  { number: '100+', label: 'Global Customers', icon: 'Globe' },
  { number: '5+', label: 'Years of Success', icon: 'Award' },
  { number: '100%', label: 'Client Success', icon: 'Target' },
  { number: '50+', label: 'Experts', icon: 'Users' }
]

export const COMPANY_VALUES = [
  {
    icon: 'Shield',
    title: 'Satisfaction Guaranteed',
    description: 'Professional services and dedicated support for complete satisfaction.'
  },
  {
    icon: 'Clock',
    title: '24/7 Support',
    description: 'Round-the-clock assistance from our expert team.'
  },
  {
    icon: 'Award',
    title: 'Quality Professionals',
    description: 'Highly qualified and experienced professionals committed to excellence.'
  }
]

export const TESTIMONIALS = [
  {
    name: 'Willson James',
    text: 'Hajana technologies have been amazing throughout the whole process! Professional and dedicated company.',
    rating: 5
  },
  {
    name: 'Harikrishnan',
    text: 'They have a good team, highly regarded and qualified with extensive Salesforce experience.',
    rating: 5
  },
  {
    name: 'John Nelson',
    text: 'Our company found the perfect Salesforce through Hajana technologies. Highly recommended.',
    rating: 5
  },
  {
    name: 'Joan',
    text: 'Professional and enthusiastic team that never failed to deliver with excellence.',
    rating: 5
  }
]

export const EXPERTISE_AREAS = [
  'Sales Cloud', 'Service Cloud', 'Community Cloud', 'Marketing Cloud',
  'App Cloud', 'Integration Cloud', 'Pardot', 'MuleSoft',
  'Einstein AI', 'Tableau', 'Veeva', 'Commerce Cloud',
  'CPQ', 'AI & IoT', 'CRM Analytics', 'Machine Learning & AI'
]

export const CONTACT_INFO = {
  usa: {
    address: '439 West Audubon Drive',
    city: 'Fresno, California USA 93711'
  },
  india: {
    address: '9th Floor, RMZ Latitude Commercial',
    city: 'WeWork Latitude, Bellary Rd, Bengaluru, Karnataka 560024'
  },
  phone: '+1 (669) 235-6845',
  email: 'info@hajanatechnologies.com'
}
