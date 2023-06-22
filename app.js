const dom = document.getElementById('root')

const vLayout = {
  container: {
    classes: ['container'],
    children: {
      appbar: {
        tag: 'nav',
        children: {
          toolbar: {
            children: {
              logo: {
                tag: 'h1',
                text: 'vDom',
              }
            }
          }
        }
      },
      content: {
        tag: 'section',
        children: {
          img: {
            tag: 'img',
            attributes: [
              ['src', 'https://source.unsplash.com/random/?abstract'],
              ['alt', 'imagem aleatória do unsplash']
            ]
          }
        }
      }
    }
  }
}

const virtualDom = new VirtualDom({ dom, vDom: vLayout })

const vContent = {
  cards: {
    tag: 'ul',
    children: {
      card_1: {
        tag: 'li',
        text: 'card_1'
      },
      card_2: {
        tag: 'li',
        text: 'card_2'

      },
      card_3: {
        tag: 'li',
        text: 'card_3'
      }
    }
  }
}

const content = virtualDom.getNode("content")

virtualDom.renderVDom(content, vContent)

content.setAttribute("class", 'nond')

console.log(content)