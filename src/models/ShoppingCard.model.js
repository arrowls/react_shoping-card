export default class ShoppingCardModel {
    constructor({brand, title, description, descriptionFull, price, currency}) {
        this._brand = brand;
        this._title = title;
        this._description = description;
        this._descriptionFull = descriptionFull;
        this._price = price;
        this._currency = currency;
    }

    get brand() {
        if (typeof this._brand === 'string') {
            return this._brand;
        } else {
            return 'Название бренда';
        }
    }

    get title() {
        if (typeof this._title === 'string') {
            return this._title;
        } else {
            return 'Название товара';
        }
    }

    get description() {
        if (typeof this._description === 'string') {
            return this._description;
        } else {
            return 'Описание';
        }
    }

    get descriptionFull() {
        if (typeof this._descriptionFull === 'string') {
            return this._descriptionFull;
        } else {
            return 'Описание';
        }
    }

    get price() {
        if (typeof this._price === 'number' && !Number.isNaN(this._price)) {
            return this._price;
        } else {
            return 'Уточните цену у продавца'
        }
    }

    get currency() {
        return this._currency;
    }
}
