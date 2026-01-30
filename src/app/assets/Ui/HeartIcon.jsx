export default function HeartIcon({ size = 24, className = "" }) {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21
       C12 21 4 14.5 4 9
       C4 6.5 6 5 8 5
       C9.5 5 11 6 12 7.5
       C13 6 14.5 5 16 5
       C18 5 20 6.5 20 9
       C20 14.5 12 21 12 21Z"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
}
