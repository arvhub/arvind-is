import headshot from "./headshot.jpg";
import { PageHeader } from "./components/PageHeader";

export default function WelcomePage() {
  return (
    <main className="flex items-center justify-center pt-24 pb-4">
      <PageHeader />
      <div className="flex-1 flex flex-col items-center gap-4 min-h-0">
        <div className="flex justify-center max-w-[400px] w-full px-4">
          <div className="flex flex-row items-center gap-2">
            <p className="text-center text-2xl">
              Hi! I'm <b>Arvind</b>.
            </p>
          </div>
        </div>
        <header className="flex flex-col items-center gap-9">
          <div className="flex w-[500px] max-w-[100vw] p-4 items-center justify-center">
            <img
              src={headshot}
              alt="Arvind"
              className="rounded-full w-48 h-48"
            />
          </div>
        </header>
        <div className="flex justify-center max-w-[400px] w-full px-4">
          <div className="flex flex-row items-center gap-2">
            <p className="text-center text-2xl">
              Find out what <b>Arvind is</b> doing by searching the website 🔍
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
