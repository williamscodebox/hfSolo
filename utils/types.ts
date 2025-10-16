import { ViewStyle } from "react-native";

export type SelectedCard = {
  idx: number;
  // Add other fields if needed, like suit/value/etc.
};

export type CardType = {
  suit: "hearts" | "diamonds" | "clubs" | "spades";
  display: string;
  value: string;
};

export type CardProps = {
  card: CardType;
  onClick: () => void;
  selected: boolean;
  size?: "small" | "normal" | "large";
  faceDown?: boolean;
};

export interface ButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
  textColor?: string;
  style?: ViewStyle;
}

export interface PlayerHandProps {
  cards: CardType[]; // Replace `any` with your actual Card type if available
  onCardClick: (card: CardType, idx: number) => void;
  selectedCards: SelectedCard[];
  inFoot: boolean;
  onSwitchToFoot: () => void;
}
