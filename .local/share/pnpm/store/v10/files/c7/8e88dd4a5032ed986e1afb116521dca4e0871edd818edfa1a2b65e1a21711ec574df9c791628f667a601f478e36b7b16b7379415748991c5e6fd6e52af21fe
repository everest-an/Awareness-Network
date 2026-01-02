import type { z } from "zod";
import type { McpbManifestSchema } from "../schemas/0.2.js";
interface PackageJson {
    name?: string;
    version?: string;
    description?: string;
    main?: string;
    author?: string | {
        name?: string;
        email?: string;
        url?: string;
    };
    repository?: string | {
        type?: string;
        url?: string;
    };
    license?: string;
}
export declare function readPackageJson(dirPath: string): PackageJson;
export declare function getDefaultAuthorName(packageData: PackageJson): string;
export declare function getDefaultAuthorEmail(packageData: PackageJson): string;
export declare function getDefaultAuthorUrl(packageData: PackageJson): string;
export declare function getDefaultRepositoryUrl(packageData: PackageJson): string;
export declare function getDefaultBasicInfo(packageData: PackageJson, resolvedPath: string): {
    name: string;
    authorName: string;
    displayName: string;
    version: string;
    description: string;
};
export declare function getDefaultAuthorInfo(packageData: PackageJson): {
    authorEmail: string;
    authorUrl: string;
};
export declare function getDefaultServerConfig(packageData?: PackageJson): {
    serverType: "node";
    entryPoint: string;
    mcp_config: {
        command: string;
        args: string[];
        env?: Record<string, string>;
    };
};
export declare function getDefaultOptionalFields(packageData: PackageJson): {
    keywords: string;
    license: string;
    repository: undefined;
};
export declare function createMcpConfig(serverType: "node" | "python" | "binary", entryPoint: string): {
    command: string;
    args: string[];
    env?: Record<string, string>;
};
export declare function getDefaultEntryPoint(serverType: "node" | "python" | "binary", packageData?: PackageJson): string;
export declare function promptBasicInfo(packageData: PackageJson, resolvedPath: string): Promise<{
    name: string;
    authorName: string;
    displayName: string;
    version: string;
    description: string;
}>;
export declare function promptAuthorInfo(packageData: PackageJson): Promise<{
    authorEmail: string;
    authorUrl: string;
}>;
export declare function promptServerConfig(packageData?: PackageJson): Promise<{
    serverType: "python" | "node" | "binary";
    entryPoint: string;
    mcp_config: {
        command: string;
        args: string[];
        env?: Record<string, string>;
    };
}>;
export declare function promptTools(): Promise<{
    tools: {
        name: string;
        description?: string;
    }[];
    toolsGenerated: boolean;
}>;
export declare function promptPrompts(): Promise<{
    prompts: {
        name: string;
        description?: string;
        arguments?: string[];
        text: string;
    }[];
    promptsGenerated: boolean;
}>;
export declare function promptOptionalFields(packageData: PackageJson): Promise<{
    keywords: string;
    license: string;
    repository: {
        type: string;
        url: string;
    } | undefined;
}>;
export declare function promptLongDescription(description: string): Promise<string | undefined>;
export declare function promptUrls(): Promise<{
    homepage: string;
    documentation: string;
    support: string;
}>;
export declare function promptVisualAssets(): Promise<{
    icon: string;
    icons: {
        src: string;
        size: string;
        theme?: string;
    }[];
    screenshots: string[];
}>;
export declare function promptLocalization(): Promise<{
    resources: string;
    default_locale: string;
} | undefined>;
export declare function promptCompatibility(serverType: "node" | "python" | "binary"): Promise<{
    runtimes?: {
        python?: string;
        node?: string;
    } | undefined;
    platforms?: ("darwin" | "win32" | "linux")[] | undefined;
} | undefined>;
export declare function promptUserConfig(): Promise<Record<string, {
    type: "string" | "number" | "boolean" | "directory" | "file";
    title: string;
    description: string;
    required?: boolean;
    default?: string | number | boolean | string[];
    multiple?: boolean;
    sensitive?: boolean;
    min?: number;
    max?: number;
}>>;
export declare function buildManifest(basicInfo: {
    name: string;
    displayName: string;
    version: string;
    description: string;
    authorName: string;
}, longDescription: string | undefined, authorInfo: {
    authorEmail: string;
    authorUrl: string;
}, urls: {
    homepage: string;
    documentation: string;
    support: string;
}, visualAssets: {
    icon: string;
    icons: Array<{
        src: string;
        size: string;
        theme?: string;
    }>;
    screenshots: string[];
}, serverConfig: {
    serverType: "node" | "python" | "binary";
    entryPoint: string;
    mcp_config: {
        command: string;
        args: string[];
        env?: Record<string, string>;
    };
}, tools: Array<{
    name: string;
    description?: string;
}>, toolsGenerated: boolean, prompts: Array<{
    name: string;
    description?: string;
    arguments?: string[];
    text: string;
}>, promptsGenerated: boolean, compatibility: {
    claude_desktop?: string;
    platforms?: ("darwin" | "win32" | "linux")[];
    runtimes?: {
        python?: string;
        node?: string;
    };
} | undefined, userConfig: Record<string, {
    type: "string" | "number" | "boolean" | "directory" | "file";
    title: string;
    description: string;
    required?: boolean;
    default?: string | number | boolean | string[];
    multiple?: boolean;
    sensitive?: boolean;
    min?: number;
    max?: number;
}>, optionalFields: {
    keywords: string;
    license: string;
    repository?: {
        type: string;
        url: string;
    };
}): z.infer<typeof McpbManifestSchema>;
export declare function printNextSteps(): void;
export declare function initExtension(targetPath?: string, nonInteractive?: boolean): Promise<boolean>;
export {};
