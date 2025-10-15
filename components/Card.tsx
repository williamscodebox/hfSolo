import { cn } from "@/utils/cn"; // optional utility for class merging
import { CardProps } from "@/utils/types";
import { MotiView } from "moti";
import React from "react";
import { Pressable, Text } from "react-native";

const SUITS = { hearts: "♥", diamonds: "♦", clubs: "♣", spades: "♠" };

export default function Card({
  card,
  onClick,
  selected,
  size = "normal",
  faceDown = false,
}: CardProps) {
  const isRed = card.suit === "hearts" || card.suit === "diamonds";

  const sizeStyles = {
    small: "w-12 h-16 text-xs",
    normal: "w-16 h-24 text-sm",
    large: "w-20 h-28 text-base",
  };

  const baseStyle = cn(
    sizeStyles[size],
    "rounded-lg border-2 shadow-lg flex items-center justify-center"
  );

  if (faceDown) {
    return (
      <Pressable onPress={onClick}>
        <MotiView
          from={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ type: "timing", duration: 150 }}
          className={cn(
            baseStyle,
            "bg-gradient-to-br from-blue-600 to-blue-800 border-blue-400"
          )}
        >
          <Text className="text-white opacity-50 text-2xl">★</Text>
        </MotiView>
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onClick}>
      <MotiView
        from={{ scale: 1, translateY: 0 }}
        animate={{
          scale: selected ? 1.05 : 1,
          translateY: selected ? -5 : 0,
        }}
        transition={{ type: "timing", duration: 150 }}
        className={cn(
          baseStyle,
          "bg-white p-1 relative flex-col",
          selected ? "border-yellow-400 shadow-xl" : "border-gray-300",
          card.value === "RED3" ? "bg-red-50" : ""
        )}
      >
        <Text
          className={cn("font-bold", isRed ? "text-red-600" : "text-gray-900")}
        >
          {card.display}
        </Text>
        <Text
          className={cn(
            "text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            isRed ? "text-red-600" : "text-gray-900"
          )}
        >
          {SUITS[card.suit]}
        </Text>
        <Text
          className={cn(
            "font-bold self-end rotate-180",
            isRed ? "text-red-600" : "text-gray-900"
          )}
        >
          {card.display}
        </Text>
      </MotiView>
    </Pressable>
  );
}
