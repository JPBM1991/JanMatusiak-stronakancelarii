import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { getAllPostsEN } from "@/lib/posts-en";

const BASE = "https://matusiak.legal";

const staticPL = [
  "",
  "/kancelaria",
  "/jan-matusiak",
  "/prawnicy",
  "/of-counsel",
  "/praktyka",
  "/dla-przedsiebiorcow",
  "/aktualnosci",
  "/kontakt",
  "/aml-rodo",
  "/polityka-cookies",
];

const staticEN = [
  "/en",
  "/en/kancelaria",
  "/en/jan-matusiak",
  "/en/prawnicy",
  "/en/of-counsel",
  "/en/praktyka",
  "/en/dla-przedsiebiorcow",
  "/en/aktualnosci",
  "/en/kontakt",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const plPages: MetadataRoute.Sitemap = staticPL.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  const enPages: MetadataRoute.Sitemap = staticEN.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "/en" ? 0.9 : 0.7,
  }));

  const plPosts = getAllPosts().map((post) => ({
    url: `${BASE}/aktualnosci/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const enPosts = getAllPostsEN().map((post) => ({
    url: `${BASE}/en/aktualnosci/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...plPages, ...enPages, ...plPosts, ...enPosts];
}
