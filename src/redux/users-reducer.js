const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [
    {
      id: 1,
      followed: false,
      fullName: "S.Holms",
      avatar: "url",
      status: "looking some intersting crime...",
      location: {
        country: "Great Britain",
        city: "London"
      },
    },
    {
      id: 2,
      followed: true,
      fullName: "Dr.Vatson",
      avatar: "url",
      status: "Stay steel",
      location: {
        country: "Great Britain",
        city: "London"
      },
    },
    {
      id: 3,
      followed: false,
      fullName: "Mrs. Hudson",
      avatar: "url",
      status: "I am not a servant",
      location: {
        country: "Great Britain",
        city: "London"
      },
    },
  ]
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {...state, users: state.users.map(user => {
        if (user.id === action.userId) {
          return {...user, followed: true}
        }
        return user
      })
    }
    case UNFOLLOW:
      return {...state, users: state.users.map(user => {
        if (user.id === action.userId) {
          return {...user, followed: false}
        }
        return user
      })
    }
    case SET_USERS:
      return {...state, users: [...state.users, ...action.users]}
    default:
      return state;
  }
}

export const followAC = (userId) => ({
  type: FOLLOW,
  userId
})
export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId
})
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users
})

export default usersReducer