function helloword()
{
    console.log("Hello word");
}

const saudacao = () => {
    var data = new Date()
    return data.getHours()  <=12? "Bonjour!": data.getHours() <= 18? "Bonne après midi": "Bon soir";

}
// tudo se aprende nesse mundo.
helloword();
console.log('A saudação do momento é ' + saudacao());
