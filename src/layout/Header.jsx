import Navigation from "../components/Navigation";
// import of the styled Component for the Header-Styling
import HeaderStyledComponent from "../components/HeaderStyledComponent";
import { useRef, useEffect } from "react";

/* Dieser Code ermöglicht Höhe des Headers dynamisch an die Größe des Viewports anzupassen, indem er die Höhe des Headers ermittelt und als CSS-Variable (in root in App.css) speichert. Diese Variable wird dann verwendet, um den Abstand zwischen dem Header und dem Hauptinhalt der Seite zu berechnen, sodass der Header niemals den Inhalt überdeckt, unabhängig von der Größe des Viewports. */
const Header = () => {
  // Referenz, um auf das DOM-Element des Headers zuzugreifen
  const headerRef = useRef(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      // Funktion zur Ermittlung der jeweiligen Höhe des Headers; Aufruf sobald Komponente gerendert wird
      // Speichern der Höhe in der CSS Variable (die in App.css unter root initialisiert wurde)
      const headerHeight = headerRef.current.offsetHeight; // auf offsetHeight Eigenschaft des DOM-Elements zugreifen, auf das unten headerRef verweist. offsetHeight gibt die gesamte Höhe eines Elements in Pixeln zurück, einschließlich padding aber ohne border
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerHeight}px`
      );
      // CSS-Variable "--header-height" im :root Element des Dokuments setzen: Dies geschieht durch Zugriff auf document.documentElement.style und die Verwendung der Methode "setProperty", um den Namen der CSS-Variable (--header-height) und ihren Wert (${headerHeight}px) festzulegen. Der Wert ist die zuvor ermittelte Höhe des Headers in Pixeln.
    };
    updateHeaderHeight();
    // Aktualisieren der Header-Höhe bei Resizing des Bildschirms
    window.addEventListener("resize", updateHeaderHeight); // nochmaliger Aufruf, um dynamisch Headerhöhe zu updaten
    // Cleanup bzw. Aufräumen des Event-Listeners, wenn Komponente unmounted wird oder bevor useEffect erneut ausgeführt wird
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <HeaderStyledComponent ref={headerRef}>
      <img src="/images/bird-illu/LogoHeader.png" alt="logo" />
      <Navigation />
    </HeaderStyledComponent>
  );
};

export default Header;
