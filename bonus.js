
const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
    // // const queryArr = Object.keys(query);
    // console.log(queryArr);
   return arr.find(hero => {
       console.log(hero);
        for (let key in query) {
            console.log(key)
            if(!(key in hero && hero[key] === query[key])){
                // return true;
                return false;
            } 
        }
        return true;
    })

}
const query = {id: 5, name:'Wonder Woman',squad: 'Justice League'}
console.log(findOne(HEROES,query));

const Database = {
    store: {
      heroes: [
        { id: 1, name: 'Captain America', squad: 'Avengers' },
        { id: 2, name: 'Iron Man', squad: 'Avengers' },
        { id: 3, name: 'Spiderman', squad: 'Avengers' },
        { id: 4, name: 'Superman', squad: 'Justice League' },
        { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
        { id: 6, name: 'Aquaman', squad: 'Justice League' },
        { id: 7, name: 'Hulk', squad: 'Avengers' },
      ]
    },
    findOne: function (query) {
        return this.store.heroes.find(hero => {
            for (let key in query) {
                if(!(key in hero && hero[key] === query[key])){
                    return false;
                }          
            }
            return true;
        })
    }
  };

console.log(Database.findOne(query));