"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logo_png_1 = __importDefault(require("@/assets/images/logo.png"));
const Header = () => {
    return (<div className='header-conteiner mt-2'>
            <div className='d-flex justify-content-center align-items-center'>
                <img className='header-img' src={logo_png_1.default} alt={'icon'}/>
                <h1 className='p-3'> Easy Recipes Blog </h1>
            </div>
        </div>);
};
exports.default = Header;
