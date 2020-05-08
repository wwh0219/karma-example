import {sum} from '../src/index'
import {expect} from 'chai'
import Vue from 'vue'
describe('ts demo',()=>{
  it('ts-demo-1',()=>{
    expect(sum(1, 1)).eq(2)
  })
})