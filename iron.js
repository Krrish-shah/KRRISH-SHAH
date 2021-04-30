class Iron{
	constructor(x,y,r)
	{
		var options = {
			'restitution':0.8,
			'friction':3,
			'density':30
				}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			rect(pos.x, pos.y, this.width, this.height);
			pop()
	}

}