import { createContext } from "react";
import { Pet } from "./APIResponseTypes";

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 1337,
    name: "Fido",
    animal: "bird",
    description: "Lorem",
    breed: "Beagle",
    city: "Seattle",
    images: [],
    state: "WA",
  },
  () => {},
]);

export default AdoptedPetContext;
