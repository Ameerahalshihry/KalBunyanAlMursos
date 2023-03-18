"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const ChatGPTRoutes_1 = __importDefault(require("./Routes/ChatGPTRoutes"));
const SocketsController_1 = __importDefault(require("./Controllers/SocketsController"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const server = app.listen(3000, () => {
    console.log('Server started on port 3000');
});
(0, SocketsController_1.default)(server);
app.use('/chat', ChatGPTRoutes_1.default);
