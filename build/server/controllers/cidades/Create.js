"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const create = (req, res) => {
    console.log(req.body);
    return res.send('Create');
};
exports.create = create;
