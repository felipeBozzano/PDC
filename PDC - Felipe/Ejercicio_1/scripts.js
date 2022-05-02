let contador = 0;
$(document).ready(function(){
    $("#tabla").append(
        `
            <thead>
                <tr>
                    <td><b>Apellido</b></td>
                    <td><b>Nombre</b></td>
                    <td><b>Parentesco</b></td>
                    <th>¿Vive?</th>
                    <td><b>Año Nacimiento</b></td>
                    <td><b>Ocupación</b></td>
                    <td><b>E-mail</b></td>
                    <td></td>
                </tr>
            </thead>
            <tbody id="filas">
                <tr name="borrar${contador}">
                    <td><input type="text" id="apellido${contador}" name="apellido${contador}" class="form-control" required size="15"></td>
                    <td><input type="text" id="nombre${contador}" name="nombre${contador}" class="form-control" required size="15"></td>
                    <td>
                        <select id="parentesco" name="parentesco${contador}" class="form-control" required>
                            <option value="" selected>Seleccione</option>
                            <option value="padre">Padre</option>
                            <option value="madre">Madre</option>
                            <option value="hermano/a">Hermano/a</option>
                            <option value="hijo">Hijo</option>
                            <option value="cónyuge">Cónyuge</option>
                        </select>
                    </td>
                    <td>
                        <input type="radio" name="vive${contador}" value="si" checked>Sí
                        <input type="radio" name="vive${contador}" value="no" style="margin-left: 1vh;">No
                    </td>
                    <td><input type="number" id="ano${contador}" name="ano${contador}" min="0" maxlength="4" class="form-control" required></td>
                    <td>
                        <select id="ocupacion" name="ocupacion${contador} class="form-control" required>
                            <option value="" selected>Seleccione</option>
                            <option value="empleado">Empleado</option>
                            <option value="empresario">Empresario</option>
                            <option value="independiente">Independiente</option>
                            <option value="jubilado">Jubilado</option>
                            <option value="no_trabaja">No trabaja</option>
                        </select>
                    </td>
                    <td><input type="text" id="e-mail${contador}" size="20" class="form-control" required></td>
                    <td><img src="delete.png" alt="delete" width="50px" height="30px" onClick=borrarFila(${contador})></td>
                </tr>
            </tbody>
        `
    )
    $("tbody tr").each(function() {
        console.log($(this));
    })
    contador++;
    pintarFilas();
})

function agregarFila() {
    $("#filas").append(
        `
            <tr name="borrar${contador}">
                <td><input type="text" id="apellido${contador}" name="apellido${contador}" class="form-control" required size="15"></td>
                <td><input type="text" id="nombre${contador}" name="nombre${contador}" class="form-control" required size="15"></td>
                <td>
                    <select id="parentesco" name="parentesco${contador}" class="form-control" required>
                        <option value="" selected>Seleccione</option>
                        <option value="padre">Padre</option>
                        <option value="madre">Madre</option>
                        <option value="hermano/a">Hermano/a</option>
                        <option value="hijo">Hijo</option>
                        <option value="cónyuge">Cónyuge</option>
                    </select>
                </td>
                <td>
                    <input type="radio" name="vive${contador}" value="si" checked>Sí
                    <input type="radio" name="vive${contador}" value="no" style="margin-left: 1vh;">No
                </td>
                <td><input type="number" id="ano${contador}" name="ano${contador}" min="0" maxlength="4" class="form-control" required></td>
                <td>
                    <select id="ocupacion" name="ocupacion${contador} class="form-control" required>
                        <option value="" selected>Seleccione</option>
                        <option value="empleado">Empleado</option>
                        <option value="empresario">Empresario</option>
                        <option value="independiente">Independiente</option>
                        <option value="jubilado">Jubilado</option>
                        <option value="no_trabaja">No trabaja</option>
                    </select>
                </td>
                <td><input type="text" id="e-mail${contador}" size="20" class="form-control" required></td>
                <td><img src="delete.png" alt="delete" width="50px" height="30px" onClick=borrarFila(${contador})></td>
            </tr>
        `
    )
    contador++;
    pintarFilas();
  }

function borrarFila(elem) {
    $(`tr[name="borrar${elem}"`).remove()
    pintarFilas();
}

function pintarFilas() {
    var cnt = 0;
    $("tbody tr").each(function() {
        if (cnt % 2 == 0) {
            $(this).css({"background-color": "goldenrod"});
        }
        else {
            $(this).css({"background-color": "royalblue"});
        }
        cnt++;
    })
}
