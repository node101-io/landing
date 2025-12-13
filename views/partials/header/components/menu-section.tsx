import {
  HeaderMenuSectionItem,
  type MenuSectionItemProps,
} from "./menu-section-item";

type HeaderMenuSectionProps = {
  title: string;
  items: MenuSectionItemProps[];
  footnote?: string;
  class?: string;
};

/**
 * Header'daki her bir alt menü için section wrapper component'i
 */
export const HeaderMenuSection = ({
  title,
  items,
  footnote,
  class: className,
}: HeaderMenuSectionProps) => (
  <section class={`rounded-xl bg-[#FFFDFB] p-3 min-w-[220px] ${className ?? ""}`}>
    <h3 class="text-xs font-semibold text-warm-gray/50 uppercase tracking-wider px-3 mb-2">
      {title}
    </h3>
    <div class="flex flex-col">
      {items.map((item, index) => (
        <HeaderMenuSectionItem key={index} {...item} />
      ))}
    </div>
    {footnote && (
      <p class="text-xs text-warm-gray/40 px-3 mt-3 pt-3 border-t border-warm-gray/10">
        {footnote}
      </p>
    )}
  </section>
);
