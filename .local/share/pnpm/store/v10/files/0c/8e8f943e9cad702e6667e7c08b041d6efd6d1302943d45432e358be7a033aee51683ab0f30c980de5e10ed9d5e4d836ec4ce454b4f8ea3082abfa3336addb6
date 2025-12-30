const require_getErrorShape = require('../getErrorShape-BRalpqpM.cjs');
require('../tracked-DkwwsHVk.cjs');
const require_utils = require('../utils-BqXzm3RP.cjs');
require('../parseTRPCMessage-Cdw5Sfhh.cjs');
require('../resolveResponse-OV7qVwiT.cjs');
require('../contentTypeParsers-iAFF_pJG.cjs');
require('../unstable-core-do-not-import-DFQys1IC.cjs');
require('../observable-B1Nk6r1H.cjs');
require('../initTRPC-D-fJXPDf.cjs');
const require_node_http = require('../node-http-D37fGQh1.cjs');

//#region src/adapters/express.ts
var import_objectSpread2 = require_getErrorShape.__toESM(require_getErrorShape.require_objectSpread2(), 1);
function createExpressMiddleware(opts) {
	return (req, res) => {
		let path = "";
		require_utils.run(async () => {
			path = req.path.slice(req.path.lastIndexOf("/") + 1);
			await require_node_http.nodeHTTPRequestHandler((0, import_objectSpread2.default)((0, import_objectSpread2.default)({}, opts), {}, {
				req,
				res,
				path
			}));
		}).catch(require_node_http.internal_exceptionHandler((0, import_objectSpread2.default)({
			req,
			res,
			path
		}, opts)));
	};
}

//#endregion
exports.createExpressMiddleware = createExpressMiddleware;