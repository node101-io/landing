import type { Child } from "hono/jsx";

type HeaderMenuProps = {
  children: Child;
};

/**
 * Header'daki her bir alt menü wrapper component'i
 */
export const HeaderMenu = ({ children }: HeaderMenuProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  const sectionCount = childrenArray.length;

  return (
    <section
      class={`
        flex
        max-h-0
        w-full
        flex-col
        gap-4
        overflow-hidden
        opacity-0
        transition-all
        duration-300
        ease-out
        will-change-[opacity,transform]
        group-focus-within:max-h-[200dvh]
        group-focus-within:opacity-100
        lg:invisible
        lg:absolute
        lg:top-full
        lg:right-[2.5%]
        lg:left-[2.5%]
        lg:z-50
        lg:mt-3
        lg:grid
        lg:max-h-none
        lg:w-auto
        lg:translate-y-[-8px]
        lg:grid-cols-3
        lg:gap-1.5
        lg:overflow-visible
        lg:rounded-xl
        lg:border
        lg:border-surface
        lg:bg-[#FDF8F2]/40
        lg:p-2.5
        lg:px-2
        lg:shadow-lg
        lg:backdrop-blur-sm
        lg:group-focus-within:visible
        lg:group-focus-within:translate-y-0
        lg:group-focus-within:overflow-visible
      `}
      onmousedown="event.preventDefault()"
    >
      {childrenArray.map((child, index) => {
        const colSpan =
          sectionCount === 2 && index === 0 ? "lg:col-span-2" : "";

        return (
          <div key={index} class={colSpan}>
            {child}
          </div>
        );
      })}
    </section>
  );
};
