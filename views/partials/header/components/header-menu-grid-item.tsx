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
    class="flex items-center gap-1 lg:gap-3 lg:px-4 lg:py-2.5 rounded-xs lg:rounded-full lg:border lg:border-separator lg:bg-background lg:hover:border-muted transition-colors group"
  >
    <img
      src={icon}
      alt={`${name} icon`}
      class="size-7 lg:size-10 rounded-xs lg:rounded-full shrink-0"
    />
    <span class="hidden lg:block text-lg font-medium text-foreground flex-1">{name}</span>
    <span class="hidden lg:block text-sm text-muted font-medium">{symbol}</span>
  </a>
);
