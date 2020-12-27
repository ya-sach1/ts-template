module.exports = {
	verbose: true,
	moduleFileExtensions: ['ts', 'js'],
	preset: 'ts-jest',
	testEnvironment: 'node',
	coverageDirectory: 'coverage',
	testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
	collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts'],
};
