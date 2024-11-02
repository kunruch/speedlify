module.exports = {
	name: "tests", // optional, falls back to object key
	description: "Test Sites",
	options: {
		runs: 1,
		frequency:  60 * 24 * 15, // (in minutes), 15 days
	},
	urls: [
		"https://wproot.kunruch.com/",
		"https://wptry.kunruch.com/"
	]
};