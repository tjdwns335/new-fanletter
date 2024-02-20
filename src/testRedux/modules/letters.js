import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { jsonApi } from 'api/apiGroup';

const initialState = {
  letters: [],
  isLoading: false,
  isError: false,
  error: null
};

export const __changeLetter = createAsyncThunk(
  "changeLetter",
  async ({ id, changeText }, thunkAPI) => {
    try {
      await jsonApi.patch(`letters/${id}`, { content: changeText });
      const { data } = await jsonApi.get("/letters?_sort=-createdAt");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
)

export const __deleteLetter = createAsyncThunk(
  "deleteLetter",
  async (payload, thunkAPI) => {
    try {
      await jsonApi.delete(`/letters/${payload}`);
      const { data } = await jsonApi.get("/letters?_sort=-createdAt");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
)

export const __getLetters = createAsyncThunk(
  "getLetters",
  async (payload, thunkAPI) => {
    try {
      const { data } = await jsonApi.get("/letters?_sort=-createdAt");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const __addLetter = createAsyncThunk(
  "addLetter",
  async (payload, thunkAPI) => {
    try {
      await jsonApi.post("/letters", payload);
      const { data } = await jsonApi.get("/letters?_sort=-createdAt");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

const lettersSlice = createSlice({
  name: "letters",
  initialState,
  reducers: {
    addLetter: (state, action) => {
      const newLetter = action.payload;
      return [newLetter, ...state];
    },
    deleteLetter: (state, action) => {
      const letterId = action.payload;
      return state.filter((item) => item.id !== letterId);
    },
    changeLetter: (state, action) => {
      const { id, changeText } = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return { ...item, content: changeText }
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__addLetter.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__addLetter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.letters = action.payload;
    });
    builder.addCase(__addLetter.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
    builder.addCase(__getLetters.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__getLetters.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.letters = action.payload;
    });
    builder.addCase(__getLetters.rejected, (state, action) => {
      state.isLoading = true;
      state.isError = true;
      state.error = action.payload;
    });
    builder.addCase(__deleteLetter.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__deleteLetter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.letters = action.payload;
    });
    builder.addCase(__deleteLetter.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
    builder.addCase(__changeLetter.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__changeLetter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.letters = action.payload;
    });
    builder.addCase(__changeLetter.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  }
})

export const { addLetter, deleteLetter, changeLetter } = lettersSlice.actions;
export default lettersSlice.reducer;