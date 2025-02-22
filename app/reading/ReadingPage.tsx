import breakfast from "./breakfastOfChampions.jpg";
import { PageHeader } from "../components/PageHeader";

export default function ReadingPage() {
  return (
    <main className="flex items-center justify-center pt-24 pb-4">
      <PageHeader />
      <div className="flex-1 flex flex-col items-center gap-4 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="flex w-[500px] max-w-[100vw] p-4 items-center justify-center">
            <img
              src={breakfast}
              alt="Breakfast of Champions book cover"
              className="w-100 h-150"
            />
          </div>
        </header>
        <div className="flex justify-center max-w-[400px] w-full px-4">
          <div className="flex flex-row items-center gap-2">
            <p className="text-center text-2xl">
              <b>Arvind is</b> continuing to binge Vonnegut novels 📚
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
