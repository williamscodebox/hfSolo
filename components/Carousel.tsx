import React from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const MyCarousel = () => {
  const data = ["Slide 1", "Slide 2", "Slide 3"];

  return (
    <Carousel
      loop
      width={width}
      height={200}
      autoPlay={true}
      data={data}
      scrollAnimationDuration={1000}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ccc",
          }}
        >
          <Text>{item}</Text>
        </View>
      )}
    />
  );
};

export default MyCarousel;
