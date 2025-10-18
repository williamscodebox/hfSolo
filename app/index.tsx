import AlertMessage from "@/components/Alert";
import { Button } from "@/components/Button";
import Card from "@/components/Card";
import ComputerPlayer from "@/components/ComputerPlayer";
import GameControls from "@/components/GameControls";
import PlayerHand from "@/components/PlayerHand";
import { CardType, GameState } from "@/utils/types";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect, useState } from "react";
import { Dimensions, Pressable, ScrollView, Text, View } from "react-native";

export default function Index() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [selectedCards, setSelectedCards] = useState([]);
  const [message, setMessage] = useState("test");
  const [showRules, setShowRules] = useState(false);
  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
    NavigationBar.setBehaviorAsync("overlay-swipe"); // allows swipe to reveal temporarily
  }, []);

  const rehideNavBar = () => {
    NavigationBar.setVisibilityAsync("hidden");
  };

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
    <Pressable className="flex-1" onPress={rehideNavBar}>
      <LinearGradient
        colors={["#047857", "#059669", "#065f46"]} // from-green-700 via-green-600 to-green-800
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex-1"
      >
        <ScrollView keyboardShouldPersistTaps="handled" className="mt-10 pt-5">
          <View className="max-w-7xl mx-auto">
            {/* Header */}
            <View className="flex-row justify-between w-full mb-6 px-2">
              <View className="flex-row items-center space-x-3 gap-1">
                <EvilIcons name="trophy" size={32} color="#facc15" />
                <Text className="text-3xl font-bold text-white">
                  Hand & Foot
                </Text>
              </View>
              <View className="flex-row space-x-3 gap-2">
                <Button
                  // variant="outline"
                  // size="sm"
                  // onPress={() => setShowRules(true)}
                  onPress={() => console.log("Show Rules")}
                  className="flex-row items-center space-x-2 bg-slate-100 active:bg-slate-200 p-2 rounded"
                >
                  <Feather name="info" size={16} color="black" />
                  <Text className="pl-1">Rules</Text>
                </Button>
                <Button
                  // onPress={initializeGame}
                  onPress={() => console.log("New Game")}
                  // size="sm"
                  className="flex-row items-center space-x-2 bg-amber-600 active:bg-amber-700 p-2 rounded"
                >
                  {/* <RotateCcw size={16} /> */}
                  <Text className="text-white">New Game</Text>
                </Button>
              </View>
            </View>

            {/* Alert Message */}
            {message && <AlertMessage message={message} />}

            {/* Computer Players */}
            {/* <View className="space-y-3 md:flex md:flex-row md:flex-wrap md:gap-3 mb-6">
          {computerPlayers.map((player) => ( */}
            <ComputerPlayer
              // key={player.id}
              key={1}
              // player={player}
              player={{ name: "Computer 1", score: 0, hand: [], inFoot: false }}
              // isCurrentTurn={gameState.currentPlayerIndex === player.id}
              isCurrentTurn={gameState?.currentPlayerIndex === 1}
            />
            {/* ))}
        </View> */}
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

          <BlurView
            intensity={20}
            tint="dark"
            className="rounded-2xl  border-2 border-green-700/50 bg-green-800/50"
          >
            <View className="flex-col lg:flex-row gap-4 mb-4">
              {/* Deck and Discard */}
              <View className="flex-row gap-4 justify-center">
                <View className="items-center">
                  <Text className="text-green-200 text-sm mb-2">Draw Deck</Text>
                  {/* <Pressable onPress={handleDrawFromDeck}>
              <Card card={{}} faceDown size="large" />
            </Pressable> */}
                  {/* <Text className="text-green-300 text-xs mt-1">{gameState.deck.length} cards</Text> */}
                </View>

                <View className="items-center">
                  <Text className="text-green-200 text-sm mb-2">
                    Discard Pile
                  </Text>
                  {/* {gameState.discardPile.length > 0 ? (
              <Pressable onPress={handleDrawFromDiscard}>
                <Card card={gameState.discardPile.at(-1)} size="large" />
              </Pressable>
            ) : (
              <View className="w-20 h-28 bg-green-900/40 rounded-lg border-2 border-dashed border-green-600/50 items-center justify-center">
                <Text className="text-green-500 text-xs">Empty</Text>
              </View>
            )}
            <Text className="text-green-300 text-xs mt-1">{gameState.discardPile.length} cards</Text> */}
                </View>
              </View>

              {/* Controls */}
              <GameControls
                // selectedCards={selectedCards}
                selectedCards={[]}
                // onCreateMeld={handleCreateMeld}
                onCreateMeld={() => {}}
                onAddToMeld={() => {}}
                // onDiscard={handleDiscard}
                onDiscard={() => {}}
                // onDrawFromDeck={handleDrawFromDeck}
                onDrawFromDeck={() => {}}
                // onDrawFromDiscard={handleDrawFromDiscard}
                onDrawFromDiscard={() => {}}
                // canDraw={!gameState.hasDrawn && gameState.currentPlayerIndex === 0}
                canDraw={!false && 0 === 0}
                // canDiscard={gameState.hasDrawn && gameState.currentPlayerIndex === 0}
                canDiscard={true && 0 === 0}
                // melds={humanPlayer.melds}
              />
            </View>

            {/* Melds */}
            <View className="space-y-3">
              {/* {gameState.players.map((player) => (
          <MeldArea
            key={player.id}
            melds={player.melds}
            playerName={player.name}
            isCurrentPlayer={gameState.currentPlayerIndex === player.id}
          />
        ))} */}
            </View>

            {/* Human Player Hand */}
            {/* <PlayerHand
        cards={humanPlayer.hand}
        onCardClick={handleCardClick}
        selectedCards={selectedCards}
        inFoot={humanPlayer.inFoot}
        onSwitchToFoot={handleSwitchToFoot}
      />    */}
            <View className="mb-20 pb-10">
              <PlayerHand
                cards={cards}
                onCardClick={() => console.log("Card clicked")}
                selectedCards={[]}
                inFoot={false}
                onSwitchToFoot={() => console.log("Switch to foot")}
              />
            </View>
          </BlurView>
        </ScrollView>
      </LinearGradient>
    </Pressable>
  );
}
