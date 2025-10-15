# Hajana Technologies Website - Project Structure

## 📁 Clean File Organization

### 🎯 **Root Structure**
```
Hajana-Technology-Website-main/
├── app/                          # Next.js App Router
│   ├── about/page.tsx           # About page
│   ├── contact/page.tsx         # Contact page
│   ├── services/                # Services pages
│   │   ├── page.tsx            # Services listing
│   │   ├── salesforce-sales-cloud/page.tsx
│   │   ├── einstein-ai-and-machine-learning/page.tsx
│   │   ├── service-cloud-automation/page.tsx
│   │   ├── marketing-cloud-intelligence/page.tsx
│   │   ├── custom-ai-model-development/page.tsx
│   │   ├── iot-and-real-time-analytics/page.tsx
│   │   ├── lightning-web-components/page.tsx
│   │   └── mulesoft-integration-services/page.tsx
│   ├── api/                     # API routes
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── src/
│   ├── components/              # React components
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx      # Navigation header
│   │   │   └── Footer.tsx      # Site footer
│   │   ├── sections/           # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesShowcase.tsx
│   │   │   ├── TechnologyStack.tsx
│   │   │   ├── ClientTestimonials.tsx
│   │   │   ├── TrustCredibility.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── pages/              # Page templates
│   │   │   └── ServicePageTemplate.tsx
│   │   ├── interactive/         # Interactive components
│   │   │   └── ChatBot.tsx
│   │   ├── ai-effects/         # Visual effects
│   │   │   ├── CircuitPattern.tsx
│   │   │   ├── HolographicCard.tsx
│   │   │   ├── NeuralNetworkBackground.tsx
│   │   │   └── ParticleField.tsx
│   │   └── ui/                 # Base UI components
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       ├── use-mobile.ts
│   │       └── utils.ts
│   ├── lib/                    # Utilities and constants
│   │   └── constants/
│   │       └── services.ts     # All service data
│   └── types/                  # TypeScript types
│       └── index.ts           # Shared interfaces
├── public/                     # Static assets
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── next.config.js             # Next.js configuration
```

## 🎯 **Key Improvements Made**

### ✅ **1. Centralized Data Management**
- **`src/lib/constants/services.ts`**: Single source of truth for all service data
- **`src/types/index.ts`**: Shared TypeScript interfaces
- **Eliminates duplication** across components

### ✅ **2. Reusable Components**
- **`ServicePageTemplate.tsx`**: Template for all service pages
- **Consistent design** across all service pages
- **Easy maintenance** - update template, all pages update

### ✅ **3. Clean Service Pages**
- **8 individual service pages** with proper URLs
- **Consistent structure** using shared template
- **SEO-friendly** individual pages

### ✅ **4. Organized Components**
- **`layout/`**: Header, Footer
- **`sections/`**: Page sections (Hero, Services, etc.)
- **`pages/`**: Page templates
- **`ui/`**: Reusable UI components
- **`ai-effects/`**: Visual effects
- **`interactive/`**: Interactive components

### ✅ **5. Proper Navigation**
- **Header navigation** with proper routing
- **Logo links** to homepage
- **Mobile-responsive** navigation menu

## 🚀 **Navigation Structure**

### **Main Navigation**
- **Home** → `/` (Homepage)
- **Services** → `/services` (All services)
- **About** → `/about` (Company info)
- **Contact** → `/contact` (Contact form)

### **Service Pages**
- **Salesforce Sales Cloud** → `/services/salesforce-sales-cloud`
- **Einstein AI & Machine Learning** → `/services/einstein-ai-and-machine-learning`
- **Service Cloud Automation** → `/services/service-cloud-automation`
- **Marketing Cloud Intelligence** → `/services/marketing-cloud-intelligence`
- **Custom AI Model Development** → `/services/custom-ai-model-development`
- **IoT & Real-time Analytics** → `/services/iot-and-real-time-analytics`
- **Lightning Web Components** → `/services/lightning-web-components`
- **MuleSoft Integration Services** → `/services/mulesoft-integration-services`

## 📊 **Data Flow**

### **Services Data**
```typescript
// Single source of truth
SERVICES[] → ServicesShowcase.tsx (Homepage)
SERVICES[] → /services/page.tsx (Services listing)
SERVICES[].find() → Individual service pages
```

### **Company Data**
```typescript
// Centralized constants
COMPANY_STATS → About page
COMPANY_VALUES → About page
TESTIMONIALS → About page
EXPERTISE_AREAS → About page
CONTACT_INFO → About page
```

## 🎨 **Design Consistency**

### **Color Schemes**
- **Blue gradients**: `from-blue-500 to-cyan-500`
- **Purple gradients**: `from-purple-500 to-pink-500`
- **Green gradients**: `from-green-500 to-teal-500`
- **Consistent across** all service pages

### **Layout Patterns**
- **Header**: Navigation + title
- **Content**: Overview + Features + Benefits + CTA
- **Footer**: Contact information
- **Responsive**: Mobile-first design

## 🔧 **Development Benefits**

### **Maintainability**
- **Single file** for service data
- **Template-based** service pages
- **Consistent** component structure

### **Scalability**
- **Easy to add** new services
- **Simple to modify** existing services
- **Reusable** components

### **Performance**
- **Optimized imports** - only what's needed
- **Clean code** - no duplication
- **Fast loading** - efficient structure

## 🎯 **Next Steps**

The project now has a **clean, maintainable structure** with:
- ✅ **Centralized data management**
- ✅ **Reusable components**
- ✅ **Consistent design patterns**
- ✅ **Proper navigation**
- ✅ **SEO-friendly URLs**
- ✅ **Mobile-responsive design**

All files are properly organized with clear naming conventions and logical folder structure!


