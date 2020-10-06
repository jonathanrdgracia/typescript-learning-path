type User = {
    name: string,
}

type Admin = {
    rol: string[]
}

type UserAdmin = User & Admin

const Doctor: UserAdmin = {
    name:'Jonathan',
    rol:['2','osjsdf']
}

