import type { VariantProps } from "class-variance-authority";
import { type AnchorHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";
import { linkVariants } from "./link-variants";

export interface LinkProps
  extends
    AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  readonly asChild?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, radius, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        className={cn(linkVariants({ variant, size, radius, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Link.displayName = "Link";
