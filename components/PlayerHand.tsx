import React, { useState } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
// import { Hand, ChevronDown, ChevronUp } from 'lucide-react-native';
import { PlayerHandProps } from "@/utils/types";
import { Button } from "./Button";
import Card from "./Card"; // Your custom card component
// import { Button } from './Button'; // Replace with your Expo-compatible buttonconst

const { width } = Dimensions.get("window");

export default function PlayerHand({
  cards,
  onCardClick,
  selectedCards,
  inFoot,
  onSwitchToFoot,
}: PlayerHandProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <View
      style={{
        backgroundColor: "rgba(120, 53, 15, 0.4)",
        padding: 16,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          {/* <Hand color="#fde68a" size={20} /> */}
          <Text style={{ color: "#fef3c7", fontWeight: "600" }}>
            {inFoot ? "Your Foot" : "Your Hand"} ({cards.length} cards)
          </Text>
        </View>

        <View style={{ flexDirection: "row", gap: 8 }}>
          {!inFoot && cards.length === 0 && (
            <Button
              onPress={onSwitchToFoot}
              title="Pick Up Foot"
              color="green"
            />
          )}
          <Pressable onPress={() => setCollapsed(!collapsed)}>
            {collapsed ? (
              //   <ChevronUp color="#fde68a" size={18} />
              <Text style={{ color: "#fef3c7", fontWeight: "600" }}>"^"</Text>
            ) : (
              //   <ChevronDown color="#fde68a" size={18} />
              <Text style={{ color: "#fef3c7", fontWeight: "600" }}>"V"</Text>
            )}
          </Pressable>
        </View>
      </View>

      {!collapsed && (
        <Carousel
          width={width * 0.6}
          height={180}
          data={cards}
          scrollAnimationDuration={600}
          renderItem={({ item, index }) => (
            <Card
              card={item}
              onClick={() => onCardClick(item, index)}
              selected={selectedCards.some((sc) => sc.idx === index)}
            />
          )}
          mode="parallax"
          loop
        />
      )}
    </View>
  );
}
