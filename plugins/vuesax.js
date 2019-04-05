import Vue from 'vue'
import Vuesax from 'vuesax'

import 'material-icons/iconfont/material-icons.css';

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
	theme:{
		colors:{
			primary:'#682ABB',
			success:'#00D071',
			danger:'#FF005B',
			warning:'#FF762D',
			dark:'#2B2345'
		}
	}
})