import axios from "axios";

export default {
  // Gets all books
  getCoordinates: function() {
    return axios.get("/api/coordinates");
  },
  // Gets the book with the given id
  getCoordinate: function(id) {
    return axios.get("/api/coordinates/" + id);
  },
  // Deletes the book with the given id
  deleteCoordinate: function(id) {
    return axios.delete("/api/coordinates/" + id);
  },
  // Saves a book to the database
  saveCoordinate: function(bookData) {
    return axios.post("/api/coordinates", bookData);
  }
};