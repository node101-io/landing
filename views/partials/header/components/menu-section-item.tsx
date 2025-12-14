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
  <div
    class={`
      flex
      flex-col
    `}
  >
    <a
      href={href}
      class={`
        group/item
        flex
        items-start
        gap-2
        py-2.5
        transition-colors
      `}
    >
      <span
        class={`
          mt-0.5
          flex
          size-9
          shrink-0
          items-center
          justify-center
          rounded-[4px]
          bg-primary
          text-muted
          transition-colors
          lg:group-hover/item:text-foreground
        `}
      >
        {icon}
      </span>
      <div
        class={`
          flex
          flex-col
          gap-0.5
        `}
      >
        <span
          class={`
            text-sm
            font-medium
            text-foreground
          `}
        >
          {label}
        </span>
        <span
          class={`
            text-xs
            leading-relaxed
            text-footnote
          `}
        >
          {description}
        </span>
      </div>
    </a>
    {subItems && subItems.length > 0 && (
      <div
        class={`
          ml-4
          flex
          flex-col
          gap-1
          border-l
          border-separator
          pb-2
          pl-2
        `}
      >
        {subItems.map((subItem, index) => (
          <a
            key={index}
            href={subItem.href}
            class={`
              flex
              flex-col
              py-1
              transition-colors
              lg:hover:text-foreground
            `}
          >
            <span
              class={`
                text-xs
                font-medium
                text-foreground
              `}
            >
              {subItem.label}
            </span>
            {subItem.description && (
              <span
                class={`
                  text-[11px]
                  leading-relaxed
                  text-footnote
                `}
              >
                {subItem.description}
              </span>
            )}
          </a>
        ))}
      </div>
    )}
  </div>
);
