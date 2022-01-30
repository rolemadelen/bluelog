import React, { useEffect } from "react";

const LightSwitch = React.forwardRef((props, ref) => {
    useEffect(() => {
        const mode = localStorage.getItem('mode')
        const HTML = document.querySelector('html')
        if(mode === "sun") {
            HTML.classList.remove('dark')
            document.querySelector('.fa').classList.remove('fa-moon')
            document.querySelector('.fa').classList.add('fa-sun')
        } else if (mode === 'moon') {
            HTML.classList.add('dark')
            document.querySelector('.fa').classList.remove('fa-sun')
            document.querySelector('.fa').classList.add('fa-moon')
        } else {
            if (HTML.classList.contains('dark')) {
                document.querySelector('.fa').classList.remove('fa-sun')
                document.querySelector('.fa').classList.add('fa-moon')
                localStorage.setItem('mode','moon')
            } else {
                document.querySelector('.fa').classList.remove('fa-moon')
                document.querySelector('.fa').classList.add('fa-sun')
                localStorage.setItem('mode','sun')
            }
        }
    })

    function toggleDarkMode() {
        const HTML = document.querySelector('html')
        if (HTML.classList.contains('dark')) {
            document.querySelector('.fa').classList.toggle('fa-sun')
            document.querySelector('.fa').classList.toggle('fa-moon')
            localStorage.setItem('mode','sun')
        } else {
            document.querySelector('.fa').classList.toggle('fa-moon')
            document.querySelector('.fa').classList.toggle('fa-sun')
            localStorage.setItem('mode', 'moon')
        }
        HTML.classList.toggle('dark');
    }

    return (
        <div onClick={toggleDarkMode} ref={ref} className={`${props.customIcon} ${props.customClass}`}></div>
    )
})

LightSwitch.displayName = 'LightSwitch';
export default LightSwitch;