import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Tag,
  Icon,
  Card,
  Grid,
  Media,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      
      {/* GitHub-style Info Section */}
      <RevealFx translateY="12" delay={0.5} fillWidth>
        <Column maxWidth="m" fillWidth gap="xl" paddingY="xl" paddingX="l">
          {/* Links Section */}
          <Column gap="s">
            <Text 
              variant="label-default-s" 
              onBackground="neutral-weak" 
              weight="strong"
              style={{ textTransform: "uppercase", letterSpacing: "0.5px", textAlign: "center" }}
            >
              Links
            </Text>
            <Row gap="s" wrap horizontal="center">
              <Button
                href="https://linkedin.com/in/neethj"
                variant="secondary"
                size="s"
                prefixIcon="linkedin"
                label="LinkedIn"
                style={{
                  borderRadius: "var(--static-space-6)",
                  transition: "all 0.2s ease",
                }}
                className="github-link-pill"
              />
              <Button
                href="https://github.com/neethj"
                variant="secondary"
                size="s"
                prefixIcon="github"
                label="GitHub"
                style={{
                  borderRadius: "var(--static-space-6)",
                  transition: "all 0.2s ease",
                }}
                className="github-link-pill"
              />
              <Button
                href="mailto:neeth35@gmail.com"
                variant="secondary"
                size="s"
                prefixIcon="email"
                label="Email"
                style={{
                  borderRadius: "var(--static-space-6)",
                  transition: "all 0.2s ease",
                }}
                className="github-link-pill"
              />
              <Button
                href="https://medium.com/@neeth35"
                variant="secondary"
                size="s"
                prefixIcon="medium"
                label="Medium"
                style={{
                  borderRadius: "var(--static-space-6)",
                  transition: "all 0.2s ease",
                }}
                className="github-link-pill"
              />
            </Row>
          </Column>

          {/* Skills Section */}
          <Column gap="s">
            <Text 
              variant="label-default-s" 
              onBackground="neutral-weak" 
              weight="strong"
              style={{ textTransform: "uppercase", letterSpacing: "0.5px", textAlign: "center" }}
            >
              Skills
            </Text>
            <Row gap="s" wrap horizontal="center">
              {[
                { name: "LLMs", icon: "openai" },
                { name: "Cursor", icon: "rocket" },
                { name: "Python", icon: "python" },
                { name: "JavaScript", icon: "javascript" },
                { name: "TypeScript", icon: "typescript" },
                { name: "React", icon: "react" },
                { name: "Next.js", icon: "nextjs" },
                { name: "Figma", icon: "figma" },
                { name: "AI Prototyping", icon: "rocket" },
                { name: "Machine Learning", icon: "rocket" },
                { name: "Data Science", icon: "rocket" },
                { name: "API Integration", icon: "openai" },
                { name: "Supabase", icon: "supabase" },
                { name: "Git", icon: "git" },
                { name: "WordPress", icon: "wordpress" },
                { name: "LMS", icon: "rocket" },
                { name: "SEO", icon: "globe" },
                { name: "Mentoring", icon: "person" },
              ].map((skill) => (
                <Tag
                  key={skill.name}
                  size="m"
                  prefixIcon={skill.icon}
                  style={{
                    borderRadius: "var(--static-space-6)",
                    transition: "all 0.2s ease",
                    cursor: "default",
                    padding: "var(--static-space-2) var(--static-space-4)",
                    border: "none",
                  }}
                  className={`github-skill-tag skill-${skill.icon}`}
                >
                  {skill.name}
                </Tag>
              ))}
            </Row>
          </Column>
        </Column>
      </RevealFx>

      {/* My Projects Section */}
      <RevealFx translateY="16" delay={0.6} fillWidth>
        <Column maxWidth="m" fillWidth gap="xl" paddingY="xl" paddingX="l">
          {/* Header */}
          <Column gap="m" horizontal="center" align="center">
            <Badge
              background="brand-alpha-weak"
              paddingX="12"
              paddingY="4"
              onBackground="brand-strong"
              textVariant="label-default-s"
              arrow={false}
            >
              My Projects
            </Badge>
            <Heading wrap="balance" variant="display-strong-l" style={{ textAlign: "center" }}>
              Check out my latest work
            </Heading>
            <Text
              wrap="balance"
              variant="body-default-l"
              onBackground="neutral-weak"
              style={{ textAlign: "center", maxWidth: "600px" }}
            >
              I've worked on AI-powered tools, machine learning models, and client websites. From
              mentoring 500+ students to building production apps, here are my featured projects.
            </Text>
          </Column>

          {/* Projects Grid */}
          <Grid columns="2" gap="l" s={{ columns: "1" }}>
            {[
              {
                title: "EXEA",
                description:
                  "Project management app with a modern landing page. Designed in Figma and built with React for a clean, responsive experience.",
                tech: ["React", "Figma"],
                impact: "Project management & landing page",
                github: null,
                live: "https://eaglestrike-hr8t8lyhr-neeth35-6341s-projects.vercel.app/",
                image: "/images/projects/exea/land.png",
              },
              {
                title: "Build Mode AI",
                description:
                  "AI-powered project management app to simplify task management for entrepreneurs. Built with modern stack and OpenAI API integration.",
                tech: ["React", "Next.js", "OpenAI API", "Supabase", "Clerk Auth"],
                impact: "10+ user tests, Personalised plan to execute your idea on solving a problem",
                github: "https://github.com/neethj/project-management-app",
                live: "https://eaglestrike-phi.vercel.app/",
                image: "/images/projects/build-mode-ai/cover.jpg",
              },
              {
                title: "Music Genre Classifier",
                description:
                  "MSc dissertation comparing ML and DL models for music classification. Best performing model achieved 92% accuracy using CNN with hyperparameter tuning.",
                tech: ["Python", "TensorFlow", "CNN", "Machine Learning"],
                impact: "92% accuracy",
                github: "https://github.com/neethj/Comparative-study-of-ML-and-DL-models-on-music-genre-classifier",
                live: null,
                image: "/images/projects/music-genre-classifier/cover.jpg",
              },
              {
                title: "Career Capital",
                description: "WordPress website for Career Coach.",
                tech: ["WordPress", "SMTP", "Speed Optimization", "Cloud Hosting", "Spam Protection"],
                impact: "25+ qualified leads generated through website, 1% conversion rate",
                github: null,
                live: "https://careercapital.one/",
                image: "/images/projects/career-capital/cover.jpg",
              },
              {
                title: "Student Performance Predictor",
                description:
                  "Machine learning model that predicts student academic performance based on various factors.",
                tech: ["Python", "Scikit-learn", "Pandas", "Data Analysis"],
                impact: "Predictive analytics",
                github: "https://github.com/neethj/Student-performance-predictor",
                live: null,
                image: "/images/projects/student-performance-predictor/cover.jpg",
              },
              {
                title: "Stay Abroad",
                description:
                  "Digital marketing campaign and website design. Implemented content strategy resulting in social media growth and website traffic increase.",
                tech: ["Figma", "Content Marketing", "SEO"],
                impact: "300+ Followers growth, 10+ leads generated",
                github: null,
                live: "https://stayabroad.figma.site/",
                image: "/images/projects/stay-abroad/cover.jpg",
              },
              {
                title: "Marketing Analysis",
                description:
                  "Data analytics project analyzing marketing campaign performance. Extracted insights to optimize digital marketing strategies.",
                tech: ["Python", "Data Analytics", "Visualization"],
                impact: "Data-driven insights",
                github: "https://github.com/neethj/Marketing-analysis",
                live: null,
                image: "/images/projects/marketing-analysis/cover.jpg",
              },
            ].map((project, index) => (
              <Card
                key={index}
                direction="column"
                padding="0"
                radius="l"
                border="neutral-alpha-weak"
                background="surface"
                style={{
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                }}
                className="project-card"
              >
                {/* Image Placeholder */}
                {project.image ? (
                  <Media
                    src={project.image}
                    aspectRatio="16/9"
                    radius="l"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <Column
                    fillWidth
                    style={{
                      minHeight: "200px",
                      backgroundColor: "var(--neutral-alpha-weak)",
                    }}
                    background="neutral-alpha-weak"
                    horizontal="center"
                    vertical="center"
                  >
                    <Text variant="body-default-xs" onBackground="neutral-weak">
                      Image Placeholder
                    </Text>
                  </Column>
                )}

                {/* Content */}
                <Column fillWidth gap="m" padding="l">
                  {/* Title */}
                  <Heading variant="heading-strong-l" wrap="balance">
                    {project.title}
                  </Heading>

                  {/* Description */}
                  <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
                    {project.description}
                  </Text>

                  {/* Tech Stack */}
                  <Row gap="s" wrap>
                    {project.tech.map((tech) => (
                      <Tag key={tech} size="s" style={{ borderRadius: "var(--static-space-6)" }}>
                        {tech}
                      </Tag>
                    ))}
                  </Row>

                  {/* Impact Metric */}
                  <Text
                    variant="label-strong-s"
                    onBackground="accent-weak"
                    style={{
                      color: "var(--scheme-accent-600)",
                      fontWeight: "600",
                    }}
                  >
                    {project.impact}
                  </Text>

                  {/* Buttons */}
                  <Row gap="s" wrap>
                    {project.live && (
                      <Button
                        href={project.live}
                        variant="primary"
                        size="s"
                        label="View Live"
                        suffixIcon="arrowUpRightFromSquare"
                        style={{
                          borderRadius: "var(--static-space-6)",
                        }}
                      />
                    )}
                    {project.github && (
                      <Button
                        href={project.github}
                        variant="tertiary"
                        size="s"
                        label="Code"
                        prefixIcon="github"
                        style={{
                          borderRadius: "var(--static-space-6)",
                        }}
                      />
                    )}
                  </Row>
                </Column>
              </Card>
            ))}
          </Grid>
        </Column>
      </RevealFx>

      <Mailchimp />
    </Column>
  );
}
