# Visuelle Richtungsdokumentation — Kartoffelpower Konzept

## Status

Dieses Dokument beschreibt eine private, unverbindliche Designrichtung für eine Konzeptpräsentation. Es ist kein autorisierter Markenauftritt und keine bestätigte Darstellung der Firma Kartoffelpower.

Alle Farben, Texte, Bilder und Gestaltungsdetails in diesem Dokument sind Vorschläge. Sie dürfen erst nach ausdrücklicher Freigabe durch den Auftraggeber in eine veröffentlichungsfähige Website übernommen werden.

## Gesamtstil

Das Konzept soll einen modernen, hochwertigen Eindruck mit einer warmen landwirtschaftlichen und lebensmittelbezogenen Ausstrahlung vermitteln.

Die Gestaltung sollte:

- modern und professionell wirken;
- natürliche Wärme mit klarer Premium-Ästhetik verbinden;
- hochwertige Lebensmittelpräsentation in den Vordergrund stellen;
- Vertrauen, Übersichtlichkeit und einfache Bedienbarkeit vermitteln;
- Produktangebote und Unternehmensinformationen ausgewogen behandeln.

Die Startseite soll der Unternehmensvorstellung und dem Online-Shop gleichermaßen Gewicht geben.

## Konzeptioneller Status

Die folgenden Angaben sind ausdrücklich nicht als bestätigte Markenwerte oder reale Firmendaten zu verstehen:

- vorgeschlagene Farbwerte;
- visuelle Bildwirkung;
- Platzhalterüberschriften;
- demonstrative Produktdarstellungen;
- demonstrative Preiswerte;
- vorgeschlagene Gestaltungselemente;
- illustrative Kontakt- oder Öffnungszeitangaben.

Für reale Inhalte gilt die Dokumentation in `content/README.md`. Keine unbestätigten Firmenangaben dürfen später als Fakten dargestellt werden.

## Farbpalette

### Vorgeschlagene Konzeptfarben

- **Waldfarbe:** `#244832`
- **Warme Creme:** `#E8DCC3`
- **Erntegold:** `#D5A34A`
- **Gebrochenes Weiß:** `#F7F5EF`
- **Dunkler Text:** eine barrierearme neutrale Textfarbe, beispielsweise ein dunkelgrauer oder fast schwarzer Ton

Diese Palette ist ein konzeptioneller Vorschlag und nicht als offiziell bestätigte Markenidentität zu interpretieren.

### Farbverwendung

Die Palette kann wie folgt eingesetzt werden:

- **Waldfarbe:** Hauptfarben für Navigation, Überschriften, Akzente und primäre Aktionen.
- **Warme Creme:** große Flächen, Bildrahmen oder ruhige Hintergrundbereiche.
- **Erntegold:** sparsam für besondere Hervorhebungen, Kennzeichnungen oder dekorative Akzente.
- **Gebrochenes Weiß:** Haupt-Hintergrundfarbe für klare, großzügige Seitenbereiche.
- **Dunkler Text:** primäre Fließtext- und Überschriftenfarbe.

Gold-, creme- oder hellgrüne Elemente müssen nicht allein zur Informationsvermittlung verwendet werden. Alle wichtigen Zustände benötigen zusätzliche visuelle oder textliche Hinweise.

## Typografie

### Überschriften

- Moderne, elegante serifenlose Schrift.
- Klare Gewichtung mit gut unterscheidbaren Hierarchieebenen.
- Keine übermäßig dekorativen oder schwer lesbaren Schriftarten.
- Ausreichende Zeilenhöhe und stabile Abstände.

### Fließtext

- Gut lesbare serifenlose Schrift.
- Angenehme Zeilenlänge und komfortabler Zeilenabstand.
- Klare Größen- und Gewichtsunterschiede gegenüber Überschriften.
- Gute Lesbarkeit auf Mobilgeräten.

### Hierarchieprinzipien

Die Hierarchie sollte mit wenigen konsistenten Größenstufen aufgebaut werden:

1. Seitentitel / Hauptüberschrift
2. Abschnittsüberschriften
3. Unterüberschriften oder Produktnamen
4. Fließtext und Metadaten
5. Buttons, Labels und kleine Hinweise

## Responsive Gestaltung

Die Gestaltung soll mobile-first umgesetzt werden.

### Grundprinzipien

- Layouts beginnen mit einer schmalen, einkolumnigen Darstellung.
- Breakpoints erweitern das Layout erst nach Bedarf auf zwei oder mehr Spalten.
- Navigation muss auf kleinen Bildschirmen klar, bedienbar und zugänglich sein.
- Touch-Ziele sollten ausreichend groß und mit großzügigem Abstand angelegt sein.
- Lange Überschriften und Texte dürfen nicht abgeschnitten oder schlecht umbrochen werden.
- Bilder skalieren proportional und dürfen keine Layoutverschiebungen verursachen.
- Tabellen oder umfangreiche Produktinformationen benötigen auf kleinen Bildschirmen eine klare alternative Darstellung.

