<!-- eslint-disable vue/no-v-model-argument -->
<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title">Secur Analysys</span>
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-primary">
            <md-tab id="tab-home" md-label="Home" md-sync-route to="/">
              <!-- <router-link to="/">Home</router-link> -->
            </md-tab>

            <md-tab id="tab-about" md-label="About" md-sync-route to="/about">
              <!-- <router-link to="/about">About</router-link> -->
            </md-tab>
            <md-tab
              id="tab-service"
              md-label="Services"
              md-sync-route
              to="/services"
            >
              <!-- <router-link to="/services">Services</router-link> -->
            </md-tab>
            <md-tab
              id="tab-assessments"
              md-label="Assessments"
              md-sync-route
              to="/assessments"
            >
            </md-tab>
            <md-tab
              id="tab-payments"
              md-label="Payments"
              md-sync-route
              to="/payments"
            >
            </md-tab>
            <md-tab
              id="tab-logins"
              md-label="Logins"
              md-sync-route
              to="/logins"
            >
            </md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-content class="bg-secondary --bs-secondary-bg">
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "LastRowFixed",
  data: () => ({
    menuVisible: false,
  }),
};
</script>

<style lang="scss" scoped>
.md-app {
  max-height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}

.full-page {
  height: 100vh;
  width: 100%;
}
</style>
