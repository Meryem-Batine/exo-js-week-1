// class UserRegister{
//     constructor(nom,email,mdp,connected){
//         this.nom = nom;
//         this.email = email;
//         this.mdp = mdp;
//         this.connected = connected;
//     }
// }
// let users = [];
// const register =()=>{
//     let askNom = prompt(`quel est ton nom ?`);
//     let askEmail = prompt(`quel est ton email ?`);
//     while (!askEmail.includes("@")) {
//         askEmail = prompt(` email incorrect ! quel est ton email ?`);
//     }
//     let askMdp = prompt(`quel est ton mdp ?`);

//     let NewUser = new UserRegister(askNom , askEmail , askMdp);
//     users.push(NewUser);
//     alert(`vous vous etes bien connected`);

//     login();
// }

// // register();
// console.log(users);

// const login = ()=>{
//     let verifyEmail = prompt(`quel est votre email ?`);
//     while (!verifyEmail.includes("@")) {
//         verifyEmail = prompt(` quel est votre email ?`);
//     }
//     let verifyMdp = prompt(`quel est votre mdp ?`);
//     for (let index = 0; index < users.length; index++) {
//         const element = users[index];
//         if (element.email == verifyEmail) {
//             if (element.mdp == verifyMdp) {
//                 element.connected = true;
//                 alert(`you are ${element.nom} connected`);
//             }else{
//                 while (element.mdp != verifyMdp) {
//                     verifyMdp = prompt(`quel est votre correct mdp ?`);
//                 }
//                 element.connected = true;
//                 alert(`you are ${element.nom} connected`)
//             }
//         }else{
//             while (element.email != verifyEmail) {
//                 verifyEmail = prompt(` email incorrect ! quel est ton email ?`);
//             }
//             if (element.mdp == verifyMdp) {
//                 element.connected = true;
//                 alert(`you are ${element.nom} connected`);
//             }else{
//                 while (element.mdp != verifyMdp) {
//                     verifyMdp = prompt(`quel est votre correct mdp ?`);
//                 }
//                 element.connected = true;
//                 alert(`you are ${element.nom} connected`)
//             }
//         }
//         logout(element);
//     }
    
// }
// // +element  j'ai besoin de savoir qui s'est connecte
// const logout =(element)=>{
//     let deconnected = confirm(`voulez-vous vous deconnected`);
//     if (deconnected == true) {
//         element.connected = false
//         alert(` now you are deconnected `);
//         console.log(element.connected);
//         login();
//     }else{
//         alert(`stay connected`);
//     }
// }

// register();

//? cpmbat
// class Personnages{
//     constructor(nom,force,vie,etat){
//         this.nom = nom;
//         this.force = force;
//         this.vie = vie;
//         this.etat = etat;
//     }
// }
// let assia = new Personnages(`assia`, 200 , 150 , true);
// let yassmine = new Personnages(`yassmine`, 180 , 120 , true);
// let round = 0 ;

// const combat =(joueur1, joueur2)=>{
//     while (joueur1.etat == true && joueur2.etat == true) {
//         //! joueur 1 attaque  en 1ere
//         joueur2.vie -= joueur1.force;
//         // joueur2.vie = joueur2.vie - joueur1.force ;
//         console.log(`${joueur1.nom} a enlevé ${joueur1.force}pv à ${joueur2.nom}, il lui  de sa ${joueur2.vie}`);
//         //! si la vie du joueur 2 est moin ou égale 0
//         if (joueur2.vie <= 0) {
//             joueur2.etat = false;
//             alert(`${joueur1.nom} a gagné la partie avec ${joueur1.vie} restant`);
//         }else{
//             //! sinon , joueur 2 attaque  à son tour
//             joueur1.vie -= joueur2.force;
//             console.log(`${joueur2.nom} a enlevé ${joueur1.force}pv à ${joueur1.nom}, il lui  de sa ${joueur1.vie}`);
//             //! si la vie du joueur 1 est moin ou égale 0
//             if (joueur1.vie <= 0) {
//                 joueur1.etat = false;
//                 alert(`${joueur2.nom} a gagné la partie avec ${joueur2.vie} restant`);
//             }
//         }
//         round++
//     }
// }
// combat(assia, yassmine);

