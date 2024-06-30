export type AuthCreds = {
    identity:string,
    password:string
}

export type SignUpCreds = {
    username:string,
    email:string,
    password:string,
    passwordConfirm:string,
    name:string,
}

export type AuthResponse = {
    isSuccess:boolean,
    message:string
}