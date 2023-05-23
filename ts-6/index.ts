class User {
    static count: number = 0;
    private _name: string;
    private _login: string;
    private _password: string;

    constructor(name: string, login: string, password: string) {
        this._name = name;
        this._login = login;
        this._password = password;
        User.count++;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get login(): string {
        return this._login;
    }

    get password(): string {
        return this._password;
    }

    set password(newPassword: string) {
        this._password = newPassword;
    }

    showInfo(): void {
        console.log(`Name: ${this._name}, Login: ${this._login}`);
    }
}

class SuperUser extends User {
    static count: number = 0;
    private _role: string;

    constructor(name: string, login: string, password: string, role: string) {
        super(name, login, password);
        this._role = role;
        SuperUser.count++;
    }

    get role(): string {
        return this._role;
    }

    set role(newRole: string) {
        this._role = newRole;
    }

    showInfo(): void {
        console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this._role}`);
    }
}

const user1: User = new User('Paul McCartney', 'paul', '1234');
const user2: User = new User('George Harrison', 'george', '5678');
const user3: User = new User('Richard Starkey', 'ringo', '8523');
const admin: SuperUser = new SuperUser('John Lennon', 'john', '0000', 'admin');

user1.showInfo();
admin.showInfo();

const users = User.count;
const admins = SuperUser.count;

console.log(`Всего обычных пользователей: ${users}`);
console.log(`Всего супер-пользователей: ${admins}`);

user3.name = 'Ringo Starr';
user1.password = 'Pa$$w0rd';

console.log(user3.name);
console.log(user2.password);
console.log(user2.login);

// user2.login = 'geo';