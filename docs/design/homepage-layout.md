# Homepage-Struktur — Kartoffelpower Konzept

## Status

Dieses Dokument beschreibt ausschließlich die geplante Struktur der privaten, unverbindlichen Kartoffelpower-Konzeptstartseite. Es ist keine Implementierungsanweisung und kein autorisierter Unternehmensauftritt.

Alle Texte, Bilder, Produktnamen und Daten sind solange Demonstrationswerte oder Platzhalter, bis sie vom Auftraggeber überprüft und freigegeben wurden.

Die Gestaltung orientiert sich an `docs/design/visual-direction.md`: modern-premium, warm landwirtschaftlich und lebensmittelbezogen, mit der vorgestellten Konzeptpalette aus Waldfarbe `#244832`, warmer Creme `#E8DCC3`, Erntegold `#D5A34A`, gebrochenem Weiß `#F7F5EF` und einer barrierearmen dunklen Neutralfarbe.

## Allgemeine Seitengrundlage

- Die Seite soll auf Deutsch erstellt werden.
- Die Hauptnavigation soll Desktop und Mobilgeräte klar abdecken.
- Die Startseite soll sowohl Unternehmensinhalte als auch einen klaren Shop-Einstieg gleichwertig darstellen.
- Das Layout soll mobile-first aufgebaut werden.
- Große Flächen verwenden gebrochenes Weiß oder warme Creme.
- Waldfarbe ist für Überschriften, Navigation und primäre Aktionen vorgesehen.
- Erntegold wird sparsam als Akzent eingesetzt.
- Keine Animation darf die Orientierung oder Barrierefreiheit beeinträchtigen.
- Jede später implementierte interaktive Komponente benötigt sichtbare Fokuszustände.
- Nicht freigegebene Angaben werden als `[UNVERIFIZIERT]` oder `[DEMOCONZEPT]` gekennzeichnet.

## 1. Header und Navigation

### Zweck

Der Header bietet schnellen Zugriff auf Startseite, Produktbereiche, Unternehmen, Kontakt und Shop. Er soll die klare Zielgruppentrennung unterstützen und den Warenkorbzugang sichtbar, aber zurückhaltend darstellen.

### Navigation

Die Desktop-Navigation enthält:

1. Startseite
2. Produkte
3. Unternehmen
4. Kontakt
5. Shop

Der Shop-Link kann als markante Navigation oder ergänzende primäre Aktion gestaltet werden.

Zusätzlich ist ein Warenkorb-Icon mit verfügbarer Statusanzeige vorzusehen. Die Warenkorb-Funktion ist in dieser Dokumentationsphase nicht zu implementieren.

### Desktop-Layout

- Obere, horizontal ausgerichtete Headerleiste.
- Links Platzhalter oder später freigegebenes Logo.
- Links in der Mitte oder rechtsbündig angeordnet.
- Shop-Aktion hervorgehoben in Waldfarbe oder als klarer Umrissbutton.
- Warenkorb-Icon am rechten Rand.
- Sticky-Verhalten kann geprüft werden, darf den Lesefluss jedoch nicht verdecken.

### Mobile-Konzept

- Kompakte Headerleiste mit Markenplatzhalter oder Wortmarken-Platzhalter.
- Menu-Button mit sichtbar beschriftetem oder umfassend beschriebenem „Menü“-Label.
- Warenkorb-Icon sichtbar halten.
- Navigation als zugängliches Overlay oder klar ausklappbarer Bereich.
- Das Menü enthält dieselben fünf Hauptlinks und ausreichend große Touch-Ziele.
- Beim Öffnen sollen Fokusordnung und vorherige Scrollposition berücksichtigt werden.
- Beim Schließen kehrt der Fokus zum Menu-Button zurück.

### Vorgeschlagene Komponentengrenzen

- `SiteHeader`
- `DesktopNavigation`
- `MobileNavigation`
- `ShopNavigationLink`
- `CartIconButton`
- `BrandPlaceholder`

