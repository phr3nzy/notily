<template>
  <div style="margin-top: 10%;">
    <div>
      <vs-row id="view" vs-justify="center" vs-align="center">
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
      <vs-popup :background-color-popup="popupColor" title="Add your note!" :active.sync="popupActive">
        <vs-card>
          <vs-input label-placeholder="Note Title" v-model="noteTitle"/>
          <vs-divider style="color: transparent; background-color: transparent;"></vs-divider>
          <vs-textarea height="500px" width="100%" label="Note Body" v-model="noteBody"/>
          <vs-row vs-justify="flex-end">
            <vs-button size="large" type="relief" icon="save">Save</vs-button>
          </vs-row>
        </vs-card> 
      </vs-popup>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			popupActive:false,
			noteTitle: '',
			noteBody: '',
			popupColor: 'white'
		}
	}
};
</script>


<style scoped>
#view {
  align-content: center;
  justify-content: center;
  justify-items: center;
}
</style>
