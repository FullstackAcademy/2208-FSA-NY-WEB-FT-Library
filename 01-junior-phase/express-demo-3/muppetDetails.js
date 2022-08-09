
const muppets = [
    {
        name:"Kermit",
        id:1,
        animal:"frog"
    },
    {
        name:"Fozzie",
        id:2,
        animal:"bear"
    },
    {
        name:"Gonzo",
        id:3,
        animal:"alien"
    },
    {
        name:"Ms Piggy",
        id:4,
        animal:"pig"
    },
];

function getMuppet(id){
    return muppets[id-1]
}

module.exports = getMuppet;
