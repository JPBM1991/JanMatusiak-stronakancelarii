import type { Metadata } from "next";
import { Box, Container, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Privacy & Cookies Policy | Jan Matusiak — Attorney at Law",
  description:
    "Privacy and Cookies Policy of Jan Matusiak's law firm — information on the processing of personal data, cookies, and user rights.",
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

export default function PolitykaCookiesENPage() {
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
            lineHeight: 1.2, letterSpacing: "-0.015em", mb: 1.5, maxWidth: 600,
          }}>
            Privacy and{" "}
            <Box component="span" sx={{ color: "#EDF3F6", fontStyle: "italic" }}>
              Cookies Policy
            </Box>
          </Typography>
          <Typography sx={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.8rem",
          }}>
            Effective from: 1 April 2026.
          </Typography>
        </Container>
      </Box>

      {/* ── CONTENT ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{
            backgroundColor: "#ffffff",
            border: `1px solid ${BORDER}`,
            borderTop: `3px solid ${NAVY}`,
            p: { xs: 3, md: 6 },
          }}>

            <Section number="I." title="General Provisions">
              <P>
                This Privacy and Cookies Policy (the &quot;Policy&quot;) sets out the rules for processing
                personal data and the use of cookies by the law firm of Jan Matusiak,
                attorney at law (the &quot;Firm&quot;).
              </P>
              <P>
                The Firm processes personal data in accordance with Regulation (EU) 2016/679 of the
                European Parliament and of the Council of 27 April 2016 (GDPR) and the Polish Act
                of 10 May 2018 on the Protection of Personal Data.
              </P>
              <P>
                The Firm takes all reasonable steps to ensure that personal data are processed
                in compliance with applicable law, in accordance with the principles of fairness,
                transparency, and data minimisation.
              </P>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="II." title="Data Controller">
              <P>
                Jan Matusiak, conducting business under the name: Jan Matusiak Kancelaria Radcy Prawnego, address: ul. Stańczyka 22/54, 30-126 Kraków, Poland, NIP: 6772488832, REGON: 524117386, is the controller of personal data.
              </P>
              <P>
                The Controller can be contacted:
              </P>
              <Li>by email: jan.matusiak@matusiak.legal</Li>
              <Li>by phone: +48 500 255 293</Li>
              <Li>by post: ul. Stańczyka 22/54, 30-126 Kraków, Poland</Li>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="III." title="Purposes and Legal Bases for Processing">
              <P>The Firm processes personal data for the following purposes:</P>

              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 700, color: NAVY, mb: 1 }}>
                  1. Establishing and conducting a client relationship
                </Typography>
                <P>
                  Data are processed in order to take steps prior to entering into a contract
                  or to perform a contract to which the data subject is a party
                  (Art. 6(1)(b) GDPR), and thereafter — to fulfil a legal obligation incumbent
                  on the Controller (Art. 6(1)(c) GDPR).
                </P>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 700, color: NAVY, mb: 1 }}>
                  2. Handling contact form enquiries
                </Typography>
                <P>
                  Data submitted via the contact form are processed in order to respond to the
                  enquiry — based on the legitimate interest of the Controller (Art. 6(1)(f) GDPR),
                  namely conducting correspondence with persons interested in the Firm&apos;s services.
                </P>
              </Box>

              <Box sx={{ mb: 1 }}>
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 700, color: NAVY, mb: 1 }}>
                  3. Establishment, pursuit, and defence of claims
                </Typography>
                <P>
                  The Controller may process personal data for the purpose of establishing,
                  pursuing, or defending against potential claims — based on the legitimate
                  interest of the Controller (Art. 6(1)(f) GDPR).
                </P>
              </Box>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="IV." title="Rights of Data Subjects">
              <P>Every person whose data are processed has the following rights:</P>
              <Li>the right to access personal data,</Li>
              <Li>the right to rectification of personal data,</Li>
              <Li>the right to erasure of personal data (to the extent not precluded by applicable law),</Li>
              <Li>the right to restriction of processing,</Li>
              <Li>the right to data portability,</Li>
              <Li>the right to object to the processing of personal data,</Li>
              <Li>
                the right to lodge a complaint with the supervisory authority — the President of the
                Personal Data Protection Office (ul. Stawki 2, 00-193 Warsaw, Poland).
              </Li>
              <P>
                To exercise any of the above rights, please contact the Controller by email
                or by post.
              </P>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="V." title="Recipients of Personal Data">
              <P>
                Personal data may be disclosed to entities supporting the Firm&apos;s operations,
                in particular:
              </P>
              <Li>IT service providers (hosting, email),</Li>
              <Li>accountants and tax advisors,</Li>
              <Li>notaries and other lawyers cooperating on specific matters,</Li>
              <Li>courts and public administration bodies — to the extent required by law.</Li>
              <P>
                The Firm does not sell personal data or share them with third parties
                for marketing purposes.
              </P>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="VI." title="Transfers to Third Countries">
              <P>
                Personal data are in principle processed within the European Economic Area.
                Where services of providers based outside the EEA are used, data are transferred
                on the basis of standard contractual clauses approved by the European Commission
                or other mechanisms ensuring an adequate level of protection.
              </P>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="VII." title="Cookies — General Information">
              <P>
                The Firm&apos;s website uses cookies — small text files stored on the user&apos;s device
                by the web server.
              </P>
              <P>The Firm uses two types of cookies:</P>
              <Li>
                <strong>Session cookies</strong> — stored on the user&apos;s device for the duration
                of the browser session; deleted automatically when the session ends.
              </Li>
              <Li>
                <strong>Persistent cookies</strong> — stored on the user&apos;s device for a period
                defined in the cookie parameters or until deleted by the user.
              </Li>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="VIII." title="Types of Cookies Used">
              <Li>
                <strong>Essential</strong> — necessary for the proper functioning of the website
                (e.g. remembering cookie preferences). Do not require user consent.
              </Li>
              <Li>
                <strong>Functional</strong> — allow the website to remember user preferences
                and personalise displayed content.
              </Li>
              <Li>
                <strong>Analytical</strong> — used to measure website traffic and analyse usage
                patterns in order to improve the service.
              </Li>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="IX." title="Managing Cookies">
              <P>
                Users may at any time change their cookie settings in their browser —
                including blocking cookies or deleting those already stored.
                The method varies by browser:
              </P>
              <Li>
                <strong>Firefox:</strong> Menu → Options → Privacy &amp; Security → Cookies and Site Data.
              </Li>
              <Li>
                <strong>Chrome:</strong> Menu → Settings → Privacy and security →
                Cookies and other site data.
              </Li>
              <Li>
                <strong>Edge:</strong> Menu → Settings → Privacy, search, and services →
                Cookies and site permissions.
              </Li>
              <Li>
                <strong>Safari:</strong> Preferences → Privacy → Cookies and website data.
              </Li>
              <Li>
                <strong>Opera:</strong> Menu → Settings → Advanced → Privacy &amp; security → Cookies.
              </Li>
              <P>
                Restricting or disabling cookies may affect the functionality of certain
                parts of the website.
              </P>
            </Section>

            <Box sx={{ borderTop: `1px solid ${BORDER}`, mb: 5 }} />

            <Section number="X." title="Final Provisions">
              <P>
                The Firm reserves the right to amend this Policy. Users will be informed
                of any material changes by an appropriate notice on the website.
              </P>
              <P>
                This Policy takes effect on 1 April 2026.
              </P>
            </Section>

          </Box>
        </Container>
      </Box>

    </Box>
  );
}
