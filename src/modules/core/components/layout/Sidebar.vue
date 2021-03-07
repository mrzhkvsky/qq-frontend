<template>
  <nav id="sidebar" class="sidebar">
    <div class="sidebar-content">
      <router-link class="sidebar-brand" :to="{ name: 'home' }">
        <span class="align-middle">QQ Project</span>
      </router-link>
      <ul class="sidebar-nav">
        <li class="sidebar-header">
          Pages
        </li>
        <li class="sidebar-item">
          <router-link class="sidebar-link" :to="{ name: 'home' }">
            <AirplayIcon />
            <span class="align-middle">{{ $t('core.sidebar.home') }}</span>
          </router-link>
        </li>
        <li class="sidebar-item">
          <router-link class="sidebar-link" :to="{ name: 'home-test' }">
            <AirplayIcon />
            <span class="align-middle">{{ $t('core.sidebar.test') }}</span>
          </router-link>
        </li>

        <li class="sidebar-header">
          Auth
        </li>
        <li class="sidebar-item">
          <router-link class="sidebar-link" :to="{ name: 'auth-login' }">
            <AirplayIcon />
            <span class="align-middle">{{ $t('core.sidebar.login') }}</span>
          </router-link>
        </li>
        <li class="sidebar-item">
          <router-link class="sidebar-link" :to="{ name: 'auth-register' }">
            <AirplayIcon />
            <span class="align-middle">{{ $t('core.sidebar.register') }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
