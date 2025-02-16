import { BiLogoGithub } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { SearchBar } from "./SearchBar";

export function PageHeader() {
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
      setOpacity(0);
      
      setTimeout(() => {
        setPlaceholder(current => {
          const currentIndex = placeholderOptions.indexOf(current);
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
    if (placeholderOptions.includes(value.toLowerCase())) {
      navigate(`/${value.toLowerCase()}`);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-16">
      <div className="flex justify-between items-start p-4">
        <div className="flex items-start gap-2">
          <p 
            onClick={() => navigate('/')} 
            className="text-2xl font-bold cursor-pointer hover:text-gray-600 transition-colors"
          >
            Arvind is...
          </p>
          <div className="relative">
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