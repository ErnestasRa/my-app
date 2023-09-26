import * as React from "react";
import { fetchFilms, fetchPeople } from "../functions/FetchData";

type DataContextType = {
  films?: FilmType[] | undefined;
  people?: PersonType[] | undefined;
  selectedMovie?: FilmType[] | undefined;
  setSelectedMovie?: React.Dispatch<
    React.SetStateAction<FilmType[] | undefined>
  >;
  filteredCharacters?: PersonType[] | undefined;
  children?: React.ReactNode;
};
export const DataContext = React.createContext<DataContextType>(
  {} as DataContextType,
);

export const DataContextProvider: React.FC<DataContextType> = ({
  children,
}) => {
  const [films, setFilms] = React.useState<FilmType[]>();
  const [people, setPeople] = React.useState<PersonType[]>();
  const [selectedMovie, setSelectedMovie] = React.useState<FilmType[]>();
  const [filteredCharacters, setFilteredCharacters] =
    React.useState<PersonType[]>();

  // -- Fetches all the data on page load
  React.useEffect(() => {
    fetchFilms(setFilms);
    fetchPeople(setPeople);
  }, []);

  // -- Filters out the characters that were in the selected movie
  React.useEffect(() => {
    if (selectedMovie) {
      const filteredChars = people?.filter(
        (character) => selectedMovie[0].characters?.includes(character.url),
      );
      setFilteredCharacters(filteredChars);
    } else {
      setFilteredCharacters([]);
    }
  }, [selectedMovie, people]);

  // -- Returns context as a wrapper.
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
      }}
    >
      <DataContext.Provider
        value={{ films, setSelectedMovie, filteredCharacters }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
};
