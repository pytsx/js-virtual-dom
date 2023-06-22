class VirtualDom {
  constructor({ dom, vDom }) {
    this.dom = dom
    this.vDom = vDom
    this.renderVDom(dom, vDom)
  }

  createNode(data) {
    const { classes = [], tag = 'div', text, attributes = [] } = data
    let node = document.createElement(tag)

    classes.forEach(className => {
      node.classList.add(className)
    });

    if (text) {
      node.innerText = text
    }

    attributes.forEach(([name, value]) => {
      node.setAttribute(name, value)
    })

    return node
  }

  renderVDom(parentNode, newVNode) {
    for (let key in newVNode) {
      const vNode = newVNode[key]

      if (vNode.attributes) {
        vNode.attributes.push(['id', key])
      } else {
        vNode.attributes = [['id', key]]
      }

      const node = this.createNode(vNode)
      if (vNode.children) {
        const vNodeChildren = vNode.children
        this.renderVDom(node, vNodeChildren)
      }
      parentNode.appendChild(node)
    }
  }

  getNode(id) {
    const node = document.getElementById(id)
    return node
  }
}

