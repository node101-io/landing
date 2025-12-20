import { i18n } from "@/i18n";

const chains = [
  { name: "Cosmos", logo: "/img/networks/cosmos.webp" },
  { name: "Celestia", logo: "/img/networks/celestia.webp" },
  { name: "Sui", logo: "/img/networks/sui.webp" },
  { name: "Ethereum", logo: "/img/networks/ethereum.webp" },
  { name: "Bitcoin", logo: "/img/networks/bitcoin.webp" },
  { name: "Avalanche", logo: "/img/networks/avalanche.webp" },
  { name: "Solana", logo: "/img/networks/solana.webp" },
  { name: "Starknet", logo: "/img/networks/starknet.webp" },
  { name: "Walrus", logo: "/img/networks/walrus.webp" },
  { name: "Band", logo: "/img/networks/band.webp" },
];

export const TrustedBy = () => {
  const { description } = i18n().trustedBy;

  return (
    <section
      class={`
        w-full
        py-12
        md:py-16
      `}
    >
      <div
        class={`
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-8
          px-4
          md:flex-row
          md:items-center
          md:gap-12
          md:px-8
        `}
      >
        {/* Text */}
        <p
          class={`
            max-w-md
            shrink-0
            text-lg
            font-medium
            text-foreground
            md:text-xl
          `}
        >
          {description}
        </p>

        {/* Scrolling Logos */}
        <div
          class={`
            relative
            flex-1
            overflow-hidden
          `}
        >
          {/* Gradient overlays */}
          <div
            class={`
              pointer-events-none
              absolute
              top-0
              left-0
              z-10
              h-full
              w-16
              bg-linear-to-r
              from-background
              to-transparent
            `}
          />
          <div
            class={`
              pointer-events-none
              absolute
              top-0
              right-0
              z-10
              h-full
              w-16
              bg-linear-to-l
              from-background
              to-transparent
            `}
          />

          {/* Marquee container */}
          <div
            class={`
              flex
              whitespace-nowrap
            `}
          >
            <div
              class={`
                flex
                animate-marquee
                gap-4
                will-change-transform
              `}
            >
              {[...chains, ...chains].map((chain, i) => (
                <div
                  key={i}
                  class={`
                    flex
                    h-12
                    w-44
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-accent-muted/20
                  `}
                >
                  <img
                    src={chain.logo}
                    alt={chain.name}
                    class={`
                      h-8
                      w-auto
                      object-contain
                    `}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
