
async function parseQuery(data) {
  const { fila, columna, measures, filtros, options } = data
  return {
    fila: await JSON.parse(fila),
    columna: await JSON.parse(columna),
    measures: await JSON.parse(measures),
    filtros: await JSON.parse(filtros),
    options: await JSON.parse(options),
  }
}

module.exports = {
  parseQuery
}