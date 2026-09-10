# Landingpage – Kapitalanlage Berlin (Bernhard Wenzler Immobilien)

Schlanke, statische Lead-Gen-Landingpage für die Vermittlung eines Mehrfamilienhauses in Berlin
als Kapitalanlage. Zielgruppe: Investoren aus Zürich, Frankfurt, Stuttgart und der DACH-Region.
Anfragen aus dem Formular werden **per E-Mail** an den Makler zugestellt (kein eigener Server nötig).

## Aufbau

| Datei | Zweck |
|-------|-------|
| `index.html` | Landingpage inkl. Anfrageformular |
| `styles.css` | Design / Layout |
| `script.js` | Formular-Validierung + E-Mail-Versand (Web3Forms) |
| `datenschutz.html` | Datenschutzerklärung (DSGVO-Vorlage) |
| `assets/favicon.svg` | Favicon (Platzhalter „BW") |

---

## Stand

**Bereits eingepflegt:** Objektdaten (16 WE, Berlin-Oberschöneweide, Wohn-/Grundstücksfläche,
Baujahr, Jahresmiete, Angebotspreis, Energieausweis, Modernisierungen), Kontaktdaten
(Tel. +49 171 7785713, bernhard.wenzler@lbs-sw.de), Impressum verlinkt extern auf
lbs-immosw.de/impressum. Kein Logo (wie gewünscht) – stattdessen Namens-Wortmarke.

## ✅ Was noch fehlt (vor dem Livegang)

### 1. E-Mail-Benachrichtigung aktivieren (der eine wichtige Schritt)
- Kostenloses Konto anlegen auf **https://web3forms.com** (nur eine E-Mail-Adresse nötig).
- Als Empfänger `bernhard.wenzler@lbs-sw.de` hinterlegen.
- Den erzeugten **Access Key** in `script.js` bei `WEB3FORMS_ACCESS_KEY` eintragen.
- → Danach kommt jede Formular-Anfrage automatisch als E-Mail an. Solange kein Key
  hinterlegt ist, zeigt das Formular einen entsprechenden Hinweis an.

### 2. Bilder (optional, aber empfohlen)
- **Objektfotos** in `assets/` legen und im Bereich „Das Objekt" die Platzhalter-Box durch
  `<img src="assets/objekt-1.jpg" …>` ersetzen.
- **Titelbild** für die Werbeanzeigen-Vorschau (`og:image` im `<head>`, 1200×630 px).
- Optional: Foto von Bernhard Wenzler im Bereich „Ihr Ansprechpartner".

### 3. Datenschutz prüfen
- `datenschutz.html` ist als DSGVO-Vorlage mit den echten Kontaktdaten hinterlegt.
- **Falls Meta-Pixel / Google-Ads-Tracking** eingesetzt wird → Tracking-Abschnitt ergänzen
  und ein Cookie-Banner einbauen. Alternativ kann auf die offizielle Datenschutzseite von
  lbs-immosw.de verlinkt werden (dann Link im Footer + im Formular anpassen).

### 4. Domain & Hosting
- Einfachste Variante: **GitHub Pages** aktivieren (Settings → Pages → Branch `main`).
  Die Datei `.nojekyll` liegt bereits bei.
- Eigene Domain kann per `CNAME` verbunden werden.

---

## Lokal testen

Einfach `index.html` im Browser öffnen. Für einen echten Formular-Test muss zuvor der
Web3Forms Access Key (Punkt 1) eingetragen sein.
