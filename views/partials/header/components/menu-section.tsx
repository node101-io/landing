import {
  HeaderMenuSectionItem,
  type MenuSectionItemProps,
} from "./menu-section-item";
import {
  HeaderMenuGridItem,
  type GridItemProps,
} from "./menu-section-grid-item";

export { type GridItemProps };

export enum HeaderMenuSectionType {
  LIST = "list",
  GRID = "grid",
  MULTI_GRID = "multi_grid",
}

export type GridCategory = {
  title: string;
  columns: 1 | 2;
  items: GridItemProps[];
};

export type ListGroup = {
  title: string;
  items: MenuSectionItemProps[];
};

export type HeaderMenuSectionProps = {
  title: string;
  footnote?: string;
} & (
  | {
      type: HeaderMenuSectionType.LIST;
      items: MenuSectionItemProps[];
      additionalGroups?: ListGroup[];
    }
  | {
      type: HeaderMenuSectionType.GRID;
      items: GridItemProps[];
    }
  | {
      type: HeaderMenuSectionType.MULTI_GRID;
      categories: GridCategory[];
    }
);

/**
 * Header'daki her bir alt menü için section wrapper component'i
 */
export const HeaderMenuSection = (props: HeaderMenuSectionProps) => {
  const { type, title, footnote } = props;

  // MULTI_GRID için özel layout
  if (type === HeaderMenuSectionType.MULTI_GRID) {
    const { categories } = props;
    return (
      <section class="rounded-lg lg:bg-surface lg:p-6 lg:min-w-[220px] h-full">
        <h3 class="text-xs text-accent-muted uppercase tracking-wider mb-4">
          {title}
        </h3>
        <div class="flex flex-col gap-4 lg:flex-row lg:gap-0">
          {categories.map((category, catIndex) => (
            <>
              <div
                key={catIndex}
                class={`${category.columns === 2 ? "lg:flex-2" : "lg:flex-1"} lg:px-5 first:lg:pl-0 last:lg:pr-0`}
              >
                <h4 class="text-[10px] text-muted uppercase tracking-wider mb-3 font-medium">
                  {category.title}
                </h4>
                <div
                  class={`grid gap-2 ${category.columns === 2 ? "grid-cols-2" : "grid-cols-1"}`}
                >
                  {category.items.map((item, index) => (
                    <HeaderMenuGridItem key={index} {...item} />
                  ))}
                </div>
              </div>
              {catIndex < categories.length - 1 && (
                <div class="hidden lg:block w-px self-stretch bg-linear-to-b from-transparent via-muted/30 to-transparent" />
              )}
            </>
          ))}
        </div>
        <a
          href=""
          class="text-[10px] font-medium text-footnote mt-4 block text-right"
        >
          Tüm Protokolleri Gör
        </a>
        {footnote && <p class="text-[10px] text-footnote mt-3">{footnote}</p>}
      </section>
    );
  }

  const items = props.items;

  // LIST type için additionalGroups kontrolü
  const additionalGroups =
    type === HeaderMenuSectionType.LIST ? props.additionalGroups : undefined;

  return (
    <section class="rounded-lg lg:bg-surface lg:p-6 lg:min-w-[220px] h-full">
      <h3 class="text-xs text-accent-muted uppercase tracking-wider mb-2">
        {title}
      </h3>
      {type === HeaderMenuSectionType.LIST && items.length > 0 && (
        <div class="flex flex-col">
          {(items as MenuSectionItemProps[]).map((item, index) => (
            <div
              key={index}
              class={
                index < items.length - 1 ? "border-b border-separator" : ""
              }
            >
              <HeaderMenuSectionItem {...item} />
            </div>
          ))}
        </div>
      )}
      {additionalGroups &&
        additionalGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h3 class="text-xs text-accent-muted uppercase tracking-wider mb-2 mt-4">
              {group.title}
            </h3>
            {group.items.length > 0 && (
              <div class="flex flex-col">
                {group.items.map((item, index) => (
                  <div
                    key={index}
                    class={
                      index < group.items.length - 1
                        ? "border-b border-separator"
                        : ""
                    }
                  >
                    <HeaderMenuSectionItem {...item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      {type === HeaderMenuSectionType.GRID && items.length > 0 && (
        <>
          <div class="flex flex-wrap gap-1.5 lg:grid lg:grid-cols-2 lg:gap-2 w-full py-2">
            {(items as GridItemProps[]).map((item, index) => (
              <HeaderMenuGridItem key={index} {...item} />
            ))}
          </div>
          <a href="" class="text-[10px] font-medium text-footnote mt-2">
            Tüm Protokolleri Gör
          </a>
        </>
      )}
      {footnote && <p class="text-[10px] text-footnote mt-3">{footnote}</p>}
    </section>
  );
};
