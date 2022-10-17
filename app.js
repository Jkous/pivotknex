const Builder = require('./src/builder')
const { parseQuery } = require('./src/utils')

async function main() {

  try {
    const builder = new Builder({})


    // const result = await builder.getTable()
    // const data = await parseQuery(result[0])

    builder
    .getClient()
    .addSelect(['a','b','c'])
    .addFrom('users')
    const data = builder.buildQuery()

    console.log('res', data)




  } catch (error) {
    console.log('err', error)
  }

  

}

main()