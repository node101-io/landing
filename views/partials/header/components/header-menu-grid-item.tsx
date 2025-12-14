export type GridItemProps = {
  icon: string;
  name: string;
  symbol: string;
  href: string;
};

/**
 * Grid item component
 * - Mobil: Sadece logo ikonu (rounded-lg köşeli kutular)
 * - Desktop: Pill şeklinde kripto coin görünümü (isim + symbol)
 */
export const HeaderMenuGridItem = ({
  icon,
  name,
  symbol,
  href,
}: GridItemProps) => (
  <a
    href={href}
    class={`
      group
      flex
      items-center
      gap-1
      rounded-xs
      transition-colors
      lg:gap-3
      lg:rounded-full
      lg:border
      lg:border-separator
      lg:bg-background
      lg:px-4
      lg:py-2.5
      lg:hover:border-muted
    `}
  >
    <img
      src={icon}
      alt={`${name} icon`}
      class={`
        size-7
        shrink-0
        rounded-xs
        lg:size-10
        lg:rounded-full
      `}
    />
    <span
      class={`
        hidden
        flex-1
        text-lg
        font-medium
        text-foreground
        lg:block
      `}
    >
      {name}
    </span>
    <span
      class={`
        hidden
        text-sm
        font-medium
        text-muted
        lg:block
      `}
    >
      {symbol}
    </span>
  </a>
);
