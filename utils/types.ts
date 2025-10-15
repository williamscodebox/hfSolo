export type CardProps = {
  card: {
    suit: "hearts" | "diamonds" | "clubs" | "spades";
    display: string;
    value: string;
  };
  onClick: () => void;
  selected: boolean;
  size?: "small" | "normal" | "large";
  faceDown?: boolean;
};
