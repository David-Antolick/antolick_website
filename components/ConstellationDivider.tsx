export default function ConstellationDivider() {
  return (
    <div className="flex items-center justify-center py-4" aria-hidden="true">
      <svg
        width="200"
        height="20"
        viewBox="0 0 200 20"
        className="text-violet-400"
      >
        {/* Stars (dots) */}
        <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.4" />
        <circle cx="45" cy="5" r="1" fill="currentColor" opacity="0.6" />
        <circle cx="75" cy="14" r="2" fill="currentColor" opacity="0.8" />
        <circle cx="100" cy="10" r="2.5" fill="currentColor" opacity="1" />
        <circle cx="125" cy="6" r="2" fill="currentColor" opacity="0.8" />
        <circle cx="155" cy="15" r="1" fill="currentColor" opacity="0.6" />
        <circle cx="190" cy="10" r="1.5" fill="currentColor" opacity="0.4" />

        {/* Constellation lines */}
        <line
          x1="10" y1="10" x2="45" y2="5"
          stroke="currentColor" strokeWidth="0.5" opacity="0.2"
        />
        <line
          x1="45" y1="5" x2="75" y2="14"
          stroke="currentColor" strokeWidth="0.5" opacity="0.3"
        />
        <line
          x1="75" y1="14" x2="100" y2="10"
          stroke="currentColor" strokeWidth="0.5" opacity="0.4"
        />
        <line
          x1="100" y1="10" x2="125" y2="6"
          stroke="currentColor" strokeWidth="0.5" opacity="0.4"
        />
        <line
          x1="125" y1="6" x2="155" y2="15"
          stroke="currentColor" strokeWidth="0.5" opacity="0.3"
        />
        <line
          x1="155" y1="15" x2="190" y2="10"
          stroke="currentColor" strokeWidth="0.5" opacity="0.2"
        />
      </svg>
    </div>
  );
}
