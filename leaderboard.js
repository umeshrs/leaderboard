PlayerList = new Mongo.Collection('players');

console.log("Hello world!");

if (Meteor.isClient) {
	Template.leaderboard.helpers({
		'player': function() {
			return "This is the player helper function";
		},
		'score': function() {
			return "This is the score helper function."
		}
	});
}

if (Meteor.isServer) {
	console.log("Hello Server!");
}