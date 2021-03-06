const userQuery = require("../users/users.resolvers").Query;
const userMutation = require("../users/users.resolvers.js").Mutation;
const User = require("../users/users.resolvers.js").User;

const projectQuery = require("../projects/projects.resolvers.js").Query;
const projectMutation = require("../projects/projects.resolvers.js").Mutation;
const Project = require("../projects/projects.resolvers.js").Project;

const taskMutation = require("../tasks/tasks.resolvers").Mutation;

module.exports = {
  Query: { ...userQuery, ...projectQuery },
  Mutation: { ...taskMutation, ...projectMutation, ...userMutation },
  User,
  Project
};
