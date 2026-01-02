import type { z } from "zod";
import type { Logger, McpbManifestAny } from "../types.js";
import type { McpbUserConfigValuesSchema } from "./common.js";
/**
 * This file contains utility functions for handling MCPB configuration,
 * including variable replacement and MCP server configuration generation.
 */
/**
 * Recursively replaces variables in any value. Handles strings, arrays, and objects.
 *
 * @param value The value to process
 * @param variables Object containing variable replacements
 * @returns The processed value with all variables replaced
 */
export declare function replaceVariables(value: unknown, variables: Record<string, string | string[]>): unknown;
interface GetMcpConfigForManifestOptions {
    manifest: McpbManifestAny;
    extensionPath: string;
    systemDirs: Record<string, string>;
    userConfig: z.infer<typeof McpbUserConfigValuesSchema>;
    pathSeparator: string;
    logger?: Logger;
}
export declare function getMcpConfigForManifest(options: GetMcpConfigForManifestOptions): Promise<McpbManifestAny["server"]["mcp_config"] | undefined>;
interface HasRequiredConfigMissingOptions {
    manifest: McpbManifestAny;
    userConfig?: z.infer<typeof McpbUserConfigValuesSchema>;
}
/**
 * Check if an extension has missing required configuration
 * @param manifest The extension manifest
 * @param userConfig The user configuration
 * @returns true if required configuration is missing
 */
export declare function hasRequiredConfigMissing({ manifest, userConfig, }: HasRequiredConfigMissingOptions): boolean;
export {};
