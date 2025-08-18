document.addEventListener("DOMContentLoaded", () => {

    const ToDoList = {
        tasks: [
            { 
                id: 1, 
                name: 'Помыть посуду', 
                order: 1 
            },
            { 
                id: 2, 
                name: 'Сходить в магаз', 
                order: 2 
            },
            { 
                id: 3, 
                name: 'Оплатить кварплату', 
                order: 1
            },
        ],
        addTask(id, name, order) {

            const task = {
                id: id,
                name: name,
                order: order
            }

            this.tasks.push(task)

            console.log(this.tasks) 
            
        },
        delTask(id) {

            const task = this.tasks.filter(task => task.id !== id)

            console.log(task)
            
        },
        updateTask(id, name, order) {

            const task = this.tasks.find(task => task.id === id);

            if (name) task.name = name
            if (order) task.order = order

            console.log(task)

        },
        sortTaskIncr(order) {

            const task = this.tasks.sort((a, b) => a.order > b.order ? 1 : -1);

            console.log(task)

        },
        sortTaskDescr(order) {

            const task = this.tasks.sort((a, b) => a.order > b.order ? -1 : 1);

            console.log(task)

        }
    }

    //ToDoList.addTask(4, 'Сходить погулять', 3)
    //ToDoList.delTask(3)
    //ToDoList.updateTask(3, 'Что-то сделать', 3)
    //ToDoList.sortTaskIncr(1)
    //ToDoList.sortTaskDescr(1)

    const newTask = {
        tasks: [
            { 
                id: 1, 
                name: 'тест',
                description: 'описание',
                order: 0
            }
        ]
    }

    const addTaskNew = function (id, name, description, order) {

        const task = {
            id: id,
            name: name,
            description: description,
            order: order
        }

        this.tasks.push(task)

        console.log(this.tasks) 
        
    }

    addTaskNew.apply(newTask, [2, 'Сходить погулять', 'Какое-то писание', 4])
    ToDoList.delTask.call(newTask, 1)
    ToDoList.updateTask.apply(newTask, [1, 'Что-то сделать', 3])
    ToDoList.sortTaskIncr.call(newTask, 1)
    ToDoList.sortTaskDescr.call(newTask, 1)

})