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
- **Primärtext & Überschrift** (im Ads Manager separat) z. B.:
  - Primärtext: „Gepflegtes Mehrfamilienhaus in Berlin-Oberschöneweide –
    16 Wohneinheiten, solide vermietet. Exposé jetzt unverbindlich anfordern."
  - Überschrift: „Kapitalanlage in Berlin"
  - Call-to-Action-Button: „Mehr dazu" / „Angebot einholen"
- **Zielseite:** die Landingpage (nach Livegang die finale Domain eintragen).

## Neu erzeugen / anpassen
Quelle: `creatives.src.html` (alle vier Artboards). Nach Änderungen mit
Playwright rendern (Chromium, deviceScaleFactor 2), Artboards per Element-ID
`#sq-a`, `#sq-b`, `#story`, `#land` als JPG exportieren.
