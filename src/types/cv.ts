export interface BasicInfoItem {
  label: string
  url?: string
}

export interface BasicInfo {
  name: string
  jobTitle: string
  email: string
  phone?: string
  location?: string
  linkedin?: BasicInfoItem
  github?: BasicInfoItem
  website?: BasicInfoItem
}

export interface Summary {
  sectionTitle: string
  data: string
}

export interface SkillItem {
  category: string
  skills: string[]
}

export interface Skills {
  sectionTitle: string
  data: SkillItem[]
}

export interface Experience {
  sectionTitle: string
  data: {
    company: string
    position: string
    timePeriod: string
    description: string
    details: string[]
  }[]
}

export interface Education {
  sectionTitle: string
  data: {
    institution: string
    field: string
    timePeriod: string
  }[]
}

export interface Certifications {
  sectionTitle: string
  data: {
    course: string
    institution: string
    timePeriod: string
  }[]
}

export interface Languages {
  sectionTitle: string
  data: {
    language: string
    proficiency: string
  }[]
}

export interface CV {
  basicInfo: BasicInfo
  summary: Summary
  skills: Skills
  experience: Experience
  education: Education
  certifications?: Certifications
  languages?: Languages
}
