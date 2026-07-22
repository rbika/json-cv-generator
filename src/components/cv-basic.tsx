import { GlobeIcon, MailIcon, MapPinIcon, SmartphoneIcon } from 'lucide-react'

import { cn } from '@/utils/cn'
import { useCV } from '@/utils/cv-store'
import { GithubIcon } from './icons/github-icon'
import { LinkedinIcon } from './icons/linkedin-icon'

const sectionTitleClasses = 'border-b border-gray-500 mb-2 text-lg'
const sectionContentClasses = 'text-sm dark:text-gray-300 text-gray-700'

function CVBasic() {
  const cv = useCV()

  if (!cv) return null

  return (
    <div className="flex flex-col gap-5">
      {/* Basic info */}
      <section>
        <div className="text-3xl font-semibold">{cv.basicInfo.name}</div>
        <div className="mb-4 text-xl font-light">{cv.basicInfo.jobTitle}</div>
        <div className={cn(sectionContentClasses, 'grid grid-cols-3 gap-2')}>
          <div className="flex items-center gap-2">
            <MailIcon className="size-4" /> {cv.basicInfo.email}
          </div>
          <div className="flex items-center gap-2">
            <SmartphoneIcon className="size-4" /> {cv.basicInfo.phone}
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="size-4" /> {cv.basicInfo.location}
          </div>
          <a
            href={cv.basicInfo.linkedin?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <LinkedinIcon className="size-5" />
            {cv.basicInfo.linkedin?.label}
          </a>
          <a
            href={cv.basicInfo.github?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <GithubIcon className="size-5" />
            {cv.basicInfo.github?.label}
          </a>
          <a
            href={cv.basicInfo.website?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <GlobeIcon className="size-4" />
            {cv.basicInfo.website?.label}
          </a>
        </div>
      </section>

      {/* Summary */}
      <section>
        <div className={sectionTitleClasses}>{cv.summary.sectionTitle}</div>
        <div className={sectionContentClasses}>{cv.summary.data}</div>
      </section>

      {/* Skills */}
      <section>
        <div className={sectionTitleClasses}>{cv.skills.sectionTitle}</div>
        <div className={cn(sectionContentClasses, 'flex flex-col gap-1')}>
          {cv.skills.data.map((skill) => (
            <div key={skill.category} className="flex gap-1">
              <div className="font-semibold">{skill.category}: </div>
              <div>{skill.skills.join(', ')}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <div className={sectionTitleClasses}>{cv.experience.sectionTitle}</div>
        <div className={cn(sectionContentClasses, 'flex flex-col gap-2')}>
          {cv.experience.data.map((experience) => (
            <div key={experience.company} className="flex flex-col gap-1">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 font-semibold">
                  <div>{experience.company}</div>
                  <span>-</span>
                  <div>{experience.position}</div>
                </div>
                <div>{experience.timePeriod}</div>
              </div>
              <div>{experience.description}</div>
              <ul className="list-disc pl-4">
                {experience.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <div className={sectionTitleClasses}>{cv.education.sectionTitle}</div>
        <div className={cn(sectionContentClasses, 'flex flex-col gap-1')}>
          {cv.education.data.map((education) => (
            <div key={education.institution}>
              <div className="font-semibold">{education.institution}</div>
              <div className="flex gap-1">
                <div>{education.field},</div>
                <div>{education.timePeriod}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <div className={sectionTitleClasses}>
          {cv.certifications?.sectionTitle}
        </div>
        <div className={cn(sectionContentClasses, 'flex flex-col gap-1')}>
          {cv.certifications?.data.map((certification) => (
            <div key={certification.course}>
              <div className="font-semibold">{certification.course}</div>
              <div className="flex gap-1">
                <div>{certification.institution},</div>
                <div>{certification.timePeriod}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section>
        <div className={sectionTitleClasses}>{cv.languages?.sectionTitle}</div>
        <div className={cn(sectionContentClasses, 'flex flex-col gap-1')}>
          {cv.languages?.data.map((language) => (
            <div key={language.language} className="flex gap-1">
              <div className="font-semibold">{language.language}: </div>
              <div>{language.proficiency}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export { CVBasic }
