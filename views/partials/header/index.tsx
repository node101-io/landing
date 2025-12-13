import { HeaderMenu } from "./components/menu";
import { HeaderMenuSection } from "./components/menu-section";
import type { MenuSectionItemProps } from "./components/menu-section-item";

// Placeholder icon - sonradan değiştirilecek
const PlaceholderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

type MenuItemSection = {
  title: string;
  items: MenuSectionItemProps[];
  footnote?: string;
};

type MenuItem = {
  label: string;
  sections: MenuItemSection[];
};

const menuItems: MenuItem[] = [
  {
    label: "Yatırım",
    sections: [
      {
        title: "Yatırım Araçları",
        items: [
          {
            icon: <PlaceholderIcon />,
            label: "Yatırım Fırsatları",
            description: "Güncel piyasa fırsatlarını keşfedin",
            href: "/yatirim/firsatlar",
          },
          {
            icon: <PlaceholderIcon />,
            label: "Portföy Yönetimi",
            description: "Varlıklarınızı profesyonelce yönetin",
            href: "/yatirim/portfoy",
          },
        ],
      },
      {
        title: "Piyasa Verileri",
        items: [
          {
            icon: <PlaceholderIcon />,
            label: "Canlı Veriler",
            description: "Anlık piyasa verileri",
            href: "/yatirim/canli",
          },
          {
            icon: <PlaceholderIcon />,
            label: "Analiz Raporları",
            description: "Detaylı piyasa analizleri",
            href: "/yatirim/analizler",
          },
        ],
        footnote: "Yatırım tavsiyesi değildir",
      },
    ],
  },
  {
    label: "RPC",
    sections: [
      {
        title: "Başlangıç",
        items: [
          {
            icon: <PlaceholderIcon />,
            label: "Hızlı Başlangıç",
            description: "5 dakikada entegrasyon",
            href: "/rpc/baslangic",
          },
          {
            icon: <PlaceholderIcon />,
            label: "API Dokümantasyonu",
            description: "Kapsamlı API referansı",
            href: "/rpc/api",
          },
        ],
      },
      {
        title: "Araçlar",
        items: [
          {
            icon: <PlaceholderIcon />,
            label: "SDK İndirmeleri",
            description: "Tüm platformlar için SDK'lar",
            href: "/rpc/sdk",
          },
          {
            icon: <PlaceholderIcon />,
            label: "CLI Araçları",
            description: "Komut satırı araçları",
            href: "/rpc/cli",
          },
        ],
      },
      {
        title: "Kaynaklar",
        items: [
          {
            icon: <PlaceholderIcon />,
            label: "Entegrasyon Rehberi",
            description: "Adım adım kılavuz",
            href: "/rpc/entegrasyon",
          },
          {
            icon: <PlaceholderIcon />,
            label: "Örnek Projeler",
            description: "Hazır kod örnekleri",
            href: "/rpc/ornekler",
          },
        ],
      },
    ],
  },
  {
    label: "Hizmetler",
    sections: [
      {
        title: "Profesyonel",
        items: [
          {
            icon: <PlaceholderIcon />,
            label: "Danışmanlık",
            description: "Uzman ekibimizden destek",
            href: "/hizmetler/danismanlik",
          },
          {
            icon: <PlaceholderIcon />,
            label: "Kurumsal Çözümler",
            description: "Özel kurumsal hizmetler",
            href: "/hizmetler/kurumsal",
          },
        ],
      },
      {
        title: "Eğitim",
        items: [
          {
            icon: <PlaceholderIcon />,
            label: "Online Eğitimler",
            description: "Kapsamlı video eğitimler",
            href: "/hizmetler/online-egitim",
          },
          {
            icon: <PlaceholderIcon />,
            label: "Sertifika Programları",
            description: "Profesyonel sertifikalar",
            href: "/hizmetler/sertifika",
          },
        ],
      },
      {
        title: "Destek",
        items: [
          {
            icon: <PlaceholderIcon />,
            label: "Teknik Destek",
            description: "7/24 teknik destek",
            href: "/hizmetler/destek",
          },
          {
            icon: <PlaceholderIcon />,
            label: "Topluluk",
            description: "Geliştirici topluluğu",
            href: "/hizmetler/topluluk",
          },
        ],
      },
    ],
  },
  {
    label: "Ürünler",
    sections: [
      {
        title: "Yazılım",
        items: [
          {
            icon: <PlaceholderIcon />,
            label: "Platform",
            description: "Ana yazılım platformu",
            href: "/urunler/platform",
          },
          {
            icon: <PlaceholderIcon />,
            label: "Mobil Uygulama",
            description: "iOS ve Android uygulaması",
            href: "/urunler/mobil",
          },
        ],
      },
      {
        title: "Altyapı",
        items: [
          {
            icon: <PlaceholderIcon />,
            label: "Bulut Hizmetleri",
            description: "Ölçeklenebilir bulut",
            href: "/urunler/bulut",
          },
          {
            icon: <PlaceholderIcon />,
            label: "Node Altyapısı",
            description: "Dağıtık node ağı",
            href: "/urunler/node",
          },
        ],
      },
    ],
  },
  {
    label: "Kurumsal",
    sections: [
      {
        title: "Şirket",
        items: [
          {
            icon: <PlaceholderIcon />,
            label: "Hakkımızda",
            description: "Vizyon ve misyonumuz",
            href: "/kurumsal/hakkimizda",
          },
          {
            icon: <PlaceholderIcon />,
            label: "Ekibimiz",
            description: "Liderlik ekibi",
            href: "/kurumsal/ekip",
          },
        ],
      },
      {
        title: "Kariyer",
        items: [
          {
            icon: <PlaceholderIcon />,
            label: "Açık Pozisyonlar",
            description: "Bize katılın",
            href: "/kurumsal/kariyer",
          },
          {
            icon: <PlaceholderIcon />,
            label: "Kültürümüz",
            description: "Çalışma ortamımız",
            href: "/kurumsal/kultur",
          },
        ],
      },
      {
        title: "İletişim",
        items: [
          {
            icon: <PlaceholderIcon />,
            label: "Basın",
            description: "Basın ve medya",
            href: "/kurumsal/basin",
          },
          {
            icon: <PlaceholderIcon />,
            label: "İletişim",
            description: "Bize ulaşın",
            href: "/kurumsal/iletisim",
          },
        ],
      },
    ],
  },
];

