export default function ShieldIcon({ size = 24, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2
           L20 5
           V11
           C20 16 16.5 19.5 12 22
           C7.5 19.5 4 16 4 11
           V5
           L12 2Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
