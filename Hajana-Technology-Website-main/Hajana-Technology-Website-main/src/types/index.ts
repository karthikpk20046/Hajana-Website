export interface Service {
  icon: any
  title: string
  description: string
  detailedDescription: string
  features: string[]
  color: string
  slug: string
}

export interface CompanyStat {
  number: string
  label: string
  icon: string
}

export interface CompanyValue {
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  name: string
  text: string
  rating: number
}

export interface ContactInfo {
  usa: {
    address: string
    city: string
  }
  india: {
    address: string
    city: string
  }
  phone: string
  email: string
}

export interface FormData {
  name: string
  email: string
  company?: string
  phone?: string
  message: string
}

export interface SubmitStatus {
  type: 'success' | 'error' | null
  message: string
}


