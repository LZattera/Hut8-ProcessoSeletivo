const users = [{name: "Joao",skills: ["Javascript", "ReactJS", "Redux"]},{name: "Pedro",skills: ["VueJS", "Ruby on Rails", "Elixir"]}];

for(const k in users){
    let pos=1;
    console.log(`Candidato: ${users[k].name}`);
    console.log('Skills: ');
    for(const k2 in users[k].skills){
        console.log(pos+' '+users[k].skills[k2]);
        pos++;
    }
}