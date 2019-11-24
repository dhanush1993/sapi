import { Image } from '../image/image'

export class Category {
  /*
A link to the Web API endpoint returning full details of the category.
*/
private _href:string
/*
The category icon, in various sizes.
*/
private _icons:Image[]
/*
The Spotify category ID of the category.
*/
private _id:string
/*
The name of the category.
*/
private _name:string
public get href():string{
  return this._href
}
public set href(href:string){
  this._href=href
}
public get icons():Image[]{
  return this._icons
}
public set icons(icons:Image[]){
  this._icons=icons
}
public get id():string{
  return this._id
}
public set id(id:string){
  this._id=id
}
public get name():string{
  return this._name
}
public set name(name:string){
  this._name=name
}
 }
