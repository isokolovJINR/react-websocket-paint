import React from 'react';
import toolState from "../store/toolState";

const SettingBar = () => {
    return (
        <div className={"setting-bar"}>
            <lable htmlFor={"line-width"}> Толщина линии</lable>
            <input
                onChange={e => toolState.setLineWidth(e.target.value)}
                id={"line-width"}
                style={{margin: '0 10'}}
                type={"number"} defaultValue={1} min={1} max={50}/>

            <lable htmlFor={"stroke-color"}> Border color</lable>
            <input
                onChange={e => toolState.setStrokeColor(e.target.value)}
                id={"stroke-color"}
                style={{margin: '0 10'}}
                type={"color"} />
        </div>
    );
};

export default SettingBar;