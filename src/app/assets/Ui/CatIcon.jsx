export default function CatIcon({ size = 24, className }) {
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
        <path d="M55 55 L70 15 L90 55" />

        <path d="M110 55 L130 15 L145 55" />

        <circle cx="75" cy="95" r="5" fill="black" />
        <circle cx="125" cy="95" r="5" fill="black" />

        <path d="M95 110 L105 110 L100 118 Z" fill="black" />

        <path d="M100 118 Q95 125 90 128" />
        <path d="M100 118 Q105 125 110 128" />

        <path d="M30 100 L65 105" />
        <path d="M30 115 L65 112" />

        <path d="M135 105 L170 100" />
        <path d="M135 112 L170 115" />
      </svg>
    </>
  );
}