export const Header = () => (
  <header class="relative flex items-center justify-between py-4 gap-8">
    <img src="/logo.png" alt="logo" class="h-10 w-auto" />
    <nav class="flex items-center gap-1">
      {menuItems.map((item, index) => (
        <div class="group" key={index}>
          <button
            class="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-warm-gray rounded-md transition-colors hover:bg-warm-gray/10 focus:bg-warm-gray/15 focus:outline-none"
            type="button"
            onclick="this.focus()" // for safari
          >
            {item.label}
            <svg
              class="w-2.5 h-1.5 transition-transform group-focus-within:rotate-180"
              viewBox="0 0 10 6"
              fill="none"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <HeaderMenu class="absolute top-full left-0 right-0 mt-2 p-1.5 shadow-lg opacity-0 invisible translate-y-[-8px] transition-all duration-200 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 z-50 flex gap-1.5 justify-center">
            {item.sections.map((section, sectionIndex) => (
              <HeaderMenuSection
                key={sectionIndex}
                title={section.title}
                items={section.items}
                footnote={section.footnote}
              />
            ))}
          </HeaderMenu>
        </div>
      ))}
    </nav>
    <button class="bg-warm-gray text-soft-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all hover:bg-warm-gray/85 hover:-translate-y-0.5 whitespace-nowrap">
      Bize Ulaşın
    </button>
  </header>
);
