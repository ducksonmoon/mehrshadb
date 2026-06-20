type SectionHeadingProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionHeading({ id, children, className = "" }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`scroll-mt-20 mb-5 text-xs font-medium uppercase tracking-[0.18em] text-muted ${className}`}
    >
      {children}
    </h2>
  );
}
