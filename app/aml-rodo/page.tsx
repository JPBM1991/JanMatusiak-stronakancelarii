import type { Metadata } from "next";
import { Box, Container, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "AML / RODO | Jan Matusiak — Radca Prawny",
  description:
    "Klauzula informacyjna RODO w zakresie ustawy AML — informacje o przetwarzaniu danych osobowych w ramach obowiązków wynikających z ustawy o przeciwdziałaniu praniu pieniędzy.",
};

const NAVY = "#0B1829";
const GOLD = "#B8924A";
const BORDER = "#E8E4DC";
const LIGHT = "#F6F4F0";

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
        <Typography sx={{
          fontSize: "0.65rem", fontWeight: 700,
          color: GOLD, letterSpacing: "0.12em",
        }}>
          {number}
        </Typography>
        <Typography sx={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 700,
          fontSize: { xs: "1rem", md: "1.15rem" },
          color: NAVY,
          letterSpacing: "-0.01em",
        }}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ pl: { xs: 0, md: 3 } }}>
        {children}
      </Box>
    </Box>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <Typography sx={{ fontSize: "0.875rem", color: "#3A3A3A", lineHeight: 1.85, mb: 1.75 }}>
      {children}
    </Typography>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.25 }}>
      <Box sx={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: GOLD, mt: "8px", flexShrink: 0 }} />
      <Typography sx={{ fontSize: "0.875rem", color: "#3A3A3A", lineHeight: 1.75 }}>
        {children}
      </Typography>
    </Box>
  );
}

