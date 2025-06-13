/*
 * Online status
 

Display online status for a list of users.
 

Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
 */
function status(users ) {//función que recibe nombres de usuarios y los pone en un arreglo
  let count = users.length;//contamos cuantos usuarios hay

  if (count === 0) {//condiciones que se deben cumplir
    return 'no one is online';//si no hay ninguno en línea
  } else if (count === 1) {
    return `${users[0]} is online`;//si solo hay un usuario en línea
    //se cuenta desde el primer usuario, o sea 0
  } else if (count === 2) {
    return `${users[0]} and ${users[1]} are online`;//si hay dos en línea
  } else {
    return `${users[0]}, ${users[1]} and ${count - 2} more online`;//si hay más de dos en línea
  }
}
let users = ['Zeltzin', 'Josue', 'Mar'];
console.log(status(users));
