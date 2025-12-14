import { t } from "../../src/i18n";

export const Banner = () => {
  const text = t("banner.text");
  return (
    <div
      class={`
        flex
        h-(--banner-height)
        w-full
        items-center
        overflow-hidden
        bg-primary
        text-sm
        text-primary-foreground
      `}
    >
      {/* Desktop: centered text */}
      <div
        class={`
          hidden
          w-full
          justify-center
          text-xs
          md:flex
        `}
      >
        {text}
      </div>

      {/* Mobile: marquee */}
      <div
        class={`
          flex
          whitespace-nowrap
          md:hidden
        `}
      >
        <div
          class={`
            animate-marquee
            flex
            text-xs
          `}
        >
          <span class="pr-16">{text}</span>
          <span class="pr-16">{text}</span>
          <span class="pr-16">{text}</span>
          <span class="pr-16">{text}</span>
        </div>
      </div>
    </div>
  );
};
