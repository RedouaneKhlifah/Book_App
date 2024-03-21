import {Pressable, StyleSheet, Text} from 'react-native';
import {appTheme} from '../../constants';
const {COLORS, SIZES, FONTS} = appTheme;

type CustomButtonProps = {
  onPress: () => void;
  isLoading?: boolean;
  text: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  isLoading,
  text,
}) => (
  <Pressable
    style={({pressed}: {pressed: boolean}) => [
      styles.button,
      {opacity: pressed || isLoading ? 0.6 : 1},
    ]}
    onPress={onPress}
    disabled={isLoading ? true : false}>
    <Text style={styles.textStyle}>{isLoading ? 'Submitting...' : text}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: SIZES.radius,
    padding: SIZES.base,
    elevation: 2,
    marginVertical: SIZES.base,
    backgroundColor: COLORS.primary,
  },
  textStyle: {
    color: COLORS.white,
    ...FONTS.body2,
    textAlign: 'center',
  },
});

export default CustomButton;
