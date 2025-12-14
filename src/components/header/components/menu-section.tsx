import { i18n } from "@/i18n";
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

  if (type === HeaderMenuSectionType.MULTI_GRID) {
    const { categories } = props;
    return (
      <section
        class={`
          h-full
          rounded-lg
          lg:min-w-[220px]
          lg:bg-surface
          lg:p-6
        `}
      >
        <h3
          class={`
            mb-4
            text-xs
            tracking-wider
            text-accent-muted
            uppercase
          `}
        >
          {title}
        </h3>
        <div
          class={`
            flex
            flex-col
            gap-4
            lg:flex-row
            lg:gap-0
          `}
        >
          {categories.map((category, catIndex) => (
            <>
              <div
                key={catIndex}
                class={`
                  ${category.columns === 2 ? "lg:flex-2" : "lg:flex-1"}
                  lg:px-5
                  first:lg:pl-0
                  last:lg:pr-0
                `}
              >
                <h4
                  class={`
                    mb-3
                    text-[10px]
                    font-medium
                    tracking-wider
                    text-muted
                    uppercase
                  `}
                >
                  {category.title}
                </h4>
                <div
                  class={`
                    flex
                    flex-wrap
                    gap-1.5
                    lg:grid
                    lg:gap-2
                    ${
                      category.columns === 2
                        ? "lg:grid-cols-2"
                        : `lg:grid-cols-1`
                    }
                  `}
                >
                  {category.items.map((item, index) => (
                    <HeaderMenuGridItem key={index} {...item} />
                  ))}
                </div>
              </div>
              {catIndex < categories.length - 1 && (
                <div
                  class={`
                    hidden
                    w-px
                    self-stretch
                    bg-linear-to-b
                    from-transparent
                    via-muted/30
                    to-transparent
                    lg:block
                  `}
                />
              )}
            </>
          ))}
        </div>
        <a
          href=""
          class={`
            mt-4
            block
            text-right
            text-[10px]
            font-medium
            text-footnote
          `}
        >
          {i18n().common.viewAllProtocols}
        </a>
        {footnote && (
          <p
            class={`
              mt-3
              text-[10px]
              text-footnote
            `}
          >
            {footnote}
          </p>
        )}
      </section>
    );
  }

  const additionalGroups =
    type === HeaderMenuSectionType.LIST ? props.additionalGroups : undefined;

  return (
    <section
      class={`
        h-full
        rounded-lg
        lg:min-w-[220px]
        lg:bg-surface
        lg:p-6
      `}
    >
      <h3
        class={`
          mb-2
          text-xs
          tracking-wider
          text-accent-muted
          uppercase
        `}
      >
        {title}
      </h3>
      {type === HeaderMenuSectionType.LIST && props.items.length > 0 && (
        <div
          class={`
            flex
            flex-col
          `}
        >
          {props.items.map((item, index) => (
            <div
              key={index}
              class={`
                py-1
                ${
                  index < props.items.length - 1
                    ? `
                      border-b
                      border-separator
                    `
                    : ""
                }
              `}
            >
              <HeaderMenuSectionItem {...item} />
            </div>
          ))}
        </div>
      )}
      {additionalGroups &&
        additionalGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h3
              class={`
                mt-4
                mb-2
                text-xs
                tracking-wider
                text-accent-muted
                uppercase
              `}
            >
              {group.title}
            </h3>
            {group.items.length > 0 && (
              <div
                class={`
                  flex
                  flex-col
                `}
              >
                {group.items.map((item, index) => (
                  <div
                    key={index}
                    class={`
                      py-1
                      ${
                        index < group.items.length - 1
                          ? `
                            border-b
                            border-separator
                          `
                          : ""
                      }
                    `}
                  >
                    <HeaderMenuSectionItem {...item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      {type === HeaderMenuSectionType.GRID && props.items.length > 0 && (
        <>
          <div
            class={`
              flex
              w-full
              flex-wrap
              gap-1.5
              py-2
              lg:grid
              lg:grid-cols-2
              lg:gap-2
            `}
          >
            {props.items.map((item, index) => (
              <HeaderMenuGridItem key={index} {...item} />
            ))}
          </div>
          <a
            href=""
            class={`
              mt-2
              block
              text-right
              text-[10px]
              font-medium
              text-footnote
            `}
          >
            {i18n().common.viewAllProtocols}
          </a>
        </>
      )}
      {footnote && (
        <p
          class={`
            mt-3
            text-[10px]
            text-footnote
          `}
        >
          {footnote}
        </p>
      )}
    </section>
  );
};
