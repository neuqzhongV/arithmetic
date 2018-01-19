"use strict";
exports.__esModule = true;
var VirtualFile_1 = require("./VirtualFile");
var root = new VirtualFile_1.VirtualFile('root');
var childA = new VirtualFile_1.VirtualFile('childA');
var childB = new VirtualFile_1.VirtualFile('childB');
var childC = new VirtualFile_1.VirtualFile('childC');
var childD = new VirtualFile_1.VirtualFile('childD');
var childE = new VirtualFile_1.VirtualFile('childE');
var childF = new VirtualFile_1.VirtualFile('childF');
var childG = new VirtualFile_1.VirtualFile('childG');
root.add(childA);
root.add(childB);
childA.add(childC);
childA.add(childD);
childB.add(childE);
childE.add(childF);
childE.add(childG);
print(root, 0);
function print(file, level) {
    var str = "";
    var count = level;
    while (count > 0) {
        str += "   ";
        count--;
    }
    console.log(str + file.fileName);
    var fileList = file.list();
    if (fileList.length > 0) {
        for (var i = 0; i < fileList.length; i++) {
            var newFile = fileList[i];
            print(newFile, level + 1);
        }
    }
}
