const collisionsArray = [];
const COLLISIONS = [];

for (let i = 0; i < collisionData.length; i+=100) {
    collisionsArray.push(collisionData.slice(i, i +100))
}

collisionsArray.forEach((row, i) => {
    row.forEach((digit, j) => {
        if (digit === 1) {
            COLLISIONS.push(new Bound({
                position: {
                    x: (j * Bound.width) + offset.x,
                    y: (i * Bound.height) + offset.y
                },
                colour: 'red'
            }));
        };
    });
});