'use client'

import { useRouter } from 'next/navigation'

import { useDropzone } from 'react-dropzone'
import { toast } from 'sonner'

import { cn } from '@/utils/cn'
import { saveCV } from '@/utils/cv-store'
import { paths } from '@/utils/paths'

function Dropzone() {
  const router = useRouter()
  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      accept: { 'application/json': [] },
      multiple: false,
      onDrop: handleDrop,
    })

  async function handleDrop(acceptedFiles: File[]) {
    const file = acceptedFiles[0]
    if (!file) return

    const fileContent = await file.text()

    try {
      const data = JSON.parse(fileContent)
      saveCV(data)
      router.push(paths.cv())
    } catch {
      toast.error('Invalid JSON file. Please try again.')
    }
  }

  return (
    <div
      {...getRootProps({
        className: cn(
          'border-border hover:border-foreground/30 hover:bg-muted/50 flex h-36 flex-col items-center justify-center rounded-md border-2 border-dashed p-4 transition-colors hover:cursor-pointer',
          {
            'border-green-500 bg-green-500/5': isDragAccept,
            'border-red-500 bg-red-500/5': isDragReject,
          },
        ),
      })}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="font-medium">Drop your cv.json here</p>
        <p className="text-muted-foreground text-sm">
          or click to select a file
        </p>
      </div>
    </div>
  )
}

export { Dropzone }
