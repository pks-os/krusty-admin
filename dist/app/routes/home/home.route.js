"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var keys_admin_mw_1 = require("../../middlewares/home/keys-admin.mw");
var profile_mw_1 = require("../../middlewares/home/profile.mw");
var home_mw_1 = require("../../middlewares/home/home.mw");
var auth_mw_1 = require("../../middlewares/auth/auth.mw");
exports.HomeRouter = express_1.default.Router();
exports.HomeRouter.get('/', function (req, res) {
    res.render('login', {
        title: 'Inicio de sesión'
    });
});
exports.HomeRouter.get('/home', home_mw_1.Home);
exports.HomeRouter.get('/profile/:token/:username', profile_mw_1.AdminUserProfile);
exports.HomeRouter.get('/settings', home_mw_1.Settings);
exports.HomeRouter.put('/profile/update', profile_mw_1.AdminUpdateProfile);
exports.HomeRouter.post('/create-keys', keys_admin_mw_1.CreateKeys);
exports.HomeRouter.post('/admins/getAllExceptMe', auth_mw_1.GetAdministrators);
