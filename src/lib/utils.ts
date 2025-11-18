import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getLastCommitDate() : Promise<string | null> {
  const res = await fetch('https://api.github.com/repos/alexandrebrgn/portfolio_dev/commits?per_page=1')
  if (!res.ok) return null;

  const commits = await res.json()
  const lastCommit = commits[0]

  return lastCommit?.commit?.author?.date?? null
}
