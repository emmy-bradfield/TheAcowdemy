const collisionsArray = [];
const COLLISIONS = [];

const zonesArray = [];

const HOME = [];
const BARN = [];
const LEAVE = [];
const RETURN = [];
const HUT = [];
const COLLECTABLES = [];
const ANIMATE = [];

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
        if (digit === 1) {
            HOME.push(new Bound({
                position: {
                    x: (j * Bound.width) + offset.x,
                    y: (i * Bound.width) + offset.y
                },
                colour: 'rgba(128, 0, 128, 0)'
            }))
        } else if (digit === 2) {
            BARN.push(new Bound({
                position: {
                    x: (j * Bound.width) + offset.x,
                    y: (i * Bound.width) + offset.y
                },
                colour: 'rgba(128, 0, 128, 0)'
            }))
        } else if (digit === 3) {
            LEAVE.push(new Bound({
                position: {
                    x: (j * Bound.width) + offset.x,
                    y: (i * Bound.width) + offset.y
                },
                colour: 'rgba(128, 0, 128, 0)'
            }))
        } else if (digit === 4) {
            RETURN.push(new Bound({
                position: {
                    x: (j * Bound.width) + offset.x,
                    y: (i * Bound.width) + offset.y
                },
                colour: 'rgba(128, 0, 128, 0)'
            }))
        } else if (digit === 5) {
            HUT.push(new Bound({
                position: {
                    x: (j * Bound.width) + offset.x,
                    y: (i * Bound.width) + offset.y
                },
                colour: 'rgba(128, 0, 128, 0)'
            }))
        } else if (digit === 6) {
            COLLECTABLES.push(new Bound({
                position: {
                    x: (j * Bound.width) + offset.x,
                    y: (i * Bound.height) + offset.y
                },
                colour: 'rgba(255, 0, 0, 0)'
            }))
        } else if (digit === 7) {
            ANIMATE.push(new Bound({
                position: {
                    x: (j * Bound.width) + offset.x,
                    y: (i * Bound.height) + offset.y
                },
                colour: 'rgba(128, 0, 128, 0)'
            }))
        }
    })
});