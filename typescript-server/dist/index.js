"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// npm i -D typescript ts-node nodemon @types/node @types/express
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cartRoute_1 = __importDefault(require("./routes/cartRoute"));
const app = express_1.default();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, "../../le-casey-supermarket/build")));
app.use(express_1.default.json());
app.use("/cart", cartRoute_1.default);
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});
