# Strategietag-Tool

Werkzeug für den Strategietag einer Abteilung und für die Strategietagung der Geschäftsleitung. Eine einzige Datei, läuft im Browser, auch ohne Netz. Alle Angaben bleiben auf dem eigenen Gerät und in der eigenen gesicherten Datei; in diesem Repository liegen keine Daten, das Beispiel ist erfunden.

- Aktuelle Fassung (2.1): https://fabyow.github.io/sitzungstool/
- Vorherige Fassungen: 2.0 unter https://fabyow.github.io/sitzungstool/2.0/ und 1.9.10 unter https://fabyow.github.io/sitzungstool/1.9.10/

## Seit 2.0: das Tool für die ganze GL

Dasselbe Tool gibt es als zwei Arten von Dateien:

- **Abteilungsdatei**: Jede Abteilung führt ihre eigene Datei, mit oder ohne eigenen Strategietag.
- **GL-Datei**: Sie führt die Tagung der Geschäftsleitung, Teil um Teil, mit Protokoll, Umsetzung und Rückblick.

Zwischen den Dateien geht zweierlei, beides als Datei:

- **Beitrag**: Eine Abteilung gibt ihre Punkte für die Tagung als kleine Datei ab («Beitrag abgeben»); die GL-Datei liest alle Beiträge ein («Beiträge einlesen»).
- **Von der GL holen**: Jede Abteilung holt aus der GL-Datei den Ablauf der Tagung, danach die Ergebnisse, die sie betreffen, und im Folgejahr den Rückblick.

Der «Jahresablauf» oben im Tool zeigt, wo eine Datei im Jahr steht und was als Nächstes kommt. Rückmeldungen zum Tool lassen sich samt Bildern als eine Datei sichern.

## Seit 2.1: Daten für alle

Eine dritte Art von Datei kommt dazu, die **Daten-Datei**. Die Buchhaltung liest darin einmal für alle ein, was jede Abteilung für ihre Zahlen braucht:

- den Auszug mit den Buchungen aller Sparten, jedes Mal mit der ganzen Historie (er ersetzt alle bisherigen Buchungen),
- die Offertliste und die Mitarbeiterliste (beide werden ergänzt),
- die Namen der Kostenstellen und Kostenarten.

Das Tool erkennt jede Liste selbst. Jede Abteilung wählt in ihrer eigenen Datei «Vorbereiten» › «Daten holen», kreuzt ihre Sparte an und hat Buchungen, Offerten, Mitarbeitende und Namen. Nur die Buchhaltung schreibt in die Daten-Datei; darum können alle gleichzeitig arbeiten. Was eine Abteilung in ihrer Datei selbst gesetzt hat (Position, Polier, Kürzel, Ergänzungen zu einer Offerte), bleibt.

Aus der Mitarbeiterliste liest das Tool nur Name, Abteilung, Funktion, Vorgesetzter, Initialen, Eintritt, Austritt und Geburtstag; alles andere verlässt die Liste nicht.

Grosse Auszüge liest das Tool stückweise. In der gesicherten Daten-Datei liegen die Buchungen je Sparte getrennt, mit einem Verzeichnis am Schluss: Eine Abteilung liest nur ihren Teil. Geprüft mit einer Million erfundener Buchungen.
