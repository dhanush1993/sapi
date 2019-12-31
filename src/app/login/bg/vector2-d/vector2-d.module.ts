export class Vector2D {
  x: number;
  y: number;
  constructor(x: number, y:number){
    this.x = x;
    this.y = y;
  }
  move(speed: number, direction: number = 0){
    this.x = this.x + (speed*Math.cos(direction))
    this.y = this.y + (speed*Math.sin(direction))
  }
  distance(position: Vector2D){
    return Math.sqrt(Math.pow(this.x-position.x,2) + Math.pow(this.y-position.y,2))
  }
  
 }
