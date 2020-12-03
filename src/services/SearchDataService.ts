import http from "../http-common";

class SearchDataService {
  search(search: string) {
    console.log("search: ", search);
    return http.get(
      `search/photos?query=${search}&client_id=h3XNih-UprCwLHqB17ID_prIhGqA9N-BN5yXK60lP3E`
    );
  }
  get() {
    return http.get(
      `photos/?client_id=h3XNih-UprCwLHqB17ID_prIhGqA9N-BN5yXK60lP3E`
    );
  }
}

export default new SearchDataService();
