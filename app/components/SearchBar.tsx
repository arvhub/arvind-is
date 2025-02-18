import { useState, useEffect, useRef } from 'react';
import { BiSearch } from "react-icons/bi";

interface SearchBarProps {
  placeholder: string;
  placeholderOpacity: number;
  options: string[];
  onSearch: (value: string) => void;
}

export function SearchBar({ placeholder, placeholderOpacity, options, onSearch }: SearchBarProps) {
  const [inputValue, setInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    setFocusedIndex(-1);
    updateFilteredOptions(value);
  };

  const updateFilteredOptions = (value: string) => {
    if (value) {
      const filtered = options
        .filter(option => option.toLowerCase().includes(value))
        .slice(0, 5);
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions(options.slice(0, 5));
    }
    setShowDropdown(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => 
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => prev > -1 ? prev - 1 : prev);
        break;
      case 'Tab':
        if (filteredOptions.length > 0) {
          e.preventDefault();
          setInputValue(filteredOptions[0]);
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0) {
          handleOptionClick(filteredOptions[focusedIndex]);
        } else if (filteredOptions.length > 0) {
          handleOptionClick(filteredOptions[0]);
        } else {
          onSearch(inputValue);
        }
        break;
      case 'Escape':
        setShowDropdown(false);
        setFocusedIndex(-1);
        break;
    }
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setShowDropdown(false);
    setFocusedIndex(-1);
    onSearch(option);
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() 
        ? <strong key={i} className="font-bold">{part}</strong> 
        : part
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredOptions.length > 0) {
      handleOptionClick(filteredOptions[0]);
    } else {
      onSearch(inputValue);
    }
  };

  return (
    <div className="relative">
      <div 
        ref={dropdownRef}
        className={`border border-gray-300 rounded-lg overflow-hidden ${showDropdown && filteredOptions.length > 0 ? 'border-gray-400' : ''}`}
      >
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => updateFilteredOptions(inputValue)}
            placeholder={placeholder}
            className="w-48 md:w-64 pr-8 pl-4 py-1 rounded-lg focus:outline-none placeholder:transition-opacity placeholder:duration-500"
            style={{ "--placeholder-opacity": placeholderOpacity } as any}
          />
          <button type="submit">
            <BiSearch className="absolute right-2 top-[10px] text-gray-400 w-4 h-4" />
          </button>
        </form>
        
        {showDropdown && filteredOptions.length > 0 && (
          <div className="flex flex-col bg-white dark:bg-gray-950">
            {filteredOptions.map((option, index) => (
              <div
                key={option}
                className={`px-4 py-2 cursor-pointer border-t border-gray-300 transition-colors ${
                  index === focusedIndex 
                    ? 'bg-gray-100/50' 
                    : 'hover:bg-gray-100/50'
                }`}
                onClick={() => handleOptionClick(option)}
                onMouseEnter={() => setFocusedIndex(index)}
                onMouseLeave={() => setFocusedIndex(-1)}
              >
                {highlightMatch(option, inputValue)}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 