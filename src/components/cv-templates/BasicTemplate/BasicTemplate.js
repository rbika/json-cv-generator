/** @jsxImportSource @emotion/react */

import { FaRegEnvelope, FaMobileAlt, FaMapMarkerAlt } from 'react-icons/fa'

import Section from './Section'
import * as S from './BasicTemplate.styles'

import cv from './data.json' // Temporary

export default function BasicTemplate({ font }) {
  const { basicInfo, summary, skills, certifications, education, experience } =
    cv

  return (
    <div
      css={{
        fontFamily: font,
        fontSize: '0.875rem',
        marginBottom: '4rem',
      }}
    >
      {/* Basic Info */}
      <Section>
        <h2 css={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 400 }}>
          {basicInfo.name}
        </h2>
        <div css={{ display: 'flex' }}>
          {basicInfo.email && (
            <S.ContactInfo>
              <FaRegEnvelope css={{ marginRight: '0.5rem' }} />
              {basicInfo.email}
            </S.ContactInfo>
          )}
          {basicInfo.phone && (
            <S.ContactInfo>
              <FaMobileAlt css={{ marginRight: '0.5rem' }} />
              {basicInfo.phone}
            </S.ContactInfo>
          )}
          {basicInfo.location && (
            <S.ContactInfo>
              <FaMapMarkerAlt css={{ marginRight: '0.5rem' }} />
              {basicInfo.location}
            </S.ContactInfo>
          )}
        </div>
      </Section>

      {/* Summary */}
      {summary?.data && (
        <Section title={summary.sectionTitle}>
          <p>{summary.data}</p>
        </Section>
      )}

      {/* Experience */}
      {!!experience?.data.length && (
        <Section title={experience.sectionTitle}>
          {experience.data.map((item) => {
            return (
              <div>
                <S.Subtitle>
                  {item.company}
                  <span
                    css={{
                      fontWeight: '400',
                      fontSize: '0.875rem',
                      margin: '0 0.5rem',
                    }}
                  >
                    -
                  </span>
                  {item.position}
                </S.Subtitle>
                <S.SubSubtitle>{item.timePeriod}</S.SubSubtitle>
                <ul css={{ listStyle: 'none', padding: '0' }}>
                  {item.details.map((detail) => {
                    return <li>{detail}</li>
                  })}
                </ul>
              </div>
            )
          })}
        </Section>
      )}

      {/* Education */}
      {!!education?.data.length && (
        <Section title={education.sectionTitle}>
          {education.data.map((item) => {
            return (
              <div>
                <S.Subtitle>{item.institution}</S.Subtitle>
                <S.SubSubtitle>{item.timePeriod}</S.SubSubtitle>
                <p>{item.field}</p>
              </div>
            )
          })}
        </Section>
      )}

      {/* Certifications */}
      {!!certifications?.data.length && (
        <Section title={certifications.sectionTitle}>
          {certifications.data.map((item) => {
            return (
              <>
                <S.Subtitle>{item.course}</S.Subtitle>
                <S.SubSubtitle>
                  {item.institution} - {item.timePeriod}
                </S.SubSubtitle>
              </>
            )
          })}
        </Section>
      )}

      {/* Skills */}
      {skills?.data.length && (
        <Section title={skills.sectionTitle}>
          <p>{skills.data.join(' • ')}</p>
        </Section>
      )}
    </div>
  )
}
