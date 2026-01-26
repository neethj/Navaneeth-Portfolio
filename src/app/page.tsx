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
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

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

      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Projects range={[2]} />
      <Mailchimp />
    </Column>
  );
}
