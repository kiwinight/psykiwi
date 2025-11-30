/**
 * Custom Button Override
 *
 * This extends the shadcn Button with additional features:
 * - Loading state with spinner
 * - Disabled state during loading
 *
 * The original shadcn button is preserved in shadcn-ui/button.tsx
 */

import * as React from "react";
import { Loader2 } from "lucide-react";
import { Button as ShadcnButton, buttonVariants } from "../shadcn-ui/button";
import { cn } from "~/libs/utils";
import type { VariantProps } from "class-variance-authority";

// Re-export buttonVariants unchanged
export { buttonVariants };

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

function Button({
  children,
  loading = false,
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <ShadcnButton
      disabled={loading || disabled}
      className={cn(loading && "cursor-wait", className)}
      {...props}
    >
      {loading && <Loader2 className="animate-spin" />}
      {children}
    </ShadcnButton>
  );
}

export { Button };
