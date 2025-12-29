interface MaxWidthWrapperProps {
  children: React.ReactNode
  className?: string
}

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return (
    <div className={`max-w-7xl mx-auto px-2 sm:px-6 md:px-12 ${className}`}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
