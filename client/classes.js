class Sprite {
    constructor({
        position,
        velocity,
        image,
        frames = 
        {
            max: 1
        }})

    {
        this.position = position;
        this.velocity = velocity;
        this.image = image;
        this.frames = 
        {
            ...frames,
            val: 0,
            elapsed: 0
        };
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max;
            this.height = this.image.height
        };
        this.moving = false;
    }
    
    draw() {
        ctx.drawImage(
            this.image,
            this.frames.val * this.width,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height
            );

        if (!this.moving) return;
        
        if (this.frames.max > 1) this.frames.elapsed ++

        if (this.frames.elapsed % 5 === 0) {
            if ((this.frames.val + 1) < this.frames.max) this.frames.val ++
            else this.frames.val = 0;  
        }
    }
};

class Bound {
    static width = 48;
    static height = 48;
    constructor(
        {
            position, 
            colour
        }
    )

    {
        this.position = position;
        this.width = 48;
        this.height = 48;
        this.colour = colour;
    };

    draw() {
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
};