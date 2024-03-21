import {View, FlatList} from 'react-native';
import React from 'react';
import {IBook} from '../../types';
import HBookCard from './HBookCard';


const HBooks: React.FC<{books: IBook[]}> = ({books}) => {
  const renderItem = ({item}: {item: IBook}) => <HBookCard book={item} />;
  return (
    <View>
      <FlatList
        data={books}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HBooks;
