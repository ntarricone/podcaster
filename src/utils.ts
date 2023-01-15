export const normalizeString = (string: string): string => {
  let normalizedString = string.toLowerCase();
  normalizedString = normalizedString.normalize('NFD').replace(/\p{Diacritic}/gu, '');

  return normalizedString;
};
