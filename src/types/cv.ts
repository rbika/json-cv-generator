import { z } from 'zod'

const basicInfoItemSchema = z.object({
  label: z.string(),
  url: z.string().optional(),
})

const basicInfoSchema = z.object({
  name: z.string(),
  jobTitle: z.string(),
  email: z.string(),
  phone: z.string().optional(),
  location: z.string().optional(),
  linkedin: basicInfoItemSchema.optional(),
  github: basicInfoItemSchema.optional(),
  website: basicInfoItemSchema.optional(),
})

const summarySchema = z.object({
  sectionTitle: z.string(),
  data: z.string(),
})

const skillItemSchema = z.object({
  category: z.string(),
  skills: z.array(z.string()),
})

const skillsSchema = z.object({
  sectionTitle: z.string(),
  data: z.array(skillItemSchema),
})

const experienceSchema = z.object({
  sectionTitle: z.string(),
  data: z.array(
    z.object({
      company: z.string(),
      position: z.string(),
      timePeriod: z.string(),
      description: z.string().optional(),
      details: z.array(z.string()).optional(),
    }),
  ),
})

const educationSchema = z.object({
  sectionTitle: z.string(),
  data: z.array(
    z.object({
      institution: z.string(),
      field: z.string(),
      timePeriod: z.string(),
    }),
  ),
})

const certificationsSchema = z.object({
  sectionTitle: z.string(),
  data: z.array(
    z.object({
      course: z.string(),
      institution: z.string(),
      timePeriod: z.string(),
    }),
  ),
})

const languagesSchema = z.object({
  sectionTitle: z.string(),
  data: z.array(
    z.object({
      language: z.string(),
      proficiency: z.string(),
    }),
  ),
})

const cvSchema = z.object({
  basicInfo: basicInfoSchema,
  summary: summarySchema.optional(),
  skills: skillsSchema.optional(),
  experience: experienceSchema,
  education: educationSchema.optional(),
  certifications: certificationsSchema.optional(),
  languages: languagesSchema.optional(),
})

type BasicInfoItem = z.infer<typeof basicInfoItemSchema>
type BasicInfo = z.infer<typeof basicInfoSchema>
type Summary = z.infer<typeof summarySchema>
type SkillItem = z.infer<typeof skillItemSchema>
type Skills = z.infer<typeof skillsSchema>
type Experience = z.infer<typeof experienceSchema>
type Education = z.infer<typeof educationSchema>
type Certifications = z.infer<typeof certificationsSchema>
type Languages = z.infer<typeof languagesSchema>
type CV = z.infer<typeof cvSchema>

export { cvSchema }
export type {
  BasicInfoItem,
  BasicInfo,
  Summary,
  SkillItem,
  Skills,
  Experience,
  Education,
  Certifications,
  Languages,
  CV,
}
