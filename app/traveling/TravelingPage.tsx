import { PageHeader } from "../components/PageHeader";

export default function TravelingPage() {
  return (
    <main className="flex flex-col items-center pt-24 pb-4">
      <PageHeader />
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Traveling</h1>
        <p>Places I've been and where I'm headed next...</p>
      </div>
    </main>
  );
}
