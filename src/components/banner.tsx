import { i18n } from "@/i18n";

export const Banner = () => {
  const text = i18n().banner.text;
  return (
    <a
      href="#"
      class={`
        flex
        h-(--banner-height)
        w-full
        items-center
        overflow-hidden
        bg-primary
        text-sm
        text-primary-foreground
        no-underline
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
            flex
            animate-marquee
            text-xs
            will-change-transform
            md:animate-none
          `}
        >
          <span class="pr-16">{text}</span>
          <span class="pr-16">{text}</span>
          <span class="pr-16">{text}</span>
          <span class="pr-16">{text}</span>
        </div>
      </div>
    </a>
  );
};
