import { cn } from '@/utils/cn'

const Container = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:max-w-screen-sm md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl',
        className,
      )}
      {...props}
    />
  )
}

export { Container }
