/// <reference types="node" resolution-mode="require"/>
import type { PathLike } from 'node:fs';
export declare function writeJson<T>(path: PathLike, data: T): Promise<void>;
export declare function removeDir(dir: PathLike): Promise<void>;
export declare function emptyDir(dir: PathLike): Promise<void>;
export declare function getFilesFromFolder(dir: URL): Promise<URL[]>;
/**
 * Copies files into a folder keeping the folder structure intact.
 * The resulting file tree will start at the common ancestor.
 *
 * @param {URL[]} files A list of files to copy (absolute path).
 * @param {URL} outDir Destination folder where to copy the files to (absolute path).
 * @param {URL[]} [exclude] A list of files to exclude (absolute path).
 * @returns {Promise<string>} The common ancestor of the copied files.
 */
export declare function copyFilesToFunction(files: URL[], outDir: URL, exclude?: URL[]): Promise<string>;
export declare function writeFile(path: PathLike, content: string): Promise<void>;
