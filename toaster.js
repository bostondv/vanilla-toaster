export default (() => {
  let container = null

  const addMessage = message => {
    if (!message) {
      return
    }

    const node = document.createElement('div')
    node.classList.add('toaster__message')
    node.textContent = message
    container.appendChild(node)

    setTimeout(() => node.parentNode.removeChild(node), 5000)
  }

  const init = () => {
    container = document.createElement('div')
    container.classList.add('toaster')
    document.body.appendChild(container)
  }

  init()

  return {
    add: addMessage
  }
})()
