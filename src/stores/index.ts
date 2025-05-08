// Current exports are correct - keep as is
import { defineStore } from 'pinia'

interface User {
  id: string
  username: string
  email: string
  bio: string
  avatar: string
}

interface Link {
  id: string
  title: string
  url: string
  icon?: string
}

interface ShortUrl {
  id: string
  key: string
  url: string
  clicks: number
}

interface Product {
  id: string
  title: string
  description: string
  price: number
  image: string
}

export const useStore = defineStore('main', {
  state: () => ({
    user: null as User | null,
    links: [] as Link[],
    shortUrls: [] as ShortUrl[],
    products: [] as Product[],
    isAuthenticated: false
  }),
  actions: {
    login(user: User) {
      this.user = user
      this.isAuthenticated = true
      // Initialize dummy data
      this.links = [
        { id: '1', title: 'My Portfolio', url: 'https://example.com', icon: 'briefcase' },
        { id: '2', title: 'GitHub', url: 'https://github.com', icon: 'code' }
      ]
      this.shortUrls = [
        { id: '1', key: 'mylink', url: 'https://example.com/long-url', clicks: 42 }
      ]
      this.products = [
        { id: '1', title: 'Premium Template', description: 'Beautiful website template', price: 49, image: '' }
      ]
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
    }
  }
})
