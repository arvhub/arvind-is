import { PageHeader } from "../components/PageHeader";

export default function CodingPage() {
  return (
    <main className="flex flex-col items-center pt-24 pb-4">
      <PageHeader />
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Coding</h1>
        <p>My coding journey and projects...</p>
      </div>
    </main>
  );
}
