<template>
  <vs-row id="view" vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card class="cardx">
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
            <vs-button color="primary" type="relief" icon="add">Create First Note!</vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<style scoped>
#view {
  align-content: center;
  justify-content: center;
  justify-items: center;
}
</style>
