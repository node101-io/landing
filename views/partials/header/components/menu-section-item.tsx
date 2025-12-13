import type { Child } from "hono/jsx";

export type SubItemProps = {
  label: string;
  description?: string;
  href: string;
};

export type MenuSectionItemProps = {
  icon: Child;
  label: string;
  description: string;
  href: string;
  subItems?: SubItemProps[];
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
  subItems,
}: MenuSectionItemProps) => (
  <div class="flex flex-col">
    <a
      href={href}
      class="flex items-start gap-2 py-2.5 transition-colors group/item"
    >
      <span class="shrink-0 size-9 bg-primary rounded-[4px] flex items-center justify-center mt-0.5 text-muted lg:group-hover/item:text-foreground transition-colors">
        {icon}
      </span>
      <div class="flex flex-col gap-0.5">
        <span class="text-sm font-medium text-foreground">{label}</span>
        <span class="text-xs text-footnote leading-relaxed">{description}</span>
      </div>
    </a>
    {subItems && subItems.length > 0 && (
      <div class="ml-4 pl-2 border-l border-separator flex flex-col gap-1 pb-2">
        {subItems.map((subItem, index) => (
          <a
            key={index}
            href={subItem.href}
            class="flex flex-col py-1 transition-colors lg:hover:text-foreground"
          >
            <span class="text-xs font-medium text-foreground">
              {subItem.label}
            </span>
            {subItem.description && (
              <span class="text-[11px] text-footnote leading-relaxed">
                {subItem.description}
              </span>
            )}
          </a>
        ))}
      </div>
    )}
  </div>
);
