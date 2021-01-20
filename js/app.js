import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

const app = Vue.createApp({
    data() {
        return {
            items: [],
            currentItem: ''
        }
    },
    methods: {
        addItem() {
            this.items.push({
                id: nanoid(),
                task: this.currentItem,
                isCompleted: false,
                editMode : false
            })
            this.currentItem = ''
        },
        findItemById(id) {
            return this.items.find(item=> item.id == id)

        },
        removeItem(id) {
            this.items = this.items.filter(item => {
                return item.id != id
            })
        },
        taskCompleted(id) {
            let item = this.findItemById(id)
            item.isCompleted = true
        },
        editItem(id) {
            let item = this.findItemById(id)
            item.editMode = true
        },
        taskEdited(id) {
            let item = this.findItemById(id)
            item.editMode = false

        },
        removeTasksFinished() {
            this.items = this.items.filter(item => {
                return !item.isCompleted
            })
        }
    },
    computed: {
        mustDisable() {
            return this.items.length == 0
        }
    }
})

app.mount('#app')