const Loader = ({ className }: { className: string }) => {
  return (
    <span className={`grid grid-cols-3 w-fit ${className}`}>
      <span className="block animate-jump" style={{ animationDelay: '.1s' }}>
        .
      </span>
      <span
        className="block delay-500 animate-jump"
        style={{ animationDelay: '.2s' }}
      >
        .
      </span>
      <span className="block animate-jump" style={{ animationDelay: '.3s' }}>
        .
      </span>
    </span>
  )
}

export default Loader
