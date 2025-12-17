# Translations

This directory contains type-safe translations for the application.

## Structure

- `types.ts` - TypeScript type definitions that define all translation keys
- `en.ts` - English translations
- `es.ts` - Spanish translations
- `index.ts` - Exports all translations

## Type Safety

The translation system uses TypeScript to ensure both language files have the same keys:

1. **`TranslationKeys` type** - Defines all required translation keys
2. **`EnsureAllKeys<T>` helper** - Ensures a translation object has all required keys

### How it works

Each translation file (e.g., `en.ts`, `es.ts`) uses the `EnsureAllKeys` helper:

```typescript
export const en: EnsureAllKeys<TranslationKeys> = {
  // ... translations
};
```

If you:
- **Add a new key** to `types.ts` - TypeScript will error in both `en.ts` and `es.ts` until you add the translation
- **Remove a key** from `types.ts` - TypeScript will error if the key still exists in translation files
- **Miss a key** in one language file - TypeScript will show an error

### Example: Adding a new translation

1. Add the key to `types.ts`:
```typescript
export type TranslationKeys = {
  // ... existing keys
  "new.section.title": string;
};
```

2. TypeScript will now error in both `en.ts` and `es.ts` until you add:
```typescript
// en.ts
"new.section.title": "New Section",

// es.ts
"new.section.title": "Nueva Sección",
```

3. Once both files have the key, the error disappears!

## Usage

Translations are imported in components:

```typescript
import { translations } from "../translations";
```

The translations object is then passed to client-side scripts via Astro's `define:vars`:

```astro
<script define:vars={{ translations }}>
  // translations is now available in the browser
</script>
```
