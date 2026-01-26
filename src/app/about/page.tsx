import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
  AccordionGroup,
  Feedback,
  Card,
  Grid,
  SmartLink,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: "Introduction",
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column"}} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.locationDisplay || person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl" marginBottom="m">
              {person.name}
            </Heading>
            <Feedback
              variant="info"
              title={person.role}
              description=""
              marginBottom="l"
            />
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                      .filter((item) => item.essential)
                      .map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column fillWidth gap="m" marginBottom="xl">
              <Heading as="h2" variant="display-strong-s" marginBottom="m">
                About Me
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
                {about.intro.description}
              </Text>
            </Column>
          )}

          {about.work.display && (
            <Column fillWidth gap="l" marginBottom="xl">
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <AccordionGroup
                items={about.work.experiences.map((experience) => ({
                  title: `${experience.company} • ${experience.timeframe}`,
                  content: (
                    <Column gap="s" paddingLeft="8">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            key={`${experience.company}-${index}`}
                            variant="body-default-m"
                            onBackground="neutral-medium"
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                  ),
                }))}
              />
            </Column>
          )}

          {about.studies.display && (
            <Column fillWidth gap="l" marginBottom="xl">
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Grid columns="2" gap="l" s={{ columns: "1" }}>
                {about.studies.institutions.map((institution, index) => (
                  <Card
                    key={`${institution.name}-${index}`}
                    padding="l"
                    radius="l"
                    border="neutral-alpha-medium"
                  >
                    <Column gap="m">
                      <Icon name="book" onBackground="accent-medium" />
                      <Text id={institution.name} variant="heading-strong-s">
                        {institution.name}
                      </Text>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {institution.description}
                      </Text>
                    </Column>
                  </Card>
                ))}
              </Grid>
            </Column>
          )}

          {about.technical.display && (
            <Column fillWidth gap="l" marginBottom="xl">
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.technical.title}
              </Heading>
              <Row gap="l" fillWidth wrap>
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} flex={1} minWidth={280} gap="m" style={{ minWidth: 0, maxWidth: "100%" }}>
                    <Row gap="s" vertical="center">
                      <Icon
                        name={index === 0 ? "document" : "rocket"}
                        onBackground="accent-medium"
                      />
                      <Text id={skill.title} variant="heading-strong-s">
                        {skill.title}
                      </Text>
                    </Row>
                    <Text variant="body-default-m" onBackground="neutral-medium" wrap="balance" style={{ wordBreak: "break-word", overflowWrap: "break-word" }}>
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="s" paddingTop="s">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="s" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Row>
            </Column>
          )}

          {/* What's Next Section */}
          <Column fillWidth gap="m" marginTop="xl" paddingTop="xl">
            <Heading as="h2" variant="display-strong-s" marginBottom="m">
              What's Next
            </Heading>
            <Feedback
              variant="info"
              description="I'm exploring ways to make AI education more accessible, build tools that solve real problems, and help businesses understand what AI can actually do for them. Always learning, always curious."
              marginBottom="l"
            />
            <Row gap="s" horizontal="center" wrap>
              <SmartLink href="mailto:neeth35@gmail.com" prefixIcon="email">
                Get in touch
              </SmartLink>
              <SmartLink href="https://linkedin.com/in/neethj" prefixIcon="linkedin">
                Connect on LinkedIn
              </SmartLink>
            </Row>
          </Column>
        </Column>
      </Row>
    </Column>
  );
}