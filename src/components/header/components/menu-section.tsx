import { i18n } from "@/i18n";
import type { Child } from "hono/jsx";
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
  hideOnMobile?: boolean;
};

export type ListGroup = {
  title: string;
  items: MenuSectionItemProps[];
};

export type HeaderMenuSectionProps = {
  title: string;
  footnote?: string;
  hideOnMobile?: boolean;
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
 * Component Wrapper
 */
const MenuSectionWrapper = (props: {
  children: Child;
  className?: string;
  hideOnMobile?: boolean;
}) => (
  <section
    class={`
      h-full
      rounded-lg
      lg:min-w-[220px]
      lg:bg-surface
      lg:p-6
      ${props.className || ""}
      ${
        props.hideOnMobile
          ? `
            hidden
            lg:block
          `
          : ""
      }
    `}
  >
    {props.children}
  </section>
);

/**
 * Section Title
 */
const MenuSectionTitle = (props: { title: string; className?: string }) => (
  <h3
    class={`
      mb-2
      text-xs
      tracking-wider
      text-accent-muted
      uppercase
      lg:mb-4
      ${props.className || ""}
    `}
  >
    {props.title}
  </h3>
);

/**
 * View All Link
 */
const ViewAllLink = () => (
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
);

/**
 * Footnote
 */
const Footnote = (props: { text: string }) => (
  <p
    class={`
      mt-3
      text-[10px]
      text-footnote
    `}
  >
    {props.text}
  </p>
);

/**
 * Menu List Implementation
 */
const MenuList = (props: { items: MenuSectionItemProps[] }) => {
  if (props.items.length === 0) return null;
  return (
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
  );
};

/**
 * Menu Grid Implementation
 */
const MenuGrid = (props: {
  items: GridItemProps[];
  columns?: 1 | 2;
  mobileHidden?: boolean;
}) => {
  if (props.items.length === 0) return null;
  return (
    <div
      class={`
        flex
        h-[calc(var(--icon-size-mobile))]
        max-h-[calc(var(--icon-size-mobile))]
        w-full
        flex-wrap
        gap-1.5
        overflow-hidden
        lg:grid
        lg:h-auto
        lg:max-h-none
        lg:gap-2
        lg:overflow-visible
        ${props.columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-1"}
        ${
          props.mobileHidden
            ? `
              hidden
              lg:grid
            `
            : ""
        }
      `}
    >
      {props.items.map((item, index) => (
        <HeaderMenuGridItem key={index} {...item} />
      ))}
    </div>
  );
};

export const HeaderMenuSection = (props: HeaderMenuSectionProps) => {
  const { type, title, footnote } = props;

  // Handle MULTI_GRID
  if (type === HeaderMenuSectionType.MULTI_GRID) {
    const { categories } = props;
    return (
      <MenuSectionWrapper hideOnMobile={props.hideOnMobile}>
        <MenuSectionTitle title={title} />
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
                  ${
                    category.hideOnMobile
                      ? `
                        hidden
                        lg:block
                      `
                      : ""
                  }
                  ${category.columns === 2 ? "lg:flex-2" : "lg:flex-1"}
                  lg:px-5
                  first:lg:pl-0
                  last:lg:pr-0
                `}
              >
                <MenuSectionTitle
                  title={category.title}
                  className={`
                    mb-3
                    text-[10px]
                    font-medium
                    text-muted
                  `}
                />
                <MenuGrid
                  items={category.items}
                  columns={category.columns}
                  mobileHidden={false} // Handled by parent div for category
                />
              </div>
              {catIndex < categories.length - 1 && (
                <div
                  class={`
                    ${
                      category.hideOnMobile
                        ? `
                          hidden
                          lg:block
                        `
                        : "hidden"
                    }
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
        <ViewAllLink />
        {footnote && <Footnote text={footnote} />}
      </MenuSectionWrapper>
    );
  }

  // Handle LIST and GRID
  const additionalGroups =
    type === HeaderMenuSectionType.LIST ? props.additionalGroups : undefined;

  return (
    <MenuSectionWrapper hideOnMobile={props.hideOnMobile}>
      <MenuSectionTitle title={title} className="mb-2" />

      {type === HeaderMenuSectionType.LIST && (
        <>
          <MenuList items={props.items} />
          {additionalGroups?.map((group, idx) => (
            <div key={idx}>
              <MenuSectionTitle
                title={group.title}
                className={`
                  mt-4
                  mb-2
                `}
              />
              <MenuList items={group.items} />
            </div>
          ))}
        </>
      )}

      {type === HeaderMenuSectionType.GRID && (
        <>
          <MenuGrid items={props.items} columns={2} />
          <ViewAllLink />
        </>
      )}

      {footnote && <Footnote text={footnote} />}
    </MenuSectionWrapper>
  );
};
