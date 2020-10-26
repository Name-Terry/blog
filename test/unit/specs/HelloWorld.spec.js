/*
 * @Author: trry
 * @Date: 2020-10-22 15:41:17
 * @LastEditors: trry
 * @LastEditTime: 2020-10-26 09:10:20
 * @Description: file content
 */
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(HelloWorld)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('.hello h1').textContent)
            .toEqual('Welcome to Your Vue.js App')
    })
})
