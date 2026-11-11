import { Search } from 'lucide-react';

export function SearchField({ className = '' }: { className?: string }) {
  return (
    <label
      className={`flex w-full items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-700 transition-colors duration-200 focus-within:border-primary-500 ${className}`}
    >
      <Search className="h-4 w-4 shrink-0 text-neutral-500" aria-hidden="true" />
      <input
        type="search"
        placeholder="TÌM KIẾM"
        className="w-full min-w-0 bg-transparent placeholder:text-neutral-400 placeholder:uppercase focus:outline-none"
      />
    </label>
  );
}
