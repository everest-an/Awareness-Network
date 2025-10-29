/**
 * Memories state management
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Memory } from '../../types';

interface MemoriesState {
  items: Memory[];
  loading: boolean;
  error: string | null;
}

const initialState: MemoriesState = {
  items: [],
  loading: false,
  error: null,
};

const memoriesSlice = createSlice({
  name: 'memories',
  initialState,
  reducers: {
    setMemories: (state, action: PayloadAction<Memory[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    addMemory: (state, action: PayloadAction<Memory>) => {
      state.items.unshift(action.payload);
    },
    removeMemory: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((m) => m.memoryId !== action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setMemories, addMemory, removeMemory, setLoading, setError } =
  memoriesSlice.actions;
export default memoriesSlice.reducer;
