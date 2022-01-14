const ADD_MESSAGE = "social-network/dialogs/ADD-MESSAGE";

export type InitialStateType = typeof initialState

type DialogsDataType = {
  id: number
  name: string
}

type MessagesDataType = {
  id: number
  text: string
  isYours: boolean
}

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
  ] as Array <DialogsDataType>,
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
  ] as Array <MessagesDataType>,
};

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type AddMessageActionCreatorType = {
  type: typeof ADD_MESSAGE
  text: string
}

export const addMessageActionCreator = (text: string): AddMessageActionCreatorType => ({
  type: ADD_MESSAGE,
  text: text,
});

export default dialogsReducer;
