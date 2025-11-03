// src/components/Icons.tsx
import * as React from "react";

type Props = React.SVGProps<SVGSVGElement> & { size?: number };

export function LinkedInIcon({ size = 16, ...props }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8.5h4.9v12H.5zM8 8.5h4.7v1.9h.1C13.9 9 15.5 8 17.8 8c4.4 0 5.2 2.9 5.2 6.7V20.5h-4.9v-5.6c0-1.3-.03-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H8z"/>
    </svg>
  );
}

export function GitHubIcon({ size = 16, ...props }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.8-.25.8-.57v-2c-3.27.71-3.96-1.58-3.96-1.58-.53-1.37-1.3-1.73-1.3-1.73-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.82 2.76 1.28 3.43.98.1-.76.41-1.29.74-1.58-2.59-.3-5.33-1.3-5.33-5.82 0-1.29.46-2.35 1.22-3.19-.12-.3-.52-1.48.12-3.08 0 0 .98-.32 3.23 1.2a11.2 11.2 0 0 1 5.9 0c2.25-1.52 3.23-1.2 3.23-1.2.64 1.6.24 2.78.12 3.08.76.84 1.22 1.9 1.22 3.19 0 4.53-2.74 5.52-5.36 5.81.42.36.79 1.08.79 2.19v3.25c0 .32.21.68.8.57A11.5 11.5 0 0 0 12 .5z"/>
    </svg>
  );
}

export function LinkIcon({ size = 16, ...props }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props} aria-hidden="true">
      <path d="M10 14a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07l-1.06 1.06" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 10a5 5 0 0 0-7.07 0L4.8 12.12a5 5 0 0 0 7.07 7.07l1.06-1.06" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
