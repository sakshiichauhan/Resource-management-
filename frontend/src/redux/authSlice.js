import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false, // Track loading state
  user: null, // User data (null initially)
  error: null, // Store error messages if needed
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload; // Set loading state
    },
    setUser: (state, action) => {
      state.user = action.payload; // Set user data when logged in
    },
    clearUser: (state) => {
      state.user = null; // Clear user data on logout
    },
    setError: (state, action) => {
      state.error = action.payload; // Set error message
    },
    clearError: (state) => {
      state.error = null; // Clear error message
    },
  },
});

// Export actions for dispatching in components
export const { setLoading, setUser, clearUser, setError, clearError } = authSlice.actions;

// Export reducer to be used in the store
export default authSlice.reducer;
