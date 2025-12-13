import type { Child } from "hono/jsx";

type HeaderMenuProps = {
  children: Child;
  class?: string;
};

/**
 * Header'daki her bir alt menü wrapper component'i
 */
export const HeaderMenu = ({ children, class: className }: HeaderMenuProps) => (
  <section
    class={`rounded-xl border border-[#FFFDFB] bg-[#B1B0AF] ${className ?? ""}`}
  >
    {children}
  </section>
);
