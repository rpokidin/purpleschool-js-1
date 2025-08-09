document.addEventListener("DOMContentLoaded", () => {

    const ToDoList = {
        tasks: [
            { 
                title: 'Помыть посуду', 
                id: 1, 
                priority: 1 
            },
            { 
                title: 'Сходить в магаз', 
                id: 2, 
                priority: 2 
            },
            { 
                title: 'Оплатить кварплату', 
                id: 3, 
                priority: 1
            },
        ],
        addTask: function (title, id, priority) {

            const task = {
                title: title,
                id: id,
                priority: priority

            }

            this.tasks.push(task)

            console.log(this.tasks) 
            
        },
        delTask: function (id) {

            const task = this.tasks.filter(task => task.id !== id)

            console.log(task)
            
        },
        updateTask: function (id, title, priority) {

            const task = this.tasks.find(task => task.id === id);

            if (title) task.title = title
            if (priority) task.priority = priority

            console.log(task)

        },
        sortTaskIncr: function (priority) {

            const task = this.tasks.sort((a, b) => a.priority > b.priority ? 1 : -1);

            console.log(task)

        },
        sortTaskDescr: function (priority) {

            const task = this.tasks.sort((a, b) => a.priority > b.priority ? -1 : 1);

            console.log(task)

        }
    }

    //ToDoList.addTask('Сходить погулять', 4, 3)
    //ToDoList.delTask(3)
    //ToDoList.updateTask(3, 'Что-то сделать', 3)
    //ToDoList.sortTaskIncr(1)
    ToDoList.sortTaskDescr(1)
    
})