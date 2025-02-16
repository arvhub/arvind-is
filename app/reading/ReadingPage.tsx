import { PageHeader } from "../components/PageHeader";

export default function ReadingPage() {
  return (
    <main className="flex flex-col items-center pt-16 pb-4">
      <PageHeader />
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Reading</h1>
        <p>Books and articles I'm currently reading...</p>
      </div>
    </main>
  );
}
