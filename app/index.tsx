import Card from "@/components/Card";
import MyCarousel from "@/components/Carousel";
import PlayerHand from "@/components/PlayerHand";
import { CardType } from "@/utils/types";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, ScrollView, Text, View } from "react-native";
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
    <LinearGradient
      colors={["#047857", "#059669", "#065f46"]} // from-green-700 via-green-600 to-green-800
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"
    >
      <ScrollView keyboardShouldPersistTaps="handled" className="mt-10 pt-5">
        <View className="max-w-7xl mx-auto">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-6">
            <View className="flex-row items-center space-x-3">
              {/* <Trophy size={32} color="#facc15" /> */}
              <Text className="text-3xl font-bold text-white">Hand & Foot</Text>
            </View>
            <View className="flex-row space-x-3">
              {/* <Button
              variant="outline"
              size="sm"
              onPress={() => setShowRules(true)}
              className="flex-row items-center space-x-2"
            >
              <Info size={16} />
              <Text>Rules</Text>
            </Button>
            <Button
              onPress={initializeGame}
              size="sm"
              className="flex-row items-center space-x-2 bg-amber-600 active:bg-amber-700"
            >
              <RotateCcw size={16} />
              <Text className="text-white">New Game</Text>
            </Button> */}
            </View>
          </View>

          {/* Alert Message */}
          {/* {message && (
          <Alert className="mb-4 bg-amber-100 border border-amber-400">
            <Text className="text-amber-900">{message}</Text>
          </Alert>
        )} */}

          {/* Computer Players */}
          {/* <View className="space-y-3 md:flex md:flex-row md:flex-wrap md:gap-3 mb-6">
          {computerPlayers.map((player) => (
            <ComputerPlayer
              key={player.id}
              player={player}
              isCurrentTurn={gameState.currentPlayerIndex === player.id}
            />
          ))}
        </View> */}
        </View>
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
        <Card
          key={5}
          card={{ suit: "hearts", display: "A", value: "1" }}
          onPress={() => console.log("Card clicked")}
          selected={false}
        />
        <Card
          key={6}
          card={{ suit: "clubs", display: "A", value: "1" }}
          onPress={() => console.log("Card clicked")}
          selected={false}
        />
        <Card
          key={7}
          card={{ suit: "spades", display: "A", value: "1" }}
          onPress={() => console.log("Card clicked")}
          selected={false}
        />
        <Card
          key={8}
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
      </ScrollView>
    </LinearGradient>
  );
}
