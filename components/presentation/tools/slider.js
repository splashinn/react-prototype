import React from 'react'
import {injectGlobal} from 'styled-components'
import Slider from 'rc-slider'

export default (props) => <Slider
  min={0} max={1024} step={32}
  defaultValue={parseInt(props.defaultValue, 10)}
  onChange={props.onChange}
/>

injectGlobal`
  .rc-slider {
    position: relative;
    height: 14px;
    padding: 5px 0;
    width: 100%;
    border-radius: 6px;
    box-sizing: border-box;
  }
  .rc-slider * {
    box-sizing: border-box;
  }
  .rc-slider-rail {
    position: absolute;
    width: 100%;
    background-color: #e9e9e9;
    height: 4px;
    border-radius: 6px;
  }
  .rc-slider-track {
    position: absolute;
    left: 0;
    height: 4px;
    border-radius: 6px;
    background-color: #abe2fb;
  }
  .rc-slider-handle {
    position: absolute;
    margin-left: -7px;
    margin-top: -5px;
    width: 14px;
    height: 14px;
    cursor: pointer;
    border-radius: 50%;
    border: solid 2px #96dbfa;
    background-color: #fff;
  }
  .rc-slider-handle:hover {border-color: #57c5f7;}
  .rc-slider-handle-active:active {border-color: #57c5f7;}
  .rc-slider-step {
    position: absolute;
    width: 100%;
    height: 4px;
    background: transparent;
  }
`
