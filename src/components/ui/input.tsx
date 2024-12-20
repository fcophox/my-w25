/* eslint-disable @typescript-eslint/no-empty-interface */
import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Comentarios soy un crack!
     * @example
     * ```
     * <Input type="email" placeholder="Email" rojo />
     * ```
     */
    rojo?: boolean 
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, rojo, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          rojo ? "bg-red-500" : "", // Aplica la clase bg-red-500 si rojo es true
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