### Interaktion und Barrierefreiheit

- Navigationslinks erhalten eindeutige aktive beziehungsweise aktuelle Zustände.
- Der Menu-Button verwendet eine verständliche `aria-expanded`-Semantik.
- Escape kann das mobile Menü schließen.
- Tastaturfokus muss innerhalb der offenen mobilen Navigation nicht verloren gehen.
- Das Warenkorb-Icon erhält eine aussagekräftige deutsche Beschriftung, etwa „Warenkorb öffnen“.
- Wenn eine Warenkorb-Anzahl angezeigt wird, darf sie nicht nur farblich kommuniziert werden.

### Freigabe erforderlich

- Freigegebenes Logo oder Wortmarkenbehandlung.
- Offizielle Navigationstitel und Zielseiten.
- Confirmed Warenkorb- und Shop-Verhalten.
- Mobile-Menü-Design und Header-Abmessungen.

## 2. Hero-Bereich

### Zweck

Der Hero-Bereich soll die Seite sofort einführen und die zwei zentralen Angebote des Konzepts sichtbar machen: Unternehmensdarstellung und Shop-Einstieg.

### Inhalt

Der Bereich enthält:

- ein großes, hochwertiges Demonstrationsbild aus Lebensmittelfotografie oder Kartoffelanbau;
- eine klare deutsche Platzhalterüberschrift;
- einen kurzen unterstützenden Platzhaltertext;
- eine primäre CTA zum Shop;
- eine sekundäre CTA zur Unternehmensvorstellung.

Vorgeschlagener Headline-Platzhalter:

> [DEMOCONZEPT — Platzhalterüberschrift für Kartoffelpower]

Vorgeschlagener unterstützender Platzhaltertext:

> [DEMOCONZEPT — Kurzer, nicht verifizierter Beschreibungstext zur Unternehmens- und Produktauswahl]

Es darf kein bestehender Firmen-Slogan verwendet werden.

### Desktop-Layout

- Zweispaltiger Hero-Bereich: Text links, hochformatiges oder weites Demonstrationsbild rechts.
- Alternativ kann eine vollflächige Bildgestaltung mit dezentem Überlagerungsbereich verwendet werden.
- Die Textfläche bleibt klar lesbar und darf keine unkontrollierte Kontrastüberlagerung erzeugen.
- Die primäre CTA ist prominent in Waldfarbe.
- Die sekundäre CTA ist ein ruhiger Textlink oder Umrissbutton.
- Großzügiger Abstand und große Überschrift schaffen Premiumwirkung.

### Mobile-Layout

- Das Demonstrationsbild steht oberhalb oder direkt hinter dem Inhalt.
- Überschrift, unterstützender Text und Aktionen folgen in klarer Reihenfolge.
- Die CTAs stapeln sich auf kleinen Bildschirmen oder bilden nur bei ausreichender Breite nebeneinander liegende Buttons.
- Kein Text wird über stark kontrastierende Bilddetails gelegt, wenn die Lesbarkeit leidet.

### Vorgeschlagene Komponentengrenzen

- `HeroSection`
- `HeroContent`
- `HeroActions`
- `DemonstrationImage`

### Interaktion und Barrierefreiheit

- Der Haupttitel erhält eine eindeutige Seitentitel-Hierarchie.
- Beide CTAs sind echte Links.
- Bildalternativtexte beschreiben die Demonstrationsszene neutral.
- Farben dürfen keine CTA-Bedeutung allein tragen.
- Der Text muss ohne Bild vollständig verständlich bleiben.
- Die Bildkomponente muss stabile Seitenverhältnisse definieren, um Layoutverschiebungen zu vermeiden.
- Bewegungs- oder Parallaxeffekte sind nicht erforderlich.

### Freigabe erforderlich

- Freigegebene Bildrechte.
- Freigegebene Hauptüberschrift.
- Freigegebener unterstützender Text.
- Bestätigte Zielseiten der primären und sekundären CTA.
- Freigegebene Markenbezeichnung und Logo-Verwendung.

