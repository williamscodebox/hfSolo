import { GameControlsProps } from "@/utils/types";
import { CheckCircle, PlayCircle, Trash2 } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import { Button } from "./Button";
// import { Button } from '@/components/ui/button'; // Assuming you're using NativeWind-compatible buttons

export default function GameControls({
  selectedCards,
  onCreateMeld,
  onAddToMeld,
  onDiscard,
  onDrawFromDeck,
  onDrawFromDiscard,
  canDraw,
  canDiscard,
  //   melds,
}: GameControlsProps) {
  return (
    <View className="bg-amber-900/40 rounded-lg p-4 border border-amber-700/50">
      <View className="flex flex-wrap flex-row justify-between gap-2">
        <Button
          onPress={onDrawFromDeck}
          disabled={!canDraw}
          className="bg-blue-600 hover:bg-blue-700 flex-row items-center gap-2"
        >
          <PlayCircle size={16} />
          <Text className="text-white">Draw Deck</Text>
        </Button>

        <Button
          onPress={onDrawFromDiscard}
          disabled={!canDraw}
          //   variant="outline"
          className="flex-row items-center gap-2"
        >
          <PlayCircle size={16} />
          <Text className="text-white">Draw Discard</Text>
        </Button>

        <Button
          onPress={onCreateMeld}
          disabled={selectedCards.length < 3}
          className="bg-green-600 hover:bg-green-700 flex-row items-center gap-2"
        >
          <CheckCircle size={16} />
          <Text className="text-white">Create Meld</Text>
        </Button>

        <Button
          onPress={onDiscard}
          disabled={!canDiscard || selectedCards.length !== 1}
          className="bg-red-600 hover:bg-red-700 flex-row items-center gap-2"
        >
          <Trash2 size={16} />
          <Text className="text-white">Discard</Text>
        </Button>
      </View>

      {selectedCards.length > 0 && (
        <Text className="mt-2 text-sm text-amber-200">
          Selected: {selectedCards.length} card
          {selectedCards.length > 1 ? "s" : ""}
        </Text>
      )}
    </View>
  );
}
