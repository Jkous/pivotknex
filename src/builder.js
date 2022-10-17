
const knex = require('knex');

class Builder {

  client
  builder

  constructor(options) {

    const defaultOptions = {
      client: 'mssql',
      connection: {
        host: '192.168.20.20',
        // port: 3306,
        user: 'sa',
        password: 'Benmonz2020!',
        database: 'master',
        options: {
          port: 1433
        }
      }
    }

    console.log('knex', knex)
    this.builder = knex.QueryBuilder // (defaultOptions)
  }


  getClient() {
    //this.builder = this.client.queryBuilder()
    return this
  }

  addSelect(columns) {
    this.builder.select(...columns)
    return this
  }

  addFrom(tableName) {
    this.builder.from(tableName)
    return this
  }

  async getTable() {
    const result = await this.client('Reporte_pivot_BI_configuracion').where({
      id: 141
    }).select(['fila', 'columna', 'measures', 'filtros', 'options'])

    return result
  }

  buildQuery() {
    return this.builder.toString() //.client.queryBuilder().toString()
    // const result = this.client('Reporte_pivot_BI_configuracion').where({
    //   id: 141
    // }).select(['fila', 'columna', 'measures', 'filtros', 'options'])
    //   .toString()

    //   return result
  }
}

module.exports = Builder