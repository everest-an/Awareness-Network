import { MANIFEST_SCHEMAS } from "./constants.js";
export function getManifestVersionFromRawData(manifestData) {
    let manifestVersion = null;
    if (typeof manifestData === "object" &&
        manifestData &&
        "manifest_version" in manifestData &&
        typeof manifestData.manifest_version === "string" &&
        Object.keys(MANIFEST_SCHEMAS).includes(manifestData.manifest_version)) {
        manifestVersion =
            manifestData.manifest_version;
    }
    else if (typeof manifestData === "object" &&
        manifestData &&
        "dxt_version" in manifestData &&
        typeof manifestData.dxt_version === "string" &&
        Object.keys(MANIFEST_SCHEMAS).includes(manifestData.dxt_version)) {
        manifestVersion = manifestData.dxt_version;
    }
    return manifestVersion;
}
