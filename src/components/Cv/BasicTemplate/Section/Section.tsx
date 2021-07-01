/** @jsxImportSource @emotion/react */

type SectionProps = {
  title?: string
  children: React.ReactNode
}

function Section({ title, children }: SectionProps): JSX.Element {
  return (
    <div css={{ marginBottom: '1.5rem' }}>
      {title && (
        <h2
          css={{
            borderBottom: '1px solid #bdbdbd',
            fontSize: '1.25rem',
            fontWeight: 'normal',
            paddingBottom: '0.25rem',
          }}
        >
          {title}
        </h2>
      )}
      <div>{children}</div>
    </div>
  )
}

export default Section
