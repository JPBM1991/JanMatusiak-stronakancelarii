import type { Metadata } from "next";
import { Box, Container, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "AML-RODO Notice | Jan Matusiak — Attorney at Law",
  description:
    "GDPR information notice in connection with AML obligations — information on the processing of personal data under the Anti-Money Laundering Act.",
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

export default function AmlRodoENPage() {
  return (
    <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>

      {/* ── HEADER ── */}
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
              Legal Documents
            </Typography>
          </Box>
          <Typography variant="h1" sx={{
            color: "#ffffff",
            fontSize: { xs: "1.75rem", md: "2.5rem" },
            lineHeight: 1.2, letterSpacing: "-0.015em", mb: 1.5, maxWidth: 640,
          }}>
            Information Notice —{" "}
            <Box component="span" sx={{ color: "#EDF3F6", fontStyle: "italic" }}>
              AML-RODO
            </Box>
          </Typography>
          <Typography sx={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.8rem",
          }}>
            Information on the processing of personal data in connection with obligations
            under the AML Act · Effective from: 1 April 2026.
          </Typography>
        </Container>
      </Box>

      {/* ── CONTENT ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>

          {/* Introductory note */}
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
              Legal basis
            </Typography>
            <Typography sx={{ fontSize: "0.875rem", color: "#4A4A4A", lineHeight: 1.8 }}>
              Jan Matusiak, conducting business under the name: Jan Matusiak Kancelaria Radcy Prawnego, as an obliged institution within the meaning of the Polish Act of
              1 March 2018 on Counteracting Money Laundering and Terrorist Financing
              (the &quot;AML Act&quot;), processes personal data of clients in order to fulfil obligations
              arising from that Act. The following notice contains information required by
              Articles 13 and 14 of the GDPR.
            </Typography>
          </Box>

          <Box sx={{
            backgroundColor: "#ffffff",
            border: `1px solid ${BORDER}`,
            borderTop: `3px solid ${NAVY}`,
            p: { xs: 3, md: 6 },
          }}>

            <Section number="I." title="Data Controller">
              <P>
                The controller of personal data is Jan Matusiak, conducting business under the name: Jan Matusiak Kancelaria Radcy Prawnego, address: ul. Stańczyka 22/54, 30-126 Kraków, Poland, NIP: 6772488832, REGON: 524117386.
              </P>
              <P>Contact with the Controller:</P>
              <Li>by email: jan.matusiak@matusiak.legal</Li>
              <Li>by phone: +48 500 255 293</Li>
              <Li>by post: ul. Stańczyka 22/54, 30-126 Kraków, Poland</Li>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="II." title="Sources and Scope of Personal Data">
              <P>
                Personal data are collected directly from the data subject,
                from identity documents, contracts entered into, and from publicly
                available registers, in particular:
              </P>
              <Li>the Central Register of Beneficial Owners (CRBR),</Li>
              <Li>the National Court Register (KRS),</Li>
              <Li>the Central Register and Information on Economic Activity (CEIDG),</Li>
              <Li>other public registers accessible under applicable law.</Li>
              <P>The Firm processes in particular the following categories of data:</P>
              <Li>identification data: first name, surname, nationality, PESEL number or date of birth,</Li>
              <Li>identity document data: series, number, issuing authority,</Li>
              <Li>address data: residential or registered address,</Li>
              <Li>tax identification number (NIP),</Li>
              <Li>
                a copy of the identity document — to the extent required by Art. 34 of the AML Act.
              </Li>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="III." title="Purposes of Processing">
              <P>
                Personal data are processed solely for the purpose of fulfilling obligations
                under the AML Act, in particular:
              </P>
              <Li>assessing the risk of money laundering and terrorist financing,</Li>
              <Li>identifying and verifying the identity of the client,</Li>
              <Li>identifying the beneficial owner and verifying their identity,</Li>
              <Li>assessing the nature and purpose of the business relationship,</Li>
              <Li>ongoing monitoring of business relations with the client,</Li>
              <Li>
                reporting information to the competent authorities — in cases provided for by law.
              </Li>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="IV." title="Legal Basis for Processing">
              <P>
                Personal data are processed on the basis of Art. 6(1)(c) GDPR —
                processing is necessary to comply with a legal obligation incumbent
                on the Controller, arising from the provisions of the AML Act.
              </P>
              <P>
                Provision of personal data is a statutory requirement. If the required
                data cannot be obtained, it will not be possible to establish or continue
                a business relationship.
              </P>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="V." title="Retention Period">
              <P>
                Personal data are retained for a period of 5 years, counted from the first day
                of the year following the year in which the business relationship with the client
                ended or in which the occasional transaction was carried out.
              </P>
              <P>
                Pursuant to Art. 49(1) of the AML Act, the General Inspector of Financial
                Information may extend this period by a further 5 years.
              </P>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="VI." title="Recipients of Personal Data">
              <P>
                Recipients of personal data may only be authorities empowered by law,
                in particular:
              </P>
              <Li>the General Inspector of Financial Information (GIIF),</Li>
              <Li>authorities maintaining the Central Register of Beneficial Owners,</Li>
              <Li>prosecutors and other law enforcement authorities — in cases provided for by law.</Li>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="VII." title="Rights of Data Subjects">
              <P>
                To the extent not precluded by the provisions of the AML Act,
                data subjects have the following rights:
              </P>
              <Li>the right of access to personal data (Art. 15 GDPR),</Li>
              <Li>the right to rectification of data (Art. 16 GDPR),</Li>
              <Li>the right to restriction of processing (Art. 18 GDPR),</Li>
              <Li>the right to object (Art. 21 GDPR),</Li>
              <Li>the right to data portability (Art. 20 GDPR) — where technically feasible,</Li>
              <Li>
                the right to lodge a complaint with the President of the Personal Data Protection
                Office (ul. Stawki 2, 00-193 Warsaw, Poland; uodo.gov.pl).
              </Li>
              <P>
                The exercise of some of the above rights may be restricted due to obligations
                under the AML Act — in particular the obligation to retain documentation for
                the required period.
              </P>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="VIII." title="Profiling">
              <P>
                Personal data may be used for profiling in the context of assessing the risk
                of money laundering and terrorist financing, in accordance with the requirements
                of the AML Act. Profiling is carried out with the use of IT systems but does not
                result in automated decision-making producing legal effects concerning the data subject.
              </P>
            </Section>

          </Box>
        </Container>
      </Box>

    </Box>
  );
}
