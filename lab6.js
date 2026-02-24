
var productos = {
  p1: { nombre: 'Bracalete',  precio: 600, max: 10 },
  p2: { nombre: 'Sueter',     precio: 350, max: 10 },
  p3: { nombre: 'Bebedero',   precio: 430, max: 10 },
  p4: { nombre: 'Cobija',     precio: 700, max: 10 },
};

var IVA = 0.16;


function getCantidad(id) {
  var val = parseInt(document.getElementById('qty-' + id).value);
  return isNaN(val) ? 0 : val;
}

function validar(id) {
  var cantidad = getCantidad(id);
  var max = productos[id].max;
  var errEl = document.getElementById('err-' + id);

  if (cantidad < 0) {
    errEl.textContent = 'No puede ser negativo.';
    return false;
  }
  if (cantidad > max) {
    errEl.textContent = 'Máximo ' + max + ' unidades.';
    return false;
  }

  errEl.textContent = '';
  return true;
}


function cambiar(id, delta) {
  var input = document.getElementById('qty-' + id);
  var nueva = (parseInt(input.value) || 0) + delta;

  if (nueva < 0) nueva = 0;
  if (nueva > productos[id].max) nueva = productos[id].max;

  input.value = nueva;
  document.getElementById('err-' + id).textContent = '';
  actualizar();
}


function actualizar() {
  var subtotal = 0;
  var hayProductos = false;

  for (var id in productos) {
    var valido = validar(id);
    var cantidad = valido ? getCantidad(id) : 0;
    var monto = cantidad * productos[id].precio;

    if (cantidad > 0) {
      hayProductos = true;
      subtotal += monto;
      document.getElementById('sum-' + id).textContent =
        cantidad + ' unidades — $' + monto;
    } else {
      document.getElementById('sum-' + id).textContent = '0 unidades — $0';
    }
  }

  var iva = subtotal * IVA;
  var total = subtotal + iva;

  document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);
  document.getElementById('iva').textContent = '$' + iva.toFixed(2);
  document.getElementById('total').textContent = '$' + total.toFixed(2);
  document.getElementById('btn-comprar').disabled = !hayProductos;
}

// anuncio que confirma el clic en Comprar
function confirmar() {
  var subtotal = 0;
  for (var id in productos) {
    subtotal += getCantidad(id) * productos[id].precio;
  }
  var total = subtotal * (1 + IVA);
  alert('Compra confirmada\nTotal: $' + total.toFixed(2) + '\n¡Gracias por comprar en PawFriend!');
}
