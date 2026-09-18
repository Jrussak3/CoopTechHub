export const publicationTagLabels = {
  cyfryzacja: 'Cyfryzacja',
  energetyka: 'Energetyka',
  'rozwoj-lokalny': 'Rozwój lokalny',
};

function parseDate(date) {
  const [day, month, year] = date.split('.').map(Number);
  return new Date(year, month - 1, day).getTime();
}

const rawPublications = [
  {
    id: 'rolnictwo-jako-praca-przyszlosci-ai',
    title: 'Praca, której nie zabierze Ci AI. O rolnictwie i naszej przyszłości',
    description:
      'Raport pokazuje rolnictwo jako pracę przyszłości w czasach sztucznej inteligencji, opisując, dlaczego zawody związane z ziemią i uprawą pozostają odporne na automatyzację, i jak samorządy mogą wspierać sukcesorów oraz neoruralsów przejmujących gospodarstwa.',
    authors: ['Joanna Erbel', 'Olga Turno'],
    date: '17.06.2026',
    tag: 'rozwoj-lokalny',
    thumbnailUrl: '/assets/covers/praca-ktorej-nie-zabierze-ci-ai.jpg',
    attachment: {
      label: 'Pobierz raport (PDF)',
      url: '/assets/publications/rolnictwo-jako-praca-przyszlosci-ai.pdf',
    },
  },
  {
    id: 'miasta-dla-suwerennosci-zywnosciowej',
    title: 'Miasta dla suwerenności żywnościowej',
    description:
      'Lokalne polityki żywnościowe to dziś nie tylko element strategii rozwoju, ale konkretne narzędzie wzmacniania społecznej odporności. Raport pokazuje, jakie działania mogą podejmować samorządy, by wspierać polskie rolnictwo, na przykładach z Krakowa, Rybnika, Rzeszowa, Tarnowa, Wrocławia i Warszawy.',
    authors: ['Joanna Erbel', 'Anna Jakubowska', 'Alicja Wójcik'],
    date: '04.06.2025',
    tag: 'rozwoj-lokalny',
    thumbnailUrl: '/assets/covers/miasta-dla-suwerennosci.png',
    attachment: {
      label: 'Pobierz raport (PDF)',
      url: '/assets/publications/miasta-dla-suwerennosci-zywnosciowej.pdf',
    },
  },
  {
    id: 'jak-powstaja-koalicje-spolecznosci-energetycznych-studium-przypadku-zwiazku-serc',
    title: 'Jak powstają Koalicje Społeczności Energetycznych? Studium przypadku Związku SERC',
    description:
      'Sprawiedliwa transformacja energetyczna nie uda się bez spółdzielni energetycznych. Studium przypadku Związku SERC pokazuje, jak scentralizowane wsparcie prawne, doradcze i kontrolne wzmacnia lokalne inicjatywy energetyczne i ich pozycję wobec instytucji rządowych.',
    authors: ['Bartłomiej Kupiec'],
    date: '25.10.2024',
    tag: 'energetyka',
    thumbnailUrl: '/assets/covers/zwiazek-serc.png',
    attachment: {
      label: 'Pobierz raport (PDF)',
      url: '/assets/publications/jak-powstaja-koalicje-spolecznosci-energetycznych-studium-przypadku-zwiazku-serc.pdf',
    },
  },
  {
    id: 'hybrydowe-targowiska',
    title: 'Hybrydowe targowiska jako centra życia lokalnego',
    description:
      'Zastanawiamy się, jak przekształcać targowiska w miejsca aktywne społecznie i ekonomicznie przez cały tydzień, zamiast wyboru między upadkiem a gentryfikacją — tak, by mogły stać się centrami kultury i sąsiedzkich spotkań.',
    authors: ['Joanna Erbel', 'Ewa Illg-Latko', 'Maciej Łepkowski', 'Aleksandra Sobolewska', 'Alicja Wójcik'],
    date: '03.09.2024',
    tag: 'rozwoj-lokalny',
    thumbnailUrl: '/assets/covers/hybrydowe-targowiska.png',
    attachment: {
      label: 'Pobierz raport (PDF)',
      url: '/assets/publications/hybrydowe-targowiska.pdf',
    },
  },
  {
    id: 'miejska-energetyka-obywatelska',
    title: 'Miejska energetyka obywatelska',
    description:
      'Przedstawiamy modele społeczności energetycznych dla obszarów miejskich oraz praktyczne ścieżki wdrożenia OZE, na przykładzie warszawskiego osiedla Jazdów, wraz z analizą prosumentów zbiorowych, klastrów energii i spółdzielni.',
    authors: ['Bartłomiej Kupiec', 'Rafał Krenz', 'Wojciech Matejko', 'Julia Potrzebowska', 'Jan Oleszczuk-Zygmuntowski'],
    date: '03.04.2024',
    tag: 'energetyka',
    thumbnailUrl: '/assets/covers/miejska-energetyka-obywatelska.png',
    attachment: {
      label: 'Pobierz raport (PDF)',
      url: '/assets/publications/miejska-energetyka-obywatelska.pdf',
    },
  },
  {
    id: 'akademia-miejskiej-odpornosci-raport',
    title: 'Akademia Miejskiej Odporności',
    description:
      'Jak mniejsze miasta mogą budować odporność, wykorzystując istniejące zasoby. Raport opisuje spółdzielnie rozwojowe dopasowane do potrzeb Bierunia, Piekar Śląskich, Siemianowic Śląskich i Tarnowskich Gór.',
    authors: ['Joanna Erbel', 'Tomasz Janas', 'Rafał Krenz', 'Alicja Wójcik'],
    date: '19.02.2024',
    tag: 'rozwoj-lokalny',
    attachment: {
      label: 'Pobierz raport (PDF)',
      url: '/assets/publications/akademia-miejskiej-odpornosci-raport.pdf',
    },
  },
  {
    id: 'power-to-the-people',
    title: 'Power to the People',
    description:
      'Analiza ram prawnych dla społeczności energetycznych w Bułgarii, Grecji, Polsce i Serbii, wskazująca bariery rozwoju i rekomendacje na rzecz bardziej zdecentralizowanej, demokratycznej i zrównoważonej energetyki.',
    authors: ['CoopTech Hub', 'Fundacja im. Heinricha Bölla w Warszawie'],
    date: '11.12.2023',
    tag: 'energetyka',
    attachment: {
      label: 'Pobierz raport (PDF)',
      url: '/assets/publications/power-to-the-people.pdf',
    },
  },
  {
    id: 'regeneracja-spoleczenstwo',
    title: 'Regeneracja! Społeczeństwo',
    description:
      'Jakim społeczeństwem powinniśmy się stać w obliczu stojących przed nami wyzwań? Ebook w trzech częściach — Krytyka, Zmiana, Odnowa — łączy eseje i wywiady o obywatelstwie, ekonomii spółdzielczej i rozwoju lokalnym.',
    authors: ['Stanisław Mocek', 'Jan Oleszczuk-Zygmuntowski', 'Andrzej Rychard', 'i inni autorzy'],
    date: '30.10.2023',
    tag: 'rozwoj-lokalny',
    attachment: {
      label: 'Pobierz raport (PDF)',
      url: '/assets/publications/regeneracja-spoleczenstwo.pdf',
    },
  },
  {
    id: 'krakowska-energetyka-obywatelska',
    title: 'Krakowska Energetyka Obywatelska',
    description:
      'Analizujemy krakowskie doświadczenia i opisujemy modele współpracy mieszkańców, miasta oraz instytucji naukowych powstałe w ramach programu wsparcia tworzenia społeczności energetycznych w Krakowie.',
    authors: ['CoopTech Hub', 'Enercode', 'Urząd Miasta Krakowa'],
    date: '27.09.2023',
    tag: 'energetyka',
    thumbnailUrl: '/assets/covers/krakowska-energetyka-obywatelska.png',
    attachment: {
      label: 'Pobierz raport (PDF)',
      url: '/assets/publications/krakowska-energetyka-obywatelska.pdf',
    },
  },
  {
    id: 'spoldzielnia-rownokregi',
    title: 'Spółdzielnia Równokręgi',
    description:
      'Wzajemna opieka i wsparcie to zasady, którymi powinny kierować się wszystkie społeczności lokalne. Model spółdzielczy dla organizacji opiekuńczych inspirowany kręgami wsparcia osób z niepełnosprawnościami.',
    authors: ['Joanna Erbel', 'Rafał Krenz', 'Nadia Oleszczuk-Zygmuntowska', 'Aleksandra Taran'],
    date: '14.09.2023',
    tag: 'rozwoj-lokalny',
    attachment: {
      label: 'Pobierz raport (PDF)',
      url: '/assets/publications/spoldzielnia-rownokregi.pdf',
    },
  },
  {
    id: 'spoldzielcza-farma-miejska',
    title: 'Spółdzielcza farma miejska',
    description:
      'Spółdzielcza farma miejska jako narzędzie rozwoju miejskiej strefy żywicielskiej i agroekologii — podsumowanie pół roku pracy nad modelami dla farm w Warszawie i Krakowie, w duchu idei Jadalnego Miasta.',
    authors: ['Joanna Erbel', 'Maja Kudła', 'Maciej Łepkowski', 'Katarzyna Przyjemska-Grzesik'],
    date: '28.06.2023',
    tag: 'rozwoj-lokalny',
    attachment: {
      label: 'Pobierz raport (PDF)',
      url: '/assets/publications/spoldzielcza-farma-miejska.pdf',
    },
  },
  {
    id: 'pakiet-miejskiej-odpornosci',
    title: 'Pakiet Miejskiej Odporności',
    description:
      'Zestaw rozwiązań umożliwiających miastom radzenie sobie z wyzwaniami niesionymi przez obecne burzliwe czasy — model spółdzielni rozwojowej oparty na współwłasności, współinwestowaniu i współzarządzaniu.',
    authors: ['Wojciech Bielecki', 'Joanna Erbel', 'Zofia Krajewska', 'Rafał Krenz', 'Aleksandra Taran', 'Jan J. Zygmuntowski'],
    date: '21.11.2022',
    tag: 'rozwoj-lokalny',
    attachment: {
      label: 'Pobierz raport (PDF)',
      url: '/assets/publications/pakiet-miejskiej-odpornosci.pdf',
    },
  },
  {
    id: 'manual-spolecznosci-energetycznych',
    title: 'Manual Społeczności Energetycznych',
    description:
      'Manifest na rzecz budowania społeczności energetycznych i kompleksowy przewodnik po modelach, korzyściach, finansowaniu oraz krok-po-kroku procesie zakładania społeczności energetycznych w Polsce.',
    authors: ['Nina Józefina Bąk', 'Tomasz Chmiel', 'Weronika Grzejszczak', 'Bartłomiej Kupiec', 'Rafał Krenz', 'Michał Szymczuk'],
    date: '19.05.2022',
    tag: 'energetyka',
    attachment: {
      label: 'Pobierz manual (PDF)',
      url: '/assets/publications/manual-spolecznosci-energetycznych.pdf',
    },
  },
  {
    id: 'inicjatywa-nowa-solidarnosc',
    title: 'Inicjatywa Nowa Solidarność',
    description:
      'Wspólny wysiłek ekspertów wobec bezprecedensowego kryzysu humanitarnego wywołanego rosyjską agresją na Ukrainę — rekomendacje dla sprawnego zarządzania państwem i przyjęcia milionów uchodźców.',
    authors: ['Centrum Polityk Publicznych Uniwersytetu Ekonomicznego w Krakowie', 'Jan J. Zygmuntowski', 'Joanna Erbel'],
    date: '23.03.2022',
    tag: 'rozwoj-lokalny',
    attachment: {
      label: 'Pobierz raport (PDF)',
      url: '/assets/publications/inicjatywa-nowa-solidarnosc.pdf',
    },
  },
  {
    id: 'spoldzielcza-transformacja-sprawiedliwa-transformacja-operacjonalizacja',
    title: 'Spółdzielcza transformacja: Operacjonalizacja sprawiedliwej transformacji dla regionów węglowych w Polsce',
    description:
      'Model transformacji tworzący stabilny rynek pracy i lokalny rozwój gospodarczy dla regionów węglowych w Polsce, oparty na gwarancjach zatrudnienia, spółdzielniach rozwojowych i zielonych inwestycjach.',
    authors: ['Wojciech Bielecki', 'Joanna Erbel', 'Łukasz Komuda', 'Michał Szczerba', 'Jan J. Zygmuntowski'],
    date: '19.01.2022',
    tag: 'energetyka',
    attachment: {
      label: 'Pobierz raport (PDF)',
      url: '/assets/publications/spoldzielcza-transformacja-sprawiedliwa-transformacja-operacjonalizacja.pdf',
    },
  },
  {
    id: 'manual-spoldzielczy',
    title: 'Manual Spółdzielczy',
    description:
      'Przewodnik po (prawie) wszystkim, co warto wiedzieć o spółdzielczości, ale nie było kogo zapytać — praktyczne wsparcie w stawianiu pierwszych kroków w spółdzielczej przygodzie.',
    authors: ['Nina Józefina Bąk'],
    date: '10.11.2021',
    tag: 'rozwoj-lokalny',
    attachment: {
      label: 'Pobierz manual (PDF)',
      url: 'https://www.hub.coop/wp-content/uploads/2021/11/Manual-Spóldzielczy-mobilny.pdf',
    },
  },
  {
    id: 'spoldzielczy-plan-odbudowy',
    title: 'Spółdzielczy Plan Odbudowy',
    description:
      'Tworzenie wspólnoty opartej o zaufanie przez restart spółdzielczości — model odbudowy oparty na demokratycznej własności, zarządzaniu i współpracy w erze cyfrowej transformacji.',
    authors: ['Nina Józefina Bąk', 'Joanna Erbel', 'Jakub Galiński', 'Piotr Małańczuk', 'Michał Pasierbski', 'Jan J. Zygmuntowski'],
    date: '22.09.2021',
    tag: 'cyfryzacja',
    attachment: {
      label: 'Pobierz raport (PDF)',
      url: '/assets/publications/spoldzielczy-plan-odbudowy.pdf',
    },
  },
  {
    id: 'cooptech-platformowy-kooperatyzm-jako-silnik-solidarnego-rozwoju',
    title: '#CoopTech: Platformowy kooperatyzm jako silnik solidarnego rozwoju',
    description:
      'Badanie nowego trendu w europejskiej przedsiębiorczości technologicznej — spółdzielnie platformowe, które stawiają zrównoważony rozwój, solidarność i otwartość w opozycji do modeli Big Techów.',
    authors: ['Fundacja Instrat'],
    date: '21.11.2019',
    tag: 'cyfryzacja',
    attachment: {
      label: 'Pobierz raport (PDF)',
      url: '/assets/publications/cooptech-platformowy-kooperatyzm-jako-silnik-solidarnego-rozwoju.pdf',
    },
  },
];

export const publications = [...rawPublications].sort(
  (a, b) => parseDate(b.date) - parseDate(a.date),
);

export function getFeaturedPublications(limit = 3) {
  return publications.slice(0, limit);
}

export function getHighlightedPublications(offset = 3, limit = 2) {
  return publications.slice(offset, offset + limit);
}

export function getFirstPublicationByTag(tag) {
  return publications.find((publication) => publication.tag === tag);
}

export function getPublicationsByTag(tag, limit = 3) {
  return publications.filter((publication) => publication.tag === tag).slice(0, limit);
}