### Leistungsmerkmale

- flexible Container und variable Raster;
- großzügige Seitenränder auf Desktop und angemessene Ränder auf Mobilgeräten;
- stabile Komponentenhöhen für wiederkehrende Elemente;
- keine horizontale Bildlaufleiste;
- klare Priorisierung von Shop- und Kontakthandlungen auf kleinen Bildschirmen.

## Barrierefreiheit

### Kontrast und Wahrnehmung

- Alle wesentlichen Text-/Hintergrundkombinationen müssen ausreichenden Kontrast bieten.
- Für normale und kleine Textgrößen ist mindestens WCAG-AA-Kontrast anzustreben.
- Farbige Hervorhebungen dürfen Informationen nicht ausschließlich übermitteln.
- Fokuszustände müssen deutlich sichtbar sein.
- Schrift darf nicht allein durch kleine Größen oder geringe Kontraste versteckt werden.

### Tastaturbedienung

- Alle interaktiven Elemente müssen per Tastatur erreichbar sein.
- Die Fokusreihenfolge muss der visuellen Reihenfolge entsprechen.
- Menü, Formularfelder und Dialoge benötigen erkennbare Tastaturzustände.
- Keine Interaktion darf ausschließlich auf Hover angewiesen sein.
- Unsichtbare oder entfernte Fokusgrenzen sind zu vermeiden.

### Semantik und Benennung

- Die Seite soll eine sinnvolle Überschriftenstruktur verwenden.
- Navigation, Hauptinhalt, Seitenbereiche und Fußzeile benötigen passende semantische Strukturen.
- Buttons und Links erhalten verständliche, sichtbare oder korrekt verknüpfte Labels.
- Bilder erhalten aussagekräftige Alternativtexte, sofern sie inhaltlich relevant sind.
- Dekorative Bilder dürfen mit einem leeren Alternativtext versehen werden.
- Formularfelder benötigen sichtbare Labels und klare Fehlermeldungen.

### Bewegung

- Animationen sollen subtil eingesetzt werden und die Bedienung unterstützen.
- Bewegung darf keine wichtige Information ersetzen.
- Die Präferenz `prefers-reduced-motion` muss vollständig berücksichtigt werden.
- Beim aktivierten reduzierten Bewegungsmodus sind nicht notwendige Übergänge, Parallaxeffekte und dekorativen Bewegungen auszuschalten.

## Bild- und Medienrichtung

- Verwenden werden dürfen nur lizenzierte, eigene oder royaltyfreie Demonstrationsbilder.
- Keine geschützten Fotos oder Logos der bestehenden Website verwenden.
- Kein offizielles Logo darf als Freigabe oder Markenidentität dargestellt werden.
- Bilder sollten eine hochwertige, natürliche und lebensmittelbezogene Wirkung haben.
- Pflanzen-, Landwirtschafts-, Produkt- oder Verpackungsbilder dürfen keine reale Zugehörigkeit behaupten.
- Produktbilder sind klar als Demonstrationsmaterial zu kennzeichnen, wenn keine freigegebenen Originaldaten vorliegen.
- Alternativtext muss die Bedeutung des Bildes beschreiben, nicht nur dessen Dateinamen oder eine generische Bezeichnung.

## Navigation

Die Navigation soll eine klare Trennung für die beiden Zielgruppen ermöglichen:

- **Privatkunden**
- **Großverbraucher**

Zusätzlich sollen wichtige Bereiche etwa für Startseite, Unternehmen, Sortiment beziehungsweise Shop, Kontakt und rechtliche Hinweise zugänglich sein.

Die Sprache der Kundenoberfläche soll vollständig auf Deutsch sein.

## Shop-Handlungsaufforderungen

Shop-Aufrufe dürfen prominent, aber zurückhaltend gestaltet sein.

Geeignete CTA-Hinweise können sein:

- „[DEMOCONZEPT — PRODUKTE ANSEHEN]“
- „[DEMOCONZEPT — ZUM SHOP]“

Bei einer späteren Umsetzung dürfen reale Angebote, Preise, Warenkorbstatus und Checkout-Angaben nur aus freigegebenen Daten stammen. Keine vorgeschlagenen Preise oder Lieferbedingungen dürfen als echte Angebote dargestellt werden.

## Vorgeschlagene Startseitenstruktur

### 1. Header und Navigation

Der Header soll enthalten:

- Platzhalter für die Markenkennzeichnung;
- Desktop- und mobile Navigation;
- klare Wege zu Privatkunden und Großverbrauchern;
- eine zurückhaltende Shop-Handlungsaufforderung;
- auf späteren Freigabephasen Konten-, Warenkorb- oder Kontaktaktionen.

### 2. Hero-Bereich

Der Hero-Bereich soll:

- eine klar definierte Platzhalterüberschrift verwenden;
- die gleichzeitige Relevanz von Unternehmensgeschichte und Shop berücksichtigen;
- optional lizenzfreie Demonstrationsfotografie enthalten;
- eine primäre und gegebenenfalls eine sekundäre CTA-Option anbieten.

