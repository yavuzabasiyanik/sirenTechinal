class Person{

    constructor(username){
        this.username = username
        this.friends = [];
        this.movies = [];
    }


    addFriend(person){
        this.friends.push(person)
    }

    addMovie(movieName){
        this.movies.push(movieName)
    }


}


const person1 = new Person('Joe');
const person2 = new Person('Joe2');
const person3 = new Person('Joe3');
const person4 = new Person('Joe4');
const person5 = new Person('Joe5');
const person6 = new Person('Joe6');
const person7 = new Person('Joe7');



person1.addFriend(person2)
person2.addFriend(person1)
person2.addFriend(person3)
person2.addFriend(person4)
person2.addFriend(person5)
person2.addFriend(person6)
person7.addFriend(person2)
person1.addFriend(person7)

person1.addMovie('Simba2')
person1.addMovie('Simba')
person2.addMovie('Simb2a')
person3.addMovie('Sim2ba')
person3.addMovie('Simba')
person4.addMovie('Simba2')
person5.addMovie('Simb3')
person6.addMovie('Sim3ba')
person7.addMovie('Simba1')


const mostPopularMovie = (pers) => {

    const visited = new Set();


    const queue = [pers];

    const popularM = {};

    while(queue.length){
        let node = queue.shift();

        if(visited.has(node.username)) continue;

        visited.add(node.username);

        for(let movie of node.movies){

            if(movie in popularM){
                popularM[movie]++;
            }else{
                popularM[movie] = 1;
            }
        }


        for(let el of node.friends){

            if(visited.has(el.username)) continue

            queue.push(el);
        }
    }


    return Object.keys(popularM)[Object.values(popularM).indexOf(Math.max(...Object.values(popularM)))]

}

const popularMovie = mostPopularMovie(person2)

function test(){

    if(popularMovie ==='Simba2') return 'Everything is working fine'

    return "Something's wrong";
}

console.log(test());
