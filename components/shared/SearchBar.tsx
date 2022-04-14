import Input from "./ui/Input";
import { SearchIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useState } from "react";

type SearchBarProps = {
  className?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!query) return;

    router.push(`/users/${query}`);
    setQuery("");
  };

  return (
    <div className={clsx("w-full max-w-xs", [className])}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <span className="flex absolute inset-y-0 items-center px-2 text-gray-400">
            <SearchIcon className="w-6 h-6" />
          </span>
          <Input
            type="text"
            className="pl-10"
            placeholder="Search for users..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
