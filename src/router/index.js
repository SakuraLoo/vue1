import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo1 from '@/pages/demo1_生命周期/index.vue'
import Demo2 from '@/pages/demo2_选项数据/index.vue'
import Demo3 from '@/pages/Demo3_模板语法/'
import Demo4 from '@/pages/demo4_计算属性computed/'
import Demo5 from '@/pages/Demo5_class与style绑定/'
import Demo6 from '@/pages/Demo6_v-if/'
import Demo7 from '@/pages/Demo7_v-for/'
import Demo8 from '@/pages/demo8_事件处理器methods/'
import Demo9 from '@/pages/Demo9_自定义组件/'
import Demo10 from '@/pages/Demo10_Vue中的Dom操作/'
import Demo11 from '@/pages/Demo11_过渡效果/'
import Demo12 from '@/pages/Demo12_路由vue-router/'
import Demo13 from '@/pages/Demo13_状态管理vuex/'
import Demo14 from '@/pages/Demo14_Slot插槽/'
import Demo15 from '@/pages/demo15_vue-source/'
import Demo16 from '@/pages/demo16_ui/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: Demo1
    },
    {
      path: '/demo2/:userId',
      name: 'demo2',
      component: Demo2
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: Demo3
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: Demo4
    },
    {
      path: '/demo5',
      name: 'demo5',
      component: Demo5
    },
    {
      path: '/demo6',
      name: 'demo6',
      component: Demo6
    },
    {
      path: '/demo7',
      name: 'demo7',
      component: Demo7
    },
    {
      path: '/demo8',
      name: 'demo8',
      component: Demo8
    },
    {
      path: '/demo9',
      name: 'demo9',
      component: Demo9
    },
    {
      path: '/demo10',
      name: 'demo10',
      component: Demo10
    },
    {
      path: '/demo11',
      name: 'demo11',
      component: Demo11
    },
    {
      path: '/demo12',
      name: 'demo12',
      component: Demo12
    },
    {
      path: '/demo13',
      name: 'demo13',
      component: Demo13
    },
    {
      path: '/demo14',
      name: 'demo14',
      component: Demo14
    },
    {
      path: '/demo15',
      name: 'demo15',
      component: Demo15
    },
    {
      path: '/demo16',
      name: 'demo16',
      component: Demo16
    }
  ]
})
