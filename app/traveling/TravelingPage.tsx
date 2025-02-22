import austriaTripMar25 from './austriaTripMar25.mp4';
import { PageHeader } from "../components/PageHeader";

export default function TravelingPage() {
  return (
    <main className="flex flex-col items-center pt-24 pb-4">
      <PageHeader />
      <div className="flex flex-col items-center gap-4 w-full max-w-2xl px-4">
      <video src={austriaTripMar25} autoPlay loop width="500" height="500" />

              <div className="flex justify-center max-w-[400px] w-full px-4">
                <div className="flex flex-row items-center gap-2">
                  <p className="text-center text-2xl font-bold whitespace-nowrap">Arvind is </p>
                  <p className="text-center text-2xl whitespace-nowrap">heading to Austria.</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <p className="text-center text-6xl whitespace-nowrap">🇦🇹</p>
              </div>
            </div>
    </main>
  );
}
