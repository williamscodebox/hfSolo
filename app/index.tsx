import Card from "@/components/Card";
import MyCarousel from "@/components/Carousel";
import PlayerHand from "@/components/PlayerHand";
import { CardType } from "@/utils/types";
import { Text, View } from "react-native";

export default function Index() {
  const cards: CardType[] = [
    { suit: "hearts", value: "5", display: "5♥" },
    { suit: "spades", value: "K", display: "K♠" },
    { suit: "spades", value: "K", display: "K♠" },
    { suit: "spades", value: "K", display: "K♠" },
    { suit: "spades", value: "K", display: "K♠" },
    { suit: "spades", value: "K", display: "K♠" },
    { suit: "spades", value: "K", display: "K♠" },
    { suit: "spades", value: "K", display: "K♠" },
    { suit: "spades", value: "K", display: "K♠" },
    { suit: "spades", value: "K", display: "K♠" },
    { suit: "spades", value: "K", display: "K♠" },
    { suit: "spades", value: "K", display: "K♠" },
    { suit: "spades", value: "K", display: "K♠" },
    { suit: "spades", value: "K", display: "K♠" },
  ];

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
        onClick={() => console.log("Card clicked")}
        selected={false}
      />
      <Card
        key={2}
        card={{ suit: "clubs", display: "A", value: "1" }}
        onClick={() => console.log("Card clicked")}
        selected={false}
      />
      <Card
        key={3}
        card={{ suit: "spades", display: "A", value: "1" }}
        onClick={() => console.log("Card clicked")}
        selected={false}
      />
      <Card
        key={4}
        card={{ suit: "diamonds", display: "A", value: "1" }}
        onClick={() => console.log("Card clicked")}
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
    </View>
  );
}
