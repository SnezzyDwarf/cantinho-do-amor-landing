export default function VetIcon({ size = 24, className }) {
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
        stroke-width={10}
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="70" cy="30" r="6" fill="black" />
        <circle cx="130" cy="30" r="6" fill="black" />

        <path d="M70 36 V70" />
        <path d="M130 36 V70" />

        <path d="M70 70 Q70 120 100 130" />
        <path d="M130 70 Q130 120 100 130" />

        <path d="M100 130 V155" />

        <circle cx="100" cy="165" r="12" />
      </svg>
    </>
  );
}
