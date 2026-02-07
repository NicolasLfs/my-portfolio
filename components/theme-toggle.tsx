"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Toggle } from "@/components/ui/toggle"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  const handlePressedChange = (pressed: boolean) => {
    setTheme(pressed ? "dark" : "light")
  }

  if (!mounted) {
    return (
      <Toggle
        aria-label="Theme dark"
        className={cn("px-2", className)}
        disabled
      >
        <Sun className="size-4" />
      </Toggle>
    )
  }

  return (
    <Toggle
      aria-label={`Theme (${isDark ? "dark" : "light"})`}
      pressed={isDark}
      onPressedChange={handlePressedChange}
      className={cn("px-2", className)}
    >
      {isDark ? (
        <Moon className="size-4" aria-hidden />
      ) : (
        <Sun className="size-4" aria-hidden />
      )}
    </Toggle>
  )
}
