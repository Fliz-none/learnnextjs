// app/news/page.tsx
import Container from "@/components/ui/Container";
import NewsList from "@/components/ui/news/NewsList";

export default async function NewsPage() {
  return (
    <Container className="py-5">
      <h1 className="h2 fw-bold mb-4">Latest News</h1>
      <NewsList />
    </Container>
  );
}
