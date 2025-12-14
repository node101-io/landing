export type GridItemProps = {
  icon: string;
  name: string;
  symbol: string;
  href: string;
};

/**
 * Grid item component
 * - Mobil: Sadece logo ikonu (rounded-xl köşeli kutular)
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
    class="flex items-center gap-1 lg:gap-2 lg:p-1.5 lg:pr-3 rounded-xs lg:rounded-full lg:border lg:border-separator lg:bg-background lg:hover:border-muted transition-colors group min-w-0 lg:w-full"
  >
    <img
      src={icon}
      alt={`${name} icon`}
      class="size-7 lg:size-5.5 rounded-xs lg:rounded-full shrink-0"
    />
    <span class="hidden lg:block text-sm font-medium text-foreground flex-1 truncate min-w-0">
      {name}
    </span>
    <span class="hidden lg:block text-xs text-muted font-medium shrink-0">{symbol}</span>
  </a>
);
