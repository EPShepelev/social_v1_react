const initialState = {
  friendsList: [{
      id: 1,
      name: "Ахиллес"
    },
    {
      id: 2,
      name: "Эзоп"
    },
    {
      id: 3,
      name: "Плутарх"
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