## 3. Privatkunden- und Großverbraucherpfade

### Zweck

Dieser Bereich zeigt gleichwertige Einstiegspfade für die beiden Zielgruppen und verhindert eine zu starke Betonung einer Seite.

### Inhalt

Zwei Karten oder Bildspalten:

1. **Privatkunden**
   - Demonstrationsbild;
   - kurze Platzhalterbeschreibung;
   - klarer Link zum entsprechenden Bereich.

2. **Großverbraucher**
   - Demonstrationsbild;
   - kurze Platzhalterbeschreibung;
   - klarer Link zum entsprechenden Bereich.

Die Platzhaltertexte dürfen keine tatsächlichen Leistungen, Preise oder Firmenangebote behaupten.

Beispiel:

> [DEMOCONZEPT — Platzhalterbeschreibung für Privatkunden]

> [DEMOCONZEPT — Platzhalterbeschreibung für Großverbraucher]

### Desktop-Layout

- Zwei gleich breite Karten nebeneinander.
- Jedes Bild erhält ein konsistentes Seitenverhältnis.
- Textbereich und Link werden unten oder rechts positioniert.
- Der Abstand bleibt ausgewogen, ohne eine Zielgruppe künstlich hervorzuheben.

### Mobile-Layout

- Die beiden Karten werden untereinander angeordnet.
- Bilder können über dem Text stehen oder je nach Platz in ein einfaches Querformat wechseln.
- Links bleiben als echte Buttons oder deutliche Textlinks erreichbar.

### Vorgeschlagene Komponentengrenzen

- `CustomerPathwaysSection`
- `CustomerPathwayCard`
- `CustomerPathwayImage`
- `CustomerPathwayLink`

### Interaktion und Barrierefreiheit

- Die gesamte Karte soll nicht als undifferenzierter Link agieren, wenn darin kein eindeutiges Ziel existiert.
- Der sichtbare Link erhält ein passendes deutsches Label.
- Jeder Karte bekommt eine geeignete Überschrift.
- Bilder sind dekorativ oder erhalten eine neutrale Inhaltsbeschreibung.
- Die Karten haben konsistent sichtbare Fokuszustände, falls sie direkt verlinkt werden.

### Freigabe erforderlich

- Offizielle Zielgruppennamen.
- Bestätigte Zielseiten.
- Freigegebene oder lizenzierte Demonstrationsbilder.
- Freigegebene deutsche Beschreibungstexte.

## 4. Vorgestellte Produktkategorien

### Zweck

Dieser Bereich zeigt eine übersichtliche, responsive Kategorieauswahl und dient als visuelle Vorbereitung auf einen späteren Shop.

### Inhalt

Nur Demonstrationskategorien verwenden, etwa klar gekennzeichnete Platzhalterkarten. Namen wie echte Produktnamen dürfen erst nach Prüfung als reale Angebote geführt werden.

Jede Karte enthält:

- eine Demonstrationskategorie;
- ein lizenzfreies oder eigenes Demonstrationsbild;
- eine kurze neutrale Platzhalterbeschreibung;
- einen Link zur jeweiligen Kategorie oder einer Platzhalter-Route.

Der Bereich zeigt keine erfundenen Preise, Verfügbarkeiten, Bewertungen oder Lagerbestände.

### Desktop-Layout

- Responsives Kartenraster.
- Vorgeschlagene Größen: 3 oder 4 Karten pro Reihe auf großen Bildschirmen.
- 2 Karten pro Reihe auf mittleren Bildschirmen.
- 1 Karte pro Reihe auf kleinen Bildschirmen.
- Einheitliche Bildverhältnisse und konsistente Kartentextbereiche.

### Mobile-Layout

- Vertikales Raster oder horizontale Kartenliste mit klarer Seitenbegrenzung.
- Kein verstecktes wichtiges Ziel hinter einem unklaren Swipe.
- Touch-Ziele dürfen nicht zu klein sein.

