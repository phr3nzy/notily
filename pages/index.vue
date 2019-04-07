<template>
  <div style="margin-top: 10%;">
    <div>
      <vs-row vs-justify="center" vs-align="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="4">
          <vs-card actionable class="cardx">
            <div slot="header">
              <h3>Welcome to Notily!</h3>
            </div>
            <div slot="media">
              <img>
            </div>
            <div>
              <span>The open source note taking tool</span>
            </div>
            <div slot="footer">
              <vs-row vs-justify="center">
                <vs-button @click="popupActive=true" color="primary" type="relief" icon="add">Create a Note!</vs-button>
              </vs-row>
            </div>
          </vs-card>
        </vs-col>
      </vs-row>
    </div>
    <div class="centerx">
      <vs-popup class="popup-example" :background-color-popup="popupColor" title="Add your note!" :active.sync="popupActive">
        <vs-card>
          <vs-input class="inputx" label-placeholder="Note Title" v-model="noteTitle"/>
          <vs-divider class="dividerx" style="color: transparent; background-color: transparent;"></vs-divider>
          <vs-textarea class="textareax" label="Note Body" v-model="noteBody"/>
          <vs-row vs-justify="flex-end">
            <vs-button @click="saveNote" size="large" type="relief" icon="save">Save</vs-button>
          </vs-row>
        </vs-card> 
      </vs-popup>
    </div>
  </div>
</template>

<script>
import db from "../db/index.js";
export default {
	data() {
		return {
			popupActive:false,
			noteTitle: '',
			noteBody: '',
			popupColor: 'white'
		}
	},
	methods: {
		async saveNote() {
			try {
				await db.notes.insert({ title: this.noteTitle, body: this.noteBody })
				this.$vs.notify({
					title: 'Note Saved!',
					text: 'Your note was saved successfully!',
					color: 'success'
				})
				this.popupActive = false
			} catch (err) {
				this.$vs.notify({
					title: 'Error while saving note!',
					text: `Note not saved due to the following error:
          ${err}`,
					color: 'error'
				})
				this.popupActive = false
			}
		}
	}
};
</script>


<style lang="stylus">
.popup-example
  .inputx
    float left
    width 50%
    margin 10px
    margin-top 5px
  .dividerx
    float left
    width 100%
    margin 10px
    margin-top 5px
  .textareax
    float left
    margin 10px
    margin-top 5px
    width 100%
    height 100%
</style>
