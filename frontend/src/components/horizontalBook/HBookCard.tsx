import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {IBook, RootScreenRoutesT} from '../../types';
import {COLORS, FONTS, Icons, SIZES} from '../../constants';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {getOneBook} from '../../redux/reducers/book.reducer';
import {useAppDispatch} from '../../Hooks/redux.hooks';

const HBookCard: React.FC<{book: IBook}> = ({book}) => {
  const navigation = useNavigation<NavigationProp<RootScreenRoutesT>>();
  const dispatch = useAppDispatch();

  return (
    <View
      style={[
        {
          flex: 1,
          marginVertical: SIZES.base,
        },
      ]}>
      <Pressable
        onPress={() => {
          dispatch(getOneBook(book.id));
          navigation.navigate('BookDetails', {book});
        }}
        style={({pressed}) => ({
          flex: 1,
          flexDirection: 'row',
          backgroundColor: pressed ? COLORS.gary : 'transparent',
          borderRadius: SIZES.radius,
          padding: SIZES.base,
        })}>
        <Image
          source={{uri: book.image}}
          style={{
            resizeMode: 'cover',
            height: 150,
            width: 100,
            borderRadius: SIZES.radius,
          }}
        />
        <View style={{flex: 1, marginLeft: SIZES.radius}}>
          <Text style={{...FONTS.h2, color: COLORS.white}}>{book.title}</Text>
          <Text style={{...FONTS.body4, color: COLORS.lightGray}}>
            {book.author}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: SIZES.base,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={Icons.pages}
                style={{
                  resizeMode: 'contain',
                  width: 14,
                  height: 14,
                }}
              />
              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.lightGray,
                  marginLeft: SIZES.base,
                }}>
                {book.pages}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: SIZES.padding,
              }}>
              <Image
                source={Icons.star}
                style={{
                  resizeMode: 'contain',
                  width: 14,
                  height: 14,
                }}
              />
              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.lightGray,
                  marginLeft: 6,
                }}>
                {book.rating}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default HBookCard;
