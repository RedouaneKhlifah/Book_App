import { View, Text, Pressable } from "react-native";
import { appTheme } from "../constants";

const { COLORS, SIZES, FONTS } = appTheme;

const MyBooksConaiter = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ ...FONTS.h2, color: COLORS.white }}>My Books</Text>
      {/* <Pressable
        onPress={() => console.log("test")}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.6 : 1,
          },
        ]}
      >
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.lightGray,
            alignSelf: "flex-start",
            textDecorationLine: "underline",
          }}
        >
          view all
        </Text>
      </Pressable> */}
    </View>
  );
};

export default MyBooksConaiter;
