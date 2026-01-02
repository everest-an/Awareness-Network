/**
 * Latest manifest version - indicates the maximum supported version by vAny schema
 */
export declare const LATEST_MANIFEST_VERSION: "0.4";
/**
 * Default manifest version for new packages
 */
export declare const DEFAULT_MANIFEST_VERSION: "0.2";
/**
 * Map of manifest versions to their strict schemas
 */
export declare const MANIFEST_SCHEMAS: {
    readonly "0.1": import("zod").ZodEffects<import("zod").ZodObject<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.1">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.1">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strict", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strict", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strict", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>;
        }, "strict", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strict", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "strict", import("zod").ZodTypeAny, {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        }, {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        }>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strict", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
    }, "strict", import("zod").ZodTypeAny, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.1" | undefined;
        manifest_version?: "0.1" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        } | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
    }, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.1" | undefined;
        manifest_version?: "0.1" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        } | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
    }>, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.1" | undefined;
        manifest_version?: "0.1" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        } | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
    }, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.1" | undefined;
        manifest_version?: "0.1" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        } | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
    }>;
    readonly "0.2": import("zod").ZodEffects<import("zod").ZodObject<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.2">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.2">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strict", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strict", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strict", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>;
        }, "strict", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strict", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "strict", import("zod").ZodTypeAny, {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        }, {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        }>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strict", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
    }, "strict", import("zod").ZodTypeAny, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.2" | undefined;
        manifest_version?: "0.2" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        } | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
        privacy_policies?: string[] | undefined;
    }, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.2" | undefined;
        manifest_version?: "0.2" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        } | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
        privacy_policies?: string[] | undefined;
    }>, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.2" | undefined;
        manifest_version?: "0.2" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        } | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
        privacy_policies?: string[] | undefined;
    }, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.2" | undefined;
        manifest_version?: "0.2" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        } | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
        privacy_policies?: string[] | undefined;
    }>;
    readonly "0.3": import("zod").ZodEffects<import("zod").ZodObject<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.3">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.3">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strict", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        icons: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strict", import("zod").ZodTypeAny, {
            src: string;
            size: string;
            theme?: string | undefined;
        }, {
            src: string;
            size: string;
            theme?: string | undefined;
        }>, "many">>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        localization: import("zod").ZodOptional<import("zod").ZodObject<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, "strict", import("zod").ZodTypeAny, {
            resources: string;
            default_locale: string;
        }, {
            resources: string;
            default_locale: string;
        }>>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strict", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strict", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>;
        }, "strict", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strict", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "strict", import("zod").ZodTypeAny, {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        }, {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        }>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strict", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
        _meta: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>>;
    }, "strict", import("zod").ZodTypeAny, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.3" | undefined;
        manifest_version?: "0.3" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        } | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
        privacy_policies?: string[] | undefined;
        icons?: {
            src: string;
            size: string;
            theme?: string | undefined;
        }[] | undefined;
        localization?: {
            resources: string;
            default_locale: string;
        } | undefined;
        _meta?: Record<string, Record<string, any>> | undefined;
    }, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.3" | undefined;
        manifest_version?: "0.3" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        } | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
        privacy_policies?: string[] | undefined;
        icons?: {
            src: string;
            size: string;
            theme?: string | undefined;
        }[] | undefined;
        localization?: {
            resources: string;
            default_locale: string;
        } | undefined;
        _meta?: Record<string, Record<string, any>> | undefined;
    }>, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.3" | undefined;
        manifest_version?: "0.3" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        } | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
        privacy_policies?: string[] | undefined;
        icons?: {
            src: string;
            size: string;
            theme?: string | undefined;
        }[] | undefined;
        localization?: {
            resources: string;
            default_locale: string;
        } | undefined;
        _meta?: Record<string, Record<string, any>> | undefined;
    }, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.3" | undefined;
        manifest_version?: "0.3" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        } | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
        privacy_policies?: string[] | undefined;
        icons?: {
            src: string;
            size: string;
            theme?: string | undefined;
        }[] | undefined;
        localization?: {
            resources: string;
            default_locale: string;
        } | undefined;
        _meta?: Record<string, Record<string, any>> | undefined;
    }>;
    readonly "0.4": import("zod").ZodEffects<import("zod").ZodObject<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.4">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.4">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strict", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        icons: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strict", import("zod").ZodTypeAny, {
            src: string;
            size: string;
            theme?: string | undefined;
        }, {
            src: string;
            size: string;
            theme?: string | undefined;
        }>, "many">>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        localization: import("zod").ZodOptional<import("zod").ZodObject<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, "strict", import("zod").ZodTypeAny, {
            resources: string;
            default_locale: string;
        }, {
            resources: string;
            default_locale: string;
        }>>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary", "uv"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strict", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strict", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>;
        }, "strict", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary" | "uv";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }, {
            type: "python" | "node" | "binary" | "uv";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strict", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "strict", import("zod").ZodTypeAny, {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        }, {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        }>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strict", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
        _meta: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>>;
    }, "strict", import("zod").ZodTypeAny, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary" | "uv";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.4" | undefined;
        manifest_version?: "0.4" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        } | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
        privacy_policies?: string[] | undefined;
        icons?: {
            src: string;
            size: string;
            theme?: string | undefined;
        }[] | undefined;
        localization?: {
            resources: string;
            default_locale: string;
        } | undefined;
        _meta?: Record<string, Record<string, any>> | undefined;
    }, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary" | "uv";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.4" | undefined;
        manifest_version?: "0.4" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        } | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
        privacy_policies?: string[] | undefined;
        icons?: {
            src: string;
            size: string;
            theme?: string | undefined;
        }[] | undefined;
        localization?: {
            resources: string;
            default_locale: string;
        } | undefined;
        _meta?: Record<string, Record<string, any>> | undefined;
    }>, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary" | "uv";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.4" | undefined;
        manifest_version?: "0.4" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        } | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
        privacy_policies?: string[] | undefined;
        icons?: {
            src: string;
            size: string;
            theme?: string | undefined;
        }[] | undefined;
        localization?: {
            resources: string;
            default_locale: string;
        } | undefined;
        _meta?: Record<string, Record<string, any>> | undefined;
    }, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary" | "uv";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.4" | undefined;
        manifest_version?: "0.4" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: {
            claude_desktop?: string | undefined;
            platforms?: ("darwin" | "win32" | "linux")[] | undefined;
            runtimes?: {
                python?: string | undefined;
                node?: string | undefined;
            } | undefined;
        } | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
        privacy_policies?: string[] | undefined;
        icons?: {
            src: string;
            size: string;
            theme?: string | undefined;
        }[] | undefined;
        localization?: {
            resources: string;
            default_locale: string;
        } | undefined;
        _meta?: Record<string, Record<string, any>> | undefined;
    }>;
};
/**
 * Map of manifest versions to their loose schemas (with passthrough)
 */
