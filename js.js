const boton = document.getElementById("boton");
const buttonIngresar = document.getElementById("buttonIngresar");
const containerHub = document.getElementById("container-Hub");
const containerTable = document.getElementById("container-Table");
const contentForm = document.getElementById("content-Form");
const containerForm = document.getElementById("container-Form");


mostrarElemento = (elemento) => {
    elemento.style.display = "block"; // Mostrar el formulario
};
ocultarElemento = (elemento) => {
    elemento.style.display = "none"; // Ocultar el formulario
};
// Agregar un evento al botón para eliminar el contenedor de bienvenida y mostrar la tabla
buttonIngresar.addEventListener("click", () => {
    mostrarFormulario(containerHub, containerForm, contentForm);
    const buttonDatos = document.getElementById("buttonDatos");
    if (buttonDatos) {
        buttonDatos.addEventListener("click", () => {
            crearTabla(document.getElementById("nombre").value, document.getElementById("edad").value, document.getElementById("profesion").value); // Llamar a la función para crear la tabla
            if (document.getElementById("boton-cambiar")) {
                document.getElementById("boton-cambiar").addEventListener("click", () => {
                    ocultarElemento(containerTable); // Ocultar la tabla
                    mostrarElemento(containerForm); // Mostrar el formulario
                    nombre.value = ""; // Limpiar el campo de nombre
                    edad.value = ""; // Limpiar el campo de edad
                    profesion.value = "0"; // Reiniciar la selección de profesión
                });
            }
        });
    }
});
// Función para mostrar el formulario y ocultar el contenedor de bienvenida
mostrarFormulario = () => {
    ocultarElemento(containerHub);
    mostrarElemento(containerForm);
    contentForm.insertAdjacentHTML("beforeend",
        `
        <p>Inserte sus datos</p>
        <label>
            <i class='fas fa-id-badge'style="width: 60px;font-size: 50px;"></i>
            <input id="nombre" type="letter" class="input-nombre" placeholder="Nombre" autocomplete="off"  pattern="[A-Za-z]*" value=""/>
        </label>
        <label>
            <i class="fa fa-calendar" style="width: 60px;font-size: 50px;"></i>
            <input id="edad" type="number" class="input" placeholder="Edad" autocomplete="off"/>
        </label>
        <div class="custom-select">
            <i class="fa fa-briefcase" style="width: 60px;font-size: 50px;"></i>
            <select id="profesion">
                <option value="0" style="display:none">Profesion</option>
                <option value="Ingeniero">Ingeniero</option>
                <option value="Arquitecto">Arquitecto</option>
                <option value="Medico">Medico</option>
                <option value="Abogado">Abogado</option>
                <option value="Programador">Programador</option>
                <option value="Diseñador">Diseñador</option>
                <option value="Profesor">Profesor</option>
                <option value="Contador">Contador</option>
                <option value="Científico">Científico</option>
                <option value="Artista">Artista</option>
                <option value="Músico">Músico</option>
                <option value="Desempleado">Desempleado</option>
            </select>
        </div>
        <button id="buttonDatos" type="button" class="boton">Enviar</button>
        `);
}

// Función para crear la tabla con los datos ingresados
crearTabla = (nombre, edad, profesion) => {
    if (!nombre || !edad || !profesion) {
        alert("Por favor, complete todos los campos.");
        return; // Salir de la función si hay campos vacíos
    }
    if (nombre.includes("1") || nombre.includes("2") || nombre.includes("3") || nombre.includes("4") || nombre.includes("5") || nombre.includes("6") || nombre.includes("7") || nombre.includes("8") || nombre.includes("9") || nombre.includes("0")) {
        document.getElementById("nombre").placeholder ="No se permiten números"; // Mostrar mensaje de error
        document.getElementById("nombre").value = ""; // Limpiar el campo de nombre
        document.getElementById("nombre").setCustomValidity("Invalid field.");
        ocultarElemento(containerTable); // Limpiar el contenedor de la tabla
        return; // Salir de la función si el nombre contiene números
    } else {
        ocultarElemento(containerForm); // Ocultar el formulario
        if (profesion === "0") {
            profesion = "Desempleado"; // Asignar "Desempleado" si no se selecciona una profesión
        }
        // Crear la tabla y agregarla al contenedor
        containerTable.innerHTML = ""; // Limpiar el contenedor antes de agregar la tabla    
        containerTable.insertAdjacentHTML("beforeend", `
            <div class="table1">
                <table id="tablaCambiar">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Años</th>
                            <th>Trabajo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>`+ nombre + `</td>
                            <td>`+ edad + `</td>
                            <td>`+ profesion + `</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button id="boton-cambiar" type="button" class="boton">Cambiar</button>
        `);
        mostrarElemento(containerTable); // Mostrar la tabla
    }
}

