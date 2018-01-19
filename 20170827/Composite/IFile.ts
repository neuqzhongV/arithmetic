export interface IFile {
    fileName: String;
    /**
     * 列出当前文件目录中的所有文件
     */
    list(): Array<IFile>;
    /**
     * 移除文件
     */
    remove(file: IFile): void;
    /**
     * 添加文件
     * @param file
     */
    add(file: IFile): void;
    /**
     * 写入文本
     * @param txt
     */
    writeData(txt: String): void;
    /**
     * 获取文本
     */
    getData(): String;
}