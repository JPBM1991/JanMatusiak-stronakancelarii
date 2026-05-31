import type { Metadata } from "next";
import Link from "next/link";
import { Box, Container, Grid, Typography } from "@mui/material";
import { getAllPostsEN } from "@/lib/posts-en";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const metadata: Metadata = {
  title: "News | Jan Matusiak — Attorney at Law",
  description:
    "Legal articles and commentary on company law, contracts, negotiations and business advisory. Blog of Jan Matusiak's law firm.",
  alternates: {
    canonical: "https://matusiak.legal/en/aktualnosci",
    languages: {
      pl: "https://matusiak.legal/aktualnosci",
      en: "https://matusiak.legal/en/aktualnosci",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://matusiak.legal/en/aktualnosci",
    siteName: "Jan Matusiak Law Office",
    title: "News | Jan Matusiak — Attorney at Law",
    description:
      "Legal articles and commentary on company law, contracts, negotiations and business advisory. Blog of Jan Matusiak's law firm.",
    images: [{ url: "/jan-matusiak.jpg", width: 800, height: 800, alt: "Jan Matusiak — Attorney at Law" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "News | Jan Matusiak — Attorney at Law",
    description: "Legal articles on company law, contracts, negotiations and business advisory.",
    images: ["/jan-matusiak.jpg"],
  },
};

const NAVY = "#2B3A4A";
const GOLD = "#2B3A4A";
const BORDER = "#D4E2EA";
const LIGHT = "#EDF3F6";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsPage() {
  const posts = getAllPostsEN();

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
              Blog · News
            </Typography>
          </Box>
          <Typography variant="h1" sx={{
            color: "#ffffff",
            fontSize: { xs: "2rem", md: "3rem" },
            lineHeight: 1.15, letterSpacing: "-0.015em", mb: 2, maxWidth: 600,
          }}>
            Law in{" "}
            <Box component="span" sx={{ color: "#EDF3F6", fontStyle: "italic" }}>
              business practice.
            </Box>
          </Typography>
          <Typography sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.75, maxWidth: 520,
          }}>
            Articles and commentary on company law, contracts, negotiations
            and business advisory — focused on practical implications.
          </Typography>
        </Container>
      </Box>

      {/* ── ARTICLES ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>

          {posts.length === 0 ? (
            <Box sx={{
              backgroundColor: "#ffffff", border: `1px solid ${BORDER}`,
              p: 6, textAlign: "center",
            }}>
              <Typography sx={{ color: "#9CA3AF", fontSize: "0.9rem" }}>
                Articles coming soon.
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={{ xs: 2.5, md: 3 }}>
              {posts.map((post, i) => (
                <Grid key={post.slug} size={{ xs: 12, md: i === 0 ? 12 : 6 }}>
                  <Link href={`/en/aktualnosci/${post.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                    <Box sx={{
                      display: "block",
                      backgroundColor: "#ffffff",
                      border: `1px solid ${BORDER}`,
                      borderTop: `3px solid ${i === 0 ? GOLD : BORDER}`,
                      p: { xs: 3, md: i === 0 ? 4.5 : 3.5 },
                      height: "100%",
                      transition: "border-top-color 0.2s, box-shadow 0.2s",
                      "&:hover": {
                        borderTopColor: GOLD,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                      },
                    }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                        <Typography sx={{
                          fontSize: "0.68rem", fontWeight: 600,
                          color: GOLD, letterSpacing: "0.15em", textTransform: "uppercase",
                        }}>
                          {post.category}
                        </Typography>
                        <Box sx={{ width: 3, height: 3, borderRadius: "50%", backgroundColor: BORDER }} />
                        <Typography sx={{ fontSize: "0.75rem", color: "#9CA3AF" }}>
                          {formatDate(post.date)}
                        </Typography>
                        <Box sx={{ width: 3, height: 3, borderRadius: "50%", backgroundColor: BORDER }} />
                        <Typography sx={{ fontSize: "0.75rem", color: "#9CA3AF" }}>
                          {post.readTime} read
                        </Typography>
                      </Box>

                      <Typography
                        variant={i === 0 ? "h2" : "h3"}
                        sx={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontWeight: 700,
                          fontSize: i === 0
                            ? { xs: "1.3rem", md: "1.75rem" }
                            : { xs: "1.05rem", md: "1.2rem" },
                          color: NAVY,
                          lineHeight: 1.3,
                          mb: 1.5,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {post.title}
                      </Typography>

                      <Typography sx={{
                        fontSize: "0.875rem", color: "#5A5A5A",
                        lineHeight: 1.75,
                        mb: 2.5,
                        display: "-webkit-box",
                        WebkitLineClamp: i === 0 ? 3 : 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}>
                        {post.excerpt}
                      </Typography>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                        <Typography sx={{
                          fontSize: "0.8rem", fontWeight: 600,
                          color: NAVY, letterSpacing: "0.02em",
                        }}>
                          Read more
                        </Typography>
                        <ArrowForwardIcon sx={{ fontSize: "0.9rem", color: GOLD }} />
                      </Box>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>

    </Box>
  );
}
