VehiculosForm = new Meteor.Collection('vehiculos_form');

VehiculosForm.allow({
	insert: function(vehiculoId, doc){
		return vehiculoId;
	},
	update: function(vehiculoId, doc, fields, modifier){
		return vehiculoId;
	},
	remove: function(vehiculoId, doc){
		return vehiculoId;
	}
});