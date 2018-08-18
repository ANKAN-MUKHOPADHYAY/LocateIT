var env = "SHARED";

var constantJson;

const genericConstants = {
	"apiUrl" : "/api/v1"
}

const envConstantLocal = {
	"serverUrl" : "http://localhost:7999"
}

const envConstantShared = {
	"serverUrl" : "http://192.168.1.5:7999"
}

if(env == "LOCAL")
	constantJson = envConstantLocal;
else if(env == "SHARED")
	constantJson = envConstantShared;


constantJson = Object.assign(constantJson, genericConstants);
export {constantJson};
