PlayerList = new Mongo.Collection('players');

console.log("Hello world!");

if (Meteor.isClient) {
	Template.leaderboard.player = function() {
		return "Text from helper function.";
	};
}

if (Meteor.isServer) {
	console.log("Hello Server!");
}