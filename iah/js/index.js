const title = document.querySelector('.title')
const words = `I Have Something for you myiah :>`.split(/\s+/)

title.replaceChildren()

words.forEach((word, index) => {
  const wordElement = document.createElement('span')
  wordElement.className = 'title-word'
  wordElement.textContent = word
  wordElement.style.animationDelay = `${index * 0.35}s`
  title.append(wordElement)
})