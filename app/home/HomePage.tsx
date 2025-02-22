import { PageHeader } from "../components/PageHeader";
import nyc from "./nyc.jpg";
export default function HomePage() {
  return (
    <main className="flex items-center justify-center pt-24 pb-4">
      <PageHeader />
      <div className="flex-1 flex flex-col items-center gap-4 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="flex w-[500px] max-w-[100vw] p-4 items-center justify-center">
            <img src={nyc} alt="New York City" />
          </div>
        </header>
        <div className="flex justify-center max-w-[400px] w-full px-4">
          <div className="flex flex-row items-center gap-2">
            <p className="text-center text-2xl font-bold whitespace-nowrap">
              Arvind is{" "}
            </p>
            <p className="text-center text-2xl whitespace-nowrap">
              home in NYC.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="text-center text-6xl whitespace-nowrap">🌃</p>
        </div>
      </div>
    </main>
  );
}
