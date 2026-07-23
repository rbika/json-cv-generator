'use client'

import { Button } from '@/components/ui/button'

function DownloadTemplateButton({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  function handleDownload() {
    const link = document.createElement('a')
    link.href = '/cv-template.json'
    link.download = 'cv-template.json'
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <Button className={className} onClick={handleDownload} {...props}>
      Download template
    </Button>
  )
}

export { DownloadTemplateButton }
