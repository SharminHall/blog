import { getToken } from '@/util/auth'

const user = {
  state: {
    token: getToken()
  }
}

export default user
