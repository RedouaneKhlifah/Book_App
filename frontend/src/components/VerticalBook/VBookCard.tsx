import { View, Text, Image } from "react-native";
import React from "react";
import { IBook } from "../../types";
import { COLORS, FONTS, Icons, SIZES } from "../../constants";
import { Images } from "../../constants/images";
import { Icon } from "react-native-vector-icons/Icon";

const VBookCard: React.FC<{ book: IBook }> = ({ book }) => {
  return (
    <View
      style={{
        flex: 1,
        marginLeft: SIZES.padding,
        width: 180,
      }}
    >
      <Image
        source={Images.MoonBookCover}
        style={{
          resizeMode: "cover",
          height: 250,
          width: 180,
          borderRadius: SIZES.radius,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          paddingHorizontal: SIZES.base,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={Icons.pages}
            style={{
              resizeMode: "contain",
              width: 14,
              height: 14,
            }}
          />
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.lightGray,
              marginLeft: SIZES.base,
            }}
          >
            {book.pages}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: SIZES.padding,
          }}
        >
          <Image
            source={Icons.star}
            style={{
              resizeMode: "contain",
              width: 14,
              height: 14,
            }}
          />
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.lightGray,
              marginLeft: 6,
            }}
          >
            {book.rating}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default VBookCard;
