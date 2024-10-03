import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
  Viro3DObject,
  ViroAmbientLight,
} from "@reactvision/react-viro";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const InitialScene = ({ props }: { props: any }) => {
  const [rotation, setRotation] = useState([-45, 50, 40]);

  let data = props.sceneNavigator.viroAppProps;

  ViroMaterials.createMaterials({
    wood: {
      diffuseTexture: require("./assets/pexels-fwstudio-33348-129733.jpg"),
    },
  });

  ViroAnimations.registerAnimations({
    rotate: {
      properties: {
        rotateY: "+=90",
      },
      duration: 250,
    },
  });

  return (
    <ViroARScene>
      <ViroAmbientLight color={"#ffffff"} />

      {data.object === "skull" ? (
        <Viro3DObject
          source={require("./assets/skull/skull.obj")}
          position={[0, 0, -5]}
          scale={[0.05, 0.05, 0.05]}
          rotation={[-45, 50, 40]}
          type={"OBJ"}
        />
      ) : (
        <Viro3DObject
          source={require("./assets/chair/chairss.obj")}
          position={[0, 0, -5]}
          scale={[0.05, 0.05, 0.05]}
          rotation={[-45, 50, 40]}
          type={"OBJ"}
        />
      )}
    </ViroARScene>
  );
};

export default () => {
  const [object, setObject] = useState("skull");

  return (
    <View style={styles.mainView}>
      <ViroARSceneNavigator
        initialScene={{
          scene: InitialScene,
        }}
        viroAppProps={{ object: object }}
        style={{ flex: 1 }}
      />

      <View style={styles.controlsView}>
        <TouchableOpacity onPress={() => setObject("skull")}>
          <Text>Display Skull</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setObject("chairs")}>
          <Text>Display TV</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  controlsView: {
    width: "100%",
    height: 100,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    margin: 20,
    backgroundColor: "#9d9d9d",
    padding: 10,
    fontWeight: "bold",
  },
});
