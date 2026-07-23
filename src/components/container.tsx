import { cn } from '@/utils/cn'

const Container = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:max-w-screen-sm md:max-w-3xl',
        className,
      )}
      {...props}
    />
  )
}

export { Container }
