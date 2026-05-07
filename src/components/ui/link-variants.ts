import { cva } from "class-variance-authority";

export const linkVariants = cva(
  `
    ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center font-medium
    underline-offset-4 duration-200 hover:underline focus-visible:ring-2 focus-visible:ring-offset-2
    focus-visible:outline-hidden active:opacity-70
  `,
  {
    variants: {
      variant: {
        default: "text-primary",
        destructive:
          "text-destructive hover:text-destructive/90 focus-visible:ring-destructive",
      },
      size: {
        sm: "text-sm",
        default: "text-base",
        lg: "text-lg",
      },
      radius: {
        sm: "rounded-sm",
        default: "rounded-md",
        full: "rounded-full",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  },
);
