module.exports = {
	name: "tests", // optional, falls back to object key
	description: "Test Sites",
	options: {
		runs: 1,
		frequency: 60 * 1, // (in minutes), 12 hours
	},
	urls: [
		"https://wproot.kunruch.com/",
		"https://wptry.kunruch.com/"
	]
};