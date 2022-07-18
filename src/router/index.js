import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Route from '@/views/Route'
import Route1 from '@/views/Route1'
import Route2 from '@/views/Route2'
import Route3 from '@/views/Route3'
import JDetail from '@/views/JDetail'
import Buy from '@/views/Buy'
import Map from '@/views/Map'
import Vr from '@/views/Vr'
import Wdetails from '@/views/Wdetails'
import Voice from '@/views/Voice'
import Card from '@/views/Card'


Vue.use(VueRouter)

const routes = [
  {
    path:"/home",
    component:Home 
  },
  {
    path:"/route",
    component:Route
  },
  {
    path:"/route1",
    component:Route1
  },
  
  {
    path:"/route2",
    component:Route2
  },
  {
    path:"/route3",
    component:Route3
  },
  {
    path:"/card",
    component:Card
  },
  {
    path:"/wdetails",
    component:Wdetails
  },
  {
    path:"/voice",
    component:Voice
  },
  {
    path:"/buy",
    component:Buy
  },
  {
    path:"/map",
    component:Map 
  },
  {
    path:"/vr",
    component:Vr
  },
  {
    path:"/jdetail",
    component:JDetail
  },
  {
    path:"*",
    redirect:"/home"
    
  }
  
]

const router = new VueRouter({
  routes
})

export default router
