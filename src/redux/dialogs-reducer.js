const ADD_MESSAGE = "social-network/dialogs/ADD-MESSAGE";

const initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Vasya",
    },
    {
      id: 2,
      name: "Olya",
    },
    {
      id: 3,
      name: "Dasha",
    },
    {
      id: 4,
      name: "Kathreen",
    },
    {
      id: 5,
      name: "Michael",
    },
    {
      id: 6,
      name: "Alex",
    },
  ],
  messagesData: [
    {
      id: 1,
      text: "Hi!",
      isYours: false,
    },
    {
      id: 2,
      text: "Whats up",
      isYours: true,
    },
    {
      id: 3,
      text: "Hello",
      isYours: false,
    },
    {
      id: 4,
      text: "Some text",
      isYours: true,
    },
    {
      id: 5,
      text: "New content",
      isYours: false,
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const text = action.text;
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: 6, text: text, isYours: true },
        ],
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = (text) => ({
  type: ADD_MESSAGE,
  text: text,
});

export default dialogsReducer;
