const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["blunote.png","favicon-note.png","hacksaber.png","hacksaberShirtTransparent.png","lightshow-optimized.gif","rednote.png"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif"},
	_: {
		client: {start:"_app/immutable/entry/start.D5FDWr8z.js",app:"_app/immutable/entry/app.84-dCjqV.js",imports:["_app/immutable/entry/start.D5FDWr8z.js","_app/immutable/chunks/Cdd1vPMn.js","_app/immutable/chunks/C_MKQyJx.js","_app/immutable/chunks/UT0WEs9z.js","_app/immutable/chunks/DQea0Wj8.js","_app/immutable/chunks/yAZjH83X.js","_app/immutable/chunks/BvdoQH91.js","_app/immutable/entry/app.84-dCjqV.js","_app/immutable/chunks/UT0WEs9z.js","_app/immutable/chunks/DQea0Wj8.js","_app/immutable/chunks/yAZjH83X.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/C_MKQyJx.js","_app/immutable/chunks/BvdoQH91.js","_app/immutable/chunks/D0d0KB-2.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-Dlht7bHT.js')),
			__memo(() => import('./chunks/1-D6ZemEHL.js')),
			__memo(() => import('./chunks/2-7Qorsa3k.js')),
			__memo(() => import('./chunks/3-BkTNonkV.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/instructions",
				pattern: /^\/instructions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
