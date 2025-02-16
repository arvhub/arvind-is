import headshot from "./headshot.jpeg";
import { BiLogoGithub, BiSearch } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export function Welcome() {
  const navigate = useNavigate();
  const placeholderOptions = [
    "home",
    "watching",
    "traveling",
    "coding",
    "reading",
    "learning",
  ];
  const [placeholder, setPlaceholder] = useState(placeholderOptions[0]);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setOpacity(0);
      
      // Change text when fully transparent
      setTimeout(() => {
        setPlaceholder(current => {
          const currentIndex = placeholderOptions.indexOf(current);
          const nextIndex = (currentIndex + 1) % placeholderOptions.length;
          return placeholderOptions[nextIndex];
        });
        // Start fade in
        setOpacity(1);
      }, 500);
    }, 5000);

    // Initial fade in
    setTimeout(() => setOpacity(1), 500);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.querySelector('input');
    if (input && input.value && placeholderOptions.includes(input.value.toLowerCase())) {
      navigate(`/${input.value.toLowerCase()}`);
    }
  };

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="fixed top-4 left-4 flex items-center gap-2">
        <p className="text-2xl font-bold">Arvind is...</p>
        <form onSubmit={handleSearch} className="relative">
          <input 
            type="text" 
            placeholder={placeholder}
            className="pr-8 pl-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400 placeholder:transition-opacity placeholder:duration-500"
            style={{ "--placeholder-opacity": opacity } as any}
          />
          <button type="submit">
            <BiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </button>
        </form>
      </div>
      <div className="fixed top-4 right-4">
          <a href="https://github.com/arvhub/arvind-is" target="_blank" rel="noopener noreferrer">
            <BiLogoGithub className="w-10 h-10" />
          </a>
      </div>
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
            <p className="text-center text-2xl font-bold whitespace-nowrap">Arvind is </p>
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
