import { ProfilePhoto } from "@/components/profile-photo";
import { SectionHeading } from "@/components/section-heading";
import { withBasePath } from "@/lib/base-path";
import { site } from "@/lib/site-data";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-20">
      <section id="about" className="scroll-mt-24">
        <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="font-mono text-sm text-accent">{site.title}</p>
            <h1 className="mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              {site.name}
            </h1>
            <p className="mt-2 text-sm text-muted">{site.tagline}</p>
            <p className="mt-6 max-w-prose text-base leading-7 text-muted">
              {site.summary}
            </p>
            <p className="mt-4 text-sm text-muted">
              <a
                href={withBasePath("/resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                Download resume
              </a>
              <span className="mx-2 text-border">·</span>
              <a
                href={`mailto:${site.email}`}
                className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
              >
                Get in touch
              </a>
            </p>
          </div>
          <ProfilePhoto />
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading id="skills">Skills</SectionHeading>
        <div className="space-y-6">
          {site.skillGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-muted">
                {group.label}
              </p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading id="experience">Experience</SectionHeading>
        <ol className="space-y-14">
          {site.experience.map((job) => (
            <li key={job.company}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {job.role}
                  </h3>
                  <p className="text-sm text-muted">
                    {job.company}
                    <span className="text-border"> · </span>
                    {job.location}
                  </p>
                </div>
                <p className="shrink-0 font-mono text-xs text-muted">
                  {job.period}
                </p>
              </div>
              {"context" in job && job.context ? (
                <p className="mt-3 text-sm leading-6 text-muted">{job.context}</p>
              ) : null}
              {"intro" in job && job.intro ? (
                <p className="mt-3 text-sm leading-6 text-muted">{job.intro}</p>
              ) : null}
              {"sections" in job && job.sections ? (
                <div className="mt-6 space-y-8">
                  {job.sections.map((section) => (
                    <div key={section.title}>
                      <h4 className="text-sm font-medium text-foreground">
                        {section.title}
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                        {section.highlights.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}
              {"highlights" in job && job.highlights ? (
                <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <SectionHeading id="projects">Projects</SectionHeading>
        <ul className="space-y-10">
          {site.projects.map((project) => (
            <li key={project.name}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-medium text-foreground">
                  {project.name}
                </h3>
                {"year" in project && project.year ? (
                  <p className="font-mono text-xs text-muted">{project.year}</p>
                ) : null}
              </div>
              <p className="mt-1 font-mono text-xs text-accent">{project.stack}</p>
              <p className="mt-3 text-sm leading-6 text-muted">
                {project.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <SectionHeading id="education">Education</SectionHeading>
        <p className="text-sm font-medium text-foreground">{site.education.degree}</p>
        <p className="mt-1 text-sm text-muted">{site.education.school}</p>

        <div className="mt-12">
          <SectionHeading id="certifications">Certifications</SectionHeading>
        </div>
        <ul className="space-y-2 text-sm text-muted">
          {site.certifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">{site.note}</p>
      </section>
    </main>
  );
}
