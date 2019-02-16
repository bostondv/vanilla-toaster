const _defaults = {
  timeout: 5000,
  transition: 400
}

const _toast = (message, options = {}) => {
  let container = document.querySelector('.toast-container')

  options = Object.assign({}, _defaults, options)

  if (!container) {
    container = document.createElement('div')
    container.classList.add('toast-container')
    document.body.appendChild(container)
  }

  if (!message) {
    return
  }

  const node = document.createElement('div')
  node.classList.add('toast-message-wrap')
  node.innerHTML = `<div class="toast-message">${message}</div>`

  container.appendChild(node)

  setTimeout(() =>
    node.querySelector('div').classList.add('toast-message--visible')
  )

  setTimeout(() => {
    node.querySelector('div').classList.remove('toast-message--visible')
    setTimeout(() => node.parentNode.removeChild(node), options.transition)
  }, options.timeout)
}

export const message = message => _toast(message)

export const setDefaults = options => Object.assign(_defaults, options)
