import { ProfilePhoto } from "@/components/profile-photo";
import { SectionHeading } from "@/components/section-heading";
import { withBasePath } from "@/lib/base-path";
import { site } from "@/lib/site-data";

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2.5 text-[0.9375rem] leading-6 text-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="page-shell pb-14 pt-8 sm:pb-20 sm:pt-12">
      <section id="about" className="scroll-mt-20">
        <div className="flex items-center gap-4 sm:gap-5">
          <ProfilePhoto size="sm" />
          <div className="min-w-0">
            <h1 className="text-pretty text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              {site.name}
            </h1>
            <p className="mt-1 font-mono text-sm text-accent">{site.title}</p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-muted">{site.tagline}</p>
        <p className="mt-5 max-w-prose text-[0.9375rem] leading-7 text-muted sm:text-base">
          {site.summary}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={withBasePath("/resume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Download resume
          </a>
          <a href={`mailto:${site.email}`} className="btn btn-secondary">
            Get in touch
          </a>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading id="skills">Skills</SectionHeading>
        <div className="space-y-4 sm:space-y-5">
          {site.skillGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-1.5 text-xs font-medium uppercase tracking-[0.12em] text-muted">
                {group.label}
              </p>
              <p className="text-[0.9375rem] leading-7 text-foreground/90 sm:hidden">
                {group.items.join(" · ")}
              </p>
              <ul className="hidden flex-wrap gap-2 sm:flex">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading id="experience">Experience</SectionHeading>
        <ol className="space-y-10 sm:space-y-12">
          {site.experience.map((job) => (
            <li key={job.company}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-base font-medium text-foreground">{job.role}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {job.company}
                    <span className="text-border"> · </span>
                    {job.location}
                  </p>
                </div>
                <p className="shrink-0 font-mono text-xs text-muted sm:pt-1">
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
                <div className="mt-5 space-y-3">
                  {job.sections.map((section, index) => (
                    <details
                      key={section.title}
                      className="group rounded-lg border border-border bg-background/60"
                      open={index === 0}
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-foreground">
                        <span>{section.title}</span>
                        <span className="font-mono text-xs text-muted group-open:hidden">
                          Show
                        </span>
                        <span className="hidden font-mono text-xs text-muted group-open:inline">
                          Hide
                        </span>
                      </summary>
                      <div className="border-t border-border px-4 py-3">
                        <BulletList items={section.highlights} />
                      </div>
                    </details>
                  ))}
                </div>
              ) : null}

              {"highlights" in job && job.highlights ? (
                <div className="mt-4">
                  <BulletList items={job.highlights} />
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="section-block">
        <SectionHeading id="projects">Projects</SectionHeading>
        <ul className="space-y-8">
          {site.projects.map((project) => (
            <li
              key={project.name}
              className="rounded-lg border border-border bg-background/60 p-4 sm:p-5"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-medium text-foreground">{project.name}</h3>
                {"year" in project && project.year ? (
                  <p className="font-mono text-xs text-muted">{project.year}</p>
                ) : null}
              </div>
              <p className="mt-2 font-mono text-xs leading-5 text-accent">{project.stack}</p>
              <p className="mt-3 text-[0.9375rem] leading-6 text-muted">
                {project.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-block">
        <SectionHeading id="education">Education</SectionHeading>
        <p className="text-sm font-medium text-foreground">{site.education.degree}</p>
        <p className="mt-1 text-sm leading-6 text-muted">{site.education.school}</p>

        <div className="mt-10">
          <SectionHeading id="certifications">Certifications</SectionHeading>
          <ul className="space-y-2 text-sm text-muted">
            {site.certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-sm text-muted">{site.note}</p>
      </section>
    </main>
  );
}
