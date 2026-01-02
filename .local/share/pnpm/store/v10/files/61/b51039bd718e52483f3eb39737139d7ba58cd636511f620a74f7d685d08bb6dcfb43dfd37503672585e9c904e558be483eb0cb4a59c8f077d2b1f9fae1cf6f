'use strict';

var middlewareExpectContinue = require('@aws-sdk/middleware-expect-continue');
var middlewareFlexibleChecksums = require('@aws-sdk/middleware-flexible-checksums');
var middlewareHostHeader = require('@aws-sdk/middleware-host-header');
var middlewareLogger = require('@aws-sdk/middleware-logger');
var middlewareRecursionDetection = require('@aws-sdk/middleware-recursion-detection');
var middlewareSdkS3 = require('@aws-sdk/middleware-sdk-s3');
var middlewareUserAgent = require('@aws-sdk/middleware-user-agent');
var configResolver = require('@smithy/config-resolver');
var core = require('@smithy/core');
var eventstreamSerdeConfigResolver = require('@smithy/eventstream-serde-config-resolver');
var middlewareContentLength = require('@smithy/middleware-content-length');
var middlewareEndpoint = require('@smithy/middleware-endpoint');
var middlewareRetry = require('@smithy/middleware-retry');
var smithyClient = require('@smithy/smithy-client');
var httpAuthSchemeProvider = require('./auth/httpAuthSchemeProvider');
var middlewareSerde = require('@smithy/middleware-serde');
var core$1 = require('@aws-sdk/core');
var xmlBuilder = require('@aws-sdk/xml-builder');
var protocolHttp = require('@smithy/protocol-http');
var uuid = require('@smithy/uuid');
var runtimeConfig = require('./runtimeConfig');
var regionConfigResolver = require('@aws-sdk/region-config-resolver');
var middlewareSsec = require('@aws-sdk/middleware-ssec');
var middlewareLocationConstraint = require('@aws-sdk/middleware-location-constraint');
var utilWaiter = require('@smithy/util-waiter');

const resolveClientEndpointParameters = (options) => {
    return Object.assign(options, {
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        forcePathStyle: options.forcePathStyle ?? false,
        useAccelerateEndpoint: options.useAccelerateEndpoint ?? false,
        useGlobalEndpoint: options.useGlobalEndpoint ?? false,
        disableMultiregionAccessPoints: options.disableMultiregionAccessPoints ?? false,
        defaultSigningName: "s3",
    });
};
const commonParams = {
    ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
    UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
    DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
    Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
    DisableS3ExpressSessionAuth: { type: "clientContextParams", name: "disableS3ExpressSessionAuth" },
    UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
};

class S3ServiceException extends smithyClient.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, S3ServiceException.prototype);
    }
}

const RequestCharged = {
    requester: "requester",
};
const RequestPayer = {
    requester: "requester",
};
class NoSuchUpload extends S3ServiceException {
    name = "NoSuchUpload";
    $fault = "client";
    constructor(opts) {
        super({
            name: "NoSuchUpload",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, NoSuchUpload.prototype);
    }
}
const BucketAccelerateStatus = {
    Enabled: "Enabled",
    Suspended: "Suspended",
};
const Type = {
    AmazonCustomerByEmail: "AmazonCustomerByEmail",
    CanonicalUser: "CanonicalUser",
    Group: "Group",
};
const Permission = {
    FULL_CONTROL: "FULL_CONTROL",
    READ: "READ",
    READ_ACP: "READ_ACP",
    WRITE: "WRITE",
    WRITE_ACP: "WRITE_ACP",
};
const OwnerOverride = {
    Destination: "Destination",
};
const ChecksumType = {
    COMPOSITE: "COMPOSITE",
    FULL_OBJECT: "FULL_OBJECT",
};
const ServerSideEncryption = {
    AES256: "AES256",
    aws_fsx: "aws:fsx",
    aws_kms: "aws:kms",
    aws_kms_dsse: "aws:kms:dsse",
};
const ObjectCannedACL = {
    authenticated_read: "authenticated-read",
    aws_exec_read: "aws-exec-read",
    bucket_owner_full_control: "bucket-owner-full-control",
    bucket_owner_read: "bucket-owner-read",
    private: "private",
    public_read: "public-read",
    public_read_write: "public-read-write",
};
const ChecksumAlgorithm = {
    CRC32: "CRC32",
    CRC32C: "CRC32C",
    CRC64NVME: "CRC64NVME",
    SHA1: "SHA1",
    SHA256: "SHA256",
};
const MetadataDirective = {
    COPY: "COPY",
    REPLACE: "REPLACE",
};
const ObjectLockLegalHoldStatus = {
    OFF: "OFF",
    ON: "ON",
};
const ObjectLockMode = {
    COMPLIANCE: "COMPLIANCE",
    GOVERNANCE: "GOVERNANCE",
};
const StorageClass = {
    DEEP_ARCHIVE: "DEEP_ARCHIVE",
    EXPRESS_ONEZONE: "EXPRESS_ONEZONE",
    FSX_OPENZFS: "FSX_OPENZFS",
    GLACIER: "GLACIER",
    GLACIER_IR: "GLACIER_IR",
    INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
    ONEZONE_IA: "ONEZONE_IA",
    OUTPOSTS: "OUTPOSTS",
    REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY",
    SNOW: "SNOW",
    STANDARD: "STANDARD",
    STANDARD_IA: "STANDARD_IA",
};
const TaggingDirective = {
    COPY: "COPY",
    REPLACE: "REPLACE",
};
class ObjectNotInActiveTierError extends S3ServiceException {
    name = "ObjectNotInActiveTierError";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ObjectNotInActiveTierError",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ObjectNotInActiveTierError.prototype);
    }
}
class BucketAlreadyExists extends S3ServiceException {
    name = "BucketAlreadyExists";
    $fault = "client";
    constructor(opts) {
        super({
            name: "BucketAlreadyExists",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, BucketAlreadyExists.prototype);
    }
}
class BucketAlreadyOwnedByYou extends S3ServiceException {
    name = "BucketAlreadyOwnedByYou";
    $fault = "client";
    constructor(opts) {
        super({
            name: "BucketAlreadyOwnedByYou",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, BucketAlreadyOwnedByYou.prototype);
    }
}
const BucketCannedACL = {
    authenticated_read: "authenticated-read",
    private: "private",
    public_read: "public-read",
    public_read_write: "public-read-write",
};
const DataRedundancy = {
    SingleAvailabilityZone: "SingleAvailabilityZone",
    SingleLocalZone: "SingleLocalZone",
};
const BucketType = {
    Directory: "Directory",
};
const LocationType = {
    AvailabilityZone: "AvailabilityZone",
    LocalZone: "LocalZone",
};
const BucketLocationConstraint = {
    EU: "EU",
    af_south_1: "af-south-1",
    ap_east_1: "ap-east-1",
    ap_northeast_1: "ap-northeast-1",
    ap_northeast_2: "ap-northeast-2",
    ap_northeast_3: "ap-northeast-3",
    ap_south_1: "ap-south-1",
    ap_south_2: "ap-south-2",
    ap_southeast_1: "ap-southeast-1",
    ap_southeast_2: "ap-southeast-2",
    ap_southeast_3: "ap-southeast-3",
    ap_southeast_4: "ap-southeast-4",
    ap_southeast_5: "ap-southeast-5",
    ca_central_1: "ca-central-1",
    cn_north_1: "cn-north-1",
    cn_northwest_1: "cn-northwest-1",
    eu_central_1: "eu-central-1",
    eu_central_2: "eu-central-2",
    eu_north_1: "eu-north-1",
    eu_south_1: "eu-south-1",
    eu_south_2: "eu-south-2",
    eu_west_1: "eu-west-1",
    eu_west_2: "eu-west-2",
    eu_west_3: "eu-west-3",
    il_central_1: "il-central-1",
    me_central_1: "me-central-1",
    me_south_1: "me-south-1",
    sa_east_1: "sa-east-1",
    us_east_2: "us-east-2",
    us_gov_east_1: "us-gov-east-1",
    us_gov_west_1: "us-gov-west-1",
    us_west_1: "us-west-1",
    us_west_2: "us-west-2",
};
const ObjectOwnership = {
    BucketOwnerEnforced: "BucketOwnerEnforced",
    BucketOwnerPreferred: "BucketOwnerPreferred",
    ObjectWriter: "ObjectWriter",
};
const InventoryConfigurationState = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
const TableSseAlgorithm = {
    AES256: "AES256",
    aws_kms: "aws:kms",
};
const ExpirationState = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
const SessionMode = {
    ReadOnly: "ReadOnly",
    ReadWrite: "ReadWrite",
};
class NoSuchBucket extends S3ServiceException {
    name = "NoSuchBucket";
    $fault = "client";
    constructor(opts) {
        super({
            name: "NoSuchBucket",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, NoSuchBucket.prototype);
    }
}
exports.AnalyticsFilter = void 0;
(function (AnalyticsFilter) {
    AnalyticsFilter.visit = (value, visitor) => {
        if (value.Prefix !== undefined)
            return visitor.Prefix(value.Prefix);
        if (value.Tag !== undefined)
            return visitor.Tag(value.Tag);
        if (value.And !== undefined)
            return visitor.And(value.And);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(exports.AnalyticsFilter || (exports.AnalyticsFilter = {}));
const AnalyticsS3ExportFileFormat = {
    CSV: "CSV",
};
const StorageClassAnalysisSchemaVersion = {
    V_1: "V_1",
};
const IntelligentTieringStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
};
const IntelligentTieringAccessTier = {
    ARCHIVE_ACCESS: "ARCHIVE_ACCESS",
    DEEP_ARCHIVE_ACCESS: "DEEP_ARCHIVE_ACCESS",
};
const InventoryFormat = {
    CSV: "CSV",
    ORC: "ORC",
    Parquet: "Parquet",
};
const InventoryIncludedObjectVersions = {
    All: "All",
    Current: "Current",
};
const InventoryOptionalField = {
    BucketKeyStatus: "BucketKeyStatus",
    ChecksumAlgorithm: "ChecksumAlgorithm",
    ETag: "ETag",
    EncryptionStatus: "EncryptionStatus",
    IntelligentTieringAccessTier: "IntelligentTieringAccessTier",
    IsMultipartUploaded: "IsMultipartUploaded",
    LastModifiedDate: "LastModifiedDate",
    ObjectAccessControlList: "ObjectAccessControlList",
    ObjectLockLegalHoldStatus: "ObjectLockLegalHoldStatus",
    ObjectLockMode: "ObjectLockMode",
    ObjectLockRetainUntilDate: "ObjectLockRetainUntilDate",
    ObjectOwner: "ObjectOwner",
    ReplicationStatus: "ReplicationStatus",
    Size: "Size",
    StorageClass: "StorageClass",
};
const InventoryFrequency = {
    Daily: "Daily",
    Weekly: "Weekly",
};
const TransitionStorageClass = {
    DEEP_ARCHIVE: "DEEP_ARCHIVE",
    GLACIER: "GLACIER",
    GLACIER_IR: "GLACIER_IR",
    INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
    ONEZONE_IA: "ONEZONE_IA",
    STANDARD_IA: "STANDARD_IA",
};
const ExpirationStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
};
const TransitionDefaultMinimumObjectSize = {
    all_storage_classes_128K: "all_storage_classes_128K",
    varies_by_storage_class: "varies_by_storage_class",
};
const BucketLogsPermission = {
    FULL_CONTROL: "FULL_CONTROL",
    READ: "READ",
    WRITE: "WRITE",
};
const PartitionDateSource = {
    DeliveryTime: "DeliveryTime",
    EventTime: "EventTime",
};
const S3TablesBucketType = {
    aws: "aws",
    customer: "customer",
};
exports.MetricsFilter = void 0;
(function (MetricsFilter) {
    MetricsFilter.visit = (value, visitor) => {
        if (value.Prefix !== undefined)
            return visitor.Prefix(value.Prefix);
        if (value.Tag !== undefined)
            return visitor.Tag(value.Tag);
        if (value.AccessPointArn !== undefined)
            return visitor.AccessPointArn(value.AccessPointArn);
        if (value.And !== undefined)
            return visitor.And(value.And);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(exports.MetricsFilter || (exports.MetricsFilter = {}));
const Event = {
    s3_IntelligentTiering: "s3:IntelligentTiering",
    s3_LifecycleExpiration_: "s3:LifecycleExpiration:*",
    s3_LifecycleExpiration_Delete: "s3:LifecycleExpiration:Delete",
    s3_LifecycleExpiration_DeleteMarkerCreated: "s3:LifecycleExpiration:DeleteMarkerCreated",
    s3_LifecycleTransition: "s3:LifecycleTransition",
    s3_ObjectAcl_Put: "s3:ObjectAcl:Put",
    s3_ObjectCreated_: "s3:ObjectCreated:*",
    s3_ObjectCreated_CompleteMultipartUpload: "s3:ObjectCreated:CompleteMultipartUpload",
    s3_ObjectCreated_Copy: "s3:ObjectCreated:Copy",
    s3_ObjectCreated_Post: "s3:ObjectCreated:Post",
    s3_ObjectCreated_Put: "s3:ObjectCreated:Put",
    s3_ObjectRemoved_: "s3:ObjectRemoved:*",
    s3_ObjectRemoved_Delete: "s3:ObjectRemoved:Delete",
    s3_ObjectRemoved_DeleteMarkerCreated: "s3:ObjectRemoved:DeleteMarkerCreated",
    s3_ObjectRestore_: "s3:ObjectRestore:*",
    s3_ObjectRestore_Completed: "s3:ObjectRestore:Completed",
    s3_ObjectRestore_Delete: "s3:ObjectRestore:Delete",
    s3_ObjectRestore_Post: "s3:ObjectRestore:Post",
    s3_ObjectTagging_: "s3:ObjectTagging:*",
    s3_ObjectTagging_Delete: "s3:ObjectTagging:Delete",
    s3_ObjectTagging_Put: "s3:ObjectTagging:Put",
    s3_ReducedRedundancyLostObject: "s3:ReducedRedundancyLostObject",
    s3_Replication_: "s3:Replication:*",
    s3_Replication_OperationFailedReplication: "s3:Replication:OperationFailedReplication",
    s3_Replication_OperationMissedThreshold: "s3:Replication:OperationMissedThreshold",
    s3_Replication_OperationNotTracked: "s3:Replication:OperationNotTracked",
    s3_Replication_OperationReplicatedAfterThreshold: "s3:Replication:OperationReplicatedAfterThreshold",
};
const FilterRuleName = {
    prefix: "prefix",
    suffix: "suffix",
};
const DeleteMarkerReplicationStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
};
const MetricsStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
};
const ReplicationTimeStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
};
const ExistingObjectReplicationStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
};
const ReplicaModificationsStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
};
const SseKmsEncryptedObjectsStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
};
const ReplicationRuleStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
};
const Payer = {
    BucketOwner: "BucketOwner",
    Requester: "Requester",
};
const MFADeleteStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
};
const BucketVersioningStatus = {
    Enabled: "Enabled",
    Suspended: "Suspended",
};
const Protocol = {
    http: "http",
    https: "https",
};
const ReplicationStatus = {
    COMPLETE: "COMPLETE",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    PENDING: "PENDING",
    REPLICA: "REPLICA",
};
const ChecksumMode = {
    ENABLED: "ENABLED",
};
class InvalidObjectState extends S3ServiceException {
    name = "InvalidObjectState";
    $fault = "client";
    StorageClass;
    AccessTier;
    constructor(opts) {
        super({
            name: "InvalidObjectState",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidObjectState.prototype);
        this.StorageClass = opts.StorageClass;
        this.AccessTier = opts.AccessTier;
    }
}
class NoSuchKey extends S3ServiceException {
    name = "NoSuchKey";
    $fault = "client";
    constructor(opts) {
        super({
            name: "NoSuchKey",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, NoSuchKey.prototype);
    }
}
const ObjectAttributes = {
    CHECKSUM: "Checksum",
    ETAG: "ETag",
    OBJECT_PARTS: "ObjectParts",
    OBJECT_SIZE: "ObjectSize",
    STORAGE_CLASS: "StorageClass",
};
const ObjectLockEnabled = {
    Enabled: "Enabled",
};
const ObjectLockRetentionMode = {
    COMPLIANCE: "COMPLIANCE",
    GOVERNANCE: "GOVERNANCE",
};
class NotFound extends S3ServiceException {
    name = "NotFound";
    $fault = "client";
    constructor(opts) {
        super({
            name: "NotFound",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, NotFound.prototype);
    }
}
const ArchiveStatus = {
    ARCHIVE_ACCESS: "ARCHIVE_ACCESS",
    DEEP_ARCHIVE_ACCESS: "DEEP_ARCHIVE_ACCESS",
};
const EncodingType = {
    url: "url",
};
const CompleteMultipartUploadOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithyClient.SENSITIVE_STRING }),
});
const CompleteMultipartUploadRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithyClient.SENSITIVE_STRING }),
});
const CopyObjectOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithyClient.SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithyClient.SENSITIVE_STRING }),
});
const CopyObjectRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithyClient.SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithyClient.SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithyClient.SENSITIVE_STRING }),
    ...(obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: smithyClient.SENSITIVE_STRING }),
});
const CreateMultipartUploadOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithyClient.SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithyClient.SENSITIVE_STRING }),
});
const CreateMultipartUploadRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithyClient.SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithyClient.SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithyClient.SENSITIVE_STRING }),
});
const SessionCredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SecretAccessKey && { SecretAccessKey: smithyClient.SENSITIVE_STRING }),
    ...(obj.SessionToken && { SessionToken: smithyClient.SENSITIVE_STRING }),
});
const CreateSessionOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithyClient.SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithyClient.SENSITIVE_STRING }),
    ...(obj.Credentials && { Credentials: SessionCredentialsFilterSensitiveLog(obj.Credentials) }),
});
const CreateSessionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithyClient.SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithyClient.SENSITIVE_STRING }),
});
const ServerSideEncryptionByDefaultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.KMSMasterKeyID && { KMSMasterKeyID: smithyClient.SENSITIVE_STRING }),
});
const ServerSideEncryptionRuleFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ApplyServerSideEncryptionByDefault && {
        ApplyServerSideEncryptionByDefault: ServerSideEncryptionByDefaultFilterSensitiveLog(obj.ApplyServerSideEncryptionByDefault),
    }),
});
const ServerSideEncryptionConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => ServerSideEncryptionRuleFilterSensitiveLog(item)) }),
});
const GetBucketEncryptionOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ServerSideEncryptionConfiguration && {
        ServerSideEncryptionConfiguration: ServerSideEncryptionConfigurationFilterSensitiveLog(obj.ServerSideEncryptionConfiguration),
    }),
});
const SSEKMSFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.KeyId && { KeyId: smithyClient.SENSITIVE_STRING }),
});
const InventoryEncryptionFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMS && { SSEKMS: SSEKMSFilterSensitiveLog(obj.SSEKMS) }),
});
const InventoryS3BucketDestinationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Encryption && { Encryption: InventoryEncryptionFilterSensitiveLog(obj.Encryption) }),
});
const InventoryDestinationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.S3BucketDestination && {
        S3BucketDestination: InventoryS3BucketDestinationFilterSensitiveLog(obj.S3BucketDestination),
    }),
});
const InventoryConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Destination && { Destination: InventoryDestinationFilterSensitiveLog(obj.Destination) }),
});
const GetBucketInventoryConfigurationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.InventoryConfiguration && {
        InventoryConfiguration: InventoryConfigurationFilterSensitiveLog(obj.InventoryConfiguration),
    }),
});
const GetObjectOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithyClient.SENSITIVE_STRING }),
});
const GetObjectRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithyClient.SENSITIVE_STRING }),
});
const GetObjectAttributesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithyClient.SENSITIVE_STRING }),
});
const GetObjectTorrentOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
const HeadObjectOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithyClient.SENSITIVE_STRING }),
});
const HeadObjectRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithyClient.SENSITIVE_STRING }),
});
const ListBucketInventoryConfigurationsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.InventoryConfigurationList && {
        InventoryConfigurationList: obj.InventoryConfigurationList.map((item) => InventoryConfigurationFilterSensitiveLog(item)),
    }),
});

const ObjectStorageClass = {
    DEEP_ARCHIVE: "DEEP_ARCHIVE",
    EXPRESS_ONEZONE: "EXPRESS_ONEZONE",
    FSX_OPENZFS: "FSX_OPENZFS",
    GLACIER: "GLACIER",
    GLACIER_IR: "GLACIER_IR",
    INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
    ONEZONE_IA: "ONEZONE_IA",
    OUTPOSTS: "OUTPOSTS",
    REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY",
    SNOW: "SNOW",
    STANDARD: "STANDARD",
    STANDARD_IA: "STANDARD_IA",
};
const OptionalObjectAttributes = {
    RESTORE_STATUS: "RestoreStatus",
};
const ObjectVersionStorageClass = {
    STANDARD: "STANDARD",
};
const MFADelete = {
    Disabled: "Disabled",
    Enabled: "Enabled",
};
class EncryptionTypeMismatch extends S3ServiceException {
    name = "EncryptionTypeMismatch";
    $fault = "client";
    constructor(opts) {
        super({
            name: "EncryptionTypeMismatch",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, EncryptionTypeMismatch.prototype);
    }
}
class InvalidRequest extends S3ServiceException {
    name = "InvalidRequest";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidRequest",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidRequest.prototype);
    }
}
class InvalidWriteOffset extends S3ServiceException {
    name = "InvalidWriteOffset";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidWriteOffset",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidWriteOffset.prototype);
    }
}
class TooManyParts extends S3ServiceException {
    name = "TooManyParts";
    $fault = "client";
    constructor(opts) {
        super({
            name: "TooManyParts",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TooManyParts.prototype);
    }
}
class IdempotencyParameterMismatch extends S3ServiceException {
    name = "IdempotencyParameterMismatch";
    $fault = "client";
    constructor(opts) {
        super({
            name: "IdempotencyParameterMismatch",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, IdempotencyParameterMismatch.prototype);
    }
}
class ObjectAlreadyInActiveTierError extends S3ServiceException {
    name = "ObjectAlreadyInActiveTierError";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ObjectAlreadyInActiveTierError",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ObjectAlreadyInActiveTierError.prototype);
    }
}
const Tier = {
    Bulk: "Bulk",
    Expedited: "Expedited",
    Standard: "Standard",
};
const ExpressionType = {
    SQL: "SQL",
};
const CompressionType = {
    BZIP2: "BZIP2",
    GZIP: "GZIP",
    NONE: "NONE",
};
const FileHeaderInfo = {
    IGNORE: "IGNORE",
    NONE: "NONE",
    USE: "USE",
};
const JSONType = {
    DOCUMENT: "DOCUMENT",
    LINES: "LINES",
};
const QuoteFields = {
    ALWAYS: "ALWAYS",
    ASNEEDED: "ASNEEDED",
};
const RestoreRequestType = {
    SELECT: "SELECT",
};
exports.SelectObjectContentEventStream = void 0;
(function (SelectObjectContentEventStream) {
    SelectObjectContentEventStream.visit = (value, visitor) => {
        if (value.Records !== undefined)
            return visitor.Records(value.Records);
        if (value.Stats !== undefined)
            return visitor.Stats(value.Stats);
        if (value.Progress !== undefined)
            return visitor.Progress(value.Progress);
        if (value.Cont !== undefined)
            return visitor.Cont(value.Cont);
        if (value.End !== undefined)
            return visitor.End(value.End);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(exports.SelectObjectContentEventStream || (exports.SelectObjectContentEventStream = {}));
const ListPartsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithyClient.SENSITIVE_STRING }),
});
const PutBucketEncryptionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ServerSideEncryptionConfiguration && {
        ServerSideEncryptionConfiguration: ServerSideEncryptionConfigurationFilterSensitiveLog(obj.ServerSideEncryptionConfiguration),
    }),
});
const PutBucketInventoryConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.InventoryConfiguration && {
        InventoryConfiguration: InventoryConfigurationFilterSensitiveLog(obj.InventoryConfiguration),
    }),
});
const PutObjectOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithyClient.SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithyClient.SENSITIVE_STRING }),
});
const PutObjectRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithyClient.SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithyClient.SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithyClient.SENSITIVE_STRING }),
});
const EncryptionFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.KMSKeyId && { KMSKeyId: smithyClient.SENSITIVE_STRING }),
});
const S3LocationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Encryption && { Encryption: EncryptionFilterSensitiveLog(obj.Encryption) }),
});
const OutputLocationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.S3 && { S3: S3LocationFilterSensitiveLog(obj.S3) }),
});
const RestoreRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.OutputLocation && { OutputLocation: OutputLocationFilterSensitiveLog(obj.OutputLocation) }),
});
const RestoreObjectRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RestoreRequest && { RestoreRequest: RestoreRequestFilterSensitiveLog(obj.RestoreRequest) }),
});
const SelectObjectContentEventStreamFilterSensitiveLog = (obj) => {
    if (obj.Records !== undefined)
        return { Records: obj.Records };
    if (obj.Stats !== undefined)
        return { Stats: obj.Stats };
    if (obj.Progress !== undefined)
        return { Progress: obj.Progress };
    if (obj.Cont !== undefined)
        return { Cont: obj.Cont };
    if (obj.End !== undefined)
        return { End: obj.End };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
const SelectObjectContentOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Payload && { Payload: "STREAMING_CONTENT" }),
});
const SelectObjectContentRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithyClient.SENSITIVE_STRING }),
});
const UploadPartOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithyClient.SENSITIVE_STRING }),
});
const UploadPartRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithyClient.SENSITIVE_STRING }),
});
const UploadPartCopyOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithyClient.SENSITIVE_STRING }),
});
const UploadPartCopyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithyClient.SENSITIVE_STRING }),
    ...(obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: smithyClient.SENSITIVE_STRING }),
});
const WriteGetObjectResponseRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithyClient.SENSITIVE_STRING }),
});

