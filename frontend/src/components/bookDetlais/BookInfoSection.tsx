import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {IBook} from '../../types';
import {Icons, Images, appTheme} from '../../constants';
import {useAppDispatch} from '../../Hooks/redux.hooks';
import {deleteBook, fetchALLBooks, setModalVisible} from '../../redux/reducers/book.reducer';

const {COLORS, SIZES, FONTS} = appTheme;

const BookInfoSection: React.FC<{
  book: IBook;
}> = ({book}) => {
  const navigate = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground
          source={{uri: book.image}}
          resizeMode="cover"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.3,
          }}
        />
        {/* color avoerlay */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: `${COLORS.black}99`,
          }}></View>

        {/* navigation header */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            height: 80,
            alignItems: 'center',
            marginTop: 13,
          }}>
          <Pressable
            style={pressed => ({
              opacity: pressed ? 0.7 : 1,
              padding: SIZES.base,
            })}
            onPress={() => navigate.goBack()}>
            <Image
              source={Icons.backArrowIcon}
              resizeMode="contain"
              style={{width: 22, height: 22}}
            />
          </Pressable>

          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{...FONTS.h3, color: COLORS.lightGray2}}>
              Book Details
            </Text>
          </View>
          <Pressable
            style={pressed => ({
              opacity: pressed ? 0.7 : 1,
              padding: SIZES.base,
            })}
            onPress={() => dispatch(setModalVisible(true))}>
            <Image
              source={Icons.threeDotIcon}
              resizeMode="contain"
              style={{width: 21, height: 21, alignSelf: 'flex-end'}}
            />
          </Pressable>
          <Pressable
            style={pressed => ({
              opacity: pressed ? 0.7 : 1,
              padding: SIZES.base,
            })}
            onPress={() => {
              dispatch(deleteBook(book.id)).then(() => navigate.goBack()).then(() => dispatch(fetchALLBooks()));
            }}>
            <Image
              source={Icons.trashIcon}
              resizeMode="contain"
              style={{width: 21, height: 21, alignSelf: 'flex-end'}}
            />
          </Pressable>
        </View>

        {/* book cover */}
        <View
          style={{
            flex: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{uri: book.image}}
            resizeMode="contain"
            style={{
              flex: 1,
              borderWidth: 1,
              width: 180,
            }}
          />
        </View>
        {/* book name and author */}
        <View
          style={{flex: 1.8, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              ...FONTS.h4,
              color: COLORS.lightGray2,
            }}>
            {book.title}
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.lightGray2,
            }}>
            {book.author}
          </Text>
        </View>
        {/* book info  */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 5,
            margin: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: `rgba(0,0,0,0.3)`,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {/* rating */}
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...FONTS.h4,
                color: COLORS.lightGray2,
                paddingBottom: 4,
              }}>
              {book.rating}
            </Text>
            <Text style={{...FONTS.body4, color: COLORS.lightGray2}}>
              Rating
            </Text>
          </View>
          {/* pages */}
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text style={{...FONTS.h4, color: COLORS.lightGray2}}>
              {book.pages}
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.lightGray2,
                textAlign: 'center',
              }}>
              Number of pages
            </Text>
          </View>
          {/* language */}

          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text style={{...FONTS.h4, color: COLORS.lightGray2}}>
              {book.language}
            </Text>
            <Text style={{...FONTS.body4, color: COLORS.lightGray2}}>
              language
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookInfoSection;
