 const tituloRuim = "vai se fuder";
 const titulo = document.getElementById('titulo1');
 titulo.innerHTML += tituloRuim;
 document.body.style.backgroundColor = "red";



 function trocaCor() {
    document.body.style.color = "gray";
 }

 function Criaelemento() {
    const titulo2 = document.createElement('h2');
    titulo2.innerHTML = "meu footer";
    const footer = document.getElementById('footer1');
    footer.append(titulo2);


 }

 Criaelemento();

 function RemoveElemento(id) {
    const el = document.getElementById(id);
    el.remove();
 }

 function Criarbotao(){
   const main = document.getElementById('main1');

   for(let i = 1; i <= 5; i++){
      const bot = document.createElement('button');
      bot.innerHTML = i ; 
      main.append(bot);
   }

 }

 Criarbotao();


 