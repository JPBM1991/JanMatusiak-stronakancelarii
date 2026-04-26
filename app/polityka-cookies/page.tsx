import type { Metadata } from "next";
import { Box, Container, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Polityka Prywatności i Cookies | Jan Matusiak — Radca Prawny",
  description:
    "Polityka Prywatności i Cookies kancelarii Jana Matusiaka — informacje o przetwarzaniu danych osobowych, plikach cookies i prawach użytkowników.",
};

const NAVY = "#2B3A4A";
const GOLD = "#2B3A4A";
const BORDER = "#D4E2EA";
const LIGHT = "#EDF3F6";

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
          fontFamily: "'Cormorant Garamond', Georgia, serif",
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

export default function PolitykaCookiesPage() {
  return (
    <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>

      {/* ── NAGŁÓWEK ── */}
      <Box sx={{
        backgroundColor: NAVY,
        pt: { xs: "88px", md: "108px" },
        pb: { xs: 6, md: 7 },
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
            lineHeight: 1.2, letterSpacing: "-0.015em", mb: 1.5, maxWidth: 600,
          }}>
            Polityka Prywatności{" "}
            <Box component="span" sx={{ color: "#EDF3F6", fontStyle: "italic" }}>
              i Cookies
            </Box>
          </Typography>
          <Typography sx={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.8rem",
          }}>
            Obowiązuje od: 1 kwietnia 2026 r.
          </Typography>
        </Container>
      </Box>

      {/* ── TREŚĆ ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{
            backgroundColor: "#ffffff",
            border: `1px solid ${BORDER}`,
            borderTop: `3px solid ${NAVY}`,
            p: { xs: 3, md: 6 },
          }}>

            <Section number="I." title="Postanowienia ogólne">
              <P>
                Niniejsza Polityka Prywatności i Cookies (dalej: „Polityka") określa zasady przetwarzania
                danych osobowych oraz zasady korzystania z plików cookies przez kancelarię Jana Matusiaka,
                radcy prawnego (dalej: „Kancelaria").
              </P>
              <P>
                Kancelaria przetwarza dane osobowe zgodnie z przepisami Rozporządzenia Parlamentu
                Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO) oraz ustawy
                z dnia 10 maja 2018 r. o ochronie danych osobowych.
              </P>
              <P>
                Kancelaria dokłada wszelkich starań, aby dane osobowe były przetwarzane zgodnie
                z obowiązującymi przepisami prawa, z zachowaniem zasad rzetelności, przejrzystości
                i minimalizacji danych.
              </P>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="II." title="Administrator danych osobowych">
              <P>
                Jan Matusiak, prowadzący działalność gospodarczą pod firmą: Jan Matusiak Kancelaria Radcy Prawnego, adres: ul. Stańczyka 22/54, 30-126 Kraków, NIP: 6772488832, REGON: 524117386, jest administratorem danych osobowych.
              </P>
              <P>
                Kontakt z Administratorem możliwy jest:
              </P>
              <Li>mailowo: jan.matusiak@matusiak.legal</Li>
              <Li>telefonicznie: +48 500 255 293</Li>
              <Li>korespondencyjnie: ul. Stańczyka 22/54, 30-126 Kraków</Li>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="III." title="Cele i podstawy przetwarzania danych">
              <P>Kancelaria przetwarza dane osobowe w następujących celach:</P>

              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 700, color: NAVY, mb: 1 }}>
                  1. Nawiązanie i prowadzenie współpracy
                </Typography>
                <P>
                  Dane przetwarzane są w celu podjęcia działań zmierzających do zawarcia umowy
                  lub wykonania umowy, której stroną jest osoba, której dane dotyczą
                  (art. 6 ust. 1 lit. b RODO), a po jej zawarciu — w celu wypełnienia obowiązku
                  prawnego ciążącego na Administratorze (art. 6 ust. 1 lit. c RODO).
                </P>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 700, color: NAVY, mb: 1 }}>
                  2. Obsługa formularza kontaktowego
                </Typography>
                <P>
                  Dane podane w formularzu kontaktowym przetwarzane są w celu udzielenia odpowiedzi
                  na przesłane zapytanie — na podstawie uzasadnionego interesu Administratora
                  (art. 6 ust. 1 lit. f RODO), jakim jest prowadzenie korespondencji z osobami
                  zainteresowanymi świadczonymi usługami.
                </P>
              </Box>

              <Box sx={{ mb: 1 }}>
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 700, color: NAVY, mb: 1 }}>
                  3. Ustalenie, dochodzenie i obrona roszczeń
                </Typography>
                <P>
                  Administrator może przetwarzać dane osobowe w celu ustalenia, dochodzenia
                  lub obrony przed potencjalnymi roszczeniami — na podstawie uzasadnionego
                  interesu Administratora (art. 6 ust. 1 lit. f RODO).
                </P>
              </Box>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="IV." title="Prawa osób, których dane dotyczą">
              <P>Każdej osobie, której dane są przetwarzane, przysługują następujące prawa:</P>
              <Li>prawo dostępu do danych osobowych,</Li>
              <Li>prawo do sprostowania (poprawiania) danych osobowych,</Li>
              <Li>prawo do usunięcia danych osobowych (w zakresie, w jakim nie jest to sprzeczne z przepisami prawa),</Li>
              <Li>prawo do ograniczenia przetwarzania danych osobowych,</Li>
              <Li>prawo do przenoszenia danych osobowych,</Li>
              <Li>prawo do wniesienia sprzeciwu wobec przetwarzania danych osobowych,</Li>
              <Li>
                prawo do wniesienia skargi do organu nadzorczego — Prezesa Urzędu Ochrony Danych
                Osobowych (ul. Stawki 2, 00-193 Warszawa).
              </Li>
              <P>
                W celu realizacji powyższych praw należy skontaktować się z Administratorem
                drogą mailową lub korespondencyjnie.
              </P>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="V." title="Odbiorcy danych">
              <P>
                Dane osobowe mogą być przekazywane podmiotom wspierającym działalność Kancelarii,
                w szczególności:
              </P>
              <Li>dostawcom usług IT (hosting, obsługa poczty elektronicznej),</Li>
              <Li>biurom rachunkowym i doradcom podatkowym,</Li>
              <Li>notariuszom i innym prawnikom współpracującym w ramach konkretnych spraw,</Li>
              <Li>organom wymiaru sprawiedliwości i administracji publicznej — w zakresie wymaganym przepisami prawa.</Li>
              <P>
                Kancelaria nie sprzedaje danych osobowych ani nie udostępnia ich podmiotom
                trzecim w celach marketingowych.
              </P>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="VI." title="Przekazywanie danych do państw trzecich">
              <P>
                Dane osobowe są co do zasady przetwarzane na terenie Europejskiego Obszaru
                Gospodarczego. W przypadku korzystania z usług dostawców spoza EOG — dane
                przekazywane są na podstawie standardowych klauzul umownych zatwierdzonych
                przez Komisję Europejską lub innych mechanizmów zapewniających odpowiedni
                poziom ochrony.
              </P>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="VII." title="Pliki cookies — informacje ogólne">
              <P>
                Strona internetowa Kancelarii korzysta z plików cookies (ciasteczek), tj. małych
                plików tekstowych zapisywanych na urządzeniu końcowym użytkownika przez serwer
                strony internetowej.
              </P>
              <P>Kancelaria stosuje dwa rodzaje plików cookies:</P>
              <Li>
                <strong>Sesyjne</strong> — przechowywane na urządzeniu użytkownika do czasu
                zakończenia sesji przeglądarki; po jej zakończeniu są usuwane automatycznie.
              </Li>
              <Li>
                <strong>Trwałe</strong> — przechowywane na urządzeniu użytkownika przez czas
                określony w parametrach pliku lub do czasu usunięcia przez użytkownika.
              </Li>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="VIII." title="Rodzaje wykorzystywanych cookies">
              <Li>
                <strong>Niezbędne</strong> — konieczne do prawidłowego funkcjonowania strony
                (np. zapamiętanie wyboru dotyczącego cookies). Nie wymagają zgody użytkownika.
              </Li>
              <Li>
                <strong>Funkcjonalne</strong> — umożliwiają zapamiętanie preferencji użytkownika
                i personalizację wyświetlanych treści.
              </Li>
              <Li>
                <strong>Analityczne</strong> — pozwalają mierzyć ruch na stronie i analizować
                sposób korzystania z serwisu w celu jego ulepszania.
              </Li>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="IX." title="Zarządzanie plikami cookies">
              <P>
                Użytkownik może w każdym czasie zmienić ustawienia dotyczące plików cookies
                w przeglądarce internetowej — w tym zablokować ich zapisywanie lub usunąć
                już zapisane pliki. Sposób zarządzania zależy od używanej przeglądarki:
              </P>
              <Li>
                <strong>Firefox:</strong> Menu → Opcje → Prywatność i bezpieczeństwo → Pliki
                cookie i dane stron.
              </Li>
              <Li>
                <strong>Chrome:</strong> Menu → Ustawienia → Prywatność i bezpieczeństwo →
                Pliki cookie i inne dane stron.
              </Li>
              <Li>
                <strong>Edge:</strong> Menu → Ustawienia → Prywatność, wyszukiwanie i usługi →
                Pliki cookie i uprawnienia witryn.
              </Li>
              <Li>
                <strong>Safari:</strong> Preferencje → Prywatność → Pliki cookie i dane witryn.
              </Li>
              <Li>
                <strong>Opera:</strong> Menu → Ustawienia → Zaawansowane → Prywatność
                i bezpieczeństwo → Pliki cookie.
              </Li>
              <P>
                Ograniczenie lub wyłączenie plików cookies może wpłynąć na funkcjonowanie
                niektórych elementów strony.
              </P>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="X." title="Postanowienia końcowe">
              <P>
                Kancelaria zastrzega sobie prawo do zmiany niniejszej Polityki. O wszelkich
                istotnych zmianach użytkownicy będą informowani poprzez stosowny komunikat
                na stronie internetowej.
              </P>
              <P>
                Polityka wchodzi w życie z dniem 1 kwietnia 2026 r.
              </P>
            </Section>

          </Box>
        </Container>
      </Box>

    </Box>
  );
}
