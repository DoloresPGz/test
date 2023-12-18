function agregarTarea() {
    const input = document.getElementById('tareaInput');
    const tarea = input.value.trim();
  
    if (tarea !== '') {
      const lista = document.getElementById('listaTareas');
      const nuevaTarea = document.createElement('li');
      nuevaTarea.innerText = tarea;
  
      // Evento para marcar como completada
      nuevaTarea.addEventListener('click', function() {
        this.classList.toggle('completada');
      });
  
      // Botón para eliminar tarea
      const botonEliminar = document.createElement('button');
      botonEliminar.innerText = 'Eliminar';
      botonEliminar.addEventListener('click', function(event) {
        //event.stopPropagation(); // Evita que el evento se propague a la tarea
        lista.removeChild(nuevaTarea);
      });
  
      nuevaTarea.appendChild(botonEliminar);
      lista.appendChild(nuevaTarea);
      input.value = '';
    } else {
      alert('Por favor, ingresa una tarea válida');
    }
  }
  