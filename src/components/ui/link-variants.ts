import { cva } from "class-variance-authority";

export const linkVariants = cva(
  `
    inline-flex items-center justify-center font-medium underline-offset-4 ring-offset-background duration-200
    hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
    active:opacity-70
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
