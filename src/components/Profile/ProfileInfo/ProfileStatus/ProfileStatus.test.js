import React from "react";
import { create } from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";

describe("ProfileStatus", () => {
  test("checking of state prop", () => {
    const component = create(<ProfileStatus fakeProp='fake' />)
    const instance = component.getInstance()
    expect(instance.state.fakeProp).toBe('fake')
    //expect(instance.props.fakeProp).toBe('fake')
  })
  test("span should be displayed", () => {
    const component = create(<ProfileStatus/>)
    const root = component.root
    const span = root.findByType('span')
    expect(span).not.toBe(null)
  })
  /*test("span content should be the same with the prop", () => {
    const component = create(<ProfileStatus fakeProp='fake'/>)
    const root = component.root
    const span = root.findByType('span')
    expect(span.children[0]).toBe('fake')
  })*/
  test("after click input appears", () => {
    const component = create(<ProfileStatus/>)
    const root = component.root
    const span = root.findByProps({className: 'test'})
    console.log(span.props)
    span.props.onClick()
    const instance = component.getInstance()
    expect(instance.state.editMode).toBe(true)
  })
})