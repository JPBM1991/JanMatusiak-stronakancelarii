# Instrukcja dodawania artykułów — SEO

## Gdzie dodawać pliki

- **PL:** `content/posts/nazwa-artykulu.mdx`
- **EN:** `content/posts-en/article-name.mdx`

Nazwa pliku = slug URL. Używaj myślników, bez polskich znaków.
Przykład: `content/posts/odpowiedzialnosc-czlonkow-zarzadu.mdx`

---

## Szablon frontmatter (obowiązkowy)

```mdx
---
title: "Odpowiedzialność członków zarządu sp. z o.o. — kiedy odpowiadają majątkiem?"
date: "2026-05-10"
excerpt: "Członkowie zarządu mogą odpowiadać osobistym majątkiem za długi spółki. Wyjaśniam kiedy ta odpowiedzialność powstaje i jak się przed nią chronić."
category: "Prawo spółek"
readTime: "6 min"
---
```

---

## Zasady SEO dla każdego artykułu

### `title` — tytuł (pojawia się w Google jako nagłówek wyniku)
- Zawiera konkretne słowo kluczowe, np. "odpowiedzialność zarządu sp. z o.o."
- Długość: 50–65 znaków
- Forma pytania lub z myślnikiem działa dobrze: "X — jak to działa?" / "Kiedy Y jest możliwe?"
- **Nie:** "Aktualności prawne", "Nowy artykuł", ogólniki

### `excerpt` — opis (pojawia się pod tytułem w Google)
- 140–160 znaków
- Zawiera słowo kluczowe z tytułu
- Odpowiada na pytanie: co czytelnik się dowie i dlaczego warto kliknąć
- Piszesz do człowieka który szuka pomocy — konkretnie i bez żargonu

### `category` — kategoria (widoczna na stronie artykułu)
Używaj spójnie jednej z tych kategorii:
- `Prawo spółek`
- `Kontrakty`
- `Postępowania sporne`
- `Majątek`
- `Prawo pracy`

### `readTime`
Przybliżony czas czytania: "4 min", "6 min", "8 min" (ok. 200 słów/min)

### `date`
Format: `YYYY-MM-DD`. Data publikacji widoczna na stronie i w sitemap.

---

## Struktura treści artykułu

```mdx
Krótkie wprowadzenie — 2-3 zdania kontekstu. Bez nagłówka.

## Nagłówek H2 — konkretny, z słowem kluczowym

Treść sekcji...

## Drugi nagłówek H2

Treść...

### Podnagłówek H3 jeśli potrzebny

---

Krótkie podsumowanie lub wniosek praktyczny.
```

**Dostępne elementy MDX:**
- `## H2`, `### H3` — nagłówki sekcji
- `**bold**` — pogrubienie ważnych pojęć
- `- lista` — lista punktowana
- `1. lista` — lista numerowana
- `> cytat` — cytat (np. fragment przepisu)
- `---` — linia podziału

---

## SEO on-page w treści

1. **Słowo kluczowe w pierwszym akapicie** — naturalnie, nie na siłę
2. **Nagłówki H2 zawierają warianty słowa kluczowego** — np. jeśli temat to "odpowiedzialność zarządu", H2 mogą być: "Podstawy prawne odpowiedzialności", "Kiedy zarząd odpowiada solidarnie"
3. **Długość minimum 600 słów** — krótsze artykuły Google traktuje jako thin content
4. **Linki wewnętrzne** — jeśli piszesz o spółkach, linkuj do `/praktyka` lub innego powiązanego artykułu
5. **Jeden temat = jeden artykuł** — nie pisz "wszystko o prawie spółek" tylko "wyjście wspólnika ze sp. z o.o."

---

## Wersja angielska

Każdy artykuł PL powinien mieć odpowiednik EN:
- Ten sam slug po angielsku: `content/posts-en/liability-of-board-members.mdx`
- Przetłumaczone `title`, `excerpt`, `category` (po angielsku)
- `category` EN: `Corporate Law`, `Contracts`, `Litigation`, `Assets`, `Employment Law`

---

## Checklist przed publikacją

- [ ] `title` ma słowo kluczowe i mieści się w 65 znakach
- [ ] `excerpt` ma 140–160 znaków i zachęca do kliknięcia
- [ ] `date` ustawiona poprawnie
- [ ] `category` z listy powyżej
- [ ] Artykuł ma minimum 600 słów
- [ ] Słowo kluczowe pojawia się w pierwszym akapicie
- [ ] Jest wersja EN w `content/posts-en/`
- [ ] Commit i push → Vercel deployuje automatycznie
