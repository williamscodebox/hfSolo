import Card from "@/components/Card";
import MyCarousel from "@/components/Carousel";
import PlayerHand from "@/components/PlayerHand";
import { CardType } from "@/utils/types";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export default function Index() {
  const cards: CardType[] = [
    { suit: "hearts", value: "5", display: "5" },
    { suit: "spades", value: "K", display: "K" },
    { suit: "diamonds", value: "K", display: "K" },
    { suit: "clubs", value: "A", display: "A" },
    { suit: "spades", value: "K", display: "K" },
    { suit: "spades", value: "Q", display: "Q" },
    { suit: "hearts", value: "K", display: "K" },
    { suit: "spades", value: "J", display: "J" },
    { suit: "diamonds", value: "K", display: "K" },
    { suit: "clubs", value: "K", display: "K" },
    { suit: "clubs", value: "10", display: "10" },
    { suit: "diamonds", value: "K", display: "K" },
    { suit: "hearts", value: "9", display: "9" },
    { suit: "spades", value: "4", display: "4" },
  ];
  const { width } = Dimensions.get("window");

  const CARD_GAP = 8; // space between cards
  const CARD_WIDTH = (width - CARD_GAP * 6) / 5;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <View className="items-center justify-center bg-black h-24 w-full">
        <Text className="text-white text-xl font-bold">
          NativeWind + Expo Router ✅
        </Text>
      </View>
      <Card
        key={1}
        card={{ suit: "hearts", display: "A", value: "1" }}
        onPress={() => console.log("Card clicked")}
        selected={false}
      />
      <Card
        key={2}
        card={{ suit: "clubs", display: "A", value: "1" }}
        onPress={() => console.log("Card clicked")}
        selected={false}
      />
      <Card
        key={3}
        card={{ suit: "spades", display: "A", value: "1" }}
        onPress={() => console.log("Card clicked")}
        selected={false}
      />
      <Card
        key={4}
        card={{ suit: "diamonds", display: "A", value: "1" }}
        onPress={() => console.log("Card clicked")}
        selected={false}
      />
      <MyCarousel />
      <PlayerHand
        cards={cards}
        onCardClick={() => console.log("Card clicked")}
        selectedCards={[]}
        inFoot={false}
        onSwitchToFoot={() => console.log("Switch to foot")}
      />
      <View
        style={{
          width: "100%",
          backgroundColor: "blue",
          height: 120,
          marginTop: 20,
        }}
      >
        <Carousel
          width={CARD_WIDTH}
          height={100}
          data={cards}
          style={{ width: "100%" }}
          // scrollAnimationDuration={600}
          renderItem={({ item, index }) => (
            <View style={{ marginHorizontal: CARD_GAP / 2 }}>
              <Card
                card={item}
                onPress={() => console.log("Card clicked")}
                selected={false}
              />
            </View>
          )}
          loop
          pagingEnabled={false}
        />
      </View>
    </View>
  );
}
