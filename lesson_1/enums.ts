export enum STUDENTS {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

console.log(STUDENTS.FEMALE);


enum ROLES {
  STUDENT,
  ADMIN_VOLODYA
}

const user = {
  role: ROLES.ADMIN_VOLODYA
}

if (user.role === ROLES.ADMIN_VOLODYA) {

}