export declare const MANIFEST_SCHEMAS_LOOSE: {
    readonly "0.1": import("zod").ZodEffects<import("zod").ZodObject<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.1">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.1">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strip", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strip", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
    }, "strip", import("zod").ZodTypeAny, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.1" | undefined;
        manifest_version?: "0.1" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: import("zod").objectOutputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough"> | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
    }, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.1" | undefined;
        manifest_version?: "0.1" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: import("zod").objectInputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough"> | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
    }>, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.1" | undefined;
        manifest_version?: "0.1" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: import("zod").objectOutputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough"> | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
    }, {
        name: string;
        description: string;
        version: string;
        author: {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        };
        server: {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        };
        $schema?: string | undefined;
        dxt_version?: "0.1" | undefined;
        manifest_version?: "0.1" | undefined;
        display_name?: string | undefined;
        long_description?: string | undefined;
        repository?: {
            type: string;
            url: string;
        } | undefined;
        homepage?: string | undefined;
        documentation?: string | undefined;
        support?: string | undefined;
        icon?: string | undefined;
        screenshots?: string[] | undefined;
        tools?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
        tools_generated?: boolean | undefined;
        prompts?: {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }[] | undefined;
        prompts_generated?: boolean | undefined;
        keywords?: string[] | undefined;
        license?: string | undefined;
        compatibility?: import("zod").objectInputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough"> | undefined;
        user_config?: Record<string, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }> | undefined;
    }>;
    readonly "0.2": import("zod").ZodEffects<import("zod").ZodObject<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.2">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.2">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strip", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strip", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
    }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.2">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.2">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strip", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strip", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
    }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.2">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.2">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strip", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strip", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
    }, import("zod").ZodTypeAny, "passthrough">>, import("zod").objectOutputType<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.2">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.2">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strip", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strip", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
    }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.2">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.2">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strip", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strip", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
    }, import("zod").ZodTypeAny, "passthrough">>;
    readonly "0.3": import("zod").ZodEffects<import("zod").ZodObject<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.3">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.3">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        icons: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        localization: import("zod").ZodOptional<import("zod").ZodObject<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strip", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strip", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
        _meta: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>>;
    }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.3">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.3">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        icons: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        localization: import("zod").ZodOptional<import("zod").ZodObject<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strip", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strip", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
        _meta: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>>;
    }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.3">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.3">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        icons: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        localization: import("zod").ZodOptional<import("zod").ZodObject<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strip", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strip", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
        _meta: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>>;
    }, import("zod").ZodTypeAny, "passthrough">>, import("zod").objectOutputType<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.3">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.3">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        icons: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        localization: import("zod").ZodOptional<import("zod").ZodObject<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strip", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strip", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
        _meta: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>>;
    }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.3">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.3">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        icons: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        localization: import("zod").ZodOptional<import("zod").ZodObject<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strip", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strip", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }, {
            type: "python" | "node" | "binary";
            entry_point: string;
            mcp_config: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            };
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
        _meta: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>>;
    }, import("zod").ZodTypeAny, "passthrough">>;
    readonly "0.4": import("zod").ZodEffects<import("zod").ZodObject<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.4">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.4">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        icons: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        localization: import("zod").ZodOptional<import("zod").ZodObject<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary", "uv"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodOptional<import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strip", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strip", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary" | "uv";
            entry_point: string;
            mcp_config?: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            } | undefined;
        }, {
            type: "python" | "node" | "binary" | "uv";
            entry_point: string;
            mcp_config?: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            } | undefined;
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
        _meta: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>>;
    }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.4">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.4">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        icons: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        localization: import("zod").ZodOptional<import("zod").ZodObject<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary", "uv"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodOptional<import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strip", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strip", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary" | "uv";
            entry_point: string;
            mcp_config?: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            } | undefined;
        }, {
            type: "python" | "node" | "binary" | "uv";
            entry_point: string;
            mcp_config?: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            } | undefined;
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
        _meta: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>>;
    }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.4">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.4">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        icons: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        localization: import("zod").ZodOptional<import("zod").ZodObject<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary", "uv"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodOptional<import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strip", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strip", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary" | "uv";
            entry_point: string;
            mcp_config?: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            } | undefined;
        }, {
            type: "python" | "node" | "binary" | "uv";
            entry_point: string;
            mcp_config?: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            } | undefined;
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
        _meta: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>>;
    }, import("zod").ZodTypeAny, "passthrough">>, import("zod").objectOutputType<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.4">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.4">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        icons: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        localization: import("zod").ZodOptional<import("zod").ZodObject<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary", "uv"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodOptional<import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strip", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strip", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary" | "uv";
            entry_point: string;
            mcp_config?: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            } | undefined;
        }, {
            type: "python" | "node" | "binary" | "uv";
            entry_point: string;
            mcp_config?: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            } | undefined;
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
        _meta: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>>;
    }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.4">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.4">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
            url?: string | undefined;
        }>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        icons: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        localization: import("zod").ZodOptional<import("zod").ZodObject<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["python", "node", "binary", "uv"]>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodOptional<import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            } & {
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, "strip", import("zod").ZodTypeAny, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }>>>;
            }, "strip", import("zod").ZodTypeAny, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }, {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            }>>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "python" | "node" | "binary" | "uv";
            entry_point: string;
            mcp_config?: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            } | undefined;
        }, {
            type: "python" | "node" | "binary" | "uv";
            entry_point: string;
            mcp_config?: {
                command: string;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
                platform_overrides?: Record<string, {
                    command?: string | undefined;
                    args?: string[] | undefined;
                    env?: Record<string, string> | undefined;
                }> | undefined;
            } | undefined;
        }>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description?: string | undefined;
        }, {
            name: string;
            description?: string | undefined;
        }>, "many">>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            text: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }, {
            name: string;
            text: string;
            description?: string | undefined;
            arguments?: string[] | undefined;
        }>, "many">>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<["darwin", "win32", "linux"]>, "many">>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                python?: string | undefined;
                node?: string | undefined;
            }, {
                python?: string | undefined;
                node?: string | undefined;
            }>>;
        }, import("zod").ZodTypeAny, "passthrough">>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<["string", "number", "boolean", "directory", "file"]>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }, {
            type: "string" | "number" | "boolean" | "directory" | "file";
            description: string;
            title: string;
            default?: string | number | boolean | string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            required?: boolean | undefined;
            multiple?: boolean | undefined;
            sensitive?: boolean | undefined;
        }>>>;
        _meta: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>>;
    }, import("zod").ZodTypeAny, "passthrough">>;
};
