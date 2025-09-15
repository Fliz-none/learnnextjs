// app/news/page.tsx
import Container from "@/components/ui/Container";
import NewsList from "@/components/ui/news/NewsList";


export default async function NewsPage() {
  return (
    <Container className="py-10">
      <h1 className="text-3xl font-bold text-gray-900">Latest News</h1>
      <NewsList />
    </Container>
  );
}
