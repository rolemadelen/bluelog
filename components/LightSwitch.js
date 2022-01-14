import React from "react";

const LightSwitch = React.forwardRef((props, ref) => {
    function toggleDarkMode() {
        document.querySelector('html').classList.toggle('dark');
    }

    return (
        <div onClick={toggleDarkMode} ref={ref} className={`${props.customIcon} ${props.customClass}`}></div>
    )
})

LightSwitch.displayName = 'LightSwitch';
export default LightSwitch;