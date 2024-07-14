(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();class a{static get white(){return 4294967295}static get black(){return 4278190080}static get red(){return 4278190335}static get blue(){return 4294901760}static get green(){return 4278255360}static get yellow(){return 4278255615}}class h{constructor(){this.delta=0,this.lastStepTime=0}start(){this.delta=0,this.lastStepTime=Date.now()}step(){const e=Date.now();this.delta=e-this.lastStepTime,this.lastStepTime=e}deltaSeconds(){return this.delta/1e3}}class l{static create(e){this.customRenderer=e}get tex(){return this.customRenderer.texture}get width(){return this.customRenderer.width}get height(){return this.customRenderer.height}draw(){this.customRenderer.draw()}clear(e){this.clear(e)}}class u{constructor(e,t){this.renderer=l.create(e),this.playerInput=t,this.scene=null,this.timer=new h}loadScene(e){this.timer.start(),this.scene=e,this.scene.setPlayerInput(this.playerInput)}tick(){this.scene&&(this.renderer.clear(),this.timer.step(),this.scene.tick(this.timer.deltaSeconds()),this.renderer.draw())}}function d(n,e,t){return new Float32Array([n,e,t])}function p(){return d(0,0,0)}class m{constructor(){this.player=null,this.position=p()}setPlayer(e){this.player=e}onMove(e,t){this.player&&(vector3SetXY(this.position,e,t),this.player.moveTo(this.position))}onActionDown(e,t){console.log("down",e,t)}onActionUp(e,t){console.log("up",e,t)}}class g{constructor(e){const t=new ArrayBuffer(e);this.buf8=new Uint8ClampedArray(t),this.texture=new Uint32Array(t)}clear(e){this.texture.fill(e)}}class f{constructor(e){this.width=e.width,this.height=e.height,this.context2D=e.getContext("2d"),this.imageData=this.context2D.createImageData(this.width,this.height)}draw(e){this.imageData.data.set(e),this.context2D.putImageData(this.imageData,0,0)}imageSize(){return this.imageData.data.length}}class w{constructor(e){this.canvasRender=new f(e),this.renderTex=new g(this.canvasRender.imageSize())}get tex(){return this.renderTex.texture}get width(){return this.canvasRender.width}get height(){return this.canvasRender.height}draw(){this.canvasRender.draw(this.renderTex.buf8)}clear(e){this.renderTex.clear(e)}}class F{constructor(e){this.canvas=e,this.screenInput=null,this.rect=null}update(){this.rect=this.canvas.getBoundingClientRect()}register(e){this.screenInput=e,this.update(),this.canvas.onmousemove=t=>{this.screenInput.onMove(t.clientX-this.rect.left,t.clientY-this.rect.top)},this.canvas.onmouseup=t=>{this.screenInput.onActionUp(t.clientX-this.rect.left,t.clientY-this.rect.top)},this.canvas.onmousedown=t=>{this.screenInput.onActionDown(t.clientX-this.rect.left,t.clientY-this.rect.top)},this.canvas.oncontextmenu=function(t){t.preventDefault()}}}class y{constructor(e,t,c=60){const r=Math.ceil(1/c*1e3),s=new w(t),i=new F(t),o=new m;i.register(o),e.onresize=()=>{i.update()},this.game=new u(s,o),s.clear(a.blue),setInterval(()=>s.draw(),r)}}const v=document.getElementById("canvas");new y(window,v);
