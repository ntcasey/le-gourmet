"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCartItemModel = exports.updateCartItemModel = exports.addCartItemModel = exports.getCartModel = void 0;
const db_1 = __importDefault(require("../database/db"));
const getCartModel = (callback) => {
    const queryStr = "select * from cart";
    db_1.default.query(queryStr)
        .then((data) => callback(null, data))
        .catch((err) => callback(err));
};
exports.getCartModel = getCartModel;
const addCartItemModel = (product, callback) => {
    const { description, id, image, name, price, price_id, quantity } = product;
    const property = "description, id, image, name, price, price_id, quantity";
    const queryStr = `insert into cart (${property}) values ('${description}', ${id}, '${image}', '${name}', ${price}, '${price_id}', ${quantity})`;
    db_1.default.query(queryStr)
        .then(() => callback(null))
        .catch((err) => callback(err));
};
exports.addCartItemModel = addCartItemModel;
const updateCartItemModel = (id, callback) => {
    const queryStr = `update cart set quantity=quantity+1 where id=${id}`;
    db_1.default.query(queryStr)
        .then(() => callback(null))
        .catch((err) => callback(err));
};
exports.updateCartItemModel = updateCartItemModel;
const deleteCartItemModel = (id, callback) => {
    const queryStr = `delete from cart where id=${id}`;
    db_1.default.query(queryStr)
        .then(() => callback(null))
        .catch((err) => callback(err));
};
exports.deleteCartItemModel = deleteCartItemModel;
