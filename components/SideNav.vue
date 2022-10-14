<template>
  <div class="sidenav py-40 w-1/4">
    <ul
      v-for="(item, index) in primaryNavigations"
      :key="index"
      class="primary-nav"
    >
      <li
        class="nav-item flex py-4 px-7 items-center justify-between"
        :class="item.isActive && 'active'"
      >
        <div class="flex items-center">
          <IconComponent :name="item.icon" />
          <p class="label ml-6">{{ item.name }}</p>
        </div>
        <div v-if="item.isDropdown" class="arrow justify-self-end">
          <IconComponent name="arrow" />
        </div>
      </li>
    </ul>
    <hr />
    <ul
      v-for="(data, index) in secondaryNavigations"
      :key="index"
      class="secondary-nav"
    >
      <li v-if="data.isAuth" @click="logout" class="nav-item flex py-4 px-7 items-center">
        <IconComponent :name="data.icon" />
        <p class="label ml-6">{{ data.name }}</p>
      </li>
      <li v-else class="nav-item flex py-4 px-7 items-center">
        <IconComponent :name="data.icon" />
        <p class="label ml-6">{{ data.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  data() {
    return {
      primaryNavigations: [
        {
          icon: 'dashboard',
          name: 'Dashboard',
          isActive: true,
          isDropdown: false,
        },
        {
          icon: 'user',
          name: 'Profile',
          isActive: false,
          isDropdown: false,
        },
        {
          icon: 'services',
          name: 'Services',
          isActive: false,
          isDropdown: true,
          children: {},
        },
        {
          icon: 'record',
          name: 'Medical Records',
          isActive: false,
          isDropdown: false,
        },
        {
          icon: 'wallet',
          name: 'Care Wallet',
          isActive: false,
          isDropdown: false,
        },
        {
          icon: 'message',
          name: 'Messages',
          isActive: false,
          isDropdown: false,
        },
        {
          icon: 'resources',
          name: 'Resources',
          isActive: false,
          isDropdown: false,
        },
      ],
      secondaryNavigations: [
        {
          icon: 'settings',
          name: 'Account Settings',
          isActive: false,
          isDropdown: false,
          isAuth: false
        },
        {
          icon: 'support',
          name: 'Contact Support',
          isActive: false,
          isDropdown: false,
          isAuth: false
        },
        {
          icon: 'logout',
          name: 'Logout',
          isActive: false,
          isDropdown: false,
          isAuth: true
        },
      ],
    }
  },
  methods: {
    logout() {
      console.log('you have logout')
    }
  }
}
</script>

<style lang="scss">
.sidenav {
  background: #fff;
  .nav-item {
    color: #a0a0a0;
    cursor: pointer;
  }
  .active {
    background-color: #2a36a4;
    color: #fff;
  }

  @media(max-width: 680px){
    .label{
      display: none;
    }
  }
}
</style>
