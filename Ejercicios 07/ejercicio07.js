document.addEventListener('DOMContentLoaded', () => {
    const listado = document.getElementById('listado');
    const tareasd = document.getElementById('tareas');
    const mostrar = document.getElementById('mostrar');

    mostrar.addEventListener('click', async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (res.ok) {
            console.log('Llegaron los datos!');
            const personas = await res.json();
            listado.innerHTML = "";

            personas.forEach(persona => {
                const item = document.createElement('li');
                item.textContent = `${persona.id} - ${persona.name} - ${persona.username} - ${persona.email} - ${persona.website}`;

                const boton = document.createElement('button');
                boton.innerText = 'Mostrar Tareas';
                boton.addEventListener('click', async () => {
                    const res2 = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${persona.id}`);
                    if (res2.ok) {
                        console.log('Llegaron las tareas!');
                        const tareas = await res2.json();
                        tareasd.innerHTML = '';

                        const listaTareas = document.createElement('ul');
                        tareas.forEach(tarea => {
                            const li = document.createElement('li');
                            li.className = `tarea ${tarea.completed ? 'Si' : 'No'}`;
                            li.textContent = tarea.title;
                            listaTareas.appendChild(li);
                            if (!tarea.completed){
                                li.style.color = "Red"
                            } else {
                                li.style.color = "Green"
                            }
                        });

                        tareasd.appendChild(listaTareas);
                       
                    }
                });

                item.appendChild(boton);
                listado.appendChild(item);
            });
        }
    });
});