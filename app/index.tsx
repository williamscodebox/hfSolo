import Card from "@/components/Card";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <View className="items-center justify-center bg-black h-24 w-full">
        <Text className="text-white text-xl font-bold">
          NativeWind + Expo Router ✅
        </Text>
        <Card
          key={1}
          card={{ suit: "hearts", display: "A", value: "1" }}
          onClick={() => console.log("Card clicked")}
          selected={false}
        />
      </View>
    </View>
  );
}
