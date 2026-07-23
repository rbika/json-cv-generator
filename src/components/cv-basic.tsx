import {
  RiGithubFill,
  RiGlobalLine,
  RiLinkedinBoxFill,
  RiMailLine,
  RiMapPinLine,
  RiSmartphoneLine,
} from '@remixicon/react'

import { cn } from '@/utils/cn'
import { useCV } from '@/utils/cv-store'
import type { FontValue } from './cv-actions'

const sectionTitleClasses = 'border-b border-gray-500 mb-2 text-lg'
const sectionContentClasses = 'text-sm text-gray-700'

const fontClasses: Record<FontValue, string> = {
  inter: 'font-sans',
  geist: 'font-geist',
  'ibm-plex-sans': 'font-ibm-plex-sans',
  lora: 'font-lora',
}

type CVBasicProps = {
  font: FontValue
}

function CVBasic({ font }: CVBasicProps) {
  const cv = useCV()

  if (!cv) return null

  return (
    <div className={cn('print-show flex flex-col gap-5', fontClasses[font])}>
      {/* Basic info */}
      <section>
        <div className="text-3xl font-semibold">{cv.basicInfo.name}</div>
        <div className="mb-4 text-xl font-light">{cv.basicInfo.jobTitle}</div>
        <div className={cn(sectionContentClasses, 'grid grid-cols-3 gap-2.5')}>
          <div className="flex items-center gap-2">
            <RiMailLine className="size-5" /> {cv.basicInfo.email}
          </div>
          {cv.basicInfo.phone ? (
            <div className="flex items-center gap-2">
              <RiSmartphoneLine className="size-5" /> {cv.basicInfo.phone}
            </div>
          ) : null}
          {cv.basicInfo.location ? (
            <div className="flex items-center gap-2">
              <RiMapPinLine className="size-5" /> {cv.basicInfo.location}
            </div>
          ) : null}
          {cv.basicInfo.linkedin ? (
            <a
              href={cv.basicInfo.linkedin?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <RiLinkedinBoxFill className="size-5" />
              {cv.basicInfo.linkedin?.label}
            </a>
          ) : null}
          {cv.basicInfo.github ? (
            <a
              href={cv.basicInfo.github?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <RiGithubFill className="size-5" />
              {cv.basicInfo.github?.label}
            </a>
          ) : null}
          {cv.basicInfo.website ? (
            <a
              href={cv.basicInfo.website?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <RiGlobalLine className="size-5" />
              {cv.basicInfo.website?.label}
            </a>
          ) : null}
        </div>
      </section>

      {/* Summary */}
      {cv.summary ? (
        <section>
          <div className={sectionTitleClasses}>{cv.summary.sectionTitle}</div>
          <div className={sectionContentClasses}>{cv.summary.data}</div>
        </section>
      ) : null}

      {/* Skills */}
      {cv.skills ? (
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
      ) : null}

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
              {experience.description ? (
                <div>{experience.description}</div>
              ) : null}
              {experience.details?.length ? (
                <ul className="list-disc pl-4">
                  {experience.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      {cv.education ? (
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
      ) : null}

      {/* Certifications */}
      {cv.certifications ? (
        <section>
          <div className={sectionTitleClasses}>
            {cv.certifications.sectionTitle}
          </div>
          <div className={cn(sectionContentClasses, 'flex flex-col gap-1')}>
            {cv.certifications.data.map((certification) => (
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
      ) : null}

      {/* Languages */}
      {cv.languages ? (
        <section>
          <div className={sectionTitleClasses}>{cv.languages.sectionTitle}</div>
          <div className={cn(sectionContentClasses, 'flex flex-col gap-1')}>
            {cv.languages.data.map((language) => (
              <div key={language.language} className="flex gap-1">
                <div className="font-semibold">{language.language}: </div>
                <div>{language.proficiency}</div>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}

export { CVBasic }
