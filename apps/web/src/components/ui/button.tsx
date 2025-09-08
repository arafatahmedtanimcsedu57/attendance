import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "outline" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export default function Button({ className, variant = "default", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring disabled:opacity-50";
  const variants: Record<Variant, string> = {
    default: "bg-black text-white hover:opacity-90",
    outline: "border border-gray-300 hover:bg-gray-50",
    ghost: "hover:bg-gray-100"
  };
  return <button className={cn(base, variants[variant], className)} {...props} />;
}
