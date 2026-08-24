const logoFiles = [
  'bos-bank.png',
  'collegium-civitas.png',
  'fabryka-pelna-zycia.png',
  'gzm.png',
  'heinrich-boll.png',
  'koalicja.png',
  'konfederacja-pracy-mlodych.png',
  'life.png',
  'opzz.png',
  'otwarty-jazdow.png',
  'polska-siec-ekonomii.png',
  'ramboll-fonden.png',
  'rescoop.png',
  'tak-ladnie.png',
  'z-go.png',
  'zarzad-zieleni-miejskiej.png',
];

export const logoItems = logoFiles.map((file) => ({
  id: file,
  src: `/assets/logo/${file}`,
  alt: file.replace(/\.[^.]+$/, ''),
}));

export const logoRows = [
  logoItems.filter((_, index) => index % 2 === 0),
  logoItems.filter((_, index) => index % 2 === 1),
];
