export function AuthLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-sm font-medium text-neutral-700 whitespace-nowrap ${className}`}>
      <button
        type="button"
        className="rounded px-1 py-0.5 transition-colors duration-200 hover:text-primary-500"
      >
        ĐĂNG NHẬP
      </button>
      <span className="h-4 w-px bg-neutral-300" aria-hidden="true" />
      <button
        type="button"
        className="rounded px-1 py-0.5 transition-colors duration-200 hover:text-primary-500"
      >
        ĐĂNG KÍ
      </button>
    </div>
  );
}
