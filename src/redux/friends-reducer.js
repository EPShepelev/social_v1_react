const initialState = {
  friendsList: [{
      id: 1,
      name: "Платон"
    },
    {
      id: 2,
      name: "Аристотель"
    },
    {
      id: 3,
      name: "Плутарх"
    },
    {
      id: 4,
      name: "Диоген"
    },
    {
      id: 5,
      name: "How's your greed?"
    },
  ],
}

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default friendsReducer