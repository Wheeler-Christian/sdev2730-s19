import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

export default function App() {
  // Use the hook "useWindow Dimensions" to detect the orientation
  const { width, height } = useWindowDimensions(); // use window dimensions hook

  // If width < height, device is in PORTRAIT mode
  // If width >= height, device is in LANDSCAPE mode
  let isPortraitMode = width < height;

  //Use ternary expressions to assign the appropriate values to the styles for each orientation
  let rootBgColor = isPortraitMode ? "red" : "green";
  let flexDir = isPortraitMode ? "column" : "row";
  let h1Margins = isPortraitMode ? styles.h1Portrait : styles.h1Landscape;

  return (
    <View style={[styles.rootContainer, { backgroundColor: rootBgColor }]}>
      <StatusBar style="dark" />
      <Text style={[styles.h1, h1Margins]}>
        Orientation by Christian Wheeler
      </Text>
      <View style={[styles.boxesContainer, { flexDirection: flexDir }]}>
        <View style={[styles.mediumBox, styles.outerBox]}>
          <View style={[styles.smallBox, styles.innerBox]}></View>
        </View>
        <View style={[styles.bigBox, styles.outerBox]}>
          <View style={[styles.mediumBox, styles.innerBox]}></View>
        </View>
        <View style={[styles.mediumBox, styles.outerBox]}>
          <View style={[styles.smallBox, styles.innerBox]}></View>
        </View>
        <View style={[styles.bigBox, styles.outerBox]}>
          <View style={[styles.mediumBox, styles.innerBox]}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  boxesContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  h1Portrait: {
    marginTop: 200,
    marginBottom: 30,
  },
  h1Landscape: {
    marginTop: 40,
    marginBottom: 20,
  },
  outerBox: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  innerBox: {
    backgroundColor: "yellow",
  },
  bigBox: {
    width: 100,
    height: 100,
  },
  mediumBox: {
    width: 50,
    height: 50,
  },
  smallBox: {
    width: 25,
    height: 25,
  },
});
