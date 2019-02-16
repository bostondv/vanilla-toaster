export default (() => {
  const options = {
    timeout: 5000,
    transition: 400
  }

  let container = null

  const addMessage = message => {
    if (!message) {
      return
    }

    const node = document.createElement('div')
    node.classList.add('toaster__message-container')
    node.innerHTML = `<div class="toaster__message">${message}</div>`
    container.appendChild(node)

    setTimeout(() =>
      node.querySelector('div').classList.add('toaster__message--visible')
    )

    setTimeout(() => {
      node.querySelector('div').classList.remove('toaster__message--visible')
      setTimeout(() => node.parentNode.removeChild(node), options.transition)
    }, options.timeout)
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
