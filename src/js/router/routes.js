export default [

  { path: '/',
    component: function (resolve) {
      require(['../components/Home/index.vue'], resolve)
    }
  },

  { path: '/about',
    component: function (resolve) {
      require(['../components/About/index.vue'], resolve)
    }
  }
]
