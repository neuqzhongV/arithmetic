import { IFile } from "./IFile";
export class VirtualFile implements IFile {
    public fileName: String;
    private listAry: Array<IFile>;
    constructor(fileName: String) {
        this.fileName = fileName;
        this.listAry = [];
    }

    list(): Array<IFile> {
        return this.listAry;
    }

    remove(file: IFile): void {
    }

    add(file: IFile): void {
        this.listAry.push(file);
    }

    writeData(txt: String): void {
    }

    getData(): String {
        return null;
    }
}