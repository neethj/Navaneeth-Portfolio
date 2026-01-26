"use client";

import { mailchimp, newsletter } from "@/resources";
import { Button, Heading, Input, Text, Background, Column, Row } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState, useEffect } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      return true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const debouncedHandleChange = debounce(handleChange, 2000);

  const handleBlur = () => {
    setTouched(true);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  };

  useEffect(() => {
    // Load Mailchimp validation script
    const existingScript = document.querySelector('script[src*="mc-validate.js"]');
    if (existingScript) {
      return; // Script already loaded
    }

    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.async = true;
    document.body.appendChild(script);

    // Set up Mailchimp field names (required by validation script)
    if (typeof window !== "undefined") {
      (window as any).fnames = new Array();
      (window as any).ftypes = new Array();
      (window as any).fnames[0] = "EMAIL";
      (window as any).ftypes[0] = "email";
      (window as any).fnames[1] = "FNAME";
      (window as any).ftypes[1] = "text";
      (window as any).fnames[2] = "LNAME";
      (window as any).ftypes[2] = "text";
    }

    // Monitor for Mailchimp response messages
    const checkResponses = setInterval(() => {
      const errorResponse = document.getElementById("mce-error-response");
      const successResponse = document.getElementById("mce-success-response");
      
      if (errorResponse && errorResponse.style.display !== "none" && errorResponse.textContent) {
        const errorText = errorResponse.textContent.trim();
        if (errorText) {
          setError(errorText);
          setSubmitting(false);
        }
      }
      if (successResponse && successResponse.style.display !== "none" && successResponse.textContent) {
        const successText = successResponse.textContent.trim();
        if (successText) {
          setEmail("");
          setError("");
          setSubmitting(false);
        }
      }
    }, 500);

    return () => {
      clearInterval(checkResponses);
    };
  }, []);

  if (newsletter.display === false) return null;

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />
      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs">
          {newsletter.title}
        </Heading>
        <Text wrap="balance" marginBottom="l" variant="body-default-l" onBackground="neutral-weak">
          {newsletter.description}
        </Text>
      </Column>
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        action={mailchimp.action}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        onSubmit={(e) => {
          if (!validateEmail(email)) {
            e.preventDefault();
            setError("Please enter a valid email address.");
            return;
          }
          setSubmitting(true);
          setError("");
          // Form will submit via Mailchimp's AJAX handler
        }}
      >
        <Row
          id="mc_embed_signup_scroll"
          fillWidth
          maxWidth={24}
          s={{ direction: "column" }}
          gap="8"
        >
          <Input
            id="mce-EMAIL"
            name="EMAIL"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => {
              const value = e.target.value;
              setEmail(value);
              if (error) {
                handleChange(e);
              } else {
                debouncedHandleChange(e);
              }
            }}
            onBlur={handleBlur}
            errorMessage={error}
          />
          <div id="mce-responses" className="clear foot">
            <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
            <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
          </div>
          <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
            <input
              type="text"
              readOnly
              name="b_eaeb998e18672051e99b8e629_6e06b2b9c7"
              tabIndex={-1}
              value=""
            />
          </div>
          <div className="clear">
            <Row height="48" vertical="center">
              <Button 
                id="mc-embedded-subscribe" 
                type="submit"
                value="Subscribe" 
                size="m" 
                fillWidth
                loading={submitting}
                disabled={submitting || !email || !!error}
              >
                {submitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </Row>
          </div>
        </Row>
      </form>
    </Column>
  );
};
