export interface IBasicInfo {
  name: string
  jobTitle: string
  email: string
  phone: string
  location: string
}

export interface IExperience {
  company: string
  position: string
  timePeriod: string
  details: string[]
}

export interface IEducation {
  institution: string
  field: string
  timePeriod: string
}

export interface ICertification {
  course: string
  institution: string
  timePeriod: string
}

export interface ILanguage {
  language: string
  proficiency: string
}

export interface ICv {
  basicInfo: IBasicInfo
  summary: {
    sectionTitle: string
    data: string
  }
  experience: {
    sectionTitle: string
    data: IExperience[]
  }
  education: {
    sectionTitle: string
    data: IEducation[]
  }
  skills: {
    sectionTitle: string
    data: string[]
  }
  certifications: {
    sectionTitle: string
    data: ICertification[]
  }
  languages: {
    sectionTitle: string
    data: ILanguage[]
  }
}
