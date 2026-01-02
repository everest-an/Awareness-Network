import * as z from "zod";
export declare const MANIFEST_VERSION = "0.2";
export declare const McpServerConfigSchema: z.ZodObject<{
    command: z.ZodString;
    args: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    env: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strict", z.ZodTypeAny, {
    command: string;
    args?: string[] | undefined;
    env?: Record<string, string> | undefined;
}, {
    command: string;
    args?: string[] | undefined;
    env?: Record<string, string> | undefined;
}>;
export declare const McpbManifestAuthorSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    name: string;
    email?: string | undefined;
    url?: string | undefined;
}, {
    name: string;
    email?: string | undefined;
    url?: string | undefined;
}>;
export declare const McpbManifestRepositorySchema: z.ZodObject<{
    type: z.ZodString;
    url: z.ZodString;
}, "strict", z.ZodTypeAny, {
    type: string;
    url: string;
}, {
    type: string;
    url: string;
}>;
export declare const McpbManifestPlatformOverrideSchema: z.ZodObject<{
    command: z.ZodOptional<z.ZodString>;
    args: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    env: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
}, "strict", z.ZodTypeAny, {
    command?: string | undefined;
    args?: string[] | undefined;
    env?: Record<string, string> | undefined;
}, {
    command?: string | undefined;
    args?: string[] | undefined;
    env?: Record<string, string> | undefined;
}>;
export declare const McpbManifestMcpConfigSchema: z.ZodObject<{
    command: z.ZodString;
    args: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    env: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
} & {
    platform_overrides: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        command: z.ZodOptional<z.ZodString>;
        args: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
        env: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
    }, "strict", z.ZodTypeAny, {
        command?: string | undefined;
        args?: string[] | undefined;
        env?: Record<string, string> | undefined;
    }, {
        command?: string | undefined;
        args?: string[] | undefined;
        env?: Record<string, string> | undefined;
    }>>>;
}, "strict", z.ZodTypeAny, {
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
export declare const McpbManifestServerSchema: z.ZodObject<{
    type: z.ZodEnum<["python", "node", "binary"]>;
    entry_point: z.ZodString;
    mcp_config: z.ZodObject<{
        command: z.ZodString;
        args: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        env: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    } & {
        platform_overrides: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            command: z.ZodOptional<z.ZodString>;
            args: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
            env: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
        }, "strict", z.ZodTypeAny, {
            command?: string | undefined;
            args?: string[] | undefined;
            env?: Record<string, string> | undefined;
        }, {
            command?: string | undefined;
            args?: string[] | undefined;
            env?: Record<string, string> | undefined;
        }>>>;
    }, "strict", z.ZodTypeAny, {
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
}, "strict", z.ZodTypeAny, {
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
export declare const McpbManifestCompatibilitySchema: z.ZodObject<{
    claude_desktop: z.ZodOptional<z.ZodString>;
    platforms: z.ZodOptional<z.ZodArray<z.ZodEnum<["darwin", "win32", "linux"]>, "many">>;
    runtimes: z.ZodOptional<z.ZodObject<{
        python: z.ZodOptional<z.ZodString>;
        node: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        python?: string | undefined;
        node?: string | undefined;
    }, {
        python?: string | undefined;
        node?: string | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
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
}>;
export declare const McpbManifestToolSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    name: string;
    description?: string | undefined;
}, {
    name: string;
    description?: string | undefined;
}>;
export declare const McpbManifestPromptSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    arguments: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    text: z.ZodString;
}, "strict", z.ZodTypeAny, {
    name: string;
    text: string;
    description?: string | undefined;
    arguments?: string[] | undefined;
}, {
    name: string;
    text: string;
    description?: string | undefined;
    arguments?: string[] | undefined;
}>;
export declare const McpbUserConfigurationOptionSchema: z.ZodObject<{
    type: z.ZodEnum<["string", "number", "boolean", "directory", "file"]>;
    title: z.ZodString;
    description: z.ZodString;
    required: z.ZodOptional<z.ZodBoolean>;
    default: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString, "many">]>>;
    multiple: z.ZodOptional<z.ZodBoolean>;
    sensitive: z.ZodOptional<z.ZodBoolean>;
    min: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
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
}>;
export declare const McpbManifestSchema: z.ZodEffects<z.ZodObject<{
    $schema: z.ZodOptional<z.ZodString>;
    dxt_version: z.ZodOptional<z.ZodLiteral<"0.2">>;
    manifest_version: z.ZodOptional<z.ZodLiteral<"0.2">>;
    name: z.ZodString;
    display_name: z.ZodOptional<z.ZodString>;
    version: z.ZodString;
    description: z.ZodString;
    long_description: z.ZodOptional<z.ZodString>;
    author: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        name: string;
        email?: string | undefined;
        url?: string | undefined;
    }, {
        name: string;
        email?: string | undefined;
        url?: string | undefined;
    }>;
    repository: z.ZodOptional<z.ZodObject<{
        type: z.ZodString;
        url: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: string;
        url: string;
    }, {
        type: string;
        url: string;
    }>>;
    homepage: z.ZodOptional<z.ZodString>;
    documentation: z.ZodOptional<z.ZodString>;
    support: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
    screenshots: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    server: z.ZodObject<{
        type: z.ZodEnum<["python", "node", "binary"]>;
        entry_point: z.ZodString;
        mcp_config: z.ZodObject<{
            command: z.ZodString;
            args: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            env: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        } & {
            platform_overrides: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                command: z.ZodOptional<z.ZodString>;
                args: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
                env: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
            }, "strict", z.ZodTypeAny, {
                command?: string | undefined;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
            }, {
                command?: string | undefined;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
            }>>>;
        }, "strict", z.ZodTypeAny, {
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
    }, "strict", z.ZodTypeAny, {
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
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        name: string;
        description?: string | undefined;
    }, {
        name: string;
        description?: string | undefined;
    }>, "many">>;
    tools_generated: z.ZodOptional<z.ZodBoolean>;
    prompts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        arguments: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        text: z.ZodString;
    }, "strict", z.ZodTypeAny, {
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
    prompts_generated: z.ZodOptional<z.ZodBoolean>;
    keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    license: z.ZodOptional<z.ZodString>;
    privacy_policies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    compatibility: z.ZodOptional<z.ZodObject<{
        claude_desktop: z.ZodOptional<z.ZodString>;
        platforms: z.ZodOptional<z.ZodArray<z.ZodEnum<["darwin", "win32", "linux"]>, "many">>;
        runtimes: z.ZodOptional<z.ZodObject<{
            python: z.ZodOptional<z.ZodString>;
            node: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            python?: string | undefined;
            node?: string | undefined;
        }, {
            python?: string | undefined;
            node?: string | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
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
    user_config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        type: z.ZodEnum<["string", "number", "boolean", "directory", "file"]>;
        title: z.ZodString;
        description: z.ZodString;
        required: z.ZodOptional<z.ZodBoolean>;
        default: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString, "many">]>>;
        multiple: z.ZodOptional<z.ZodBoolean>;
        sensitive: z.ZodOptional<z.ZodBoolean>;
        min: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
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
}, "strict", z.ZodTypeAny, {
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
