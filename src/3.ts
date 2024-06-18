enum Roles {
  User = 'user',
  Moderator = 'moderator',
  Admin = 'admin'
}

interface Person {
  id: number,
  login: string,
  role: Roles
}

const user = {
  id: 1,
  login: 'test',
  role: Roles.User,
}

const checkPermissionsDecorator = (roles: Roles[]) : ReturnTypes => {
  return (user: Person) : boolean => {
    return roles.includes(user.role);
  }
}

type ReturnTypes = (user: Person) => boolean;

const checkPermission = checkPermissionsDecorator([Roles.Admin]);
const hasPermissions = checkPermission(user);

console.log(hasPermissions);