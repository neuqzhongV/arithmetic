"use strict";
exports.__esModule = true;
var VirtualFile = (function () {
    function VirtualFile(fileName) {
        this.fileName = fileName;
        this.listAry = [];
    }
    VirtualFile.prototype.list = function () {
        return this.listAry;
    };
    VirtualFile.prototype.remove = function (file) {
    };
    VirtualFile.prototype.add = function (file) {
        this.listAry.push(file);
    };
    VirtualFile.prototype.writeData = function (txt) {
    };
    VirtualFile.prototype.getData = function () {
        return null;
    };
    return VirtualFile;
}());
exports.VirtualFile = VirtualFile;
