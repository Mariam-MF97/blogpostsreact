import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};

export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
});
