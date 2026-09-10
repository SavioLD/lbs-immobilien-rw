/* ============================================================
   Bernhard Wenzler Immobilien – Formular-Logik
   ============================================================

   >>> WICHTIG: HIER DEN WEB3FORMS ACCESS KEY EINTRAGEN <<<
   1. Kostenlos registrieren auf https://web3forms.com  (nur E-Mail-Adresse nötig)
   2. Als Empfänger-E-Mail die Adresse eintragen, an die die Anfragen
      gehen sollen (z. B. Bernhards Postfach).
   3. Den erhaltenen Access Key unten zwischen die Anführungszeichen kopieren.

   Danach landet jede Formular-Anfrage automatisch als E-Mail im Postfach.
   Kein Server / kein Backend nötig – funktioniert auch auf GitHub Pages.
   ============================================================ */

const WEB3FORMS_ACCESS_KEY = "DEIN-WEB3FORMS-ACCESS-KEY";

document.addEventListener("DOMContentLoaded", function () {
  // Jahr im Footer setzen
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Bildergalerie: Hauptbild per Thumbnail wechseln
  var galleryMain = document.getElementById("gallery-main");
  var galleryCaption = document.getElementById("gallery-caption");
  var thumbs = document.querySelectorAll(".gallery-thumbs .thumb");
  thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      if (galleryMain) galleryMain.src = thumb.getAttribute("data-src");
      if (galleryMain) galleryMain.alt = thumb.querySelector("img") ? thumb.querySelector("img").alt : "";
      if (galleryCaption) galleryCaption.textContent = thumb.getAttribute("data-caption") || "";
      thumbs.forEach(function (t) { t.classList.remove("is-active"); });
      thumb.classList.add("is-active");
    });
  });

  var form = document.getElementById("lead-form");
  if (!form) return;

  var accessKeyInput = document.getElementById("access_key");
  if (accessKeyInput) accessKeyInput.value = WEB3FORMS_ACCESS_KEY;

  // Mobile Aktionsleiste ausblenden, sobald das Formular sichtbar wird
  var mobileBar = document.getElementById("mobile-bar");
  var anfrageCard = document.getElementById("anfrage");
  if (mobileBar && anfrageCard && "IntersectionObserver" in window) {
    var barObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        mobileBar.classList.toggle("hidden", entry.isIntersecting);
      });
    }, { threshold: 0.2 });
    barObserver.observe(anfrageCard);
  }

  var resultBox = document.getElementById("form-result");
  var submitBtn = document.getElementById("submit-btn");

  function showResult(type, message) {
    resultBox.className = "form-result " + type;
    resultBox.innerHTML = message;
    resultBox.hidden = false;
  }

  function markInvalid(field, isInvalid) {
    if (field) field.classList.toggle("invalid", isInvalid);
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    resultBox.hidden = true;

    // Grund-Validierung
    var required = ["vorname", "nachname", "email", "stadt"];
    var valid = true;
    required.forEach(function (id) {
      var el = document.getElementById(id);
      var empty = !el || !el.value.trim();
      markInvalid(el, empty);
      if (empty) valid = false;
    });

    var email = document.getElementById("email");
    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      markInvalid(email, true);
      valid = false;
    }

    var consent = document.getElementById("consent");
    var consentWrap = consent ? consent.closest(".consent") : null;
    if (consent && !consent.checked) {
      if (consentWrap) consentWrap.classList.add("invalid");
      valid = false;
    } else if (consentWrap) {
      consentWrap.classList.remove("invalid");
    }

    if (!valid) {
      showResult("error", "Bitte füllen Sie alle Pflichtfelder (*) korrekt aus.");
      return;
    }

    // Schutz: Access Key noch nicht konfiguriert
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "DEIN-WEB3FORMS-ACCESS-KEY") {
      showResult(
        "error",
        "Das Formular ist noch nicht mit einem E-Mail-Empfänger verbunden. " +
        "Bitte in <strong>script.js</strong> den Web3Forms Access Key eintragen."
      );
      return;
    }

    var originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Wird gesendet …";

    try {
      var formData = new FormData(form);
      var response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      var data = await response.json();

      if (data.success) {
        form.reset();
        showResult(
          "success",
          "<strong>Vielen Dank für Ihre Anfrage!</strong><br>" +
          "Wir haben Ihre Nachricht erhalten und melden uns zeitnah persönlich bei Ihnen."
        );
        submitBtn.style.display = "none";
        if (mobileBar) mobileBar.classList.add("hidden");
      } else {
        showResult(
          "error",
          "Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder " +
          "kontaktieren Sie uns direkt telefonisch."
        );
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    } catch (err) {
      showResult(
        "error",
        "Verbindungsfehler. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut."
      );
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });

  // Fehler-Markierung entfernen, sobald der Nutzer tippt
  form.querySelectorAll("input, select, textarea").forEach(function (el) {
    el.addEventListener("input", function () {
      el.classList.remove("invalid");
      var wrap = el.closest(".consent");
      if (wrap) wrap.classList.remove("invalid");
    });
  });
});
