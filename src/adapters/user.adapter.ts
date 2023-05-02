import { ApiUser, User } from "../models";

export const UserAdapter = (apiUser: ApiUser): User => {
  return {
    id: apiUser.id,
    name: apiUser.name,
    email: apiUser.email,
    admin: Boolean(apiUser.admin)
  }
}