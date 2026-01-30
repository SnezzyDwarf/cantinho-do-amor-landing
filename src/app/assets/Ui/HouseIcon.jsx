export default function HouseIcon({ size = 24, className }) {
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
        <path d="M30 90 L100 30 L170 90" />

        <path d="M50 90 V160 H150 V90" />

        <path d="M90 160 V120 H110 V160" />
      </svg>
    </>
  );
}
