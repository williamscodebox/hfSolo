export type SelectedCard = {
  idx: number;
  // Add other fields if needed, like suit/value/etc.
};

export type CardType = {
  suit: "hearts" | "diamonds" | "clubs" | "spades";
  display: string;
  value: string;
};

export interface CardProps {
  card: CardType;
  onPress: () => void;
  selected: boolean;
  size?: "small" | "normal" | "large";
  faceDown?: boolean;
}

export interface ButtonProps {
  title?: string;
  onPress: () => void;
  disabled?: boolean;
  color?: string;
  textColor?: string;
  className: string;
  children: React.ReactNode;
}

export interface PlayerHandProps {
  cards: CardType[]; // Replace `any` with your actual Card type if available
  onCardClick: (card: CardType, idx: number) => void;
  selectedCards: SelectedCard[];
  inFoot: boolean;
  onSwitchToFoot: () => void;
}

export type RulesModalProps = {
  showRules: boolean;
  setShowRules: (value: boolean) => void;
};

export interface GameControlsProps {
  selectedCards: CardProps[];
  onCreateMeld: () => void;
  onAddToMeld: () => void;
  onDiscard: () => void;
  onDrawFromDeck: () => void;
  onDrawFromDiscard: () => void;
  canDraw: boolean;
  canDiscard: boolean;
  // melds: Meld[];
}

export interface Player {
  name: string;
  inFoot: boolean;
  hand: CardType[]; // Replace `Card` with your actual card type
  score: number;
}

export interface ComputerPlayerProps {
  player: Player;
  isCurrentTurn: boolean;
}

export interface Meld {
  value: string;
  cards: CardType[]; // Replace with your actual card type
}

export interface MeldAreaProps {
  melds: Meld[];
  playerName: string;
  isCurrentPlayer: boolean;
}

export interface GameState {
  currentPlayerIndex: number;
  players: Player[];
  // add other fields as needed
}
