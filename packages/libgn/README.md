# `libgn`

**`libgn`** is a TypeScript/JavaScript library that makes it easy to access and manipulate geographical and administrative data about Guinea.

![NPM Version](https://img.shields.io/npm/v/libgn?logo=npm)

## Installation

```bash
npm install libgn
```

or with pnpm:

```bash
pnpm add libgn
```

## Usage

```typescript
import libgn from "libgn";

// Get all regions of Guinea
console.log(libgn.allRegionNames);
// Result: ["Boké", "Conakry", "Faranah", "Kankan", "Kindia", "Labé", "Mamou", "N'Zérékoré"]

// Get basic information about Guinea
console.log(libgn.basicInfo);
// Result: { name: "Guinée", capital: "Conakry", motto: "Travail, Justice, Solidarité", ... }
```

## API Reference

### General Information

```typescript
// Basic information about Guinea
libgn.basicInfo
// Returns: { name, capital, motto, flag, isoCode, callingCode, population, area, currency }

// Capital
libgn.capital
// Returns: "Conakry"

// Languages
libgn.languages
// Returns: { official: "Français", national: ["Pular", "Maninka", "Susu", ...] }
```

### Regions

```typescript
// All regions with their complete data
libgn.allRegions
// Returns: Array<Region>

// Names of all regions
libgn.allRegionNames
// Returns: ["Boké", "Conakry", "Faranah", "Kankan", "Kindia", "Labé", "Mamou", "N'Zérékoré"]

// Codes of all regions
libgn.allRegionCodes
// Returns: ["BK", "CK", "FR", "KK", "KD", "LB", "MM", "NZ"]

// Prefectures of a specific region
libgn.getPrefecturesByRegion("Conakry")
// Returns: ["Conakry"]

// Population of a region
libgn.getRegionPopulation("Conakry")
// Returns: 1667864

// Area of a region (in km²)
libgn.getRegionArea("Conakry")
// Returns: 450
```

### Prefectures

```typescript
// All prefectures
libgn.allPrefectureNames
// Returns: ["Boké", "Boffa", "Fria", "Gaoual", "Koundara", "Conakry", ...]

// Sub-prefectures of a prefecture
libgn.getSubPrefecturesByPrefecture("Conakry")
// Returns: ["Kaloum", "Dixinn", "Matam", "Ratoma", "Matoto"]

// Region of a prefecture
libgn.getRegionOfPrefecture("Conakry")
// Returns: "Conakry"
```

### Neighborhoods (Conakry only)

```typescript
// All neighborhoods of Conakry
libgn.allNeighborhoods
// Returns: ["Miniere Cité Secteur 2", "KASSA", "BOULBINET", ...]

// Neighborhoods of a specific sub-prefecture
libgn.getNeighborhoodsBySubPrefecture("Dixinn")
// Returns: ["Miniere Cité Secteur 2", "Cameroun Secteur 1", ...]
```

## Error Handling

The library includes specific error classes for better error handling:

```typescript
import {
  RegionReferenceError,
  PrefectureReferenceError,
  SubPrefectureReferenceError
} from "libgn";

try {
  libgn.getPrefecturesByRegion("Non-existent region");
} catch (error) {
  if (error instanceof RegionReferenceError) {
    console.log("Region not found");
  }
}
```

## Development

```bash
# Install dependencies
pnpm install

# Compile TypeScript
pnpm build:pkg

# Development mode (watch)
pnpm dev

# Run tests
pnpm test

# Run tests once
pnpm test:run

# Generate coverage report
pnpm test:coverage

# Linting
pnpm lint

# Linting with auto-fix
pnpm lint:fix
```

## Included Data

- **8 administrative regions**
- **34 prefectures** (official administrative divisions)
- **8 urban communes** (including Conakry's 5 communes)
- **Sub-prefectures** for each prefecture
- **Detailed neighborhoods** (Conakry only)
- **Demographic information** (population, area)
- **Geographical and administrative data**
- **Cultural information** (languages, currency, etc.)

## License

This package is published under [MIT License](LICENSE)

## Support

If you have questions or need help regarding this package, don't hesitate to open an issue on GitHub.
