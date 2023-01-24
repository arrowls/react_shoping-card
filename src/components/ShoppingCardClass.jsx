import React from "react";
import PropTypes from "prop-types";
import ShoppingCardModel from "../models/ShoppingCard.model";

export default class ShoppingCardClass extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    static propTypes = {
        item: PropTypes.instanceOf(ShoppingCardModel).isRequired,
    }

    render() {
        return (
            <div className="l-card__wrapper">
                <h2 className="l-card__brand-name">{this.props.item.brand}</h2>
                <h1 className="l-card__title">{this.props.item.title}</h1>
                <h3 className="l-card__description-short">{this.props.item.description}</h3>
                <span className="l-card__description">{this.props.item.descriptionFull}</span>
                <hr className="l-card__divider"/>
                <div className="l-card__footer">
                <span className="l-card__price">
                    <span className="l-card__price__currency">
                        {this.props.item.currency}
                    </span>
                    {this.props.item.price.toFixed(2)}
                </span>
                    <button className="l-card__btn">добавить в корзину</button>
                </div>
            </div>
        )
    }
}