const se_AbortMultipartUploadCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xarp]: input[_RP],
        [_xaebo]: input[_EBO],
        [_xaimit]: [() => smithyClient.isSerializableHeaderValue(input[_IMIT]), () => smithyClient.dateToUtcString(input[_IMIT]).toString()],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_xi]: [, "AbortMultipartUpload"],
        [_uI]: [, smithyClient.expectNonNull(input[_UI], `UploadId`)],
    });
    let body;
    b.m("DELETE").h(headers).q(query).b(body);
    return b.build();
};
const se_CompleteMultipartUploadCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_xacc]: input[_CCRC],
        [_xacc_]: input[_CCRCC],
        [_xacc__]: input[_CCRCNVME],
        [_xacs]: input[_CSHA],
        [_xacs_]: input[_CSHAh],
        [_xact]: input[_CT],
        [_xamos]: [() => smithyClient.isSerializableHeaderValue(input[_MOS]), () => input[_MOS].toString()],
        [_xarp]: input[_RP],
        [_xaebo]: input[_EBO],
        [_im]: input[_IM],
        [_inm]: input[_INM],
        [_xasseca]: input[_SSECA],
        [_xasseck]: input[_SSECK],
        [_xasseckm]: input[_SSECKMD],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_uI]: [, smithyClient.expectNonNull(input[_UI], `UploadId`)],
    });
    let body;
    let contents;
    if (input.MultipartUpload !== undefined) {
        contents = se_CompletedMultipartUpload(input.MultipartUpload);
        contents = contents.n("CompleteMultipartUpload");
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("POST").h(headers).q(query).b(body);
    return b.build();
};
const se_CopyObjectCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        ...(input.Metadata !== undefined &&
            Object.keys(input.Metadata).reduce((acc, suffix) => {
                acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata[suffix];
                return acc;
            }, {})),
        [_xaa]: input[_ACL],
        [_cc]: input[_CC],
        [_xaca]: input[_CA],
        [_cd]: input[_CD],
        [_ce]: input[_CE],
        [_cl]: input[_CL],
        [_ct]: input[_CTo],
        [_xacs__]: input[_CS],
        [_xacsim]: input[_CSIM],
        [_xacsims]: [() => smithyClient.isSerializableHeaderValue(input[_CSIMS]), () => smithyClient.dateToUtcString(input[_CSIMS]).toString()],
        [_xacsinm]: input[_CSINM],
        [_xacsius]: [() => smithyClient.isSerializableHeaderValue(input[_CSIUS]), () => smithyClient.dateToUtcString(input[_CSIUS]).toString()],
        [_e]: [() => smithyClient.isSerializableHeaderValue(input[_E]), () => smithyClient.dateToUtcString(input[_E]).toString()],
        [_xagfc]: input[_GFC],
        [_xagr]: input[_GR],
        [_xagra]: input[_GRACP],
        [_xagwa]: input[_GWACP],
        [_xamd]: input[_MD],
        [_xatd]: input[_TD],
        [_xasse]: input[_SSE],
        [_xasc]: input[_SC],
        [_xawrl]: input[_WRL],
        [_xasseca]: input[_SSECA],
        [_xasseck]: input[_SSECK],
        [_xasseckm]: input[_SSECKMD],
        [_xasseakki]: input[_SSEKMSKI],
        [_xassec]: input[_SSEKMSEC],
        [_xassebke]: [() => smithyClient.isSerializableHeaderValue(input[_BKE]), () => input[_BKE].toString()],
        [_xacssseca]: input[_CSSSECA],
        [_xacssseck]: input[_CSSSECK],
        [_xacssseckm]: input[_CSSSECKMD],
        [_xarp]: input[_RP],
        [_xat]: input[_T],
        [_xaolm]: input[_OLM],
        [_xaolrud]: [() => smithyClient.isSerializableHeaderValue(input[_OLRUD]), () => smithyClient.serializeDateTime(input[_OLRUD]).toString()],
        [_xaollh]: input[_OLLHS],
        [_xaebo]: input[_EBO],
        [_xasebo]: input[_ESBO],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_xi]: [, "CopyObject"],
    });
    let body;
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_CreateBucketCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_xaa]: input[_ACL],
        [_xagfc]: input[_GFC],
        [_xagr]: input[_GR],
        [_xagra]: input[_GRACP],
        [_xagw]: input[_GW],
        [_xagwa]: input[_GWACP],
        [_xabole]: [() => smithyClient.isSerializableHeaderValue(input[_OLEFB]), () => input[_OLEFB].toString()],
        [_xaoo]: input[_OO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    let body;
    let contents;
    if (input.CreateBucketConfiguration !== undefined) {
        contents = se_CreateBucketConfiguration(input.CreateBucketConfiguration);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).b(body);
    return b.build();
};
const se_CreateBucketMetadataConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_mC]: [, ""],
    });
    let body;
    let contents;
    if (input.MetadataConfiguration !== undefined) {
        contents = se_MetadataConfiguration(input.MetadataConfiguration);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("POST").h(headers).q(query).b(body);
    return b.build();
};
const se_CreateBucketMetadataTableConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_mT]: [, ""],
    });
    let body;
    let contents;
    if (input.MetadataTableConfiguration !== undefined) {
        contents = se_MetadataTableConfiguration(input.MetadataTableConfiguration);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("POST").h(headers).q(query).b(body);
    return b.build();
};
const se_CreateMultipartUploadCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        ...(input.Metadata !== undefined &&
            Object.keys(input.Metadata).reduce((acc, suffix) => {
                acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata[suffix];
                return acc;
            }, {})),
        [_xaa]: input[_ACL],
        [_cc]: input[_CC],
        [_cd]: input[_CD],
        [_ce]: input[_CE],
        [_cl]: input[_CL],
        [_ct]: input[_CTo],
        [_e]: [() => smithyClient.isSerializableHeaderValue(input[_E]), () => smithyClient.dateToUtcString(input[_E]).toString()],
        [_xagfc]: input[_GFC],
        [_xagr]: input[_GR],
        [_xagra]: input[_GRACP],
        [_xagwa]: input[_GWACP],
        [_xasse]: input[_SSE],
        [_xasc]: input[_SC],
        [_xawrl]: input[_WRL],
        [_xasseca]: input[_SSECA],
        [_xasseck]: input[_SSECK],
        [_xasseckm]: input[_SSECKMD],
        [_xasseakki]: input[_SSEKMSKI],
        [_xassec]: input[_SSEKMSEC],
        [_xassebke]: [() => smithyClient.isSerializableHeaderValue(input[_BKE]), () => input[_BKE].toString()],
        [_xarp]: input[_RP],
        [_xat]: input[_T],
        [_xaolm]: input[_OLM],
        [_xaolrud]: [() => smithyClient.isSerializableHeaderValue(input[_OLRUD]), () => smithyClient.serializeDateTime(input[_OLRUD]).toString()],
        [_xaollh]: input[_OLLHS],
        [_xaebo]: input[_EBO],
        [_xaca]: input[_CA],
        [_xact]: input[_CT],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_u]: [, ""],
    });
    let body;
    b.m("POST").h(headers).q(query).b(body);
    return b.build();
};
const se_CreateSessionCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xacsm]: input[_SM],
        [_xasse]: input[_SSE],
        [_xasseakki]: input[_SSEKMSKI],
        [_xassec]: input[_SSEKMSEC],
        [_xassebke]: [() => smithyClient.isSerializableHeaderValue(input[_BKE]), () => input[_BKE].toString()],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_s]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_DeleteBucketCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    let body;
    b.m("DELETE").h(headers).b(body);
    return b.build();
};
const se_DeleteBucketAnalyticsConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_a]: [, ""],
        [_i]: [, smithyClient.expectNonNull(input[_I], `Id`)],
    });
    let body;
    b.m("DELETE").h(headers).q(query).b(body);
    return b.build();
};
const se_DeleteBucketCorsCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_c]: [, ""],
    });
    let body;
    b.m("DELETE").h(headers).q(query).b(body);
    return b.build();
};
const se_DeleteBucketEncryptionCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_en]: [, ""],
    });
    let body;
    b.m("DELETE").h(headers).q(query).b(body);
    return b.build();
};
const se_DeleteBucketIntelligentTieringConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_it]: [, ""],
        [_i]: [, smithyClient.expectNonNull(input[_I], `Id`)],
    });
    let body;
    b.m("DELETE").h(headers).q(query).b(body);
    return b.build();
};
const se_DeleteBucketInventoryConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_in]: [, ""],
        [_i]: [, smithyClient.expectNonNull(input[_I], `Id`)],
    });
    let body;
    b.m("DELETE").h(headers).q(query).b(body);
    return b.build();
};
const se_DeleteBucketLifecycleCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_l]: [, ""],
    });
    let body;
    b.m("DELETE").h(headers).q(query).b(body);
    return b.build();
};
const se_DeleteBucketMetadataConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_mC]: [, ""],
    });
    let body;
    b.m("DELETE").h(headers).q(query).b(body);
    return b.build();
};
const se_DeleteBucketMetadataTableConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_mT]: [, ""],
    });
    let body;
    b.m("DELETE").h(headers).q(query).b(body);
    return b.build();
};
const se_DeleteBucketMetricsConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_m]: [, ""],
        [_i]: [, smithyClient.expectNonNull(input[_I], `Id`)],
    });
    let body;
    b.m("DELETE").h(headers).q(query).b(body);
    return b.build();
};
const se_DeleteBucketOwnershipControlsCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_oC]: [, ""],
    });
    let body;
    b.m("DELETE").h(headers).q(query).b(body);
    return b.build();
};
const se_DeleteBucketPolicyCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_p]: [, ""],
    });
    let body;
    b.m("DELETE").h(headers).q(query).b(body);
    return b.build();
};
const se_DeleteBucketReplicationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_r]: [, ""],
    });
    let body;
    b.m("DELETE").h(headers).q(query).b(body);
    return b.build();
};
const se_DeleteBucketTaggingCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_t]: [, ""],
    });
    let body;
    b.m("DELETE").h(headers).q(query).b(body);
    return b.build();
};
const se_DeleteBucketWebsiteCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_w]: [, ""],
    });
    let body;
    b.m("DELETE").h(headers).q(query).b(body);
    return b.build();
};
const se_DeleteObjectCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xam]: input[_MFA],
        [_xarp]: input[_RP],
        [_xabgr]: [() => smithyClient.isSerializableHeaderValue(input[_BGR]), () => input[_BGR].toString()],
        [_xaebo]: input[_EBO],
        [_im]: input[_IM],
        [_xaimlmt]: [() => smithyClient.isSerializableHeaderValue(input[_IMLMT]), () => smithyClient.dateToUtcString(input[_IMLMT]).toString()],
        [_xaims]: [() => smithyClient.isSerializableHeaderValue(input[_IMS]), () => input[_IMS].toString()],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_xi]: [, "DeleteObject"],
        [_vI]: [, input[_VI]],
    });
    let body;
    b.m("DELETE").h(headers).q(query).b(body);
    return b.build();
};
const se_DeleteObjectsCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_xam]: input[_MFA],
        [_xarp]: input[_RP],
        [_xabgr]: [() => smithyClient.isSerializableHeaderValue(input[_BGR]), () => input[_BGR].toString()],
        [_xaebo]: input[_EBO],
        [_xasca]: input[_CA],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_d]: [, ""],
    });
    let body;
    let contents;
    if (input.Delete !== undefined) {
        contents = se_Delete(input.Delete);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("POST").h(headers).q(query).b(body);
    return b.build();
};
const se_DeleteObjectTaggingCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_t]: [, ""],
        [_vI]: [, input[_VI]],
    });
    let body;
    b.m("DELETE").h(headers).q(query).b(body);
    return b.build();
};
const se_DeletePublicAccessBlockCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_pAB]: [, ""],
    });
    let body;
    b.m("DELETE").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketAccelerateConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
        [_xarp]: input[_RP],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_ac]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketAclCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_acl]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketAnalyticsConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_a]: [, ""],
        [_xi]: [, "GetBucketAnalyticsConfiguration"],
        [_i]: [, smithyClient.expectNonNull(input[_I], `Id`)],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketCorsCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_c]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketEncryptionCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_en]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketIntelligentTieringConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_it]: [, ""],
        [_xi]: [, "GetBucketIntelligentTieringConfiguration"],
        [_i]: [, smithyClient.expectNonNull(input[_I], `Id`)],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketInventoryConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_in]: [, ""],
        [_xi]: [, "GetBucketInventoryConfiguration"],
        [_i]: [, smithyClient.expectNonNull(input[_I], `Id`)],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketLifecycleConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_l]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketLocationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_lo]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketLoggingCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_log]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketMetadataConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_mC]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketMetadataTableConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_mT]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketMetricsConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_m]: [, ""],
        [_xi]: [, "GetBucketMetricsConfiguration"],
        [_i]: [, smithyClient.expectNonNull(input[_I], `Id`)],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketNotificationConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_n]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketOwnershipControlsCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_oC]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketPolicyCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_p]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketPolicyStatusCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_pS]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketReplicationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_r]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketRequestPaymentCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_rP]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketTaggingCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_t]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketVersioningCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_v]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetBucketWebsiteCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_w]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetObjectCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_im]: input[_IM],
        [_ims]: [() => smithyClient.isSerializableHeaderValue(input[_IMSf]), () => smithyClient.dateToUtcString(input[_IMSf]).toString()],
        [_inm]: input[_INM],
        [_ius]: [() => smithyClient.isSerializableHeaderValue(input[_IUS]), () => smithyClient.dateToUtcString(input[_IUS]).toString()],
        [_ra]: input[_R],
        [_xasseca]: input[_SSECA],
        [_xasseck]: input[_SSECK],
        [_xasseckm]: input[_SSECKMD],
        [_xarp]: input[_RP],
        [_xaebo]: input[_EBO],
        [_xacm]: input[_CM],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_xi]: [, "GetObject"],
        [_rcc]: [, input[_RCC]],
        [_rcd]: [, input[_RCD]],
        [_rce]: [, input[_RCE]],
        [_rcl]: [, input[_RCL]],
        [_rct]: [, input[_RCT]],
        [_re]: [() => input.ResponseExpires !== void 0, () => smithyClient.dateToUtcString(input[_RE]).toString()],
        [_vI]: [, input[_VI]],
        [_pN]: [() => input.PartNumber !== void 0, () => input[_PN].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetObjectAclCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xarp]: input[_RP],
        [_xaebo]: input[_EBO],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_acl]: [, ""],
        [_vI]: [, input[_VI]],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetObjectAttributesCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xamp]: [() => smithyClient.isSerializableHeaderValue(input[_MP]), () => input[_MP].toString()],
        [_xapnm]: input[_PNM],
        [_xasseca]: input[_SSECA],
        [_xasseck]: input[_SSECK],
        [_xasseckm]: input[_SSECKMD],
        [_xarp]: input[_RP],
        [_xaebo]: input[_EBO],
        [_xaoa]: [() => smithyClient.isSerializableHeaderValue(input[_OA]), () => (input[_OA] || []).map(smithyClient.quoteHeader).join(", ")],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_at]: [, ""],
        [_vI]: [, input[_VI]],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetObjectLegalHoldCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xarp]: input[_RP],
        [_xaebo]: input[_EBO],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_lh]: [, ""],
        [_vI]: [, input[_VI]],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetObjectLockConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_ol]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetObjectRetentionCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xarp]: input[_RP],
        [_xaebo]: input[_EBO],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_ret]: [, ""],
        [_vI]: [, input[_VI]],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetObjectTaggingCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
        [_xarp]: input[_RP],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_t]: [, ""],
        [_vI]: [, input[_VI]],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetObjectTorrentCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xarp]: input[_RP],
        [_xaebo]: input[_EBO],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_to]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_GetPublicAccessBlockCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_pAB]: [, ""],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_HeadBucketCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    let body;
    b.m("HEAD").h(headers).b(body);
    return b.build();
};
const se_HeadObjectCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_im]: input[_IM],
        [_ims]: [() => smithyClient.isSerializableHeaderValue(input[_IMSf]), () => smithyClient.dateToUtcString(input[_IMSf]).toString()],
        [_inm]: input[_INM],
        [_ius]: [() => smithyClient.isSerializableHeaderValue(input[_IUS]), () => smithyClient.dateToUtcString(input[_IUS]).toString()],
        [_ra]: input[_R],
        [_xasseca]: input[_SSECA],
        [_xasseck]: input[_SSECK],
        [_xasseckm]: input[_SSECKMD],
        [_xarp]: input[_RP],
        [_xaebo]: input[_EBO],
        [_xacm]: input[_CM],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_rcc]: [, input[_RCC]],
        [_rcd]: [, input[_RCD]],
        [_rce]: [, input[_RCE]],
        [_rcl]: [, input[_RCL]],
        [_rct]: [, input[_RCT]],
        [_re]: [() => input.ResponseExpires !== void 0, () => smithyClient.dateToUtcString(input[_RE]).toString()],
        [_vI]: [, input[_VI]],
        [_pN]: [() => input.PartNumber !== void 0, () => input[_PN].toString()],
    });
    let body;
    b.m("HEAD").h(headers).q(query).b(body);
    return b.build();
};
const se_ListBucketAnalyticsConfigurationsCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_a]: [, ""],
        [_xi]: [, "ListBucketAnalyticsConfigurations"],
        [_ct_]: [, input[_CTon]],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_ListBucketIntelligentTieringConfigurationsCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_it]: [, ""],
        [_xi]: [, "ListBucketIntelligentTieringConfigurations"],
        [_ct_]: [, input[_CTon]],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_ListBucketInventoryConfigurationsCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_in]: [, ""],
        [_xi]: [, "ListBucketInventoryConfigurations"],
        [_ct_]: [, input[_CTon]],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_ListBucketMetricsConfigurationsCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_m]: [, ""],
        [_xi]: [, "ListBucketMetricsConfigurations"],
        [_ct_]: [, input[_CTon]],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_ListBucketsCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = {};
    b.bp("/");
    const query = smithyClient.map({
        [_xi]: [, "ListBuckets"],
        [_mb]: [() => input.MaxBuckets !== void 0, () => input[_MB].toString()],
        [_ct_]: [, input[_CTon]],
        [_pr]: [, input[_P]],
        [_br]: [, input[_BR]],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_ListDirectoryBucketsCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = {};
    b.bp("/");
    const query = smithyClient.map({
        [_xi]: [, "ListDirectoryBuckets"],
        [_ct_]: [, input[_CTon]],
        [_mdb]: [() => input.MaxDirectoryBuckets !== void 0, () => input[_MDB].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_ListMultipartUploadsCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
        [_xarp]: input[_RP],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_u]: [, ""],
        [_de]: [, input[_D]],
        [_et]: [, input[_ET]],
        [_km]: [, input[_KM]],
        [_mu]: [() => input.MaxUploads !== void 0, () => input[_MU].toString()],
        [_pr]: [, input[_P]],
        [_uim]: [, input[_UIM]],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_ListObjectsCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xarp]: input[_RP],
        [_xaebo]: input[_EBO],
        [_xaooa]: [() => smithyClient.isSerializableHeaderValue(input[_OOA]), () => (input[_OOA] || []).map(smithyClient.quoteHeader).join(", ")],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_de]: [, input[_D]],
        [_et]: [, input[_ET]],
        [_ma]: [, input[_M]],
        [_mk]: [() => input.MaxKeys !== void 0, () => input[_MK].toString()],
        [_pr]: [, input[_P]],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_ListObjectsV2Command = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xarp]: input[_RP],
        [_xaebo]: input[_EBO],
        [_xaooa]: [() => smithyClient.isSerializableHeaderValue(input[_OOA]), () => (input[_OOA] || []).map(smithyClient.quoteHeader).join(", ")],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_lt]: [, "2"],
        [_de]: [, input[_D]],
        [_et]: [, input[_ET]],
        [_mk]: [() => input.MaxKeys !== void 0, () => input[_MK].toString()],
        [_pr]: [, input[_P]],
        [_ct_]: [, input[_CTon]],
        [_fo]: [() => input.FetchOwner !== void 0, () => input[_FO].toString()],
        [_sa]: [, input[_SA]],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_ListObjectVersionsCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xaebo]: input[_EBO],
        [_xarp]: input[_RP],
        [_xaooa]: [() => smithyClient.isSerializableHeaderValue(input[_OOA]), () => (input[_OOA] || []).map(smithyClient.quoteHeader).join(", ")],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_ver]: [, ""],
        [_de]: [, input[_D]],
        [_et]: [, input[_ET]],
        [_km]: [, input[_KM]],
        [_mk]: [() => input.MaxKeys !== void 0, () => input[_MK].toString()],
        [_pr]: [, input[_P]],
        [_vim]: [, input[_VIM]],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_ListPartsCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xarp]: input[_RP],
        [_xaebo]: input[_EBO],
        [_xasseca]: input[_SSECA],
        [_xasseck]: input[_SSECK],
        [_xasseckm]: input[_SSECKMD],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_xi]: [, "ListParts"],
        [_mp]: [() => input.MaxParts !== void 0, () => input[_MP].toString()],
        [_pnm]: [, input[_PNM]],
        [_uI]: [, smithyClient.expectNonNull(input[_UI], `UploadId`)],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_PutBucketAccelerateConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_xaebo]: input[_EBO],
        [_xasca]: input[_CA],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_ac]: [, ""],
    });
    let body;
    let contents;
    if (input.AccelerateConfiguration !== undefined) {
        contents = se_AccelerateConfiguration(input.AccelerateConfiguration);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutBucketAclCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_xaa]: input[_ACL],
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xagfc]: input[_GFC],
        [_xagr]: input[_GR],
        [_xagra]: input[_GRACP],
        [_xagw]: input[_GW],
        [_xagwa]: input[_GWACP],
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_acl]: [, ""],
    });
    let body;
    let contents;
    if (input.AccessControlPolicy !== undefined) {
        contents = se_AccessControlPolicy(input.AccessControlPolicy);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutBucketAnalyticsConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_a]: [, ""],
        [_i]: [, smithyClient.expectNonNull(input[_I], `Id`)],
    });
    let body;
    let contents;
    if (input.AnalyticsConfiguration !== undefined) {
        contents = se_AnalyticsConfiguration(input.AnalyticsConfiguration);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutBucketCorsCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_c]: [, ""],
    });
    let body;
    let contents;
    if (input.CORSConfiguration !== undefined) {
        contents = se_CORSConfiguration(input.CORSConfiguration);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutBucketEncryptionCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_en]: [, ""],
    });
    let body;
    let contents;
    if (input.ServerSideEncryptionConfiguration !== undefined) {
        contents = se_ServerSideEncryptionConfiguration(input.ServerSideEncryptionConfiguration);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutBucketIntelligentTieringConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_it]: [, ""],
        [_i]: [, smithyClient.expectNonNull(input[_I], `Id`)],
    });
    let body;
    let contents;
    if (input.IntelligentTieringConfiguration !== undefined) {
        contents = se_IntelligentTieringConfiguration(input.IntelligentTieringConfiguration);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutBucketInventoryConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_in]: [, ""],
        [_i]: [, smithyClient.expectNonNull(input[_I], `Id`)],
    });
    let body;
    let contents;
    if (input.InventoryConfiguration !== undefined) {
        contents = se_InventoryConfiguration(input.InventoryConfiguration);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutBucketLifecycleConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_xasca]: input[_CA],
        [_xaebo]: input[_EBO],
        [_xatdmos]: input[_TDMOS],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_l]: [, ""],
    });
    let body;
    let contents;
    if (input.LifecycleConfiguration !== undefined) {
        contents = se_BucketLifecycleConfiguration(input.LifecycleConfiguration);
        contents = contents.n("LifecycleConfiguration");
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutBucketLoggingCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_log]: [, ""],
    });
    let body;
    let contents;
    if (input.BucketLoggingStatus !== undefined) {
        contents = se_BucketLoggingStatus(input.BucketLoggingStatus);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutBucketMetricsConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_m]: [, ""],
        [_i]: [, smithyClient.expectNonNull(input[_I], `Id`)],
    });
    let body;
    let contents;
    if (input.MetricsConfiguration !== undefined) {
        contents = se_MetricsConfiguration(input.MetricsConfiguration);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutBucketNotificationConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_xaebo]: input[_EBO],
        [_xasdv]: [() => smithyClient.isSerializableHeaderValue(input[_SDV]), () => input[_SDV].toString()],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_n]: [, ""],
    });
    let body;
    let contents;
    if (input.NotificationConfiguration !== undefined) {
        contents = se_NotificationConfiguration(input.NotificationConfiguration);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutBucketOwnershipControlsCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_cm]: input[_CMD],
        [_xaebo]: input[_EBO],
        [_xasca]: input[_CA],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_oC]: [, ""],
    });
    let body;
    let contents;
    if (input.OwnershipControls !== undefined) {
        contents = se_OwnershipControls(input.OwnershipControls);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutBucketPolicyCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "text/plain",
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xacrsba]: [() => smithyClient.isSerializableHeaderValue(input[_CRSBA]), () => input[_CRSBA].toString()],
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_p]: [, ""],
    });
    let body;
    let contents;
    if (input.Policy !== undefined) {
        contents = input.Policy;
        body = contents;
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutBucketReplicationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xabolt]: input[_To],
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_r]: [, ""],
    });
    let body;
    let contents;
    if (input.ReplicationConfiguration !== undefined) {
        contents = se_ReplicationConfiguration(input.ReplicationConfiguration);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutBucketRequestPaymentCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_rP]: [, ""],
    });
    let body;
    let contents;
    if (input.RequestPaymentConfiguration !== undefined) {
        contents = se_RequestPaymentConfiguration(input.RequestPaymentConfiguration);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutBucketTaggingCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_t]: [, ""],
    });
    let body;
    let contents;
    if (input.Tagging !== undefined) {
        contents = se_Tagging(input.Tagging);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutBucketVersioningCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xam]: input[_MFA],
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_v]: [, ""],
    });
    let body;
    let contents;
    if (input.VersioningConfiguration !== undefined) {
        contents = se_VersioningConfiguration(input.VersioningConfiguration);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutBucketWebsiteCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_w]: [, ""],
    });
    let body;
    let contents;
    if (input.WebsiteConfiguration !== undefined) {
        contents = se_WebsiteConfiguration(input.WebsiteConfiguration);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutObjectCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        ...(input.Metadata !== undefined &&
            Object.keys(input.Metadata).reduce((acc, suffix) => {
                acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata[suffix];
                return acc;
            }, {})),
        [_ct]: input[_CTo] || "application/octet-stream",
        [_xaa]: input[_ACL],
        [_cc]: input[_CC],
        [_cd]: input[_CD],
        [_ce]: input[_CE],
        [_cl]: input[_CL],
        [_cl_]: [() => smithyClient.isSerializableHeaderValue(input[_CLo]), () => input[_CLo].toString()],
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xacc]: input[_CCRC],
        [_xacc_]: input[_CCRCC],
        [_xacc__]: input[_CCRCNVME],
        [_xacs]: input[_CSHA],
        [_xacs_]: input[_CSHAh],
        [_e]: [() => smithyClient.isSerializableHeaderValue(input[_E]), () => smithyClient.dateToUtcString(input[_E]).toString()],
        [_im]: input[_IM],
        [_inm]: input[_INM],
        [_xagfc]: input[_GFC],
        [_xagr]: input[_GR],
        [_xagra]: input[_GRACP],
        [_xagwa]: input[_GWACP],
        [_xawob]: [() => smithyClient.isSerializableHeaderValue(input[_WOB]), () => input[_WOB].toString()],
        [_xasse]: input[_SSE],
        [_xasc]: input[_SC],
        [_xawrl]: input[_WRL],
        [_xasseca]: input[_SSECA],
        [_xasseck]: input[_SSECK],
        [_xasseckm]: input[_SSECKMD],
        [_xasseakki]: input[_SSEKMSKI],
        [_xassec]: input[_SSEKMSEC],
        [_xassebke]: [() => smithyClient.isSerializableHeaderValue(input[_BKE]), () => input[_BKE].toString()],
        [_xarp]: input[_RP],
        [_xat]: input[_T],
        [_xaolm]: input[_OLM],
        [_xaolrud]: [() => smithyClient.isSerializableHeaderValue(input[_OLRUD]), () => smithyClient.serializeDateTime(input[_OLRUD]).toString()],
        [_xaollh]: input[_OLLHS],
        [_xaebo]: input[_EBO],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_xi]: [, "PutObject"],
    });
    let body;
    let contents;
    if (input.Body !== undefined) {
        contents = input.Body;
        body = contents;
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutObjectAclCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_xaa]: input[_ACL],
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xagfc]: input[_GFC],
        [_xagr]: input[_GR],
        [_xagra]: input[_GRACP],
        [_xagw]: input[_GW],
        [_xagwa]: input[_GWACP],
        [_xarp]: input[_RP],
        [_xaebo]: input[_EBO],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_acl]: [, ""],
        [_vI]: [, input[_VI]],
    });
    let body;
    let contents;
    if (input.AccessControlPolicy !== undefined) {
        contents = se_AccessControlPolicy(input.AccessControlPolicy);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutObjectLegalHoldCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_xarp]: input[_RP],
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xaebo]: input[_EBO],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_lh]: [, ""],
        [_vI]: [, input[_VI]],
    });
    let body;
    let contents;
    if (input.LegalHold !== undefined) {
        contents = se_ObjectLockLegalHold(input.LegalHold);
        contents = contents.n("LegalHold");
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutObjectLockConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_xarp]: input[_RP],
        [_xabolt]: input[_To],
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_ol]: [, ""],
    });
    let body;
    let contents;
    if (input.ObjectLockConfiguration !== undefined) {
        contents = se_ObjectLockConfiguration(input.ObjectLockConfiguration);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutObjectRetentionCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_xarp]: input[_RP],
        [_xabgr]: [() => smithyClient.isSerializableHeaderValue(input[_BGR]), () => input[_BGR].toString()],
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xaebo]: input[_EBO],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_ret]: [, ""],
        [_vI]: [, input[_VI]],
    });
    let body;
    let contents;
    if (input.Retention !== undefined) {
        contents = se_ObjectLockRetention(input.Retention);
        contents = contents.n("Retention");
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutObjectTaggingCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xaebo]: input[_EBO],
        [_xarp]: input[_RP],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_t]: [, ""],
        [_vI]: [, input[_VI]],
    });
    let body;
    let contents;
    if (input.Tagging !== undefined) {
        contents = se_Tagging(input.Tagging);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_PutPublicAccessBlockCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_pAB]: [, ""],
    });
    let body;
    let contents;
    if (input.PublicAccessBlockConfiguration !== undefined) {
        contents = se_PublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_RenameObjectCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xars]: input[_RS],
        [_im]: input[_DIM],
        [_inm]: input[_DINM],
        [_ims]: [() => smithyClient.isSerializableHeaderValue(input[_DIMS]), () => smithyClient.dateToUtcString(input[_DIMS]).toString()],
        [_ius]: [() => smithyClient.isSerializableHeaderValue(input[_DIUS]), () => smithyClient.dateToUtcString(input[_DIUS]).toString()],
        [_xarsim]: input[_SIM],
        [_xarsinm]: input[_SINM],
        [_xarsims]: [() => smithyClient.isSerializableHeaderValue(input[_SIMS]), () => smithyClient.dateToUtcString(input[_SIMS]).toString()],
        [_xarsius]: [() => smithyClient.isSerializableHeaderValue(input[_SIUS]), () => smithyClient.dateToUtcString(input[_SIUS]).toString()],
        [_xact_]: input[_CTl] ?? uuid.v4(),
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_rO]: [, ""],
    });
    let body;
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_RestoreObjectCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_xarp]: input[_RP],
        [_xasca]: input[_CA],
        [_xaebo]: input[_EBO],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_res]: [, ""],
        [_vI]: [, input[_VI]],
    });
    let body;
    let contents;
    if (input.RestoreRequest !== undefined) {
        contents = se_RestoreRequest(input.RestoreRequest);
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("POST").h(headers).q(query).b(body);
    return b.build();
};
const se_SelectObjectContentCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_xasseca]: input[_SSECA],
        [_xasseck]: input[_SSECK],
        [_xasseckm]: input[_SSECKMD],
        [_xaebo]: input[_EBO],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_se]: [, ""],
        [_st]: [, "2"],
    });
    let body;
    body = _ve;
    const bn = new xmlBuilder.XmlNode(_SOCR);
    bn.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    bn.cc(input, _Ex);
    bn.cc(input, _ETx);
    if (input[_IS] != null) {
        bn.c(se_InputSerialization(input[_IS]).n(_IS));
    }
    if (input[_OS] != null) {
        bn.c(se_OutputSerialization(input[_OS]).n(_OS));
    }
    if (input[_RPe] != null) {
        bn.c(se_RequestProgress(input[_RPe]).n(_RPe));
    }
    if (input[_SR] != null) {
        bn.c(se_ScanRange(input[_SR]).n(_SR));
    }
    body += bn.toString();
    b.m("POST").h(headers).q(query).b(body);
    return b.build();
};
const se_UpdateBucketMetadataInventoryTableConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_mIT]: [, ""],
    });
    let body;
    let contents;
    if (input.InventoryTableConfiguration !== undefined) {
        contents = se_InventoryTableConfigurationUpdates(input.InventoryTableConfiguration);
        contents = contents.n("InventoryTableConfiguration");
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_UpdateBucketMetadataJournalTableConfigurationCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/xml",
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xaebo]: input[_EBO],
    });
    b.bp("/");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    const query = smithyClient.map({
        [_mJT]: [, ""],
    });
    let body;
    let contents;
    if (input.JournalTableConfiguration !== undefined) {
        contents = se_JournalTableConfigurationUpdates(input.JournalTableConfiguration);
        contents = contents.n("JournalTableConfiguration");
        body = _ve;
        contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_UploadPartCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "content-type": "application/octet-stream",
        [_cl_]: [() => smithyClient.isSerializableHeaderValue(input[_CLo]), () => input[_CLo].toString()],
        [_cm]: input[_CMD],
        [_xasca]: input[_CA],
        [_xacc]: input[_CCRC],
        [_xacc_]: input[_CCRCC],
        [_xacc__]: input[_CCRCNVME],
        [_xacs]: input[_CSHA],
        [_xacs_]: input[_CSHAh],
        [_xasseca]: input[_SSECA],
        [_xasseck]: input[_SSECK],
        [_xasseckm]: input[_SSECKMD],
        [_xarp]: input[_RP],
        [_xaebo]: input[_EBO],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_xi]: [, "UploadPart"],
        [_pN]: [smithyClient.expectNonNull(input.PartNumber, `PartNumber`) != null, () => input[_PN].toString()],
        [_uI]: [, smithyClient.expectNonNull(input[_UI], `UploadId`)],
    });
    let body;
    let contents;
    if (input.Body !== undefined) {
        contents = input.Body;
        body = contents;
    }
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_UploadPartCopyCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xacs__]: input[_CS],
        [_xacsim]: input[_CSIM],
        [_xacsims]: [() => smithyClient.isSerializableHeaderValue(input[_CSIMS]), () => smithyClient.dateToUtcString(input[_CSIMS]).toString()],
        [_xacsinm]: input[_CSINM],
        [_xacsius]: [() => smithyClient.isSerializableHeaderValue(input[_CSIUS]), () => smithyClient.dateToUtcString(input[_CSIUS]).toString()],
        [_xacsr]: input[_CSR],
        [_xasseca]: input[_SSECA],
        [_xasseck]: input[_SSECK],
        [_xasseckm]: input[_SSECKMD],
        [_xacssseca]: input[_CSSSECA],
        [_xacssseck]: input[_CSSSECK],
        [_xacssseckm]: input[_CSSSECKMD],
        [_xarp]: input[_RP],
        [_xaebo]: input[_EBO],
        [_xasebo]: input[_ESBO],
    });
    b.bp("/{Key+}");
    b.p("Bucket", () => input.Bucket, "{Bucket}", false);
    b.p("Key", () => input.Key, "{Key+}", true);
    const query = smithyClient.map({
        [_xi]: [, "UploadPartCopy"],
        [_pN]: [smithyClient.expectNonNull(input.PartNumber, `PartNumber`) != null, () => input[_PN].toString()],
        [_uI]: [, smithyClient.expectNonNull(input[_UI], `UploadId`)],
    });
    let body;
    b.m("PUT").h(headers).q(query).b(body);
    return b.build();
};
const se_WriteGetObjectResponseCommand = async (input, context) => {
    const b = core.requestBuilder(input, context);
    const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
        ...(input.Metadata !== undefined &&
            Object.keys(input.Metadata).reduce((acc, suffix) => {
                acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata[suffix];
                return acc;
            }, {})),
        "content-type": "application/octet-stream",
        [_xarr]: input[_RR],
        [_xart]: input[_RT],
        [_xafs]: [() => smithyClient.isSerializableHeaderValue(input[_SCt]), () => input[_SCt].toString()],
        [_xafec]: input[_EC],
        [_xafem]: input[_EM],
        [_xafhar]: input[_AR],
        [_xafhcc]: input[_CC],
        [_xafhcd]: input[_CD],
        [_xafhce]: input[_CE],
        [_xafhcl]: input[_CL],
        [_cl_]: [() => smithyClient.isSerializableHeaderValue(input[_CLo]), () => input[_CLo].toString()],
        [_xafhcr]: input[_CR],
        [_xafhct]: input[_CTo],
        [_xafhxacc]: input[_CCRC],
        [_xafhxacc_]: input[_CCRCC],
        [_xafhxacc__]: input[_CCRCNVME],
        [_xafhxacs]: input[_CSHA],
        [_xafhxacs_]: input[_CSHAh],
        [_xafhxadm]: [() => smithyClient.isSerializableHeaderValue(input[_DM]), () => input[_DM].toString()],
        [_xafhe]: input[_ETa],
        [_xafhe_]: [() => smithyClient.isSerializableHeaderValue(input[_E]), () => smithyClient.dateToUtcString(input[_E]).toString()],
        [_xafhxae]: input[_Exp],
        [_xafhlm]: [() => smithyClient.isSerializableHeaderValue(input[_LM]), () => smithyClient.dateToUtcString(input[_LM]).toString()],
        [_xafhxamm]: [() => smithyClient.isSerializableHeaderValue(input[_MM]), () => input[_MM].toString()],
        [_xafhxaolm]: input[_OLM],
        [_xafhxaollh]: input[_OLLHS],
        [_xafhxaolrud]: [
            () => smithyClient.isSerializableHeaderValue(input[_OLRUD]),
            () => smithyClient.serializeDateTime(input[_OLRUD]).toString(),
        ],
        [_xafhxampc]: [() => smithyClient.isSerializableHeaderValue(input[_PC]), () => input[_PC].toString()],
        [_xafhxars]: input[_RSe],
        [_xafhxarc]: input[_RC],
        [_xafhxar]: input[_Re],
        [_xafhxasse]: input[_SSE],
        [_xafhxasseca]: input[_SSECA],
        [_xafhxasseakki]: input[_SSEKMSKI],
        [_xafhxasseckm]: input[_SSECKMD],
        [_xafhxasc]: input[_SC],
        [_xafhxatc]: [() => smithyClient.isSerializableHeaderValue(input[_TC]), () => input[_TC].toString()],
        [_xafhxavi]: input[_VI],
        [_xafhxassebke]: [() => smithyClient.isSerializableHeaderValue(input[_BKE]), () => input[_BKE].toString()],
    });
    b.bp("/WriteGetObjectResponse");
    let body;
    let contents;
    if (input.Body !== undefined) {
        contents = input.Body;
        body = contents;
    }
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{RequestRoute}." + resolvedHostname;
        if (input.RequestRoute === undefined) {
            throw new Error("Empty value provided for input host prefix: RequestRoute.");
        }
        resolvedHostname = resolvedHostname.replace("{RequestRoute}", input.RequestRoute);
        if (!protocolHttp.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    b.hn(resolvedHostname);
    b.m("POST").h(headers).b(body);
    return b.build();
};
const de_AbortMultipartUploadCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_RC]: [, output.headers[_xarc]],
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_CompleteMultipartUploadCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_Exp]: [, output.headers[_xae]],
        [_SSE]: [, output.headers[_xasse]],
        [_VI]: [, output.headers[_xavi]],
        [_SSEKMSKI]: [, output.headers[_xasseakki]],
        [_BKE]: [() => void 0 !== output.headers[_xassebke], () => smithyClient.parseBoolean(output.headers[_xassebke])],
        [_RC]: [, output.headers[_xarc]],
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (data[_B] != null) {
        contents[_B] = smithyClient.expectString(data[_B]);
    }
    if (data[_CCRC] != null) {
        contents[_CCRC] = smithyClient.expectString(data[_CCRC]);
    }
    if (data[_CCRCC] != null) {
        contents[_CCRCC] = smithyClient.expectString(data[_CCRCC]);
    }
    if (data[_CCRCNVME] != null) {
        contents[_CCRCNVME] = smithyClient.expectString(data[_CCRCNVME]);
    }
    if (data[_CSHA] != null) {
        contents[_CSHA] = smithyClient.expectString(data[_CSHA]);
    }
    if (data[_CSHAh] != null) {
        contents[_CSHAh] = smithyClient.expectString(data[_CSHAh]);
    }
    if (data[_CT] != null) {
        contents[_CT] = smithyClient.expectString(data[_CT]);
    }
    if (data[_ETa] != null) {
        contents[_ETa] = smithyClient.expectString(data[_ETa]);
    }
    if (data[_K] != null) {
        contents[_K] = smithyClient.expectString(data[_K]);
    }
    if (data[_L] != null) {
        contents[_L] = smithyClient.expectString(data[_L]);
    }
    return contents;
};
const de_CopyObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_Exp]: [, output.headers[_xae]],
        [_CSVI]: [, output.headers[_xacsvi]],
        [_VI]: [, output.headers[_xavi]],
        [_SSE]: [, output.headers[_xasse]],
        [_SSECA]: [, output.headers[_xasseca]],
        [_SSECKMD]: [, output.headers[_xasseckm]],
        [_SSEKMSKI]: [, output.headers[_xasseakki]],
        [_SSEKMSEC]: [, output.headers[_xassec]],
        [_BKE]: [() => void 0 !== output.headers[_xassebke], () => smithyClient.parseBoolean(output.headers[_xassebke])],
        [_RC]: [, output.headers[_xarc]],
    });
    const data = smithyClient.expectObject(await core$1.parseXmlBody(output.body, context));
    contents.CopyObjectResult = de_CopyObjectResult(data);
    return contents;
};
const de_CreateBucketCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_L]: [, output.headers[_lo]],
        [_BA]: [, output.headers[_xaba]],
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_CreateBucketMetadataConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_CreateBucketMetadataTableConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_CreateMultipartUploadCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_AD]: [
            () => void 0 !== output.headers[_xaad],
            () => smithyClient.expectNonNull(smithyClient.parseRfc7231DateTime(output.headers[_xaad])),
        ],
        [_ARI]: [, output.headers[_xaari]],
        [_SSE]: [, output.headers[_xasse]],
        [_SSECA]: [, output.headers[_xasseca]],
        [_SSECKMD]: [, output.headers[_xasseckm]],
        [_SSEKMSKI]: [, output.headers[_xasseakki]],
        [_SSEKMSEC]: [, output.headers[_xassec]],
        [_BKE]: [() => void 0 !== output.headers[_xassebke], () => smithyClient.parseBoolean(output.headers[_xassebke])],
        [_RC]: [, output.headers[_xarc]],
        [_CA]: [, output.headers[_xaca]],
        [_CT]: [, output.headers[_xact]],
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (data[_B] != null) {
        contents[_B] = smithyClient.expectString(data[_B]);
    }
    if (data[_K] != null) {
        contents[_K] = smithyClient.expectString(data[_K]);
    }
    if (data[_UI] != null) {
        contents[_UI] = smithyClient.expectString(data[_UI]);
    }
    return contents;
};
const de_CreateSessionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_SSE]: [, output.headers[_xasse]],
        [_SSEKMSKI]: [, output.headers[_xasseakki]],
        [_SSEKMSEC]: [, output.headers[_xassec]],
        [_BKE]: [() => void 0 !== output.headers[_xassebke], () => smithyClient.parseBoolean(output.headers[_xassebke])],
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (data[_C] != null) {
        contents[_C] = de_SessionCredentials(data[_C]);
    }
    return contents;
};
const de_DeleteBucketCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_DeleteBucketAnalyticsConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_DeleteBucketCorsCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_DeleteBucketEncryptionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_DeleteBucketIntelligentTieringConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_DeleteBucketInventoryConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_DeleteBucketLifecycleCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_DeleteBucketMetadataConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_DeleteBucketMetadataTableConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_DeleteBucketMetricsConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_DeleteBucketOwnershipControlsCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_DeleteBucketPolicyCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_DeleteBucketReplicationCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_DeleteBucketTaggingCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_DeleteBucketWebsiteCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_DeleteObjectCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_DM]: [() => void 0 !== output.headers[_xadm], () => smithyClient.parseBoolean(output.headers[_xadm])],
        [_VI]: [, output.headers[_xavi]],
        [_RC]: [, output.headers[_xarc]],
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_DeleteObjectsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_RC]: [, output.headers[_xarc]],
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (String(data.Deleted).trim() === "") {
        contents[_De] = [];
    }
    else if (data[_De] != null) {
        contents[_De] = de_DeletedObjects(smithyClient.getArrayIfSingleItem(data[_De]));
    }
    if (String(data.Error).trim() === "") {
        contents[_Err] = [];
    }
    else if (data[_Er] != null) {
        contents[_Err] = de_Errors(smithyClient.getArrayIfSingleItem(data[_Er]));
    }
    return contents;
};
const de_DeleteObjectTaggingCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_VI]: [, output.headers[_xavi]],
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_DeletePublicAccessBlockCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_GetBucketAccelerateConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_RC]: [, output.headers[_xarc]],
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (data[_S] != null) {
        contents[_S] = smithyClient.expectString(data[_S]);
    }
    return contents;
};
const de_GetBucketAclCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (String(data.AccessControlList).trim() === "") {
        contents[_Gr] = [];
    }
    else if (data[_ACLc] != null && data[_ACLc][_G] != null) {
        contents[_Gr] = de_Grants(smithyClient.getArrayIfSingleItem(data[_ACLc][_G]));
    }
    if (data[_O] != null) {
        contents[_O] = de_Owner(data[_O]);
    }
    return contents;
};
const de_GetBucketAnalyticsConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectObject(await core$1.parseXmlBody(output.body, context));
    contents.AnalyticsConfiguration = de_AnalyticsConfiguration(data);
    return contents;
};
const de_GetBucketCorsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (String(data.CORSRule).trim() === "") {
        contents[_CORSRu] = [];
    }
    else if (data[_CORSR] != null) {
        contents[_CORSRu] = de_CORSRules(smithyClient.getArrayIfSingleItem(data[_CORSR]));
    }
    return contents;
};
const de_GetBucketEncryptionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectObject(await core$1.parseXmlBody(output.body, context));
    contents.ServerSideEncryptionConfiguration = de_ServerSideEncryptionConfiguration(data);
    return contents;
};
const de_GetBucketIntelligentTieringConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectObject(await core$1.parseXmlBody(output.body, context));
    contents.IntelligentTieringConfiguration = de_IntelligentTieringConfiguration(data);
    return contents;
};
const de_GetBucketInventoryConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectObject(await core$1.parseXmlBody(output.body, context));
    contents.InventoryConfiguration = de_InventoryConfiguration(data);
    return contents;
};
const de_GetBucketLifecycleConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_TDMOS]: [, output.headers[_xatdmos]],
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (String(data.Rule).trim() === "") {
        contents[_Rul] = [];
    }
    else if (data[_Ru] != null) {
        contents[_Rul] = de_LifecycleRules(smithyClient.getArrayIfSingleItem(data[_Ru]));
    }
    return contents;
};
const de_GetBucketLocationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (data[_LC] != null) {
        contents[_LC] = smithyClient.expectString(data[_LC]);
    }
    return contents;
};
const de_GetBucketLoggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (data[_LE] != null) {
        contents[_LE] = de_LoggingEnabled(data[_LE]);
    }
    return contents;
};
const de_GetBucketMetadataConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectObject(await core$1.parseXmlBody(output.body, context));
    contents.GetBucketMetadataConfigurationResult = de_GetBucketMetadataConfigurationResult(data);
    return contents;
};
const de_GetBucketMetadataTableConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectObject(await core$1.parseXmlBody(output.body, context));
    contents.GetBucketMetadataTableConfigurationResult = de_GetBucketMetadataTableConfigurationResult(data);
    return contents;
};
const de_GetBucketMetricsConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectObject(await core$1.parseXmlBody(output.body, context));
    contents.MetricsConfiguration = de_MetricsConfiguration(data);
    return contents;
};
const de_GetBucketNotificationConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (data[_EBC] != null) {
        contents[_EBC] = de_EventBridgeConfiguration(data[_EBC]);
    }
    if (String(data.CloudFunctionConfiguration).trim() === "") {
        contents[_LFC] = [];
    }
    else if (data[_CFC] != null) {
        contents[_LFC] = de_LambdaFunctionConfigurationList(smithyClient.getArrayIfSingleItem(data[_CFC]));
    }
    if (String(data.QueueConfiguration).trim() === "") {
        contents[_QCu] = [];
    }
    else if (data[_QC] != null) {
        contents[_QCu] = de_QueueConfigurationList(smithyClient.getArrayIfSingleItem(data[_QC]));
    }
    if (String(data.TopicConfiguration).trim() === "") {
        contents[_TCop] = [];
    }
    else if (data[_TCo] != null) {
        contents[_TCop] = de_TopicConfigurationList(smithyClient.getArrayIfSingleItem(data[_TCo]));
    }
    return contents;
};
const de_GetBucketOwnershipControlsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectObject(await core$1.parseXmlBody(output.body, context));
    contents.OwnershipControls = de_OwnershipControls(data);
    return contents;
};
const de_GetBucketPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = await collectBodyString(output.body, context);
    contents.Policy = smithyClient.expectString(data);
    return contents;
};
const de_GetBucketPolicyStatusCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectObject(await core$1.parseXmlBody(output.body, context));
    contents.PolicyStatus = de_PolicyStatus(data);
    return contents;
};
const de_GetBucketReplicationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectObject(await core$1.parseXmlBody(output.body, context));
    contents.ReplicationConfiguration = de_ReplicationConfiguration(data);
    return contents;
};
const de_GetBucketRequestPaymentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (data[_Pa] != null) {
        contents[_Pa] = smithyClient.expectString(data[_Pa]);
    }
    return contents;
};
const de_GetBucketTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (String(data.TagSet).trim() === "") {
        contents[_TS] = [];
    }
    else if (data[_TS] != null && data[_TS][_Ta] != null) {
        contents[_TS] = de_TagSet(smithyClient.getArrayIfSingleItem(data[_TS][_Ta]));
    }
    return contents;
};
const de_GetBucketVersioningCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (data[_MDf] != null) {
        contents[_MFAD] = smithyClient.expectString(data[_MDf]);
    }
    if (data[_S] != null) {
        contents[_S] = smithyClient.expectString(data[_S]);
    }
    return contents;
};
const de_GetBucketWebsiteCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (data[_ED] != null) {
        contents[_ED] = de_ErrorDocument(data[_ED]);
    }
    if (data[_ID] != null) {
        contents[_ID] = de_IndexDocument(data[_ID]);
    }
    if (data[_RART] != null) {
        contents[_RART] = de_RedirectAllRequestsTo(data[_RART]);
    }
    if (String(data.RoutingRules).trim() === "") {
        contents[_RRo] = [];
    }
    else if (data[_RRo] != null && data[_RRo][_RRou] != null) {
        contents[_RRo] = de_RoutingRules(smithyClient.getArrayIfSingleItem(data[_RRo][_RRou]));
    }
    return contents;
};
const de_GetObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_DM]: [() => void 0 !== output.headers[_xadm], () => smithyClient.parseBoolean(output.headers[_xadm])],
        [_AR]: [, output.headers[_ar]],
        [_Exp]: [, output.headers[_xae]],
        [_Re]: [, output.headers[_xar]],
        [_LM]: [() => void 0 !== output.headers[_lm], () => smithyClient.expectNonNull(smithyClient.parseRfc7231DateTime(output.headers[_lm]))],
        [_CLo]: [() => void 0 !== output.headers[_cl_], () => smithyClient.strictParseLong(output.headers[_cl_])],
        [_ETa]: [, output.headers[_eta]],
        [_CCRC]: [, output.headers[_xacc]],
        [_CCRCC]: [, output.headers[_xacc_]],
        [_CCRCNVME]: [, output.headers[_xacc__]],
        [_CSHA]: [, output.headers[_xacs]],
        [_CSHAh]: [, output.headers[_xacs_]],
        [_CT]: [, output.headers[_xact]],
        [_MM]: [() => void 0 !== output.headers[_xamm], () => smithyClient.strictParseInt32(output.headers[_xamm])],
        [_VI]: [, output.headers[_xavi]],
        [_CC]: [, output.headers[_cc]],
        [_CD]: [, output.headers[_cd]],
        [_CE]: [, output.headers[_ce]],
        [_CL]: [, output.headers[_cl]],
        [_CR]: [, output.headers[_cr]],
        [_CTo]: [, output.headers[_ct]],
        [_E]: [() => void 0 !== output.headers[_e], () => smithyClient.expectNonNull(smithyClient.parseRfc7231DateTime(output.headers[_e]))],
        [_ES]: [, output.headers[_ex]],
        [_WRL]: [, output.headers[_xawrl]],
        [_SSE]: [, output.headers[_xasse]],
        [_SSECA]: [, output.headers[_xasseca]],
        [_SSECKMD]: [, output.headers[_xasseckm]],
        [_SSEKMSKI]: [, output.headers[_xasseakki]],
        [_BKE]: [() => void 0 !== output.headers[_xassebke], () => smithyClient.parseBoolean(output.headers[_xassebke])],
        [_SC]: [, output.headers[_xasc]],
        [_RC]: [, output.headers[_xarc]],
        [_RSe]: [, output.headers[_xars_]],
        [_PC]: [() => void 0 !== output.headers[_xampc], () => smithyClient.strictParseInt32(output.headers[_xampc])],
        [_TC]: [() => void 0 !== output.headers[_xatc], () => smithyClient.strictParseInt32(output.headers[_xatc])],
        [_OLM]: [, output.headers[_xaolm]],
        [_OLRUD]: [
            () => void 0 !== output.headers[_xaolrud],
            () => smithyClient.expectNonNull(smithyClient.parseRfc3339DateTimeWithOffset(output.headers[_xaolrud])),
        ],
        [_OLLHS]: [, output.headers[_xaollh]],
        Metadata: [
            ,
            Object.keys(output.headers)
                .filter((header) => header.startsWith("x-amz-meta-"))
                .reduce((acc, header) => {
                acc[header.substring(11)] = output.headers[header];
                return acc;
            }, {}),
        ],
    });
    const data = output.body;
    context.sdkStreamMixin(data);
    contents.Body = data;
    return contents;
};
const de_GetObjectAclCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_RC]: [, output.headers[_xarc]],
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (String(data.AccessControlList).trim() === "") {
        contents[_Gr] = [];
    }
    else if (data[_ACLc] != null && data[_ACLc][_G] != null) {
        contents[_Gr] = de_Grants(smithyClient.getArrayIfSingleItem(data[_ACLc][_G]));
    }
    if (data[_O] != null) {
        contents[_O] = de_Owner(data[_O]);
    }
    return contents;
};
const de_GetObjectAttributesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_DM]: [() => void 0 !== output.headers[_xadm], () => smithyClient.parseBoolean(output.headers[_xadm])],
        [_LM]: [() => void 0 !== output.headers[_lm], () => smithyClient.expectNonNull(smithyClient.parseRfc7231DateTime(output.headers[_lm]))],
        [_VI]: [, output.headers[_xavi]],
        [_RC]: [, output.headers[_xarc]],
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (data[_Ch] != null) {
        contents[_Ch] = de_Checksum(data[_Ch]);
    }
    if (data[_ETa] != null) {
        contents[_ETa] = smithyClient.expectString(data[_ETa]);
    }
    if (data[_OP] != null) {
        contents[_OP] = de_GetObjectAttributesParts(data[_OP]);
    }
    if (data[_OSb] != null) {
        contents[_OSb] = smithyClient.strictParseLong(data[_OSb]);
    }
    if (data[_SC] != null) {
        contents[_SC] = smithyClient.expectString(data[_SC]);
    }
    return contents;
};
const de_GetObjectLegalHoldCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectObject(await core$1.parseXmlBody(output.body, context));
    contents.LegalHold = de_ObjectLockLegalHold(data);
    return contents;
};
const de_GetObjectLockConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectObject(await core$1.parseXmlBody(output.body, context));
    contents.ObjectLockConfiguration = de_ObjectLockConfiguration(data);
    return contents;
};
const de_GetObjectRetentionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectObject(await core$1.parseXmlBody(output.body, context));
    contents.Retention = de_ObjectLockRetention(data);
    return contents;
};
const de_GetObjectTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_VI]: [, output.headers[_xavi]],
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (String(data.TagSet).trim() === "") {
        contents[_TS] = [];
    }
    else if (data[_TS] != null && data[_TS][_Ta] != null) {
        contents[_TS] = de_TagSet(smithyClient.getArrayIfSingleItem(data[_TS][_Ta]));
    }
    return contents;
};
const de_GetObjectTorrentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_RC]: [, output.headers[_xarc]],
    });
    const data = output.body;
    context.sdkStreamMixin(data);
    contents.Body = data;
    return contents;
};
const de_GetPublicAccessBlockCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectObject(await core$1.parseXmlBody(output.body, context));
    contents.PublicAccessBlockConfiguration = de_PublicAccessBlockConfiguration(data);
    return contents;
};
const de_HeadBucketCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_BA]: [, output.headers[_xaba]],
        [_BLT]: [, output.headers[_xablt]],
        [_BLN]: [, output.headers[_xabln]],
        [_BR]: [, output.headers[_xabr]],
        [_APA]: [() => void 0 !== output.headers[_xaapa], () => smithyClient.parseBoolean(output.headers[_xaapa])],
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_HeadObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_DM]: [() => void 0 !== output.headers[_xadm], () => smithyClient.parseBoolean(output.headers[_xadm])],
        [_AR]: [, output.headers[_ar]],
        [_Exp]: [, output.headers[_xae]],
        [_Re]: [, output.headers[_xar]],
        [_AS]: [, output.headers[_xaas]],
        [_LM]: [() => void 0 !== output.headers[_lm], () => smithyClient.expectNonNull(smithyClient.parseRfc7231DateTime(output.headers[_lm]))],
        [_CLo]: [() => void 0 !== output.headers[_cl_], () => smithyClient.strictParseLong(output.headers[_cl_])],
        [_CCRC]: [, output.headers[_xacc]],
        [_CCRCC]: [, output.headers[_xacc_]],
        [_CCRCNVME]: [, output.headers[_xacc__]],
        [_CSHA]: [, output.headers[_xacs]],
        [_CSHAh]: [, output.headers[_xacs_]],
        [_CT]: [, output.headers[_xact]],
        [_ETa]: [, output.headers[_eta]],
        [_MM]: [() => void 0 !== output.headers[_xamm], () => smithyClient.strictParseInt32(output.headers[_xamm])],
        [_VI]: [, output.headers[_xavi]],
        [_CC]: [, output.headers[_cc]],
        [_CD]: [, output.headers[_cd]],
        [_CE]: [, output.headers[_ce]],
        [_CL]: [, output.headers[_cl]],
        [_CTo]: [, output.headers[_ct]],
        [_CR]: [, output.headers[_cr]],
        [_E]: [() => void 0 !== output.headers[_e], () => smithyClient.expectNonNull(smithyClient.parseRfc7231DateTime(output.headers[_e]))],
        [_ES]: [, output.headers[_ex]],
        [_WRL]: [, output.headers[_xawrl]],
        [_SSE]: [, output.headers[_xasse]],
        [_SSECA]: [, output.headers[_xasseca]],
        [_SSECKMD]: [, output.headers[_xasseckm]],
        [_SSEKMSKI]: [, output.headers[_xasseakki]],
        [_BKE]: [() => void 0 !== output.headers[_xassebke], () => smithyClient.parseBoolean(output.headers[_xassebke])],
        [_SC]: [, output.headers[_xasc]],
        [_RC]: [, output.headers[_xarc]],
        [_RSe]: [, output.headers[_xars_]],
        [_PC]: [() => void 0 !== output.headers[_xampc], () => smithyClient.strictParseInt32(output.headers[_xampc])],
        [_TC]: [() => void 0 !== output.headers[_xatc], () => smithyClient.strictParseInt32(output.headers[_xatc])],
        [_OLM]: [, output.headers[_xaolm]],
        [_OLRUD]: [
            () => void 0 !== output.headers[_xaolrud],
            () => smithyClient.expectNonNull(smithyClient.parseRfc3339DateTimeWithOffset(output.headers[_xaolrud])),
        ],
        [_OLLHS]: [, output.headers[_xaollh]],
        Metadata: [
            ,
            Object.keys(output.headers)
                .filter((header) => header.startsWith("x-amz-meta-"))
                .reduce((acc, header) => {
                acc[header.substring(11)] = output.headers[header];
                return acc;
            }, {}),
        ],
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_ListBucketAnalyticsConfigurationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (String(data.AnalyticsConfiguration).trim() === "") {
        contents[_ACLn] = [];
    }
    else if (data[_AC] != null) {
        contents[_ACLn] = de_AnalyticsConfigurationList(smithyClient.getArrayIfSingleItem(data[_AC]));
    }
    if (data[_CTon] != null) {
        contents[_CTon] = smithyClient.expectString(data[_CTon]);
    }
    if (data[_IT] != null) {
        contents[_IT] = smithyClient.parseBoolean(data[_IT]);
    }
    if (data[_NCT] != null) {
        contents[_NCT] = smithyClient.expectString(data[_NCT]);
    }
    return contents;
};
const de_ListBucketIntelligentTieringConfigurationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (data[_CTon] != null) {
        contents[_CTon] = smithyClient.expectString(data[_CTon]);
    }
    if (String(data.IntelligentTieringConfiguration).trim() === "") {
        contents[_ITCL] = [];
    }
    else if (data[_ITC] != null) {
        contents[_ITCL] = de_IntelligentTieringConfigurationList(smithyClient.getArrayIfSingleItem(data[_ITC]));
    }
    if (data[_IT] != null) {
        contents[_IT] = smithyClient.parseBoolean(data[_IT]);
    }
    if (data[_NCT] != null) {
        contents[_NCT] = smithyClient.expectString(data[_NCT]);
    }
    return contents;
};
const de_ListBucketInventoryConfigurationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (data[_CTon] != null) {
        contents[_CTon] = smithyClient.expectString(data[_CTon]);
    }
    if (String(data.InventoryConfiguration).trim() === "") {
        contents[_ICL] = [];
    }
    else if (data[_IC] != null) {
        contents[_ICL] = de_InventoryConfigurationList(smithyClient.getArrayIfSingleItem(data[_IC]));
    }
    if (data[_IT] != null) {
        contents[_IT] = smithyClient.parseBoolean(data[_IT]);
    }
    if (data[_NCT] != null) {
        contents[_NCT] = smithyClient.expectString(data[_NCT]);
    }
    return contents;
};
const de_ListBucketMetricsConfigurationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (data[_CTon] != null) {
        contents[_CTon] = smithyClient.expectString(data[_CTon]);
    }
    if (data[_IT] != null) {
        contents[_IT] = smithyClient.parseBoolean(data[_IT]);
    }
    if (String(data.MetricsConfiguration).trim() === "") {
        contents[_MCL] = [];
    }
    else if (data[_MC] != null) {
        contents[_MCL] = de_MetricsConfigurationList(smithyClient.getArrayIfSingleItem(data[_MC]));
    }
    if (data[_NCT] != null) {
        contents[_NCT] = smithyClient.expectString(data[_NCT]);
    }
    return contents;
};
const de_ListBucketsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (String(data.Buckets).trim() === "") {
        contents[_Bu] = [];
    }
    else if (data[_Bu] != null && data[_Bu][_B] != null) {
        contents[_Bu] = de_Buckets(smithyClient.getArrayIfSingleItem(data[_Bu][_B]));
    }
    if (data[_CTon] != null) {
        contents[_CTon] = smithyClient.expectString(data[_CTon]);
    }
    if (data[_O] != null) {
        contents[_O] = de_Owner(data[_O]);
    }
    if (data[_P] != null) {
        contents[_P] = smithyClient.expectString(data[_P]);
    }
    return contents;
};
const de_ListDirectoryBucketsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (String(data.Buckets).trim() === "") {
        contents[_Bu] = [];
    }
    else if (data[_Bu] != null && data[_Bu][_B] != null) {
        contents[_Bu] = de_Buckets(smithyClient.getArrayIfSingleItem(data[_Bu][_B]));
    }
    if (data[_CTon] != null) {
        contents[_CTon] = smithyClient.expectString(data[_CTon]);
    }
    return contents;
};
const de_ListMultipartUploadsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_RC]: [, output.headers[_xarc]],
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (data[_B] != null) {
        contents[_B] = smithyClient.expectString(data[_B]);
    }
    if (String(data.CommonPrefixes).trim() === "") {
        contents[_CP] = [];
    }
    else if (data[_CP] != null) {
        contents[_CP] = de_CommonPrefixList(smithyClient.getArrayIfSingleItem(data[_CP]));
    }
    if (data[_D] != null) {
        contents[_D] = smithyClient.expectString(data[_D]);
    }
    if (data[_ET] != null) {
        contents[_ET] = smithyClient.expectString(data[_ET]);
    }
    if (data[_IT] != null) {
        contents[_IT] = smithyClient.parseBoolean(data[_IT]);
    }
    if (data[_KM] != null) {
        contents[_KM] = smithyClient.expectString(data[_KM]);
    }
    if (data[_MU] != null) {
        contents[_MU] = smithyClient.strictParseInt32(data[_MU]);
    }
    if (data[_NKM] != null) {
        contents[_NKM] = smithyClient.expectString(data[_NKM]);
    }
    if (data[_NUIM] != null) {
        contents[_NUIM] = smithyClient.expectString(data[_NUIM]);
    }
    if (data[_P] != null) {
        contents[_P] = smithyClient.expectString(data[_P]);
    }
    if (data[_UIM] != null) {
        contents[_UIM] = smithyClient.expectString(data[_UIM]);
    }
    if (String(data.Upload).trim() === "") {
        contents[_Up] = [];
    }
    else if (data[_U] != null) {
        contents[_Up] = de_MultipartUploadList(smithyClient.getArrayIfSingleItem(data[_U]));
    }
    return contents;
};
const de_ListObjectsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_RC]: [, output.headers[_xarc]],
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (String(data.CommonPrefixes).trim() === "") {
        contents[_CP] = [];
    }
    else if (data[_CP] != null) {
        contents[_CP] = de_CommonPrefixList(smithyClient.getArrayIfSingleItem(data[_CP]));
    }
    if (String(data.Contents).trim() === "") {
        contents[_Co] = [];
    }
    else if (data[_Co] != null) {
        contents[_Co] = de_ObjectList(smithyClient.getArrayIfSingleItem(data[_Co]));
    }
    if (data[_D] != null) {
        contents[_D] = smithyClient.expectString(data[_D]);
    }
    if (data[_ET] != null) {
        contents[_ET] = smithyClient.expectString(data[_ET]);
    }
    if (data[_IT] != null) {
        contents[_IT] = smithyClient.parseBoolean(data[_IT]);
    }
    if (data[_M] != null) {
        contents[_M] = smithyClient.expectString(data[_M]);
    }
    if (data[_MK] != null) {
        contents[_MK] = smithyClient.strictParseInt32(data[_MK]);
    }
    if (data[_N] != null) {
        contents[_N] = smithyClient.expectString(data[_N]);
    }
    if (data[_NM] != null) {
        contents[_NM] = smithyClient.expectString(data[_NM]);
    }
    if (data[_P] != null) {
        contents[_P] = smithyClient.expectString(data[_P]);
    }
    return contents;
};
const de_ListObjectsV2Command = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_RC]: [, output.headers[_xarc]],
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (String(data.CommonPrefixes).trim() === "") {
        contents[_CP] = [];
    }
    else if (data[_CP] != null) {
        contents[_CP] = de_CommonPrefixList(smithyClient.getArrayIfSingleItem(data[_CP]));
    }
    if (String(data.Contents).trim() === "") {
        contents[_Co] = [];
    }
    else if (data[_Co] != null) {
        contents[_Co] = de_ObjectList(smithyClient.getArrayIfSingleItem(data[_Co]));
    }
    if (data[_CTon] != null) {
        contents[_CTon] = smithyClient.expectString(data[_CTon]);
    }
    if (data[_D] != null) {
        contents[_D] = smithyClient.expectString(data[_D]);
    }
    if (data[_ET] != null) {
        contents[_ET] = smithyClient.expectString(data[_ET]);
    }
    if (data[_IT] != null) {
        contents[_IT] = smithyClient.parseBoolean(data[_IT]);
    }
    if (data[_KC] != null) {
        contents[_KC] = smithyClient.strictParseInt32(data[_KC]);
    }
    if (data[_MK] != null) {
        contents[_MK] = smithyClient.strictParseInt32(data[_MK]);
    }
    if (data[_N] != null) {
        contents[_N] = smithyClient.expectString(data[_N]);
    }
    if (data[_NCT] != null) {
        contents[_NCT] = smithyClient.expectString(data[_NCT]);
    }
    if (data[_P] != null) {
        contents[_P] = smithyClient.expectString(data[_P]);
    }
    if (data[_SA] != null) {
        contents[_SA] = smithyClient.expectString(data[_SA]);
    }
    return contents;
};
const de_ListObjectVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_RC]: [, output.headers[_xarc]],
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (String(data.CommonPrefixes).trim() === "") {
        contents[_CP] = [];
    }
    else if (data[_CP] != null) {
        contents[_CP] = de_CommonPrefixList(smithyClient.getArrayIfSingleItem(data[_CP]));
    }
    if (String(data.DeleteMarker).trim() === "") {
        contents[_DMe] = [];
    }
    else if (data[_DM] != null) {
        contents[_DMe] = de_DeleteMarkers(smithyClient.getArrayIfSingleItem(data[_DM]));
    }
    if (data[_D] != null) {
        contents[_D] = smithyClient.expectString(data[_D]);
    }
    if (data[_ET] != null) {
        contents[_ET] = smithyClient.expectString(data[_ET]);
    }
    if (data[_IT] != null) {
        contents[_IT] = smithyClient.parseBoolean(data[_IT]);
    }
    if (data[_KM] != null) {
        contents[_KM] = smithyClient.expectString(data[_KM]);
    }
    if (data[_MK] != null) {
        contents[_MK] = smithyClient.strictParseInt32(data[_MK]);
    }
    if (data[_N] != null) {
        contents[_N] = smithyClient.expectString(data[_N]);
    }
    if (data[_NKM] != null) {
        contents[_NKM] = smithyClient.expectString(data[_NKM]);
    }
    if (data[_NVIM] != null) {
        contents[_NVIM] = smithyClient.expectString(data[_NVIM]);
    }
    if (data[_P] != null) {
        contents[_P] = smithyClient.expectString(data[_P]);
    }
    if (data[_VIM] != null) {
        contents[_VIM] = smithyClient.expectString(data[_VIM]);
    }
    if (String(data.Version).trim() === "") {
        contents[_Ve] = [];
    }
    else if (data[_V] != null) {
        contents[_Ve] = de_ObjectVersionList(smithyClient.getArrayIfSingleItem(data[_V]));
    }
    return contents;
};
const de_ListPartsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_AD]: [
            () => void 0 !== output.headers[_xaad],
            () => smithyClient.expectNonNull(smithyClient.parseRfc7231DateTime(output.headers[_xaad])),
        ],
        [_ARI]: [, output.headers[_xaari]],
        [_RC]: [, output.headers[_xarc]],
    });
    const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseXmlBody(output.body, context)), "body");
    if (data[_B] != null) {
        contents[_B] = smithyClient.expectString(data[_B]);
    }
    if (data[_CA] != null) {
        contents[_CA] = smithyClient.expectString(data[_CA]);
    }
    if (data[_CT] != null) {
        contents[_CT] = smithyClient.expectString(data[_CT]);
    }
    if (data[_In] != null) {
        contents[_In] = de_Initiator(data[_In]);
    }
    if (data[_IT] != null) {
        contents[_IT] = smithyClient.parseBoolean(data[_IT]);
    }
    if (data[_K] != null) {
        contents[_K] = smithyClient.expectString(data[_K]);
    }
    if (data[_MP] != null) {
        contents[_MP] = smithyClient.strictParseInt32(data[_MP]);
    }
    if (data[_NPNM] != null) {
        contents[_NPNM] = smithyClient.expectString(data[_NPNM]);
    }
    if (data[_O] != null) {
        contents[_O] = de_Owner(data[_O]);
    }
    if (data[_PNM] != null) {
        contents[_PNM] = smithyClient.expectString(data[_PNM]);
    }
    if (String(data.Part).trim() === "") {
        contents[_Part] = [];
    }
    else if (data[_Par] != null) {
        contents[_Part] = de_Parts(smithyClient.getArrayIfSingleItem(data[_Par]));
    }
    if (data[_SC] != null) {
        contents[_SC] = smithyClient.expectString(data[_SC]);
    }
    if (data[_UI] != null) {
        contents[_UI] = smithyClient.expectString(data[_UI]);
    }
    return contents;
};
const de_PutBucketAccelerateConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutBucketAclCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutBucketAnalyticsConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutBucketCorsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutBucketEncryptionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutBucketIntelligentTieringConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutBucketInventoryConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutBucketLifecycleConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_TDMOS]: [, output.headers[_xatdmos]],
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutBucketLoggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutBucketMetricsConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutBucketNotificationConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutBucketOwnershipControlsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutBucketPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutBucketReplicationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutBucketRequestPaymentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutBucketTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutBucketVersioningCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutBucketWebsiteCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_Exp]: [, output.headers[_xae]],
        [_ETa]: [, output.headers[_eta]],
        [_CCRC]: [, output.headers[_xacc]],
        [_CCRCC]: [, output.headers[_xacc_]],
        [_CCRCNVME]: [, output.headers[_xacc__]],
        [_CSHA]: [, output.headers[_xacs]],
        [_CSHAh]: [, output.headers[_xacs_]],
        [_CT]: [, output.headers[_xact]],
        [_SSE]: [, output.headers[_xasse]],
        [_VI]: [, output.headers[_xavi]],
        [_SSECA]: [, output.headers[_xasseca]],
        [_SSECKMD]: [, output.headers[_xasseckm]],
        [_SSEKMSKI]: [, output.headers[_xasseakki]],
        [_SSEKMSEC]: [, output.headers[_xassec]],
        [_BKE]: [() => void 0 !== output.headers[_xassebke], () => smithyClient.parseBoolean(output.headers[_xassebke])],
        [_Si]: [() => void 0 !== output.headers[_xaos], () => smithyClient.strictParseLong(output.headers[_xaos])],
        [_RC]: [, output.headers[_xarc]],
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutObjectAclCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_RC]: [, output.headers[_xarc]],
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutObjectLegalHoldCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_RC]: [, output.headers[_xarc]],
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutObjectLockConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_RC]: [, output.headers[_xarc]],
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutObjectRetentionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_RC]: [, output.headers[_xarc]],
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutObjectTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_VI]: [, output.headers[_xavi]],
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_PutPublicAccessBlockCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_RenameObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_RestoreObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_RC]: [, output.headers[_xarc]],
        [_ROP]: [, output.headers[_xarop]],
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_SelectObjectContentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    const data = output.body;
    contents.Payload = de_SelectObjectContentEventStream(data, context);
    return contents;
};
const de_UpdateBucketMetadataInventoryTableConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_UpdateBucketMetadataJournalTableConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_UploadPartCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_SSE]: [, output.headers[_xasse]],
        [_ETa]: [, output.headers[_eta]],
        [_CCRC]: [, output.headers[_xacc]],
        [_CCRCC]: [, output.headers[_xacc_]],
        [_CCRCNVME]: [, output.headers[_xacc__]],
        [_CSHA]: [, output.headers[_xacs]],
        [_CSHAh]: [, output.headers[_xacs_]],
        [_SSECA]: [, output.headers[_xasseca]],
        [_SSECKMD]: [, output.headers[_xasseckm]],
        [_SSEKMSKI]: [, output.headers[_xasseakki]],
        [_BKE]: [() => void 0 !== output.headers[_xassebke], () => smithyClient.parseBoolean(output.headers[_xassebke])],
        [_RC]: [, output.headers[_xarc]],
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_UploadPartCopyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
        [_CSVI]: [, output.headers[_xacsvi]],
        [_SSE]: [, output.headers[_xasse]],
        [_SSECA]: [, output.headers[_xasseca]],
        [_SSECKMD]: [, output.headers[_xasseckm]],
        [_SSEKMSKI]: [, output.headers[_xasseakki]],
        [_BKE]: [() => void 0 !== output.headers[_xassebke], () => smithyClient.parseBoolean(output.headers[_xassebke])],
        [_RC]: [, output.headers[_xarc]],
    });
    const data = smithyClient.expectObject(await core$1.parseXmlBody(output.body, context));
    contents.CopyPartResult = de_CopyPartResult(data);
    return contents;
};
const de_WriteGetObjectResponseCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = smithyClient.map({
        $metadata: deserializeMetadata(output),
    });
    await smithyClient.collectBody(output.body, context);
    return contents;
};
const de_CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await core$1.parseXmlErrorBody(output.body, context),
    };
    const errorCode = core$1.loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchUpload":
        case "com.amazonaws.s3#NoSuchUpload":
            throw await de_NoSuchUploadRes(parsedOutput);
        case "ObjectNotInActiveTierError":
        case "com.amazonaws.s3#ObjectNotInActiveTierError":
            throw await de_ObjectNotInActiveTierErrorRes(parsedOutput);
        case "BucketAlreadyExists":
        case "com.amazonaws.s3#BucketAlreadyExists":
            throw await de_BucketAlreadyExistsRes(parsedOutput);
        case "BucketAlreadyOwnedByYou":
        case "com.amazonaws.s3#BucketAlreadyOwnedByYou":
            throw await de_BucketAlreadyOwnedByYouRes(parsedOutput);
        case "NoSuchBucket":
        case "com.amazonaws.s3#NoSuchBucket":
            throw await de_NoSuchBucketRes(parsedOutput);
        case "InvalidObjectState":
        case "com.amazonaws.s3#InvalidObjectState":
            throw await de_InvalidObjectStateRes(parsedOutput);
        case "NoSuchKey":
        case "com.amazonaws.s3#NoSuchKey":
            throw await de_NoSuchKeyRes(parsedOutput);
        case "NotFound":
        case "com.amazonaws.s3#NotFound":
            throw await de_NotFoundRes(parsedOutput);
        case "EncryptionTypeMismatch":
        case "com.amazonaws.s3#EncryptionTypeMismatch":
            throw await de_EncryptionTypeMismatchRes(parsedOutput);
        case "InvalidRequest":
        case "com.amazonaws.s3#InvalidRequest":
            throw await de_InvalidRequestRes(parsedOutput);
        case "InvalidWriteOffset":
        case "com.amazonaws.s3#InvalidWriteOffset":
            throw await de_InvalidWriteOffsetRes(parsedOutput);
        case "TooManyParts":
        case "com.amazonaws.s3#TooManyParts":
            throw await de_TooManyPartsRes(parsedOutput);
        case "IdempotencyParameterMismatch":
        case "com.amazonaws.s3#IdempotencyParameterMismatch":
            throw await de_IdempotencyParameterMismatchRes(parsedOutput);
        case "ObjectAlreadyInActiveTierError":
        case "com.amazonaws.s3#ObjectAlreadyInActiveTierError":
            throw await de_ObjectAlreadyInActiveTierErrorRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const throwDefaultError = smithyClient.withBaseException(S3ServiceException);
