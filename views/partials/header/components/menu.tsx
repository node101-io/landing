import type { Child } from "hono/jsx";

type HeaderMenuProps = {
  children: Child;
};

/**
 * Header'daki her bir alt menü wrapper component'i
 */
export const HeaderMenu = ({ children }: HeaderMenuProps) => {
  // Children'ı array olarak kontrol et
  const childrenArray = Array.isArray(children) ? children : [children];
  const sectionCount = childrenArray.length;

  return (
    <section
      class="
        w-full max-h-0 overflow-hidden opacity-0
        transition-all duration-300 ease-out
        group-focus-within:max-h-[80vh] group-focus-within:opacity-100 group-focus-within:overflow-y-auto
        flex flex-col gap-4 lg:px-2
        lg:absolute lg:top-full lg:left-[2.5%] lg:right-[2.5%] lg:w-auto
        lg:mt-3 lg:p-2.5 lg:shadow-lg lg:max-h-none lg:overflow-visible
        lg:invisible lg:translate-y-[-8px]
        lg:group-focus-within:visible lg:group-focus-within:translate-y-0 lg:group-focus-within:overflow-visible
        lg:z-50 lg:grid lg:grid-cols-3 lg:gap-1.5 lg:rounded-xl
        lg:border lg:border-surface lg:bg-[#FDF8F2]/40 lg:backdrop-blur-sm
      "
      onmousedown="event.preventDefault()"
    >
      {childrenArray.map((child, index) => {
        // Eğer 2 section varsa, ilki 2 sütun, ikincisi 1 sütun kaplasın (sadece desktop)
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
