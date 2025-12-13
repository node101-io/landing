import type { Child } from "hono/jsx";

export type MenuSectionItemProps = {
  icon: Child;
  label: string;
  description: string;
  href: string;
};

/**
 * Header menü section içindeki her bir item
 * Sol tarafta icon, sağ tarafta başlık ve açıklama
 */
export const HeaderMenuSectionItem = ({
  icon,
  label,
  description,
  href,
}: MenuSectionItemProps) => (
  <a
    href={href}
    class="flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-cream group/item"
  >
    <span class="shrink-0 w-5 h-5 mt-0.5 text-warm-gray/70 group-hover/item:text-warm-gray transition-colors">
      {icon}
    </span>
    <div class="flex flex-col gap-0.5">
      <span class="text-sm font-medium text-warm-gray">{label}</span>
      <span class="text-xs text-warm-gray/60 leading-relaxed">
        {description}
      </span>
    </div>
  </a>
);
