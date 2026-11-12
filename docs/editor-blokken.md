# Blokken-cheatsheet (Pages CMS)

Korte referentie voor redacteuren: **wanneer welk blok**, en **welke instellingen** ertoe doen.

Werkwijze in de CMS: **Pages** → pagina → **Page sections** → **Add** → invullen → slepen → **Save**.

---

## Gedeelde instellingen

### Section theme (bij bijna elk blok)

| Keuze | Effect |
| --- | --- |
| **Light** | Lichte achtergrond (standaard) |
| **Dark** | Donkere sectie |
| **Brand (green panel)** | Merk/accent-achtergrond |

Gebruik theme om afwisseling in de pagina te maken — niet elke sectie hetzelfde.

### Knoppen (waar beschikbaar)

| Veld | Wat je doet |
| --- | --- |
| **Button text** | Tekst op de knop (verplicht) |
| **Button style** | Primary = gevuld · Secondary = outline |
| **Link to page** | Kies een bestaande pagina (aanbevolen) |
| **Or custom URL** | Alleen voor `/blog/`, externe links, of iets dat geen Page is. **Overschrijft** de page-keuze. |

---

## Welk blok wanneer?

| Blok | Gebruik voor | Niet voor |
| --- | --- | --- |
| **Hero** | Opening van een pagina | Midden/onderaan |
| **Text section** | Langere tekst, uitleg | Lijstjes met titels (→ Features) |
| **Features / cards** | Diensten, voordelen, punten | Q&A (→ FAQ) |
| **Image + text** | Verhaal naast foto | Alleen logo’s (→ Logo strip) |
| **FAQ** | Vragen & antwoorden | Feature-lijst |
| **Call to action** | Afsluitende actie (“neem contact”) | Opening (→ Hero) |
| **Logo strip** | Partners / klanten | Content met lange tekst |
| **Blog posts** | Laatste berichten tonen | Losse blogpost schrijven (→ **Blog**) |

Typische volgorde: **Hero → Text of Image+text → Features → FAQ → CTA** (Logo strip / Blog posts waar het past).

---

## Per blok: instellingen

### 1. Hero

**Doel:** bovenaan — merk, één headline, korte tekst, knoppen, optioneel beeld.

| Instelling | Opties / tip |
| --- | --- |
| Theme | Light / Dark / Brand |
| Layout | **Default (stacked)** · **Split (text + image)** · **Centered** |
| Brand name | Groot merksignaal boven de headline |
| Headline | Belangrijkste regel (verplicht) |
| Short supporting text | Eén korte alinea |
| Buttons | Max. 3 |
| Image + alt | Aanbevolen bij **Split** |

### 2. Text section

**Doel:** kop + rijke tekst (zoals een WYSIWYG-blok).

| Instelling | Opties / tip |
| --- | --- |
| Theme | Light / Dark / Brand |
| Layout | **Default width** · **Narrow (reading width)** · **Full band** |
| Heading | Optionele kop |
| Body | Hoofdtekst (verplicht, rich text) |

### 3. Features / cards list

**Doel:** kop + herhaalbare items (titel + tekst).

| Instelling | Opties / tip |
| --- | --- |
| Theme | Light / Dark / Brand |
| Layout | **Grid** · **Split** · **Compact** |
| Heading / Intro text | Boven de items |
| Feature items | Repeater: **Title** + **Text** per rij |

### 4. Call to action

**Doel:** afsluitende band met actie.

| Instelling | Opties / tip |
| --- | --- |
| Theme | Light / Dark / Brand (Brand werkt vaak sterk hier) |
| Layout | **Default** · **Full band** · **Centered** (standaard) |
| Heading | Verplicht |
| Supporting text | Optioneel |
| Buttons | Max. 3 |

### 5. FAQ

**Doel:** vragen & antwoorden (accordion op de site).

| Instelling | Opties / tip |
| --- | --- |
| Theme | Light / Dark / Brand |
| Layout | **Default** · **Compact** · **Split** |
| Heading / Intro | Optioneel |
| Questions | Repeater: **Question** + **Answer** (rich text) |

### 6. Image + text

**Doel:** foto naast copy.

| Instelling | Opties / tip |
| --- | --- |
| Theme | Light / Dark / Brand |
| Layout | **Image left / text right** · **Text left / image right** · **Split** |
| Heading | Verplicht |
| Text | Rich text |
| Image + alt | Afbeelding verplicht |
| Buttons | Max. 2, optioneel |

### 7. Logo strip

**Doel:** rij partners/klanten.

| Instelling | Opties / tip |
| --- | --- |
| Theme | Light / Dark / Brand |
| Layout | **Default** · **Compact** · **Band** (standaard) |
| Heading | Optioneel |
| Logos | Per rij: **Name** (verplicht) + optionele **Logo image** (zonder image → alleen de naam) |

### 8. Blog posts

**Doel:** toont de nieuwste posts uit de **Blog**-collectie.

| Instelling | Opties / tip |
| --- | --- |
| Theme | Light / Dark / Brand |
| Layout | **Default** · **Compact** · **Split** |
| Heading / Intro | Optioneel |
| How many posts | Aantal, standaard 2 |

Posts zelf schrijf je onder **Blog**, niet in dit blok.

---

## Ook buiten de secties

| In de CMS | Wat het is |
| --- | --- |
| **Site settings** | Sitenaam, tagline, SEO-default, publieke URL |
| **Navigation** | Menu: label + page of custom URL (`/blog/`) |
| **Pages** | Pagina-meta (titel, slug, draft) + **Page sections** |
| **Blog** | Lange artikelen (los van blokpagina’s) |

**Slug:** `home` = homepage `/`. Anders: `about` → `/about/`.

---

## Leerpad (5 minuten)

1. Open **Home** en klap alle **Page sections** open — lees de samenvatting per rij.
2. Voeg tijdelijk elk bloktype één keer toe op een draft-pagina, vul minimale velden, **Save**, bekijk de preview/build.
3. Verwijder of herschik tot de volgorde klopt; gebruik deze cheatsheet alleen nog bij twijfel.

Veldbeschrijvingen in de CMS (grijze hulptekst onder labels) komen uit `.pages.yml` — die zijn de “inline” uitleg tijdens het vullen.
