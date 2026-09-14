type Props = {
  className?: string;
  tone?: "light" | "dark";
};

/** The brand mark: a faceted diamond outline, built from straight technical strokes. */
export default function DiamondMark({ className = "", tone = "light" }: Props) {
  const stroke = tone === "light" ? "#f4f3ef" : "#14171a";
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 3 L34 15 L20 37 L6 15 Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M6 15 L34 15" stroke="#e8871f" strokeWidth="2" />
      <path d="M20 3 L14 15 L20 37" stroke={stroke} strokeWidth="1.25" opacity="0.55" />
      <path d="M20 3 L26 15 L20 37" stroke={stroke} strokeWidth="1.25" opacity="0.55" />
    </svg>
  );
}
