export default function IconUser({ size = 24, className }) {
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
          d="M12 11
       C10.3 11 9 9.7 9 8
       C9 6.3 10.3 5 12 5
       C13.7 5 15 6.3 15 8
       C15 9.7 13.7 11 12 11Z"
          stroke="white"
          stroke-width={1.8}
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <path
          d="M6 19
       C6 16.2 9 15 12 15
       C15 15 18 16.2 18 19"
          stroke="white"
          stroke-width={1.8}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}
