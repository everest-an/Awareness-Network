import { z } from "zod";
export declare const McpbUserConfigValuesSchema: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString, "many">]>>;
export declare const McpbSignatureInfoSchema: z.ZodObject<{
    status: z.ZodEnum<["signed", "unsigned", "self-signed"]>;
    publisher: z.ZodOptional<z.ZodString>;
    issuer: z.ZodOptional<z.ZodString>;
    valid_from: z.ZodOptional<z.ZodString>;
    valid_to: z.ZodOptional<z.ZodString>;
    fingerprint: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    status: "signed" | "unsigned" | "self-signed";
    publisher?: string | undefined;
    issuer?: string | undefined;
    valid_from?: string | undefined;
    valid_to?: string | undefined;
    fingerprint?: string | undefined;
}, {
    status: "signed" | "unsigned" | "self-signed";
    publisher?: string | undefined;
    issuer?: string | undefined;
    valid_from?: string | undefined;
    valid_to?: string | undefined;
    fingerprint?: string | undefined;
}>;
export type McpbSignatureInfo = z.infer<typeof McpbSignatureInfoSchema>;
export type McpbUserConfigValues = z.infer<typeof McpbUserConfigValuesSchema>;
