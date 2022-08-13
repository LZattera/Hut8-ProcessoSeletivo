const user ={
    name: 'Leticia',
    projects:[
        {name:'Projeto 01', active: true},
        {name: 'Projeto 02', active: false},
        {name: 'Projeto 03', active: true},
        {name: 'Projeto 04', active: false}
    ]
}

console.log(user.name);
let i;
for(i=0; i < user.projects.length; i++){
    if(user.projects[i].active){
        console.log(user.projects[i].name);
    }
}

