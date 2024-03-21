import React, {useEffect} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import appTheme from '../../constants/themes';
import Input from './Input';
import {IBook} from '../../types';
import {createRecord, updateRecord} from '../../api/Axios';
import FileInput from './FileInput';
import CustomButton from './CustomButton';
import {useAppDispatch, useAppSelector} from '../../Hooks/redux.hooks';
import {
  createBook,
  fetchALLBooks,
  setModalVisible,
  updateBook,
} from '../../redux/reducers/book.reducer';

const {COLORS, SIZES, FONTS} = appTheme;

type BookModalProps = {
  book?: IBook;
};

const BookModal: React.FC<BookModalProps> = ({book}) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.book.isLoading);

  const [form, setForm] = React.useState({
    id: book?.id || '',
    title: book?.title || '',
    author: book?.author || '',
    image: book?.image || '',
    pages: book?.pages || 0,
    rating: book?.rating || 0,
    description: book?.description || '',
    language: book?.language || '',
  });

  const handleSubmit = async (formData: IBook) => {
    try {
      if (!book?.id) {
        dispatch(createBook(formData)).then(() => {
          dispatch(fetchALLBooks());
        });
      } else {
        // Dispatch updateBook action if book id exists
        dispatch(updateBook(formData)).then(() => {
          dispatch(fetchALLBooks());
        });
      }
    } catch (err) {
      console.error('Errorr:', err);
    }
  };
  const handleInputChange = (fieldName: string, value: string | number) => {
    setForm(prevForm => ({
      ...prevForm,
      [fieldName]: value,
    }));
  };

  const modalVisible = useAppSelector(state => state.book.modalVisible);

  return (
    <SafeAreaView style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          dispatch(setModalVisible(false));
        }}>
        <ScrollView style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            {/* Input Component */}
            <Input
              label="Title"
              name="title"
              value={form.title}
              onChange={text => handleInputChange('title', text)}
              keyboardType="default"
            />
            <Input
              label="Author"
              name="author"
              value={form.author}
              onChange={text => handleInputChange('author', text)}
              keyboardType="default"
            />
            <Input
              label="Pages"
              name="pages"
              value={form.pages.toString()}
              onChange={text => handleInputChange('pages', text)}
              keyboardType="numeric"
            />
            <Input
              label="Rating"
              name="rating"
              value={form.rating.toString()}
              onChange={text => handleInputChange('rating', text)}
              keyboardType="numeric"
            />
            <Input
              label="Description"
              name="description"
              value={form.description}
              onChange={text => handleInputChange('description', text)}
              keyboardType="default"
            />
            <Input
              label="Language"
              name="language"
              value={form.language}
              onChange={text => handleInputChange('language', text)}
              keyboardType="default"
            />
            <FileInput onChange={text => handleInputChange('image', text)} />
            <CustomButton
              onPress={() => {
                handleSubmit(form);
              }}
              text="Submit"
              isLoading={isLoading}
            />
          </View>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: SIZES.width - 40,
  },

  modalText: {
    marginBottom: SIZES.padding,
    ...FONTS.h2,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: COLORS.lightGray3,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    marginBottom: SIZES.base,
    width: '100%',
  },
});

export default BookModal;
