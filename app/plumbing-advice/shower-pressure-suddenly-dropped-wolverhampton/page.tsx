import type { Metadata } from "next";
import AdviceArticlePage from "@/app/_components/AdviceArticlePage";
import { getArticle, siteUrl } from "@/app/_data/siteContent";

const article = getArticle("shower-pressure-suddenly-dropped-wolverhampton");

export const metadata: Metadata = {
  title: article.title + " | Wolverhampton Plumbing Advice",
  description: article.description,
  alternates: { canonical: article.href },
  openGraph: {
    title: article.title,
    description: article.description,
    url: `${siteUrl}${article.href}`,
    type: "article",
    locale: "en_GB",
  },
};

export default function Page() {
  return <AdviceArticlePage article={article} />;
}



