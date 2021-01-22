import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js' // JAvaScript ES6 y tiene que ver con trabajar de manera modular con clases 

const app = Vue.createApp({
    data() {
        return {
            items: [], // listado de tareas
            currentItem: '', //texto actual del input 
        }
    },
    methods: {
        getItemById(id) {
            return this.items.find(item => {
                return item.id == id
            })
        },
        addItem() {
            this.items.push({
                id: nanoid(), // identificador único
                task: this.currentItem, // texo que hemos introducido en el input
                editMode: false, // Es bastante habitual controlar con algún tipo de mecanismo si estamos en modo edición o no
                editingTaskText: this.currentItem
            })
            this.currentItem = ''
        },
        deleteItem(id) {
            console.log(id)
            // Actualizar el estado de mi app, para eliminar la tarea identificada con este id
           this.items = this.items.filter(item =>{
               return item.id != id
           })
        },
        completeItem(id) {
            // Buscar este elemento en el array de items
            // Modificar la propiedad de dicho elemento 'done' a false
            let item = this.getItemById(id)
            item.done = !item.done
        },
        clearItems() {
            // Quiero actualizar mi array de items para quedarme solo con aquellos que NO están completados aún 
            this.items = this.items.filter(item => {
                return !item.done
            })
        },
        editItem(id) {
            // Vamos poner el item identificado con este id en modo edición
            let item = this.getItemById(id)

            item.editMode = true
        },
        taskEdited(id) {

            // Disclaimer!! Sería más adecuado recuperar el  id y el nuevo valor actualizado, y modificarlo en el array de tareas
            let item = this.getItemById(id)
            item.task = item.editingTaskText
            item.editMode = false

        }
    },
    computed: {
        isListEmpty() {
            return this.items.length == 0
        },
    }
})

app.mount('#app')