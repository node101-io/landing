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
    class="flex items-center gap-2 p-1.5 pr-3 rounded-full border border-separator bg-background lg:hover:border-muted transition-colors group min-w-0 w-full"
  >
    <img
      src={icon}
      alt={`${name} icon`}
      class="size-5.5 rounded-full shrink-0"
    />
    <span class="text-sm font-medium text-foreground flex-1 truncate min-w-0">
      {name}
    </span>
    <span class="text-xs text-muted font-medium shrink-0">{symbol}</span>
  </a>
);
