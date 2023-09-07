import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {//set mode to dark or light
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {//set user and token
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {//set user and token to null
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {//set user friends
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {//set user posts
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {//update post
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;
