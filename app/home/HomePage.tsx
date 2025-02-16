import { PageHeader } from "../components/PageHeader";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center pt-16 pb-4">
      <PageHeader />
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Home</h1>
        <p>Welcome to my personal website!</p>
      </div>
    </main>
  );
}