### Vorgeschlagene Komponentengrenzen

- `FeaturedCategoriesSection`
- `CategoryGrid`
- `CategoryCard`
- `CategoryImage`
- `CategoryLink`

### Interaktion und Barrierefreiheit

- Kartenlinks erhalten klare deutsche Linktexte.
- Keine Kategorienlinkkarte darf ohne sichtbare Erklärung als Interaktion wirken.
- Bilder erhalten brauchbare Alternativtexte.
- Inhalte dürfen nicht nur durch Bildunterschiede unterscheidbar sein.
- Das Raster behält eine sinnvolle Lesereihenfolge und Überschriftenstruktur.

### Freigabe erforderlich

- Bestätigte Produktkategorien.
- Freigegebene Produktnamen und Bilder.
- Freigegebene Kategorie-URLs.
- Bestätigte Verfügbarkeiten und Preise, falls sie jemals angezeigt werden sollen.

## 5. Unternehmensvorstellung

### Zweck

Dieser Bereich verbindet die Startseite mit der Unternehmensgeschichte und erklärt in späteren Freigabephasen die Positionierung des Unternehmens.

### Inhalt

Der Bereich enthält ein Demonstrationsbild und einen Platzhaltertext.

Beispiel:

> [UNVERIFIZIERT — Platzhaltertext zur Unternehmensvorstellung]

Der Bereich darf keine:

- erfundenen Unternehmensgründer;
- erfundenen Gründungsjahre;
- erfundenen Meilensteine;
- erfundenen Zertifikate;
- erfundenen Qualitätsversprechen;
- erfundenen Unternehmenszahlen;

verwenden.

### Desktop-Layout

- Zweispaltiges Layout aus Bild und Text.
- Die Ausrichtung kann je nach Abschnitt wechseln, um Monotonie zu vermeiden.
- Der Textbereich enthält eine Abschnittsüberschrift, Platzhaltertext und gegebenenfalls eine Linkaktion zur historischen Seite.
- Das Bild bleibt dezent und unterstützt den Text.

### Mobile-Layout

- Bild und Text werden untereinander angeordnet.
- Die Überschrift erscheint vor dem Fließtext.
- Die CTA zur vollständigen Unternehmensseite bleibt klar sichtbar.

### Vorgeschlagene Komponentengrenzen

- `CompanyIntroductionSection`
- `CompanyStoryImage`
- `CompanyStoryContent`
- `CompanyStoryLink`

### Interaktion und Barrierefreiheit

- Das Bild erhält einen neutralen oder aussagekräftigen Alternativtext.
- Der Link erhält ein deutsches Ziellabel.
- Platzhaltertext darf nicht als echte Unternehmensgeschichte wirken.
- Die Textfarbe erfüllt den vorgestellten Kontrast.

### Freigabe erforderlich

- Verifizierte Unternehmensgeschichte.
- Freigegebene Bildmaterialien.
- Freigegebene Qualitäts- oder Positionierungsformulierungen.
- Bestätigte Zertifikate und Nachweise.
- Freigegebene CTA-Zielseite.

## 6. Qualität und Prozess

### Zweck

Dieser Abschnitt visualisiert das allgemeine Konzept von Frische und Kartoffelverarbeitung, ohne konkrete, ungeprüfte Unternehmenspraktiken darzustellen.

### Inhalt

Die visuellen Schritte können abstrakt oder demonstrativ sein, beispielsweise:

1. [DEMOCONZEPT — Herkunftsvisualisierung]
2. [DEMOCONZEPT — Verarbeitungsvisualisierung]
3. [DEMOCONZEPT — Qualitäts- oder Frischeprozess]
4. [DEMOCONZEPT — Übergabe an Kunden]

Diese Schritte dürfen keine tatsächliche Lieferkette oder firmenspezifische Methode behaupten.

### Desktop-Layout

