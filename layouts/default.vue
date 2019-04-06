<template>
  <div>
      <vs-navbar
        v-model="activeIndex"
        color="dark"
        :collapse="false"
        text-color="rgba(255,255,255,.6)"
        active-text-color="rgba(255,255,255,1)"
      >
        <div slot="title">
        <vs-button
          color-text="rgb(255, 255, 255)"
          color="rgba(255, 255, 255, 0.3)"
          type="default"
          icon="menu"
          @click="active = !active"
        ></vs-button>
        </div>
      </vs-navbar>
   
  <div ref="parentSidebar" id="parentx">
    <vs-sidebar  :parent="$refs.parentSidebar" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">

      <!-- <div class="header-sidebar" slot="header">
      </div> -->

      <vs-sidebar-item to="/" index="1" icon="home">
        Home
      </vs-sidebar-item>

      <vs-sidebar-item to="/notes" index="2" icon="edit">
        Notes
      </vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <span>Notily&copy; | All Rights Reserved </span>
      </div>

    </vs-sidebar>
  </div>
    <div>
      <nuxt/>
    </div>
  </div>
</template>

<script>
export default {
	data: () => ({
		activeIndex: 0,
		active:false,
	})
};
</script>