const de_BucketAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = smithyClient.map({});
    parsedOutput.body;
    const exception = new BucketAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return smithyClient.decorateServiceException(exception, parsedOutput.body);
};
const de_BucketAlreadyOwnedByYouRes = async (parsedOutput, context) => {
    const contents = smithyClient.map({});
    parsedOutput.body;
    const exception = new BucketAlreadyOwnedByYou({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return smithyClient.decorateServiceException(exception, parsedOutput.body);
};
const de_EncryptionTypeMismatchRes = async (parsedOutput, context) => {
    const contents = smithyClient.map({});
    parsedOutput.body;
    const exception = new EncryptionTypeMismatch({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return smithyClient.decorateServiceException(exception, parsedOutput.body);
};
const de_IdempotencyParameterMismatchRes = async (parsedOutput, context) => {
    const contents = smithyClient.map({});
    parsedOutput.body;
    const exception = new IdempotencyParameterMismatch({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return smithyClient.decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidObjectStateRes = async (parsedOutput, context) => {
    const contents = smithyClient.map({});
    const data = parsedOutput.body;
    if (data[_AT] != null) {
        contents[_AT] = smithyClient.expectString(data[_AT]);
    }
    if (data[_SC] != null) {
        contents[_SC] = smithyClient.expectString(data[_SC]);
    }
    const exception = new InvalidObjectState({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return smithyClient.decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidRequestRes = async (parsedOutput, context) => {
    const contents = smithyClient.map({});
    parsedOutput.body;
    const exception = new InvalidRequest({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return smithyClient.decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidWriteOffsetRes = async (parsedOutput, context) => {
    const contents = smithyClient.map({});
    parsedOutput.body;
    const exception = new InvalidWriteOffset({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return smithyClient.decorateServiceException(exception, parsedOutput.body);
};
const de_NoSuchBucketRes = async (parsedOutput, context) => {
    const contents = smithyClient.map({});
    parsedOutput.body;
    const exception = new NoSuchBucket({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return smithyClient.decorateServiceException(exception, parsedOutput.body);
};
const de_NoSuchKeyRes = async (parsedOutput, context) => {
    const contents = smithyClient.map({});
    parsedOutput.body;
    const exception = new NoSuchKey({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return smithyClient.decorateServiceException(exception, parsedOutput.body);
};
const de_NoSuchUploadRes = async (parsedOutput, context) => {
    const contents = smithyClient.map({});
    parsedOutput.body;
    const exception = new NoSuchUpload({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return smithyClient.decorateServiceException(exception, parsedOutput.body);
};
const de_NotFoundRes = async (parsedOutput, context) => {
    const contents = smithyClient.map({});
    parsedOutput.body;
    const exception = new NotFound({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return smithyClient.decorateServiceException(exception, parsedOutput.body);
};
const de_ObjectAlreadyInActiveTierErrorRes = async (parsedOutput, context) => {
    const contents = smithyClient.map({});
    parsedOutput.body;
    const exception = new ObjectAlreadyInActiveTierError({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return smithyClient.decorateServiceException(exception, parsedOutput.body);
};
const de_ObjectNotInActiveTierErrorRes = async (parsedOutput, context) => {
    const contents = smithyClient.map({});
    parsedOutput.body;
    const exception = new ObjectNotInActiveTierError({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return smithyClient.decorateServiceException(exception, parsedOutput.body);
};
const de_TooManyPartsRes = async (parsedOutput, context) => {
    const contents = smithyClient.map({});
    parsedOutput.body;
    const exception = new TooManyParts({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return smithyClient.decorateServiceException(exception, parsedOutput.body);
};
const de_SelectObjectContentEventStream = (output, context) => {
    return context.eventStreamMarshaller.deserialize(output, async (event) => {
        if (event["Records"] != null) {
            return {
                Records: await de_RecordsEvent_event(event["Records"]),
            };
        }
        if (event["Stats"] != null) {
            return {
                Stats: await de_StatsEvent_event(event["Stats"], context),
            };
        }
        if (event["Progress"] != null) {
            return {
                Progress: await de_ProgressEvent_event(event["Progress"], context),
            };
        }
        if (event["Cont"] != null) {
            return {
                Cont: await de_ContinuationEvent_event(event["Cont"], context),
            };
        }
        if (event["End"] != null) {
            return {
                End: await de_EndEvent_event(event["End"], context),
            };
        }
        return { $unknown: event };
    });
};
const de_ContinuationEvent_event = async (output, context) => {
    const contents = {};
    await core$1.parseXmlBody(output.body, context);
    Object.assign(contents, de_ContinuationEvent());
    return contents;
};
const de_EndEvent_event = async (output, context) => {
    const contents = {};
    await core$1.parseXmlBody(output.body, context);
    Object.assign(contents, de_EndEvent());
    return contents;
};
const de_ProgressEvent_event = async (output, context) => {
    const contents = {};
    const data = await core$1.parseXmlBody(output.body, context);
    contents.Details = de_Progress(data);
    return contents;
};
const de_RecordsEvent_event = async (output, context) => {
    const contents = {};
    contents.Payload = output.body;
    return contents;
};
const de_StatsEvent_event = async (output, context) => {
    const contents = {};
    const data = await core$1.parseXmlBody(output.body, context);
    contents.Details = de_Stats(data);
    return contents;
};
const se_AbortIncompleteMultipartUpload = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_AIMU);
    if (input[_DAI] != null) {
        bn.c(xmlBuilder.XmlNode.of(_DAI, String(input[_DAI])).n(_DAI));
    }
    return bn;
};
const se_AccelerateConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_ACc);
    if (input[_S] != null) {
        bn.c(xmlBuilder.XmlNode.of(_BAS, input[_S]).n(_S));
    }
    return bn;
};
const se_AccessControlPolicy = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_ACP);
    bn.lc(input, "Grants", "AccessControlList", () => se_Grants(input[_Gr]));
    if (input[_O] != null) {
        bn.c(se_Owner(input[_O]).n(_O));
    }
    return bn;
};
const se_AccessControlTranslation = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_ACT);
    if (input[_O] != null) {
        bn.c(xmlBuilder.XmlNode.of(_OOw, input[_O]).n(_O));
    }
    return bn;
};
const se_AllowedHeaders = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = xmlBuilder.XmlNode.of(_AH, entry);
        return n.n(_me);
    });
};
const se_AllowedMethods = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = xmlBuilder.XmlNode.of(_AM, entry);
        return n.n(_me);
    });
};
const se_AllowedOrigins = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = xmlBuilder.XmlNode.of(_AO, entry);
        return n.n(_me);
    });
};
const se_AnalyticsAndOperator = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_AAO);
    bn.cc(input, _P);
    bn.l(input, "Tags", "Tag", () => se_TagSet(input[_Tag]));
    return bn;
};
const se_AnalyticsConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_AC);
    if (input[_I] != null) {
        bn.c(xmlBuilder.XmlNode.of(_AI, input[_I]).n(_I));
    }
    if (input[_F] != null) {
        bn.c(se_AnalyticsFilter(input[_F]).n(_F));
    }
    if (input[_SCA] != null) {
        bn.c(se_StorageClassAnalysis(input[_SCA]).n(_SCA));
    }
    return bn;
};
const se_AnalyticsExportDestination = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_AED);
    if (input[_SBD] != null) {
        bn.c(se_AnalyticsS3BucketDestination(input[_SBD]).n(_SBD));
    }
    return bn;
};
const se_AnalyticsFilter = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_AF);
    exports.AnalyticsFilter.visit(input, {
        Prefix: (value) => {
            if (input[_P] != null) {
                bn.c(xmlBuilder.XmlNode.of(_P, value).n(_P));
            }
        },
        Tag: (value) => {
            if (input[_Ta] != null) {
                bn.c(se_Tag(value).n(_Ta));
            }
        },
        And: (value) => {
            if (input[_A] != null) {
                bn.c(se_AnalyticsAndOperator(value).n(_A));
            }
        },
        _: (name, value) => {
            if (!(value instanceof xmlBuilder.XmlNode || value instanceof xmlBuilder.XmlText)) {
                throw new Error("Unable to serialize unknown union members in XML.");
            }
            bn.c(new xmlBuilder.XmlNode(name).c(value));
        },
    });
    return bn;
};
const se_AnalyticsS3BucketDestination = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_ASBD);
    if (input[_Fo] != null) {
        bn.c(xmlBuilder.XmlNode.of(_ASEFF, input[_Fo]).n(_Fo));
    }
    if (input[_BAI] != null) {
        bn.c(xmlBuilder.XmlNode.of(_AIc, input[_BAI]).n(_BAI));
    }
    if (input[_B] != null) {
        bn.c(xmlBuilder.XmlNode.of(_BN, input[_B]).n(_B));
    }
    bn.cc(input, _P);
    return bn;
};
const se_BucketInfo = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_BI);
    bn.cc(input, _DR);
    if (input[_Ty] != null) {
        bn.c(xmlBuilder.XmlNode.of(_BT, input[_Ty]).n(_Ty));
    }
    return bn;
};
const se_BucketLifecycleConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_BLC);
    bn.l(input, "Rules", "Rule", () => se_LifecycleRules(input[_Rul]));
    return bn;
};
const se_BucketLoggingStatus = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_BLS);
    if (input[_LE] != null) {
        bn.c(se_LoggingEnabled(input[_LE]).n(_LE));
    }
    return bn;
};
const se_CompletedMultipartUpload = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_CMU);
    bn.l(input, "Parts", "Part", () => se_CompletedPartList(input[_Part]));
    return bn;
};
const se_CompletedPart = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_CPo);
    bn.cc(input, _ETa);
    bn.cc(input, _CCRC);
    bn.cc(input, _CCRCC);
    bn.cc(input, _CCRCNVME);
    bn.cc(input, _CSHA);
    bn.cc(input, _CSHAh);
    if (input[_PN] != null) {
        bn.c(xmlBuilder.XmlNode.of(_PN, String(input[_PN])).n(_PN));
    }
    return bn;
};
const se_CompletedPartList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_CompletedPart(entry);
        return n.n(_me);
    });
};
const se_Condition = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_Con);
    bn.cc(input, _HECRE);
    bn.cc(input, _KPE);
    return bn;
};
const se_CORSConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_CORSC);
    bn.l(input, "CORSRules", "CORSRule", () => se_CORSRules(input[_CORSRu]));
    return bn;
};
const se_CORSRule = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_CORSR);
    bn.cc(input, _ID_);
    bn.l(input, "AllowedHeaders", "AllowedHeader", () => se_AllowedHeaders(input[_AHl]));
    bn.l(input, "AllowedMethods", "AllowedMethod", () => se_AllowedMethods(input[_AMl]));
    bn.l(input, "AllowedOrigins", "AllowedOrigin", () => se_AllowedOrigins(input[_AOl]));
    bn.l(input, "ExposeHeaders", "ExposeHeader", () => se_ExposeHeaders(input[_EH]));
    if (input[_MAS] != null) {
        bn.c(xmlBuilder.XmlNode.of(_MAS, String(input[_MAS])).n(_MAS));
    }
    return bn;
};
const se_CORSRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_CORSRule(entry);
        return n.n(_me);
    });
};
const se_CreateBucketConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_CBC);
    if (input[_LC] != null) {
        bn.c(xmlBuilder.XmlNode.of(_BLCu, input[_LC]).n(_LC));
    }
    if (input[_L] != null) {
        bn.c(se_LocationInfo(input[_L]).n(_L));
    }
    if (input[_B] != null) {
        bn.c(se_BucketInfo(input[_B]).n(_B));
    }
    bn.lc(input, "Tags", "Tags", () => se_TagSet(input[_Tag]));
    return bn;
};
const se_CSVInput = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_CSVIn);
    bn.cc(input, _FHI);
    bn.cc(input, _Com);
    bn.cc(input, _QEC);
    bn.cc(input, _RD);
    bn.cc(input, _FD);
    bn.cc(input, _QCuo);
    if (input[_AQRD] != null) {
        bn.c(xmlBuilder.XmlNode.of(_AQRD, String(input[_AQRD])).n(_AQRD));
    }
    return bn;
};
const se_CSVOutput = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_CSVO);
    bn.cc(input, _QF);
    bn.cc(input, _QEC);
    bn.cc(input, _RD);
    bn.cc(input, _FD);
    bn.cc(input, _QCuo);
    return bn;
};
const se_DefaultRetention = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_DRe);
    if (input[_Mo] != null) {
        bn.c(xmlBuilder.XmlNode.of(_OLRM, input[_Mo]).n(_Mo));
    }
    if (input[_Da] != null) {
        bn.c(xmlBuilder.XmlNode.of(_Da, String(input[_Da])).n(_Da));
    }
    if (input[_Y] != null) {
        bn.c(xmlBuilder.XmlNode.of(_Y, String(input[_Y])).n(_Y));
    }
    return bn;
};
const se_Delete = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_Del);
    bn.l(input, "Objects", "Object", () => se_ObjectIdentifierList(input[_Ob]));
    if (input[_Q] != null) {
        bn.c(xmlBuilder.XmlNode.of(_Q, String(input[_Q])).n(_Q));
    }
    return bn;
};
const se_DeleteMarkerReplication = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_DMR);
    if (input[_S] != null) {
        bn.c(xmlBuilder.XmlNode.of(_DMRS, input[_S]).n(_S));
    }
    return bn;
};
const se_Destination = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_Des);
    if (input[_B] != null) {
        bn.c(xmlBuilder.XmlNode.of(_BN, input[_B]).n(_B));
    }
    if (input[_Ac] != null) {
        bn.c(xmlBuilder.XmlNode.of(_AIc, input[_Ac]).n(_Ac));
    }
    bn.cc(input, _SC);
    if (input[_ACT] != null) {
        bn.c(se_AccessControlTranslation(input[_ACT]).n(_ACT));
    }
    if (input[_ECn] != null) {
        bn.c(se_EncryptionConfiguration(input[_ECn]).n(_ECn));
    }
    if (input[_RTe] != null) {
        bn.c(se_ReplicationTime(input[_RTe]).n(_RTe));
    }
    if (input[_Me] != null) {
        bn.c(se_Metrics(input[_Me]).n(_Me));
    }
    return bn;
};
const se_Encryption = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_En);
    if (input[_ETn] != null) {
        bn.c(xmlBuilder.XmlNode.of(_SSE, input[_ETn]).n(_ETn));
    }
    if (input[_KMSKI] != null) {
        bn.c(xmlBuilder.XmlNode.of(_SSEKMSKI, input[_KMSKI]).n(_KMSKI));
    }
    bn.cc(input, _KMSC);
    return bn;
};
const se_EncryptionConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_ECn);
    bn.cc(input, _RKKID);
    return bn;
};
const se_ErrorDocument = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_ED);
    if (input[_K] != null) {
        bn.c(xmlBuilder.XmlNode.of(_OK, input[_K]).n(_K));
    }
    return bn;
};
const se_EventBridgeConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_EBC);
    return bn;
};
const se_EventList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = xmlBuilder.XmlNode.of(_Ev, entry);
        return n.n(_me);
    });
};
const se_ExistingObjectReplication = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_EOR);
    if (input[_S] != null) {
        bn.c(xmlBuilder.XmlNode.of(_EORS, input[_S]).n(_S));
    }
    return bn;
};
const se_ExposeHeaders = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = xmlBuilder.XmlNode.of(_EHx, entry);
        return n.n(_me);
    });
};
const se_FilterRule = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_FR);
    if (input[_N] != null) {
        bn.c(xmlBuilder.XmlNode.of(_FRN, input[_N]).n(_N));
    }
    if (input[_Va] != null) {
        bn.c(xmlBuilder.XmlNode.of(_FRV, input[_Va]).n(_Va));
    }
    return bn;
};
const se_FilterRuleList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_FilterRule(entry);
        return n.n(_me);
    });
};
const se_GlacierJobParameters = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_GJP);
    bn.cc(input, _Ti);
    return bn;
};
const se_Grant = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_G);
    if (input[_Gra] != null) {
        const n = se_Grantee(input[_Gra]).n(_Gra);
        n.a("xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        bn.c(n);
    }
    bn.cc(input, _Pe);
    return bn;
};
const se_Grantee = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_Gra);
    bn.cc(input, _DN);
    bn.cc(input, _EA);
    bn.cc(input, _ID_);
    bn.cc(input, _URI);
    bn.a("xsi:type", input[_Ty]);
    return bn;
};
const se_Grants = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_Grant(entry);
        return n.n(_G);
    });
};
const se_IndexDocument = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_ID);
    bn.cc(input, _Su);
    return bn;
};
const se_InputSerialization = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_IS);
    if (input[_CSV] != null) {
        bn.c(se_CSVInput(input[_CSV]).n(_CSV));
    }
    bn.cc(input, _CTom);
    if (input[_JSON] != null) {
        bn.c(se_JSONInput(input[_JSON]).n(_JSON));
    }
    if (input[_Parq] != null) {
        bn.c(se_ParquetInput(input[_Parq]).n(_Parq));
    }
    return bn;
};
const se_IntelligentTieringAndOperator = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_ITAO);
    bn.cc(input, _P);
    bn.l(input, "Tags", "Tag", () => se_TagSet(input[_Tag]));
    return bn;
};
const se_IntelligentTieringConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_ITC);
    if (input[_I] != null) {
        bn.c(xmlBuilder.XmlNode.of(_ITI, input[_I]).n(_I));
    }
    if (input[_F] != null) {
        bn.c(se_IntelligentTieringFilter(input[_F]).n(_F));
    }
    if (input[_S] != null) {
        bn.c(xmlBuilder.XmlNode.of(_ITS, input[_S]).n(_S));
    }
    bn.l(input, "Tierings", "Tiering", () => se_TieringList(input[_Tie]));
    return bn;
};
const se_IntelligentTieringFilter = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_ITF);
    bn.cc(input, _P);
    if (input[_Ta] != null) {
        bn.c(se_Tag(input[_Ta]).n(_Ta));
    }
    if (input[_A] != null) {
        bn.c(se_IntelligentTieringAndOperator(input[_A]).n(_A));
    }
    return bn;
};
const se_InventoryConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_IC);
    if (input[_Des] != null) {
        bn.c(se_InventoryDestination(input[_Des]).n(_Des));
    }
    if (input[_IE] != null) {
        bn.c(xmlBuilder.XmlNode.of(_IE, String(input[_IE])).n(_IE));
    }
    if (input[_F] != null) {
        bn.c(se_InventoryFilter(input[_F]).n(_F));
    }
    if (input[_I] != null) {
        bn.c(xmlBuilder.XmlNode.of(_II, input[_I]).n(_I));
    }
    if (input[_IOV] != null) {
        bn.c(xmlBuilder.XmlNode.of(_IIOV, input[_IOV]).n(_IOV));
    }
    bn.lc(input, "OptionalFields", "OptionalFields", () => se_InventoryOptionalFields(input[_OF]));
    if (input[_Sc] != null) {
        bn.c(se_InventorySchedule(input[_Sc]).n(_Sc));
    }
    return bn;
};
const se_InventoryDestination = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_IDn);
    if (input[_SBD] != null) {
        bn.c(se_InventoryS3BucketDestination(input[_SBD]).n(_SBD));
    }
    return bn;
};
const se_InventoryEncryption = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_IEn);
    if (input[_SSES] != null) {
        bn.c(se_SSES3(input[_SSES]).n(_SS));
    }
    if (input[_SSEKMS] != null) {
        bn.c(se_SSEKMS(input[_SSEKMS]).n(_SK));
    }
    return bn;
};
const se_InventoryFilter = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_IF);
    bn.cc(input, _P);
    return bn;
};
const se_InventoryOptionalFields = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = xmlBuilder.XmlNode.of(_IOF, entry);
        return n.n(_Fi);
    });
};
const se_InventoryS3BucketDestination = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_ISBD);
    bn.cc(input, _AIc);
    if (input[_B] != null) {
        bn.c(xmlBuilder.XmlNode.of(_BN, input[_B]).n(_B));
    }
    if (input[_Fo] != null) {
        bn.c(xmlBuilder.XmlNode.of(_IFn, input[_Fo]).n(_Fo));
    }
    bn.cc(input, _P);
    if (input[_En] != null) {
        bn.c(se_InventoryEncryption(input[_En]).n(_En));
    }
    return bn;
};
const se_InventorySchedule = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_ISn);
    if (input[_Fr] != null) {
        bn.c(xmlBuilder.XmlNode.of(_IFnv, input[_Fr]).n(_Fr));
    }
    return bn;
};
const se_InventoryTableConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_ITCn);
    if (input[_CSo] != null) {
        bn.c(xmlBuilder.XmlNode.of(_ICS, input[_CSo]).n(_CSo));
    }
    if (input[_ECn] != null) {
        bn.c(se_MetadataTableEncryptionConfiguration(input[_ECn]).n(_ECn));
    }
    return bn;
};
const se_InventoryTableConfigurationUpdates = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_ITCU);
    if (input[_CSo] != null) {
        bn.c(xmlBuilder.XmlNode.of(_ICS, input[_CSo]).n(_CSo));
    }
    if (input[_ECn] != null) {
        bn.c(se_MetadataTableEncryptionConfiguration(input[_ECn]).n(_ECn));
    }
    return bn;
};
const se_JournalTableConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_JTC);
    if (input[_REe] != null) {
        bn.c(se_RecordExpiration(input[_REe]).n(_REe));
    }
    if (input[_ECn] != null) {
        bn.c(se_MetadataTableEncryptionConfiguration(input[_ECn]).n(_ECn));
    }
    return bn;
};
const se_JournalTableConfigurationUpdates = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_JTCU);
    if (input[_REe] != null) {
        bn.c(se_RecordExpiration(input[_REe]).n(_REe));
    }
    return bn;
};
const se_JSONInput = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_JSONI);
    if (input[_Ty] != null) {
        bn.c(xmlBuilder.XmlNode.of(_JSONT, input[_Ty]).n(_Ty));
    }
    return bn;
};
const se_JSONOutput = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_JSONO);
    bn.cc(input, _RD);
    return bn;
};
const se_LambdaFunctionConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_LFCa);
    if (input[_I] != null) {
        bn.c(xmlBuilder.XmlNode.of(_NI, input[_I]).n(_I));
    }
    if (input[_LFA] != null) {
        bn.c(xmlBuilder.XmlNode.of(_LFA, input[_LFA]).n(_CF));
    }
    bn.l(input, "Events", "Event", () => se_EventList(input[_Eve]));
    if (input[_F] != null) {
        bn.c(se_NotificationConfigurationFilter(input[_F]).n(_F));
    }
    return bn;
};
const se_LambdaFunctionConfigurationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_LambdaFunctionConfiguration(entry);
        return n.n(_me);
    });
};
const se_LifecycleExpiration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_LEi);
    if (input[_Dat] != null) {
        bn.c(xmlBuilder.XmlNode.of(_Dat, smithyClient.serializeDateTime(input[_Dat]).toString()).n(_Dat));
    }
    if (input[_Da] != null) {
        bn.c(xmlBuilder.XmlNode.of(_Da, String(input[_Da])).n(_Da));
    }
    if (input[_EODM] != null) {
        bn.c(xmlBuilder.XmlNode.of(_EODM, String(input[_EODM])).n(_EODM));
    }
    return bn;
};
const se_LifecycleRule = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_LR);
    if (input[_Exp] != null) {
        bn.c(se_LifecycleExpiration(input[_Exp]).n(_Exp));
    }
    bn.cc(input, _ID_);
    bn.cc(input, _P);
    if (input[_F] != null) {
        bn.c(se_LifecycleRuleFilter(input[_F]).n(_F));
    }
    if (input[_S] != null) {
        bn.c(xmlBuilder.XmlNode.of(_ESx, input[_S]).n(_S));
    }
    bn.l(input, "Transitions", "Transition", () => se_TransitionList(input[_Tr]));
    bn.l(input, "NoncurrentVersionTransitions", "NoncurrentVersionTransition", () => se_NoncurrentVersionTransitionList(input[_NVT]));
    if (input[_NVE] != null) {
        bn.c(se_NoncurrentVersionExpiration(input[_NVE]).n(_NVE));
    }
    if (input[_AIMU] != null) {
        bn.c(se_AbortIncompleteMultipartUpload(input[_AIMU]).n(_AIMU));
    }
    return bn;
};
const se_LifecycleRuleAndOperator = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_LRAO);
    bn.cc(input, _P);
    bn.l(input, "Tags", "Tag", () => se_TagSet(input[_Tag]));
    if (input[_OSGT] != null) {
        bn.c(xmlBuilder.XmlNode.of(_OSGTB, String(input[_OSGT])).n(_OSGT));
    }
    if (input[_OSLT] != null) {
        bn.c(xmlBuilder.XmlNode.of(_OSLTB, String(input[_OSLT])).n(_OSLT));
    }
    return bn;
};
const se_LifecycleRuleFilter = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_LRF);
    bn.cc(input, _P);
    if (input[_Ta] != null) {
        bn.c(se_Tag(input[_Ta]).n(_Ta));
    }
    if (input[_OSGT] != null) {
        bn.c(xmlBuilder.XmlNode.of(_OSGTB, String(input[_OSGT])).n(_OSGT));
    }
    if (input[_OSLT] != null) {
        bn.c(xmlBuilder.XmlNode.of(_OSLTB, String(input[_OSLT])).n(_OSLT));
    }
    if (input[_A] != null) {
        bn.c(se_LifecycleRuleAndOperator(input[_A]).n(_A));
    }
    return bn;
};
const se_LifecycleRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_LifecycleRule(entry);
        return n.n(_me);
    });
};
const se_LocationInfo = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_LI);
    if (input[_Ty] != null) {
        bn.c(xmlBuilder.XmlNode.of(_LT, input[_Ty]).n(_Ty));
    }
    if (input[_N] != null) {
        bn.c(xmlBuilder.XmlNode.of(_LNAS, input[_N]).n(_N));
    }
    return bn;
};
const se_LoggingEnabled = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_LE);
    bn.cc(input, _TB);
    bn.lc(input, "TargetGrants", "TargetGrants", () => se_TargetGrants(input[_TG]));
    bn.cc(input, _TP);
    if (input[_TOKF] != null) {
        bn.c(se_TargetObjectKeyFormat(input[_TOKF]).n(_TOKF));
    }
    return bn;
};
const se_MetadataConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_MCe);
    if (input[_JTC] != null) {
        bn.c(se_JournalTableConfiguration(input[_JTC]).n(_JTC));
    }
    if (input[_ITCn] != null) {
        bn.c(se_InventoryTableConfiguration(input[_ITCn]).n(_ITCn));
    }
    return bn;
};
const se_MetadataEntry = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_ME);
    if (input[_N] != null) {
        bn.c(xmlBuilder.XmlNode.of(_MKe, input[_N]).n(_N));
    }
    if (input[_Va] != null) {
        bn.c(xmlBuilder.XmlNode.of(_MV, input[_Va]).n(_Va));
    }
    return bn;
};
const se_MetadataTableConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_MTC);
    if (input[_STD] != null) {
        bn.c(se_S3TablesDestination(input[_STD]).n(_STD));
    }
    return bn;
};
const se_MetadataTableEncryptionConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_MTEC);
    if (input[_SAs] != null) {
        bn.c(xmlBuilder.XmlNode.of(_TSA, input[_SAs]).n(_SAs));
    }
    bn.cc(input, _KKA);
    return bn;
};
const se_Metrics = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_Me);
    if (input[_S] != null) {
        bn.c(xmlBuilder.XmlNode.of(_MS, input[_S]).n(_S));
    }
    if (input[_ETv] != null) {
        bn.c(se_ReplicationTimeValue(input[_ETv]).n(_ETv));
    }
    return bn;
};
const se_MetricsAndOperator = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_MAO);
    bn.cc(input, _P);
    bn.l(input, "Tags", "Tag", () => se_TagSet(input[_Tag]));
    bn.cc(input, _APAc);
    return bn;
};
const se_MetricsConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_MC);
    if (input[_I] != null) {
        bn.c(xmlBuilder.XmlNode.of(_MI, input[_I]).n(_I));
    }
    if (input[_F] != null) {
        bn.c(se_MetricsFilter(input[_F]).n(_F));
    }
    return bn;
};
const se_MetricsFilter = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_MF);
    exports.MetricsFilter.visit(input, {
        Prefix: (value) => {
            if (input[_P] != null) {
                bn.c(xmlBuilder.XmlNode.of(_P, value).n(_P));
            }
        },
        Tag: (value) => {
            if (input[_Ta] != null) {
                bn.c(se_Tag(value).n(_Ta));
            }
        },
        AccessPointArn: (value) => {
            if (input[_APAc] != null) {
                bn.c(xmlBuilder.XmlNode.of(_APAc, value).n(_APAc));
            }
        },
        And: (value) => {
            if (input[_A] != null) {
                bn.c(se_MetricsAndOperator(value).n(_A));
            }
        },
        _: (name, value) => {
            if (!(value instanceof xmlBuilder.XmlNode || value instanceof xmlBuilder.XmlText)) {
                throw new Error("Unable to serialize unknown union members in XML.");
            }
            bn.c(new xmlBuilder.XmlNode(name).c(value));
        },
    });
    return bn;
};
const se_NoncurrentVersionExpiration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_NVE);
    if (input[_ND] != null) {
        bn.c(xmlBuilder.XmlNode.of(_Da, String(input[_ND])).n(_ND));
    }
    if (input[_NNV] != null) {
        bn.c(xmlBuilder.XmlNode.of(_VC, String(input[_NNV])).n(_NNV));
    }
    return bn;
};
const se_NoncurrentVersionTransition = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_NVTo);
    if (input[_ND] != null) {
        bn.c(xmlBuilder.XmlNode.of(_Da, String(input[_ND])).n(_ND));
    }
    if (input[_SC] != null) {
        bn.c(xmlBuilder.XmlNode.of(_TSC, input[_SC]).n(_SC));
    }
    if (input[_NNV] != null) {
        bn.c(xmlBuilder.XmlNode.of(_VC, String(input[_NNV])).n(_NNV));
    }
    return bn;
};
const se_NoncurrentVersionTransitionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_NoncurrentVersionTransition(entry);
        return n.n(_me);
    });
};
const se_NotificationConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_NC);
    bn.l(input, "TopicConfigurations", "TopicConfiguration", () => se_TopicConfigurationList(input[_TCop]));
    bn.l(input, "QueueConfigurations", "QueueConfiguration", () => se_QueueConfigurationList(input[_QCu]));
    bn.l(input, "LambdaFunctionConfigurations", "CloudFunctionConfiguration", () => se_LambdaFunctionConfigurationList(input[_LFC]));
    if (input[_EBC] != null) {
        bn.c(se_EventBridgeConfiguration(input[_EBC]).n(_EBC));
    }
    return bn;
};
const se_NotificationConfigurationFilter = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_NCF);
    if (input[_K] != null) {
        bn.c(se_S3KeyFilter(input[_K]).n(_SKe));
    }
    return bn;
};
const se_ObjectIdentifier = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_OI);
    if (input[_K] != null) {
        bn.c(xmlBuilder.XmlNode.of(_OK, input[_K]).n(_K));
    }
    if (input[_VI] != null) {
        bn.c(xmlBuilder.XmlNode.of(_OVI, input[_VI]).n(_VI));
    }
    bn.cc(input, _ETa);
    if (input[_LMT] != null) {
        bn.c(xmlBuilder.XmlNode.of(_LMT, smithyClient.dateToUtcString(input[_LMT]).toString()).n(_LMT));
    }
    if (input[_Si] != null) {
        bn.c(xmlBuilder.XmlNode.of(_Si, String(input[_Si])).n(_Si));
    }
    return bn;
};
const se_ObjectIdentifierList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_ObjectIdentifier(entry);
        return n.n(_me);
    });
};
const se_ObjectLockConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_OLC);
    bn.cc(input, _OLE);
    if (input[_Ru] != null) {
        bn.c(se_ObjectLockRule(input[_Ru]).n(_Ru));
    }
    return bn;
};
const se_ObjectLockLegalHold = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_OLLH);
    if (input[_S] != null) {
        bn.c(xmlBuilder.XmlNode.of(_OLLHS, input[_S]).n(_S));
    }
    return bn;
};
const se_ObjectLockRetention = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_OLR);
    if (input[_Mo] != null) {
        bn.c(xmlBuilder.XmlNode.of(_OLRM, input[_Mo]).n(_Mo));
    }
    if (input[_RUD] != null) {
        bn.c(xmlBuilder.XmlNode.of(_Dat, smithyClient.serializeDateTime(input[_RUD]).toString()).n(_RUD));
    }
    return bn;
};
const se_ObjectLockRule = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_OLRb);
    if (input[_DRe] != null) {
        bn.c(se_DefaultRetention(input[_DRe]).n(_DRe));
    }
    return bn;
};
const se_OutputLocation = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_OL);
    if (input[_S_] != null) {
        bn.c(se_S3Location(input[_S_]).n(_S_));
    }
    return bn;
};
const se_OutputSerialization = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_OS);
    if (input[_CSV] != null) {
        bn.c(se_CSVOutput(input[_CSV]).n(_CSV));
    }
    if (input[_JSON] != null) {
        bn.c(se_JSONOutput(input[_JSON]).n(_JSON));
    }
    return bn;
};
const se_Owner = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_O);
    bn.cc(input, _DN);
    bn.cc(input, _ID_);
    return bn;
};
const se_OwnershipControls = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_OC);
    bn.l(input, "Rules", "Rule", () => se_OwnershipControlsRules(input[_Rul]));
    return bn;
};
const se_OwnershipControlsRule = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_OCR);
    bn.cc(input, _OO);
    return bn;
};
const se_OwnershipControlsRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_OwnershipControlsRule(entry);
        return n.n(_me);
    });
};
const se_ParquetInput = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_PI);
    return bn;
};
const se_PartitionedPrefix = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_PP);
    bn.cc(input, _PDS);
    return bn;
};
const se_PublicAccessBlockConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_PABC);
    if (input[_BPA] != null) {
        bn.c(xmlBuilder.XmlNode.of(_Se, String(input[_BPA])).n(_BPA));
    }
    if (input[_IPA] != null) {
        bn.c(xmlBuilder.XmlNode.of(_Se, String(input[_IPA])).n(_IPA));
    }
    if (input[_BPP] != null) {
        bn.c(xmlBuilder.XmlNode.of(_Se, String(input[_BPP])).n(_BPP));
    }
    if (input[_RPB] != null) {
        bn.c(xmlBuilder.XmlNode.of(_Se, String(input[_RPB])).n(_RPB));
    }
    return bn;
};
const se_QueueConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_QC);
    if (input[_I] != null) {
        bn.c(xmlBuilder.XmlNode.of(_NI, input[_I]).n(_I));
    }
    if (input[_QA] != null) {
        bn.c(xmlBuilder.XmlNode.of(_QA, input[_QA]).n(_Qu));
    }
    bn.l(input, "Events", "Event", () => se_EventList(input[_Eve]));
    if (input[_F] != null) {
        bn.c(se_NotificationConfigurationFilter(input[_F]).n(_F));
    }
    return bn;
};
const se_QueueConfigurationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_QueueConfiguration(entry);
        return n.n(_me);
    });
};
const se_RecordExpiration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_REe);
    if (input[_Exp] != null) {
        bn.c(xmlBuilder.XmlNode.of(_ESxp, input[_Exp]).n(_Exp));
    }
    if (input[_Da] != null) {
        bn.c(xmlBuilder.XmlNode.of(_RED, String(input[_Da])).n(_Da));
    }
    return bn;
};
const se_Redirect = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_Red);
    bn.cc(input, _HN);
    bn.cc(input, _HRC);
    bn.cc(input, _Pr);
    bn.cc(input, _RKPW);
    bn.cc(input, _RKW);
    return bn;
};
const se_RedirectAllRequestsTo = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_RART);
    bn.cc(input, _HN);
    bn.cc(input, _Pr);
    return bn;
};
const se_ReplicaModifications = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_RM);
    if (input[_S] != null) {
        bn.c(xmlBuilder.XmlNode.of(_RMS, input[_S]).n(_S));
    }
    return bn;
};
const se_ReplicationConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_RCe);
    bn.cc(input, _Ro);
    bn.l(input, "Rules", "Rule", () => se_ReplicationRules(input[_Rul]));
    return bn;
};
const se_ReplicationRule = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_RRe);
    bn.cc(input, _ID_);
    if (input[_Pri] != null) {
        bn.c(xmlBuilder.XmlNode.of(_Pri, String(input[_Pri])).n(_Pri));
    }
    bn.cc(input, _P);
    if (input[_F] != null) {
        bn.c(se_ReplicationRuleFilter(input[_F]).n(_F));
    }
    if (input[_S] != null) {
        bn.c(xmlBuilder.XmlNode.of(_RRS, input[_S]).n(_S));
    }
    if (input[_SSC] != null) {
        bn.c(se_SourceSelectionCriteria(input[_SSC]).n(_SSC));
    }
    if (input[_EOR] != null) {
        bn.c(se_ExistingObjectReplication(input[_EOR]).n(_EOR));
    }
    if (input[_Des] != null) {
        bn.c(se_Destination(input[_Des]).n(_Des));
    }
    if (input[_DMR] != null) {
        bn.c(se_DeleteMarkerReplication(input[_DMR]).n(_DMR));
    }
    return bn;
};
const se_ReplicationRuleAndOperator = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_RRAO);
    bn.cc(input, _P);
    bn.l(input, "Tags", "Tag", () => se_TagSet(input[_Tag]));
    return bn;
};
const se_ReplicationRuleFilter = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_RRF);
    bn.cc(input, _P);
    if (input[_Ta] != null) {
        bn.c(se_Tag(input[_Ta]).n(_Ta));
    }
    if (input[_A] != null) {
        bn.c(se_ReplicationRuleAndOperator(input[_A]).n(_A));
    }
    return bn;
};
const se_ReplicationRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_ReplicationRule(entry);
        return n.n(_me);
    });
};
const se_ReplicationTime = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_RTe);
    if (input[_S] != null) {
        bn.c(xmlBuilder.XmlNode.of(_RTS, input[_S]).n(_S));
    }
    if (input[_Tim] != null) {
        bn.c(se_ReplicationTimeValue(input[_Tim]).n(_Tim));
    }
    return bn;
};
const se_ReplicationTimeValue = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_RTV);
    if (input[_Mi] != null) {
        bn.c(xmlBuilder.XmlNode.of(_Mi, String(input[_Mi])).n(_Mi));
    }
    return bn;
};
const se_RequestPaymentConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_RPC);
    bn.cc(input, _Pa);
    return bn;
};
const se_RequestProgress = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_RPe);
    if (input[_Ena] != null) {
        bn.c(xmlBuilder.XmlNode.of(_ERP, String(input[_Ena])).n(_Ena));
    }
    return bn;
};
const se_RestoreRequest = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_RRes);
    if (input[_Da] != null) {
        bn.c(xmlBuilder.XmlNode.of(_Da, String(input[_Da])).n(_Da));
    }
    if (input[_GJP] != null) {
        bn.c(se_GlacierJobParameters(input[_GJP]).n(_GJP));
    }
    if (input[_Ty] != null) {
        bn.c(xmlBuilder.XmlNode.of(_RRT, input[_Ty]).n(_Ty));
    }
    bn.cc(input, _Ti);
    bn.cc(input, _Desc);
    if (input[_SP] != null) {
        bn.c(se_SelectParameters(input[_SP]).n(_SP));
    }
    if (input[_OL] != null) {
        bn.c(se_OutputLocation(input[_OL]).n(_OL));
    }
    return bn;
};
const se_RoutingRule = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_RRou);
    if (input[_Con] != null) {
        bn.c(se_Condition(input[_Con]).n(_Con));
    }
    if (input[_Red] != null) {
        bn.c(se_Redirect(input[_Red]).n(_Red));
    }
    return bn;
};
const se_RoutingRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_RoutingRule(entry);
        return n.n(_RRou);
    });
};
const se_S3KeyFilter = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_SKF);
    bn.l(input, "FilterRules", "FilterRule", () => se_FilterRuleList(input[_FRi]));
    return bn;
};
const se_S3Location = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_SL);
    bn.cc(input, _BN);
    if (input[_P] != null) {
        bn.c(xmlBuilder.XmlNode.of(_LP, input[_P]).n(_P));
    }
    if (input[_En] != null) {
        bn.c(se_Encryption(input[_En]).n(_En));
    }
    if (input[_CACL] != null) {
        bn.c(xmlBuilder.XmlNode.of(_OCACL, input[_CACL]).n(_CACL));
    }
    bn.lc(input, "AccessControlList", "AccessControlList", () => se_Grants(input[_ACLc]));
    if (input[_T] != null) {
        bn.c(se_Tagging(input[_T]).n(_T));
    }
    bn.lc(input, "UserMetadata", "UserMetadata", () => se_UserMetadata(input[_UM]));
    bn.cc(input, _SC);
    return bn;
};
const se_S3TablesDestination = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_STD);
    if (input[_TBA] != null) {
        bn.c(xmlBuilder.XmlNode.of(_STBA, input[_TBA]).n(_TBA));
    }
    if (input[_TN] != null) {
        bn.c(xmlBuilder.XmlNode.of(_STN, input[_TN]).n(_TN));
    }
    return bn;
};
const se_ScanRange = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_SR);
    if (input[_St] != null) {
        bn.c(xmlBuilder.XmlNode.of(_St, String(input[_St])).n(_St));
    }
    if (input[_End] != null) {
        bn.c(xmlBuilder.XmlNode.of(_End, String(input[_End])).n(_End));
    }
    return bn;
};
const se_SelectParameters = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_SP);
    if (input[_IS] != null) {
        bn.c(se_InputSerialization(input[_IS]).n(_IS));
    }
    bn.cc(input, _ETx);
    bn.cc(input, _Ex);
    if (input[_OS] != null) {
        bn.c(se_OutputSerialization(input[_OS]).n(_OS));
    }
    return bn;
};
const se_ServerSideEncryptionByDefault = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_SSEBD);
    if (input[_SSEA] != null) {
        bn.c(xmlBuilder.XmlNode.of(_SSE, input[_SSEA]).n(_SSEA));
    }
    if (input[_KMSMKID] != null) {
        bn.c(xmlBuilder.XmlNode.of(_SSEKMSKI, input[_KMSMKID]).n(_KMSMKID));
    }
    return bn;
};
const se_ServerSideEncryptionConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_SSEC);
    bn.l(input, "Rules", "Rule", () => se_ServerSideEncryptionRules(input[_Rul]));
    return bn;
};
const se_ServerSideEncryptionRule = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_SSER);
    if (input[_ASSEBD] != null) {
        bn.c(se_ServerSideEncryptionByDefault(input[_ASSEBD]).n(_ASSEBD));
    }
    if (input[_BKE] != null) {
        bn.c(xmlBuilder.XmlNode.of(_BKE, String(input[_BKE])).n(_BKE));
    }
    return bn;
};
const se_ServerSideEncryptionRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_ServerSideEncryptionRule(entry);
        return n.n(_me);
    });
};
const se_SimplePrefix = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_SPi);
    return bn;
};
const se_SourceSelectionCriteria = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_SSC);
    if (input[_SKEO] != null) {
        bn.c(se_SseKmsEncryptedObjects(input[_SKEO]).n(_SKEO));
    }
    if (input[_RM] != null) {
        bn.c(se_ReplicaModifications(input[_RM]).n(_RM));
    }
    return bn;
};
const se_SSEKMS = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_SK);
    if (input[_KI] != null) {
        bn.c(xmlBuilder.XmlNode.of(_SSEKMSKI, input[_KI]).n(_KI));
    }
    return bn;
};
const se_SseKmsEncryptedObjects = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_SKEO);
    if (input[_S] != null) {
        bn.c(xmlBuilder.XmlNode.of(_SKEOS, input[_S]).n(_S));
    }
    return bn;
};
const se_SSES3 = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_SS);
    return bn;
};
const se_StorageClassAnalysis = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_SCA);
    if (input[_DE] != null) {
        bn.c(se_StorageClassAnalysisDataExport(input[_DE]).n(_DE));
    }
    return bn;
};
const se_StorageClassAnalysisDataExport = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_SCADE);
    if (input[_OSV] != null) {
        bn.c(xmlBuilder.XmlNode.of(_SCASV, input[_OSV]).n(_OSV));
    }
    if (input[_Des] != null) {
        bn.c(se_AnalyticsExportDestination(input[_Des]).n(_Des));
    }
    return bn;
};
const se_Tag = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_Ta);
    if (input[_K] != null) {
        bn.c(xmlBuilder.XmlNode.of(_OK, input[_K]).n(_K));
    }
    bn.cc(input, _Va);
    return bn;
};
const se_Tagging = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_T);
    bn.lc(input, "TagSet", "TagSet", () => se_TagSet(input[_TS]));
    return bn;
};
const se_TagSet = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_Tag(entry);
        return n.n(_Ta);
    });
};
const se_TargetGrant = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_TGa);
    if (input[_Gra] != null) {
        const n = se_Grantee(input[_Gra]).n(_Gra);
        n.a("xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        bn.c(n);
    }
    if (input[_Pe] != null) {
        bn.c(xmlBuilder.XmlNode.of(_BLP, input[_Pe]).n(_Pe));
    }
    return bn;
};
const se_TargetGrants = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_TargetGrant(entry);
        return n.n(_G);
    });
};
const se_TargetObjectKeyFormat = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_TOKF);
    if (input[_SPi] != null) {
        bn.c(se_SimplePrefix(input[_SPi]).n(_SPi));
    }
    if (input[_PP] != null) {
        bn.c(se_PartitionedPrefix(input[_PP]).n(_PP));
    }
    return bn;
};
const se_Tiering = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_Tier);
    if (input[_Da] != null) {
        bn.c(xmlBuilder.XmlNode.of(_ITD, String(input[_Da])).n(_Da));
    }
    if (input[_AT] != null) {
        bn.c(xmlBuilder.XmlNode.of(_ITAT, input[_AT]).n(_AT));
    }
    return bn;
};
const se_TieringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_Tiering(entry);
        return n.n(_me);
    });
};
const se_TopicConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_TCo);
    if (input[_I] != null) {
        bn.c(xmlBuilder.XmlNode.of(_NI, input[_I]).n(_I));
    }
    if (input[_TA] != null) {
        bn.c(xmlBuilder.XmlNode.of(_TA, input[_TA]).n(_Top));
    }
    bn.l(input, "Events", "Event", () => se_EventList(input[_Eve]));
    if (input[_F] != null) {
        bn.c(se_NotificationConfigurationFilter(input[_F]).n(_F));
    }
    return bn;
};
const se_TopicConfigurationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_TopicConfiguration(entry);
        return n.n(_me);
    });
};
const se_Transition = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_Tra);
    if (input[_Dat] != null) {
        bn.c(xmlBuilder.XmlNode.of(_Dat, smithyClient.serializeDateTime(input[_Dat]).toString()).n(_Dat));
    }
    if (input[_Da] != null) {
        bn.c(xmlBuilder.XmlNode.of(_Da, String(input[_Da])).n(_Da));
    }
    if (input[_SC] != null) {
        bn.c(xmlBuilder.XmlNode.of(_TSC, input[_SC]).n(_SC));
    }
    return bn;
};
const se_TransitionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_Transition(entry);
        return n.n(_me);
    });
};
const se_UserMetadata = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_MetadataEntry(entry);
        return n.n(_ME);
    });
};
const se_VersioningConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_VCe);
    if (input[_MFAD] != null) {
        bn.c(xmlBuilder.XmlNode.of(_MFAD, input[_MFAD]).n(_MDf));
    }
    if (input[_S] != null) {
        bn.c(xmlBuilder.XmlNode.of(_BVS, input[_S]).n(_S));
    }
    return bn;
};
const se_WebsiteConfiguration = (input, context) => {
    const bn = new xmlBuilder.XmlNode(_WC);
    if (input[_ED] != null) {
        bn.c(se_ErrorDocument(input[_ED]).n(_ED));
    }
    if (input[_ID] != null) {
        bn.c(se_IndexDocument(input[_ID]).n(_ID));
    }
    if (input[_RART] != null) {
        bn.c(se_RedirectAllRequestsTo(input[_RART]).n(_RART));
    }
    bn.lc(input, "RoutingRules", "RoutingRules", () => se_RoutingRules(input[_RRo]));
    return bn;
};
const de_AbortIncompleteMultipartUpload = (output, context) => {
    const contents = {};
    if (output[_DAI] != null) {
        contents[_DAI] = smithyClient.strictParseInt32(output[_DAI]);
    }
    return contents;
};
const de_AccessControlTranslation = (output, context) => {
    const contents = {};
    if (output[_O] != null) {
        contents[_O] = smithyClient.expectString(output[_O]);
    }
    return contents;
};
const de_AllowedHeaders = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return smithyClient.expectString(entry);
    });
};
const de_AllowedMethods = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return smithyClient.expectString(entry);
    });
};
const de_AllowedOrigins = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return smithyClient.expectString(entry);
    });
};
const de_AnalyticsAndOperator = (output, context) => {
    const contents = {};
    if (output[_P] != null) {
        contents[_P] = smithyClient.expectString(output[_P]);
    }
    if (String(output.Tag).trim() === "") {
        contents[_Tag] = [];
    }
    else if (output[_Ta] != null) {
        contents[_Tag] = de_TagSet(smithyClient.getArrayIfSingleItem(output[_Ta]));
    }
    return contents;
};
const de_AnalyticsConfiguration = (output, context) => {
    const contents = {};
    if (output[_I] != null) {
        contents[_I] = smithyClient.expectString(output[_I]);
    }
    if (String(output.Filter).trim() === "") ;
    else if (output[_F] != null) {
        contents[_F] = de_AnalyticsFilter(smithyClient.expectUnion(output[_F]));
    }
    if (output[_SCA] != null) {
        contents[_SCA] = de_StorageClassAnalysis(output[_SCA]);
    }
    return contents;
};
const de_AnalyticsConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_AnalyticsConfiguration(entry);
    });
};
const de_AnalyticsExportDestination = (output, context) => {
    const contents = {};
    if (output[_SBD] != null) {
        contents[_SBD] = de_AnalyticsS3BucketDestination(output[_SBD]);
    }
    return contents;
};
const de_AnalyticsFilter = (output, context) => {
    if (output[_P] != null) {
        return {
            Prefix: smithyClient.expectString(output[_P]),
        };
    }
    if (output[_Ta] != null) {
        return {
            Tag: de_Tag(output[_Ta]),
        };
    }
    if (output[_A] != null) {
        return {
            And: de_AnalyticsAndOperator(output[_A]),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const de_AnalyticsS3BucketDestination = (output, context) => {
    const contents = {};
    if (output[_Fo] != null) {
        contents[_Fo] = smithyClient.expectString(output[_Fo]);
    }
    if (output[_BAI] != null) {
        contents[_BAI] = smithyClient.expectString(output[_BAI]);
    }
    if (output[_B] != null) {
        contents[_B] = smithyClient.expectString(output[_B]);
    }
    if (output[_P] != null) {
        contents[_P] = smithyClient.expectString(output[_P]);
    }
    return contents;
};
const de_Bucket = (output, context) => {
    const contents = {};
    if (output[_N] != null) {
        contents[_N] = smithyClient.expectString(output[_N]);
    }
    if (output[_CDr] != null) {
        contents[_CDr] = smithyClient.expectNonNull(smithyClient.parseRfc3339DateTimeWithOffset(output[_CDr]));
    }
    if (output[_BR] != null) {
        contents[_BR] = smithyClient.expectString(output[_BR]);
    }
    if (output[_BA] != null) {
        contents[_BA] = smithyClient.expectString(output[_BA]);
    }
    return contents;
};
const de_Buckets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Bucket(entry);
    });
};
const de_Checksum = (output, context) => {
    const contents = {};
    if (output[_CCRC] != null) {
        contents[_CCRC] = smithyClient.expectString(output[_CCRC]);
    }
    if (output[_CCRCC] != null) {
        contents[_CCRCC] = smithyClient.expectString(output[_CCRCC]);
    }
    if (output[_CCRCNVME] != null) {
        contents[_CCRCNVME] = smithyClient.expectString(output[_CCRCNVME]);
    }
    if (output[_CSHA] != null) {
        contents[_CSHA] = smithyClient.expectString(output[_CSHA]);
    }
    if (output[_CSHAh] != null) {
        contents[_CSHAh] = smithyClient.expectString(output[_CSHAh]);
    }
    if (output[_CT] != null) {
        contents[_CT] = smithyClient.expectString(output[_CT]);
    }
    return contents;
};
const de_ChecksumAlgorithmList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return smithyClient.expectString(entry);
    });
};
const de_CommonPrefix = (output, context) => {
    const contents = {};
    if (output[_P] != null) {
        contents[_P] = smithyClient.expectString(output[_P]);
    }
    return contents;
};
const de_CommonPrefixList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_CommonPrefix(entry);
    });
};
const de_Condition = (output, context) => {
    const contents = {};
    if (output[_HECRE] != null) {
        contents[_HECRE] = smithyClient.expectString(output[_HECRE]);
    }
    if (output[_KPE] != null) {
        contents[_KPE] = smithyClient.expectString(output[_KPE]);
    }
    return contents;
};
const de_ContinuationEvent = (output, context) => {
    const contents = {};
    return contents;
};
const de_CopyObjectResult = (output, context) => {
    const contents = {};
    if (output[_ETa] != null) {
        contents[_ETa] = smithyClient.expectString(output[_ETa]);
    }
    if (output[_LM] != null) {
        contents[_LM] = smithyClient.expectNonNull(smithyClient.parseRfc3339DateTimeWithOffset(output[_LM]));
    }
    if (output[_CT] != null) {
        contents[_CT] = smithyClient.expectString(output[_CT]);
    }
    if (output[_CCRC] != null) {
        contents[_CCRC] = smithyClient.expectString(output[_CCRC]);
    }
    if (output[_CCRCC] != null) {
        contents[_CCRCC] = smithyClient.expectString(output[_CCRCC]);
    }
    if (output[_CCRCNVME] != null) {
        contents[_CCRCNVME] = smithyClient.expectString(output[_CCRCNVME]);
    }
    if (output[_CSHA] != null) {
        contents[_CSHA] = smithyClient.expectString(output[_CSHA]);
    }
    if (output[_CSHAh] != null) {
        contents[_CSHAh] = smithyClient.expectString(output[_CSHAh]);
    }
    return contents;
};
const de_CopyPartResult = (output, context) => {
    const contents = {};
    if (output[_ETa] != null) {
        contents[_ETa] = smithyClient.expectString(output[_ETa]);
    }
    if (output[_LM] != null) {
        contents[_LM] = smithyClient.expectNonNull(smithyClient.parseRfc3339DateTimeWithOffset(output[_LM]));
    }
    if (output[_CCRC] != null) {
        contents[_CCRC] = smithyClient.expectString(output[_CCRC]);
    }
    if (output[_CCRCC] != null) {
        contents[_CCRCC] = smithyClient.expectString(output[_CCRCC]);
    }
    if (output[_CCRCNVME] != null) {
        contents[_CCRCNVME] = smithyClient.expectString(output[_CCRCNVME]);
    }
    if (output[_CSHA] != null) {
        contents[_CSHA] = smithyClient.expectString(output[_CSHA]);
    }
    if (output[_CSHAh] != null) {
        contents[_CSHAh] = smithyClient.expectString(output[_CSHAh]);
    }
    return contents;
};
const de_CORSRule = (output, context) => {
    const contents = {};
    if (output[_ID_] != null) {
        contents[_ID_] = smithyClient.expectString(output[_ID_]);
    }
    if (String(output.AllowedHeader).trim() === "") {
        contents[_AHl] = [];
    }
    else if (output[_AH] != null) {
        contents[_AHl] = de_AllowedHeaders(smithyClient.getArrayIfSingleItem(output[_AH]));
    }
    if (String(output.AllowedMethod).trim() === "") {
        contents[_AMl] = [];
    }
    else if (output[_AM] != null) {
        contents[_AMl] = de_AllowedMethods(smithyClient.getArrayIfSingleItem(output[_AM]));
    }
    if (String(output.AllowedOrigin).trim() === "") {
        contents[_AOl] = [];
    }
    else if (output[_AO] != null) {
        contents[_AOl] = de_AllowedOrigins(smithyClient.getArrayIfSingleItem(output[_AO]));
    }
    if (String(output.ExposeHeader).trim() === "") {
        contents[_EH] = [];
    }
    else if (output[_EHx] != null) {
        contents[_EH] = de_ExposeHeaders(smithyClient.getArrayIfSingleItem(output[_EHx]));
    }
    if (output[_MAS] != null) {
        contents[_MAS] = smithyClient.strictParseInt32(output[_MAS]);
    }
    return contents;
};
const de_CORSRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_CORSRule(entry);
    });
};
const de_DefaultRetention = (output, context) => {
    const contents = {};
    if (output[_Mo] != null) {
        contents[_Mo] = smithyClient.expectString(output[_Mo]);
    }
    if (output[_Da] != null) {
        contents[_Da] = smithyClient.strictParseInt32(output[_Da]);
    }
    if (output[_Y] != null) {
        contents[_Y] = smithyClient.strictParseInt32(output[_Y]);
    }
    return contents;
};
const de_DeletedObject = (output, context) => {
    const contents = {};
    if (output[_K] != null) {
        contents[_K] = smithyClient.expectString(output[_K]);
    }
    if (output[_VI] != null) {
        contents[_VI] = smithyClient.expectString(output[_VI]);
    }
    if (output[_DM] != null) {
        contents[_DM] = smithyClient.parseBoolean(output[_DM]);
    }
    if (output[_DMVI] != null) {
        contents[_DMVI] = smithyClient.expectString(output[_DMVI]);
    }
    return contents;
};
const de_DeletedObjects = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_DeletedObject(entry);
    });
};
const de_DeleteMarkerEntry = (output, context) => {
    const contents = {};
    if (output[_O] != null) {
        contents[_O] = de_Owner(output[_O]);
    }
    if (output[_K] != null) {
        contents[_K] = smithyClient.expectString(output[_K]);
    }
    if (output[_VI] != null) {
        contents[_VI] = smithyClient.expectString(output[_VI]);
    }
    if (output[_IL] != null) {
        contents[_IL] = smithyClient.parseBoolean(output[_IL]);
    }
    if (output[_LM] != null) {
        contents[_LM] = smithyClient.expectNonNull(smithyClient.parseRfc3339DateTimeWithOffset(output[_LM]));
    }
    return contents;
};
const de_DeleteMarkerReplication = (output, context) => {
    const contents = {};
    if (output[_S] != null) {
        contents[_S] = smithyClient.expectString(output[_S]);
    }
    return contents;
};
const de_DeleteMarkers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_DeleteMarkerEntry(entry);
    });
};
const de_Destination = (output, context) => {
    const contents = {};
    if (output[_B] != null) {
        contents[_B] = smithyClient.expectString(output[_B]);
    }
    if (output[_Ac] != null) {
        contents[_Ac] = smithyClient.expectString(output[_Ac]);
    }
    if (output[_SC] != null) {
        contents[_SC] = smithyClient.expectString(output[_SC]);
    }
    if (output[_ACT] != null) {
        contents[_ACT] = de_AccessControlTranslation(output[_ACT]);
    }
    if (output[_ECn] != null) {
        contents[_ECn] = de_EncryptionConfiguration(output[_ECn]);
    }
    if (output[_RTe] != null) {
        contents[_RTe] = de_ReplicationTime(output[_RTe]);
    }
    if (output[_Me] != null) {
        contents[_Me] = de_Metrics(output[_Me]);
    }
    return contents;
};
const de_DestinationResult = (output, context) => {
    const contents = {};
    if (output[_TBT] != null) {
        contents[_TBT] = smithyClient.expectString(output[_TBT]);
    }
    if (output[_TBA] != null) {
        contents[_TBA] = smithyClient.expectString(output[_TBA]);
    }
    if (output[_TNa] != null) {
        contents[_TNa] = smithyClient.expectString(output[_TNa]);
    }
    return contents;
};
const de_EncryptionConfiguration = (output, context) => {
    const contents = {};
    if (output[_RKKID] != null) {
        contents[_RKKID] = smithyClient.expectString(output[_RKKID]);
    }
    return contents;
};
const de_EndEvent = (output, context) => {
    const contents = {};
    return contents;
};
const de__Error = (output, context) => {
    const contents = {};
    if (output[_K] != null) {
        contents[_K] = smithyClient.expectString(output[_K]);
    }
    if (output[_VI] != null) {
        contents[_VI] = smithyClient.expectString(output[_VI]);
    }
    if (output[_Cod] != null) {
        contents[_Cod] = smithyClient.expectString(output[_Cod]);
    }
    if (output[_Mes] != null) {
        contents[_Mes] = smithyClient.expectString(output[_Mes]);
    }
    return contents;
};
const de_ErrorDetails = (output, context) => {
    const contents = {};
    if (output[_EC] != null) {
        contents[_EC] = smithyClient.expectString(output[_EC]);
    }
    if (output[_EM] != null) {
        contents[_EM] = smithyClient.expectString(output[_EM]);
    }
    return contents;
};
const de_ErrorDocument = (output, context) => {
    const contents = {};
    if (output[_K] != null) {
        contents[_K] = smithyClient.expectString(output[_K]);
    }
    return contents;
};
const de_Errors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de__Error(entry);
    });
};
const de_EventBridgeConfiguration = (output, context) => {
    const contents = {};
    return contents;
};
const de_EventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return smithyClient.expectString(entry);
    });
};
const de_ExistingObjectReplication = (output, context) => {
    const contents = {};
    if (output[_S] != null) {
        contents[_S] = smithyClient.expectString(output[_S]);
    }
    return contents;
};
const de_ExposeHeaders = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return smithyClient.expectString(entry);
    });
};
const de_FilterRule = (output, context) => {
    const contents = {};
    if (output[_N] != null) {
        contents[_N] = smithyClient.expectString(output[_N]);
    }
    if (output[_Va] != null) {
        contents[_Va] = smithyClient.expectString(output[_Va]);
    }
    return contents;
};
const de_FilterRuleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_FilterRule(entry);
    });
};
const de_GetBucketMetadataConfigurationResult = (output, context) => {
    const contents = {};
    if (output[_MCR] != null) {
        contents[_MCR] = de_MetadataConfigurationResult(output[_MCR]);
    }
    return contents;
};
const de_GetBucketMetadataTableConfigurationResult = (output, context) => {
    const contents = {};
    if (output[_MTCR] != null) {
        contents[_MTCR] = de_MetadataTableConfigurationResult(output[_MTCR]);
    }
    if (output[_S] != null) {
        contents[_S] = smithyClient.expectString(output[_S]);
    }
    if (output[_Er] != null) {
        contents[_Er] = de_ErrorDetails(output[_Er]);
    }
    return contents;
};
const de_GetObjectAttributesParts = (output, context) => {
    const contents = {};
    if (output[_PC] != null) {
        contents[_TPC] = smithyClient.strictParseInt32(output[_PC]);
    }
    if (output[_PNM] != null) {
        contents[_PNM] = smithyClient.expectString(output[_PNM]);
    }
    if (output[_NPNM] != null) {
        contents[_NPNM] = smithyClient.expectString(output[_NPNM]);
    }
    if (output[_MP] != null) {
        contents[_MP] = smithyClient.strictParseInt32(output[_MP]);
    }
    if (output[_IT] != null) {
        contents[_IT] = smithyClient.parseBoolean(output[_IT]);
    }
    if (String(output.Part).trim() === "") {
        contents[_Part] = [];
    }
    else if (output[_Par] != null) {
        contents[_Part] = de_PartsList(smithyClient.getArrayIfSingleItem(output[_Par]));
    }
    return contents;
};
const de_Grant = (output, context) => {
    const contents = {};
    if (output[_Gra] != null) {
        contents[_Gra] = de_Grantee(output[_Gra]);
    }
    if (output[_Pe] != null) {
        contents[_Pe] = smithyClient.expectString(output[_Pe]);
    }
    return contents;
};
const de_Grantee = (output, context) => {
    const contents = {};
    if (output[_DN] != null) {
        contents[_DN] = smithyClient.expectString(output[_DN]);
    }
    if (output[_EA] != null) {
        contents[_EA] = smithyClient.expectString(output[_EA]);
    }
    if (output[_ID_] != null) {
        contents[_ID_] = smithyClient.expectString(output[_ID_]);
    }
    if (output[_URI] != null) {
        contents[_URI] = smithyClient.expectString(output[_URI]);
    }
    if (output[_x] != null) {
        contents[_Ty] = smithyClient.expectString(output[_x]);
    }
    return contents;
};
const de_Grants = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Grant(entry);
    });
};
const de_IndexDocument = (output, context) => {
    const contents = {};
    if (output[_Su] != null) {
        contents[_Su] = smithyClient.expectString(output[_Su]);
    }
    return contents;
};
const de_Initiator = (output, context) => {
    const contents = {};
    if (output[_ID_] != null) {
        contents[_ID_] = smithyClient.expectString(output[_ID_]);
    }
    if (output[_DN] != null) {
        contents[_DN] = smithyClient.expectString(output[_DN]);
    }
    return contents;
};
const de_IntelligentTieringAndOperator = (output, context) => {
    const contents = {};
    if (output[_P] != null) {
        contents[_P] = smithyClient.expectString(output[_P]);
    }
    if (String(output.Tag).trim() === "") {
        contents[_Tag] = [];
    }
    else if (output[_Ta] != null) {
        contents[_Tag] = de_TagSet(smithyClient.getArrayIfSingleItem(output[_Ta]));
    }
    return contents;
};
const de_IntelligentTieringConfiguration = (output, context) => {
    const contents = {};
    if (output[_I] != null) {
        contents[_I] = smithyClient.expectString(output[_I]);
    }
    if (output[_F] != null) {
        contents[_F] = de_IntelligentTieringFilter(output[_F]);
    }
    if (output[_S] != null) {
        contents[_S] = smithyClient.expectString(output[_S]);
    }
    if (String(output.Tiering).trim() === "") {
        contents[_Tie] = [];
    }
    else if (output[_Tier] != null) {
        contents[_Tie] = de_TieringList(smithyClient.getArrayIfSingleItem(output[_Tier]));
    }
    return contents;
};
const de_IntelligentTieringConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_IntelligentTieringConfiguration(entry);
    });
};
const de_IntelligentTieringFilter = (output, context) => {
    const contents = {};
    if (output[_P] != null) {
        contents[_P] = smithyClient.expectString(output[_P]);
    }
    if (output[_Ta] != null) {
        contents[_Ta] = de_Tag(output[_Ta]);
    }
    if (output[_A] != null) {
        contents[_A] = de_IntelligentTieringAndOperator(output[_A]);
    }
    return contents;
};
const de_InventoryConfiguration = (output, context) => {
    const contents = {};
    if (output[_Des] != null) {
        contents[_Des] = de_InventoryDestination(output[_Des]);
    }
    if (output[_IE] != null) {
        contents[_IE] = smithyClient.parseBoolean(output[_IE]);
    }
    if (output[_F] != null) {
        contents[_F] = de_InventoryFilter(output[_F]);
    }
    if (output[_I] != null) {
        contents[_I] = smithyClient.expectString(output[_I]);
    }
    if (output[_IOV] != null) {
        contents[_IOV] = smithyClient.expectString(output[_IOV]);
    }
    if (String(output.OptionalFields).trim() === "") {
        contents[_OF] = [];
    }
    else if (output[_OF] != null && output[_OF][_Fi] != null) {
        contents[_OF] = de_InventoryOptionalFields(smithyClient.getArrayIfSingleItem(output[_OF][_Fi]));
    }
    if (output[_Sc] != null) {
        contents[_Sc] = de_InventorySchedule(output[_Sc]);
    }
    return contents;
};
const de_InventoryConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_InventoryConfiguration(entry);
    });
};
const de_InventoryDestination = (output, context) => {
    const contents = {};
    if (output[_SBD] != null) {
        contents[_SBD] = de_InventoryS3BucketDestination(output[_SBD]);
    }
    return contents;
};
const de_InventoryEncryption = (output, context) => {
    const contents = {};
    if (output[_SS] != null) {
        contents[_SSES] = de_SSES3(output[_SS]);
    }
    if (output[_SK] != null) {
        contents[_SSEKMS] = de_SSEKMS(output[_SK]);
    }
    return contents;
};
const de_InventoryFilter = (output, context) => {
    const contents = {};
    if (output[_P] != null) {
        contents[_P] = smithyClient.expectString(output[_P]);
    }
    return contents;
};
const de_InventoryOptionalFields = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return smithyClient.expectString(entry);
    });
};
const de_InventoryS3BucketDestination = (output, context) => {
    const contents = {};
    if (output[_AIc] != null) {
        contents[_AIc] = smithyClient.expectString(output[_AIc]);
    }
    if (output[_B] != null) {
        contents[_B] = smithyClient.expectString(output[_B]);
    }
    if (output[_Fo] != null) {
        contents[_Fo] = smithyClient.expectString(output[_Fo]);
    }
    if (output[_P] != null) {
        contents[_P] = smithyClient.expectString(output[_P]);
    }
    if (output[_En] != null) {
        contents[_En] = de_InventoryEncryption(output[_En]);
    }
    return contents;
};
const de_InventorySchedule = (output, context) => {
    const contents = {};
    if (output[_Fr] != null) {
        contents[_Fr] = smithyClient.expectString(output[_Fr]);
    }
    return contents;
};
const de_InventoryTableConfigurationResult = (output, context) => {
    const contents = {};
    if (output[_CSo] != null) {
        contents[_CSo] = smithyClient.expectString(output[_CSo]);
    }
    if (output[_TSa] != null) {
        contents[_TSa] = smithyClient.expectString(output[_TSa]);
    }
    if (output[_Er] != null) {
        contents[_Er] = de_ErrorDetails(output[_Er]);
    }
    if (output[_TN] != null) {
        contents[_TN] = smithyClient.expectString(output[_TN]);
    }
    if (output[_TAa] != null) {
        contents[_TAa] = smithyClient.expectString(output[_TAa]);
    }
    return contents;
};
const de_JournalTableConfigurationResult = (output, context) => {
    const contents = {};
    if (output[_TSa] != null) {
        contents[_TSa] = smithyClient.expectString(output[_TSa]);
    }
    if (output[_Er] != null) {
        contents[_Er] = de_ErrorDetails(output[_Er]);
    }
    if (output[_TN] != null) {
        contents[_TN] = smithyClient.expectString(output[_TN]);
    }
    if (output[_TAa] != null) {
        contents[_TAa] = smithyClient.expectString(output[_TAa]);
    }
    if (output[_REe] != null) {
        contents[_REe] = de_RecordExpiration(output[_REe]);
    }
    return contents;
};
const de_LambdaFunctionConfiguration = (output, context) => {
    const contents = {};
    if (output[_I] != null) {
        contents[_I] = smithyClient.expectString(output[_I]);
    }
    if (output[_CF] != null) {
        contents[_LFA] = smithyClient.expectString(output[_CF]);
    }
    if (String(output.Event).trim() === "") {
        contents[_Eve] = [];
    }
    else if (output[_Ev] != null) {
        contents[_Eve] = de_EventList(smithyClient.getArrayIfSingleItem(output[_Ev]));
    }
    if (output[_F] != null) {
        contents[_F] = de_NotificationConfigurationFilter(output[_F]);
    }
    return contents;
};
const de_LambdaFunctionConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_LambdaFunctionConfiguration(entry);
    });
};
const de_LifecycleExpiration = (output, context) => {
    const contents = {};
    if (output[_Dat] != null) {
        contents[_Dat] = smithyClient.expectNonNull(smithyClient.parseRfc3339DateTimeWithOffset(output[_Dat]));
    }
    if (output[_Da] != null) {
        contents[_Da] = smithyClient.strictParseInt32(output[_Da]);
    }
    if (output[_EODM] != null) {
        contents[_EODM] = smithyClient.parseBoolean(output[_EODM]);
    }
    return contents;
};
const de_LifecycleRule = (output, context) => {
    const contents = {};
    if (output[_Exp] != null) {
        contents[_Exp] = de_LifecycleExpiration(output[_Exp]);
    }
    if (output[_ID_] != null) {
        contents[_ID_] = smithyClient.expectString(output[_ID_]);
    }
    if (output[_P] != null) {
        contents[_P] = smithyClient.expectString(output[_P]);
    }
    if (output[_F] != null) {
        contents[_F] = de_LifecycleRuleFilter(output[_F]);
    }
    if (output[_S] != null) {
        contents[_S] = smithyClient.expectString(output[_S]);
    }
    if (String(output.Transition).trim() === "") {
        contents[_Tr] = [];
    }
    else if (output[_Tra] != null) {
        contents[_Tr] = de_TransitionList(smithyClient.getArrayIfSingleItem(output[_Tra]));
    }
    if (String(output.NoncurrentVersionTransition).trim() === "") {
        contents[_NVT] = [];
    }
    else if (output[_NVTo] != null) {
        contents[_NVT] = de_NoncurrentVersionTransitionList(smithyClient.getArrayIfSingleItem(output[_NVTo]));
    }
    if (output[_NVE] != null) {
        contents[_NVE] = de_NoncurrentVersionExpiration(output[_NVE]);
    }
    if (output[_AIMU] != null) {
        contents[_AIMU] = de_AbortIncompleteMultipartUpload(output[_AIMU]);
    }
    return contents;
};
const de_LifecycleRuleAndOperator = (output, context) => {
    const contents = {};
    if (output[_P] != null) {
        contents[_P] = smithyClient.expectString(output[_P]);
    }
    if (String(output.Tag).trim() === "") {
        contents[_Tag] = [];
    }
    else if (output[_Ta] != null) {
        contents[_Tag] = de_TagSet(smithyClient.getArrayIfSingleItem(output[_Ta]));
    }
    if (output[_OSGT] != null) {
        contents[_OSGT] = smithyClient.strictParseLong(output[_OSGT]);
    }
    if (output[_OSLT] != null) {
        contents[_OSLT] = smithyClient.strictParseLong(output[_OSLT]);
    }
    return contents;
};
const de_LifecycleRuleFilter = (output, context) => {
    const contents = {};
    if (output[_P] != null) {
        contents[_P] = smithyClient.expectString(output[_P]);
    }
    if (output[_Ta] != null) {
        contents[_Ta] = de_Tag(output[_Ta]);
    }
    if (output[_OSGT] != null) {
        contents[_OSGT] = smithyClient.strictParseLong(output[_OSGT]);
    }
    if (output[_OSLT] != null) {
        contents[_OSLT] = smithyClient.strictParseLong(output[_OSLT]);
    }
    if (output[_A] != null) {
        contents[_A] = de_LifecycleRuleAndOperator(output[_A]);
    }
    return contents;
};
const de_LifecycleRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_LifecycleRule(entry);
    });
};
const de_LoggingEnabled = (output, context) => {
    const contents = {};
    if (output[_TB] != null) {
        contents[_TB] = smithyClient.expectString(output[_TB]);
    }
    if (String(output.TargetGrants).trim() === "") {
        contents[_TG] = [];
    }
    else if (output[_TG] != null && output[_TG][_G] != null) {
        contents[_TG] = de_TargetGrants(smithyClient.getArrayIfSingleItem(output[_TG][_G]));
    }
    if (output[_TP] != null) {
        contents[_TP] = smithyClient.expectString(output[_TP]);
    }
    if (output[_TOKF] != null) {
        contents[_TOKF] = de_TargetObjectKeyFormat(output[_TOKF]);
    }
    return contents;
};
const de_MetadataConfigurationResult = (output, context) => {
    const contents = {};
    if (output[_DRes] != null) {
        contents[_DRes] = de_DestinationResult(output[_DRes]);
    }
    if (output[_JTCR] != null) {
        contents[_JTCR] = de_JournalTableConfigurationResult(output[_JTCR]);
    }
    if (output[_ITCR] != null) {
        contents[_ITCR] = de_InventoryTableConfigurationResult(output[_ITCR]);
    }
    return contents;
};
const de_MetadataTableConfigurationResult = (output, context) => {
    const contents = {};
    if (output[_STDR] != null) {
        contents[_STDR] = de_S3TablesDestinationResult(output[_STDR]);
    }
    return contents;
};
const de_Metrics = (output, context) => {
    const contents = {};
    if (output[_S] != null) {
        contents[_S] = smithyClient.expectString(output[_S]);
    }
    if (output[_ETv] != null) {
        contents[_ETv] = de_ReplicationTimeValue(output[_ETv]);
    }
    return contents;
};
const de_MetricsAndOperator = (output, context) => {
    const contents = {};
    if (output[_P] != null) {
        contents[_P] = smithyClient.expectString(output[_P]);
    }
    if (String(output.Tag).trim() === "") {
        contents[_Tag] = [];
    }
    else if (output[_Ta] != null) {
        contents[_Tag] = de_TagSet(smithyClient.getArrayIfSingleItem(output[_Ta]));
    }
    if (output[_APAc] != null) {
        contents[_APAc] = smithyClient.expectString(output[_APAc]);
    }
    return contents;
};
const de_MetricsConfiguration = (output, context) => {
    const contents = {};
    if (output[_I] != null) {
        contents[_I] = smithyClient.expectString(output[_I]);
    }
    if (String(output.Filter).trim() === "") ;
    else if (output[_F] != null) {
        contents[_F] = de_MetricsFilter(smithyClient.expectUnion(output[_F]));
    }
    return contents;
};
const de_MetricsConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_MetricsConfiguration(entry);
    });
};
const de_MetricsFilter = (output, context) => {
    if (output[_P] != null) {
        return {
            Prefix: smithyClient.expectString(output[_P]),
        };
    }
    if (output[_Ta] != null) {
        return {
            Tag: de_Tag(output[_Ta]),
        };
    }
    if (output[_APAc] != null) {
        return {
            AccessPointArn: smithyClient.expectString(output[_APAc]),
        };
    }
    if (output[_A] != null) {
        return {
            And: de_MetricsAndOperator(output[_A]),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const de_MultipartUpload = (output, context) => {
    const contents = {};
    if (output[_UI] != null) {
        contents[_UI] = smithyClient.expectString(output[_UI]);
    }
    if (output[_K] != null) {
        contents[_K] = smithyClient.expectString(output[_K]);
    }
    if (output[_Ini] != null) {
        contents[_Ini] = smithyClient.expectNonNull(smithyClient.parseRfc3339DateTimeWithOffset(output[_Ini]));
    }
    if (output[_SC] != null) {
        contents[_SC] = smithyClient.expectString(output[_SC]);
    }
    if (output[_O] != null) {
        contents[_O] = de_Owner(output[_O]);
    }
    if (output[_In] != null) {
        contents[_In] = de_Initiator(output[_In]);
    }
    if (output[_CA] != null) {
        contents[_CA] = smithyClient.expectString(output[_CA]);
    }
    if (output[_CT] != null) {
        contents[_CT] = smithyClient.expectString(output[_CT]);
    }
    return contents;
};
const de_MultipartUploadList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_MultipartUpload(entry);
    });
};
const de_NoncurrentVersionExpiration = (output, context) => {
    const contents = {};
    if (output[_ND] != null) {
        contents[_ND] = smithyClient.strictParseInt32(output[_ND]);
    }
    if (output[_NNV] != null) {
        contents[_NNV] = smithyClient.strictParseInt32(output[_NNV]);
    }
    return contents;
};
const de_NoncurrentVersionTransition = (output, context) => {
    const contents = {};
    if (output[_ND] != null) {
        contents[_ND] = smithyClient.strictParseInt32(output[_ND]);
    }
    if (output[_SC] != null) {
        contents[_SC] = smithyClient.expectString(output[_SC]);
    }
    if (output[_NNV] != null) {
        contents[_NNV] = smithyClient.strictParseInt32(output[_NNV]);
    }
    return contents;
};
const de_NoncurrentVersionTransitionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_NoncurrentVersionTransition(entry);
    });
};
const de_NotificationConfigurationFilter = (output, context) => {
    const contents = {};
    if (output[_SKe] != null) {
        contents[_K] = de_S3KeyFilter(output[_SKe]);
    }
    return contents;
};
const de__Object = (output, context) => {
    const contents = {};
    if (output[_K] != null) {
        contents[_K] = smithyClient.expectString(output[_K]);
    }
    if (output[_LM] != null) {
        contents[_LM] = smithyClient.expectNonNull(smithyClient.parseRfc3339DateTimeWithOffset(output[_LM]));
    }
    if (output[_ETa] != null) {
        contents[_ETa] = smithyClient.expectString(output[_ETa]);
    }
    if (String(output.ChecksumAlgorithm).trim() === "") {
        contents[_CA] = [];
    }
    else if (output[_CA] != null) {
        contents[_CA] = de_ChecksumAlgorithmList(smithyClient.getArrayIfSingleItem(output[_CA]));
    }
    if (output[_CT] != null) {
        contents[_CT] = smithyClient.expectString(output[_CT]);
    }
    if (output[_Si] != null) {
        contents[_Si] = smithyClient.strictParseLong(output[_Si]);
    }
    if (output[_SC] != null) {
        contents[_SC] = smithyClient.expectString(output[_SC]);
    }
    if (output[_O] != null) {
        contents[_O] = de_Owner(output[_O]);
    }
    if (output[_RSes] != null) {
        contents[_RSes] = de_RestoreStatus(output[_RSes]);
    }
    return contents;
};
const de_ObjectList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de__Object(entry);
    });
};
const de_ObjectLockConfiguration = (output, context) => {
    const contents = {};
    if (output[_OLE] != null) {
        contents[_OLE] = smithyClient.expectString(output[_OLE]);
    }
    if (output[_Ru] != null) {
        contents[_Ru] = de_ObjectLockRule(output[_Ru]);
    }
    return contents;
};
const de_ObjectLockLegalHold = (output, context) => {
    const contents = {};
    if (output[_S] != null) {
        contents[_S] = smithyClient.expectString(output[_S]);
    }
    return contents;
};
const de_ObjectLockRetention = (output, context) => {
    const contents = {};
    if (output[_Mo] != null) {
        contents[_Mo] = smithyClient.expectString(output[_Mo]);
    }
    if (output[_RUD] != null) {
        contents[_RUD] = smithyClient.expectNonNull(smithyClient.parseRfc3339DateTimeWithOffset(output[_RUD]));
    }
    return contents;
};
const de_ObjectLockRule = (output, context) => {
    const contents = {};
    if (output[_DRe] != null) {
        contents[_DRe] = de_DefaultRetention(output[_DRe]);
    }
    return contents;
};
const de_ObjectPart = (output, context) => {
    const contents = {};
    if (output[_PN] != null) {
        contents[_PN] = smithyClient.strictParseInt32(output[_PN]);
    }
    if (output[_Si] != null) {
        contents[_Si] = smithyClient.strictParseLong(output[_Si]);
    }
    if (output[_CCRC] != null) {
        contents[_CCRC] = smithyClient.expectString(output[_CCRC]);
    }
    if (output[_CCRCC] != null) {
        contents[_CCRCC] = smithyClient.expectString(output[_CCRCC]);
    }
    if (output[_CCRCNVME] != null) {
        contents[_CCRCNVME] = smithyClient.expectString(output[_CCRCNVME]);
    }
    if (output[_CSHA] != null) {
        contents[_CSHA] = smithyClient.expectString(output[_CSHA]);
    }
    if (output[_CSHAh] != null) {
        contents[_CSHAh] = smithyClient.expectString(output[_CSHAh]);
    }
    return contents;
};
const de_ObjectVersion = (output, context) => {
    const contents = {};
    if (output[_ETa] != null) {
        contents[_ETa] = smithyClient.expectString(output[_ETa]);
    }
    if (String(output.ChecksumAlgorithm).trim() === "") {
        contents[_CA] = [];
    }
    else if (output[_CA] != null) {
        contents[_CA] = de_ChecksumAlgorithmList(smithyClient.getArrayIfSingleItem(output[_CA]));
    }
    if (output[_CT] != null) {
        contents[_CT] = smithyClient.expectString(output[_CT]);
    }
    if (output[_Si] != null) {
        contents[_Si] = smithyClient.strictParseLong(output[_Si]);
    }
    if (output[_SC] != null) {
        contents[_SC] = smithyClient.expectString(output[_SC]);
    }
    if (output[_K] != null) {
        contents[_K] = smithyClient.expectString(output[_K]);
    }
    if (output[_VI] != null) {
        contents[_VI] = smithyClient.expectString(output[_VI]);
    }
    if (output[_IL] != null) {
        contents[_IL] = smithyClient.parseBoolean(output[_IL]);
    }
    if (output[_LM] != null) {
        contents[_LM] = smithyClient.expectNonNull(smithyClient.parseRfc3339DateTimeWithOffset(output[_LM]));
    }
    if (output[_O] != null) {
        contents[_O] = de_Owner(output[_O]);
    }
    if (output[_RSes] != null) {
        contents[_RSes] = de_RestoreStatus(output[_RSes]);
    }
    return contents;
};
const de_ObjectVersionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ObjectVersion(entry);
    });
};
const de_Owner = (output, context) => {
    const contents = {};
    if (output[_DN] != null) {
        contents[_DN] = smithyClient.expectString(output[_DN]);
    }
    if (output[_ID_] != null) {
        contents[_ID_] = smithyClient.expectString(output[_ID_]);
    }
    return contents;
};
const de_OwnershipControls = (output, context) => {
    const contents = {};
    if (String(output.Rule).trim() === "") {
        contents[_Rul] = [];
    }
    else if (output[_Ru] != null) {
        contents[_Rul] = de_OwnershipControlsRules(smithyClient.getArrayIfSingleItem(output[_Ru]));
    }
    return contents;
};
const de_OwnershipControlsRule = (output, context) => {
    const contents = {};
    if (output[_OO] != null) {
        contents[_OO] = smithyClient.expectString(output[_OO]);
    }
    return contents;
};
const de_OwnershipControlsRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_OwnershipControlsRule(entry);
    });
};
const de_Part = (output, context) => {
    const contents = {};
    if (output[_PN] != null) {
        contents[_PN] = smithyClient.strictParseInt32(output[_PN]);
    }
    if (output[_LM] != null) {
        contents[_LM] = smithyClient.expectNonNull(smithyClient.parseRfc3339DateTimeWithOffset(output[_LM]));
    }
    if (output[_ETa] != null) {
        contents[_ETa] = smithyClient.expectString(output[_ETa]);
    }
    if (output[_Si] != null) {
        contents[_Si] = smithyClient.strictParseLong(output[_Si]);
    }
    if (output[_CCRC] != null) {
        contents[_CCRC] = smithyClient.expectString(output[_CCRC]);
    }
    if (output[_CCRCC] != null) {
        contents[_CCRCC] = smithyClient.expectString(output[_CCRCC]);
    }
    if (output[_CCRCNVME] != null) {
        contents[_CCRCNVME] = smithyClient.expectString(output[_CCRCNVME]);
    }
    if (output[_CSHA] != null) {
        contents[_CSHA] = smithyClient.expectString(output[_CSHA]);
    }
    if (output[_CSHAh] != null) {
        contents[_CSHAh] = smithyClient.expectString(output[_CSHAh]);
    }
    return contents;
};
const de_PartitionedPrefix = (output, context) => {
    const contents = {};
    if (output[_PDS] != null) {
        contents[_PDS] = smithyClient.expectString(output[_PDS]);
    }
    return contents;
};
const de_Parts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Part(entry);
    });
};
const de_PartsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ObjectPart(entry);
    });
};
const de_PolicyStatus = (output, context) => {
    const contents = {};
    if (output[_IP] != null) {
        contents[_IP] = smithyClient.parseBoolean(output[_IP]);
    }
    return contents;
};
const de_Progress = (output, context) => {
    const contents = {};
    if (output[_BS] != null) {
        contents[_BS] = smithyClient.strictParseLong(output[_BS]);
    }
    if (output[_BP] != null) {
        contents[_BP] = smithyClient.strictParseLong(output[_BP]);
    }
    if (output[_BRy] != null) {
        contents[_BRy] = smithyClient.strictParseLong(output[_BRy]);
    }
    return contents;
};
const de_PublicAccessBlockConfiguration = (output, context) => {
    const contents = {};
    if (output[_BPA] != null) {
        contents[_BPA] = smithyClient.parseBoolean(output[_BPA]);
    }
    if (output[_IPA] != null) {
        contents[_IPA] = smithyClient.parseBoolean(output[_IPA]);
    }
    if (output[_BPP] != null) {
        contents[_BPP] = smithyClient.parseBoolean(output[_BPP]);
    }
    if (output[_RPB] != null) {
        contents[_RPB] = smithyClient.parseBoolean(output[_RPB]);
    }
    return contents;
};
const de_QueueConfiguration = (output, context) => {
    const contents = {};
    if (output[_I] != null) {
        contents[_I] = smithyClient.expectString(output[_I]);
    }
    if (output[_Qu] != null) {
        contents[_QA] = smithyClient.expectString(output[_Qu]);
    }
    if (String(output.Event).trim() === "") {
        contents[_Eve] = [];
    }
    else if (output[_Ev] != null) {
        contents[_Eve] = de_EventList(smithyClient.getArrayIfSingleItem(output[_Ev]));
    }
    if (output[_F] != null) {
        contents[_F] = de_NotificationConfigurationFilter(output[_F]);
    }
    return contents;
};
const de_QueueConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_QueueConfiguration(entry);
    });
};
const de_RecordExpiration = (output, context) => {
    const contents = {};
    if (output[_Exp] != null) {
        contents[_Exp] = smithyClient.expectString(output[_Exp]);
    }
    if (output[_Da] != null) {
        contents[_Da] = smithyClient.strictParseInt32(output[_Da]);
    }
    return contents;
};
const de_Redirect = (output, context) => {
    const contents = {};
    if (output[_HN] != null) {
        contents[_HN] = smithyClient.expectString(output[_HN]);
    }
    if (output[_HRC] != null) {
        contents[_HRC] = smithyClient.expectString(output[_HRC]);
    }
    if (output[_Pr] != null) {
        contents[_Pr] = smithyClient.expectString(output[_Pr]);
    }
    if (output[_RKPW] != null) {
        contents[_RKPW] = smithyClient.expectString(output[_RKPW]);
    }
    if (output[_RKW] != null) {
        contents[_RKW] = smithyClient.expectString(output[_RKW]);
    }
    return contents;
};
const de_RedirectAllRequestsTo = (output, context) => {
    const contents = {};
    if (output[_HN] != null) {
        contents[_HN] = smithyClient.expectString(output[_HN]);
    }
    if (output[_Pr] != null) {
        contents[_Pr] = smithyClient.expectString(output[_Pr]);
    }
    return contents;
};
const de_ReplicaModifications = (output, context) => {
    const contents = {};
    if (output[_S] != null) {
        contents[_S] = smithyClient.expectString(output[_S]);
    }
    return contents;
};
const de_ReplicationConfiguration = (output, context) => {
    const contents = {};
    if (output[_Ro] != null) {
        contents[_Ro] = smithyClient.expectString(output[_Ro]);
    }
    if (String(output.Rule).trim() === "") {
        contents[_Rul] = [];
    }
    else if (output[_Ru] != null) {
        contents[_Rul] = de_ReplicationRules(smithyClient.getArrayIfSingleItem(output[_Ru]));
    }
    return contents;
};
const de_ReplicationRule = (output, context) => {
    const contents = {};
    if (output[_ID_] != null) {
        contents[_ID_] = smithyClient.expectString(output[_ID_]);
    }
    if (output[_Pri] != null) {
        contents[_Pri] = smithyClient.strictParseInt32(output[_Pri]);
    }
    if (output[_P] != null) {
        contents[_P] = smithyClient.expectString(output[_P]);
    }
    if (output[_F] != null) {
        contents[_F] = de_ReplicationRuleFilter(output[_F]);
    }
    if (output[_S] != null) {
        contents[_S] = smithyClient.expectString(output[_S]);
    }
    if (output[_SSC] != null) {
        contents[_SSC] = de_SourceSelectionCriteria(output[_SSC]);
    }
    if (output[_EOR] != null) {
        contents[_EOR] = de_ExistingObjectReplication(output[_EOR]);
    }
    if (output[_Des] != null) {
        contents[_Des] = de_Destination(output[_Des]);
    }
    if (output[_DMR] != null) {
        contents[_DMR] = de_DeleteMarkerReplication(output[_DMR]);
    }
    return contents;
};
const de_ReplicationRuleAndOperator = (output, context) => {
    const contents = {};
    if (output[_P] != null) {
        contents[_P] = smithyClient.expectString(output[_P]);
    }
    if (String(output.Tag).trim() === "") {
        contents[_Tag] = [];
    }
    else if (output[_Ta] != null) {
        contents[_Tag] = de_TagSet(smithyClient.getArrayIfSingleItem(output[_Ta]));
    }
    return contents;
};
const de_ReplicationRuleFilter = (output, context) => {
    const contents = {};
    if (output[_P] != null) {
        contents[_P] = smithyClient.expectString(output[_P]);
    }
    if (output[_Ta] != null) {
        contents[_Ta] = de_Tag(output[_Ta]);
    }
    if (output[_A] != null) {
        contents[_A] = de_ReplicationRuleAndOperator(output[_A]);
    }
    return contents;
};
const de_ReplicationRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ReplicationRule(entry);
    });
};
const de_ReplicationTime = (output, context) => {
    const contents = {};
    if (output[_S] != null) {
        contents[_S] = smithyClient.expectString(output[_S]);
    }
    if (output[_Tim] != null) {
        contents[_Tim] = de_ReplicationTimeValue(output[_Tim]);
    }
    return contents;
};
const de_ReplicationTimeValue = (output, context) => {
    const contents = {};
    if (output[_Mi] != null) {
        contents[_Mi] = smithyClient.strictParseInt32(output[_Mi]);
    }
    return contents;
};
const de_RestoreStatus = (output, context) => {
    const contents = {};
    if (output[_IRIP] != null) {
        contents[_IRIP] = smithyClient.parseBoolean(output[_IRIP]);
    }
    if (output[_REDe] != null) {
        contents[_REDe] = smithyClient.expectNonNull(smithyClient.parseRfc3339DateTimeWithOffset(output[_REDe]));
    }
    return contents;
};
const de_RoutingRule = (output, context) => {
    const contents = {};
    if (output[_Con] != null) {
        contents[_Con] = de_Condition(output[_Con]);
    }
    if (output[_Red] != null) {
        contents[_Red] = de_Redirect(output[_Red]);
    }
    return contents;
};
const de_RoutingRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_RoutingRule(entry);
    });
};
const de_S3KeyFilter = (output, context) => {
    const contents = {};
    if (String(output.FilterRule).trim() === "") {
        contents[_FRi] = [];
    }
    else if (output[_FR] != null) {
        contents[_FRi] = de_FilterRuleList(smithyClient.getArrayIfSingleItem(output[_FR]));
    }
    return contents;
};
const de_S3TablesDestinationResult = (output, context) => {
    const contents = {};
    if (output[_TBA] != null) {
        contents[_TBA] = smithyClient.expectString(output[_TBA]);
    }
    if (output[_TN] != null) {
        contents[_TN] = smithyClient.expectString(output[_TN]);
    }
    if (output[_TAa] != null) {
        contents[_TAa] = smithyClient.expectString(output[_TAa]);
    }
    if (output[_TNa] != null) {
        contents[_TNa] = smithyClient.expectString(output[_TNa]);
    }
    return contents;
};
const de_ServerSideEncryptionByDefault = (output, context) => {
    const contents = {};
    if (output[_SSEA] != null) {
        contents[_SSEA] = smithyClient.expectString(output[_SSEA]);
    }
    if (output[_KMSMKID] != null) {
        contents[_KMSMKID] = smithyClient.expectString(output[_KMSMKID]);
    }
    return contents;
};
const de_ServerSideEncryptionConfiguration = (output, context) => {
    const contents = {};
    if (String(output.Rule).trim() === "") {
        contents[_Rul] = [];
    }
    else if (output[_Ru] != null) {
        contents[_Rul] = de_ServerSideEncryptionRules(smithyClient.getArrayIfSingleItem(output[_Ru]));
    }
    return contents;
};
const de_ServerSideEncryptionRule = (output, context) => {
    const contents = {};
    if (output[_ASSEBD] != null) {
        contents[_ASSEBD] = de_ServerSideEncryptionByDefault(output[_ASSEBD]);
    }
    if (output[_BKE] != null) {
        contents[_BKE] = smithyClient.parseBoolean(output[_BKE]);
    }
    return contents;
};
const de_ServerSideEncryptionRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ServerSideEncryptionRule(entry);
    });
};
const de_SessionCredentials = (output, context) => {
    const contents = {};
    if (output[_AKI] != null) {
        contents[_AKI] = smithyClient.expectString(output[_AKI]);
    }
    if (output[_SAK] != null) {
        contents[_SAK] = smithyClient.expectString(output[_SAK]);
    }
    if (output[_ST] != null) {
        contents[_ST] = smithyClient.expectString(output[_ST]);
    }
    if (output[_Exp] != null) {
        contents[_Exp] = smithyClient.expectNonNull(smithyClient.parseRfc3339DateTimeWithOffset(output[_Exp]));
    }
    return contents;
};
const de_SimplePrefix = (output, context) => {
    const contents = {};
    return contents;
};
const de_SourceSelectionCriteria = (output, context) => {
    const contents = {};
    if (output[_SKEO] != null) {
        contents[_SKEO] = de_SseKmsEncryptedObjects(output[_SKEO]);
    }
    if (output[_RM] != null) {
        contents[_RM] = de_ReplicaModifications(output[_RM]);
    }
    return contents;
};
const de_SSEKMS = (output, context) => {
    const contents = {};
    if (output[_KI] != null) {
        contents[_KI] = smithyClient.expectString(output[_KI]);
    }
    return contents;
};
const de_SseKmsEncryptedObjects = (output, context) => {
    const contents = {};
    if (output[_S] != null) {
        contents[_S] = smithyClient.expectString(output[_S]);
    }
    return contents;
};
const de_SSES3 = (output, context) => {
    const contents = {};
    return contents;
};
const de_Stats = (output, context) => {
    const contents = {};
    if (output[_BS] != null) {
        contents[_BS] = smithyClient.strictParseLong(output[_BS]);
    }
    if (output[_BP] != null) {
        contents[_BP] = smithyClient.strictParseLong(output[_BP]);
    }
    if (output[_BRy] != null) {
        contents[_BRy] = smithyClient.strictParseLong(output[_BRy]);
    }
    return contents;
};
const de_StorageClassAnalysis = (output, context) => {
    const contents = {};
    if (output[_DE] != null) {
        contents[_DE] = de_StorageClassAnalysisDataExport(output[_DE]);
    }
    return contents;
};
const de_StorageClassAnalysisDataExport = (output, context) => {
    const contents = {};
    if (output[_OSV] != null) {
        contents[_OSV] = smithyClient.expectString(output[_OSV]);
    }
    if (output[_Des] != null) {
        contents[_Des] = de_AnalyticsExportDestination(output[_Des]);
    }
    return contents;
};
const de_Tag = (output, context) => {
    const contents = {};
    if (output[_K] != null) {
        contents[_K] = smithyClient.expectString(output[_K]);
    }
    if (output[_Va] != null) {
        contents[_Va] = smithyClient.expectString(output[_Va]);
    }
    return contents;
};
const de_TagSet = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Tag(entry);
    });
};
const de_TargetGrant = (output, context) => {
    const contents = {};
    if (output[_Gra] != null) {
        contents[_Gra] = de_Grantee(output[_Gra]);
    }
    if (output[_Pe] != null) {
        contents[_Pe] = smithyClient.expectString(output[_Pe]);
    }
    return contents;
};
const de_TargetGrants = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_TargetGrant(entry);
    });
};
const de_TargetObjectKeyFormat = (output, context) => {
    const contents = {};
    if (output[_SPi] != null) {
        contents[_SPi] = de_SimplePrefix(output[_SPi]);
    }
    if (output[_PP] != null) {
        contents[_PP] = de_PartitionedPrefix(output[_PP]);
    }
    return contents;
};
const de_Tiering = (output, context) => {
    const contents = {};
    if (output[_Da] != null) {
        contents[_Da] = smithyClient.strictParseInt32(output[_Da]);
    }
    if (output[_AT] != null) {
        contents[_AT] = smithyClient.expectString(output[_AT]);
    }
    return contents;
};
const de_TieringList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Tiering(entry);
    });
};
const de_TopicConfiguration = (output, context) => {
    const contents = {};
    if (output[_I] != null) {
        contents[_I] = smithyClient.expectString(output[_I]);
    }
    if (output[_Top] != null) {
        contents[_TA] = smithyClient.expectString(output[_Top]);
    }
    if (String(output.Event).trim() === "") {
        contents[_Eve] = [];
    }
    else if (output[_Ev] != null) {
        contents[_Eve] = de_EventList(smithyClient.getArrayIfSingleItem(output[_Ev]));
    }
    if (output[_F] != null) {
        contents[_F] = de_NotificationConfigurationFilter(output[_F]);
    }
    return contents;
};
const de_TopicConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_TopicConfiguration(entry);
    });
};
const de_Transition = (output, context) => {
    const contents = {};
    if (output[_Dat] != null) {
        contents[_Dat] = smithyClient.expectNonNull(smithyClient.parseRfc3339DateTimeWithOffset(output[_Dat]));
    }
    if (output[_Da] != null) {
        contents[_Da] = smithyClient.strictParseInt32(output[_Da]);
    }
    if (output[_SC] != null) {
        contents[_SC] = smithyClient.expectString(output[_SC]);
    }
    return contents;
};
const de_TransitionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Transition(entry);
    });
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => smithyClient.collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const _A = "And";
const _AAO = "AnalyticsAndOperator";
const _AC = "AnalyticsConfiguration";
const _ACL = "ACL";
const _ACLc = "AccessControlList";
const _ACLn = "AnalyticsConfigurationList";
const _ACP = "AccessControlPolicy";
const _ACT = "AccessControlTranslation";
const _ACc = "AccelerateConfiguration";
const _AD = "AbortDate";
const _AED = "AnalyticsExportDestination";
const _AF = "AnalyticsFilter";
const _AH = "AllowedHeader";
const _AHl = "AllowedHeaders";
const _AI = "AnalyticsId";
const _AIMU = "AbortIncompleteMultipartUpload";
const _AIc = "AccountId";
const _AKI = "AccessKeyId";
const _AM = "AllowedMethod";
const _AMl = "AllowedMethods";
const _AO = "AllowedOrigin";
const _AOl = "AllowedOrigins";
const _APA = "AccessPointAlias";
const _APAc = "AccessPointArn";
const _AQRD = "AllowQuotedRecordDelimiter";
const _AR = "AcceptRanges";
const _ARI = "AbortRuleId";
const _AS = "ArchiveStatus";
const _ASBD = "AnalyticsS3BucketDestination";
const _ASEFF = "AnalyticsS3ExportFileFormat";
const _ASSEBD = "ApplyServerSideEncryptionByDefault";
const _AT = "AccessTier";
const _Ac = "Account";
const _B = "Bucket";
const _BA = "BucketArn";
const _BAI = "BucketAccountId";
const _BAS = "BucketAccelerateStatus";
const _BGR = "BypassGovernanceRetention";
const _BI = "BucketInfo";
const _BKE = "BucketKeyEnabled";
const _BLC = "BucketLifecycleConfiguration";
const _BLCu = "BucketLocationConstraint";
const _BLN = "BucketLocationName";
const _BLP = "BucketLogsPermission";
const _BLS = "BucketLoggingStatus";
const _BLT = "BucketLocationType";
const _BN = "BucketName";
const _BP = "BytesProcessed";
const _BPA = "BlockPublicAcls";
const _BPP = "BlockPublicPolicy";
const _BR = "BucketRegion";
const _BRy = "BytesReturned";
const _BS = "BytesScanned";
const _BT = "BucketType";
const _BVS = "BucketVersioningStatus";
const _Bu = "Buckets";
const _C = "Credentials";
const _CA = "ChecksumAlgorithm";
const _CACL = "CannedACL";
const _CBC = "CreateBucketConfiguration";
const _CC = "CacheControl";
const _CCRC = "ChecksumCRC32";
const _CCRCC = "ChecksumCRC32C";
const _CCRCNVME = "ChecksumCRC64NVME";
const _CD = "ContentDisposition";
const _CDr = "CreationDate";
const _CE = "ContentEncoding";
const _CF = "CloudFunction";
const _CFC = "CloudFunctionConfiguration";
const _CL = "ContentLanguage";
const _CLo = "ContentLength";
const _CM = "ChecksumMode";
const _CMD = "ContentMD5";
const _CMU = "CompletedMultipartUpload";
const _CORSC = "CORSConfiguration";
const _CORSR = "CORSRule";
const _CORSRu = "CORSRules";
const _CP = "CommonPrefixes";
const _CPo = "CompletedPart";
const _CR = "ContentRange";
const _CRSBA = "ConfirmRemoveSelfBucketAccess";
const _CS = "CopySource";
const _CSHA = "ChecksumSHA1";
const _CSHAh = "ChecksumSHA256";
const _CSIM = "CopySourceIfMatch";
const _CSIMS = "CopySourceIfModifiedSince";
const _CSINM = "CopySourceIfNoneMatch";
const _CSIUS = "CopySourceIfUnmodifiedSince";
const _CSR = "CopySourceRange";
const _CSSSECA = "CopySourceSSECustomerAlgorithm";
const _CSSSECK = "CopySourceSSECustomerKey";
const _CSSSECKMD = "CopySourceSSECustomerKeyMD5";
const _CSV = "CSV";
const _CSVI = "CopySourceVersionId";
const _CSVIn = "CSVInput";
const _CSVO = "CSVOutput";
const _CSo = "ConfigurationState";
const _CT = "ChecksumType";
const _CTl = "ClientToken";
const _CTo = "ContentType";
const _CTom = "CompressionType";
const _CTon = "ContinuationToken";
const _Ch = "Checksum";
const _Co = "Contents";
const _Cod = "Code";
const _Com = "Comments";
const _Con = "Condition";
const _D = "Delimiter";
const _DAI = "DaysAfterInitiation";
const _DE = "DataExport";
const _DIM = "DestinationIfMatch";
const _DIMS = "DestinationIfModifiedSince";
const _DINM = "DestinationIfNoneMatch";
const _DIUS = "DestinationIfUnmodifiedSince";
const _DM = "DeleteMarker";
const _DMR = "DeleteMarkerReplication";
const _DMRS = "DeleteMarkerReplicationStatus";
const _DMVI = "DeleteMarkerVersionId";
const _DMe = "DeleteMarkers";
const _DN = "DisplayName";
const _DR = "DataRedundancy";
const _DRe = "DefaultRetention";
const _DRes = "DestinationResult";
const _Da = "Days";
const _Dat = "Date";
const _De = "Deleted";
const _Del = "Delete";
const _Des = "Destination";
const _Desc = "Description";
const _E = "Expires";
const _EA = "EmailAddress";
const _EBC = "EventBridgeConfiguration";
const _EBO = "ExpectedBucketOwner";
const _EC = "ErrorCode";
const _ECn = "EncryptionConfiguration";
const _ED = "ErrorDocument";
const _EH = "ExposeHeaders";
const _EHx = "ExposeHeader";
const _EM = "ErrorMessage";
const _EODM = "ExpiredObjectDeleteMarker";
const _EOR = "ExistingObjectReplication";
const _EORS = "ExistingObjectReplicationStatus";
const _ERP = "EnableRequestProgress";
const _ES = "ExpiresString";
const _ESBO = "ExpectedSourceBucketOwner";
const _ESx = "ExpirationStatus";
const _ESxp = "ExpirationState";
const _ET = "EncodingType";
const _ETa = "ETag";
const _ETn = "EncryptionType";
const _ETv = "EventThreshold";
const _ETx = "ExpressionType";
const _En = "Encryption";
const _Ena = "Enabled";
const _End = "End";
const _Er = "Error";
const _Err = "Errors";
const _Ev = "Event";
const _Eve = "Events";
const _Ex = "Expression";
const _Exp = "Expiration";
const _F = "Filter";
const _FD = "FieldDelimiter";
const _FHI = "FileHeaderInfo";
const _FO = "FetchOwner";
const _FR = "FilterRule";
const _FRN = "FilterRuleName";
const _FRV = "FilterRuleValue";
const _FRi = "FilterRules";
const _Fi = "Field";
const _Fo = "Format";
const _Fr = "Frequency";
const _G = "Grant";
const _GFC = "GrantFullControl";
const _GJP = "GlacierJobParameters";
const _GR = "GrantRead";
const _GRACP = "GrantReadACP";
const _GW = "GrantWrite";
const _GWACP = "GrantWriteACP";
const _Gr = "Grants";
const _Gra = "Grantee";
const _HECRE = "HttpErrorCodeReturnedEquals";
const _HN = "HostName";
const _HRC = "HttpRedirectCode";
const _I = "Id";
const _IC = "InventoryConfiguration";
const _ICL = "InventoryConfigurationList";
const _ICS = "InventoryConfigurationState";
const _ID = "IndexDocument";
const _ID_ = "ID";
const _IDn = "InventoryDestination";
const _IE = "IsEnabled";
const _IEn = "InventoryEncryption";
const _IF = "InventoryFilter";
const _IFn = "InventoryFormat";
const _IFnv = "InventoryFrequency";
const _II = "InventoryId";
const _IIOV = "InventoryIncludedObjectVersions";
const _IL = "IsLatest";
const _IM = "IfMatch";
const _IMIT = "IfMatchInitiatedTime";
const _IMLMT = "IfMatchLastModifiedTime";
const _IMS = "IfMatchSize";
const _IMSf = "IfModifiedSince";
const _INM = "IfNoneMatch";
const _IOF = "InventoryOptionalField";
const _IOV = "IncludedObjectVersions";
const _IP = "IsPublic";
const _IPA = "IgnorePublicAcls";
const _IRIP = "IsRestoreInProgress";
const _IS = "InputSerialization";
const _ISBD = "InventoryS3BucketDestination";
const _ISn = "InventorySchedule";
const _IT = "IsTruncated";
const _ITAO = "IntelligentTieringAndOperator";
const _ITAT = "IntelligentTieringAccessTier";
const _ITC = "IntelligentTieringConfiguration";
const _ITCL = "IntelligentTieringConfigurationList";
const _ITCR = "InventoryTableConfigurationResult";
const _ITCU = "InventoryTableConfigurationUpdates";
const _ITCn = "InventoryTableConfiguration";
const _ITD = "IntelligentTieringDays";
const _ITF = "IntelligentTieringFilter";
const _ITI = "IntelligentTieringId";
const _ITS = "IntelligentTieringStatus";
const _IUS = "IfUnmodifiedSince";
const _In = "Initiator";
const _Ini = "Initiated";
const _JSON = "JSON";
const _JSONI = "JSONInput";
const _JSONO = "JSONOutput";
const _JSONT = "JSONType";
const _JTC = "JournalTableConfiguration";
const _JTCR = "JournalTableConfigurationResult";
const _JTCU = "JournalTableConfigurationUpdates";
const _K = "Key";
const _KC = "KeyCount";
const _KI = "KeyId";
const _KKA = "KmsKeyArn";
const _KM = "KeyMarker";
const _KMSC = "KMSContext";
const _KMSKI = "KMSKeyId";
const _KMSMKID = "KMSMasterKeyID";
const _KPE = "KeyPrefixEquals";
const _L = "Location";
const _LC = "LocationConstraint";
const _LE = "LoggingEnabled";
const _LEi = "LifecycleExpiration";
const _LFA = "LambdaFunctionArn";
const _LFC = "LambdaFunctionConfigurations";
const _LFCa = "LambdaFunctionConfiguration";
const _LI = "LocationInfo";
const _LM = "LastModified";
const _LMT = "LastModifiedTime";
const _LNAS = "LocationNameAsString";
const _LP = "LocationPrefix";
const _LR = "LifecycleRule";
const _LRAO = "LifecycleRuleAndOperator";
const _LRF = "LifecycleRuleFilter";
const _LT = "LocationType";
const _M = "Marker";
const _MAO = "MetricsAndOperator";
const _MAS = "MaxAgeSeconds";
const _MB = "MaxBuckets";
const _MC = "MetricsConfiguration";
const _MCL = "MetricsConfigurationList";
const _MCR = "MetadataConfigurationResult";
const _MCe = "MetadataConfiguration";
const _MD = "MetadataDirective";
const _MDB = "MaxDirectoryBuckets";
const _MDf = "MfaDelete";
const _ME = "MetadataEntry";
const _MF = "MetricsFilter";
const _MFA = "MFA";
const _MFAD = "MFADelete";
const _MI = "MetricsId";
const _MK = "MaxKeys";
const _MKe = "MetadataKey";
const _MM = "MissingMeta";
const _MOS = "MpuObjectSize";
const _MP = "MaxParts";
const _MS = "MetricsStatus";
const _MTC = "MetadataTableConfiguration";
const _MTCR = "MetadataTableConfigurationResult";
const _MTEC = "MetadataTableEncryptionConfiguration";
const _MU = "MaxUploads";
const _MV = "MetadataValue";
const _Me = "Metrics";
const _Mes = "Message";
const _Mi = "Minutes";
const _Mo = "Mode";
const _N = "Name";
const _NC = "NotificationConfiguration";
const _NCF = "NotificationConfigurationFilter";
const _NCT = "NextContinuationToken";
const _ND = "NoncurrentDays";
const _NI = "NotificationId";
const _NKM = "NextKeyMarker";
const _NM = "NextMarker";
const _NNV = "NewerNoncurrentVersions";
const _NPNM = "NextPartNumberMarker";
const _NUIM = "NextUploadIdMarker";
const _NVE = "NoncurrentVersionExpiration";
const _NVIM = "NextVersionIdMarker";
const _NVT = "NoncurrentVersionTransitions";
const _NVTo = "NoncurrentVersionTransition";
const _O = "Owner";
const _OA = "ObjectAttributes";
const _OC = "OwnershipControls";
const _OCACL = "ObjectCannedACL";
const _OCR = "OwnershipControlsRule";
const _OF = "OptionalFields";
const _OI = "ObjectIdentifier";
const _OK = "ObjectKey";
const _OL = "OutputLocation";
const _OLC = "ObjectLockConfiguration";
const _OLE = "ObjectLockEnabled";
const _OLEFB = "ObjectLockEnabledForBucket";
const _OLLH = "ObjectLockLegalHold";
const _OLLHS = "ObjectLockLegalHoldStatus";
const _OLM = "ObjectLockMode";
const _OLR = "ObjectLockRetention";
const _OLRM = "ObjectLockRetentionMode";
const _OLRUD = "ObjectLockRetainUntilDate";
const _OLRb = "ObjectLockRule";
const _OO = "ObjectOwnership";
const _OOA = "OptionalObjectAttributes";
const _OOw = "OwnerOverride";
const _OP = "ObjectParts";
const _OS = "OutputSerialization";
const _OSGT = "ObjectSizeGreaterThan";
const _OSGTB = "ObjectSizeGreaterThanBytes";
const _OSLT = "ObjectSizeLessThan";
const _OSLTB = "ObjectSizeLessThanBytes";
const _OSV = "OutputSchemaVersion";
const _OSb = "ObjectSize";
const _OVI = "ObjectVersionId";
const _Ob = "Objects";
const _P = "Prefix";
const _PABC = "PublicAccessBlockConfiguration";
const _PC = "PartsCount";
const _PDS = "PartitionDateSource";
const _PI = "ParquetInput";
const _PN = "PartNumber";
const _PNM = "PartNumberMarker";
const _PP = "PartitionedPrefix";
const _Pa = "Payer";
const _Par = "Part";
const _Parq = "Parquet";
const _Part = "Parts";
const _Pe = "Permission";
const _Pr = "Protocol";
const _Pri = "Priority";
const _Q = "Quiet";
const _QA = "QueueArn";
const _QC = "QueueConfiguration";
const _QCu = "QueueConfigurations";
const _QCuo = "QuoteCharacter";
const _QEC = "QuoteEscapeCharacter";
const _QF = "QuoteFields";
const _Qu = "Queue";
const _R = "Range";
const _RART = "RedirectAllRequestsTo";
const _RC = "RequestCharged";
const _RCC = "ResponseCacheControl";
const _RCD = "ResponseContentDisposition";
const _RCE = "ResponseContentEncoding";
const _RCL = "ResponseContentLanguage";
const _RCT = "ResponseContentType";
const _RCe = "ReplicationConfiguration";
const _RD = "RecordDelimiter";
const _RE = "ResponseExpires";
const _RED = "RecordExpirationDays";
const _REDe = "RestoreExpiryDate";
const _REe = "RecordExpiration";
const _RKKID = "ReplicaKmsKeyID";
const _RKPW = "ReplaceKeyPrefixWith";
const _RKW = "ReplaceKeyWith";
const _RM = "ReplicaModifications";
const _RMS = "ReplicaModificationsStatus";
const _ROP = "RestoreOutputPath";
const _RP = "RequestPayer";
const _RPB = "RestrictPublicBuckets";
const _RPC = "RequestPaymentConfiguration";
const _RPe = "RequestProgress";
const _RR = "RequestRoute";
const _RRAO = "ReplicationRuleAndOperator";
const _RRF = "ReplicationRuleFilter";
const _RRS = "ReplicationRuleStatus";
const _RRT = "RestoreRequestType";
const _RRe = "ReplicationRule";
const _RRes = "RestoreRequest";
const _RRo = "RoutingRules";
const _RRou = "RoutingRule";
const _RS = "RenameSource";
const _RSe = "ReplicationStatus";
const _RSes = "RestoreStatus";
const _RT = "RequestToken";
const _RTS = "ReplicationTimeStatus";
const _RTV = "ReplicationTimeValue";
const _RTe = "ReplicationTime";
const _RUD = "RetainUntilDate";
const _Re = "Restore";
const _Red = "Redirect";
const _Ro = "Role";
const _Ru = "Rule";
const _Rul = "Rules";
const _S = "Status";
const _SA = "StartAfter";
const _SAK = "SecretAccessKey";
const _SAs = "SseAlgorithm";
const _SBD = "S3BucketDestination";
const _SC = "StorageClass";
const _SCA = "StorageClassAnalysis";
const _SCADE = "StorageClassAnalysisDataExport";
const _SCASV = "StorageClassAnalysisSchemaVersion";
const _SCt = "StatusCode";
const _SDV = "SkipDestinationValidation";
const _SIM = "SourceIfMatch";
const _SIMS = "SourceIfModifiedSince";
const _SINM = "SourceIfNoneMatch";
const _SIUS = "SourceIfUnmodifiedSince";
const _SK = "SSE-KMS";
const _SKEO = "SseKmsEncryptedObjects";
const _SKEOS = "SseKmsEncryptedObjectsStatus";
const _SKF = "S3KeyFilter";
const _SKe = "S3Key";
const _SL = "S3Location";
const _SM = "SessionMode";
const _SOCR = "SelectObjectContentRequest";
const _SP = "SelectParameters";
const _SPi = "SimplePrefix";
const _SR = "ScanRange";
const _SS = "SSE-S3";
const _SSC = "SourceSelectionCriteria";
const _SSE = "ServerSideEncryption";
const _SSEA = "SSEAlgorithm";
const _SSEBD = "ServerSideEncryptionByDefault";
const _SSEC = "ServerSideEncryptionConfiguration";
const _SSECA = "SSECustomerAlgorithm";
const _SSECK = "SSECustomerKey";
const _SSECKMD = "SSECustomerKeyMD5";
const _SSEKMS = "SSEKMS";
const _SSEKMSEC = "SSEKMSEncryptionContext";
const _SSEKMSKI = "SSEKMSKeyId";
const _SSER = "ServerSideEncryptionRule";
const _SSES = "SSES3";
const _ST = "SessionToken";
const _STBA = "S3TablesBucketArn";
const _STD = "S3TablesDestination";
const _STDR = "S3TablesDestinationResult";
const _STN = "S3TablesName";
const _S_ = "S3";
const _Sc = "Schedule";
const _Se = "Setting";
const _Si = "Size";
const _St = "Start";
const _Su = "Suffix";
const _T = "Tagging";
const _TA = "TopicArn";
const _TAa = "TableArn";
const _TB = "TargetBucket";
const _TBA = "TableBucketArn";
const _TBT = "TableBucketType";
const _TC = "TagCount";
const _TCo = "TopicConfiguration";
const _TCop = "TopicConfigurations";
const _TD = "TaggingDirective";
const _TDMOS = "TransitionDefaultMinimumObjectSize";
const _TG = "TargetGrants";
const _TGa = "TargetGrant";
const _TN = "TableName";
const _TNa = "TableNamespace";
const _TOKF = "TargetObjectKeyFormat";
const _TP = "TargetPrefix";
const _TPC = "TotalPartsCount";
const _TS = "TagSet";
const _TSA = "TableSseAlgorithm";
const _TSC = "TransitionStorageClass";
const _TSa = "TableStatus";
const _Ta = "Tag";
const _Tag = "Tags";
const _Ti = "Tier";
const _Tie = "Tierings";
const _Tier = "Tiering";
const _Tim = "Time";
const _To = "Token";
const _Top = "Topic";
const _Tr = "Transitions";
const _Tra = "Transition";
const _Ty = "Type";
const _U = "Upload";
const _UI = "UploadId";
const _UIM = "UploadIdMarker";
const _UM = "UserMetadata";
const _URI = "URI";
const _Up = "Uploads";
const _V = "Version";
const _VC = "VersionCount";
const _VCe = "VersioningConfiguration";
const _VI = "VersionId";
const _VIM = "VersionIdMarker";
const _Va = "Value";
const _Ve = "Versions";
const _WC = "WebsiteConfiguration";
const _WOB = "WriteOffsetBytes";
const _WRL = "WebsiteRedirectLocation";
const _Y = "Years";
const _a = "analytics";
const _ac = "accelerate";
const _acl = "acl";
const _ar = "accept-ranges";
const _at = "attributes";
const _br = "bucket-region";
const _c = "cors";
const _cc = "cache-control";
const _cd = "content-disposition";
const _ce = "content-encoding";
const _cl = "content-language";
const _cl_ = "content-length";
const _cm = "content-md5";
const _cr = "content-range";
const _ct = "content-type";
const _ct_ = "continuation-token";
const _d = "delete";
const _de = "delimiter";
const _e = "expires";
const _en = "encryption";
const _et = "encoding-type";
const _eta = "etag";
const _ex = "expiresstring";
const _fo = "fetch-owner";
const _i = "id";
const _im = "if-match";
const _ims = "if-modified-since";
const _in = "inventory";
const _inm = "if-none-match";
const _it = "intelligent-tiering";
const _ius = "if-unmodified-since";
const _km = "key-marker";
const _l = "lifecycle";
const _lh = "legal-hold";
const _lm = "last-modified";
const _lo = "location";
const _log = "logging";
const _lt = "list-type";
const _m = "metrics";
const _mC = "metadataConfiguration";
const _mIT = "metadataInventoryTable";
const _mJT = "metadataJournalTable";
const _mT = "metadataTable";
const _ma = "marker";
const _mb = "max-buckets";
const _mdb = "max-directory-buckets";
const _me = "member";
const _mk = "max-keys";
const _mp = "max-parts";
const _mu = "max-uploads";
const _n = "notification";
const _oC = "ownershipControls";
const _ol = "object-lock";
const _p = "policy";
const _pAB = "publicAccessBlock";
const _pN = "partNumber";
const _pS = "policyStatus";
const _pnm = "part-number-marker";
const _pr = "prefix";
const _r = "replication";
const _rO = "renameObject";
const _rP = "requestPayment";
const _ra = "range";
const _rcc = "response-cache-control";
const _rcd = "response-content-disposition";
const _rce = "response-content-encoding";
const _rcl = "response-content-language";
const _rct = "response-content-type";
const _re = "response-expires";
const _res = "restore";
const _ret = "retention";
const _s = "session";
const _sa = "start-after";
const _se = "select";
const _st = "select-type";
const _t = "tagging";
const _to = "torrent";
const _u = "uploads";
const _uI = "uploadId";
const _uim = "upload-id-marker";
const _v = "versioning";
const _vI = "versionId";
const _ve = '<?xml version="1.0" encoding="UTF-8"?>';
const _ver = "versions";
const _vim = "version-id-marker";
const _w = "website";
const _x = "xsi:type";
const _xaa = "x-amz-acl";
const _xaad = "x-amz-abort-date";
const _xaapa = "x-amz-access-point-alias";
const _xaari = "x-amz-abort-rule-id";
const _xaas = "x-amz-archive-status";
const _xaba = "x-amz-bucket-arn";
const _xabgr = "x-amz-bypass-governance-retention";
const _xabln = "x-amz-bucket-location-name";
const _xablt = "x-amz-bucket-location-type";
const _xabole = "x-amz-bucket-object-lock-enabled";
const _xabolt = "x-amz-bucket-object-lock-token";
const _xabr = "x-amz-bucket-region";
const _xaca = "x-amz-checksum-algorithm";
const _xacc = "x-amz-checksum-crc32";
const _xacc_ = "x-amz-checksum-crc32c";
const _xacc__ = "x-amz-checksum-crc64nvme";
const _xacm = "x-amz-checksum-mode";
const _xacrsba = "x-amz-confirm-remove-self-bucket-access";
const _xacs = "x-amz-checksum-sha1";
const _xacs_ = "x-amz-checksum-sha256";
const _xacs__ = "x-amz-copy-source";
const _xacsim = "x-amz-copy-source-if-match";
const _xacsims = "x-amz-copy-source-if-modified-since";
const _xacsinm = "x-amz-copy-source-if-none-match";
const _xacsius = "x-amz-copy-source-if-unmodified-since";
const _xacsm = "x-amz-create-session-mode";
const _xacsr = "x-amz-copy-source-range";
const _xacssseca = "x-amz-copy-source-server-side-encryption-customer-algorithm";
const _xacssseck = "x-amz-copy-source-server-side-encryption-customer-key";
const _xacssseckm = "x-amz-copy-source-server-side-encryption-customer-key-md5";
const _xacsvi = "x-amz-copy-source-version-id";
const _xact = "x-amz-checksum-type";
const _xact_ = "x-amz-client-token";
const _xadm = "x-amz-delete-marker";
const _xae = "x-amz-expiration";
const _xaebo = "x-amz-expected-bucket-owner";
const _xafec = "x-amz-fwd-error-code";
const _xafem = "x-amz-fwd-error-message";
const _xafhar = "x-amz-fwd-header-accept-ranges";
const _xafhcc = "x-amz-fwd-header-cache-control";
const _xafhcd = "x-amz-fwd-header-content-disposition";
const _xafhce = "x-amz-fwd-header-content-encoding";
const _xafhcl = "x-amz-fwd-header-content-language";
const _xafhcr = "x-amz-fwd-header-content-range";
const _xafhct = "x-amz-fwd-header-content-type";
const _xafhe = "x-amz-fwd-header-etag";
const _xafhe_ = "x-amz-fwd-header-expires";
const _xafhlm = "x-amz-fwd-header-last-modified";
const _xafhxacc = "x-amz-fwd-header-x-amz-checksum-crc32";
const _xafhxacc_ = "x-amz-fwd-header-x-amz-checksum-crc32c";
const _xafhxacc__ = "x-amz-fwd-header-x-amz-checksum-crc64nvme";
const _xafhxacs = "x-amz-fwd-header-x-amz-checksum-sha1";
const _xafhxacs_ = "x-amz-fwd-header-x-amz-checksum-sha256";
const _xafhxadm = "x-amz-fwd-header-x-amz-delete-marker";
const _xafhxae = "x-amz-fwd-header-x-amz-expiration";
const _xafhxamm = "x-amz-fwd-header-x-amz-missing-meta";
const _xafhxampc = "x-amz-fwd-header-x-amz-mp-parts-count";
const _xafhxaollh = "x-amz-fwd-header-x-amz-object-lock-legal-hold";
const _xafhxaolm = "x-amz-fwd-header-x-amz-object-lock-mode";
const _xafhxaolrud = "x-amz-fwd-header-x-amz-object-lock-retain-until-date";
const _xafhxar = "x-amz-fwd-header-x-amz-restore";
const _xafhxarc = "x-amz-fwd-header-x-amz-request-charged";
const _xafhxars = "x-amz-fwd-header-x-amz-replication-status";
const _xafhxasc = "x-amz-fwd-header-x-amz-storage-class";
const _xafhxasse = "x-amz-fwd-header-x-amz-server-side-encryption";
const _xafhxasseakki = "x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id";
const _xafhxassebke = "x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled";
const _xafhxasseca = "x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm";
const _xafhxasseckm = "x-amz-fwd-header-x-amz-server-side-encryption-customer-key-md5";
const _xafhxatc = "x-amz-fwd-header-x-amz-tagging-count";
const _xafhxavi = "x-amz-fwd-header-x-amz-version-id";
const _xafs = "x-amz-fwd-status";
const _xagfc = "x-amz-grant-full-control";
const _xagr = "x-amz-grant-read";
const _xagra = "x-amz-grant-read-acp";
const _xagw = "x-amz-grant-write";
const _xagwa = "x-amz-grant-write-acp";
const _xaimit = "x-amz-if-match-initiated-time";
const _xaimlmt = "x-amz-if-match-last-modified-time";
const _xaims = "x-amz-if-match-size";
const _xam = "x-amz-mfa";
const _xamd = "x-amz-metadata-directive";
const _xamm = "x-amz-missing-meta";
const _xamos = "x-amz-mp-object-size";
const _xamp = "x-amz-max-parts";
const _xampc = "x-amz-mp-parts-count";
const _xaoa = "x-amz-object-attributes";
const _xaollh = "x-amz-object-lock-legal-hold";
const _xaolm = "x-amz-object-lock-mode";
const _xaolrud = "x-amz-object-lock-retain-until-date";
const _xaoo = "x-amz-object-ownership";
const _xaooa = "x-amz-optional-object-attributes";
const _xaos = "x-amz-object-size";
const _xapnm = "x-amz-part-number-marker";
const _xar = "x-amz-restore";
const _xarc = "x-amz-request-charged";
const _xarop = "x-amz-restore-output-path";
const _xarp = "x-amz-request-payer";
const _xarr = "x-amz-request-route";
const _xars = "x-amz-rename-source";
const _xars_ = "x-amz-replication-status";
const _xarsim = "x-amz-rename-source-if-match";
const _xarsims = "x-amz-rename-source-if-modified-since";
const _xarsinm = "x-amz-rename-source-if-none-match";
const _xarsius = "x-amz-rename-source-if-unmodified-since";
const _xart = "x-amz-request-token";
const _xasc = "x-amz-storage-class";
const _xasca = "x-amz-sdk-checksum-algorithm";
const _xasdv = "x-amz-skip-destination-validation";
const _xasebo = "x-amz-source-expected-bucket-owner";
const _xasse = "x-amz-server-side-encryption";
const _xasseakki = "x-amz-server-side-encryption-aws-kms-key-id";
const _xassebke = "x-amz-server-side-encryption-bucket-key-enabled";
const _xassec = "x-amz-server-side-encryption-context";
const _xasseca = "x-amz-server-side-encryption-customer-algorithm";
const _xasseck = "x-amz-server-side-encryption-customer-key";
const _xasseckm = "x-amz-server-side-encryption-customer-key-md5";
const _xat = "x-amz-tagging";
const _xatc = "x-amz-tagging-count";
const _xatd = "x-amz-tagging-directive";
const _xatdmos = "x-amz-transition-default-minimum-object-size";
const _xavi = "x-amz-version-id";
const _xawob = "x-amz-write-offset-bytes";
const _xawrl = "x-amz-website-redirect-location";
const _xi = "x-id";

class CreateSessionCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    DisableS3ExpressSessionAuth: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "CreateSession", {})
    .n("S3Client", "CreateSessionCommand")
    .f(CreateSessionRequestFilterSensitiveLog, CreateSessionOutputFilterSensitiveLog)
    .ser(se_CreateSessionCommand)
    .de(de_CreateSessionCommand)
    .build() {
}

const getHttpAuthExtensionConfiguration = (runtimeConfig) => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
        setHttpAuthScheme(httpAuthScheme) {
            const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
            if (index === -1) {
                _httpAuthSchemes.push(httpAuthScheme);
            }
            else {
                _httpAuthSchemes.splice(index, 1, httpAuthScheme);
            }
        },
        httpAuthSchemes() {
            return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
            _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
            return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
            _credentials = credentials;
        },
        credentials() {
            return _credentials;
        },
    };
};
const resolveHttpAuthRuntimeConfig = (config) => {
    return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials(),
    };
};

const resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = Object.assign(regionConfigResolver.getAwsRegionExtensionConfiguration(runtimeConfig), smithyClient.getDefaultExtensionConfiguration(runtimeConfig), protocolHttp.getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return Object.assign(runtimeConfig, regionConfigResolver.resolveAwsRegionExtensionConfiguration(extensionConfiguration), smithyClient.resolveDefaultRuntimeConfig(extensionConfiguration), protocolHttp.resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
};

class S3Client extends smithyClient.Client {
    config;
    constructor(...[configuration]) {
        const _config_0 = runtimeConfig.getRuntimeConfig(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = middlewareUserAgent.resolveUserAgentConfig(_config_1);
        const _config_3 = middlewareFlexibleChecksums.resolveFlexibleChecksumsConfig(_config_2);
        const _config_4 = middlewareRetry.resolveRetryConfig(_config_3);
        const _config_5 = configResolver.resolveRegionConfig(_config_4);
        const _config_6 = middlewareHostHeader.resolveHostHeaderConfig(_config_5);
        const _config_7 = middlewareEndpoint.resolveEndpointConfig(_config_6);
        const _config_8 = eventstreamSerdeConfigResolver.resolveEventStreamSerdeConfig(_config_7);
        const _config_9 = httpAuthSchemeProvider.resolveHttpAuthSchemeConfig(_config_8);
        const _config_10 = middlewareSdkS3.resolveS3Config(_config_9, { session: [() => this, CreateSessionCommand] });
        const _config_11 = resolveRuntimeExtensions(_config_10, configuration?.extensions || []);
        this.config = _config_11;
        this.middlewareStack.use(middlewareUserAgent.getUserAgentPlugin(this.config));
        this.middlewareStack.use(middlewareRetry.getRetryPlugin(this.config));
        this.middlewareStack.use(middlewareContentLength.getContentLengthPlugin(this.config));
        this.middlewareStack.use(middlewareHostHeader.getHostHeaderPlugin(this.config));
        this.middlewareStack.use(middlewareLogger.getLoggerPlugin(this.config));
        this.middlewareStack.use(middlewareRecursionDetection.getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(core.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: httpAuthSchemeProvider.defaultS3HttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (config) => new core.DefaultIdentityProviderConfig({
                "aws.auth#sigv4": config.credentials,
                "aws.auth#sigv4a": config.credentials,
            }),
        }));
        this.middlewareStack.use(core.getHttpSigningPlugin(this.config));
        this.middlewareStack.use(middlewareSdkS3.getValidateBucketNamePlugin(this.config));
        this.middlewareStack.use(middlewareExpectContinue.getAddExpectContinuePlugin(this.config));
        this.middlewareStack.use(middlewareSdkS3.getRegionRedirectMiddlewarePlugin(this.config));
        this.middlewareStack.use(middlewareSdkS3.getS3ExpressPlugin(this.config));
        this.middlewareStack.use(middlewareSdkS3.getS3ExpressHttpSigningPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}

class AbortMultipartUploadCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
    Key: { type: "contextParams", name: "Key" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "AbortMultipartUpload", {})
    .n("S3Client", "AbortMultipartUploadCommand")
    .f(void 0, void 0)
    .ser(se_AbortMultipartUploadCommand)
    .de(de_AbortMultipartUploadCommand)
    .build() {
}

class CompleteMultipartUploadCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
    Key: { type: "contextParams", name: "Key" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
        middlewareSsec.getSsecPlugin(config),
    ];
})
    .s("AmazonS3", "CompleteMultipartUpload", {})
    .n("S3Client", "CompleteMultipartUploadCommand")
    .f(CompleteMultipartUploadRequestFilterSensitiveLog, CompleteMultipartUploadOutputFilterSensitiveLog)
    .ser(se_CompleteMultipartUploadCommand)
    .de(de_CompleteMultipartUploadCommand)
    .build() {
}

class CopyObjectCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    DisableS3ExpressSessionAuth: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
    Key: { type: "contextParams", name: "Key" },
    CopySource: { type: "contextParams", name: "CopySource" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
        middlewareSsec.getSsecPlugin(config),
    ];
})
    .s("AmazonS3", "CopyObject", {})
    .n("S3Client", "CopyObjectCommand")
    .f(CopyObjectRequestFilterSensitiveLog, CopyObjectOutputFilterSensitiveLog)
    .ser(se_CopyObjectCommand)
    .de(de_CopyObjectCommand)
    .build() {
}

class CreateBucketCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    DisableAccessPoints: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
        middlewareLocationConstraint.getLocationConstraintPlugin(config),
    ];
})
    .s("AmazonS3", "CreateBucket", {})
    .n("S3Client", "CreateBucketCommand")
    .f(void 0, void 0)
    .ser(se_CreateBucketCommand)
    .de(de_CreateBucketCommand)
    .build() {
}

class CreateBucketMetadataConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
    ];
})
    .s("AmazonS3", "CreateBucketMetadataConfiguration", {})
    .n("S3Client", "CreateBucketMetadataConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_CreateBucketMetadataConfigurationCommand)
    .de(de_CreateBucketMetadataConfigurationCommand)
    .build() {
}

class CreateBucketMetadataTableConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
    ];
})
    .s("AmazonS3", "CreateBucketMetadataTableConfiguration", {})
    .n("S3Client", "CreateBucketMetadataTableConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_CreateBucketMetadataTableConfigurationCommand)
    .de(de_CreateBucketMetadataTableConfigurationCommand)
    .build() {
}

class CreateMultipartUploadCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
    Key: { type: "contextParams", name: "Key" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
        middlewareSsec.getSsecPlugin(config),
    ];
})
    .s("AmazonS3", "CreateMultipartUpload", {})
    .n("S3Client", "CreateMultipartUploadCommand")
    .f(CreateMultipartUploadRequestFilterSensitiveLog, CreateMultipartUploadOutputFilterSensitiveLog)
    .ser(se_CreateMultipartUploadCommand)
    .de(de_CreateMultipartUploadCommand)
    .build() {
}

class DeleteBucketAnalyticsConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "DeleteBucketAnalyticsConfiguration", {})
    .n("S3Client", "DeleteBucketAnalyticsConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_DeleteBucketAnalyticsConfigurationCommand)
    .de(de_DeleteBucketAnalyticsConfigurationCommand)
    .build() {
}

class DeleteBucketCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "DeleteBucket", {})
    .n("S3Client", "DeleteBucketCommand")
    .f(void 0, void 0)
    .ser(se_DeleteBucketCommand)
    .de(de_DeleteBucketCommand)
    .build() {
}

class DeleteBucketCorsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "DeleteBucketCors", {})
    .n("S3Client", "DeleteBucketCorsCommand")
    .f(void 0, void 0)
    .ser(se_DeleteBucketCorsCommand)
    .de(de_DeleteBucketCorsCommand)
    .build() {
}

class DeleteBucketEncryptionCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "DeleteBucketEncryption", {})
    .n("S3Client", "DeleteBucketEncryptionCommand")
    .f(void 0, void 0)
    .ser(se_DeleteBucketEncryptionCommand)
    .de(de_DeleteBucketEncryptionCommand)
    .build() {
}

class DeleteBucketIntelligentTieringConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "DeleteBucketIntelligentTieringConfiguration", {})
    .n("S3Client", "DeleteBucketIntelligentTieringConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_DeleteBucketIntelligentTieringConfigurationCommand)
    .de(de_DeleteBucketIntelligentTieringConfigurationCommand)
    .build() {
}

class DeleteBucketInventoryConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "DeleteBucketInventoryConfiguration", {})
    .n("S3Client", "DeleteBucketInventoryConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_DeleteBucketInventoryConfigurationCommand)
    .de(de_DeleteBucketInventoryConfigurationCommand)
    .build() {
}

class DeleteBucketLifecycleCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "DeleteBucketLifecycle", {})
    .n("S3Client", "DeleteBucketLifecycleCommand")
    .f(void 0, void 0)
    .ser(se_DeleteBucketLifecycleCommand)
    .de(de_DeleteBucketLifecycleCommand)
    .build() {
}

class DeleteBucketMetadataConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "DeleteBucketMetadataConfiguration", {})
    .n("S3Client", "DeleteBucketMetadataConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_DeleteBucketMetadataConfigurationCommand)
    .de(de_DeleteBucketMetadataConfigurationCommand)
    .build() {
}

class DeleteBucketMetadataTableConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "DeleteBucketMetadataTableConfiguration", {})
    .n("S3Client", "DeleteBucketMetadataTableConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_DeleteBucketMetadataTableConfigurationCommand)
    .de(de_DeleteBucketMetadataTableConfigurationCommand)
    .build() {
}

class DeleteBucketMetricsConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "DeleteBucketMetricsConfiguration", {})
    .n("S3Client", "DeleteBucketMetricsConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_DeleteBucketMetricsConfigurationCommand)
    .de(de_DeleteBucketMetricsConfigurationCommand)
    .build() {
}

class DeleteBucketOwnershipControlsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "DeleteBucketOwnershipControls", {})
    .n("S3Client", "DeleteBucketOwnershipControlsCommand")
    .f(void 0, void 0)
    .ser(se_DeleteBucketOwnershipControlsCommand)
    .de(de_DeleteBucketOwnershipControlsCommand)
    .build() {
}

class DeleteBucketPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "DeleteBucketPolicy", {})
    .n("S3Client", "DeleteBucketPolicyCommand")
    .f(void 0, void 0)
    .ser(se_DeleteBucketPolicyCommand)
    .de(de_DeleteBucketPolicyCommand)
    .build() {
}

class DeleteBucketReplicationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "DeleteBucketReplication", {})
    .n("S3Client", "DeleteBucketReplicationCommand")
    .f(void 0, void 0)
    .ser(se_DeleteBucketReplicationCommand)
    .de(de_DeleteBucketReplicationCommand)
    .build() {
}

class DeleteBucketTaggingCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "DeleteBucketTagging", {})
    .n("S3Client", "DeleteBucketTaggingCommand")
    .f(void 0, void 0)
    .ser(se_DeleteBucketTaggingCommand)
    .de(de_DeleteBucketTaggingCommand)
    .build() {
}

class DeleteBucketWebsiteCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "DeleteBucketWebsite", {})
    .n("S3Client", "DeleteBucketWebsiteCommand")
    .f(void 0, void 0)
    .ser(se_DeleteBucketWebsiteCommand)
    .de(de_DeleteBucketWebsiteCommand)
    .build() {
}

class DeleteObjectCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
    Key: { type: "contextParams", name: "Key" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "DeleteObject", {})
    .n("S3Client", "DeleteObjectCommand")
    .f(void 0, void 0)
    .ser(se_DeleteObjectCommand)
    .de(de_DeleteObjectCommand)
    .build() {
}

class DeleteObjectsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "DeleteObjects", {})
    .n("S3Client", "DeleteObjectsCommand")
    .f(void 0, void 0)
    .ser(se_DeleteObjectsCommand)
    .de(de_DeleteObjectsCommand)
    .build() {
}

class DeleteObjectTaggingCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "DeleteObjectTagging", {})
    .n("S3Client", "DeleteObjectTaggingCommand")
    .f(void 0, void 0)
    .ser(se_DeleteObjectTaggingCommand)
    .de(de_DeleteObjectTaggingCommand)
    .build() {
}

class DeletePublicAccessBlockCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "DeletePublicAccessBlock", {})
    .n("S3Client", "DeletePublicAccessBlockCommand")
    .f(void 0, void 0)
    .ser(se_DeletePublicAccessBlockCommand)
    .de(de_DeletePublicAccessBlockCommand)
    .build() {
}

class GetBucketAccelerateConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketAccelerateConfiguration", {})
    .n("S3Client", "GetBucketAccelerateConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketAccelerateConfigurationCommand)
    .de(de_GetBucketAccelerateConfigurationCommand)
    .build() {
}

class GetBucketAclCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketAcl", {})
    .n("S3Client", "GetBucketAclCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketAclCommand)
    .de(de_GetBucketAclCommand)
    .build() {
}

class GetBucketAnalyticsConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketAnalyticsConfiguration", {})
    .n("S3Client", "GetBucketAnalyticsConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketAnalyticsConfigurationCommand)
    .de(de_GetBucketAnalyticsConfigurationCommand)
    .build() {
}

class GetBucketCorsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketCors", {})
    .n("S3Client", "GetBucketCorsCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketCorsCommand)
    .de(de_GetBucketCorsCommand)
    .build() {
}

class GetBucketEncryptionCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketEncryption", {})
    .n("S3Client", "GetBucketEncryptionCommand")
    .f(void 0, GetBucketEncryptionOutputFilterSensitiveLog)
    .ser(se_GetBucketEncryptionCommand)
    .de(de_GetBucketEncryptionCommand)
    .build() {
}

class GetBucketIntelligentTieringConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketIntelligentTieringConfiguration", {})
    .n("S3Client", "GetBucketIntelligentTieringConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketIntelligentTieringConfigurationCommand)
    .de(de_GetBucketIntelligentTieringConfigurationCommand)
    .build() {
}

class GetBucketInventoryConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketInventoryConfiguration", {})
    .n("S3Client", "GetBucketInventoryConfigurationCommand")
    .f(void 0, GetBucketInventoryConfigurationOutputFilterSensitiveLog)
    .ser(se_GetBucketInventoryConfigurationCommand)
    .de(de_GetBucketInventoryConfigurationCommand)
    .build() {
}

class GetBucketLifecycleConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketLifecycleConfiguration", {})
    .n("S3Client", "GetBucketLifecycleConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketLifecycleConfigurationCommand)
    .de(de_GetBucketLifecycleConfigurationCommand)
    .build() {
}

class GetBucketLocationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketLocation", {})
    .n("S3Client", "GetBucketLocationCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketLocationCommand)
    .de(de_GetBucketLocationCommand)
    .build() {
}

class GetBucketLoggingCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketLogging", {})
    .n("S3Client", "GetBucketLoggingCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketLoggingCommand)
    .de(de_GetBucketLoggingCommand)
    .build() {
}

class GetBucketMetadataConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketMetadataConfiguration", {})
    .n("S3Client", "GetBucketMetadataConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketMetadataConfigurationCommand)
    .de(de_GetBucketMetadataConfigurationCommand)
    .build() {
}

class GetBucketMetadataTableConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketMetadataTableConfiguration", {})
    .n("S3Client", "GetBucketMetadataTableConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketMetadataTableConfigurationCommand)
    .de(de_GetBucketMetadataTableConfigurationCommand)
    .build() {
}

class GetBucketMetricsConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketMetricsConfiguration", {})
    .n("S3Client", "GetBucketMetricsConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketMetricsConfigurationCommand)
    .de(de_GetBucketMetricsConfigurationCommand)
    .build() {
}

class GetBucketNotificationConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketNotificationConfiguration", {})
    .n("S3Client", "GetBucketNotificationConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketNotificationConfigurationCommand)
    .de(de_GetBucketNotificationConfigurationCommand)
    .build() {
}

class GetBucketOwnershipControlsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketOwnershipControls", {})
    .n("S3Client", "GetBucketOwnershipControlsCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketOwnershipControlsCommand)
    .de(de_GetBucketOwnershipControlsCommand)
    .build() {
}

class GetBucketPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketPolicy", {})
    .n("S3Client", "GetBucketPolicyCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketPolicyCommand)
    .de(de_GetBucketPolicyCommand)
    .build() {
}

class GetBucketPolicyStatusCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketPolicyStatus", {})
    .n("S3Client", "GetBucketPolicyStatusCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketPolicyStatusCommand)
    .de(de_GetBucketPolicyStatusCommand)
    .build() {
}

class GetBucketReplicationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketReplication", {})
    .n("S3Client", "GetBucketReplicationCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketReplicationCommand)
    .de(de_GetBucketReplicationCommand)
    .build() {
}

class GetBucketRequestPaymentCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketRequestPayment", {})
    .n("S3Client", "GetBucketRequestPaymentCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketRequestPaymentCommand)
    .de(de_GetBucketRequestPaymentCommand)
    .build() {
}

class GetBucketTaggingCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketTagging", {})
    .n("S3Client", "GetBucketTaggingCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketTaggingCommand)
    .de(de_GetBucketTaggingCommand)
    .build() {
}

class GetBucketVersioningCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketVersioning", {})
    .n("S3Client", "GetBucketVersioningCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketVersioningCommand)
    .de(de_GetBucketVersioningCommand)
    .build() {
}

class GetBucketWebsiteCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetBucketWebsite", {})
    .n("S3Client", "GetBucketWebsiteCommand")
    .f(void 0, void 0)
    .ser(se_GetBucketWebsiteCommand)
    .de(de_GetBucketWebsiteCommand)
    .build() {
}

class GetObjectAclCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
    Key: { type: "contextParams", name: "Key" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetObjectAcl", {})
    .n("S3Client", "GetObjectAclCommand")
    .f(void 0, void 0)
    .ser(se_GetObjectAclCommand)
    .de(de_GetObjectAclCommand)
    .build() {
}

class GetObjectAttributesCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
        middlewareSsec.getSsecPlugin(config),
    ];
})
    .s("AmazonS3", "GetObjectAttributes", {})
    .n("S3Client", "GetObjectAttributesCommand")
    .f(GetObjectAttributesRequestFilterSensitiveLog, void 0)
    .ser(se_GetObjectAttributesCommand)
    .de(de_GetObjectAttributesCommand)
    .build() {
}

class GetObjectCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
    Key: { type: "contextParams", name: "Key" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestChecksumRequired: false,
            requestValidationModeMember: "ChecksumMode",
            responseAlgorithms: ["CRC64NVME", "CRC32", "CRC32C", "SHA256", "SHA1"],
        }),
        middlewareSsec.getSsecPlugin(config),
        middlewareSdkS3.getS3ExpiresMiddlewarePlugin(config),
    ];
})
    .s("AmazonS3", "GetObject", {})
    .n("S3Client", "GetObjectCommand")
    .f(GetObjectRequestFilterSensitiveLog, GetObjectOutputFilterSensitiveLog)
    .ser(se_GetObjectCommand)
    .de(de_GetObjectCommand)
    .build() {
}

class GetObjectLegalHoldCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetObjectLegalHold", {})
    .n("S3Client", "GetObjectLegalHoldCommand")
    .f(void 0, void 0)
    .ser(se_GetObjectLegalHoldCommand)
    .de(de_GetObjectLegalHoldCommand)
    .build() {
}

class GetObjectLockConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetObjectLockConfiguration", {})
    .n("S3Client", "GetObjectLockConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_GetObjectLockConfigurationCommand)
    .de(de_GetObjectLockConfigurationCommand)
    .build() {
}

class GetObjectRetentionCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetObjectRetention", {})
    .n("S3Client", "GetObjectRetentionCommand")
    .f(void 0, void 0)
    .ser(se_GetObjectRetentionCommand)
    .de(de_GetObjectRetentionCommand)
    .build() {
}

class GetObjectTaggingCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetObjectTagging", {})
    .n("S3Client", "GetObjectTaggingCommand")
    .f(void 0, void 0)
    .ser(se_GetObjectTaggingCommand)
    .de(de_GetObjectTaggingCommand)
    .build() {
}

class GetObjectTorrentCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "GetObjectTorrent", {})
    .n("S3Client", "GetObjectTorrentCommand")
    .f(void 0, GetObjectTorrentOutputFilterSensitiveLog)
    .ser(se_GetObjectTorrentCommand)
    .de(de_GetObjectTorrentCommand)
    .build() {
}

class GetPublicAccessBlockCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "GetPublicAccessBlock", {})
    .n("S3Client", "GetPublicAccessBlockCommand")
    .f(void 0, void 0)
    .ser(se_GetPublicAccessBlockCommand)
    .de(de_GetPublicAccessBlockCommand)
    .build() {
}

class HeadBucketCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "HeadBucket", {})
    .n("S3Client", "HeadBucketCommand")
    .f(void 0, void 0)
    .ser(se_HeadBucketCommand)
    .de(de_HeadBucketCommand)
    .build() {
}

class HeadObjectCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
    Key: { type: "contextParams", name: "Key" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
        middlewareSsec.getSsecPlugin(config),
        middlewareSdkS3.getS3ExpiresMiddlewarePlugin(config),
    ];
})
    .s("AmazonS3", "HeadObject", {})
    .n("S3Client", "HeadObjectCommand")
    .f(HeadObjectRequestFilterSensitiveLog, HeadObjectOutputFilterSensitiveLog)
    .ser(se_HeadObjectCommand)
    .de(de_HeadObjectCommand)
    .build() {
}

class ListBucketAnalyticsConfigurationsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "ListBucketAnalyticsConfigurations", {})
    .n("S3Client", "ListBucketAnalyticsConfigurationsCommand")
    .f(void 0, void 0)
    .ser(se_ListBucketAnalyticsConfigurationsCommand)
    .de(de_ListBucketAnalyticsConfigurationsCommand)
    .build() {
}

class ListBucketIntelligentTieringConfigurationsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "ListBucketIntelligentTieringConfigurations", {})
    .n("S3Client", "ListBucketIntelligentTieringConfigurationsCommand")
    .f(void 0, void 0)
    .ser(se_ListBucketIntelligentTieringConfigurationsCommand)
    .de(de_ListBucketIntelligentTieringConfigurationsCommand)
    .build() {
}

class ListBucketInventoryConfigurationsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "ListBucketInventoryConfigurations", {})
    .n("S3Client", "ListBucketInventoryConfigurationsCommand")
    .f(void 0, ListBucketInventoryConfigurationsOutputFilterSensitiveLog)
    .ser(se_ListBucketInventoryConfigurationsCommand)
    .de(de_ListBucketInventoryConfigurationsCommand)
    .build() {
}

class ListBucketMetricsConfigurationsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "ListBucketMetricsConfigurations", {})
    .n("S3Client", "ListBucketMetricsConfigurationsCommand")
    .f(void 0, void 0)
    .ser(se_ListBucketMetricsConfigurationsCommand)
    .de(de_ListBucketMetricsConfigurationsCommand)
    .build() {
}

class ListBucketsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "ListBuckets", {})
    .n("S3Client", "ListBucketsCommand")
    .f(void 0, void 0)
    .ser(se_ListBucketsCommand)
    .de(de_ListBucketsCommand)
    .build() {
}

class ListDirectoryBucketsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "ListDirectoryBuckets", {})
    .n("S3Client", "ListDirectoryBucketsCommand")
    .f(void 0, void 0)
    .ser(se_ListDirectoryBucketsCommand)
    .de(de_ListDirectoryBucketsCommand)
    .build() {
}

class ListMultipartUploadsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
    Prefix: { type: "contextParams", name: "Prefix" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "ListMultipartUploads", {})
    .n("S3Client", "ListMultipartUploadsCommand")
    .f(void 0, void 0)
    .ser(se_ListMultipartUploadsCommand)
    .de(de_ListMultipartUploadsCommand)
    .build() {
}

class ListObjectsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
    Prefix: { type: "contextParams", name: "Prefix" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "ListObjects", {})
    .n("S3Client", "ListObjectsCommand")
    .f(void 0, void 0)
    .ser(se_ListObjectsCommand)
    .de(de_ListObjectsCommand)
    .build() {
}

class ListObjectsV2Command extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
    Prefix: { type: "contextParams", name: "Prefix" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "ListObjectsV2", {})
    .n("S3Client", "ListObjectsV2Command")
    .f(void 0, void 0)
    .ser(se_ListObjectsV2Command)
    .de(de_ListObjectsV2Command)
    .build() {
}

class ListObjectVersionsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
    Prefix: { type: "contextParams", name: "Prefix" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "ListObjectVersions", {})
    .n("S3Client", "ListObjectVersionsCommand")
    .f(void 0, void 0)
    .ser(se_ListObjectVersionsCommand)
    .de(de_ListObjectVersionsCommand)
    .build() {
}

class ListPartsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
    Key: { type: "contextParams", name: "Key" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
        middlewareSsec.getSsecPlugin(config),
    ];
})
    .s("AmazonS3", "ListParts", {})
    .n("S3Client", "ListPartsCommand")
    .f(ListPartsRequestFilterSensitiveLog, void 0)
    .ser(se_ListPartsCommand)
    .de(de_ListPartsCommand)
    .build() {
}

class PutBucketAccelerateConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: false,
        }),
    ];
})
    .s("AmazonS3", "PutBucketAccelerateConfiguration", {})
    .n("S3Client", "PutBucketAccelerateConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_PutBucketAccelerateConfigurationCommand)
    .de(de_PutBucketAccelerateConfigurationCommand)
    .build() {
}

class PutBucketAclCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
    ];
})
    .s("AmazonS3", "PutBucketAcl", {})
    .n("S3Client", "PutBucketAclCommand")
    .f(void 0, void 0)
    .ser(se_PutBucketAclCommand)
    .de(de_PutBucketAclCommand)
    .build() {
}

class PutBucketAnalyticsConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "PutBucketAnalyticsConfiguration", {})
    .n("S3Client", "PutBucketAnalyticsConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_PutBucketAnalyticsConfigurationCommand)
    .de(de_PutBucketAnalyticsConfigurationCommand)
    .build() {
}

class PutBucketCorsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
    ];
})
    .s("AmazonS3", "PutBucketCors", {})
    .n("S3Client", "PutBucketCorsCommand")
    .f(void 0, void 0)
    .ser(se_PutBucketCorsCommand)
    .de(de_PutBucketCorsCommand)
    .build() {
}

class PutBucketEncryptionCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
    ];
})
    .s("AmazonS3", "PutBucketEncryption", {})
    .n("S3Client", "PutBucketEncryptionCommand")
    .f(PutBucketEncryptionRequestFilterSensitiveLog, void 0)
    .ser(se_PutBucketEncryptionCommand)
    .de(de_PutBucketEncryptionCommand)
    .build() {
}

class PutBucketIntelligentTieringConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "PutBucketIntelligentTieringConfiguration", {})
    .n("S3Client", "PutBucketIntelligentTieringConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_PutBucketIntelligentTieringConfigurationCommand)
    .de(de_PutBucketIntelligentTieringConfigurationCommand)
    .build() {
}

class PutBucketInventoryConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "PutBucketInventoryConfiguration", {})
    .n("S3Client", "PutBucketInventoryConfigurationCommand")
    .f(PutBucketInventoryConfigurationRequestFilterSensitiveLog, void 0)
    .ser(se_PutBucketInventoryConfigurationCommand)
    .de(de_PutBucketInventoryConfigurationCommand)
    .build() {
}

class PutBucketLifecycleConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "PutBucketLifecycleConfiguration", {})
    .n("S3Client", "PutBucketLifecycleConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_PutBucketLifecycleConfigurationCommand)
    .de(de_PutBucketLifecycleConfigurationCommand)
    .build() {
}

class PutBucketLoggingCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
    ];
})
    .s("AmazonS3", "PutBucketLogging", {})
    .n("S3Client", "PutBucketLoggingCommand")
    .f(void 0, void 0)
    .ser(se_PutBucketLoggingCommand)
    .de(de_PutBucketLoggingCommand)
    .build() {
}

class PutBucketMetricsConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "PutBucketMetricsConfiguration", {})
    .n("S3Client", "PutBucketMetricsConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_PutBucketMetricsConfigurationCommand)
    .de(de_PutBucketMetricsConfigurationCommand)
    .build() {
}

class PutBucketNotificationConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "PutBucketNotificationConfiguration", {})
    .n("S3Client", "PutBucketNotificationConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_PutBucketNotificationConfigurationCommand)
    .de(de_PutBucketNotificationConfigurationCommand)
    .build() {
}

class PutBucketOwnershipControlsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
    ];
})
    .s("AmazonS3", "PutBucketOwnershipControls", {})
    .n("S3Client", "PutBucketOwnershipControlsCommand")
    .f(void 0, void 0)
    .ser(se_PutBucketOwnershipControlsCommand)
    .de(de_PutBucketOwnershipControlsCommand)
    .build() {
}

class PutBucketPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
    ];
})
    .s("AmazonS3", "PutBucketPolicy", {})
    .n("S3Client", "PutBucketPolicyCommand")
    .f(void 0, void 0)
    .ser(se_PutBucketPolicyCommand)
    .de(de_PutBucketPolicyCommand)
    .build() {
}

class PutBucketReplicationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
    ];
})
    .s("AmazonS3", "PutBucketReplication", {})
    .n("S3Client", "PutBucketReplicationCommand")
    .f(void 0, void 0)
    .ser(se_PutBucketReplicationCommand)
    .de(de_PutBucketReplicationCommand)
    .build() {
}

class PutBucketRequestPaymentCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
    ];
})
    .s("AmazonS3", "PutBucketRequestPayment", {})
    .n("S3Client", "PutBucketRequestPaymentCommand")
    .f(void 0, void 0)
    .ser(se_PutBucketRequestPaymentCommand)
    .de(de_PutBucketRequestPaymentCommand)
    .build() {
}

class PutBucketTaggingCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
    ];
})
    .s("AmazonS3", "PutBucketTagging", {})
    .n("S3Client", "PutBucketTaggingCommand")
    .f(void 0, void 0)
    .ser(se_PutBucketTaggingCommand)
    .de(de_PutBucketTaggingCommand)
    .build() {
}

class PutBucketVersioningCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
    ];
})
    .s("AmazonS3", "PutBucketVersioning", {})
    .n("S3Client", "PutBucketVersioningCommand")
    .f(void 0, void 0)
    .ser(se_PutBucketVersioningCommand)
    .de(de_PutBucketVersioningCommand)
    .build() {
}

class PutBucketWebsiteCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
    ];
})
    .s("AmazonS3", "PutBucketWebsite", {})
    .n("S3Client", "PutBucketWebsiteCommand")
    .f(void 0, void 0)
    .ser(se_PutBucketWebsiteCommand)
    .de(de_PutBucketWebsiteCommand)
    .build() {
}

class PutObjectAclCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
    Key: { type: "contextParams", name: "Key" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "PutObjectAcl", {})
    .n("S3Client", "PutObjectAclCommand")
    .f(void 0, void 0)
    .ser(se_PutObjectAclCommand)
    .de(de_PutObjectAclCommand)
    .build() {
}

class PutObjectCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
    Key: { type: "contextParams", name: "Key" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: false,
        }),
        middlewareSdkS3.getCheckContentLengthHeaderPlugin(config),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
        middlewareSsec.getSsecPlugin(config),
    ];
})
    .s("AmazonS3", "PutObject", {})
    .n("S3Client", "PutObjectCommand")
    .f(PutObjectRequestFilterSensitiveLog, PutObjectOutputFilterSensitiveLog)
    .ser(se_PutObjectCommand)
    .de(de_PutObjectCommand)
    .build() {
}

class PutObjectLegalHoldCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "PutObjectLegalHold", {})
    .n("S3Client", "PutObjectLegalHoldCommand")
    .f(void 0, void 0)
    .ser(se_PutObjectLegalHoldCommand)
    .de(de_PutObjectLegalHoldCommand)
    .build() {
}

class PutObjectLockConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "PutObjectLockConfiguration", {})
    .n("S3Client", "PutObjectLockConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_PutObjectLockConfigurationCommand)
    .de(de_PutObjectLockConfigurationCommand)
    .build() {
}

class PutObjectRetentionCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "PutObjectRetention", {})
    .n("S3Client", "PutObjectRetentionCommand")
    .f(void 0, void 0)
    .ser(se_PutObjectRetentionCommand)
    .de(de_PutObjectRetentionCommand)
    .build() {
}

class PutObjectTaggingCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "PutObjectTagging", {})
    .n("S3Client", "PutObjectTaggingCommand")
    .f(void 0, void 0)
    .ser(se_PutObjectTaggingCommand)
    .de(de_PutObjectTaggingCommand)
    .build() {
}

class PutPublicAccessBlockCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
    ];
})
    .s("AmazonS3", "PutPublicAccessBlock", {})
    .n("S3Client", "PutPublicAccessBlockCommand")
    .f(void 0, void 0)
    .ser(se_PutPublicAccessBlockCommand)
    .de(de_PutPublicAccessBlockCommand)
    .build() {
}

class RenameObjectCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
    Key: { type: "contextParams", name: "Key" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "RenameObject", {})
    .n("S3Client", "RenameObjectCommand")
    .f(void 0, void 0)
    .ser(se_RenameObjectCommand)
    .de(de_RenameObjectCommand)
    .build() {
}

class RestoreObjectCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: false,
        }),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
    ];
})
    .s("AmazonS3", "RestoreObject", {})
    .n("S3Client", "RestoreObjectCommand")
    .f(RestoreObjectRequestFilterSensitiveLog, void 0)
    .ser(se_RestoreObjectCommand)
    .de(de_RestoreObjectCommand)
    .build() {
}

class SelectObjectContentCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
        middlewareSsec.getSsecPlugin(config),
    ];
})
    .s("AmazonS3", "SelectObjectContent", {
    eventStream: {
        output: true,
    },
})
    .n("S3Client", "SelectObjectContentCommand")
    .f(SelectObjectContentRequestFilterSensitiveLog, SelectObjectContentOutputFilterSensitiveLog)
    .ser(se_SelectObjectContentCommand)
    .de(de_SelectObjectContentCommand)
    .build() {
}

class UpdateBucketMetadataInventoryTableConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
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

class UpdateBucketMetadataJournalTableConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: true,
        }),
    ];
})
    .s("AmazonS3", "UpdateBucketMetadataJournalTableConfiguration", {})
    .n("S3Client", "UpdateBucketMetadataJournalTableConfigurationCommand")
    .f(void 0, void 0)
    .ser(se_UpdateBucketMetadataJournalTableConfigurationCommand)
    .de(de_UpdateBucketMetadataJournalTableConfigurationCommand)
    .build() {
}

class UploadPartCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
    Key: { type: "contextParams", name: "Key" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareFlexibleChecksums.getFlexibleChecksumsPlugin(config, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: false,
        }),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
        middlewareSsec.getSsecPlugin(config),
    ];
})
    .s("AmazonS3", "UploadPart", {})
    .n("S3Client", "UploadPartCommand")
    .f(UploadPartRequestFilterSensitiveLog, UploadPartOutputFilterSensitiveLog)
    .ser(se_UploadPartCommand)
    .de(de_UploadPartCommand)
    .build() {
}

class UploadPartCopyCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    DisableS3ExpressSessionAuth: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareSdkS3.getThrow200ExceptionsPlugin(config),
        middlewareSsec.getSsecPlugin(config),
    ];
})
    .s("AmazonS3", "UploadPartCopy", {})
    .n("S3Client", "UploadPartCopyCommand")
    .f(UploadPartCopyRequestFilterSensitiveLog, UploadPartCopyOutputFilterSensitiveLog)
    .ser(se_UploadPartCopyCommand)
    .de(de_UploadPartCopyCommand)
    .build() {
}

class WriteGetObjectResponseCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    UseObjectLambdaEndpoint: { type: "staticContextParams", value: true },
})
    .m(function (Command, cs, config, o) {
    return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonS3", "WriteGetObjectResponse", {})
    .n("S3Client", "WriteGetObjectResponseCommand")
    .f(WriteGetObjectResponseRequestFilterSensitiveLog, void 0)
    .ser(se_WriteGetObjectResponseCommand)
    .de(de_WriteGetObjectResponseCommand)
    .build() {
}

const commands = {
    AbortMultipartUploadCommand,
    CompleteMultipartUploadCommand,
    CopyObjectCommand,
    CreateBucketCommand,
    CreateBucketMetadataConfigurationCommand,
    CreateBucketMetadataTableConfigurationCommand,
    CreateMultipartUploadCommand,
    CreateSessionCommand,
    DeleteBucketCommand,
    DeleteBucketAnalyticsConfigurationCommand,
    DeleteBucketCorsCommand,
    DeleteBucketEncryptionCommand,
    DeleteBucketIntelligentTieringConfigurationCommand,
    DeleteBucketInventoryConfigurationCommand,
    DeleteBucketLifecycleCommand,
    DeleteBucketMetadataConfigurationCommand,
    DeleteBucketMetadataTableConfigurationCommand,
    DeleteBucketMetricsConfigurationCommand,
    DeleteBucketOwnershipControlsCommand,
    DeleteBucketPolicyCommand,
    DeleteBucketReplicationCommand,
    DeleteBucketTaggingCommand,
    DeleteBucketWebsiteCommand,
    DeleteObjectCommand,
    DeleteObjectsCommand,
    DeleteObjectTaggingCommand,
    DeletePublicAccessBlockCommand,
    GetBucketAccelerateConfigurationCommand,
    GetBucketAclCommand,
    GetBucketAnalyticsConfigurationCommand,
    GetBucketCorsCommand,
    GetBucketEncryptionCommand,
    GetBucketIntelligentTieringConfigurationCommand,
    GetBucketInventoryConfigurationCommand,
    GetBucketLifecycleConfigurationCommand,
    GetBucketLocationCommand,
    GetBucketLoggingCommand,
    GetBucketMetadataConfigurationCommand,
    GetBucketMetadataTableConfigurationCommand,
    GetBucketMetricsConfigurationCommand,
    GetBucketNotificationConfigurationCommand,
    GetBucketOwnershipControlsCommand,
    GetBucketPolicyCommand,
    GetBucketPolicyStatusCommand,
    GetBucketReplicationCommand,
    GetBucketRequestPaymentCommand,
    GetBucketTaggingCommand,
    GetBucketVersioningCommand,
    GetBucketWebsiteCommand,
    GetObjectCommand,
    GetObjectAclCommand,
    GetObjectAttributesCommand,
    GetObjectLegalHoldCommand,
    GetObjectLockConfigurationCommand,
    GetObjectRetentionCommand,
    GetObjectTaggingCommand,
    GetObjectTorrentCommand,
    GetPublicAccessBlockCommand,
    HeadBucketCommand,
    HeadObjectCommand,
    ListBucketAnalyticsConfigurationsCommand,
    ListBucketIntelligentTieringConfigurationsCommand,
    ListBucketInventoryConfigurationsCommand,
    ListBucketMetricsConfigurationsCommand,
    ListBucketsCommand,
    ListDirectoryBucketsCommand,
    ListMultipartUploadsCommand,
    ListObjectsCommand,
    ListObjectsV2Command,
    ListObjectVersionsCommand,
    ListPartsCommand,
    PutBucketAccelerateConfigurationCommand,
    PutBucketAclCommand,
    PutBucketAnalyticsConfigurationCommand,
    PutBucketCorsCommand,
    PutBucketEncryptionCommand,
    PutBucketIntelligentTieringConfigurationCommand,
    PutBucketInventoryConfigurationCommand,
    PutBucketLifecycleConfigurationCommand,
    PutBucketLoggingCommand,
    PutBucketMetricsConfigurationCommand,
    PutBucketNotificationConfigurationCommand,
    PutBucketOwnershipControlsCommand,
    PutBucketPolicyCommand,
    PutBucketReplicationCommand,
    PutBucketRequestPaymentCommand,
    PutBucketTaggingCommand,
    PutBucketVersioningCommand,
    PutBucketWebsiteCommand,
    PutObjectCommand,
    PutObjectAclCommand,
    PutObjectLegalHoldCommand,
    PutObjectLockConfigurationCommand,
    PutObjectRetentionCommand,
    PutObjectTaggingCommand,
    PutPublicAccessBlockCommand,
    RenameObjectCommand,
    RestoreObjectCommand,
    SelectObjectContentCommand,
    UpdateBucketMetadataInventoryTableConfigurationCommand,
    UpdateBucketMetadataJournalTableConfigurationCommand,
    UploadPartCommand,
    UploadPartCopyCommand,
    WriteGetObjectResponseCommand,
};
class S3 extends S3Client {
}
smithyClient.createAggregatedClient(commands, S3);

const paginateListBuckets = core.createPaginator(S3Client, ListBucketsCommand, "ContinuationToken", "ContinuationToken", "MaxBuckets");

const paginateListDirectoryBuckets = core.createPaginator(S3Client, ListDirectoryBucketsCommand, "ContinuationToken", "ContinuationToken", "MaxDirectoryBuckets");

const paginateListObjectsV2 = core.createPaginator(S3Client, ListObjectsV2Command, "ContinuationToken", "NextContinuationToken", "MaxKeys");

const paginateListParts = core.createPaginator(S3Client, ListPartsCommand, "PartNumberMarker", "NextPartNumberMarker", "MaxParts");

const checkState$3 = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new HeadBucketCommand(input));
        reason = result;
        return { state: utilWaiter.WaiterState.SUCCESS, reason };
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "NotFound") {
            return { state: utilWaiter.WaiterState.RETRY, reason };
        }
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForBucketExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$3);
};
const waitUntilBucketExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$3);
    return utilWaiter.checkExceptions(result);
};

const checkState$2 = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new HeadBucketCommand(input));
        reason = result;
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "NotFound") {
            return { state: utilWaiter.WaiterState.SUCCESS, reason };
        }
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForBucketNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$2);
};
const waitUntilBucketNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$2);
    return utilWaiter.checkExceptions(result);
};

const checkState$1 = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new HeadObjectCommand(input));
        reason = result;
        return { state: utilWaiter.WaiterState.SUCCESS, reason };
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "NotFound") {
            return { state: utilWaiter.WaiterState.RETRY, reason };
        }
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForObjectExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$1);
};
const waitUntilObjectExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$1);
    return utilWaiter.checkExceptions(result);
};

const checkState = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new HeadObjectCommand(input));
        reason = result;
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "NotFound") {
            return { state: utilWaiter.WaiterState.SUCCESS, reason };
        }
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForObjectNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
const waitUntilObjectNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return utilWaiter.checkExceptions(result);
};

Object.defineProperty(exports, "$Command", {
    enumerable: true,
    get: function () { return smithyClient.Command; }
});
Object.defineProperty(exports, "__Client", {
    enumerable: true,
    get: function () { return smithyClient.Client; }
});
exports.AbortMultipartUploadCommand = AbortMultipartUploadCommand;
exports.AnalyticsS3ExportFileFormat = AnalyticsS3ExportFileFormat;
exports.ArchiveStatus = ArchiveStatus;
exports.BucketAccelerateStatus = BucketAccelerateStatus;
exports.BucketAlreadyExists = BucketAlreadyExists;
exports.BucketAlreadyOwnedByYou = BucketAlreadyOwnedByYou;
exports.BucketCannedACL = BucketCannedACL;
exports.BucketLocationConstraint = BucketLocationConstraint;
exports.BucketLogsPermission = BucketLogsPermission;
exports.BucketType = BucketType;
exports.BucketVersioningStatus = BucketVersioningStatus;
exports.ChecksumAlgorithm = ChecksumAlgorithm;
exports.ChecksumMode = ChecksumMode;
exports.ChecksumType = ChecksumType;
exports.CompleteMultipartUploadCommand = CompleteMultipartUploadCommand;
exports.CompleteMultipartUploadOutputFilterSensitiveLog = CompleteMultipartUploadOutputFilterSensitiveLog;
exports.CompleteMultipartUploadRequestFilterSensitiveLog = CompleteMultipartUploadRequestFilterSensitiveLog;
exports.CompressionType = CompressionType;
exports.CopyObjectCommand = CopyObjectCommand;
exports.CopyObjectOutputFilterSensitiveLog = CopyObjectOutputFilterSensitiveLog;
exports.CopyObjectRequestFilterSensitiveLog = CopyObjectRequestFilterSensitiveLog;
exports.CreateBucketCommand = CreateBucketCommand;
exports.CreateBucketMetadataConfigurationCommand = CreateBucketMetadataConfigurationCommand;
exports.CreateBucketMetadataTableConfigurationCommand = CreateBucketMetadataTableConfigurationCommand;
exports.CreateMultipartUploadCommand = CreateMultipartUploadCommand;
exports.CreateMultipartUploadOutputFilterSensitiveLog = CreateMultipartUploadOutputFilterSensitiveLog;
exports.CreateMultipartUploadRequestFilterSensitiveLog = CreateMultipartUploadRequestFilterSensitiveLog;
exports.CreateSessionCommand = CreateSessionCommand;
exports.CreateSessionOutputFilterSensitiveLog = CreateSessionOutputFilterSensitiveLog;
exports.CreateSessionRequestFilterSensitiveLog = CreateSessionRequestFilterSensitiveLog;
exports.DataRedundancy = DataRedundancy;
exports.DeleteBucketAnalyticsConfigurationCommand = DeleteBucketAnalyticsConfigurationCommand;
exports.DeleteBucketCommand = DeleteBucketCommand;
exports.DeleteBucketCorsCommand = DeleteBucketCorsCommand;
exports.DeleteBucketEncryptionCommand = DeleteBucketEncryptionCommand;
exports.DeleteBucketIntelligentTieringConfigurationCommand = DeleteBucketIntelligentTieringConfigurationCommand;
exports.DeleteBucketInventoryConfigurationCommand = DeleteBucketInventoryConfigurationCommand;
exports.DeleteBucketLifecycleCommand = DeleteBucketLifecycleCommand;
exports.DeleteBucketMetadataConfigurationCommand = DeleteBucketMetadataConfigurationCommand;
exports.DeleteBucketMetadataTableConfigurationCommand = DeleteBucketMetadataTableConfigurationCommand;
exports.DeleteBucketMetricsConfigurationCommand = DeleteBucketMetricsConfigurationCommand;
exports.DeleteBucketOwnershipControlsCommand = DeleteBucketOwnershipControlsCommand;
exports.DeleteBucketPolicyCommand = DeleteBucketPolicyCommand;
exports.DeleteBucketReplicationCommand = DeleteBucketReplicationCommand;
exports.DeleteBucketTaggingCommand = DeleteBucketTaggingCommand;
exports.DeleteBucketWebsiteCommand = DeleteBucketWebsiteCommand;
exports.DeleteMarkerReplicationStatus = DeleteMarkerReplicationStatus;
exports.DeleteObjectCommand = DeleteObjectCommand;
exports.DeleteObjectTaggingCommand = DeleteObjectTaggingCommand;
exports.DeleteObjectsCommand = DeleteObjectsCommand;
exports.DeletePublicAccessBlockCommand = DeletePublicAccessBlockCommand;
exports.EncodingType = EncodingType;
exports.EncryptionFilterSensitiveLog = EncryptionFilterSensitiveLog;
exports.EncryptionTypeMismatch = EncryptionTypeMismatch;
exports.Event = Event;
exports.ExistingObjectReplicationStatus = ExistingObjectReplicationStatus;
exports.ExpirationState = ExpirationState;
exports.ExpirationStatus = ExpirationStatus;
exports.ExpressionType = ExpressionType;
exports.FileHeaderInfo = FileHeaderInfo;
exports.FilterRuleName = FilterRuleName;
exports.GetBucketAccelerateConfigurationCommand = GetBucketAccelerateConfigurationCommand;
exports.GetBucketAclCommand = GetBucketAclCommand;
exports.GetBucketAnalyticsConfigurationCommand = GetBucketAnalyticsConfigurationCommand;
exports.GetBucketCorsCommand = GetBucketCorsCommand;
exports.GetBucketEncryptionCommand = GetBucketEncryptionCommand;
exports.GetBucketEncryptionOutputFilterSensitiveLog = GetBucketEncryptionOutputFilterSensitiveLog;
exports.GetBucketIntelligentTieringConfigurationCommand = GetBucketIntelligentTieringConfigurationCommand;
exports.GetBucketInventoryConfigurationCommand = GetBucketInventoryConfigurationCommand;
exports.GetBucketInventoryConfigurationOutputFilterSensitiveLog = GetBucketInventoryConfigurationOutputFilterSensitiveLog;
exports.GetBucketLifecycleConfigurationCommand = GetBucketLifecycleConfigurationCommand;
exports.GetBucketLocationCommand = GetBucketLocationCommand;
exports.GetBucketLoggingCommand = GetBucketLoggingCommand;
exports.GetBucketMetadataConfigurationCommand = GetBucketMetadataConfigurationCommand;
exports.GetBucketMetadataTableConfigurationCommand = GetBucketMetadataTableConfigurationCommand;
exports.GetBucketMetricsConfigurationCommand = GetBucketMetricsConfigurationCommand;
exports.GetBucketNotificationConfigurationCommand = GetBucketNotificationConfigurationCommand;
exports.GetBucketOwnershipControlsCommand = GetBucketOwnershipControlsCommand;
exports.GetBucketPolicyCommand = GetBucketPolicyCommand;
exports.GetBucketPolicyStatusCommand = GetBucketPolicyStatusCommand;
exports.GetBucketReplicationCommand = GetBucketReplicationCommand;
exports.GetBucketRequestPaymentCommand = GetBucketRequestPaymentCommand;
exports.GetBucketTaggingCommand = GetBucketTaggingCommand;
exports.GetBucketVersioningCommand = GetBucketVersioningCommand;
exports.GetBucketWebsiteCommand = GetBucketWebsiteCommand;
exports.GetObjectAclCommand = GetObjectAclCommand;
exports.GetObjectAttributesCommand = GetObjectAttributesCommand;
exports.GetObjectAttributesRequestFilterSensitiveLog = GetObjectAttributesRequestFilterSensitiveLog;
exports.GetObjectCommand = GetObjectCommand;
exports.GetObjectLegalHoldCommand = GetObjectLegalHoldCommand;
exports.GetObjectLockConfigurationCommand = GetObjectLockConfigurationCommand;
exports.GetObjectOutputFilterSensitiveLog = GetObjectOutputFilterSensitiveLog;
exports.GetObjectRequestFilterSensitiveLog = GetObjectRequestFilterSensitiveLog;
exports.GetObjectRetentionCommand = GetObjectRetentionCommand;
exports.GetObjectTaggingCommand = GetObjectTaggingCommand;
exports.GetObjectTorrentCommand = GetObjectTorrentCommand;
exports.GetObjectTorrentOutputFilterSensitiveLog = GetObjectTorrentOutputFilterSensitiveLog;
exports.GetPublicAccessBlockCommand = GetPublicAccessBlockCommand;
exports.HeadBucketCommand = HeadBucketCommand;
exports.HeadObjectCommand = HeadObjectCommand;
exports.HeadObjectOutputFilterSensitiveLog = HeadObjectOutputFilterSensitiveLog;
exports.HeadObjectRequestFilterSensitiveLog = HeadObjectRequestFilterSensitiveLog;
exports.IdempotencyParameterMismatch = IdempotencyParameterMismatch;
exports.IntelligentTieringAccessTier = IntelligentTieringAccessTier;
exports.IntelligentTieringStatus = IntelligentTieringStatus;
exports.InvalidObjectState = InvalidObjectState;
exports.InvalidRequest = InvalidRequest;
exports.InvalidWriteOffset = InvalidWriteOffset;
exports.InventoryConfigurationFilterSensitiveLog = InventoryConfigurationFilterSensitiveLog;
exports.InventoryConfigurationState = InventoryConfigurationState;
exports.InventoryDestinationFilterSensitiveLog = InventoryDestinationFilterSensitiveLog;
exports.InventoryEncryptionFilterSensitiveLog = InventoryEncryptionFilterSensitiveLog;
exports.InventoryFormat = InventoryFormat;
exports.InventoryFrequency = InventoryFrequency;
exports.InventoryIncludedObjectVersions = InventoryIncludedObjectVersions;
exports.InventoryOptionalField = InventoryOptionalField;
exports.InventoryS3BucketDestinationFilterSensitiveLog = InventoryS3BucketDestinationFilterSensitiveLog;
exports.JSONType = JSONType;
exports.ListBucketAnalyticsConfigurationsCommand = ListBucketAnalyticsConfigurationsCommand;
exports.ListBucketIntelligentTieringConfigurationsCommand = ListBucketIntelligentTieringConfigurationsCommand;
exports.ListBucketInventoryConfigurationsCommand = ListBucketInventoryConfigurationsCommand;
exports.ListBucketInventoryConfigurationsOutputFilterSensitiveLog = ListBucketInventoryConfigurationsOutputFilterSensitiveLog;
exports.ListBucketMetricsConfigurationsCommand = ListBucketMetricsConfigurationsCommand;
exports.ListBucketsCommand = ListBucketsCommand;
exports.ListDirectoryBucketsCommand = ListDirectoryBucketsCommand;
exports.ListMultipartUploadsCommand = ListMultipartUploadsCommand;
exports.ListObjectVersionsCommand = ListObjectVersionsCommand;
exports.ListObjectsCommand = ListObjectsCommand;
exports.ListObjectsV2Command = ListObjectsV2Command;
exports.ListPartsCommand = ListPartsCommand;
exports.ListPartsRequestFilterSensitiveLog = ListPartsRequestFilterSensitiveLog;
exports.LocationType = LocationType;
exports.MFADelete = MFADelete;
exports.MFADeleteStatus = MFADeleteStatus;
exports.MetadataDirective = MetadataDirective;
exports.MetricsStatus = MetricsStatus;
exports.NoSuchBucket = NoSuchBucket;
exports.NoSuchKey = NoSuchKey;
exports.NoSuchUpload = NoSuchUpload;
exports.NotFound = NotFound;
exports.ObjectAlreadyInActiveTierError = ObjectAlreadyInActiveTierError;
exports.ObjectAttributes = ObjectAttributes;
exports.ObjectCannedACL = ObjectCannedACL;
exports.ObjectLockEnabled = ObjectLockEnabled;
exports.ObjectLockLegalHoldStatus = ObjectLockLegalHoldStatus;
exports.ObjectLockMode = ObjectLockMode;
exports.ObjectLockRetentionMode = ObjectLockRetentionMode;
exports.ObjectNotInActiveTierError = ObjectNotInActiveTierError;
exports.ObjectOwnership = ObjectOwnership;
exports.ObjectStorageClass = ObjectStorageClass;
exports.ObjectVersionStorageClass = ObjectVersionStorageClass;
exports.OptionalObjectAttributes = OptionalObjectAttributes;
exports.OutputLocationFilterSensitiveLog = OutputLocationFilterSensitiveLog;
exports.OwnerOverride = OwnerOverride;
exports.PartitionDateSource = PartitionDateSource;
exports.Payer = Payer;
exports.Permission = Permission;
exports.Protocol = Protocol;
exports.PutBucketAccelerateConfigurationCommand = PutBucketAccelerateConfigurationCommand;
exports.PutBucketAclCommand = PutBucketAclCommand;
exports.PutBucketAnalyticsConfigurationCommand = PutBucketAnalyticsConfigurationCommand;
exports.PutBucketCorsCommand = PutBucketCorsCommand;
exports.PutBucketEncryptionCommand = PutBucketEncryptionCommand;
exports.PutBucketEncryptionRequestFilterSensitiveLog = PutBucketEncryptionRequestFilterSensitiveLog;
exports.PutBucketIntelligentTieringConfigurationCommand = PutBucketIntelligentTieringConfigurationCommand;
exports.PutBucketInventoryConfigurationCommand = PutBucketInventoryConfigurationCommand;
exports.PutBucketInventoryConfigurationRequestFilterSensitiveLog = PutBucketInventoryConfigurationRequestFilterSensitiveLog;
exports.PutBucketLifecycleConfigurationCommand = PutBucketLifecycleConfigurationCommand;
exports.PutBucketLoggingCommand = PutBucketLoggingCommand;
exports.PutBucketMetricsConfigurationCommand = PutBucketMetricsConfigurationCommand;
exports.PutBucketNotificationConfigurationCommand = PutBucketNotificationConfigurationCommand;
exports.PutBucketOwnershipControlsCommand = PutBucketOwnershipControlsCommand;
exports.PutBucketPolicyCommand = PutBucketPolicyCommand;
exports.PutBucketReplicationCommand = PutBucketReplicationCommand;
exports.PutBucketRequestPaymentCommand = PutBucketRequestPaymentCommand;
exports.PutBucketTaggingCommand = PutBucketTaggingCommand;
exports.PutBucketVersioningCommand = PutBucketVersioningCommand;
exports.PutBucketWebsiteCommand = PutBucketWebsiteCommand;
exports.PutObjectAclCommand = PutObjectAclCommand;
exports.PutObjectCommand = PutObjectCommand;
exports.PutObjectLegalHoldCommand = PutObjectLegalHoldCommand;
exports.PutObjectLockConfigurationCommand = PutObjectLockConfigurationCommand;
exports.PutObjectOutputFilterSensitiveLog = PutObjectOutputFilterSensitiveLog;
exports.PutObjectRequestFilterSensitiveLog = PutObjectRequestFilterSensitiveLog;
exports.PutObjectRetentionCommand = PutObjectRetentionCommand;
exports.PutObjectTaggingCommand = PutObjectTaggingCommand;
exports.PutPublicAccessBlockCommand = PutPublicAccessBlockCommand;
exports.QuoteFields = QuoteFields;
exports.RenameObjectCommand = RenameObjectCommand;
exports.ReplicaModificationsStatus = ReplicaModificationsStatus;
exports.ReplicationRuleStatus = ReplicationRuleStatus;
exports.ReplicationStatus = ReplicationStatus;
exports.ReplicationTimeStatus = ReplicationTimeStatus;
exports.RequestCharged = RequestCharged;
exports.RequestPayer = RequestPayer;
exports.RestoreObjectCommand = RestoreObjectCommand;
exports.RestoreObjectRequestFilterSensitiveLog = RestoreObjectRequestFilterSensitiveLog;
exports.RestoreRequestFilterSensitiveLog = RestoreRequestFilterSensitiveLog;
exports.RestoreRequestType = RestoreRequestType;
exports.S3 = S3;
exports.S3Client = S3Client;
exports.S3LocationFilterSensitiveLog = S3LocationFilterSensitiveLog;
exports.S3ServiceException = S3ServiceException;
exports.S3TablesBucketType = S3TablesBucketType;
exports.SSEKMSFilterSensitiveLog = SSEKMSFilterSensitiveLog;
exports.SelectObjectContentCommand = SelectObjectContentCommand;
exports.SelectObjectContentEventStreamFilterSensitiveLog = SelectObjectContentEventStreamFilterSensitiveLog;
exports.SelectObjectContentOutputFilterSensitiveLog = SelectObjectContentOutputFilterSensitiveLog;
exports.SelectObjectContentRequestFilterSensitiveLog = SelectObjectContentRequestFilterSensitiveLog;
exports.ServerSideEncryption = ServerSideEncryption;
exports.ServerSideEncryptionByDefaultFilterSensitiveLog = ServerSideEncryptionByDefaultFilterSensitiveLog;
exports.ServerSideEncryptionConfigurationFilterSensitiveLog = ServerSideEncryptionConfigurationFilterSensitiveLog;
exports.ServerSideEncryptionRuleFilterSensitiveLog = ServerSideEncryptionRuleFilterSensitiveLog;
exports.SessionCredentialsFilterSensitiveLog = SessionCredentialsFilterSensitiveLog;
exports.SessionMode = SessionMode;
exports.SseKmsEncryptedObjectsStatus = SseKmsEncryptedObjectsStatus;
exports.StorageClass = StorageClass;
exports.StorageClassAnalysisSchemaVersion = StorageClassAnalysisSchemaVersion;
exports.TableSseAlgorithm = TableSseAlgorithm;
exports.TaggingDirective = TaggingDirective;
exports.Tier = Tier;
exports.TooManyParts = TooManyParts;
exports.TransitionDefaultMinimumObjectSize = TransitionDefaultMinimumObjectSize;
exports.TransitionStorageClass = TransitionStorageClass;
exports.Type = Type;
exports.UpdateBucketMetadataInventoryTableConfigurationCommand = UpdateBucketMetadataInventoryTableConfigurationCommand;
exports.UpdateBucketMetadataJournalTableConfigurationCommand = UpdateBucketMetadataJournalTableConfigurationCommand;
exports.UploadPartCommand = UploadPartCommand;
exports.UploadPartCopyCommand = UploadPartCopyCommand;
exports.UploadPartCopyOutputFilterSensitiveLog = UploadPartCopyOutputFilterSensitiveLog;
exports.UploadPartCopyRequestFilterSensitiveLog = UploadPartCopyRequestFilterSensitiveLog;
exports.UploadPartOutputFilterSensitiveLog = UploadPartOutputFilterSensitiveLog;
exports.UploadPartRequestFilterSensitiveLog = UploadPartRequestFilterSensitiveLog;
exports.WriteGetObjectResponseCommand = WriteGetObjectResponseCommand;
exports.WriteGetObjectResponseRequestFilterSensitiveLog = WriteGetObjectResponseRequestFilterSensitiveLog;
exports.paginateListBuckets = paginateListBuckets;
exports.paginateListDirectoryBuckets = paginateListDirectoryBuckets;
exports.paginateListObjectsV2 = paginateListObjectsV2;
exports.paginateListParts = paginateListParts;
exports.waitForBucketExists = waitForBucketExists;
exports.waitForBucketNotExists = waitForBucketNotExists;
exports.waitForObjectExists = waitForObjectExists;
exports.waitForObjectNotExists = waitForObjectNotExists;
exports.waitUntilBucketExists = waitUntilBucketExists;
exports.waitUntilBucketNotExists = waitUntilBucketNotExists;
exports.waitUntilObjectExists = waitUntilObjectExists;
exports.waitUntilObjectNotExists = waitUntilObjectNotExists;
