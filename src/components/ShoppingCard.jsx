import PropTypes from 'prop-types';
import React from "react";

function ShoppingCard(props) {
    return (
        <div className="l-card__wrapper">
            <h2 className="l-card__brand-name">{props.item.brand}</h2>
            <h1 className="l-card__title">{props.item.title}</h1>
            <h3 className="l-card__description-short">{props.item.description}</h3>
            <span className="l-card__description">{props.item.descriptionFull}</span>
            <hr className="l-card__divider"/>
            <div className="l-card__footer">
                <span className="l-card__price">
                    <span className="l-card__price__currency">{props.item.currency}</span>{props.item.price.toFixed(2)}
                </span>
                <button className="l-card__btn">добавить в корзину</button>
            </div>
        </div>
    )
}
ShoppingCard.propTypes = {
    item: PropTypes.object,
}

export default ShoppingCard;
