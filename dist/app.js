"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_fs_1 = __importDefault(require("node:fs"));
const app = (0, express_1.default)();
const fumos = node_fs_1.default.readdirSync('fumos');
const port = process.env.PORT || 3000;
app.use('/fumos', express_1.default.static('fumos'));
app.get('/', (req, res) => {
    res.send('Fumo bot api ᗜˬᗜ');
});
app.get('/random', (req, res) => {
    const fumo = fumos[Math.floor(Math.random() * fumos.length)];
    const contype = req.headers['content-type'];
    if (contype === 'application/json') {
        const url = `${req.protocol}://${req.header('host')}/fumos/${fumo}`;
        return res.send({ url });
    }
    res.redirect('fumos/' + fumo);
});
app.listen(port, () => {
    console.log('ᗜˬᗜ Fumo api started on', port);
});
