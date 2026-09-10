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
| `impressum.html` | Impressum (Vorlage – ausfüllen) |
| `datenschutz.html` | Datenschutzerklärung (Vorlage – ausfüllen) |
| `assets/favicon.svg` | Favicon (Platzhalter „BW") |

---

## ✅ Was noch gebraucht wird (Checkliste vor dem Livegang)

Die Seite ist technisch fertig. Damit sie „scharf" geschaltet werden kann, fehlen nur noch die
echten Inhalte. Alle Stellen sind im Code mit `[ … ]` bzw. `TODO` markiert.

### 1. E-Mail-Benachrichtigung aktivieren (wichtigster Punkt)
- Kostenloses Konto anlegen auf **https://web3forms.com** (nur eine E-Mail-Adresse nötig).
- Als Empfänger die E-Mail-Adresse hinterlegen, an die Anfragen gehen sollen (Bernhards Postfach).
- Den erzeugten **Access Key** in `script.js` bei `WEB3FORMS_ACCESS_KEY` eintragen.
- → Danach kommt jede Formular-Anfrage automatisch als E-Mail an.
  (Alternativen wie Formspree o. Ä. sind ebenso möglich – dann Endpoint in `script.js` anpassen.)

### 2. Objektdaten des Berliner Mehrfamilienhauses
In `index.html` (Bereiche „Hero" und „Objektdaten") ersetzen:
- Anzahl Wohn-/Gewerbeeinheiten, Wohnfläche, Baujahr, Bezirk/Lage
- Bruttomietrendite / Jahresnettomiete
- Kaufpreis (aktuell „auf Anfrage") – je nach Wunsch
- **Objektfotos** in `assets/` legen und die Platzhalter-Boxen durch `<img>` ersetzen
- Optional: Titelbild für die Werbeanzeigen-Vorschau (`og:image`, 1200×630 px)

### 3. Logo & Kontaktdaten
- Logo als `assets/logo.svg` (oder `.png`) hinterlegen und im Header die Wortmarke ersetzen
  (Kommentar `TODO: Logo` in `index.html`).
- Echte **Telefonnummer** und **E-Mail** an allen `[+49 …]` / `[info@ …]`-Stellen eintragen
  (Header, Ansprechpartner-Bereich, Footer, Rechtsseiten).
- Optional: Foto von Bernhard Wenzler im Bereich „Ihr Ansprechpartner".

### 4. Rechtstexte (Pflicht für Werbeanzeigen!)
- `impressum.html`: alle `[ … ]`-Felder ausfüllen (Name, Anschrift, § 34c GewO-Angaben, USt-ID …).
- `datenschutz.html`: an tatsächlich genutzte Dienste anpassen (v. a. **falls Meta-Pixel / Google
  Ads Tracking** eingesetzt wird → Tracking-Abschnitt + ggf. Cookie-Banner ergänzen).
- Hinweiskästen (gelb) nach dem Ausfüllen entfernen.

### 5. Domain & Hosting
- Einfachste Variante: **GitHub Pages** aktivieren (Settings → Pages → Branch `main`).
  Die Datei `.nojekyll` liegt bereits bei.
- Eigene Domain (z. B. `investment-berlin.de`) kann per `CNAME` verbunden werden.

---

## Lokal testen

Einfach `index.html` im Browser öffnen. Für einen echten Formular-Test muss zuvor der
Web3Forms Access Key (Punkt 1) eingetragen sein.
