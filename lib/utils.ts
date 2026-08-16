import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function withBasePath(path: string) {
  if (!path) return path

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("#")
  ) {
    return path
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  const basePath = process.env.NODE_ENV === "production" ? "/my-portfolio" : ""

  if (!basePath || normalizedPath.startsWith(`${basePath}/`)) {
    return normalizedPath
  }

  return `${basePath}${normalizedPath}`
}
