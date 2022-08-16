import { dataPets, DataPets, PetType } from "../__mocks__/data"

export const Pet = {
  getAll: (): DataPets[] => {
    return dataPets;
  },
  getFromType: (type: PetType): DataPets[] => {
    return dataPets.filter(item => item.type === type)
  },
  getFromName: (name: string): DataPets[] => {
    return dataPets.filter(item =>
      item.name.toLowerCase().indexOf(name.toLowerCase()) > -1)
  }
}