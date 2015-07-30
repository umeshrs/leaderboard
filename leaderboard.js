PlayerList = new Mongo.Collection('players');

console.log("Hello world!");

if (Meteor.isClient) {
	Template.leaderboard.helpers({
		'player': function() {
			return PlayerList.find();
		}
	});
}

if (Meteor.isServer) {
	console.log("Hello Server!");
}
