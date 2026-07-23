import { Container } from '@/components/container'
import { DownloadTemplateButton } from '@/components/download-template-button'
import { Dropzone } from '@/components/dropzone'

const STEPS = [
  {
    title: 'Get the template file',
    description:
      'Start with a structured JSON template covering all supported sections.',
  },
  {
    title: 'Fill in your data',
    description:
      'Replace the placeholder values with your information while preserving the existing schema and field structure.',
  },
  {
    title: 'Upload and generate',
    description:
      'Upload your completed file to preview the CV, then print or export it as a PDF. In the print dialog, uncheck Headers and footers to remove the date, URL, title, and page numbers from the PDF.',
  },
] as const

function HomePage() {
  return (
    <Container className="mt-5 space-y-12">
      <section className="space-y-6">
        <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
          Generate a professional CV from a JSON file.
        </p>

        <Dropzone />

        <ol className="flex flex-col gap-8">
          {STEPS.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span
                aria-hidden
                className="bg-muted text-muted-foreground flex size-7 shrink-0 items-center justify-center rounded-full text-sm font-medium"
              >
                {index + 1}
              </span>
              <div className="space-y-2 pt-0.5">
                <h2 className="font-medium">{step.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
                {index === 0 ? (
                  <DownloadTemplateButton className="mt-1" />
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </Container>
  )
}

export default HomePage