//? combat avec attaque et defense
// class Personnages{
//     constructor(nom, attaque , defense , vie , etat){
//         this.nom =nom;
//         this.attaque =attaque;
//         this.defense =defense;
//         this.vie = vie;
//         this.etat =etat;
//     }
// }
// let assia = new Personnages(`assia`, 200 , 150 ,250 , true);
// let yassmine = new Personnages(`yassmine`, 180 , 120 ,220, true);

// const combat=(joueur1 , joueur2)=>{
//     while (joueur1.etat ==true && joueur2.etat==true) {
//         let askplayer1 =prompt(`${joueur1.nom} voulez vous utilisez votre defense ou attaque`);
//         let askplayer2 =prompt(`${joueur2.nom} voulez vous utilisez votre defense ou attaque`);

//         switch (askplayer1) {
//             case "attaque":
//                 joueur2.vie-=joueur1.attaque;
//                 // joueur2.vie = joueur2.vie - joueur1.attaque
//                 console.log(`${joueur1.nom} attaque de ${joueur1.attaque} le ${joueur2.nom}`);
//                 break;
//             case"defense":
//                     joueur1.vie+=joueur2.defense;
//                     // joueur1.vie=joueur1.vie+ joueur1.defense
//                 break;
//             default:
//                 break;
//         }
//         if (joueur2.vie <= 0) {
//             joueur2.etat =false;
//             console.log(`${joueur1.nom} a gagné ; il lui reste ${joueur1.vie} pv`);
//         }else{
//             switch (askplayer2) {
//                 case  "attaque":
//                     joueur1.vie-=joueur2.attaque;
//                     // joueur1.vie = joueur1.vie - joueur2.attaque
//                     console.log(`${joueur2.nom} attaque de ${joueur2.attaque} le ${joueur1.nom}`);
//                     break;
//                     case"defense":
//                     joueur2.vie+=joueur1.defense;
//                     // joueur2.vie=joueur2.vie+ joueur2.defense
//                 break;
//                 default:
//                     break;
//             }
//         }
//     }
// }
// combat(assia, yassmine)



//^ Créer un objet personne 
class personne {
    constructor(nom,lieu,argent,mainDroite,mainGauche){
        this.nom=nom;
        this.lieu=lieu;
        this.argent=argent;
        this.mainDroite=mainDroite;
        this.mainGauche=mainGauche;
    }
    seDeplacer(endroit){
        this.lieu = endroit.nom;
        for (let index = 0; index < mesLieux.length; index++) {
            let element = mesLieux[index];
            
        }
    }
    payerArticle(article){

    }
    couper(ingredient,outil){

    }
}
//^  Créer un lieu "maison" (un objet)
class lieu{
    constructor(nom,personnes){
        this.nom=nom;
        this.personnes=personnes
    }
}
let maison = new lieu(`maison`,[]);

//^ Créer un outil (couteau) 
class outil{
    constructor(nom,action){
        this.nom=nom;
        this.action=action;
    }
}
let couteau = new outil(`couteau`,`coupé`);
//^ Créer des produits (ingrédients)
class produits{
    constructor(nom,etats,prix){
        this.nom=nom;
        this.etats=etats;
        this.prix=prix;
    }
}
let oeuf = new produits(`oeuf`,`entier`, 20);
let oignon = new Ingredients("oignon" , "entier" , 20);
let fromage = new produits(`fromage`,`coupé`, 50);
let  epice = new produits(` epice`, `moulu`, 10);

let all_ingredients = [oeuf,oignon,fromage,epice];
//^ Créer un lieu "epicerie"
class epicerie extends lieu{
    constructor(nom,personnes,paniers){
        super(nom,personnes);
        this.paniers=paniers;
    }
}
let epicerie = new epicerie(`sup`,[],[]);
let mesLieux = [maison , epicerie];
//^ Créer un poele
let poele={
    // contenu est un tableau des Produits
    contenu:[oeuf],
    cuir(){
        // setTimeout(cuir,4000); //! i have doubts 😦
        setTimeout(()=> {
            this.contenu[0].etat=`cuit`;
            console.log(this.contenu[0].etat);}, 4000)
    }
}
poele.cuir();
//^ Créer un bol
class bol{
    constructor(contenu){
        this.contenu=contenu;
    }
    melanger(nomMelange){
        
    }
}
//* DEBUT DE L'OMELETTE


