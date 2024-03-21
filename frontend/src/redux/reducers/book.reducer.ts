import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  createRecord,
  getRecords,
  getRecordById,
  updateRecord,
  deleteRecord,
} from '../../api/Axios';
import {IBook} from '../../types';

// Define the initial state using that type
export interface IBooksReducer {
  books: IBook[];
  singleBook: IBook | null;
  isLoading: boolean;
  error: any;
  modalVisible: boolean;
}

const initialState: IBooksReducer = {
  books: [],
  singleBook: null,
  isLoading: false,
  error: null,
  modalVisible: false,
};

export const fetchALLBooks = createAsyncThunk<IBook[], void>(
  'books/fetchALLBooks',
  async () => {
    try {
      const response = await getRecords();
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const getOneBook = createAsyncThunk<IBook, string>(
  'books/getOneBook',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await getRecordById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const createBook = createAsyncThunk<IBook, IBook>(
  'books/createBook',
  async (formData: IBook, {rejectWithValue}) => {
    try {
      const response = await createRecord(formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updateBook = createAsyncThunk<IBook, IBook>(
  'books/updateBook',
  async (formData: IBook, {rejectWithValue}) => {
    try {
      const response = await updateRecord(formData, formData.id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteBook = createAsyncThunk<IBook, string>(
  'books/deleteBook',
  async (id: string) => {
    try {
      const response = await deleteRecord(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);
export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    clearBook: state => {
      state.singleBook = null;
    },
    setModalVisible: (state, action) => {
      state.modalVisible = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // Handling fetchALLBooks
      .addCase(fetchALLBooks.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchALLBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(fetchALLBooks.rejected, (state, action) => {
        state.isLoading = false;
      })
      // Handling getOneBook
      .addCase(getOneBook.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOneBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleBook = action.payload;
      })
      .addCase(getOneBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || null;
      })
      // Handling createBook and updateBook
      .addCase(createBook.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleBook = action.payload;
        state.modalVisible = false;
      })
      .addCase(createBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || null;
      })
      .addCase(updateBook.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleBook = action.payload;
        state.modalVisible = false;
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || null;
      })
      // Handling deleteBook
      .addCase(deleteBook.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || null;
      });
  },
});

// Export the action creators
export const {clearBook, setModalVisible} = bookSlice.actions;

export default bookSlice.reducer;
