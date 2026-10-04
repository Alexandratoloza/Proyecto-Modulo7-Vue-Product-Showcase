import { shallowMount } from '@vue/test-utils'
jest.mock('bootstrap-vue-next', () => ({
BCard: 'BCard',
BCardTitle: 'BCardTitle',
BCardText: 'BCardText',
BButton: 'BButton'
}))

import ProductCard from '../../src/components/ProductCard.vue'

describe('Pruebas unitarias para ProductCard.vue', () => {
  it('Renderiza correctamente la información del producto', () => {
    const producto = {
      id: 1,
      name: 'Laptop Pro',
      description: 'Potente laptop para profesionales',
      price: 1200,
      image: 'laptop.jpg'
    }

    const wrapper = shallowMount(ProductCard, {
      props: { producto }
    })

    expect(wrapper.text()).toContain('Laptop Pro')
    expect(wrapper.text()).toContain('Potente laptop para profesionales')
    expect(wrapper.text()).toContain('1200')
  })

  it('Emite el evento "agregar" al hacer click en el botón', async () => {
    const producto = {
      id: 2,
      name: 'Smartphone X',
      description: 'Teléfono de última generación',
      price: 800,
      image: 'smartphone.jpg'
    }

    const wrapper = shallowMount(ProductCard, {
      props: { producto }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted().agregar).toBeTruthy()
    expect(wrapper.emitted().agregar[0]).toEqual([producto])
  })
})