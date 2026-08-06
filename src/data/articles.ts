import regeneratorMiastHero from '../../assets/articles/regenerator-miast-hero.jpg';
import regeneratorMiastInline from '../../assets/articles/regenerator-miast-inline.jpg';
import imgJadalneMiasto6 from '../../assets/articles/jadalne-miasto-6.jpg';
import imgJadalneMiasto12 from '../../assets/articles/jadalne-miasto-12.jpg';
import imgZwiazkowaRewolucja0 from '../../assets/articles/zwiazkowa-rewolucja-0.jpg';
import imgLifeComet0 from '../../assets/articles/life-comet-0.jpg';
import imgLifeComet16 from '../../assets/articles/life-comet-16.jpg';
import imgOpzz1 from '../../assets/articles/opzz-1.jpg';
import imgOpzz12 from '../../assets/articles/opzz-12.jpg';
import imgAkademiaGzm2 from '../../assets/articles/akademia-gzm-2.jpg';
import imgAkademiaGzm10 from '../../assets/articles/akademia-gzm-10.jpg';
import imgOtwartyJazdow3 from '../../assets/articles/otwarty-jazdow-3.jpg';
import imgOtwartyJazdow9 from '../../assets/articles/otwarty-jazdow-9.jpg';
import imgMostFarma1 from '../../assets/articles/most-farma-1.jpg';
import imgMostFarma11 from '../../assets/articles/most-farma-11.jpg';

export type ArticleCategory = 'projekt' | 'aktualnosc' | 'publikacja';

export type ArticleBlock =
  | { kind: 'paragraph'; text: string; lead?: boolean }
  | { kind: 'heading'; text: string }
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'split'; paragraphs: string[]; image: { src: string; alt: string } };

export interface ArticleContent {
  slug: string;
  category: ArticleCategory;
  kicker: string;
  title: string;
  blocks: ArticleBlock[];
}

export const articleCategoryLabels: Record<ArticleCategory, string> = {
  projekt: 'Projekt',
  aktualnosc: 'Aktualność',
  publikacja: 'Publikacja',
};

export const articleCategoryListPath: Record<ArticleCategory, string> = {
  projekt: '/nasze-projekty',
  aktualnosc: '/blog',
  publikacja: '/publikacje',
};

