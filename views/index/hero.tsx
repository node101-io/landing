import { Header } from "../partials/header";

export const Hero = () => (
  <div class="h-[calc(100vh-var(--banner-height)-var(--hero-margin-total))] overflow-hidden flex flex-col bg-[url('/img/hero-background.png')] bg-cover bg-center m-(--hero-margin) rounded-4xl p-4 pb-6">
    <Header />

    <section class="flex-1 flex flex-col items-center justify-center text-center pt-32 pb-40">
      <div class="inline-flex items-center gap-2 mb-8 hero-animate opacity-0">
        <img
          src="/img/hero-subtext-icon.svg"
          alt="Hero subtext icon"
          class="w-4 h-10"
        />
        <span class="text-foreground">TÜRKİYE'NİN EN BÜYÜK VALİDATÖRÜ</span>
        <img
          src="/img/hero-subtext-icon.svg"
          alt="Hero subtext icon"
          class="w-4 h-10 -scale-x-100"
        />
      </div>

      <h1 class="text-7xl font-display font-bold text-foreground max-w-5xl leading-[1.1] hero-animate opacity-0">
        BLOKZİNCİRLERE ERİŞMEK
        <span class="block mt-2">BİZİMLE MÜMKÜN</span>
      </h1>

      <p class="mt-8 text-muted-foreground max-w-2xl leading-relaxed hero-animate opacity-0 font-normal">
        node101; validasyon, ürün geliştirme, danışmanlık ve kurumsal RPC
        çözümleriyle 2022'den beri Türkiye'nin en büyük blokzincir altyapı
        sağlayıcısı
      </p>
    </section>

    <div class="flex items-center justify-between">
      <img
        src="/img/iso-badge.png"
        alt="ISO 27001 Information Security Management"
        class="h-10"
      />
      <nav class="flex items-center gap-6 text-sm text-foreground">
        <a
          href="https://github.com/node101-io"
          class="hover:text-primary transition-colors"
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://x.com/node_101"
          class="hover:text-primary transition-colors"
          target="_blank"
        >
          X
        </a>
      </nav>
    </div>

    <script type="module" src="/js/hero-animation.js"></script>
  </div>
);
