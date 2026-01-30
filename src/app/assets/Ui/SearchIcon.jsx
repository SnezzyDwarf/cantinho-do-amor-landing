export default function SearchIcon({ size = 24, className }) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="black"
        stroke-width={8}
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="100" cy="100" r="70" />
        <circle cx="100" cy="100" r="45" />
        <circle cx="100" cy="100" r="20" />

        <path d="M100 100 L160 60" />

        <circle cx="145" cy="65" r="5" fill="black" />
      </svg>
    </>
  );
}
