import { PageHeader } from "../components/PageHeader";

export default function WatchingPage() {
  return (
    <main className="flex flex-col items-center pt-16 pb-4">
      <PageHeader />
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Watching</h1>
        <p>Shows and movies I'm currently watching...</p>
      </div>
    </main>
  );
}
