import type { z } from "zod";
import type { McpbSignatureInfoSchema } from "../shared/common.js";
/**
 * Signs a MCPB file with the given certificate and private key using PKCS#7
 *
 * @param mcpbPath Path to the MCPB file to sign
 * @param certPath Path to the certificate file (PEM format)
 * @param keyPath Path to the private key file (PEM format)
 * @param intermediates Optional array of intermediate certificate paths
 */
export declare function signMcpbFile(mcpbPath: string, certPath: string, keyPath: string, intermediates?: string[]): void;
/**
 * Verifies a signed MCPB file using OS certificate store
 *
 * @param mcpbPath Path to the signed MCPB file
 * @returns Signature information including verification status
 */
export declare function verifyMcpbFile(mcpbPath: string): Promise<z.infer<typeof McpbSignatureInfoSchema>>;
/**
 * Extracts the signature block from a signed MCPB file
 */
export declare function extractSignatureBlock(fileContent: Buffer): {
    originalContent: Buffer;
    pkcs7Signature?: Buffer;
};
/**
 * Verifies certificate chain against OS trust store
 */
export declare function verifyCertificateChain(certificate: Buffer, intermediates?: Buffer[]): Promise<boolean>;
/**
 * Removes signature from a MCPB file
 */
export declare function unsignMcpbFile(mcpbPath: string): void;
