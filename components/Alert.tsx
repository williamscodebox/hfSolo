import React from "react";
import { Text, View } from "react-native";

export default function AlertMessage({ message }: { message: string }) {
  if (!message) return null;

  return (
    <View className="mb-4 mx-2 bg-amber-100 border border-amber-400 rounded p-3">
      <Text className="text-amber-900">{message}</Text>
    </View>
  );
}
