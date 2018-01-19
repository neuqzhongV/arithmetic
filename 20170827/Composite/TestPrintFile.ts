import { IFile } from "./IFile";
import { VirtualFile } from "./VirtualFile";

var root: IFile = new VirtualFile('root');

var childA: IFile = new VirtualFile('childA');
var childB: IFile = new VirtualFile('childB');

var childC: IFile = new VirtualFile('childC');
var childD: IFile = new VirtualFile('childD');
var childE: IFile = new VirtualFile('childE');

var childF: IFile = new VirtualFile('childF');
var childG: IFile = new VirtualFile('childG');

root.add(childA);
root.add(childB);

childA.add(childC);
childA.add(childD);

childB.add(childE);

childE.add(childF);
childE.add(childG);

print(root, 0);




function print(file: IFile, level: number): void {
    let str = "";
    let count = level;
    while (count > 0) {
        str += "   ";
        count--;
    }
    console.log(str + file.fileName);
    let fileList = file.list();
    if (fileList.length > 0) {
        for (let i = 0; i < fileList.length; i++) {
            let newFile = fileList[i];
            print(newFile, level + 1);
        }
    }
}
