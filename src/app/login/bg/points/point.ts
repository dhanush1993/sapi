import { Vector2D } from '../vector2-d/vector2-d.module'

export class Point {
  
  direction: number
  speed: number
  position: Vector2D
  seed: number
  constructor(position: Vector2D, speed: number, direction: number){
    this.direction = direction
    this.speed = speed
    this.position = position
    this.seed = Math.random()
  }
  accelerate(acceleration: number, direction: number){
    this.speed = this.speed + acceleration
    this.move()
  }

  move(){
    this.position.move(this.speed, this.direction);
  }

  changeDirection(direction: number){
    this.direction = direction
  }

  changeDirectionDelta(delta: number){
    this.direction = this.direction + delta
  }

  distance(point: Point){
    return this.position.distance(point.position)
  }

  outside(x: number, y: number, width: any, height: any) {
    if (this.position.x >= x+width ||
    this.position.x <= x ||
    this.position.y <= y ||
    this.position.y >= y+height)
      return true
    return false
  }
 }
