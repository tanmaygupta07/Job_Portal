export default class UserModel {
    static users = [
        {
            id: 1,
            name: "John Doe",
            email: "johndoe@gmail.com",
            password: "johndoe@123"
        },
        {
            id: 2,
            name: "Joe",
            email: "joe123@gmail.com",
            password: "joe@987"
        }
    ];

    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        UserModel.users.push({ id, name, email, password });
    }

    //to get user details
    static get = () => {
        return UserModel.users;
    }

    //to add new user
    static addUser = (user) => {
        return UserModel.users.push(user);
    }

    //to validate user for login
    static validateLogin = (user) => {
        const { email } = user;
        return UserModel.users.find((user) => {
            return user.email === email;
        });
    }
}