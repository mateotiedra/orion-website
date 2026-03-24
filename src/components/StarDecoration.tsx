export default function StarDecoration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l2.09 6.26L20.18 9.27l-4.64 4.53L16.54 20 12 16.77 7.46 20l1-6.2L3.82 9.27l6.09-1.01z" />
    </svg>
  );
}
