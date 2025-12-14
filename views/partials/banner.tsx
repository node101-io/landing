const text =
  "node101, üzerindeki $40,000,000 aşan kripto varlık yatırımıyla 2022'den beri Türkiye'nin en büyük validatörü.";

export const Banner = () => {
  return (
    <div
      class={`
        flex
        h-10
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
          `}
        >
          <span class="pr-16">{text}</span>
          <span class="pr-16">{text}</span>
        </div>
      </div>
    </div>
  );
};