- Horizontaler Prozessstreifen oder Vier-Karten-Raster.
- Verbindende Linien oder nummerierte Icons müssen zusätzlich durch sichtbare Textlabels erklärt werden.
- Farbe darf keine Prozessreihenfolge allein kennzeichnen.

### Mobile-Layout

- Vertikaler Prozess oder zweispaltiges Raster bei ausreichender Breite.
- Jede Stufe erhält eine eigene Überschrift und kurzen Platzhaltertext.
- Kein horizontales Wischen ist als einzige Navigation erforderlich.

### Vorgeschlagene Komponentengrenzen

- `QualityProcessSection`
- `ProcessStepList`
- `ProcessStep`
- `ProcessIllustration`

### Interaktion und Barrierefreiheit

- Die Prozessreihenfolge wird semantisch als Liste dargestellt.
- Icons erhalten deutsche Beschreibungen oder sind rein dekorativ.
- Keine Informationen dürfen ausschließlich durch visuelle Pfeile oder Farben vermittelt werden.
- Reduzierte Bewegung beeinflusst keine Prozessdarstellung.

### Freigabe erforderlich

- Tatsächlich geprüfte Prozessschritte.
- Freigegebene Aussagen zu Frische oder Qualität.
- Bestätigte Zertifizierungen.
- Geeignete lizenzierte Prozessbilder oder Illustrationen.

## 7. Shop-Einstiegsbereich

### Zweck

Der Shop-Einstiegsbereich ist eine prominente, moderne Aufforderung zum späteren Online-Shop und soll das Shopangebot auf der Startseite sichtbar machen.

### Inhalt

Der Bereich enthält:

- eine deutsche Platzhalterüberschrift;
- einen kurzen Demonstrationstext;
- eine primäre Shop-CTA;
- optional eine demonstrative Produktbilderreihe.

Beispiel:

> [DEMOCONZEPT — Platzhalterheadline für den Shop]

> [DEMOCONZEPT — Platzhaltertext ohne reale Preis-, Produkt- oder Verfügbarkeitsangaben]

### Desktop-Layout

- Breiter, ruhiger Banner-Bereich mit Waldfarbe oder Creme als Hintergrund.
- Text und CTA auf einer Seite, optional Demonstrationsproduktbilder auf der anderen.
- Der CTA muss visuell stärker sein als normale Textlinks.

### Mobile-Layout

- Vollbreiter oder mäßig gerahmter Block.
- Text vor CTA oder CTA direkt unter dem Text.
- Keine übergroße Höhe oder verdeckte Shop-Handlung.

### Vorgeschlagene Komponentengrenzen

- `ShopCalloutSection`
- `ShopCalloutContent`
- `ShopCalloutActions`
- `ShopDemonstrationMedia`

### Interaktion und Barrierefreiheit

- Die CTA ist ein klarer Link zum geplanten Shop.
- Der Abschnitt erhält eine sinnvolle Überschrift.
- Der Kontrast des primären Buttons muss geprüft werden.
- Demonstrationsbilder dürfen keine echten Waren oder Angebote suggerieren.

### Freigabe erforderlich

- Freigegebener Shopname und CTA-Text.
- Tatsächliche Shoproute und Verfügbarkeit.
- Freigegebene Produkte und Bilder.
- Freigegebene Preis-, Liefer- und Abholdetails.

## 8. Kontakt und Footer

### Zweck

Der Footer und eventuell ein kurzer Kontaktbereich ermöglichen den Abschluss der Startseite und zeigen die wichtigsten Navigationen sowie rechtliche Platzhalter.

### Inhalt

Kontaktplatzhalter:

- `[UNVERIFIZIERTE ANSCHRIFT]`
- `[UNVERIFIZIERTE TELEFONNUMMER]`
- `[UNVERIFIZIERTE E-MAIL-ADRESSE]`
- `[UNVERIFIZIERTE ÖFFNUNGSZEIT]`
- `[UNVERIFIZIERTE ANFAHRT]`

Footer-Navigation:

