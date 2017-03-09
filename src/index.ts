namespace Api {
  export interface UserResponse {
    id: string
    name: string
  }

  export interface UsersResponse {
    items: UserResponse[],
    total: number
  }
}

const resp: Api.UserResponse = {
  id: 'f2313a10-ec54-4fdc-abc9-81fe82488454',
  name: 'Arek'
}
