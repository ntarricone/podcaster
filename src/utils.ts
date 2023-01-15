export const normalizeString = (string: string): string => {
  let normalizedString = string.toLowerCase();
  normalizedString = normalizedString.normalize('NFD').replace(/\p{Diacritic}/gu, '');

  return normalizedString;
};

export const shortenString = ({
  string,
  characters
}: {
  string: string;
  characters: number;
}): string => {
  if (string?.length > characters) return string.split('').slice(0, characters).join('') + '...';
  return string;
};

export const formatDate = (propDate: string): string => {
  const date = new Date(propDate);
  const f = new Intl.DateTimeFormat('es-us', {
    dateStyle: 'short'
  });

  return f.format(date);
};
