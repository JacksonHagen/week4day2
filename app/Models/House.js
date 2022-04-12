
export class House {
    constructor({id = '', bedrooms, bathrooms, levels, imgUrl, year, price, description}) {
        this.id = id
        this.bedrooms = bedrooms || ''
        this.bathrooms = bathrooms || ''
        this.levels = levels || ''
        this.imgUrl = imgUrl || ''
        this.year = year || ''
        this.price = price || ''
        this.description = description || ''
    }

    get CardTemplate() {
        return /*html*/`
        <div class="col-md-4 p-4">
            <div class="bg-white shadow rounded">
            <img class="cover-img rounded-top" src="${this.imgUrl}" alt="${this.bedrooms}-bedroom ${this.bathrooms}-bath">
                <div class="p-3 pb-1">
                    <p class="text-center uppercase mb-0"><b>${this.bedrooms} bedroom ${this.bathrooms} bath ${this.levels} ${this.levels > 1 ? 'stories' : 'story'}<i class="mdi mdi-pencil on-hover selectable" onclick="app.housesController.openEditor('${this.id}')"></i></b></p>
                    <p class="text-center">Built in ${this.year}</p>
                    <p class="ps-1 mb-1">${this.description}</p>
                </div>
                <div class="ps-3 d-flex justify-content-between align-items-center">
                    <p class="ps-1">$${this.price}</p>
                    <i class="mdi mdi-delete selectable pe-2" onclick="app.housesController.removeHouse('${this.id}')"></i>
                </div>
            </div>
        </div>
        `
    }
}