export function normalizeString(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[''`]/g, "'");
}

export function compareNormalized(str1: string, str2: string): boolean {
  return normalizeString(str1).toLowerCase() === normalizeString(str2).toLowerCase();
}

export function includesNormalized(str: string, substring: string): boolean {
  return normalizeString(str).toLowerCase().includes(normalizeString(substring).toLowerCase());
}

export function findNormalized<T>(array: T[], searchTerm: string, getter: (item: T) => string): T | undefined {
  const normalizedSearchTerm = normalizeString(searchTerm);

  return array.find((item) => {
    const normalizedItem = normalizeString(getter(item));
    return normalizedItem.toLowerCase() === normalizedSearchTerm.toLowerCase();
  });
}

export function findSuggestions<T>(
  array: T[],
  searchTerm: string,
  getter: (item: T) => string,
  maxSuggestions: number = 3
): T[] {
  const normalizedSearchTerm = normalizeString(searchTerm).toLowerCase();

  return array
    .map((item) => ({
      item,
      normalizedName: normalizeString(getter(item)).toLowerCase(),
      originalName: getter(item),
    }))
    .filter(({ normalizedName }) => {
      if (normalizedName === normalizedSearchTerm) return true;

      if (normalizedName.includes(normalizedSearchTerm) ||
        normalizedSearchTerm.includes(normalizedName)) return true;

      const commonChars = [...normalizedSearchTerm].filter(char =>
        normalizedName.includes(char)
      ).length;
      const similarity = commonChars / Math.max(normalizedSearchTerm.length, normalizedName.length);
      return similarity >= 0.6;
    })
    .sort((a, b) => {
      if (a.normalizedName === normalizedSearchTerm) return -1;
      if (b.normalizedName === normalizedSearchTerm) return 1;

      const aStartsWith = a.normalizedName.startsWith(normalizedSearchTerm);
      const bStartsWith = b.normalizedName.startsWith(normalizedSearchTerm);
      if (aStartsWith && !bStartsWith) return -1;
      if (!aStartsWith && bStartsWith) return 1;

      const aScore = Math.abs(a.normalizedName.length - normalizedSearchTerm.length);
      const bScore = Math.abs(b.normalizedName.length - normalizedSearchTerm.length);
      return aScore - bScore;
    })
    .slice(0, maxSuggestions)
    .map(({ item }) => item);
}
