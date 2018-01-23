// @flow
export default (username: string, password: string) : any => {
    return new Promise( (resolve, reject) => {
        users.filter((current, key) => {

            if(current.username == username && current.password == password){
                resolve(current);
                return true;
            }else{
                if(users.length-1 == key){
                    reject('Error en las credenciales');
                }
                return false;
            }
            
        })[0];
    })
}

interface Usuario {
    id: number,
    name: string,
    username: string,
    password: string
}

const users : Array<Usuario> = [
    {
        id: 1,
        name: "Johnny Pacheco",
        username: "johnnyp",
        password: "1234"
    },
    {
        id: 2,
        name: "Yolanda Ramirez",
        username: "yoli",
        password: "123456"
    },
    {
        id: 3,
        name: "Jose Perez",
        username: "josejose",
        password: "2323"
    }
]