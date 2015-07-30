PlayerList = new Mongo.Collection('players');

console.log("Hello world!");

if (Meteor.isClient) {
	Template.leaderboard.helpers({
		'player': function() {
			return PlayerList.find();
		}
	});

	Template.leaderboard.events({
		'click .player': function() {
			console.log("You clicked a .player element.");
		}
	});
}

if (Meteor.isServer) {
	console.log("Hello Server!");
}
