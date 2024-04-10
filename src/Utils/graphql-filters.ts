
export const mountQueryPagination = (page: number) => {
  if(page !== null && page !== 0) return `query {
    consultarTodosPagination(page:${page}, pageSize:10) {
      name
      idCar
      status
      idPhoto
      base64
    }
  }`
  return `query {
    consultarTodosPagination(page:1, pageSize:10) {
      name
      idCar
      status
      idPhoto
      base64
    }
  }`
}


export const mountQuery = () => {
    return `query {
      consultarTodos {
        name
        idCar
        status
        idPhoto
        base64
      }
    }`
  }