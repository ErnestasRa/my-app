import axios from "axios";

// - Fetches movies from an API.
export async function fetchFilms(
  setData: React.Dispatch<React.SetStateAction<FilmType[] | undefined>>,
) {
  axios
    .get(`https://swapi.dev/api/films/`)
    .then((response) => {
      return setData(response.data.results);
    })
    .catch((err) => {
      throw new Error(err);
    });
}

// - Fetches all the characters in the API.
export async function fetchPeople(
  setData: React.Dispatch<React.SetStateAction<PersonType[] | undefined>>,
) {
  axios
    .get(`https://swapi.dev/api/people/`)
    .then((response) => {
      return setData(response.data.results);
    })
    .catch((err) => {
      throw new Error(err);
    });
}
