# Meta-Anzeigen-Creatives

Fertige Werbemittel für Facebook/Instagram im Design der Landingpage
(Navy/Gold, Playfair/Inter), mit den Objektfotos.

| Datei | Format | Empfohlene Platzierung |
|-------|--------|------------------------|
| `feed-1080x1080-fassade.jpg`  | 1:1 (1080×1080) | Facebook/Instagram Feed |
| `feed-1080x1080-innenhof.jpg` | 1:1 (1080×1080) | Feed – 2. Variante für A/B-Test |
| `story-1080x1920.jpg`         | 9:16 (1080×1920) | Stories & Reels |
| `link-1200x628.jpg`           | 1.91:1 (1200×628) | Feed-Link / rechte Spalte |

*Auflösung: in 2× gerendert (z. B. Feed = 2160×2160) für maximale Schärfe;
Meta skaliert automatisch herunter.*

## Hinweise für die Schaltung
- **A/B-Test:** Fassaden- und Innenhof-Variante gegeneinander laufen lassen.
- **Story/Reels-Safe-Zone:** Kerninfos liegen mittig; oben/unten hält Meta
  Platz für Profil und Button frei – Text ist bewusst nicht ganz am Rand.
- **Überschrift:** „Kapitalanlage in Berlin – für Investoren"
- **Call-to-Action-Button:** „Mehr dazu" / „Angebot einholen"
- **Zielseite:** die Landingpage (nach Livegang die finale Domain eintragen).

## ⚖️ Pflicht-Caption (Primärtext) – bitte 1:1 so übernehmen

Bei gewerblichen Immobilienanzeigen müssen die Energieausweis-Angaben nach
**§ 87 GEG** in der Anzeige selbst stehen – daher gehören sie in den Meta-Primärtext:

> 🏙️ **Kapitalanlage in Berlin – Mehrfamilienhaus für Investoren**
>
> Gepflegtes Mehrfamilienhaus mit 16 Wohneinheiten in Berlin-Oberschöneweide
> (Treptow-Köpenick), unweit der neuen Spreeuferpromenade. Vermietetes
> Anlageobjekt · ca. 1.134 m² Wohnfläche · Baujahr ca. 1914 ·
> Angebotspreis 3.200.000 €.
>
> 👉 Jetzt unverbindlich das Exposé anfordern.
>
> Angaben gem. § 87 GEG: Verbrauchsausweis · Endenergieverbrauch 143,80 kWh/(m²·a) ·
> wesentl. Energieträger Gas · Baujahr 1914 · Energieeffizienzklasse [BITTE AUS
> ENERGIEAUSWEIS ERGÄNZEN]. Käuferprovision: [Höhe eintragen] inkl. MwSt.
>
> Alle Angaben ohne Gewähr, Irrtümer und Zwischenverkauf vorbehalten. Kein
> Renditeversprechen, keine Anlageberatung. Anbieter/Impressum: lbs-immosw.de/impressum

**Vor dem Schalten zwingend ergänzen:**
1. **Energieeffizienzklasse** aus dem gültigen Energieausweis (Pflicht nach § 87 GEG,
   sofern der Ausweis eine Klasse ausweist – bei Ausweisen ab Mai 2014 der Fall).
2. **Käuferprovision** (Höhe inkl. MwSt.) – oder „provisionsfrei", falls zutreffend.

> **Hinweis:** Keine Rechtsberatung. Dies deckt die üblichen Pflichtangaben
> (v. a. GEG-Energiedaten) und empfohlenen Haftungshinweise ab. Für die Ad-Schaltung
> zusätzlich die Meta-Werberichtlinien beachten. Eine finale rechtliche Prüfung
> (z. B. durch die LBS-Marketingfreigabe) wird empfohlen.

## Neu erzeugen / anpassen
Quelle: `creatives.src.html` (alle vier Artboards). Nach Änderungen mit
Playwright rendern (Chromium, deviceScaleFactor 2), Artboards per Element-ID
`#sq-a`, `#sq-b`, `#story`, `#land` als JPG exportieren.
