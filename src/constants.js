var env = "SHARED";
var constantJson;
var genericConstants = {
    "apiUrl": "/api/v1"
};
var envConstantLocal = {
    "serverUrl": "http://localhost:7999"
};
var envConstantShared = {
    "serverUrl": "http://192.168.1.8:7999"
};
if (env == "LOCAL")
    constantJson = envConstantLocal;
else if (env == "SHARED")
    constantJson = envConstantShared;
constantJson = Object.assign(constantJson, genericConstants);
export { constantJson };
//# sourceMappingURL=constants.js.map
