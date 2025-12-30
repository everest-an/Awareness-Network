import * as z from "zod";
export declare const MANIFEST_VERSION = "0.3";
export declare const McpServerConfigSchema: z.ZodObject<{
    command: z.ZodString;
    args: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    env: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
        command?: string | undefined;
        args?: string[] | undefined;
        env?: Record<string, string> | undefined;
    }, {
        command?: string | undefined;
        args?: string[] | undefined;
        env?: Record<string, string> | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
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
        }, "strip", z.ZodTypeAny, {
            command?: string | undefined;
            args?: string[] | undefined;
            env?: Record<string, string> | undefined;
        }, {
            command?: string | undefined;
            args?: string[] | undefined;
            env?: Record<string, string> | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
        python?: string | undefined;
        node?: string | undefined;
    }, {
        python?: string | undefined;
        node?: string | undefined;
    }>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    claude_desktop: z.ZodOptional<z.ZodString>;
    platforms: z.ZodOptional<z.ZodArray<z.ZodEnum<["darwin", "win32", "linux"]>, "many">>;
    runtimes: z.ZodOptional<z.ZodObject<{
        python: z.ZodOptional<z.ZodString>;
        node: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        python?: string | undefined;
        node?: string | undefined;
    }, {
        python?: string | undefined;
        node?: string | undefined;
    }>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    claude_desktop: z.ZodOptional<z.ZodString>;
    platforms: z.ZodOptional<z.ZodArray<z.ZodEnum<["darwin", "win32", "linux"]>, "many">>;
    runtimes: z.ZodOptional<z.ZodObject<{
        python: z.ZodOptional<z.ZodString>;
        node: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        python?: string | undefined;
        node?: string | undefined;
    }, {
        python?: string | undefined;
        node?: string | undefined;
    }>>;
}, z.ZodTypeAny, "passthrough">>;
export declare const McpbManifestToolSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
export declare const McpbManifestLocalizationSchema: z.ZodObject<{
    resources: z.ZodString;
    default_locale: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    resources: z.ZodString;
    default_locale: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    resources: z.ZodString;
    default_locale: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export declare const McpbManifestIconSchema: z.ZodObject<{
    src: z.ZodString;
    size: z.ZodString;
    theme: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    src: z.ZodString;
    size: z.ZodString;
    theme: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    src: z.ZodString;
    size: z.ZodString;
    theme: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export declare const McpbManifestSchema: z.ZodEffects<z.ZodObject<{
    $schema: z.ZodOptional<z.ZodString>;
    dxt_version: z.ZodOptional<z.ZodLiteral<"0.3">>;
    manifest_version: z.ZodOptional<z.ZodLiteral<"0.3">>;
    name: z.ZodString;
    display_name: z.ZodOptional<z.ZodString>;
    version: z.ZodString;
    description: z.ZodString;
    long_description: z.ZodOptional<z.ZodString>;
    author: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
    icons: z.ZodOptional<z.ZodArray<z.ZodObject<{
        src: z.ZodString;
        size: z.ZodString;
        theme: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        src: z.ZodString;
        size: z.ZodString;
        theme: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        src: z.ZodString;
        size: z.ZodString;
        theme: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    screenshots: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    localization: z.ZodOptional<z.ZodObject<{
        resources: z.ZodString;
        default_locale: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        resources: z.ZodString;
        default_locale: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        resources: z.ZodString;
        default_locale: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
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
            }, "strip", z.ZodTypeAny, {
                command?: string | undefined;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
            }, {
                command?: string | undefined;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
            }>>>;
        }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
        }, "strip", z.ZodTypeAny, {
            python?: string | undefined;
            node?: string | undefined;
        }, {
            python?: string | undefined;
            node?: string | undefined;
        }>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        claude_desktop: z.ZodOptional<z.ZodString>;
        platforms: z.ZodOptional<z.ZodArray<z.ZodEnum<["darwin", "win32", "linux"]>, "many">>;
        runtimes: z.ZodOptional<z.ZodObject<{
            python: z.ZodOptional<z.ZodString>;
            node: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            python?: string | undefined;
            node?: string | undefined;
        }, {
            python?: string | undefined;
            node?: string | undefined;
        }>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        claude_desktop: z.ZodOptional<z.ZodString>;
        platforms: z.ZodOptional<z.ZodArray<z.ZodEnum<["darwin", "win32", "linux"]>, "many">>;
        runtimes: z.ZodOptional<z.ZodObject<{
            python: z.ZodOptional<z.ZodString>;
            node: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            python?: string | undefined;
            node?: string | undefined;
        }, {
            python?: string | undefined;
            node?: string | undefined;
        }>>;
    }, z.ZodTypeAny, "passthrough">>>;
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
    }, "strip", z.ZodTypeAny, {
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
    _meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    $schema: z.ZodOptional<z.ZodString>;
    dxt_version: z.ZodOptional<z.ZodLiteral<"0.3">>;
    manifest_version: z.ZodOptional<z.ZodLiteral<"0.3">>;
    name: z.ZodString;
    display_name: z.ZodOptional<z.ZodString>;
    version: z.ZodString;
    description: z.ZodString;
    long_description: z.ZodOptional<z.ZodString>;
    author: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
    icons: z.ZodOptional<z.ZodArray<z.ZodObject<{
        src: z.ZodString;
        size: z.ZodString;
        theme: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        src: z.ZodString;
        size: z.ZodString;
        theme: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        src: z.ZodString;
        size: z.ZodString;
        theme: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    screenshots: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    localization: z.ZodOptional<z.ZodObject<{
        resources: z.ZodString;
        default_locale: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        resources: z.ZodString;
        default_locale: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        resources: z.ZodString;
        default_locale: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
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
            }, "strip", z.ZodTypeAny, {
                command?: string | undefined;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
            }, {
                command?: string | undefined;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
            }>>>;
        }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
        }, "strip", z.ZodTypeAny, {
            python?: string | undefined;
            node?: string | undefined;
        }, {
            python?: string | undefined;
            node?: string | undefined;
        }>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        claude_desktop: z.ZodOptional<z.ZodString>;
        platforms: z.ZodOptional<z.ZodArray<z.ZodEnum<["darwin", "win32", "linux"]>, "many">>;
        runtimes: z.ZodOptional<z.ZodObject<{
            python: z.ZodOptional<z.ZodString>;
            node: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            python?: string | undefined;
            node?: string | undefined;
        }, {
            python?: string | undefined;
            node?: string | undefined;
        }>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        claude_desktop: z.ZodOptional<z.ZodString>;
        platforms: z.ZodOptional<z.ZodArray<z.ZodEnum<["darwin", "win32", "linux"]>, "many">>;
        runtimes: z.ZodOptional<z.ZodObject<{
            python: z.ZodOptional<z.ZodString>;
            node: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            python?: string | undefined;
            node?: string | undefined;
        }, {
            python?: string | undefined;
            node?: string | undefined;
        }>>;
    }, z.ZodTypeAny, "passthrough">>>;
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
    }, "strip", z.ZodTypeAny, {
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
    _meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    $schema: z.ZodOptional<z.ZodString>;
    dxt_version: z.ZodOptional<z.ZodLiteral<"0.3">>;
    manifest_version: z.ZodOptional<z.ZodLiteral<"0.3">>;
    name: z.ZodString;
    display_name: z.ZodOptional<z.ZodString>;
    version: z.ZodString;
    description: z.ZodString;
    long_description: z.ZodOptional<z.ZodString>;
    author: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
    icons: z.ZodOptional<z.ZodArray<z.ZodObject<{
        src: z.ZodString;
        size: z.ZodString;
        theme: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        src: z.ZodString;
        size: z.ZodString;
        theme: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        src: z.ZodString;
        size: z.ZodString;
        theme: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    screenshots: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    localization: z.ZodOptional<z.ZodObject<{
        resources: z.ZodString;
        default_locale: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        resources: z.ZodString;
        default_locale: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        resources: z.ZodString;
        default_locale: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
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
            }, "strip", z.ZodTypeAny, {
                command?: string | undefined;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
            }, {
                command?: string | undefined;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
            }>>>;
        }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
        }, "strip", z.ZodTypeAny, {
            python?: string | undefined;
            node?: string | undefined;
        }, {
            python?: string | undefined;
            node?: string | undefined;
        }>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        claude_desktop: z.ZodOptional<z.ZodString>;
        platforms: z.ZodOptional<z.ZodArray<z.ZodEnum<["darwin", "win32", "linux"]>, "many">>;
        runtimes: z.ZodOptional<z.ZodObject<{
            python: z.ZodOptional<z.ZodString>;
            node: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            python?: string | undefined;
            node?: string | undefined;
        }, {
            python?: string | undefined;
            node?: string | undefined;
        }>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        claude_desktop: z.ZodOptional<z.ZodString>;
        platforms: z.ZodOptional<z.ZodArray<z.ZodEnum<["darwin", "win32", "linux"]>, "many">>;
        runtimes: z.ZodOptional<z.ZodObject<{
            python: z.ZodOptional<z.ZodString>;
            node: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            python?: string | undefined;
            node?: string | undefined;
        }, {
            python?: string | undefined;
            node?: string | undefined;
        }>>;
    }, z.ZodTypeAny, "passthrough">>>;
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
    }, "strip", z.ZodTypeAny, {
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
    _meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>>>;
}, z.ZodTypeAny, "passthrough">>, z.objectOutputType<{
    $schema: z.ZodOptional<z.ZodString>;
    dxt_version: z.ZodOptional<z.ZodLiteral<"0.3">>;
    manifest_version: z.ZodOptional<z.ZodLiteral<"0.3">>;
    name: z.ZodString;
    display_name: z.ZodOptional<z.ZodString>;
    version: z.ZodString;
    description: z.ZodString;
    long_description: z.ZodOptional<z.ZodString>;
    author: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
    icons: z.ZodOptional<z.ZodArray<z.ZodObject<{
        src: z.ZodString;
        size: z.ZodString;
        theme: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        src: z.ZodString;
        size: z.ZodString;
        theme: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        src: z.ZodString;
        size: z.ZodString;
        theme: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    screenshots: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    localization: z.ZodOptional<z.ZodObject<{
        resources: z.ZodString;
        default_locale: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        resources: z.ZodString;
        default_locale: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        resources: z.ZodString;
        default_locale: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
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
            }, "strip", z.ZodTypeAny, {
                command?: string | undefined;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
            }, {
                command?: string | undefined;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
            }>>>;
        }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
        }, "strip", z.ZodTypeAny, {
            python?: string | undefined;
            node?: string | undefined;
        }, {
            python?: string | undefined;
            node?: string | undefined;
        }>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        claude_desktop: z.ZodOptional<z.ZodString>;
        platforms: z.ZodOptional<z.ZodArray<z.ZodEnum<["darwin", "win32", "linux"]>, "many">>;
        runtimes: z.ZodOptional<z.ZodObject<{
            python: z.ZodOptional<z.ZodString>;
            node: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            python?: string | undefined;
            node?: string | undefined;
        }, {
            python?: string | undefined;
            node?: string | undefined;
        }>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        claude_desktop: z.ZodOptional<z.ZodString>;
        platforms: z.ZodOptional<z.ZodArray<z.ZodEnum<["darwin", "win32", "linux"]>, "many">>;
        runtimes: z.ZodOptional<z.ZodObject<{
            python: z.ZodOptional<z.ZodString>;
            node: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            python?: string | undefined;
            node?: string | undefined;
        }, {
            python?: string | undefined;
            node?: string | undefined;
        }>>;
    }, z.ZodTypeAny, "passthrough">>>;
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
    }, "strip", z.ZodTypeAny, {
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
    _meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    $schema: z.ZodOptional<z.ZodString>;
    dxt_version: z.ZodOptional<z.ZodLiteral<"0.3">>;
    manifest_version: z.ZodOptional<z.ZodLiteral<"0.3">>;
    name: z.ZodString;
    display_name: z.ZodOptional<z.ZodString>;
    version: z.ZodString;
    description: z.ZodString;
    long_description: z.ZodOptional<z.ZodString>;
    author: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
    icons: z.ZodOptional<z.ZodArray<z.ZodObject<{
        src: z.ZodString;
        size: z.ZodString;
        theme: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        src: z.ZodString;
        size: z.ZodString;
        theme: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        src: z.ZodString;
        size: z.ZodString;
        theme: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    screenshots: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    localization: z.ZodOptional<z.ZodObject<{
        resources: z.ZodString;
        default_locale: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        resources: z.ZodString;
        default_locale: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        resources: z.ZodString;
        default_locale: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
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
            }, "strip", z.ZodTypeAny, {
                command?: string | undefined;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
            }, {
                command?: string | undefined;
                args?: string[] | undefined;
                env?: Record<string, string> | undefined;
            }>>>;
        }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
        }, "strip", z.ZodTypeAny, {
            python?: string | undefined;
            node?: string | undefined;
        }, {
            python?: string | undefined;
            node?: string | undefined;
        }>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        claude_desktop: z.ZodOptional<z.ZodString>;
        platforms: z.ZodOptional<z.ZodArray<z.ZodEnum<["darwin", "win32", "linux"]>, "many">>;
        runtimes: z.ZodOptional<z.ZodObject<{
            python: z.ZodOptional<z.ZodString>;
            node: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            python?: string | undefined;
            node?: string | undefined;
        }, {
            python?: string | undefined;
            node?: string | undefined;
        }>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        claude_desktop: z.ZodOptional<z.ZodString>;
        platforms: z.ZodOptional<z.ZodArray<z.ZodEnum<["darwin", "win32", "linux"]>, "many">>;
        runtimes: z.ZodOptional<z.ZodObject<{
            python: z.ZodOptional<z.ZodString>;
            node: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            python?: string | undefined;
            node?: string | undefined;
        }, {
            python?: string | undefined;
            node?: string | undefined;
        }>>;
    }, z.ZodTypeAny, "passthrough">>>;
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
    }, "strip", z.ZodTypeAny, {
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
    _meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>>>;
}, z.ZodTypeAny, "passthrough">>;
