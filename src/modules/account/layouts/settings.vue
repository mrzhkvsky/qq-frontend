<template>
  <Main title="Account settings">
    <div class="row">
      <div class="col-md-3 col-xl-2">

        <div class="card">
          <div class="card-header">
            <h5 class="card-title mb-0">Profile Settings</h5>
          </div>

          <div class="list-group list-group-flush">
            <router-link :to="{ name: 'account-settings-profile' }" class="list-group-item list-group-item-action">
              Account
            </router-link>
            <router-link :to="{ name: 'account-settings-password' }" class="list-group-item list-group-item-action">
              Password
            </router-link>
            <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#">
              Privacy and safety
            </a>
            <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#">
              Email notifications
            </a>
            <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#">
              Web notifications
            </a>
            <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#">
              Widgets
            </a>
            <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#">
              Your data
            </a>
            <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#">
              Delete account
            </a>
          </div>
        </div>
      </div>

      <div class="col-md-9 col-xl-10">
        <div class="tab-content">
          <router-view />
        </div>
      </div>
    </div>
  </Main>
</template>

<script>
import Main from '@/core/components/layout/Main.vue'

export default {
  name: "settings",
  components: { Main }
}
</script>
