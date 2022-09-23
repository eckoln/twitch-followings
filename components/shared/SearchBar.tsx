import Input from "./ui/Input";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useState } from "react";

type SearchBarProps = React.ComponentProps<"div">;

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  const router = useRouter();
  const [query, setQuery] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;

    router.push({ pathname: "/[login]", query: { login: query } });
    setQuery(null);
  };

  return (
    <div className={clsx("w-full max-w-xs", className)}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <span className="absolute inset-y-0 flex items-center pl-4 pointer-events-none cursor-text">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </span>
          <Input
            type="text"
            className="pl-12"
            placeholder="Search for users..."
            value={query ?? ""}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
