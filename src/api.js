const API = {

  login: () => {
    return "https://reqres.in/api/login";
  },

  register : () => {
    return "https://reqres.in/api/register";
  },

  getPosts : () => {
    return "https://jsonplaceholder.typicode.com/posts";
  },

  getComments : (id) => {
    return "https://jsonplaceholder.typicode.com/comments?postId="+id;
  },

  getAlbums : () => {
    return "https://jsonplaceholder.typicode.com/albums";
  },

  getPhotos : (id) => {
    return "https://jsonplaceholder.typicode.com/albums/"+id+"/photos";
  },

  createTask : (id) => {
    return "https://jsonplaceholder.typicode.com/todos";
  }
};

export default API;
