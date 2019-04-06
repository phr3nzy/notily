<template>
  <vs-row id="view" vs-justify="center" vs-align="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card class="cardx">
        <div slot="header">
          <h3>Notes</h3>
        </div>
        <div slot="media">
          <img>
        </div>
        <div>
          <span>The open source note taking tool</span>
        </div>
        <span>{{ response }} -- {{ notes }} -- {{ notesList }}</span>
        <div slot="footer">
          <vs-row vs-justify="center">
            <vs-button @click="createNote" color="primary" type="relief" icon="add">Create Notes</vs-button>
          </vs-row>
          <vs-row vs-justify="center">
            <vs-button @click="getNotes" color="primary" type="relief" icon="add">Get Notes</vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
import db from "../db/index.js";
export default {
  data() {
    return {
      response: "",
      notes: []
    };
  },
  computed: {
    notesList() {
      return this.$store.getters["index/notes"];
    }
  },
  methods: {
    async createNote() {
      const note = await db.notes.insert({ title: "Hello!" });
      this.response = note;
    },
    async getNotes() {
      try {
        const notes = await db.notes.find({});
        this.notes = notes;
      } catch (err) {
        this.notes = err;
      }
    }
  }
};
</script>

