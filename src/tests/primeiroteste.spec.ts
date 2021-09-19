import  User from "../models/User";

test("meu primeiro teste", ()=>{
    const user = new User();
    user.nome = "Wesdra";
    expect(user.nome).toEqual("Wesdra");
});