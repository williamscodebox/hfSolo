import React, { useRef, useState } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
// import { Hand, ChevronDown, ChevronUp } from 'lucide-react-native';
import { PlayerHandProps } from "@/utils/types";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import { Button } from "./Button";
import Card from "./Card"; // Your custom card component

const { width } = Dimensions.get("window");

const CARD_GAP = 12; // space between cards
const CARD_WIDTH = (width - CARD_GAP * 6) / 5;

export default function PlayerHand({
  cards,
  onCardClick,
  selectedCards,
  inFoot,
  onSwitchToFoot,
}: PlayerHandProps) {
  const [collapsed, setCollapsed] = useState(false);
  const carouselRef = useRef<ICarouselInstance>(null);

  return (
    <View
      style={{
        backgroundColor: "rgba(120, 53, 15, 0.4)",
        padding: 2,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 15,
            paddingRight: 20,
            gap: 8,
          }}
        >
          {/* <Hand color="#fde68a" size={20} /> */}
          <Text style={{ color: "#fef3c7", fontWeight: "600" }}>
            {inFoot ? "Your Foot" : "Your Hand"} ({cards.length} cards)
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginRight: 15, gap: 8 }}>
          {!inFoot && cards.length === 0 && (
            <Button
              onPress={onSwitchToFoot}
              title="Pick Up Foot"
              color="green"
              className="bg-green-600 hover:bg-green-700 flex-row items-center gap-2"
            >
              <Text style={{ color: "white", fontWeight: "600" }}>
                Pick Up Foot
              </Text>
            </Button>
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
        <View style={{ width: width }}>
          <Carousel
            ref={carouselRef}
            width={CARD_WIDTH}
            height={100}
            data={cards}
            style={{ width: "100%" }}
            onProgressChange={(offsetProgress, absoluteProgress) => {
              const lastVisibleIndex = cards.length - 6;
              if (absoluteProgress > lastVisibleIndex) {
                carouselRef.current?.scrollTo({
                  index: lastVisibleIndex,
                  animated: true,
                });
              }
            }}
            // scrollAnimationDuration={600}
            renderItem={({ item, index }) => (
              <View style={{ marginHorizontal: CARD_GAP / 2 }}>
                <Card
                  card={item}
                  onPress={() => onCardClick(item, index)}
                  selected={selectedCards.some((sc) => sc.idx === index)}
                />
              </View>
            )}
            loop={false}
            pagingEnabled={false}
          />
        </View>
      )}
    </View>
  );
}
