import { ComputerPlayerProps } from "@/utils/types";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Text, View } from "react-native";

export default function ComputerPlayer({
  player,
  isCurrentTurn,
}: ComputerPlayerProps) {
  return (
    <View
      className={`rounded-lg p-3 border-2 ${
        isCurrentTurn ? "border-yellow-400" : "border-green-700/50"
      }`}
      style={{
        backgroundColor: "rgba(20, 83, 45, 0.4)", // from-green-800/40
      }}
    >
      <View className="flex-row items-center justify-between mb-2">
        <View className="flex-row items-center gap-2">
          <Feather name="user" size={20} color="#bbf7d0" />
          <Text className="text-green-100 font-semibold">{player.name}</Text>
        </View>

        {isCurrentTurn && (
          <View className="bg-yellow-400 px-2 py-1 rounded-full">
            <Text className="text-gray-900 text-xs font-semibold">Turn</Text>
          </View>
        )}
      </View>

      <View className="flex-row gap-3 text-xs">
        <View className="flex-row items-center gap-1">
          <FontAwesome name="hand-stop-o" size={12} color="#bbf7d0" />
          <Text className="text-green-200">
            {player.inFoot ? "Foot" : "Hand"}: {player.hand.length}
          </Text>
        </View>
        <Text className="text-green-200">Score: {player.score}</Text>
      </View>
    </View>
  );
}
