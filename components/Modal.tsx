import { RulesModalProps } from "@/utils/types";
import { ScrollView, Text, View } from "react-native";
// import Modal from 'react-native-modal'

export default function RulesModal({
  showRules,
  setShowRules,
}: RulesModalProps) {
  return (
    // <Modal
    //   isVisible={showRules}
    //   onBackdropPress={() => setShowRules(false)}
    //   onBackButtonPress={() => setShowRules(false)}
    //   style={{ margin: 0 }}
    // >
    <View className="flex-1 items-center justify-center px-4">
      <View className="max-w-2xl w-full max-h-[80vh] bg-white rounded-xl p-4">
        <Text className="text-xl font-bold mb-4">Hand & Foot Rules</Text>
        <ScrollView className="space-y-4">
          <View>
            <Text className="font-semibold mb-2">Objective</Text>
            <Text>
              Be the first to play all cards from both your hand and foot by
              creating melds.
            </Text>
          </View>
          <View>
            <Text className="font-semibold mb-2">Setup</Text>
            <Text>
              Each player receives 13 cards for their hand and 13 cards for
              their foot. You must finish your hand before picking up your foot.
            </Text>
          </View>
          <View>
            <Text className="font-semibold mb-2">Melds</Text>
            <Text>
              Create melds of 3+ cards of the same rank. Wild cards (2s and
              Jokers) can be used, but you need at least 3 natural cards to
              start a meld.
            </Text>
          </View>
          <View>
            <Text className="font-semibold mb-2">Books</Text>
            <Text>
              A meld of 7+ cards is called a book. Clean books (no wilds) score
              more points than dirty books (with wilds).
            </Text>
          </View>
          <View>
            <Text className="font-semibold mb-2">Turn Structure</Text>
            <Text>
              1. Draw 2 cards from deck OR take entire discard pile{"\n"}2.
              Create or add to melds{"\n"}3. Discard 1 card to end turn
            </Text>
          </View>
          <View>
            <Text className="font-semibold mb-2">Red 3s</Text>
            <Text>Red 3s are special bonus cards worth 500 points each.</Text>
          </View>
        </ScrollView>
      </View>
    </View>
    //</Modal>
  );
}
