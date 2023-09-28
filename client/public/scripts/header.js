const header = document.querySelector('header')
header.className = 'header'

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'Forever Friends'

const headerSub = document.createElement('i')
headerSub.textContent = 'Find your forever friend today'

const headerButton = document.createElement('Home')
headerButton.textContent = 'View Friends'
headerButton.className = 'header-button';
    
headerButton.addEventListener('click', (event) => {
  window.location = '/'
})

headerContainer.appendChild(headerTitle)
headerContainer.appendChild(headerSub)
headerContainer.appendChild(headerButton)
header.appendChild(headerContainer)






