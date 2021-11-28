let rerenderDom = () => {};
const state = {
  profile: {
    postsData: [
      { id: 1, likes: 3, text: "post one" },
      { id: 2, likes: 7, text: "post two" },
      { id: 3, likes: 42, text: "post three" },
      { id: 4, likes: 11, text: "post four" },
      { id: 5, likes: 2, text: "someting strange" },
      { id: 6, likes: 42, text: "it works!" },
    ],
    newPostText: "",
  },
  dialogs: {
    dialogsData: [
      { id: 1, name: "Vasya" },
      { id: 2, name: "Olya" },
      { id: 3, name: "Dasha" },
      { id: 4, name: "Kathreen" },
      { id: 5, name: "Michael" },
      { id: 6, name: "Alex" },
    ],
    messagesData: [
      { id: 1, text: "Hi!", isYours: false },
      { id: 2, text: "Whats up", isYours: true },
      { id: 3, text: "Hello", isYours: false },
      { id: 4, text: "Some text", isYours: true },
      { id: 5, text: "New content", isYours: false },
    ],
    newMessage: "",
  },
  friends: {
    friendsList: [
      { id: 1, name: "Ахиллес" },
      { id: 2, name: "Эзоп" },
      { id: 3, name: "Плутарх" },
    ],
  },
};

export const addPost = () => {
  const newPost = {
    id: 5,
    likes: 0,
    text: state.profile.newPostText,
  };
  state.profile.postsData.push(newPost);
  state.profile.newPostText = "";
  rerenderDom(state);
};

export const updateNewPostText = (newText) => {
  state.profile.newPostText = newText;
  rerenderDom(state);
};

export const addMessage = () => {
  const newMessage = {
    id: 6,
    text: state.dialogs.newMessage,
    isYours: false,
  };
  state.dialogs.messagesData.push(newMessage);
  state.dialogs.newMessage = "";
  rerenderDom(state);
};

export const updateNewMessageText = (newText) => {
  state.dialogs.newMessage = newText;
  rerenderDom(state);
};

export const subscribe = (observer) => {
  rerenderDom = observer;
};

export default state;
