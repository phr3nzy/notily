<template>
  <vs-row id="view" vs-justify="center" vs-align="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card class="cardx">
        <div slot="header">
          <h3>Notes</h3>
        </div>
        <vs-card v-for="(note, index) in notes" :key="index">
          <div slot="header">
            <h3>{{ index + 1 }}- {{ note.title }}</h3>
          </div>
          <div>
            <span>
              {{ note.body }}
            </span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button type="relief" color="primary" icon="favorite"></vs-button>
              <vs-button type="relief" color="success" icon="turned_in_not"></vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
import db from "../db/index.js";
export default {
	data() {
		return {
			notes: []
		};
	},
	async mounted() {
		try {
			const notes = await db.notes.find({});
			this.notes = notes;
		} catch (err) {
			this.notes = err;
		}
	}
};
</script>

