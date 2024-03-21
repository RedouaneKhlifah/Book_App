import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import {Icons, appTheme} from '../constants';
import {useAppDispatch} from '../Hooks/redux.hooks';
import {setModalVisible} from '../redux/reducers/book.reducer';

const {COLORS, SIZES, FONTS} = appTheme;

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={style.headerContainer}>
      {/* greething */}
      <View style={style.leftContainer}>
        <Text style={{...FONTS.h3, color: COLORS.white}}>Good Morning</Text>
        <Text style={{...FONTS.h2, color: COLORS.white}}>Recruter</Text>
      </View>
      {/* add Book */}
      <Pressable
        onPress={() => dispatch(setModalVisible(true))}
        style={style.rightContainer}>
        <Image
          source={Icons.add}
          resizeMode="contain"
          style={{
            width: 16,
            height: 16,
          }}
        />
      </Pressable>
    </View>
  );
};

export const style = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
  },

  leftContainer: {
    flex: 1,
    marginRight: SIZES.padding,
  },
  rightContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.fullRadius,
    height: 40,
    width: 40,
    paddingHorizontal: SIZES.radius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
