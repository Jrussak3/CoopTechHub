import regeneratorMiastImage from '../../assets/projects/regenerator-miast.jpg';
import jadalneMiastoImage from '../../assets/projects/jadalne-miasto.jpg';
import zwiazkowaRewolucjaImage from '../../assets/projects/zwiazkowa-rewolucja.jpg';
import lifeCometImage from '../../assets/projects/life-comet.jpg';
import opzzImage from '../../assets/projects/opzz.jpg';
import akademiaGzmImage from '../../assets/projects/akademia-gzm.jpg';
import otwartyJazdowImage from '../../assets/projects/otwarty-jazdow.jpg';
import mostFarmaImage from '../../assets/projects/most-farma.jpg';
import spoldzielczoscKlodzkaImage from '../../assets/projects/spoldzielczosc-klodzka.jpg';

export type ProjectTag = 'cyfryzacja' | 'energetyka' | 'rozwoj-lokalny';

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: ProjectTag;
  url: string;
}

export const projectTagLabels: Record<ProjectTag, string> = {
  cyfryzacja: 'Cyfryzacja',
  energetyka: 'Energetyka',
  'rozwoj-lokalny': 'Rozwój lokalny',
};

export const projects: ProjectItem[] = [
  {
    id: 'regenerator-miast',
    title: 'Regenerator Miast',
    description:
      'Dotychczasowy model rozwoju polskich miast się wyczerpał. Pieniądze z zewnątrz – unijne dotacje, zagraniczny kapitał, tania praca – już nie wystarczą. Potrzebny jest model, który zatrzymuje kapitał w lokalnym obiegu i sprawia, że mieszkańcy stają się współwłaścicielami, a nie tylko odbiorcami usług. Regenerator Miast wspiera przedstawicieli samorządów miast z całej Polski w wypracowaniu modelu rozwojowego, wdrażającego rozwiązania Lokalnych Spółdzielni Rozwojowych.',
    image: regeneratorMiastImage,
    tag: 'rozwoj-lokalny',
    url: 'https://www.hub.coop/nasze-projekty/regenerator-miast/',
  },
  {
    id: 'jadalne-miasto',
    title: 'Jadalne Miasto',
    description:
      'Projekt proponuje zmianę sposobu, w jaki myślimy o mieście jako środowisku życia: nie tylko jako miejscu konsumpcji, ale jako aktywnym producencie pożywienia. Idea ta wykracza daleko poza tradycyjne pojęcie ogródka działkowego czy dekoracyjnej zieleni. Chodzi o głęboką integrację uprawy, przetwórstwa i dystrybucji żywności z tkanką miejską – z podwórzami, dachami, parkami, korytarzami ekologicznymi, wspólnymi kuchniami i lokalnymi targowiskami.',
    image: jadalneMiastoImage,
    tag: 'rozwoj-lokalny',
    url: 'https://www.hub.coop/nasze-projekty/jadalne-miasto/',
  },
  {
    id: 'zwiazkowa-rewolucja',
    title: 'Związkowa Rewolucja – Od Papieru do Cyfryzacji',
    description:
      'Celem projektu jest wsparcie organizacji związkowych w odpowiedzi na wyzwania transformacji cyfrowej rynku pracy. W ramach trzech modułów powstaną rekomendacje systemowe dotyczące cyfryzacji w ruchu związkowym, zostanie opracowany i wdrożony „Asystent Związkowca AI” – narzędzie wspierające codzienną pracę struktur związkowych, a także przeprowadzonych zostanie 8 dwudniowych szkoleń stacjonarnych dla 160 działaczek i działaczy z całej Polski.',
    image: zwiazkowaRewolucjaImage,
    tag: 'cyfryzacja',
    url: 'https://www.hub.coop/zwiazkowa-rewolucja-od-papieru-do-cyfryzacji/',
  },
  {
    id: 'life-comet',
    title: 'LIFE Comet',
    description:
      'Drogą do sprawiedliwej transformacji energetycznej – a więc do czystej, bezpiecznej i zdecentralizowanej energetyki – są społeczności energetyczne. LIFE Comet wspiera tworzenie koalicji energetycznych na poziomie krajowym w krajach Europy Środkowo-Wschodniej. Pomagamy zakładać nowe społeczności energetyczne poprzez szkolenia i pomoc techniczną. Konsorcjum projektu LIFE Comet tworzą spółdzielnie energetyczne i organizacje z ośmiu krajów UE. Naszym celem jest stworzenie siedmiu koalicji i wsparcie 97 nowych obywatelskich inicjatyw energetycznych. Projekt współfinansowany przez Unię Europejską.',
    image: lifeCometImage,
    tag: 'energetyka',
    url: 'https://www.hub.coop/nasze-projekty/life-comet/',
  },
  {
    id: 'cyfrowa-transformacja-opzz',
    title: 'Cyfrowa transformacja OPZZ',
    description:
      'Zbudowaliśmy i wdrożyliśmy narzędzia cyfrowe dla Ogólnopolskiego Porozumienia Związków Zawodowych (OPZZ). Z porad chatbota Nadzieja na platformie www.pracujgodnie.pl skorzystało już ponad pół miliona użytkowników, a 30 ogólnopolskich związków zawodowych korzysta z aplikacji PLZ do usprawnienia codziennej pracy.',
    image: opzzImage,
    tag: 'cyfryzacja',
    url: 'https://www.hub.coop/cyfrowa-transformacja-opzz-case-study/',
  },
  {
    id: 'akademia-miejskiej-odpornosci-gzm',
    title: 'Akademia Miejskiej Odporności dla GZM',
    description:
      'Przeprowadziliśmy Akademię Miejskiej Odporności dla Górnośląsko-Zagłębiowskiej Metropolii, czyli serię warsztatów na temat rozwoju lokalnego w duchu miejskiej odporności w mniejszych miastach. Efektem warsztatów jest Podręcznik Dobrych Praktyk, który niebawem opublikujemy. W Podręczniku zarekomendowaliśmy projekty spółdzielni rozwojowych spersonalizowane do potrzeb każdej z gmin biorących udział w Akademii.',
    image: akademiaGzmImage,
    tag: 'rozwoj-lokalny',
    url: 'https://www.hub.coop/akademia-miejskiej-odpornosci-case-study/',
  },
  {
    id: 'spoldzielnia-otwarty-jazdow',
    title: 'Spółdzielnia Otwarty Jazdów',
    description:
      'W 2023 roku założyliśmy, wraz z siedmioma innymi partnerami, pierwszą miejską spółdzielnię energetyczną - Spółdzielnię Otwarty Jazdów. Nasz model miejskiej spółdzielni energetycznej to nowa jakość obywatelskich społeczności energetycznych.',
    image: otwartyJazdowImage,
    tag: 'energetyka',
    url: 'https://www.hub.coop/spoldzielnia-otwarty-jazdow-case-studies/',
  },
  {
    id: 'most-spoldzielcza-farma-miejska',
    title: 'MOST Spółdzielcza farma miejska',
    description:
      'Powołaliśmy Spółdzielnię MOST, która poprowadzi 3,6 ha farmę miejską w Warszawie. Będzie to pierwszy w Polsce ogólnodostępny park, łączący funkcje uprawy, edukacji i innowacji żywnościowej, prowadzony przez przedsiębiorstwo społeczne.',
    image: mostFarmaImage,
    tag: 'rozwoj-lokalny',
    url: 'https://www.hub.coop/spoldzielcza-farma-miejska-most-case-study/',
  },
  {
    id: 'spoldzielczosc-energetyczna-ziemi-klodzkiej',
    title: 'Spółdzielczość energetyczna ziemi kłodzkiej',
    description:
      'Spółdzielczość energetyczna dynamicznie rozwija się na ziemi kłodzkiej. Tamtejsi mieszkańcy zdecydowali się wziąć aktywny udział w transformacji energetycznej. CoopTech Hub, jako pionierski inkubator społeczności energetycznych w Polsce, odegrał rolę w promowaniu i wspieraniu rozwoju nowych spółdzielni energetycznych na obszarze Ziemi Kłodzkiej na etapie koncepcyjnym.',
    image: spoldzielczoscKlodzkaImage,
    tag: 'energetyka',
    url: 'https://www.hub.coop/nasze-projekty/spoldzielczosc-energetyczna-ziemi-klodzkiej-case-study/',
  },
];

export function getProjectsByTag(tag: ProjectTag): ProjectItem[] {
  return projects.filter((project) => project.tag === tag);
}
