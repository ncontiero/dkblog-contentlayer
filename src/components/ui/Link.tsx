import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";
import { linkVariants } from "./link-variants";

export interface LinkProps
  extends ComponentProps<"a">, VariantProps<typeof linkVariants> {
  readonly asChild?: boolean;
}

export function Link({
  className,
  variant,
  size,
  radius,
  asChild = false,
  ...props
}: LinkProps) {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      className={cn(linkVariants({ variant, size, radius, className }))}
      {...props}
    />
  );
}
