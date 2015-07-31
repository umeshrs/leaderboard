PlayerList = new Mongo.Collection('players');

if (Meteor.isClient) {
	Template.leaderboard.helpers({
		'player': function() {
			return PlayerList.find({}, {sort: {score: -1, name: 1} });
		},
		'selectedClass': function() {
			var playerId = this._id;
			var selectedPlayer = Session.get('selectedPlayer');
			if ( playerId == selectedPlayer ) {
				return "selected";
			}
		},
		'showSelectedPlayer': function() {
			var selectedPlayer = Session.get('selectedPlayer');
			return PlayerList.findOne(selectedPlayer);
		}
	});

	Template.leaderboard.events({
		'click .player': function() {
			var playerID = this._id;
			Session.set('selectedPlayer', playerID);
		},
		'click .increment': function() {
			var selectedPlayer = Session.get('selectedPlayer');
			PlayerList.update(selectedPlayer, {$inc: {score: 5}});
		},
		'click .decrement': function() {
			var selectedPlayer = Session.get('selectedPlayer');
			PlayerList.update(selectedPlayer, {$inc: {score: -5}});
		},
		'click .remove': function() {
			var selectedPlayer = Session.get('selectedPlayer');
			PlayerList.remove(selectedPlayer);
		}
	});

	Template.addPlayerForm.events({
		'submit': function() {
			event.preventDefault();
			var playerNameVar = event.target.playerName.value;
			PlayerList.insert({
				name: playerNameVar,
				score: 0
			});
			event.target.playerName.value = "";
		}
	});
}

if (Meteor.isServer) {
	console.log("Hello Server!");
}
