export declare const EXCLUDE_PATTERNS: string[];
/**
 * Read and parse .mcpbignore file patterns
 */
export declare function readMcpbIgnorePatterns(baseDir: string): string[];
/**
 * Used for testing, calls the same methods as the other ignore checks
 */
export declare function shouldExclude(filePath: string, additionalPatterns?: string[]): boolean;
export declare function getAllFiles(dirPath: string, baseDir?: string, fileList?: Record<string, Uint8Array>, additionalPatterns?: string[]): Record<string, Uint8Array>;
interface FileWithPermissions {
    data: Uint8Array;
    mode: number;
}
export interface GetAllFilesResult {
    files: Record<string, FileWithPermissions>;
    ignoredCount: number;
}
export declare function getAllFilesWithCount(dirPath: string, baseDir?: string, fileList?: Record<string, FileWithPermissions>, additionalPatterns?: string[], ignoredCount?: number): GetAllFilesResult;
export {};
