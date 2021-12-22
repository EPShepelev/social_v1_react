import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";

const state = {
  postsData: [{
      id: 1,
      likes: 3,
      text: "post one",
    },
    {
      id: 2,
      likes: 7,
      text: "post two",
    },
    {
      id: 3,
      likes: 42,
      text: "post three",
    },
    {
      id: 4,
      likes: 11,
      text: "post four",
    },
    {
      id: 5,
      likes: 2,
      text: "someting strange",
    },
    {
      id: 6,
      likes: 42,
      text: "it works!",
    },
  ],
};

test('posts length should be incremented', () => {
  const action = addPostActionCreator("new text!")
  const newState = profileReducer(state, action)
  expect(newState.postsData.length).toBe(7);
});

test('new post message should be "new text!"', () => {
  const action = addPostActionCreator("new text!")
  const newState = profileReducer(state, action)
  expect(newState.postsData[6].text).toBe("new text!");
});

test('posts length after delete post should be decremented', () => {
  const action = deletePostActionCreator(1)
  const newState = profileReducer(state, action)
  expect(newState.postsData.length).toBe(5);
});

test("post length should't be decremented if id is incorrect", () => {
  const action = deletePostActionCreator(1000)
  const newState = profileReducer(state, action)
  expect(newState.postsData.length).toBe(6);
});

