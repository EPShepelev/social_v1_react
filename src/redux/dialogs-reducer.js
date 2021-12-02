const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
  dialogsData: [{
      id: 1,
      name: "Vasya"
    },
    {
      id: 2,
      name: "Olya"
    },
    {
      id: 3,
      name: "Dasha"
    },
    {
      id: 4,
      name: "Kathreen"
    },
    {
      id: 5,
      name: "Michael"
    },
    {
      id: 6,
      name: "Alex"
    },
  ],
  messagesData: [{
      id: 1,
      text: "Hi!",
      isYours: false
    },
    {
      id: 2,
      text: "Whats up",
      isYours: true
    },
    {
      id: 3,
      text: "Hello",
      isYours: false
    },
    {
      id: 4,
      text: "Some text",
      isYours: true
    },
    {
      id: 5,
      text: "New content",
      isYours: false
    },
  ],
  newMessageText: "",
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: 6,
        text: state.newMessageText,
        isYours: true,
      };
      const newState = {...state}
      newState.messagesData = [...state.messagesData]
      newState.messagesData.push(newMessage);
      newState.newMessageText = "";
      return newState;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      const newState = {...state}
      newState.newMessageText = action.newMessage;
      return newState;
    }
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE
})
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text
})

export default dialogsReducer