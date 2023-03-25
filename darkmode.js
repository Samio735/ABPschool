(() => {
    'use strict'
    const storedTheme = localStorage.getItem('theme')

  
    const getPreferredTheme = () => {
      if (storedTheme) {
        return storedTheme
      }
  
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
  
    const setTheme = function (theme) {
        console.log(theme)
      if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.querySelector(".darkswitch").classList.add("lightswitch")
        document.body.classList.add("dark")
      } 
      else {
        {
            if(theme ==="dark"){
                document.querySelector(".darkswitch").classList.add("lightswitch")
                document.body.classList.add("dark")
            }
            else{
                document.querySelector(".darkswitch").classList.remove("lightswitch")
                document.body.classList.remove("dark")
            }
        }
    }
    }
    console.log("stored theme ",storedTheme)
    console.log("local theme ",localStorage.getItem("theme"))
    console.log("preffered ",getPreferredTheme())

  
    setTheme(getPreferredTheme())
  
    
  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (storedTheme !== 'light' || storedTheme !== 'dark') {
        setTheme(getPreferredTheme())
      }
    })
  
    window.addEventListener('DOMContentLoaded', () => {
        
      document.querySelector(".darkswitch").addEventListener('click', () => {
        let theme ="light"
        if(document.querySelector(".darkswitch").classList.contains("lightswitch")){
            theme = "light"
        }
        else{
            theme = "dark"
        }

          localStorage.setItem('theme', theme)
          setTheme(theme)
          console.log("stored theme ",storedTheme)
          console.log("local theme ",localStorage.getItem("theme"))
          console.log("preffered ",getPreferredTheme())
      
        })
    })

      
})()
