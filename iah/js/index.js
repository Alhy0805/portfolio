const title = document.querySelector('.title')
const words = `I Have Something for you myiah :>`.split(/\s+/)

if (title) {
  title.replaceChildren()

  words.forEach((word, index) => {
    const wordElement = document.createElement('span')
    wordElement.className = 'title-word'
    wordElement.textContent = word
    wordElement.style.animationDelay = `${index * 0.35}s`
    title.append(wordElement)
  })
}

const openButton = document.querySelector('.btn')

if (openButton) {
  openButton.addEventListener('click', () => {
    const nextPage = openButton.getAttribute('href')
    if (nextPage) {
      window.location.href = nextPage
    }
  })
}