function Rerth({ className }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(245,158,11,0.7)] hover:scale-110 ${className || ""}`}
    >
      <path
        d="m26.88 92.29c.86.55 1.95.61 2.87.17l29.4-14 10 13.12c.59.77 1.47 1.17 2.37 1.17.63 0 1.26-.2 1.8-.61 1.31-1 1.56-2.87.56-4.18l-11.46-15.04c-.85-1.12-2.38-1.49-3.65-.88l-27.32 13.01v-70.13l27.78 13.05c1.28.6 2.82.22 3.66-.92l11.02-14.9c.98-1.32.7-3.19-.62-4.17s-3.18-.7-4.16.62l-9.57 12.93-29.82-14c-.92-.43-2-.36-2.86.18-.86.55-1.38 1.5-1.38 2.51v79.55c0 1.03.52 1.98 1.38 2.52z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Rerth;
