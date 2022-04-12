import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";
import { sandboxApi } from "./AxiosService.js"

class HousesService {
    async addHouse(formData) {
        const res = await sandboxApi.post('houses', formData)
        const newHouse = new House(res.data)
        ProxyState.houses = [newHouse, ...ProxyState.houses]
    }
    async getAllHouses() {
        const res = await sandboxApi.get('houses')
        const houses = res.data.map(h => new House(h))
        ProxyState.houses = houses
    }
    async editHouse(formData) {
        const res = await sandboxApi.put('houses/'+formData.id, formData)
        const house = new House(formData)
        const index = ProxyState.houses.findIndex(h => h.id === formData.id)
        ProxyState.houses.splice(index, 1, house)
        ProxyState.houses = ProxyState.houses
    }
    async removeHouse(id) {
        const res = await sandboxApi.delete('houses/'+id)
        ProxyState.houses = ProxyState.houses.filter(h => h.id !== id)
    }
}

export const housesService = new HousesService()