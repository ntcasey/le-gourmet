"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCart = exports.updateCart = exports.addCart = exports.getCart = void 0;
const model = __importStar(require("../models/cartModel"));
const getCart = (req, res) => {
    model.getCartModel((err, data) => {
        if (err) {
            res.sendStatus(404);
        }
        else {
            res.json(data);
        }
    });
};
exports.getCart = getCart;
const addCart = (req, res) => {
    const product = req.body;
    model.addCartItemModel(product, (err) => {
        if (err) {
            res.sendStatus(404);
        }
        else {
            res.sendStatus(200);
        }
    });
};
exports.addCart = addCart;
const updateCart = (req, res) => {
    const productID = req.body.id;
    model.updateCartItemModel(productID, (err) => {
        if (err) {
            res.sendStatus(404);
        }
        else {
            res.sendStatus(200);
        }
    });
};
exports.updateCart = updateCart;
const deleteCart = (req, res) => {
    const productID = req.body.id;
    model.deleteCartItemModel(productID, (err) => {
        if (err) {
            res.sendStatus(404);
        }
        else {
            res.sendStatus(200);
        }
    });
};
exports.deleteCart = deleteCart;
