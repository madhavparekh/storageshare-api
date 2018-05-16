module.exports = function(sequelize, DataTypes) {
	var Messages = sequelize.define(
		'Messages',
		{
			message: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			isAccepted: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
		},
		{
			freezeTableName: true,
		}
	);

	Messages.associate = function(models) {
		Messages.belongsTo(models.Lenders, {
			foreignKey: {
				allowNull: false,
			},
		});
	};

	Messages.associate = function(models) {
		Messages.belongsTo(models.Renters, {
			foreignKey: {
				allowNull: false,
			},
		});
	};
	Messages.associate = function(models) {
		Messages.belongsTo(models.Locations, {
			foreignKey: {
				allowNull: false,
			},
		});
	};

	Messages.associate = function(models) {
		Messages.belongsTo(models.Boxes, {
			foreignKey: {
				allowNull: false,
			},
		});
	};

	return Messages;
};