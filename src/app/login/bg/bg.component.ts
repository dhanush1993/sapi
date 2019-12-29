import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Constants } from './constants/constants.module';
import { Point } from './points/point';
import { Vector2D } from './vector2-d/vector2-d.module';

@Component({
  selector: 'app-bg',
  templateUrl: './bg.component.html',
  styleUrls: ['./bg.component.css']
})
export class BgComponent implements AfterViewInit {

  @ViewChild('drawArea', {static: true})canvas: ElementRef
  context: CanvasRenderingContext2D
  points: Point[]
  lines: any[];
  audioCtx: AudioContext;
  audio: HTMLAudioElement;
  analyser: AnalyserNode;
  dataArray: Uint8Array;
  constructor() {
    this.points = []
   }

  ngAfterViewInit() {
    this.context = this.canvas.nativeElement.getContext('2d')
    this.context.fillStyle = "blue";
    this.context.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    for(var i=0;i<Constants.numOfPoints;i++){
      this.points.push(new Point(new Vector2D(Math.random()*this.canvas.nativeElement.width, Math.random()*this.canvas.nativeElement.height), Constants.minspeed + Math.random()*Constants.maxspeed, Math.random()*2*Math.PI))
    }
    this.audio = new Audio('../../../assets/Mafia.mp3')
    this.audio.load()
    this.audioCtx = new (getWindow().AudioContext || getWindow().webkitAudioContext)();;
    this.analyser = this.audioCtx.createAnalyser();
    var source = this.audioCtx.createMediaElementSource(this.audio);
    source.connect(this.analyser);
    this.analyser.fftSize = 2048;
    this.analyser.connect(this.audioCtx.destination)
    var bufferLength = this.analyser.frequencyBinCount;
    this.dataArray = new Uint8Array(bufferLength);
    this.audio.play()
    this.audio.loop = true
    window.requestAnimationFrame(this.loop.bind(null,this))
  }

  draw(){
    
    this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
    
    this.context.lineTo(this.canvas.nativeElement.width, this.canvas.nativeElement.height/2);
    this.context.stroke();
    this.context.fillStyle = "white"
    this.points.forEach((point:Point)=>{
      this.context.beginPath()
      this.context.arc(point.position.x, point.position.y, Constants.radius, 0, 2 * Math.PI, true)
      this.context.fill()
    })
    this.context.strokeStyle = 'white'
    this.context.lineWidth = 0.1;
    this.lines.forEach(line=>{
      this.context.beginPath()
      this.context.moveTo(line[0].position.x, line[0].position.y);
      this.context.lineTo(line[1].position.x, line[1].position.y);
      this.context.stroke()
    })
  }

  update(){
    let lines = []
    this.analyser.getByteFrequencyData(this.dataArray);
    this.context.lineWidth = 2;
    this.context.strokeStyle = 'white';
    this.context.beginPath();
    var acc = 0
    for(var i = 0; i < this.dataArray.length; i++) {
   
      var v = this.dataArray[i] / 128.0;
      
      acc+=v
    }
    acc = Math.exp(((acc/2048))*7)
    this.points.forEach((point:Point)=>{
      point.speed = acc
      if(point.outside(0,0,this.canvas.nativeElement.width, this.canvas.nativeElement.height)){
        point.changeDirectionDelta((0.5*Math.PI)+Math.random()*0.1*Math.PI)
      }
      if(point.seed > Math.random()){
        point.changeDirectionDelta(Math.random()*1*Math.PI/180)
        point.seed = Math.random()
      }
      point.move()
      for(let i=0;i<this.points.length;i++){
        if(point != this.points[i]){
          if(point.distance(this.points[i])<Constants.mindist){
            const points = [point,this.points[i]]
            lines.push(points)
          }
        }
      }
    })
    
    this.lines = lines;
    lines = null
  }

  loop(self: BgComponent){
    self.update()
    self.draw()
    window.requestAnimationFrame(self.loop.bind(null,self))
  }



}

function getWindow(): any{
  return window
}
