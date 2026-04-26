import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug, getAllPosts } from "@/lib/posts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NAVY = "#0B1829";
const GOLD = "#B8924A";
const BORDER = "#E8E4DC";
const LIGHT = "#F6F4F0";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: `${post.title} | Jan Matusiak — Radca Prawny`,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const mdxComponents = {
  h2: (props: any) => (
    <Typography
      variant="h2"
      sx={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 700,
        fontSize: { xs: "1.25rem", md: "1.5rem" },
        color: NAVY,
        mt: 5,
        mb: 2,
        lineHeight: 1.3,
        letterSpacing: "-0.01em",
      }}
      {...props}
    />
  ),
  h3: (props: any) => (
    <Typography
      variant="h3"
      sx={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 700,
        fontSize: { xs: "1.05rem", md: "1.2rem" },
        color: NAVY,
        mt: 4,
        mb: 1.5,
        lineHeight: 1.35,
      }}
      {...props}
    />
  ),
  p: (props: any) => (
    <Typography
      component="p"
      sx={{
        fontSize: { xs: "0.9rem", md: "0.975rem" },
        color: "#3A3A3A",
        lineHeight: 1.9,
        mb: 2.5,
        textAlign: "justify",
      }}
      {...props}
    />
  ),
  ul: (props: any) => (
    <Box
      component="ul"
      sx={{
        pl: 0,
        mb: 2.5,
        listStyle: "none",
        "& li": {
          position: "relative",
          pl: 3,
          mb: 1.25,
          fontSize: { xs: "0.9rem", md: "0.975rem" },
          color: "#3A3A3A",
          lineHeight: 1.8,
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: "11px",
            width: 12,
            height: 1.5,
            backgroundColor: GOLD,
          },
        },
      }}
      {...props}
    />
  ),
  ol: (props: any) => (
    <Box
      component="ol"
      sx={{
        pl: 2.5,
        mb: 2.5,
        "& li": {
          mb: 1.25,
          fontSize: { xs: "0.9rem", md: "0.975rem" },
          color: "#3A3A3A",
          lineHeight: 1.8,
        },
      }}
      {...props}
    />
  ),
  strong: (props: any) => (
    <Box
      component="strong"
      sx={{ fontWeight: 700, color: NAVY }}
      {...props}
    />
  ),
  hr: () => (
    <Box
      component="hr"
      sx={{ border: "none", borderTop: `1px solid ${BORDER}`, my: 4 }}
    />
  ),
  a: (props: any) => (
    <Box
      component="a"
      sx={{
        color: GOLD,
        textDecoration: "underline",
        textDecorationColor: `${GOLD}60`,
        textUnderlineOffset: "3px",
        fontWeight: 500,
        "&:hover": { color: "#A07D3E" },
      }}
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <Box
      component="blockquote"
      sx={{
        borderLeft: `3px solid ${GOLD}`,
        pl: 3,
        py: 0.5,
        my: 3,
        "& p": { fontStyle: "italic", color: "#5A5A5A", mb: "0 !important" },
      }}
      {...props}
    />
  ),
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  // Poprzedni i następny artykuł
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>

      {/* ── NAGŁÓWEK ARTYKUŁU ── */}
      <Box sx={{
        backgroundColor: NAVY,
        pt: { xs: "88px", md: "108px" },
        pb: { xs: 6, md: 7 },
        borderBottom: `3px solid ${GOLD}`,
      }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>

          {/* Breadcrumb */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
            <Link
              href="/aktualnosci"
              style={{ textDecoration: "none" }}
            >
            <Box
              sx={{
                display: "flex", alignItems: "center", gap: 0.75,
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.75rem", fontWeight: 500,
                "&:hover": { color: GOLD },
                transition: "color 0.2s",
              }}
            >
              <ArrowBackIcon sx={{ fontSize: "0.85rem" }} />
              Aktualności
            </Box>
            </Link>
            <Typography sx={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem" }}>
              /
            </Typography>
            <Typography sx={{
              color: GOLD, fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.15em", textTransform: "uppercase",
            }}>
              {post.category}
            </Typography>
          </Box>

          {/* Meta */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2.5 }}>
            <Typography sx={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)" }}>
              {formatDate(post.date)}
            </Typography>
            <Box sx={{ width: 3, height: 3, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)" }} />
            <Typography sx={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)" }}>
              {post.readTime} czytania
            </Typography>
          </Box>

          <Typography variant="h1" sx={{
            color: "#ffffff",
            fontSize: { xs: "1.6rem", sm: "2rem", md: "2.6rem" },
            lineHeight: 1.2, letterSpacing: "-0.015em",
            maxWidth: 720,
          }}>
            {post.title}
          </Typography>
        </Container>
      </Box>

      {/* ── TREŚĆ ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={{ xs: 0, md: 6 }}>

            {/* Artykuł */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Box sx={{
                backgroundColor: "#ffffff",
                border: `1px solid ${BORDER}`,
                borderTop: `3px solid ${NAVY}`,
                p: { xs: 3, md: 5 },
              }}>
                {/* Excerpt lead */}
                <Typography sx={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  color: NAVY,
                  lineHeight: 1.65,
                  fontStyle: "italic",
                  mb: 3.5,
                  pb: 3.5,
                  borderBottom: `1px solid ${BORDER}`,
                }}>
                  {post.excerpt}
                </Typography>

                {/* MDX content */}
                <MDXRemote source={post.content} components={mdxComponents} />

                {/* Autor na końcu artykułu */}
                <Box sx={{ borderTop: `1px solid ${BORDER}`, mt: 4, pt: 4 }}>
                  <Typography sx={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    color: NAVY,
                    fontWeight: 700,
                    mb: 2.5,
                  }}>
                    Pytania? Zapraszam do kontaktu.
                  </Typography>
                  <Link href="/jan-matusiak" style={{ textDecoration: "none" }}>
                    <Box sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2.5,
                      p: 2.5,
                      border: `1px solid ${BORDER}`,
                      transition: "border-color 0.2s",
                      "&:hover": { borderColor: GOLD },
                    }}>
                      <Box sx={{ width: 64, height: 64, flexShrink: 0, overflow: "hidden" }}>
                        <Image
                          src="/jan-matusiak.jpg"
                          alt="Jan Matusiak"
                          width={64}
                          height={64}
                          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                        />
                      </Box>
                      <Box>
                        <Typography sx={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: NAVY,
                          lineHeight: 1.2,
                          mb: 0.4,
                        }}>
                          Jan Matusiak
                        </Typography>
                        <Typography sx={{
                          fontSize: "0.72rem",
                          color: GOLD,
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}>
                          Radca prawny
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                </Box>
              </Box>

              {/* Nawigacja prev/next */}
              {(prevPost || nextPost) && (
                <Box sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 2,
                  mt: 3,
                  flexWrap: "wrap",
                }}>
                  {prevPost ? (
                    <Link href={`/aktualnosci/${prevPost.slug}`} style={{ textDecoration: "none", flex: 1, minWidth: 0 }}>
                    <Box
                      sx={{
                        flex: 1,
                        minWidth: 0,
                        backgroundColor: "#ffffff",
                        border: `1px solid ${BORDER}`,
                        p: 2.5,
                        "&:hover": { borderColor: GOLD },
                        transition: "border-color 0.2s",
                      }}
                    >
                      <Typography sx={{ fontSize: "0.65rem", color: "#9CA3AF", letterSpacing: "0.15em", textTransform: "uppercase", mb: 0.75 }}>
                        ← Starszy artykuł
                      </Typography>
                      <Typography sx={{ fontSize: "0.85rem", color: NAVY, fontWeight: 600, lineHeight: 1.4 }}>
                        {prevPost.title}
                      </Typography>
                    </Box>
                    </Link>
                  ) : <Box sx={{ flex: 1 }} />}

                  {nextPost ? (
                    <Link href={`/aktualnosci/${nextPost.slug}`} style={{ textDecoration: "none", flex: 1, minWidth: 0 }}>
                    <Box
                      sx={{
                        flex: 1,
                        minWidth: 0,
                        backgroundColor: "#ffffff",
                        border: `1px solid ${BORDER}`,
                        p: 2.5,
                        textAlign: "right",
                        "&:hover": { borderColor: GOLD },
                        transition: "border-color 0.2s",
                      }}
                    >
                      <Typography sx={{ fontSize: "0.65rem", color: "#9CA3AF", letterSpacing: "0.15em", textTransform: "uppercase", mb: 0.75 }}>
                        Nowszy artykuł →
                      </Typography>
                      <Typography sx={{ fontSize: "0.85rem", color: NAVY, fontWeight: 600, lineHeight: 1.4 }}>
                        {nextPost.title}
                      </Typography>
                    </Box>
                    </Link>
                  ) : <Box sx={{ flex: 1 }} />}
                </Box>
              )}
            </Grid>

            {/* Sidebar */}
            <Grid size={{ xs: 12, md: 4 }} sx={{ display: { xs: "none", md: "block" } }}>
              <Box sx={{ position: "sticky", top: 96 }}>

                {/* O autorze */}
                <Box sx={{
                  backgroundColor: "#ffffff",
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${GOLD}`,
                  p: 3,
                  mb: 2.5,
                }}>
                  <Typography sx={{
                    fontSize: "0.68rem", fontWeight: 600,
                    letterSpacing: "0.18em", textTransform: "uppercase",
                    color: GOLD, mb: 2,
                  }}>
                    Autor
                  </Typography>
                  <Typography sx={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700, fontSize: "1rem", color: NAVY, mb: 0.4,
                  }}>
                    Jan Matusiak
                  </Typography>
                  <Typography sx={{
                    fontSize: "0.72rem", color: GOLD, fontWeight: 600,
                    letterSpacing: "0.1em", textTransform: "uppercase", mb: 1.75,
                  }}>
                    Radca prawny
                  </Typography>
                  <Typography sx={{
                    fontSize: "0.8rem", color: "#5A5A5A", lineHeight: 1.7,
                  }}>
                    Absolwent UJ, członek OIRP w Krakowie.
                  </Typography>
                </Box>

                {/* CTA */}
                <Box sx={{
                  backgroundColor: NAVY,
                  p: 3,
                  borderTop: `3px solid ${GOLD}`,
                }}>
                  <Typography sx={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700, fontSize: "1rem",
                    color: "#ffffff", lineHeight: 1.35, mb: 1.25,
                  }}>
                    Masz pytanie dotyczące tego tematu?
                  </Typography>
                  <Typography sx={{
                    fontSize: "0.8rem", color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.65, mb: 2.5,
                  }}>
                    Zapraszam do kontaktu — omówimy Twoją sprawę.
                  </Typography>
                  <Link href="/kontakt" style={{ textDecoration: "none", display: "block" }}>
                  <Box
                    sx={{
                      display: "block",
                      textAlign: "center",
                      backgroundColor: GOLD,
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      py: 1.5,
                      "&:hover": { backgroundColor: "#A07D3E" },
                      transition: "background-color 0.2s",
                    }}
                  >
                    Skontaktuj się
                  </Box>
                  </Link>
                </Box>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>

    </Box>
  );
}
