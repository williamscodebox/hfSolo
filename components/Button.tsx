import { ButtonProps } from "@/utils/types";
import React from "react";
import { Pressable, Text } from "react-native";

export function Button({
  title,
  onPress,
  color = "#16a34a",
  textColor = "#fff",
  style = {},
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? darken(color, 0.1) : color,
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 12,
          alignItems: "center",
        },
        style,
      ]}
    >
      <Text style={{ color: textColor, fontWeight: "600" }}>{title}</Text>
    </Pressable>
  );
}

// Optional: simple color darkener
function darken(hex: string, amount = 0.1): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, (num >> 16) - 255 * amount);
  const g = Math.max(0, ((num >> 8) & 0x00ff) - 255 * amount);
  const b = Math.max(0, (num & 0x0000ff) - 255 * amount);
  return `rgb(${r},${g},${b})`;
}
