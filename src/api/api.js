import * as axios from "axios";

const axiosInstaice = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "be9a2f09-e73c-47b1-938e-5e4d5e8badb9",
  },
})

export const UsersAPI = {
  getUsers(currentPage = 1, pageSize = 30) {
    return axiosInstaice
      .get(
        `users?page=${currentPage}&count=${pageSize}`, {
          withCredentials: true,
        }
      ).then(response => response.data);
  },
  followUser(id) {
    return axiosInstaice.post(
      `follow/${id}`
    ).then(response => response.data);
  },
  unfollowUser(id) {
    return axiosInstaice.delete(
      `follow/${id}`
    ).then(response => response.data);
  },
  getAuthUserData() {
    return axiosInstaice.get(
      `auth/me`
    ).then(response => response.data);
  },
  getUserProfile(id) {
    return axiosInstaice
    .get(
      `profile/${id}`
    ).then(response => response.data);
  }
}