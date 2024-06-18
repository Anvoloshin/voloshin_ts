enum Role {
  User = 'user',
  Moderator = 'moderator',
  Admin = 'admin'
}

interface Person {
  id: number,
  login: string,
  role: string
}

const user = {
  id: 1,
  login: 'test',
  role: Role.Admin,
}

const checkPermissionsDecorator = (roles: Role) : ReturnTypes => {
  return (user: Person) : boolean => {
      return roles.includes(user.role);
  }
}

type ReturnTypes = (user: Person) => boolean;

const checkPermission = checkPermissionsDecorator(Role.Admin);
const hasPermissions = checkPermission(user);

console.log(hasPermissions);