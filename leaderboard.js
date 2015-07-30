PlayerList = new Mongo.Collection('players');

if (Meteor.isClient) {
	Template.leaderboard.helpers({
		'player': function() {
			return PlayerList.find();
		},
		'selectedClass': function() {
			var playerId = this._id;
			var selectedPlayer = Session.get('selectedPlayer');
			if ( playerId == selectedPlayer ) {
				return "selected";
			}
		}
	});

	Template.leaderboard.events({
		'click .player': function() {
			var playerID = this._id;
			Session.set('selectedPlayer', playerID);
		}
	});
}

if (Meteor.isServer) {
	console.log("Hello Server!");
}
