const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Candidate model
class Candidate extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      candidate_id: body.candidate_id
    }).then(() => {
      return Candidate.findOne({
        where: {
          id: body.candidate_id
        },
        attributes: [
          'id',
          'Candidate_url',
          'title',
          'created_at',
          [
            sequelize.literal(`(SELECT COUNT(*) FROM vote WHERE candidate.id = vote.candidate_id)`),
            'vote_count'
          ]
        ]
      });
    });
  }
}

// create fields/columns for Candidate model
Candidate.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      party_id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'candidate'
    }
  );

  module.exports = Candidate;