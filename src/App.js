"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./assets/styles/styles.scss");
const MainPage_tsx_1 = __importDefault(require("./modules/views/MainPage.tsx"));
function App() {
    return (<>
      <MainPage_tsx_1.default />
    </>);
}
exports.default = App;
