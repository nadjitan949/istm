import * as React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, children, ...props }, ref) => (
    <section
      ref={ref}
      className={["py-20", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </section>
  )
);
Section.displayName = "Section";

export interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  className?: string;
}

export const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ className, children, ...props }, ref) => (
    <h2
      ref={ref}
      className={[
        "text-3xl font-semibold tracking-tight text-istm-900 mb-8",
        className,
      ].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </h2>
  )
);
SectionTitle.displayName = "SectionTitle";

export interface SectionDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  className?: string;
}

export const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  SectionDescriptionProps
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={["text-lg text-istm-600 max-w-2xl", className]
      .filter(Boolean)
      .join(" ")}
    {...props}
  >
    {children}
  </p>
));
SectionDescription.displayName = "SectionDescription";