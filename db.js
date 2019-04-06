const { app } = require("electron");
const DataStore = require("nedb-promises");

const dbFactory = fileName =>
	DataStore.create({
		filename: `./${fileName}`,
		timestampData: true,
		autoload: true
	});

const db = {
	notes: dbFactory("notes.db")
};

module.exports = db;
