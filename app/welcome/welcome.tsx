import headshot from "./headshot.jpeg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-4 min-h-0">
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
            <p className="text-center text-2xl font-bold whitespace-nowrap">Arvind is...</p>
            <p className="text-center text-2xl whitespace-nowrap">building a website!</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
            <p className="text-center text-6xl whitespace-nowrap">👨🏽‍💻</p>
        </div>
      </div>
    </main>
  );
}
