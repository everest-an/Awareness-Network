import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_UpdateBucketMetadataInventoryTableConfigurationCommand, se_UpdateBucketMetadataInventoryTableConfigurationCommand, } from "../protocols/Aws_restXml";
export { $Command };
export class UpdateBucketMetadataInventoryTableConfigurationCommand extends $Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
    ];
})
    .s("AmazonS3", "UpdateBucketMetadataInventoryTableConfiguration", {})
    .n("S3Client", "UpdateBucketMetadataInventoryTableConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_UpdateBucketMetadataInventoryTableConfigurationCommand)
    .de(de_UpdateBucketMetadataInventoryTableConfigurationCommand)
    .build() {
}
