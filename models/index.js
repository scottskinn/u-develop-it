const User = require('./User');
const Vote = require('./Vote');
const Candidate = require('./Candidate');


// create associations
User.hasOne(Candidate, {
    foreignKey: 'user_id'
});
  
Candidate.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.belongsToMany(Candidate, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});
  
Candidate.belongsToMany(Vote, {
    through: Vote,
    as: 'voted_posts',
});


Vote.belongsTo(Candidate, {
    foreignKey: 'candidate_id'
});

Vote.belongsTo(Candidate, {
    foreignKey: 'candidate_id'
});


module.exports = { User, Vote, Candidate };