export const articles: ArticleContent[] = [
  {
    slug: 'regenerator-miast',
    category: 'projekt',
    kicker: 'Regenerator Miast 🏡☀️',
    title: 'Współtworzymy strategie rozwoju miast i gmin',
    blocks: [
      {
        kind: 'paragraph',
        lead: true,
        text: 'W kwietniu 2026 roku zakończyliśmy pierwszą edycję programu Regeneratora Miast! Jeszcze raz dziękujemy uczestnikom za zaangażowanie.',
      },
      { kind: 'heading', text: 'Historia programu' },
      {
        kind: 'paragraph',
        text:
          'Program zainaugurowano we wrześniu 2024 roku na I Kongresie Regeneracji w Dąbrowie Górniczej. Przez kolejne siedem miesięcy, w ramach sześciu zjazdów, 15 samorządów z całej Polski – Dąbrowa Górnicza, Dubeninki, Gdynia, Giby, Gniezno, Kraków, Krasnopol, Leśna, Nadarzyn, Piotrków Trybunalski, Radzyń Podlaski, Stawiski, Tarnów, Włocławek i Zabrze – pracowało wspólnie nad budową Lokalnych Spółdzielni Rozwojowych, wdrożeniem Platformy Lokalnych Zasobów (PLZ) oraz nowych modeli finansowania lokalnej gospodarki.',
      },
      { kind: 'image', src: regeneratorMiastHero, alt: 'Uczestnicy I Kongresu Regeneracji przed pałacem' },
      { kind: 'heading', text: 'Lokalne Spółdzielnie Rozwojowe – nowy model rozwoju polskich miast' },
      {
        kind: 'paragraph',
        text:
          'LSR to lokalna organizacja, która łączy w jednym podmiocie samorząd, instytucje publiczne, firmy, organizacje pozarządowe i zwykłych mieszkańców. Nie jest to ani urząd, ani zwykła firma, ani typowe stowarzyszenie – to hybryda, której siłą jest właśnie to, że różne środowiska działają razem, a nie obok siebie.',
      },
      {
        kind: 'paragraph',
        text:
          'Skąd pomysł na taką instytucję? Autorzy programu wychodzą z założenia, że dotychczasowy model rozwoju polskich miast się wyczerpał. Pieniądze z zewnątrz – unijne dotacje, zagraniczny kapitał, tania praca – już nie wystarczą. Potrzebny jest model, który zatrzymuje kapitał w lokalnym obiegu i sprawia, że mieszkańcy stają się współwłaścicielami, a nie tylko odbiorcami usług.\nLSR miała być takim „wehikułem zmiany” – operatorem usług i programów rozwojowych, który może prowadzić spółdzielnię energetyczną, zarządzać lokalnym targowiskiem, organizować usługi opiekuńcze dla seniorów, rozwijać turystykę czy obsługiwać cyfrową platformę dla mieszkańców. W zależności od gminy mogła przyjąć zupełnie inny kształt, bo każda miejscowość ma inne zasoby i inne wyzwania.',
      },
      { kind: 'heading', text: 'Rola programu' },
      {
        kind: 'paragraph',
        text:
          'Program miał na celu wesprzeć przedstawicieli samorządów miast z całej Polski w wypracowaniu modelu, wdrażającego rozwiązania LSR.\nKażdy zjazd łączył pracę warsztatową z konkretnymi zadaniami wdrożeniowymi.',
      },
      {
        kind: 'paragraph',
        text:
          'Ścieżka była zaprojektowana tak, żeby przeprowadzić uczestników od myślenia abstrakcyjnego do konkretnego działania. Dwa Horyzonty dały im wspólny język i długofalową wizję. Mapowanie zasobów pokazało, czym faktycznie dysponuje gmina. One-pager LSR wymusił pierwsze konkretne decyzje o modelu spółdzielni. Design Thinking nauczył, że nie chodzi o perfekcyjny plan, ale o szybkie testowanie i wyciąganie wniosków. Plan 30-60-90 sprawił, że każdy wyszedł z programu z pierwszym krokiem już zaplanowanym. Na koniec panel z praktykami spółdzielczości przypomniał, że to nie jest teoria – **najstarsze firmy w Polsce to dziś stuletnie spółdzielnie.**',
      },
      {
        kind: 'split',
        paragraphs: [
          'We wszystkich gminach nawiązały się lub toczą się obiecujące relacje z partnerami bankowymi. Ich konkretny kształt jest jeszcze wypracowywany – i to właśnie uważamy za jeden z największych sukcesów edycji: program stworzył realne środowisko do budowania partnerstw, nie tylko deklaracji.',
          'Trwają prace nad drugą edycją programu. Następny Regenerator skupi się na wdrażaniu konkretnych technologii w lokalnym środowisku samorządów. Więcej informacji wkrótce!',
        ],
        image: { src: regeneratorMiastInline, alt: 'Prezentacja gmin uczestniczących w Regeneratorze Miast' },
      },
    ],
  },
  {
    slug: 'jadalne-miasto',
    category: 'projekt',
    kicker: "Jadalne Miasto",
    title: "Współtworzymy rolnictwo miejskie 👩‍🌾🌾",
    blocks: [
      { kind: 'heading', text: "Czym są jadalne miasta?" },
      { kind: 'paragraph', text: "Współczesne miasto konsumuje żywność na ogromną skalę, niemal jej nie wytwarzając. Składniki pokonują tysiące kilometrów, zanim trafią na talerz miejskiego mieszkańca. Przemysłowe rolnictwo, globalna logistyka i sieci supermarketów zbudowały system sprawny kosztowo, lecz ekologicznie rozrzutny i społecznie nieprzejrzysty. W ciągu ostatniego stulecia zniknęło około 75% jadalnych odmian roślin uprawnych. Pustynie żywnościowe — dzielnice, w których dostęp do świeżej, pełnowartościowej żywności jest niemal niemożliwy — stają się trwałym elementem miejskiego krajobrazu." },
      { kind: 'paragraph', text: "**Edible Settlements** to odpowiedź na tę sytuację. Projekt proponuje zmianę sposobu, w jaki myślimy o mieście jako środowisku życia: nie tylko jako miejscu konsumpcji, ale jako aktywnym producencie pożywienia. Idea ta wykracza daleko poza tradycyjne pojęcie ogródka działkowego czy dekoracyjnej zieleni. Chodzi o głęboką integrację uprawy, przetwórstwa i dystrybucji żywności z tkanką miejską — z podwórzami, dachami, parkami, korytarzami ekologicznymi, wspólnymi kuchniami i lokalnymi targowiskami." },
      { kind: 'heading', text: "Teoretyczny fundament projektu" },
      { kind: 'paragraph', text: "Koncepcja Edible Settlements osadzona jest w kilku kluczowych ramach intelektualnych. Pierwsza z nich to **Sitopia** — teoria Carolyn Steel, która dowodzi, że żywność zawsze była podstawową siłą kształtującą cywilizację: od wczesnego rolnictwa po megamiasta. Nasze obecne systemy żywnościowe Steel opisuje jako „złą sitopię” — świat uformowany przez tanią, uprzemysłowioną żywność, która ukrywa prawdziwe koszty ekologiczne i społeczne produkcji. Edible Settlements mają być krokiem w stronę „dobrej sitopii”: przestrzeni, w której jedzenie znów staje się spoiwem wspólnoty i podstawą odpowiedzialnej polityki miejskiej." },
      { kind: 'paragraph', text: "Drugą ramą jest **neomediewalizm** — obserwacja, że współczesne miasta coraz bardziej przypominają średniowieczne układy nakładających się na siebie władz, instytucji i wspólnot. Średniowieczne miasto nie było tylko centrum handlu i władzy — było gęstą siecią dóbr wspólnych: ogrodów, pastwisk, studni, lasów, zarządzanych zbiorowo przez cechy i sąsiedztwa. Edible Settlements wracają do tej idei. Ogrody społecznościowe, sady sąsiedzkie, dachowe uprawy i lokalne infrastruktury kompostowania funkcjonują jako nowoczesne dobra wspólne: zbiorowo utrzymywane, ekologicznie produktywne i dostępne dla mieszkańców." },
      { kind: 'image', src: imgJadalneMiasto6, alt: "Zdjęcie z warsztatów poświęconych projektowi" },
      { kind: 'paragraph', text: "Projekt opiera się też na zasadach **gospodarki cyrkularnej** i koncepcji **miasta produktywnego**. Odpady organiczne wracają do gleby jako kompost, woda deszczowa jest gromadzona do nawadniania, bioróżnorodne nasadzenia wspierają zapylacze, a krótkie łańcuchy dostaw — poprzez kuchnie społecznościowe i mikrotargi — zastępują część globalnej dystrybucji. To nie jest alternatywa dla rolnictwa wiejskiego, lecz jego uzupełnienie: wzmocnienie lokalnej odporności żywnościowej w obliczu kryzysów klimatycznych, niestabilności geopolitycznej i rosnącej wrażliwości globalnych łańcuchów dostaw." },
      { kind: 'heading', text: "Co udało się już zrealizować?" },
      { kind: 'paragraph', text: "W ramach projektu powstał rozbudowany raport badawczy oraz **atlas studiów przypadku** dokumentujący istniejące inicjatywy miejskiego rolnictwa w Polsce i za granicą. Zebrane przykłady pokazują różnorodność możliwych form i skali działania." },
      { kind: 'paragraph', text: "W **Krakowie** funkcjonuje Krakowska Farma Miejska — 3000 m² upraw na terenie dzierżawionym od Uniwersytetu Rolniczego, prowadzona na zasadach rolnictwa regeneratywnego: bez sztucznych nawozów i pestycydów, z systemem barterowym (praca w zamian za warzywa) i subskrypcjami dla lokalnych konsumentów. Również w Krakowie w czerwcu 2024 roku otwarto **„Pod Gwiazdami”** — pierwszy w Polsce ogród parcelowy, realizowany w ramach unijnego projektu CoFarm4Cities. Na 47 działek wpłynęło 277 wniosków, co dowodzi ogromnego niezaspokojonego popytu na tego typu przestrzenie. Ogród łączy indywidualne uprawy z infrastrukturą wspólnotową: kompostownią, systemem zbierania deszczówki, narzędziownią i programem edukacyjnym." },
      { kind: 'paragraph', text: "We **Wrocławiu** Farma Miejska prowadzona przez miasto dysponuje dziś 3,5 ha, z możliwością rozbudowy do 30 ha, i wpisuje się w szerszą strategię błękitno-zielonej infrastruktury. W **Warszawie** od 2015 roku działa ogród społecznościowy Motyka i Słońce w historycznym osiedlu Jazdów — inicjatywa oddolna wspierana przez miasto, łącząca uprawy z kulturą i edukacją ekologiczną. Atlas dokumentuje też **Spółdzielnię MOST** — krakowską inicjatywę, która rozciągnęła pojęcie współzarządzania do granic nieoczekiwanych: ekosystem farmy, nazwany Adamah, jest formalnym członkiem spółdzielni, co czyni projekt jednym z najbardziej zaawansowanych przykładów zarządzania z udziałem nie-ludzkiego świata przyrody. Zebrane studia przypadku — uzupełnione przykładami z Chrzanowa, Szwecji (Orten Odlar) i Paryża — tworzą razem mapę możliwości: od małych ogrodów parcelowych i ruchów guerrilla gardening, przez kooperatywy i farmy dachowe, po wieloletnie programy miejskie. Każdy z tych przykładów udowadnia, że jadalne osiedla to nie odległa wizja — to rzeczywistość, która już rośnie w miastach, czekając na odpowiednie warunki, by się upowszechnić i utrwalić." },
      { kind: 'image', src: imgJadalneMiasto12, alt: "Zdjęcie z warsztatów poświęconych projektowi" },
      { kind: 'heading', text: "Projekt realizują:" },
      { kind: 'paragraph', text: "• Fundacja Ramboll\n• CoopTech Hub\n• FRAG – Forum Rozwoju Aglomeracji Gdańskiej\n• Fundacja Plony\n• biuro architektoniczne Henning Larsen\n• Stocznia Cesarska" },
    ],
  },
  {
    slug: 'zwiazkowa-rewolucja',
    category: 'projekt',
    kicker: "Związkowa Rewolucja",
    title: "– Od Papieru do Cyfryzacji 🤝⚙️",
    blocks: [
      { kind: 'image', src: imgZwiazkowaRewolucja0, alt: "Związkowa Rewolucja" },
      { kind: 'paragraph', text: "**Nr umowy:** FERS.04.03-IP.06-0009/25 **Okres realizacji:** 01.12.2025 – 30.11.2027 **Wydatki ogółem:** 2 399 433,60 zł **Dofinansowanie:** 2 327 450,59 zł (ze środków europejskich: 1 980 012,60 zł, ze środków dotacji celowej: 347 437,99 zł)" },
      { kind: 'heading', text: "Partnerzy Projektu" },
      { kind: 'paragraph', text: "• Ogólnopolskie Porozumienie Związków Zawodowych\n• Instytut Spraw Publicznych\n• PLZ Spółdzielnia" },
      { kind: 'heading', text: "Działania" },
      { kind: 'paragraph', text: "Zostaną stworzone warunki, w których organizacje związkowe będą mogły aktywnie wpływać na kształtowanie bezpiecznego i sprawiedliwego środowiska pracy w erze cyfrowej. Projekt składa się z trzech głównych komponentów:" },
      { kind: 'paragraph', text: "**1) Moduł rekomendacji systemowych** – analiza i opracowanie wytycznych dla związków zawodowych w kontekście transformacji cyfrowej." },
      { kind: 'paragraph', text: "**2) Moduł pilotażu** – testowanie cyfrowych narzędzi wspierających działalność związkową: stworzenie i wdrożenie prostego, dostępnego narzędzia cyfrowego – **„Asystenta Związkowca AI”**. Jego zadaniem będzie wsparcie codziennej pracy struktur związkowych, m.in. poprzez automatyzację zadań administracyjnych, lepsze zarządzanie członkostwem, łatwiejszy dostęp do dokumentów i wsparcie komunikacji wewnętrznej." },
      { kind: 'paragraph', text: "**3) Moduł szkoleniowy** – rozwój kompetencji cyfrowych w organizacjach związkowych: organizacja **8 dwudniowych szkoleń stacjonarnych** dla **160 działaczy i działaczek** związkowych z całej Polski. Tematyka szkoleń to m.in.: korzystanie z narzędzi cyfrowych i komunikacyjnych, wprowadzenie do wykorzystania sztucznej inteligencji w pracy związkowej, zarządzanie informacją, ochrona danych, budowanie wizerunku organizacji w sieci oraz przeciwdziałanie wykluczeniu cyfrowemu." },
      { kind: 'heading', text: "Grupa docelowa" },
      { kind: 'paragraph', text: "Osoby aktywnie zaangażowane w działalność związkową – liderzy, działacze, członkowie związków zawodowych oraz eksperci wspierający organizacje pracownicze. Projekt skierowany jest do osób z całej Polski." },
      { kind: 'heading', text: "Cele projektu" },
      { kind: 'paragraph', text: "• Dostarczenie nowoczesnych narzędzi cyfrowych, usprawnienie zarządzania organizacjami związkowymi oraz podniesienie kompetencji działaczy w kontekście wyzwań cyfryzacji rynku pracy.\n• Przeprowadzenie kompleksowej analizy wpływu transformacji cyfrowej na funkcjonowanie związków zawodowych oraz opracowanie zestawu rekomendacji systemowych." },
      { kind: 'heading', text: "Rezultaty projektu" },
      { kind: 'paragraph', text: "• Raport zawierający rekomendacje dla związków zawodowych w zakresie transformacji cyfrowej, opracowany na podstawie analiz i konsultacji eksperckich.\n• Przeszkolenie około **160 osób**, opracowanie materiałów edukacyjnych oraz zwiększenie świadomości na temat cyfrowych narzędzi i ich znaczenia dla przyszłości organizacji związkowych." },
    ],
  },
  {
    slug: 'life-comet',
    category: 'projekt',
    kicker: "💫  LIFE Comet",
    title: "Tworzymy koalicję społeczności energetycznych w Europie 🇪🇺 Środkowo-Wschodniej",
    blocks: [
      { kind: 'image', src: imgLifeComet0, alt: "LIFE Comet. Energy communities working together" },
      { kind: 'heading', text: "LIFE Comet to wsparcie dla społeczności energetycznych" },
      { kind: 'paragraph', text: "Społeczność energetyczna to model lokalnej współpracy podmiotów, której celem jest zaspokajanie potrzeb związanych z pozyskiwaniem energii. Grupy obywateli i obywatelek, samorząd oraz inne lokalne instytucje mogą w ramach różnych form prawnych współpracować przy rozwoju wspólnego korzystania z instalacji odnawialnych źródeł energii. Energetyka społeczna to sposób na przyciąganie prywatnego kapitału do procesu transformacji energetycznej i jednocześnie na zaangażowanie mieszkanek i mieszkańców w zielone zmiany." },
      { kind: 'paragraph', text: "Projekt LIFE Comet realizujemy w ramach programu LIFE, czyli instrumentu Unii Europejskiej poświęconego wyłącznie ochrony środowiska przyrody oraz redukcji wpływu człowieka na klimat i dostosowania się do jego zmian. LIFE Comet wspiera tworzenie koalicji energetycznych na poziomie krajowym w krajach Europy Wschodniej. Partnerzy będą również pomagać w powstawaniu nowych społeczności energetycznych poprzez szkolenia i pomoc techniczną." },
      { kind: 'paragraph', text: "Konsorcjum projektu LIFE Comet tworzą spółdzielnie energetyczne i organizacje eksperckie z ośmiu krajów Unii Europejskiej. Naszym celem jest stworzenie siedmiu koalicji i wsparcie 97 nowych obywatelskich inicjatyw energetycznych." },
      { kind: 'heading', text: "Społeczności energetyczne w Europie Środkowej i Wschodniej" },
      { kind: 'paragraph', text: "W skali Europy obywatelskie inicjatywy energetyczne mają długą historię. Często przybierały formę spółdzielni. Nowa koncepcja prawna wspólnot energetycznych wprowadzona do prawodawstwa europejskiego w 2018 r. dała temu ruchowi nowe możliwości." },
      { kind: 'paragraph', text: "Sytuacja wygląda inaczej w Europie Środkowo-Wschodniej, gdzie społeczności energetyczne nie były dotąd zbyt liczne. Dziś, w nowych warunkach prawnych i przy silnej współpracy międzynarodowej, powoływanie społeczności energetycznych otwiera nowe możliwości. To wielka szansa na wzmocnienie roli społeczeństwa obywatelskiego w sektorze energetycznym." },
      { kind: 'paragraph', text: "Celem projektu LIFE Comet jest przeprowadzenie kompleksowej analizy stanu społeczności energetycznych w regionie, zidentyfikowanie i udostępnienie przypadków dobrych praktyk oraz wpływanie na poprawę środowiska wspierającego społeczności energetyczne poprzez działania lobbingowe. W ramach projektu utworzymy sieci społeczności energetycznych, które będą promować współpracę kluczowych interesariuszy w obszarze społeczności energetycznych." },
      { kind: 'heading', text: "Nasze działania w LIFE Comet" },
      { kind: 'paragraph', text: "W ramach projektu PLZ Spółdzielnia i CoopTech Hub prowadzą działania mające na celu budowanie zdolności kluczowych interesariuszy w obszarze społeczności energetycznych." },
      { kind: 'paragraph', text: "Kamieniem milowym w projekcie jest utworzenie Związku Rewizyjnego Spółdzielni Energetycznych, Rozwojowych i Cyfrowych. Związek SERC daje spółdzielniom unikalną możliwość zjednoczenia się, co w efekcie umożliwia im wywieranie silniejszego wpływu na kształtowanie polityki energetycznej czy technologicznej w Polsce. Działanie na rzecz energetyki obywatelskiej, które może łączyć wszystkich Polaków niezależnie od ich poglądów politycznych, jest kluczowe dla dobra kraju." },
      { kind: 'heading', text: "Projekt LIFE Comet:" },
      { kind: 'paragraph', text: "• utworzy krajowe koalicje społeczności energetycznych poprzez rozpoznanie, zaangażowanie i umocnienie odpowiednich krajowych interesariuszy,\n• przeanalizuje lokalne uwarunkowania w celu lepszego zrozumienia sytuacji w obszarze społeczności energetycznych,\n• przyczyni się do budowy lepszego środowiska wsparcia dla nich poprzez lobbing, opracowywanie narzędzi, metodologii i technicznego wsparcia stworzy lepsze środowisko dla nowych inicjatyw,\n• ulepszy istniejące sieci, platformy i projekty za pomocą innowacyjnych i kompleksowych podejść do rozwiązania istniejących problemów w rozwoju społeczności energetycznych w regionie." },
      { kind: 'heading', text: "Partnerzy projektu:" },
      { kind: 'paragraph', text: "• Zelena Energetska Zadruga 🇭🇷\n• Electra Energy Cooperative 🇬🇷\n• REScoop.eu 🇧🇪\n• Tallinn University of Technology 🇪🇪\n• Solidarity Economy Center 🇭🇺\n• Focus 🇸🇮\n• Cooperativa de Energie 🇷🇴\n• PLZ Spółdzielnia 🇵🇱" },
      { kind: 'image', src: imgLifeComet16, alt: "LIFE" },
    ],
  },
  {
    slug: 'cyfrowa-transformacja-opzz',
    category: 'projekt',
    kicker: "📱 Cyfrowa transformacja OPZZ",
    title: "za pomocą aplikacji PLZ",
    blocks: [
      { kind: 'paragraph', text: "Pandemia COVID-19 uświadomiła wszystkim, że **cyfryzacja** to nie tylko dodatek do sprawdzonych procesów, ale **konieczność w świecie XXI wieku**. Nie inaczej było w przypadku Ogólnopolskiego Porozumienia Związków Zawodowych – największej w Polsce centrali związkowej, która mierzyła się z trudnościami związanymi z zamykaniem zakładów, koniecznością przeprowadzania spotkań oraz głosowań w formie zdalnej, zmianą metod komunikacji i lawinowym przyrostem zainteresowania pomocą prawną." },
      { kind: 'image', src: imgOpzz1, alt: "📱 Cyfrowa transformacja OPZZ" },
      { kind: 'paragraph', text: "Na początku 2022 r. do CoopTech Hub zgłosił się wiceprzewodniczący OPZZ, Piotr Ostrowski. Jak większość związków w Polsce, OPZZ mierzył się z rosnącą średnią wieku członków, trudnościami w dotarciu do młodszych pokoleń i angażowania ich do współpracy. Lawinowo rosnąca biurokracja przy prawnych i finansowych aspektach też nie ułatwiała działalności. **Piotr szukał zespołu, który przeprowadzi cyfrową transformację OPZZ** z pełnym zrozumieniem bieżących wyzwań oraz znaczenia działalności związkowej dla rozwoju społeczno-gospodarczego." },
      { kind: 'paragraph', text: "Jako spółdzielcy prowadzący biznes z misją społeczną naturalnie rozumiemy wartości związków zawodowych. Dlatego złożyliśmy ofertę świadczenia **Cyfrowej Transformacji** – **kompleksowego pakietu usług doradczych, IT i szkoleniowych**. Dzięki temu mieliśmy szansę dogłębnie zdiagnozować istotę problemu, dobrać i wdrożyć narzędzia cyfrowe oraz przeszkolić członków i członkinie OPZZ." },
      { kind: 'heading', text: "Marketing wzmacniający… prawa pracownicze" },
      { kind: 'paragraph', text: "Złożona przez nas propozycja opierała się o wykorzystanie wiedzy biznesowej do usprawnienia działania i komunikacji związku – zarówno wewnętrznie, jak i na zewnątrz. Naszą analizę rozpoczęliśmy od przejścia przez wszystkie etapy **lejka marketingowego** razem z zespołem OPZZ. Dzięki temu zrozumieliśmy specyfikę problemów centrali związkowej i opracowaliśmy plan stworzenia i wdrożenia dwóch narzędzi:" },
      { kind: 'paragraph', text: "• **Chatbota doradczego Nadzieja**, funkcjonującego na neutralnej platformie www.pracujgodnie.pl w celu poszerzania świadomości i automatyzowania prostych porad prawnych (początek lejka marketingowego);\n• **Aplikacji PLZ z nowymi, dedykowanymi funkcjonalnościami** współprojektowanymi z OPZZ do ulepszenia pracy na poziomie organizacji zakładowej (ostatni etap lejka marketingowego)." },
      { kind: 'paragraph', text: "Warsztaty wydobywcze z udziałem projektantów umożliwiły stworzenie awatara doradczyni związkowej, która jest atrakcyjna dla młodych osób i nie odstrasza efektem tzw. doliny niesamowitości (uncanny valley). Nadzieja przybrała postać animowanej lwicy, a jej wypowiedzi zostały napisane i sformatowane tak, aby budzić sympatię i poczucie troski. **Porady chatbota zostały oparte o ponad 300 stron dialogów** opracowanych podczas warsztatów wydobywczych z udziałem prawników i ekspertów związkowych. Dzięki zastosowaniu drzewa decyzyjnego Nadzieja nie „halucynuje” kiedy udziela precyzyjnych porad prawnych i negocjacyjnych." },
      { kind: 'paragraph', text: "Dla potrzeb wewnętrznych związków zaproponowaliśmy rozwój dedykowanych funkcjonalności w aplikacji PLZ służącej jako zaufana aplikacja dla lokalnych społeczności. Podczas **warsztatów współprojektowania (inaczej zwanego projektowaniem uczestniczącym)** z udziałem różnych branż związkowych zrozumieliśmy dokładnie jakie potrzeby nie są dziś zaspokajane przez dostępne rozwiązania. Wspólnie z OPZZ przygotowaliśmy i wdrożyliśmy funkcjonalności: **wydarzenia**, **kalendarz**, **głosowania** oraz **przydzielanie zadań**." },
      { kind: 'heading', text: "Najbardziej cyfrowy związek w Polsce" },
      { kind: 'paragraph', text: "Wraz z uruchomieniem platformy www.pracujgodnie.pl CoopTech Hub zrealizował **kampanię reklamową w formacie OOH** (Out-of-Home). Nadzieja została także wdrożona na stronie głównej OPZZ. Udało nam się dotrzeć do bardzo szerokich grup odbiorców. W konsekwencji w ciągu pierwszego roku działalności **z pomocy chatbota skorzystało ponad pół miliona osób**. Dla związku oznacza to realnie tysiące gorących leadów – przyszłych członków i liderów związkowych." },
      { kind: 'paragraph', text: "Aplikacja PLZ stała się nową **„wirtualną tablicą związkową”dla ok. 30 ogólnopolskich związków zawodowych ** z branż od przemysłu, przez handel i usługi aż po administrację publiczną. Związki zawodowe komunikują się w PLZ, pobierają składki członkowskie, głosują i działają w bezpiecznej, zaufanej przestrzeni w której dane należą do nich. W ramach ciągłej współpracy **poprawiane są i rozwijane funkcje** szczególnie przydatne, np. raporty z głosowań generowane do formatów potrzebnych w procesach prawnych i biurokratycznych." },
      { kind: 'image', src: imgOpzz12, alt: "📱 Cyfrowa transformacja OPZZ" },
    ],
  },
  {
    slug: 'akademia-miejskiej-odpornosci-gzm',
    category: 'projekt',
    kicker: "🏡  Akademia Miejskiej Odporności",
    title: "dla Górnośląsko-Zagłębiowskiej Metropolii",
    blocks: [
      { kind: 'paragraph', text: "Współpraca z GZMem rozpoczęła się od wydarzenia i dyskusji wokół premiery naszego raportu o spółdzielczej transformacji. Była to pierwsza okazja dla nas do przedstawienia spółdzielczości jako ważnego elementu lokalnej transformacji. Mieliśmy o tym okazję rozmawiać również na wielu innych wydarzeniach na Śląsku i Zagłębiu. Nasza perspektywa na tyle poszerzyła ramy rozumienia rozwoju lokalnego, że na fali tych dyskusji wygraliśmy przetarg na zrealizowanie Akademii Miejskiej Odporności dla Metropolii GZM." },
      { kind: 'paragraph', text: "Aby promować miejską odporność jednocześnie unikając tzw. **‘katocentryczności’** w inwestycjach GZMu, przeprowadzenie **Akademii** miało na celu znalezienie potencjału na budowanie odporności na kryzysy w już **istniejących zasobach mniejszych gmin**. Od dawna widzieliśmy potencjał mniejszych miast na budowanie systemu reakcji na trudne sytuacje opartego na wspólnej przestrzeni i bliskich relacjach mieszkających w nich osób. Wiedzieliśmy więc, że możemy do tego zadania podejść z zapałem i profesjonalizmem." },
      { kind: 'image', src: imgAkademiaGzm2, alt: "🏡  Akademia Miejskiej Odporności" },
      { kind: 'paragraph', text: "rys. Gosia Zmysłowska" },
      { kind: 'heading', text: "Czym jest miejska odporność?" },
      { kind: 'paragraph', text: "Podczas warsztatów Akademii Miejskiej Odporności bazowaliśmy na naszym doświadczeniu przedstawionym w publikacji Pakiet Miejskiej Odporności. Opowiada ona o naszym podejściu, metodologii i o modelu spółdzielni rozwojowych, czyli takich, które odpowiadają na strategiczne zadania danej gminy. Przedstawiamy tam przykłady tak działających spółdzielni spoza Polski i pokazujemy, jak pracowaliśmy w Dąbrowie Górniczej oraz Koninie, aby przybliżyć im takie rozwiązanie w obliczu budowania miejskiej odporności. W **Pakiecie** wprowadzamy również czytelników w naszą autorską metodologią mapowania lokalnych zasobów i tworzenia innowacji czerpiących zarówno z nowoczesnych technologii, jak i zrozumienia lokalnej specyfiki, kontekstu, historii i kultury." },
      { kind: 'paragraph', text: "Warsztaty w pierwszym etapie** Akademii** wyposażyły uczestniczące w nich 11 gmin w wiedzę o innowacjach jako usługach publicznych oraz o szczegółach i potencjale spółdzielni rozwojowych, w tym spółdzielni energetycznych. W drugim etapie projektu, odwiedziliśmy cztery gminy GZMu, które najbardziej aktywnie uczestniczyły w warsztatach – Bieruń, Piekary Śląskie, Siemianowice Śląskie oraz Tarnowskie Góry, aby zrozumieć ich specyfikę i spersonalizować proponowane przez nas usługi do ich lokalnych potrzeb." },
      { kind: 'paragraph', text: "**Jako spółdzielnia zajmująca się tworzeniem narzędzi cyfrowych**, widzimy potencjał tworzenia społeczności w świecie wirtualnym. Jednocześnie jesteśmy przekonani, że to osobiste relacje i współpraca w świecie materialnym stanowią podstawę do budowania miejskiej odporności. Współpracując z gminami GZMu, kładliśmy więc duży nacisk na analizę już istniejących lokalnych zasobów." },
      { kind: 'heading', text: "Metoda Mapowania Zasobów" },
      { kind: 'paragraph', text: "Analizę przeprowadziliśmy za pomocą naszej, wspomnianej już, **autorskiej metody Mapowania Zasobów** bazującej na modelu ABCD (Asset Based Community Development). Podejście to daje obywatelom i obywatelkom narzędzia do znalezienia i mobilizacji tego, co posiadają, na rzecz budowy silniejszej społeczności (Mike Green, Henry Moore & John O’Brien, Rozwój społeczności w oparciu o zasoby. Model ABCD w praktyce, Stowarzyszenie CAL., 2014). **Tym też kierowaliśmy się w szukaniu zasobów w czterech następujących kategoriach: miejsca i przestrzenie (1), organizacje i instytucje (2), zasoby ludzkie, przyrodnicze i kapitałowe (3), oraz święta, wydarzenia i momenty celebracji (4).**" },
      { kind: 'image', src: imgAkademiaGzm10, alt: "🏡  Akademia Miejskiej Odporności" },
      { kind: 'paragraph', text: "Powyższa metodologia została wykorzystana podczas warsztatów tak, aby wykorzystać potencjał osób o różnych typach neuroróżnorodności – zarówno tych, które najlepiej czują się podczas zbiorowej burzy mózgów, jak i tych, którym lepiej pracuje się w odosobnieniu." },
      { kind: 'heading', text: "Co nam dają spółdzielnie rozwojowe?" },
      { kind: 'paragraph', text: "Inspirując się informacjami zebranymi podczas warsztatów, badaniami terenowymi w czterech uczestniczących w drugim etapie gminach oraz naszą dotychczasową wiedzą i doświadczeniem związanym z miejską odpornością, zaproponowaliśmy projekt spółdzielni rozwojowej dla każdej z gmin. **Każda z proponowanych spółdzielni wykorzystuje już istniejące zasoby i umiejętności osób mieszkających w danej gminie, jednocześnie adresując braki w świadczonych usługach.** Ponadto, zarekomendowaliśmy zawiązanie Metropolijnej spółdzielni ds. rekultywacji terenów poprzemysłowych." },
      { kind: 'paragraph', text: "Wszystkie działania, analizę, projekty spółdzielni oraz propozycje rozwiązań dla ogółu GZMu przedstawiliśmy w **Podręczniku Dobrych Praktyk**, który niebawem opublikujemy. Zawarliśmy w nim również **Dekalog Miejskiej Odporności**, czyli nasz przepis na budowanie odporności, możliwy do zaadaptowania w różnych miastach i kontekstach. Warsztaty Akademii oraz pisanie **Podręcznika** zaprowadziły nas również do zaprojektowania nowego modelu – Spirali Miejskiej Odporności, bazującego między innymi na koncepcji ekonomii obwarzanka autorstwa Kate Raworth (Kate Raworth, Ekonomia obwarzanka. Siedem sposobów myślenia o ekonomii XXI wieku, 2017)." },
      { kind: 'paragraph', text: "Akademia Miejskiej Odporności jest dla nas zachętą do dalszych działań w tym obszarze, szczególnie w mniejszych miastach, ponieważ została ona bardzo pozytywnie odebrana przez uczestników i uczestniczki. Mamy nadzieję, że publikacja **Podręcznika Dobrych Praktyk** jest tylko początkiem naszej współpracy z Metropolią GZM i, że zaproponowane przez nas rozwiązania wejdą w życie." },
      { kind: 'paragraph', text: "**Akademia Miejskiej Odporności** była niewątpliwym sukcesem, ale również ważną lekcją dla nas jako CoopTech Hub. Pogłębiliśmy swoje doświadczenie w rozmowie z lokalnymi liderami i liderkami, oraz swoją intuicję w podążaniu za energią miejsca. Chętnie przyjedziemy również do Waszych miast i pomożemy Wam budować miejską odporność – dla lepszej i zdrowszej wspólnej przyszłości." },
    ],
  },
  {
    slug: 'spoldzielnia-otwarty-jazdow',
    category: 'projekt',
    kicker: "🏠 Spółdzielnia Otwarty Jazdów",
    title: "miejska spółdzielnia energetyczna",
    blocks: [
      { kind: 'paragraph', text: "**Już od pierwszych lat działalności Otwartego Jazdowa wiele osób widziało w nim potencjał do stworzenia samowystarczalnej energetycznie enklawy.** Świadomość konieczności dostosowywania się do zmian wywołanych katastrofą klimatyczną była jednak w tamtych latach dużo mniejsza niż obecnie, stąd takie postulaty spotkały się wówczas z niezrozumieniem." },
      { kind: 'heading', text: "Nowe szanse dla Jazdowa" },
      { kind: 'paragraph', text: "W 2021 r. nastąpił przełom w wieloletnich staraniach społeczności o inwestycje miejskie na Jazdowie.** W budżecie miasta zarezerwowane zostało 10 mln zł na przeprowadzenie remontów budynków oraz inwestycje w teren,** uwzględniające konieczne wymiany sieci elektrycznej i wodno-kanalizacyjnej. W tym samym czasie, Partnerstwo „Otwarty Jazdów”, namówiło przedstawicieli Urzędu m.st. Warszawy do wspólnego przygotowania wniosku na dodatkowe środki na rewitalizację Osiedla w ramach konkursu Nowego Europejskiego Bauhausu ogłoszonego przez Komisję Europejską." },
      { kind: 'image', src: imgOtwartyJazdow3, alt: "🏠 Spółdzielnia Otwarty Jazdów" },
      { kind: 'paragraph', text: "Wspólnie przygotowany wniosek zakładał stworzenie na Osiedlu Jazdów **pierwszego w Polsce zeroenergetycznego kwartału** — kawałka miasta, który posiada swoją własną sieć elektryczną i źródła energii i konsumuje jej tyle samo, co wytwarza. **Miało to zostać osiągnięte przede wszystkim dzięki przeprowadzeniu termomodernizacji budynków oraz wymianie wszystkich źródeł ciepła na pompy ciepła i pompy gruntowe z magazynami wspólnymi dla kilku domków. **" },
      { kind: 'paragraph', text: "Niezbędne w tej układance stało się również stworzenie własnej instalacji fotowoltaicznej. Ze względu na wyżej opisane przeszkody konieczne było znalezienie innego miejsca do lokalizacji jednej dużej instalacji, która mogłaby zaspokoić potrzeby wszystkich domków. Wybór padł na pobliską Szkołę Podstawową nr 12 im. Powstańców Śląskich, posiadającą dużą wolną przestrzeń na dachu. Według bardzo wstępnych analiz byłaby ona wystarczająca do zapewnienia produkcji energii dla Jazdowa oraz na potrzeby własne szkoły. W ramach wnioskowanego projektu miał powstać szereg analiz oraz nowy model miejskiej społeczności energetycznej. Społeczność tworzyłaby szeroka sieć organizacji i instytucji, w tym Partnerstwo „Otwarty Jazdów” i inne podmioty z sąsiedztwa, np. wspomniana już szkoła podstawowa, czy pobliskie przedszkole. Niestety wniosek nie uzyskał dotacji od grantodawcy." },
      { kind: 'heading', text: "Po co nam miejska społeczność energetyczna?" },
      { kind: 'paragraph', text: "**W celu poszukiwania nowych modeli dla jazdowskiej społeczności energetycznej Partnerstwo weszło w 2022 r. we współpracę z CoopTech Hub w ramach Inkubatora Społeczności Energetycznych.** Z udziałem Jacka Kisiela z Biura Polityki Klimatycznej i Czystego Powietrza m.st. Warszawy, ekspertów CoopTech Hub oraz osób Partnerstwa Otwarty Jazdów w latach 2022- 2023 odbyła się seria spotkań, na których wszystkie zainteresowane strony potwierdziły gotowość do współpracy na rzecz wdrożenia w życie wizji Osiedla Jazdów zasilanego wyłącznie zieloną energią. Rozmowy dotyczyły również potencjalnego wykorzystania wytworzonej energii w miesiącach letnich na rzecz elektromobilności, na co pozwala atrakcyjne, centralne położenie Osiedla Jazdów w Warszawie." },
      { kind: 'paragraph', text: "**Wiosną 2023 r. podpisane zostało porozumienie o rozwijaniu jazdowskiej obywatelskiej społeczności energetycznej.** Po cyklu warsztatów i seminariów dotyczących obywatelskich społeczności energetycznych oraz spółdzielni energetycznych 8 grudnia w 10-lecie powstania Partnerstwa Otwarty Jazdów odbyło się walne zebranie założycielskie **Spółdzielni Otwarty Jazdów. Spółdzielnia PLZ jest jednym z 7 członków założycieli spółdzielni, a model spółdzielni został opracowany przez zespół ekspertów CoopTech Hub.** Spółdzielnia będzie kolejnym krokiem do wzmacniania jazdowskiej społeczności, bo oprócz zakupów, czy wytwarzania energii umożliwi również wspólne, społecznościowe podejmowanie działalności gospodarczej. Zgodnie z jazdowską tradycją będzie to również kolejny “pierwszy raz”, który będzie miał szansę zarażać i inspirować innych do podążania podobną ścieżką." },
      { kind: 'image', src: imgOtwartyJazdow9, alt: "🏠 Spółdzielnia Otwarty Jazdów" },
      { kind: 'paragraph', text: "założenie spółdzielni Otwarty Jazdów" },
      { kind: 'paragraph', text: "Nasz pakiet usług **Energetyczna Transformacja** to propozycja narzędzi cyfrowych oraz modeli wspierająca energetyczną transformację. **Jeśli jesteś zainteresowany utworzeniem społeczności energetycznej, spółdzielni energetycznej pomożemy Ci zaplanować transformację energetyczną dostarczymy niezbędnej wiedzy prawnej, biznesowej, modeli energetyki obywatelskiej. **" },
      { kind: 'paragraph', text: "Odporność oznacza przygotowanie na kryzysy wszelkiej natury, w tym te, których źródło i zasięg nie są lokalne. Obecne kryzysy powinny być postrzegane jako fundament do rozwoju innowacji i lokalnych rozwiązań. Zabezpieczenie się przed kryzysami energetycznymi i militarnymi wymaga jak największej dywersyfikacji źródeł energii i stawianie na autokonsumpcję wyprodukowanej lokalnie energii. Docelowo, w społecznościach energetycznych chodzi o to, aby stworzyć system, w którym bazując na OZE, zaspokajany jest lokalny popyt na energię." },
      { kind: 'paragraph', text: "Do zalet społeczności energetycznych należą:" },
      { kind: 'paragraph', text: "• rozwój kompetencji lokalnych i współpracy ekonomicznej" },
      { kind: 'paragraph', text: "• odporna wspólnota i gospodarka" },
      { kind: 'paragraph', text: "• wzmocnienie systemów cyfrowych, energetycznych, gospodarczych i społecznych w erze kryzysu klimatycznego i zagrożeń militarnych" },
      { kind: 'paragraph', text: "• rozwój specjalizacji regionalnej zgodnej ze strategicznymi celami UE i Polski" },
      { kind: 'paragraph', text: "Modele rozwoju społeczności energetycznych to obszar szczególnego zainteresowania zespołu CoopTech Hub. Jesteśmy zainteresowani rozwojem obywatelskich społeczności energetycznych czy spółdzielni energetycznych." },
    ],
  },
  {
    slug: 'most-spoldzielcza-farma-miejska',
    category: 'projekt',
    kicker: "🍓MOST",
    title: "Spółdzielcza Farma Miejska",
    blocks: [
      { kind: 'paragraph', text: "W 2022 roku skontaktowali się z nami przedstawiciele Fundacji Pracownia Dóbr Wspólnych, którzy od lat prowadzą ogród społecznościowy na Osiedlu Jazdów. Przedstawili nam koncepcję farmy miejskiej jako pomysłu na rozwój i profesjonalizację ich działalności. Okazało się, że w Warszawie jest spora grupa osób, działających w ramach organizacji takich jak Kooperatywa Dobrze, Fundacja AgropermaLab, Stowarzyszenie Zasiej czy SGGW, która myśli o wprowadzeniu upraw miejskich na nowy poziom. Wkrótce okazało się, że Urząd m.st. Warszawa jest zainteresowany takim rozwiązaniem, a nawet wytypował już konkretną działkę." },
      { kind: 'image', src: imgMostFarma1, alt: "🍓MOST" },
      { kind: 'paragraph', text: "W czasach zachwiania suwerenność żywnościowej i projektowaniu miast w duchu **ecopolis,** uznaliśmy ten pomysł za wart zaangażowania. Kryzysy ekologiczne, społeczne i zdrowotne ostatnich lat jasno pokazują nam, że musimy zmienić wartości, którymi się kierujemy. Jesteśmy w przełomowym momencie, w którym inicjatywy związane z urbanistyką, przyrodą miejską i żywnością wchodzą w nowy etap rozwoju. Jest to czas poszukiwania **nowych modeli działania**, dzięki którym możliwe będzie budowanie lokalnej odporności w wymiarze żywnościowym, społecznym, przyrodniczym i zdrowotnym. Jednym z takich modeli jest spółdzielcza farma miejska." },
      { kind: 'paragraph', text: "Podstawowym wyzwaniem okazało się opracowanie modelu społeczno – ekonomicznego farmy adekwatnego dla danego terenu. Było dla nas jasne, że na to wyzwanie najlepiej odpowiada nasza **usługa inkubacji spółdzielni hybrydowej**, którą tworzyć będą zarówno osoby indywidualne jak i prawne. A najlepszym dowodem udanej inkubacji **wygrany przetarg na dzierżawę terenu**!" },
      { kind: 'heading', text: "Współpraca z urzędem miasta i budowanie społeczności" },
      { kind: 'paragraph', text: "Działania prowadziliśmy dwutorowo. Z jednej strony współpracowaliśmy z Zarządem Mienia m.st Warszawy pokazując **kontekst**, podstawowe **założenia**, **wizję **oraz** inspirujące przykłady działań **(polecamy między innymi Organiclea, Sitopia, Kleine Stadt Farm, Østergro). Miasto gotowe były przekazać teren wielkości 3,6 ha, położony na urodzajnych glebach przy samej Wiśle, w rejonie Siekierek. Funkcjonowały tu kiedyś ogródki działkowe, czego śladem są liczne drzewa owocowe. Asystowaliśmy w całym procesie przygotowania do dzierżawy i konkursu ofert, wskazując możliwości i rozwiązania prawne. **Przekazanie tak dużego terenu w mieście na farmę jest precedensem** samym w sobie i przeciera szlaki kolejnym inicjatywom w Polsce." },
      { kind: 'paragraph', text: "Równolegle pracowaliśmy nad **rozwinięciem społeczności** i **wzmocnieniem jej kompetencji**. Cały proces rozpoczęło wydarzenie artystyczne Biennale Nieużytków, podczas którego wypracowane zostały podstawowe założenia – aksjologia przedsięwzięcia. Uczestnicy zadeklarowali uznanie terytorium farmy za **osobę przyrodniczą**, której interesy powinny być chronione przez reprezentantkę w radzie nadzorczej spółdzielni." },
      { kind: 'paragraph', text: "Następnie zrealizowaliśmy **cykl otwartych spotkań**, które poruszały zagadnienie relacji żywności i miasta w szeroki i wielostronny sposób. W efekcie dołączyło wiele nowych osób a sama** inicjatywa zyskała dużą rozpoznawalność** oraz osadziła się w szerszych narracjach urbanistycznych, ekonomicznych i żywnościowych. Równolegle prowadzony był **cykl warsztatów** poświęcony konkretnym zagadnieniom związanym z prowadzeniem farmy w formule spółdzielni. Wypracowany został ogólny **model działania, statut** oraz **rola **i **skład **poszczególnych **organów**." },
      { kind: 'paragraph', text: "Pracowaliśmy w myśl **zasady odwróconego modelu rynkowego**, stawiając pytanie nie o to, co spółdzielcza farma miejska może zaproponować nowego i konkurencyjnego na rynku ale o to co poszczególne osoby i instytucje współtworzące inicjatywę **mogą i chcą wnieść**. Dzięki takiemu zmapowaniu zasobów udało nam się oprzeć model społeczno – ekonomiczny na lokalnych zasobach i potencjałach. Inspiracją była dla nas **metoda ABCD** (Asset Based Community Development), którą twórczo rozwinęliśmy w ramach **autorskiej metody Spirala Miejskiej Odporności**." },
      { kind: 'heading', text: "Powołanie spółdzielni" },
      { kind: 'paragraph', text: "**Spółdzielnię MOST** powołały 24 osoby fizyczne i dwie osoby prawne. Ale społeczność wspierająca powstawanie farmy jest znacznie większa. Oprócz szerokiego grona indywidualnych sympatyczek i sympatyków gotowych włączać się w działania na różnych etapach, **nawiązaliśmy współpracę z firmami i organizacjami**, które chcą zaangażować swoje **zasoby **i **społeczności**. Rozpoczęliśmy współpracę między innymi z pobliskimi Rodzinnymi Ogródkami Działkowymi, SGGW, Fundacją im. Heinricha Bölla, Krajowym Związkiem Rewizyjnym Samopomoc Chłopska, Kooperatywą Dobrze, Polskim Związkiem Emerytów Rencistów i Inwalidów." },
      { kind: 'image', src: imgMostFarma11, alt: "🍓MOST" },
      { kind: 'paragraph', text: "Osoby założycielskie spółdzielni MOST" },
      { kind: 'paragraph', text: "**Usługa inkubacji spółdzielczych farm miejskich budzi duże zainteresowanie **również w innych miastach. Na fali tworzenia farmy miejskiej w Warszawie, nawiązaliśmy współpracę z **Krakowem**, **Wrocławiem **i **Gdańskiem**. Współtworzymy również międzynarodowe i międzysektorowe konsorcjum grantu **Horizon Europe** dla projektów innowacyjnych, którego celem jest rozwinięcie strategii i polityk publicznych dotyczących połączeń urbanistyki, rolnictwa i gospodarki na poziomie ogólnoeuropejskim." },
      { kind: 'paragraph', text: "Przejście przez cały proces zakładania miejskiej farmy **pozwoliło nam poznać dogłębnie wyzwania i bariery**, które stają przed inicjatorami takich przedsięwzięć. **Wiemy jak te problemy rozwiązywać**, starając się o ziemię, współpracując z urzędem, zdobywając finanse czy rozwijając kompetentną społeczności. Naszym **doświadczeniem **i **metodą pracy** możemy wesprzeć podobne inicjatywy zarówno inicjowane przez **samorządy**, **organizacje społeczne**,** instytucje publiczne** czy inne podmioty." },
      { kind: 'paragraph', text: "Rozwój miejskiej agroekologii postrzegamy jako jedno z podstawowych narzędzi regeneracji miast a dążenie do miejskiej suwerenności żywnościowej jako ważną ścieżkę budowania lokalnej odporności. **Dlatego jeśli potrzebujcie wsparcia w zakładaniu ogrodów społecznościowych, farm miejskich, agriparków lub innych inicjatyw związanych z żywnością w mieście odezwijcie się do nas.**" },
      { kind: 'paragraph', text: "Zapraszamy do zapoznania się z **raportem**, w którym szczegółowo opisujemy założenia, działania oraz przykłady inspirujących inicjatyw:" },
      { kind: 'paragraph', text: "Spółdzielcza farma miejska jako narzędzie rozwoju miejskiej strefy żywicielskiej oraz agroekologii" },
    ],
  },
  {
    slug: 'spoldzielczosc-energetyczna-ziemi-klodzkiej',
    category: 'projekt',
    kicker: "⚡ Spółdzielczość energetyczna",
    title: "ziemi kłodzkiej",
    blocks: [
      { kind: 'paragraph', text: "**Spółdzielczość energetyczna na Ziemi Kłodzkiej rzuca światło na jedną z najbardziej pionierskich inicjatyw w Polsce, która łączy innowacyjne podejście do wytwarzania energii z głęboko zakorzenionym duchem wspólnotowym. Gmina Lądek-Zdrój** oraz **Lokalna Grupa Działania Kłodzka Wstęga Sudetów** (LGD KWS) na przestrzeni ostatnich lat podjęły działania na rzecz rozwoju energetyki obywatelskiej w regionie, angażując mieszkańców i mieszkanki regionu w transformację energetyczną." },
      { kind: 'heading', text: "Historia" },
      { kind: 'paragraph', text: "** Lokalna Grupa Działania Kłodzka Wstęga Sudetów** (LGD KWS) to Stowarzyszenie, które powstało w roku 2014 mające misję zapewnienia zrównoważonego rozwoju regionu. W skład LGD KWS wchodzi 11 gmin położonych w granicach administracyjnych powiatu kłodzkiego. Obszar ten zamieszkuje 101 393 tys. mieszkańców. Stowarzyszenie Kłodzka Wstęga Sudetów LGD przystąpiła do programu Fundusze Europejskie dla Małopolski o środki z Funduszu na rzecz Sprawiedliwej Transformacji (FST) na projekty inwestycyjne związane z tworzeniem spółdzielni energetycznych na terenie powiatu kłodzkiego. Stowarzyszeniu zostały przyznane środki w wysokości aż 10 milionów złotych na 250 grantów na mikroinstalacje OZE dla mieszkańców 11 gmin powiatu kłodzkiego." },
      { kind: 'paragraph', text: "**Lądecka Spółdzielnia Energetyczna to pierwsza założona przez samorząd gminny spółdzielnia energetyczna w Polsce.** Zgromadzenie założycielskie spółdzielni odbyło się dnia 18 sierpnia 2022 roku. przez trzy podmioty: gminę Lądek-Zdrój, CKiR Lądek-Zdrój oraz LUK sSp. z o.o. Lądek-Zdrój, które podpisały porozumienie o wspólnym utworzeniu spółdzielni z siedzibą w Lądku-Zdroju. Pierwsze działania w kierunku realizacji stworzenia spółdzielni miały miejsce już w marcu 2015 roku, kiedy to rozpoczęto koncepcyjne prace nad budową farmy fotowoltaicznej oraz odwiertu geotermalnego." },
      { kind: 'paragraph', text: "Kolejne etapy rozwoju spółdzielni obejmowały:" },
      { kind: 'paragraph', text: "• Wytypowanie terenów pod farmę fotowoltaiczną w kwietniu 2016 roku i rozpoczęcie zmian w lokalnych planach zagospodarowania przestrzennego.\n• Uzyskanie zmiany studium i uprawomocnienie planu zagospodarowania w czerwcu 2018 roku na terenie gminy Lądek-Zdrój.\n• Realizacja odwiertu geotermalnego w marcu 2019 roku.\n• Uzyskanie warunków przyłączenia do sieci elektrycznej w lutym 2021 roku.\n• Ogłoszenie przetargu na budowę farmy fotowoltaicznej w sierpniu 2021 roku.\n• Uzyskanie pozwolenia na budowę instalacji fotowoltaicznej we wrześniu 2022 roku.\n• Zakończenie prac budowlanych na farmie fotowoltaicznej o mocy około 1 MW w kwietniu 2023 roku.\n• Rejestracja spółdzielni energetycznej w wykazie Krajowego Ośrodka Wsparcia Rolnictwa i oficjalne rozpoczęcie działalności dnia 29 października 2023 roku" },
      { kind: 'paragraph', text: "**Członkami spółdzielni zostali mieszkańcy gminy Lądek-Zdrój, lokalne instytucje oraz przedsiębiorstwa, co świadczy o silnym zaangażowaniu lokalnej społeczności w projekt.** Wytwarzanie energii oparte jest na wykorzystaniu instalacji fotowoltaicznej oraz odwiertu geotermalnego LZT-1, co pozwala na rezygnację ze spalania paliw kopalnych na rzecz OZE. **Lądecka Spółdzielnia Energetyczna** została zarejestrowana w Krajowym Ośrodku Wsparcia Rolnictwa w październiku 2023 roku, a jej instalacja fotowoltaiczna posiada moc zainstalowaną wynoszącą 0,99954 MWe. Warto zaznaczyć, że spółdzielnia ta jest jedną z 22 spółdzielni energetycznych zarejestrowanych w Polsce zgodnie z ustawą o odnawialnych źródłach energii" },
      { kind: 'heading', text: "Współpraca z Stowarzyszeniem Kłodzka Wstęga Sudetów LGD" },
      { kind: 'paragraph', text: "W 2022 Stowarzyszenie Kłodzka Wstęga Sudetów LGD zgłosiło się do Inkubatora społeczności energetycznych CoopTech Hub, a nasz Program rozpoczął się w kwietniu 2022 roku. Jego celem jest stworzenie oraz przetestowanie ścieżek zakładania społeczności energetycznych w praktyce. Mogą się do nas zgłaszać społeczności lokalne, które odczuwają problem wysokich cen energii, chcą uczestniczyć w niezbędnej zmianie w stronę zielonych źródeł energii, planują rozwijać lokalną społeczność bądź wartości suwerenności, odpowiedzialności i dbania o środowisko są dla nich istotne. Szeroka oferta i różne narzędzia, którymi dysponuje CoopTech Hub umożliwiają wsparcie rozwoju społeczności energetycznych w rejonach o zróżnicowanych potrzebach i zróżnicowanych zasobach. Na początku programu “Inkubator społeczności energetycznych” wydaliśmy **Manual Społeczności Energetycznych,** będący pomocnym poradnikiem o tworzeniu i rozwijaniu różnego rodzaju społeczności energetycznych w Polsce. W publikacji opisaliśmy ścieżkę budowania współdzielonych instalacji odpowiadających na potrzeby lokalnej społeczności, dostarczających jej dochód i angażujących ją do współpracy." },
      { kind: 'paragraph', text: "W ramach naszego programu zapewniliśmy Stowarzyszeniu **kompleksowy pakiet rozwojowy**. Przeprowadziliśmy wspólne spotkanie lokalnej społeczności Inkubatora, aby zbadać jej oczekiwania i potrzeby, aby następnie móc dopasować odpowiednie rozwiązanie do tej społeczności. Przeprowadziliśmy także cykl warsztatów online. Współpracę w ramach Inkubatora ze Stowarzyszeniem rozpoczęliśmy od udostępnienia wzorcowego statutu spółdzielni energetycznej oraz wykonania modelu kalkulacyjnego optymalizacji wielkości instalacji wytwórczej, który jest podstawą do stworzenia efektywnej i odpowiedniej dla potrzeb danej społeczności sieci energetycznej. Nasze doradztwo obejmowało także wykonanie modelu kalkulacyjnego podziału przychodów z instalacji wśród osób ze Społeczności oraz wsparcie w poprawnym gromadzeniu i wykorzystaniu danych do optymalizacji. Wykorzystaliśmy do tego narzędzie informatyczne eSolar przygotowane wspólnie z **Enercode sp. z o.o.** spółką pracowniczą Interdyscyplinarnego Zespołu Analiz Energetycznych Narodowego Centrum Badań Jądrowych." },
      { kind: 'paragraph', text: "Dzięki wsparciu doradczemu oraz kalkulacjom dostarczonym przez CoopTech Hub, Stowarzyszenie Kłodzka Wstęga Sudetów LGD uzyskało niezbędne narzędzia i informacje, umożliwiając im podjęcie dalszych kroków w celu działalności w zakresie spółdzielni energetycznych." },
      { kind: 'heading', text: "Wsparcie CoopTech Hub" },
      { kind: 'paragraph', text: "Większość wniosków dotacyjnych w zakresie OZE na rozwój społeczności energetycznych oraz projektów spółdzielczych wymaga dołączenia kalkulacji i wstępnych ekspertyz dotyczących inwestycji instalacji fotowoltaicznej, których wykonanie CoopTech Hub ma w swojej ofercie. **Eksperci i ekspertki CoopTech Hub posiadają nie tylko odpowiednią wiedzę i doświadczenie, ale także umiejętności techniczne niezbędne do przygotowania takich dokumentów.** Ich wsparcie może znacząco zwiększyć szanse na uzyskanie dotacji, oferując profesjonalne podejście i dostosowanie projektu do wymogów dotacyjnych. Ponadto, CoopTech Hub może pomóc w zrozumieniu działalności społeczności energetycznych oraz w wypracowaniu najbardziej efektywnych, spersonalizowanych rozwiązań, co jest kluczowe dla długoterminowej rentowności i efektywności projektu związanego z OZE." },
      { kind: 'paragraph', text: "Inkubacja spółdzielni energetycznych przez CoopTech Hub przynosi korzyści poprzez rozwój lokalnych kompetencji i współpracy ekonomicznej, umożliwiając społecznościom energetycznym skutecznie działania w obszarze zielonej energetyki. Inkubator wspomaga spółdzielnie w efektywnym planowaniu i realizacji projektów opartych na lokalnych zasobach." },
    ],
  },
];

export function getArticle(category: ArticleCategory, slug: string): ArticleContent | undefined {
  return articles.find((article) => article.category === category && article.slug === slug);
}
