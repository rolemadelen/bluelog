import React from "react";

const LightSwitch = React.forwardRef((props, ref) => {
    function toggleDarkMode() {
        const HTML = document.querySelector('html')
        if (HTML.classList.contains('dark')) {
            document.querySelector('.fa-moon').classList.toggle('fa-sun')
            document.querySelector('.fa-moon').classList.toggle('fa-moon')
        } else {
            document.querySelector('.fa-sun').classList.toggle('fa-moon')
            document.querySelector('.fa-sun').classList.toggle('fa-sun')
        }
        HTML.classList.toggle('dark');
    }

    return (
        <div onClick={toggleDarkMode} ref={ref} className={`${props.customIcon} ${props.customClass}`}></div>
    )
})

LightSwitch.displayName = 'LightSwitch';
export default LightSwitch;