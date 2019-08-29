import * as React from "react";
import { storiesOf } from "@storybook/react";
import { View, Text } from "react-native";
import { RoundButton } from "pkg-components";

storiesOf("RoundButton", module)
  .add("default", () => (
    <View style={{ padding: 10 }}>
      <RoundButton>
        <Text>Button</Text>
      </RoundButton>
    </View>
  ))
  .add("disabled", () => (
    <View style={{ padding: 10 }}>
      <RoundButton disabled>
        <Text>Disabled Button</Text>
      </RoundButton>
    </View>
  ));
