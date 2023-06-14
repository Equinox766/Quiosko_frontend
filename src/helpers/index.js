export const formatearDinero = cantidad => {
    return cantidad.toLocaleString('es-PY', {
        style: 'currency',
        currency: 'PYG'
    })
}