Als Platzhalter kann beispielsweise verwendet werden:

> [DEMOCONZEPT — Platzhalterüberschrift für Kartoffelpower]

Das bestehende Firmenslogan darf nicht übernommen oder als freigegebene Überschrift verwendet werden.

### 3. Einführung für Privatkunden und Großverbraucher

Der Bereich soll zwei gleichwertige Einstiegspfade bieten:

- Privatkunden;
- Großverbraucher.

Die Darstellung darf Demonstrationskarten verwenden, solange keine realen Produkte, Leistungen oder Geschäftsaussagen erfunden werden. Nicht verfügbare Angaben werden als Platzhalter gekennzeichnet.

### 4. Vorgestellte Produktkategorien

Der Bereich kann visuell demonstrieren, wie zukünftige Produktgruppen geordnet werden könnten.

Jeder Kategorieeintrag benötigt:

- eine klar gekennzeichnete Demo-Bezeichnung oder einen bestätigten Namen;
- ein lizenzfreies oder eigenes Demonstrationsbild;
- einen eindeutigen Link oder eine Vorschau;
- keine erfundenen Zutaten, Preise oder Verfügbarkeitsangaben.

### 5. Unternehmensgeschichte und Qualität

Dieser Bereich soll die visuelle Gestaltung einer späteren Story-Darstellung prüfen, darf aber keine ungeprüften historischen Aussagen enthalten.

Vorhandene Freigaben sollten als Originaltext aus der Inhaltsstruktur übernommen werden. Fehlt ein bestätigter Inhalt, bleibt der Bereich mit einem Platzhalter gekennzeichnet.

### 6. Shop-Aktion

Die Shop-Sektion soll als eigenständiger, ausgewogener CTA-Bereich geplant werden.

Sie darf nicht vorgeben:

- welche Produkte tatsächlich verkauft werden;
- welche Preise gelten;
- ob Lieferung oder Abholung verfügbar ist;
- welche Öffnungszeiten oder Zeitfenster gelten.

### 7. Kontaktbereich und Footer

Der Kontaktbereich und Footer sollen Platzhalterstrukturen für:

- Anschrift;
- Telefon oder E-Mail;
- Öffnungszeiten;
- Lieferbedingungen;
- Anfahrtslink;
- rechtliche Seiten;
- Datenschutzhinweise;

bereitstellen.

Bis zur Freigabe dürfen diese Felder keine realen oder erfundenen Angaben enthalten.

## Animations- und Interaktionsrichtlinien

Animationen sollten ausschließlich eingesetzt werden, wenn sie:

- die Orientierung verbessern;
- Zustandsänderungen verständlich machen;
- Aufmerksamkeit bewusst lenken;
- keine Barriere schaffen.

Geeignete subtile Effekte sind beispielsweise sanfte Einblendungen, klare Hover-Zustände und kurze Übergänge.

Nicht geeignet sind:

- verlustfreie oder wiederholende Bewegungsloops;
- schnelle Bildwechsel;
- Parallaxeffekte, die die Lesbarkeit beeinträchtigen;
- Hero-Animationen, die Inhalte verdecken oder verzögern.

## Details, die der Eigentümerfreigabe bedürfen

Vor der Implementierung einer öffentlichen oder rechtlich wirksamen Website muss der Auftraggeber mindestens die folgenden Punkte bestätigen:

- offizielle Markenfarben und Abweichungen zur vorgeschlagenen Palette;
- freigegebenes Logo und Verwendungsvorgaben;
- freigegebene deutsche Markenbotschaften und Überschriften;
- bestätigte Unternehmensgeschichte und Qualitätsaussagen;
- vollständige und bestätigte Produktinformationen;
- freigegebene Produktbilder und Bildrechte;
- bestätigte Preise und Verfügbarkeit;
- bestätigte Öffnungszeiten;
- bestätigte Versand- und Abholbedingungen;
- bestätigte Lieferzonen, Gebühren, Mindestbestellwerte und Zeitfenster;
- bestätigte Kontaktdaten und Ansprechpartner;
- rechtlich geprüfte Informationen für Impressum und Datenschutz;
- bestätigte Einwilligungs-, Cookie- und Formulartexte;
- Freigabe des gesamten Inhalts vor Veröffentlichung.

## Umsetzungsvorgaben für eine spätere Phase

Dieses Dokument ist ausschließlich eine Gestaltungsreferenz. Eine spätere Implementierung soll:

- die inhaltliche Quelle `content/` respektieren;
- keine unbestätigten Details als echte Firmendaten ausgeben;
- Demo-Daten klar kennzeichnen;
- wiederverwendbare Komponenten verwenden;
- mobile-first und barrierearm entwickeln;
- die Startseite in der vorgesehenen Reihenfolge umsetzen;
- die Shop-Funktionen erst in einer späteren, ausdrücklich freigegebenen Phase ergänzen;
- das Admin-Dashboard weiterhin bis zur Fertigstellung des öffentlichen Auftritts und Shops zurückstellen.
