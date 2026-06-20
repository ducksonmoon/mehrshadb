type SectionHeadingProps = {
  id: string;
  children: React.ReactNode;
};

export function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className="mb-6 scroll-mt-24 text-xs font-medium uppercase tracking-[0.2em] text-muted"
    >
      {children}
    </h2>
  );
}
