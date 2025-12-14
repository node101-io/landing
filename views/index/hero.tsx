import { Header } from "../partials/header";

export const Hero = () => (
  <div
    class={`
      m-(--hero-margin)
      flex
      h-[calc(100vh-var(--banner-height)-var(--hero-margin-total))]
      flex-col
      overflow-hidden
      rounded-4xl
      bg-[url('/img/hero-background.webp')]
      bg-cover
      bg-center
      transition-all
      duration-300
      has-checked:m-0
      has-checked:rounded-none
      lg:has-checked:m-(--hero-margin)
      lg:has-checked:rounded-4xl
    `}
  >
    <Header />

    <section
      class={`
        flex
        flex-1
        flex-col
        items-center
        justify-center
        pt-32
        pb-40
        text-center
      `}
    >
      <div
        class={`
          hero-animate
          mb-8
          inline-flex
          items-center
          gap-2
          opacity-0
        `}
      >
        <img
          src="/img/hero-subtext-icon.svg"
          alt="Hero subtext icon"
          class={`
            h-10
            w-4
          `}
        />
        <span class="text-foreground">TÜRKİYE'NİN EN BÜYÜK VALİDATÖRÜ</span>
        <img
          src="/img/hero-subtext-icon.svg"
          alt="Hero subtext icon"
          class={`
            h-10
            w-4
            -scale-x-100
          `}
        />
      </div>

      <h1
        class={`
          hero-animate
          max-w-5xl
          font-display
          text-7xl
          leading-[1.1]
          font-bold
          text-foreground
          opacity-0
        `}
      >
        BLOKZİNCİRLERE ERİŞMEK
        <span
          class={`
            mt-2
            block
          `}
        >
          BİZİMLE MÜMKÜN
        </span>
      </h1>

      <p
        class={`
          text-muted-foreground
          hero-animate
          mt-8
          max-w-2xl
          leading-relaxed
          font-normal
          opacity-0
        `}
      >
        node101; validasyon, ürün geliştirme, danışmanlık ve kurumsal RPC
        çözümleriyle 2022'den beri Türkiye'nin en büyük blokzincir altyapı
        sağlayıcısı
      </p>
    </section>

    <div
      class={`
        mx-4
        mb-6
        flex
        items-center
        justify-between
      `}
    >
      <img
        src="/img/iso-badge.webp"
        alt="ISO 27001 Information Security Management"
        class="h-10"
      />
      <nav
        class={`
          flex
          items-center
          gap-6
          text-sm
          text-foreground
        `}
      >
        <a
          href="https://github.com/node101-io"
          class={`
            transition-colors
            hover:text-primary
          `}
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://x.com/node_101"
          class={`
            transition-colors
            hover:text-primary
          `}
          target="_blank"
        >
          X
        </a>
      </nav>
    </div>

    <script type="module" src="/js/hero-animation.js"></script>
  </div>
);
