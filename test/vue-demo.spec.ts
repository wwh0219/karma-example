import Demo from '../src/demo.vue'
import {shallowMount} from '@vue/test-utils'
import {expect} from 'chai'
import Vue from 'vue'
describe('vue demo',()=>{
  it('increment',async ()=>{
    const text = 'asdasdad'
    const wrapper=shallowMount(Demo,{
      propsData:{
        text
      }
    })
    wrapper.find('button').trigger('click')
    await Vue.nextTick()
    expect(wrapper.find('div').text()).contains('1')
  })
})