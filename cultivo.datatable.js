Cultivo.prototype.datatable = function(table, targets) {
  $(table).dataTable({
    'responsive': true,
    'language': {
      'lengthMenu': 'Mostrar _MENU_ registros por pagina',
      'zeroRecords': 'No se encontraron registros',
      'info': 'Mostrando pagina _PAGE_ de _PAGES_',
      'infoEmpty': 'No hay registros disponibles',
      'infoFiltered': '(filtrados de un total de _MAX_ registros)',
      'search':'Buscar',
      'paginate': {
        'previous': 'Anterior',
        'next': 'Siguiente'
      }
    },
    'columnDefs': [
    {
      'orderable': false,
      'targets': targets
    }
    ]
  });
}
