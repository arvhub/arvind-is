import { PageHeader } from "../components/PageHeader";

export default function LearningPage() {
  return (
    <main className="flex flex-col items-center pt-16 pb-4">
      <PageHeader />
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Learning</h1>
        <p>What I'm currently learning...</p>
      </div>
    </main>
  );
}
