import { MeldAreaProps } from "@/utils/types";
import { CheckCircle, Target } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import Card from "./Card"; // Make sure this is your React Native version

export default function MeldArea({
  melds,
  playerName,
  isCurrentPlayer,
}: MeldAreaProps) {
  return (
    <View
      className={`rounded-lg p-3 border-2 ${
        isCurrentPlayer ? "border-yellow-400" : "border-green-700/50"
      }`}
      style={{ backgroundColor: "rgba(22, 101, 52, 0.3)" }} // Tailwind's green-800/30
    >
      <View className="flex-row items-center gap-2 mb-2">
        <Target size={16} color="#bbf7d0" />
        <Text className="text-green-100 font-semibold text-sm">
          {playerName}'s Melds
        </Text>
      </View>

      <View className="flex-row flex-wrap gap-3">
        {melds.length === 0 ? (
          <Text className="text-green-300/50 text-xs italic">No melds yet</Text>
        ) : (
          melds.map((meld, idx) => (
            <View
              key={idx}
              className="rounded-lg p-2 border border-green-700/50"
              style={{ backgroundColor: "rgba(20, 83, 45, 0.4)" }} // green-900/40
            >
              <View className="flex-row items-center gap-1 mb-1">
                <Text className="text-xs text-green-200">
                  {meld.value} ({meld.cards.length})
                </Text>
                {meld.cards.length >= 7 && (
                  <CheckCircle size={12} color="#facc15" /> // Tailwind yellow-400
                )}
              </View>
              <View className="flex-row gap-1 flex-wrap">
                {meld.cards.map((card, cardIdx) => (
                  <Card
                    key={cardIdx}
                    card={card}
                    size="small"
                    onPress={() => {}}
                    selected={false}
                  />
                ))}
              </View>
            </View>
          ))
        )}
      </View>
    </View>
  );
}