export default function AmlRodoPage() {
  return (
    <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>

      {/* ── NAGŁÓWEK ── */}
      <Box sx={{
        backgroundColor: NAVY,
        pt: { xs: "88px", md: "108px" },
        pb: { xs: 5, md: 6 },
        borderBottom: `3px solid ${GOLD}`,
      }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
            <Box sx={{ width: 24, height: "1.5px", backgroundColor: GOLD }} />
            <Typography sx={{
              color: GOLD, fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase",
            }}>
              Dokumenty prawne
            </Typography>
          </Box>
          <Typography variant="h1" sx={{
            color: "#ffffff",
            fontSize: { xs: "1.75rem", md: "2.5rem" },
            lineHeight: 1.2, letterSpacing: "-0.015em", mb: 1.5, maxWidth: 640,
          }}>
            Klauzula informacyjna{" "}
            <Box component="span" sx={{ color: GOLD, fontStyle: "italic" }}>
              AML / RODO
            </Box>
          </Typography>
          <Typography sx={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.8rem",
          }}>
            Informacja o przetwarzaniu danych osobowych w związku z obowiązkami wynikającymi
            z ustawy AML
          </Typography>
        </Container>
      </Box>

      {/* ── TREŚĆ ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>

          {/* Nota informacyjna */}
          <Box sx={{
            backgroundColor: "#ffffff",
            border: `1px solid ${BORDER}`,
            borderLeft: `3px solid ${GOLD}`,
            p: { xs: 3, md: 4 },
            mb: 3,
          }}>
            <Typography sx={{
              fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: GOLD, mb: 1.25,
            }}>
              Podstawa prawna
            </Typography>
            <Typography sx={{ fontSize: "0.875rem", color: "#4A4A4A", lineHeight: 1.8 }}>
              Kancelaria Jana Matusiaka, jako instytucja obowiązana w rozumieniu ustawy z dnia
              1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu
              (dalej: „ustawa AML"), przetwarza dane osobowe klientów w celu wykonania obowiązków
              wynikających z tej ustawy. Poniższa klauzula zawiera informacje wymagane przez
              art. 13 i 14 Rozporządzenia RODO.
            </Typography>
          </Box>

          <Box sx={{
            backgroundColor: "#ffffff",
            border: `1px solid ${BORDER}`,
            borderTop: `3px solid ${NAVY}`,
            p: { xs: 3, md: 6 },
          }}>

            <Section number="I." title="Administrator danych osobowych">
              <P>
                Administratorem danych osobowych jest Jan Matusiak, radca prawny,
                prowadzący kancelarię pod adresem: ul. Piwna 15/3, 30-527 Kraków.
              </P>
              <P>Kontakt z Administratorem:</P>
              <Li>mailowo: j.matusiak@kmtlegal.pl</Li>
              <Li>telefonicznie: +48 690 720 320</Li>
              <Li>korespondencyjnie: ul. Piwna 15/3, 30-527 Kraków</Li>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="II." title="Źródło i zakres pozyskiwanych danych">
              <P>
                Dane osobowe pozyskiwane są bezpośrednio od osoby, której dotyczą,
                z dokumentów tożsamości, zawieranych umów, a także z publicznie dostępnych
                rejestrów, w szczególności:
              </P>
              <Li>Centralnego Rejestru Beneficjentów Rzeczywistych (CRBR),</Li>
              <Li>Krajowego Rejestru Sądowego (KRS),</Li>
              <Li>Centralnej Ewidencji i Informacji o Działalności Gospodarczej (CEIDG),</Li>
              <Li>innych rejestrów publicznych dostępnych w ramach obowiązujących przepisów.</Li>
              <P>Kancelaria przetwarza w szczególności następujące kategorie danych:</P>
              <Li>dane identyfikacyjne: imię, nazwisko, obywatelstwo, PESEL lub data urodzenia,</Li>
              <Li>dane dokumentu tożsamości: seria, numer, nazwa organu wydającego,</Li>
              <Li>dane adresowe: adres zamieszkania lub siedziby,</Li>
              <Li>numer identyfikacji podatkowej (NIP),</Li>
              <Li>
                kopię dokumentu tożsamości — w zakresie wymaganym przez art. 34 ustawy AML.
              </Li>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="III." title="Cele przetwarzania danych">
              <P>
                Dane osobowe przetwarzane są wyłącznie w celu realizacji obowiązków
                wynikających z ustawy AML, w szczególności:
              </P>
              <Li>oceny ryzyka prania pieniędzy i finansowania terroryzmu,</Li>
              <Li>identyfikacji i weryfikacji tożsamości klienta,</Li>
              <Li>identyfikacji beneficjenta rzeczywistego i weryfikacji jego tożsamości,</Li>
              <Li>oceny charakteru i celu nawiązywanej relacji biznesowej,</Li>
              <Li>bieżącego monitorowania stosunków gospodarczych z klientem,</Li>
              <Li>
                przekazywania informacji właściwym organom — w przypadkach przewidzianych
                przepisami prawa.
              </Li>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="IV." title="Podstawa prawna przetwarzania">
              <P>
                Dane osobowe przetwarzane są na podstawie art. 6 ust. 1 lit. c RODO —
                przetwarzanie jest niezbędne do wypełnienia obowiązku prawnego ciążącego
                na Administratorze, wynikającego z przepisów ustawy AML.
              </P>
              <P>
                Podanie danych osobowych jest wymogiem ustawowym. Brak możliwości pozyskania
                wymaganych danych skutkuje brakiem możliwości nawiązania lub kontynuowania
                współpracy.
              </P>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="V." title="Okres przechowywania danych">
              <P>
                Dane osobowe przechowywane są przez okres 5 lat, liczony od pierwszego dnia
                roku następującego po roku, w którym zakończono stosunki gospodarcze
                z klientem lub w którym przeprowadzono transakcję okazjonalną.
              </P>
              <P>
                Na podstawie art. 49 ust. 1 ustawy AML Generalny Inspektor Informacji
                Finansowej może przedłużyć ten okres o kolejne 5 lat.
              </P>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="VI." title="Odbiorcy danych">
              <P>
                Odbiorcami danych osobowych mogą być wyłącznie organy uprawnione na podstawie
                przepisów prawa, w szczególności:
              </P>
              <Li>Generalny Inspektor Informacji Finansowej (GIIF),</Li>
              <Li>organy prowadzące Centralny Rejestr Beneficjentów Rzeczywistych,</Li>
              <Li>prokuratura i inne organy ścigania — w przypadkach przewidzianych przepisami.</Li>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="VII." title="Prawa osób, których dane dotyczą">
              <P>
                W zakresie, w jakim nie jest to sprzeczne z przepisami ustawy AML,
                osobom, których dane dotyczą, przysługują następujące prawa:
              </P>
              <Li>prawo dostępu do danych osobowych (art. 15 RODO),</Li>
              <Li>prawo do sprostowania danych (art. 16 RODO),</Li>
              <Li>prawo do ograniczenia przetwarzania (art. 18 RODO),</Li>
              <Li>prawo do wniesienia sprzeciwu (art. 21 RODO),</Li>
              <Li>prawo do przenoszenia danych (art. 20 RODO) — o ile jest technicznie możliwe,</Li>
              <Li>
                prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
                (ul. Stawki 2, 00-193 Warszawa, uodo.gov.pl).
              </Li>
              <P>
                Realizacja niektórych z powyższych praw może być ograniczona ze względu
                na obowiązki wynikające z ustawy AML — w szczególności obowiązek przechowania
                dokumentacji przez wymagany okres.
              </P>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="VIII." title="Profilowanie">
              <P>
                Dane osobowe mogą być wykorzystywane do profilowania w zakresie oceny ryzyka
                prania pieniędzy i finansowania terroryzmu, zgodnie z wymogami ustawy AML.
                Profilowanie odbywa się z udziałem systemów informatycznych, lecz nie prowadzi
                do zautomatyzowanego podejmowania decyzji wywołujących skutki prawne wobec
                osoby, której dane dotyczą.
              </P>
            </Section>

          </Box>
        </Container>
      </Box>

    </Box>
  );
}
