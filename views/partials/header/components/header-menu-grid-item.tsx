export type GridItemProps = {
  icon: string;
  name: string;
  symbol: string;
  href: string;
};

/**
 * Grid item component - pill şeklinde kripto coin görünümü
 */
export const HeaderMenuGridItem = ({
  icon,
  name,
  symbol,
  href,
}: GridItemProps) => (
  <a
    href={href}
    class="flex items-center gap-3 px-4 py-2.5 rounded-full border border-separator bg-background lg:hover:border-muted transition-colors group"
  >
    <img
      src={icon}
      alt={`${name} icon`}
      class="size-10 rounded-full shrink-0"
    />
    <span class="text-lg font-medium text-foreground flex-1">{name}</span>
    <span class="text-sm text-muted font-medium">{symbol}</span>
  </a>
);
