function HistorialServicio() {
    let listado;
    const listar=()=>{
        fetch('http://sistemasupport.site/scsystemsv4/php/conection/acciones/listarHistorialServicios.php')
            .then(response => response.json())
            .then(data => listado=data);
    }
    listar();
    return (
        <div>
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Folio</th>
                    <th scope="col">fecha</th>
                    <th scope="col">cliente</th>
                    <th scope="col">telefono</th>
                    <th scope="col">cargador</th>
                    <th scope="col">precio</th>
                    <th scope="col">status</th>
                    <th scope="col">equipo</th>
                </tr>
                </thead>
                <tbody id='contenedor'>
                    {listado.map(element=>{
                        <tr>
                            <th scope="row">{element}</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default HistorialServicio;