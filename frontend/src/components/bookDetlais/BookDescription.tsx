import { Text, ScrollView } from "react-native";
import { IBook } from "../../types";
import { appTheme } from "../../constants";

const { COLORS, SIZES, FONTS } = appTheme;

const BookDescription: React.FC<{ book: IBook }> = ({ book }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: SIZES.padding2,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Text
        style={{
          ...FONTS.h2,
          color: COLORS.white,
          marginBottom: SIZES.radius,
        }}
      >
        Description
      </Text>
      <Text
        style={{
          ...FONTS.body3,
          color: COLORS.lightGray,
        }}
      >
        {book.description}
      </Text>
    </ScrollView>
  );
};

export default BookDescription;
