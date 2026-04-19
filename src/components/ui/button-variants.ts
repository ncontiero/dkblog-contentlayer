import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  `
    inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background duration-200
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none
    disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring dark:hover:bg-primary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80 focus-visible:ring-destructive",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring",
        outlinePrimary:
          "border border-primary bg-background hover:bg-primary hover:text-primary-foreground focus-visible:ring-ring",
        secondary: `
          bg-secondary text-secondary-foreground hover:bg-secondary/60 focus-visible:ring-ring
          dark:hover:bg-secondary/80
        `,
        ghost:
          "hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
