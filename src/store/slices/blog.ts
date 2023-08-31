// blog.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState, AppThunk } from 'store';
// Define the blog data structure
export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  feature_image: string;
  updated_at: string;
  // Add other relevant properties here
}

// Define the initial state
interface BlogState {
  blogs: Blog[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  loading: true,
  error: null
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    getBlogsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getBlogsSuccess(state, action: PayloadAction<Blog[]>) {
      state.blogs = action.payload;
      state.loading = false;
      state.error = null;
    },
    getBlogsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { getBlogsStart, getBlogsSuccess, getBlogsFailure } = blogSlice.actions;

// Thunk action to fetch blogs
export const fetchBlogs = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getBlogsStart());
    const response = await axios.get('https://blog.infrahive.io/ghost/api/content/posts/?key=fd88644ae694593eae2805718c');
    const blogs = response.data.posts;
    dispatch(getBlogsSuccess(blogs));
  } catch (error) {
    dispatch(getBlogsFailure('Error fetching blogs.'));
  }
};

// Selectors
export const selectBlogs = (state: RootState) => state.blog.blogs;
export const selectLoading = (state: RootState) => state.blog.loading;
export const selectError = (state: RootState) => state.blog.error;

export default blogSlice.reducer;
