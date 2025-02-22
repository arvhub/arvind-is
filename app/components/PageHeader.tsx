import { BiLogoGithub } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { SearchBar } from "./SearchBar";
import { shuffleArray } from "../util/helpers";

export function PageHeader() {
  const navigate = useNavigate();
  const placeholderOptions = [
    "home",
    "watching",
    "traveling",
    "coding",
    "reading",
    "on Github",
    "on Instagram",
    "on LinkedIn",
    "on Facebook",
    "on Spotify",
  ];
  const lowerPlaceholderOptions = placeholderOptions.map(placeholder => placeholder.toLowerCase());
  const shuffledPlaceholderOptions = shuffleArray(placeholderOptions);
  const [placeholder, setPlaceholder] = useState(shuffledPlaceholderOptions[0]);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);

      setTimeout(() => {
        setPlaceholder((current) => {
          const currentIndex = shuffledPlaceholderOptions.indexOf(current);
          const nextIndex = (currentIndex + 1) % placeholderOptions.length;
          return placeholderOptions[nextIndex];
        });
        setOpacity(1);
      }, 500);
    }, 5000);

    setTimeout(() => setOpacity(1), 500);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (value: string) => {
    if (lowerPlaceholderOptions.includes(value.toLowerCase())) {
      navigate(`/${value.toLowerCase().replace(/ /g, '/')}`);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 h-16 md:h-auto bg-white dark:bg-gray-950"
      style={{ zIndex: 50 }}
    >
      <div className="flex justify-between items-start p-4 md:items-center md:flex-row">
        <div className="flex items-start gap-2">
          <p
            onClick={() => navigate("/")}
            className="text-2xl font-bold cursor-pointer hover:text-gray-600 transition-colors"
          >
            Arvind is...
          </p>
          <div className="relative h-[40px]">
            <SearchBar
              placeholder={placeholder}
              placeholderOpacity={opacity}
              options={placeholderOptions}
              onSearch={handleSearch}
            />
          </div>
        </div>
        <a
          href="https://github.com/arvhub/arvind-is"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1"
        >
          <BiLogoGithub className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
