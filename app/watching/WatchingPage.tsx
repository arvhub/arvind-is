import { PageHeader } from "../components/PageHeader";
import { ImageCarousel } from "../components/ImageCarousel";
import severance from "./severance.png";
import theBear from "./theBear.png";
import couplesTherapy from "./couplesTherapy.jpg";
import amazingRace from "./amazingRace.png";

const images = [severance, theBear, couplesTherapy, amazingRace];

export default function WatchingPage() {
  return (
    <main className="flex flex-col items-center pt-24 pb-4">
      <PageHeader />
      <div className="flex flex-col items-center gap-4 w-full max-w-2xl px-4">
        <div className="w-full max-w-[400px] rounded-lg overflow-hidden">
          <div className="relative pb-[150%]">
            <div className="absolute inset-0">
              <ImageCarousel images={images} />
            </div>
          </div>
        </div>
        <div className="flex justify-center max-w-[400px] w-full px-4">
          <div className="flex flex-row items-center gap-2">
            <p className="text-center text-2xl font-bold whitespace-nowrap">
              Arvind is{" "}
            </p>
            <p className="text-center text-2xl whitespace-nowrap">
              watching some shows.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="text-center text-6xl whitespace-nowrap">🍿</p>
        </div>
      </div>
    </main>
  );
}
