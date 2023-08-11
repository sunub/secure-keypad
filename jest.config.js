const config = {
	transform: {
		// "^.+\\.[j|t]sx?$": ["babel-jest"],
		"^.+\\.(ts|tsx)$": "ts-jest",
		"^.+\\.(js)$": "babel-jest",
	},
	transformIgnorePatterns: [],
	moduleDirectories: ["node_modules", "src"],
	moduleNameMapper: {
		"@/(.*)$": "<rootDir>/src/$1",
		"@components/(.*)$": "<rootDir>/src/components/$1",
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
	},
	setupFilesAfterEnv: ["./jest.setup.js"],
	testEnvironment: "jsdom",
	testTimeout: 10000,
	globals: {
		fetch: global.fetch,
	},
};

export default config;
