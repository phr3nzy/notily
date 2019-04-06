const db = require("../db");
const notes = db.notes;

export const state = () => {
	return {
		notes: []
	};
};

export const mutations = {
	setNotes(state, payload) {
		state.notes = payload;
	}
};

export const actions = {
	async nuxtServerInit({ commit }) {
		const notesList = await notes.find({});
		await commit("setNotes", notesList);
	}
};

export const getters = {
	notes: state => {
		return state.notes;
	}
};
