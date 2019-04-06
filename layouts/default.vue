<template>
  <div>
    <div>
      <vs-navbar
        v-model="activeIndex"
        color="dark"
        text-color="rgba(255,255,255,.6)"
        active-text-color="rgba(255,255,255,1)"
      >
        <div slot="title">
          <vs-navbar-title color="white">Notily</vs-navbar-title>
        </div>
        <vs-navbar-item index="0">
          <vs-button
            to="/"
            color-text="white"
            color="rgba(255, 255, 255, 0.3)"
            type="flat"
            icon="home"
          >Home</vs-button>
        </vs-navbar-item>
        <vs-navbar-item index="1">
          <vs-button
            to="/notes"
            color-text="white"
            color="rgba(255, 255, 255, 0.3)"
            type="flat"
            icon="edit"
          >Notes</vs-button>
        </vs-navbar-item>
        <vs-spacer></vs-spacer>
        <vs-button
          color-text="rgb(255, 255, 255)"
          color="rgba(255, 255, 255, 0.3)"
          type="flat"
          icon="more_horiz"
        ></vs-button>
      </vs-navbar>
    </div>
    <div>
      <nuxt/>
    </div>
  </div>
</template>

<script>
export default {
	data: () => ({
		activeIndex: 0
	})
};
</script>