- Startseite
- Produkte
- Unternehmen
- Kontakt
- Shop
- Impressum
- Datenschutz

Die rechtlichen Links müssen als Platzhalter gekennzeichnet werden, bis Text und Umsetzung rechtlich geprüft und freigegeben sind.

### Desktop-Layout

- Mehrspaltiger Footer.
- Erste Spalte: Markenplatzhalter und kurzer unverbindlicher Konzepttext.
- Zweite Spalte: Hauptnavigation.
- Dritte Spalte: Kontaktplatzhalter.
- Vierte Spalte: Rechtliche Platzhalter.
- Optional: Anfahrts- oder Öffnungszeitbereich über dem Footer als eigener schmaler Kontaktblock.

### Mobile-Layout

- Spalten werden untereinander angeordnet oder übersichtlich als Accordion mit barrierefreier Semantik dargestellt.
- Akkordeons dürfen keine wichtige Information standardmäßig verstecken, wenn dies die Auffindbarkeit beeinträchtigt.
- Links erhalten ausreichende Touch-Ziele.

### Vorgeschlagene Komponentengrenzen

- `ContactSection`
- `SiteFooter`
- `FooterNavigation`
- `FooterContactDetails`
- `FooterLegalLinks`

### Interaktion und Barrierefreiheit

- Kontaktlinks verwenden die korrekten Linktypen, etwa E-Mail oder Telefon.
- Die rechtlichen Links dürfen keine erfundenen Inhalte öffnen.
- Der Footer verwendet semantische Navigationselemente.
- Alle Platzhalter werden für assistive Technologien als Platzhalter sichtbar benannt, nicht als echte Daten.
- Keine interaktive Footer-Funktion darf nur durch Farbe unterscheidbar sein.

### Freigabe erforderlich

- Anschrift.
- Telefonnummer und E-Mail.
- Öffnungszeiten.
- Ansprechpartner.
- Anfahrtsweg.
- Rechtlich geprüfte Inhalte für Impressum und Datenschutz.
- Cookie-, Einwilligungs- oder Formulartexte.
- Freigegebene Footer-Ziele.

## Globale Abschnittsreihenfolge

Die vorgeschlagene Reihenfolge für die Konzeptstartseite lautet:

1. Header
2. Hero-Bereich
3. Privatkunden- und Großverbraucherpfade
4. Vorgestellte Produktkategorien
5. Unternehmensvorstellung
6. Qualität und Prozess
7. Shop-Einstiegsbereich
8. Kontakt und Footer

Diese Reihenfolge soll die Unternehmenspräsentation und den Shop-Einstieg ausgewogen verbinden.

## Gemeinsame Layoutkomponenten

Für eine spätere Umsetzung können folgende wiederverwendbare Komponenten vorgesehen werden:

- `PageContainer`
- `SectionHeading`
- `SectionShell`
- `PrimaryButton`
- `SecondaryButton`
- `TextLink`
- `ResponsiveImage`
- `PlaceholderNotice`
- `CustomerPathwayCard`
- `CategoryCard`
- `ProcessStep`

Diese Komponenten sind nur Dokumentation. Sie dürfen erst in einer ausdrücklich freigegebenen Implementationsphase angelegt werden.

## Gesamtcheckliste für Inhalte

Vor einer Veröffentlichung muss der Auftraggeber bestätigen:

- alle realen Produktinformationen;
- alle realen Preise und Verfügbarkeiten;
- die Unternehmensgeschichte;
- Qualität und Zertifizierungen;
- Kontaktinformationen;
- Öffnungszeiten;
- Liefer- und Abholbedingungen;
- rechtliche Texte;
- Bild- und Logorechte;
- Shop-Links und Warenkorbverhalten;
- sämtliche Platzhalter und Demonstrationsbezeichnungen.

Bis zu dieser Freigabe bleiben alle sensiblen Bereiche eindeutig als unverifiziert oder demonstrativ gekennzeichnet.
