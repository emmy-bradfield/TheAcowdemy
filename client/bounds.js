const collisionsArray = [];
const COLLISIONS = [];

const zonesArray = [];

const COLLECTABLES = [];

for (let i = 0; i < collisionData.length; i+=100) {
    collisionsArray.push(collisionData.slice(i, i +100))
};

for (let i = 0; i < zoneData.length; i+=100) {
    zonesArray.push(zoneData.slice(i, i+100))
};

collisionsArray.forEach((row, i) => {
    row.forEach((digit, j) => {
        if (digit > 0) {
            COLLISIONS.push(new Bound({
                position: {
                    x: (j * Bound.width) + offset.x,
                    y: (i * Bound.height) + offset.y
                },
                colour: 'rgba(255, 0, 0, 0)'
            }))
        } 
    })
});

zonesArray.forEach((row, i) => {
    row.forEach((digit, j) => {
        if (digit === 8) {
            COLLECTABLES.push(new Bound({
                position: {
                    x: (j * Bound.width) + offset.x,
                    y: (i * Bound.height) + offset.y
                },
                colour: 'purple'
            }))
        }
    })
});