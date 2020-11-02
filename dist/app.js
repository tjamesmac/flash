"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// Create Express server
const app = express_1.default();
exports.app = app;
// Express configuration
// app.set("port", process.env.PORT || 3005);
app.use(express_1.default.static(path_1.default.join(__dirname, "../dist"), { maxAge: 31557600000 }));
app.get('/', (req, res) => {
    // res.sendFile('./dist/index.html')
});
//# sourceMappingURL=app.js.map