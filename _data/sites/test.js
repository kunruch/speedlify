module.exports = {
	name: "tests", // optional, falls back to object key
	description: "Test Sites",
	options: {
		runs: 1,
		frequency: 60 * 12, // (in minutes), 12 hours
	},
	urls: [
		"https://wparm.kanishkkunal.com/",
		"https://wptry.kunruch.com/"
	]
};