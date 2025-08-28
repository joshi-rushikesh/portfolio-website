import { ReactNode } from "react";

export default function Section({
  id,
  title,
  className = "",
  children,
}: {
  id: string;
  title?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4">
        {title && (
          <h2 className="mb-8 text-3xl font-semibold tracking-tight">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
