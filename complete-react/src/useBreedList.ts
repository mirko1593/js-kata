import { useQuery, QueryStatus } from "@tanstack/react-query";
import { Animal } from "./APIResponseTypes";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal: Animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status] as [
    string[],
    QueryStatus
  ];
}
