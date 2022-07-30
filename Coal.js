function vec2(x,y){
    if (x.type=='vec2'){
        return {
            x:x.x,
            y:y.y,
            type:'vec2'
        };
    }
    if (arguments.length==1){
        return {
            x:x,
            y:x,
            type:'vec2'
        };
    }
    return {
        x:x,
        y:y,
        type:'vec2'
    };
}
function vec3(x,y,z){
    if (x.type=='vec2'){
        return {
            x:x.x,
            y:x.y,
            z:y,
            type:'vec3'
        };
    }
    if (y.type=='vec2'){
        return {
            x:x,
            y:y.x,
            z:y.y,
            type:'vec3'
        };
    }
    if (x.type=='vec3'){
        return {
            x:x.x,
            y:x.y,
            z:x.z,
            type:'vec3'
        };
    }
    if (arguments.length==1){
        return {
            x:x,
            y:x,
            z:x,
            type:'vec3'
        };
    }
    return {
        x:x,
        y:y,
        z:z,
        type:'vec3'
    };
}
function vec4(x,y,z,w){
    if (x.type=='vec3'){
        return {
            x:x.x,
            y:x.y,
            z:x.z,
            w:w,
            type:'vec4'
        };
    }
    if (x.type=='vec2'){
        if (y.type=='vec2'){
            return {
                x:x.x,
                y:x.y,
                z:y.x,
                w:y.y,
                type:'vec4'
            };
        }
        return {
            x:x.x,
            y:x.y,
            z:z,
            w:w,
            type:'vec4'
        };
    }
    if (y.type=='vec3'){
        return {
            x:x,
            y:x.x,
            z:x.y,
            w:x.z,
            type:'vec4'
        };
    }
    if (arguments.length==1){
        return {
            x:x,
            y:x,
            z:x,
            w:x,
            type:'vec4'
        };
    }
    return {
        x:x,
        y:y,
        z:z,
        w:w,
        type:'vec4'
    };
}

function mat2(a,b,c,d){
    if (arguments.length==1){
        return [a,a,a,a];
    }
    return [a,b,c,d];
}
function mat3(a,b,c,d,e,f,g,h,i){
    if (arguments.length==1){
        return [a,a,a,a,a,a,a,a,a];
    }
    return [a,b,c,d,e,f,g,h,i];
}
function mat4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
    if (arguments.length==1){
        return [a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a];
    }
    return [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p];
}

function type(a){
    if (a.type){
        return a.type;
    }else{
        if (a.length==4){
            return 'mat2';
        }
        if (a.length==9){
            return 'mat3';
        }
        if (a.length==16){
            return 'mat4';
        }
    }
    return typeof a||null;
}
function asString(a){
    switch(type(a)){
        case 'vec2':
            return 'vec2: ['+a.x+','+a.y+']';
        break;
        case 'vec3':
            return 'vec3: ['+a.x+','+a.y+','+a.z+']';
        break;
        case 'vec4':
            return 'vec4: ['+a.x+','+a.y+','+a.z+','+a.w+']';
        break;
        
        case 'mat2':
            return 'mat2:\n'+[a[0],a[1]]+'\n'+[a[2],a[3]];
        break;
        case 'mat3':
            return 'mat3:\n'+[a[0],a[1],a[2]]+'\n'+[a[3],a[4],a[5]]+'\n'+[a[6],a[7],a[8]];
        break;
        case 'mat4':
            return 'mat4:\n'+[a[0],a[1],a[2],a[3]]+'\n'+[a[4],a[5],a[6],a[7]]+'\n'+[a[8],a[9],a[10],a[11]]+'\n'+[a[12],a[13],a[14],a[15]];
        break;
    }
}

function add(a,b){
    let atype = type(a);
    let btype = type(b);
    if (a.type!=b.type){
        return;
    }
    switch(atype){
        case 'vec2':
            return {
                x:a.x+b.x,
                y:a.y+b.y,
                type:'vec2'
            };
        break;
        case 'vec3':
            return {
                x:a.x+b.x,
                y:a.y+b.y,
                z:a.z+b.z,
                type:'vec3'
            };
        break;
        case 'vec4':
            return {
                x:a.x+b.x,
                y:a.y+b.y,
                z:a.z+b.z,
                w:a.w+b.w,
                type:'vec4'
            };
        break;
        
        case 'mat2':
            return [
                a[0]+b[0],a[1]+b[1],
                a[2]+b[2],a[3]+b[3]
            ];
        break;
        case 'mat3':
            return [
                a[0]+b[0],a[1]+b[1],a[2]+b[2],
                a[3]+b[3],a[4]+b[4],a[5]+b[5],
                a[6]+b[6],a[7]+b[7],a[8]+b[8]
            ];
        break;
        case 'mat4':
            return [
                a[0]+b[0],a[1]+b[1],a[2]+b[2],a[3]+b[3],
                a[4]+b[4],a[5]+b[5],a[6]+b[6],a[7]+b[7],
                a[8]+b[8],a[9]+b[9],a[10]+b[10],a[11]+b[11],
                a[12]+b[12],a[13]+b[13],a[14]+b[14],a[15]+b[15]
            ];
        break;
    }
}
function subtract(a,b){
    let atype = type(a);
    let btype = type(b);
    if (a.type!=b.type){
        return;
    }
    switch(atype){
        case 'vec2':
            return {
                x:a.x-b.x,
                y:a.y-b.y,
                type:'vec2'
            };
        break;
        case 'vec3':
            return {
                x:a.x-b.x,
                y:a.y-b.y,
                z:a.z-b.z,
                type:'vec3'
            };
        break;
        case 'vec4':
            return {
                x:a.x-b.x,
                y:a.y-b.y,
                z:a.z-b.z,
                w:a.w-b.w,
                type:'vec4'
            };
        break;
        
        case 'mat2':
            return [
                a[0]-b[0],a[1]-b[1],
                a[2]-b[2],a[3]-b[3]
            ];
        break;
        case 'mat3':
            return [
                a[0]-b[0],a[1]-b[1],a[2]-b[2],
                a[3]-b[3],a[4]-b[4],a[5]-b[5],
                a[6]-b[6],a[7]-b[7],a[8]-b[8]
            ];
        break;
        case 'mat4':
            return [
                a[0]-b[0],a[1]-b[1],a[2]-b[2],a[3]-b[3],
                a[4]-b[4],a[5]-b[5],a[6]-b[6],a[7]-b[7],
                a[8]-b[8],a[9]-b[9],a[10]-b[10],a[11]-b[11],
                a[12]-b[12],a[13]-b[13],a[14]-b[14],a[15]-b[15]
            ];
        break;
    }
}
function multiply(a,b){
    let atype = type(a);
    let btype = type(b);
    switch(atype){
        case 'vec2':
            if (btype=='vec2'){
                return {
                    x:a.x*b.x,
                    y:a.y*b.y,
                    type:'vec2'
                };
            }else if (btype=='mat2'){
                return {
                    x:a.x*b[0]+a.y*b[1],
                    y:a.x*b[2]+a.y*b[3],
                    type:'vec2'
                };
            }
        break;
        case 'vec3':
            if (btype=='vec3'){
                return {
                    x:a.x*b.x,
                    y:a.y*b.y,
                    z:a.z*b.z,
                    type:'vec3'
                };
            }else if (btype=='mat3'){
                return {
                    x:a.x*b[0]+a.y*b[1]+a.z*b[2],
                    y:a.x*b[3]+a.y*b[4]+a.z*b[5],
                    z:a.x*b[6]+a.y*b[7]+a.z*b[8],
                    type:'vec3'
                };
            }
        break;
        case 'vec4':
            if (btype=='vec4'){
                return {
                    x:a.x*b.x,
                    y:a.y*b.y,
                    z:a.z*b.z,
                    w:a.w*b.w,
                    type:'vec4'
                };
            }else if (btype=='mat4'){
                return {
                    x:a.x*b[0]+a.y*b[1]+a.z*b[2]+a.w*b[3],
                    y:a.x*b[4]+a.y*b[5]+a.z*b[6]+a.w*b[7],
                    z:a.x*b[8]+a.y*b[9]+a.z*b[10]+a.w*b[11],
                    w:a.x*b[12]+a.y*b[13]+a.z*b[14]+a.w*b[15],
                    type:'vec4'
                };
            }
        break;
        
        case 'mat2':
            if (btype=='mat2'){
                return [
                    a[0]*b[0]+a[1]*b[2],a[0]*b[1]+a[1]*b[3],
                    a[2]*b[0]+a[3]*b[2],a[2]*b[1]+a[3]*b[3]
                ];
            }
            else if (btype='vec2'){
                return {
                    x:a.x*b[0]+a.y*b[1],
                    y:a.x*b[2]+a.y*b[3],
                    type:'vec2'
                };
            }
        break;
        case 'mat3':
            if (btype=='mat3'){
                return [
a[0]*b[0]+a[1]*b[3]+a[2]*b[6],a[0]*b[1]+a[1]*b[4]+a[2]*b[7],a[0]*b[2]+a[1]*b[5]+a[2]*b[8],
a[3]*b[0]+a[4]*b[3]+a[5]*b[6],a[3]*b[1]+a[4]*b[4]+a[5]*b[7],a[3]*b[2]+a[4]*b[5]+a[5]*b[8],
a[6]*b[0]+a[7]*b[3]+a[8]*b[6],a[6]*b[1]+a[7]*b[4]+a[8]*b[7],a[6]*b[2]+a[7]*b[5]+a[8]*b[8],
                ];
            }
            else if (btype=='vec3'){
                return {
                    x:a.x*b[0]+a.y*b[1]+a.z*b[2],
                    y:a.x*b[3]+a.y*b[4]+a.z*b[5],
                    z:a.x*b[6]+a.y*b[7]+a.z*b[8],
                    type:'vec3'
                };
            }
        break;
        case 'mat4':
            if (btype=='mat4'){
                return [
a[0]*b[0]+a[1]*b[4]+a[2]*b[8]+a[3]*b[12],a[0]*b[1]+a[1]*b[5]+a[2]*b[9]+a[3]*b[13],a[0]*b[2]+a[1]*b[6]+a[2]*b[10]+a[3]*b[14],a[0]*b[3]+a[1]*b[7]+a[2]*b[11]+a[3]*b[15],
a[4]*b[0]+a[5]*b[4]+a[6]*b[8]+a[7]*b[12],a[4]*b[1]+a[5]*b[5]+a[6]*b[9]+a[7]*b[13],a[4]*b[2]+a[5]*b[6]+a[6]*b[10]+a[7]*b[14],a[4]*b[3]+a[5]*b[7]+a[6]*b[11]+a[7]*b[15],
a[8]*b[0]+a[9]*b[4]+a[10]*b[8]+a[11]*b[12],a[8]*b[1]+a[9]*b[5]+a[10]*b[9]+a[11]*b[13],a[8]*b[2]+a[9]*b[6]+a[10]*b[10]+a[11]*b[14],a[8]*b[3]+a[9]*b[7]+a[10]*b[11]+a[11]*b[15],
a[12]*b[0]+a[13]*b[4]+a[14]*b[8]+a[15]*b[12],a[12]*b[1]+a[13]*b[5]+a[14]*b[9]+a[15]*b[13],a[12]*b[2]+a[13]*b[6]+a[14]*b[10]+a[15]*b[14],a[12]*b[3]+a[13]*b[7]+a[14]*b[11]+a[15]*b[15]
                ];
            }
            else if (btype=='vec4'){
                return {
                    x:a.x*b[0]+a.y*b[1]+a.z*b[2]+a.w*b[3],
                    y:a.x*b[4]+a.y*b[5]+a.z*b[6]+a.w*b[7],
                    z:a.x*b[8]+a.y*b[9]+a.z*b[10]+a.w*b[11],
                    w:a.x*b[12]+a.y*b[13]+a.z*b[14]+a.w*b[15],
                    type:'vec4'
                };
            }
        break;
    }
}

var Coal;
(function(){
	function Rotation(rotation){
		const cx = Math.cos(rotation.x);
		const cy = Math.cos(rotation.y);
		const cz = Math.cos(rotation.z);
		
		const sx = Math.sin(rotation.x);
		const sy = Math.sin(rotation.y);
		const sz = Math.sin(rotation.z);
		
		let rotationX = [
			1,  0,   0,   0,
			0,  cx, -sx,  0,
			0,  sx,  cx,  0,
			0,  0,   0,   1
		];
		let rotationY = [
			cy,  0,  sy,  0,
			0,   1,  0,   0,
			-sy, 0,  cy,  0,
			0,   0,  0,   1
		];
		let rotationZ = [
			cz,  -sz, 0,  0,
			sz,  cz,  0,  0,
			0,   0,   1,  0,
			0,   0,   0,  1
		];
		return multiply(multiply(rotationZ,rotationY),rotationX);
	}
	function Transform(position,rotation){
		const rotationM = Rotation(rotation);
		const translationM = [
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			position.x,position.y,position.z,1
		];
		return multiply(translationM,rotationM);
	}
	function TransformR(position,rotation){
		const rotationM = Rotation(rotation);
		const translationM = [
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			position.x,position.y,position.z,1
		];
		return multiply(rotationM,translationM);
	}
	function ProjectionMatrix(fov,aspect,zMin,zMax){
		let ang = Math.tan((fov*0.5)*Math.PI/180);
    return mat4(
        0.5/ang,0,0,0,
        0,0.5*aspect/ang,0,0,
        0,0,-(zMax+zMin)/(zMax-zMin),-1,
        0,0,(-2*zMax*zMin)/(zMax-zMin),0
    );
	}

	let curFill = [0,0,0,0,0,0,0,0,0];
	Coal.Fill = function(r0,g0,b0,r1,g1,b1,r2,g2,b2){
		r0=r0||0;
		if (arguments.length==1){
			curFill = [r0,r0,r0,r0,r0,r0,r0,r0,r0];
		}else
		if (arguments.length==3){
			curFill = [r0,g0,b0,r0,g0,b0,r0,g0,b0];
		}else
		if (arguments.length==9){
			curFill = [r0,g0,b0,r1,g1,b1,r2,g2,b2];
		}
	}
	
	const Triangle = (function(){
		function Triangle(a,b,c){
			this.Vertices = [a.x,a.y,a.z,b.x,b.y,b.z,c.x,c.y,c.z];
			this.Rotation = vec3(0,0,0);
			this.Position = vec3(0,0,0);
			
			this.Fill = curFill;
			this.Wireframe = false;
			this.Type = 'Triangle';
			this.Cull = false;
			
			this.ModelMatrix = Transform(this.Position,this.Rotation);
		}
		Triangle.prototype = {
			Update:function(){
				this.ModelMatrix = Transform(this.Position,this.Rotation);
			}
		};
		return Triangle;
	})();
	Coal.Triangle = Triangle;

	const Mesh = (function(){
		function Mesh(triangles){
			this.Triangles = arguments;
			this.Rotation = vec3(0,0,0);
			this.Position = vec3(0,0,0);

			this.Fill = curFill;
			this.Wireframe = false;
			this.Type = 'Mesh';
			this.Cull = true;

			this.ModelMatrix = TransformR(this.Position,this.Rotation);
		}
		Mesh.prototype = {
			Update:function(){
				this.ModelMatrix = TransformR(this.Position,this.Rotation);
			}
		};
		return Mesh;
	})();
	Coal.Mesh = Mesh;

	const Geometry = {
		Triangle:function(width,height,centered){
			if (centered){
				let w = width*0.5;
				let h = height*0.5;
				return new Coal.Triangle(vec3(-w,-h,0),vec3(w,-h,0),vec3(-w,h,0));
			}
			else{
				return new Coal.Triangle(vec3(0,0,0),vec3(width,0,0),vec3(0,height,0));
			}
		},
		Face:function(width,height,centered){
			if (centered){
				let w = width*0.5;
				let h = height*0.5;
				
				let a = vec3(-w,-h,0);
				let b = vec3(w,-h,0);
				let c = vec3(w,h,0);
				let d = vec3(-w,h,0);

				let t0 = new Coal.Triangle(a,b,c);
				let t1 = new Coal.Triangle(c,d,a);

				let mesh = new Coal.Mesh(t0,t1);
				mesh.Cull = false;
				return mesh;
			}
			else{
				let a = vec3(0,0,0);
				let b = vec3(width,0,0);
				let c = vec3(width,height,0);
				let d = vec3(0,height,0);

				let t0 = new Coal.Triangle(a,b,c);
				let t1 = new Coal.Triangle(c,d,a);
				let mesh = new Coal.Mesh(t0,t1);
				mesh.Cull = false;
				
				return mesh;
			}
		},
		Cube:function(width,height,depth,centered){
			if (centered){
				let W = width*0.5;
				let H = height*0.5;
				let D = depth*0.5;

				let a = vec3(-W,-H,D);
				let b = vec3(W,-H,D);
				let c = vec3(W,H,D);
				let d = vec3(-W,H,D);
				let e = vec3(-W,-H,-D);
				let f = vec3(W,-H,-D);
				let g = vec3(W,H,-D);
				let h = vec3(-W,H,-D);
				
				let t0 = new Coal.Triangle(a,b,c);
				let t1 = new Coal.Triangle(a,c,d);
				let t2 = new Coal.Triangle(b,f,c);
				let t3 = new Coal.Triangle(f,g,c);
				let t4 = new Coal.Triangle(g,f,e);
				let t5 = new Coal.Triangle(h,g,e);
				let t6 = new Coal.Triangle(a,h,e);
				let t7 = new Coal.Triangle(h,a,d);
				let t8 = new Coal.Triangle(e,f,a);
				let t9 = new Coal.Triangle(f,b,a);
				let t10 = new Coal.Triangle(g,h,c);
				let t11 = new Coal.Triangle(h,d,c);
				
				let mesh = new Coal.Mesh(t0,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11);
				mesh.Cull = true;
				
				return mesh;
			}
			else{
				let a = vec3(0,0,depth);
				let b = vec3(width,0,depth);
				let c = vec3(width,height,depth);
				let d = vec3(0,height,depth);
				let e = vec3(0,0,0);
				let f = vec3(width,0,0);
				let g = vec3(width,height,0);
				let h = vec3(0,height,0);
				
				let t0 = new Coal.Triangle(a,b,c);
				let t1 = new Coal.Triangle(a,c,d);
				let t2 = new Coal.Triangle(b,f,c);
				let t3 = new Coal.Triangle(f,g,c);
				let t4 = new Coal.Triangle(g,f,e);
				let t5 = new Coal.Triangle(h,g,e);
				let t6 = new Coal.Triangle(a,h,e);
				let t7 = new Coal.Triangle(h,a,d);
				let t8 = new Coal.Triangle(e,f,a);
				let t9 = new Coal.Triangle(f,b,a);
				let t10 = new Coal.Triangle(g,h,c);
				let t11 = new Coal.Triangle(h,d,c);
				
				let mesh = new Coal.Mesh(t0,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11);
				mesh.Cull = true;
				
				return mesh;
			}
		}
	};
	Coal.Geometry = Geometry;
	
	const Camera = (function(){
		function Camera(fov,near,far,position,rotation){
			this.FieldOfView = fov||90;
			this.AspectRatio = 16/9;
			this.near = near||0.1;
			this.far = far||100;
			this.Position = position||vec3(0,0,0);
			this.Rotation = rotation||vec3(0,0,0);

			this.ViewMatrix = Transform(this.Position,this.Rotation);
			this.ProjectionMatrix = ProjectionMatrix(this.FieldOfView,this.AspectRatio,this.near,this.far);
		}
		Camera.prototype = {
			UpdateProjectionMatrix:function(){
				this.ProjectionMatrix = ProjectionMatrix(this.FieldOfView,this.AspectRatio,this.near,this.far);
			},
			UpdateViewMatrix:function(){
				this.ViewMatrix = Transform(this.Position,this.Rotation);
			}
		};
		return Camera;
	})();
	Coal.Camera = Camera;
	
	const Scene = (function(){
		let gl;
		function Scene(canvas,camera,objects){
			this.Canvas = canvas;
			this.gl = this.Canvas.getContext('webgl');
			gl = this.gl;

			this.Camera = camera;
			this.Objects = objects;

			const VertexShader = (function(){
				const VertexShaderCode = `
					precision mediump float;
					
					attribute vec3 position;
		 			uniform vec3 cameraPosition;
		 
		 			attribute vec3 vColor;
					varying vec3 color;

					uniform mat4 projectionMatrix;
		 			uniform mat4 cameraMatrix;
					uniform mat4 modelMatrix;
	
	 				void main(){
						vec4 Position = vec4(position,1.0);
						gl_Position = projectionMatrix*cameraMatrix*modelMatrix*Position;
						color = vColor;
					}
				`;
				const VertexShader = gl.createShader(gl.VERTEX_SHADER);
				gl.shaderSource(VertexShader,VertexShaderCode);
				gl.compileShader(VertexShader);
				return VertexShader;
			})();
			this.VertexShader = VertexShader;
			const FragmentShader = (function(){
				const FragmentShaderCode = `
					precision mediump float;

					varying vec3 color;
	 				void main(){
						gl_FragColor = vec4(color,1.0);
					}
				`;
				const FragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
				gl.shaderSource(FragmentShader,FragmentShaderCode);
				gl.compileShader(FragmentShader);
				return FragmentShader;
			})(); 
			this.FragmentShader = FragmentShader;
			this.Program = (function(){
				const Program = gl.createProgram();
				gl.attachShader(Program,VertexShader);
				gl.attachShader(Program,FragmentShader);
				gl.linkProgram(Program);
				return Program;
			})();
			gl.useProgram(this.Program);
			
			this.AttribLocations = {
				Position:gl.getAttribLocation(this.Program,'position'),
				Color:gl.getAttribLocation(this.Program,'vColor')
			};
			this.UniformLocations = {
				ProjectionMatrix:gl.getUniformLocation(this.Program,'projectionMatrix'),
				CameraMatrix:gl.getUniformLocation(this.Program,'cameraMatrix'),
				ModelMatrix:gl.getUniformLocation(this.Program,'modelMatrix'),
				CameraPosition:gl.getUniformLocation(this.Program,'cameraPosition')
			};
			
			gl.uniformMatrix4fv(this.UniformLocations.ProjectionMatrix,false,this.Camera.ProjectionMatrix);
			gl.uniformMatrix4fv(this.UniformLocations.CameraMatrix,false,this.Camera.ViewMatrix);

			gl.enable(gl.DEPTH|gl.DEPTH_TEST);
			gl.depthFunc(gl.LESS);
			gl.clearDepth(1.0);

			gl.enable(gl.CULL_FACE);
			gl.cullFace(gl.BACK);
			
			gl.clearColor(0,0,0,1.0);
			gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
			gl.viewport(0,0,canvas.width,canvas.height);
		}
		Scene.prototype = {
			Background:function(r,g,b){
				gl.clearColor(r,g,b,1.0);
				gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
			},
			Resize:function(width,height){
				width=width||window.innerWidth;
				height=height||window.innerHeight;
				if (this.Canvas.width!=width||this.Canvas.height!=height){
					this.Canvas.width = width;
					this.Canvas.height = height;
					gl.viewport(0,0,width,height);
					this.Camera.AspectRatio = width/height;
					this.Camera.UpdateProjectionMatrix();
					gl.uniformMatrix4fv(this.UniformLocations.ProjectionMatrix,false,this.Camera.ProjectionMatrix);
				}
			},
			Update:function(){
				this.Camera.UpdateViewMatrix();
				gl.uniformMatrix4fv(this.UniformLocations.CameraMatrix,false,this.Camera.ViewMatrix);
			},
			RenderObject:function(index){
				let Vertices = [];
				let Colors = [];
				let Indices = [];
				
				const object = this.Objects[index];		
				switch(object.Type){
					case 'Triangle':
						Vertices = Vertices.concat(object.Vertices);
						Colors = Colors.concat(object.Fill);
						Indices = [0,1,2];
					break;
					case 'Mesh':
						let l;
						for (let i=0; i<object.Triangles.length; i++){
							let triangle = object.Triangles[i];
							Vertices = Vertices.concat(triangle.Vertices);
							Colors = Colors.concat(triangle.Fill);
							
							l = Indices.length;
							Indices = Indices.concat([l,l+1,l+2]);
						}
					break;
				}
				object.Update();
				gl.uniformMatrix4fv(this.UniformLocations.ModelMatrix,false,object.ModelMatrix);
				if (object.Cull==false){
					gl.disable(gl.CULL_FACE);
				}
				else{
					gl.enable(gl.CULL_FACE);
				}
				
				const VertexBuffer = gl.createBuffer();
				gl.bindBuffer(gl.ARRAY_BUFFER,VertexBuffer);
				gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(Vertices),gl.STATIC_DRAW);

				const ColorBuffer = gl.createBuffer();
				gl.bindBuffer(gl.ARRAY_BUFFER,ColorBuffer);
				gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(Colors),gl.STATIC_DRAW);

				const IndexBuffer = gl.createBuffer();
				gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,IndexBuffer);
				gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(Indices),gl.STATIC_DRAW);
				
				
				gl.bindBuffer(gl.ARRAY_BUFFER,VertexBuffer);
				gl.vertexAttribPointer(this.AttribLocations.Position,3,gl.FLOAT,false,0,0);
				gl.enableVertexAttribArray(this.AttribLocations.Position);

				gl.bindBuffer(gl.ARRAY_BUFFER,ColorBuffer);
				gl.vertexAttribPointer(this.AttribLocations.Color,3,gl.FLOAT,false,0,0);
				gl.enableVertexAttribArray(this.AttribLocations.Color);

				const Type=object.Wireframe?gl.LINE_LOOP:gl.TRIANGLES;
				gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,IndexBuffer)
				gl.drawElements(Type,Indices.length,gl.UNSIGNED_SHORT,0);
			},
			Render:function(){
				for (let i=0; i<this.Objects.length; i++){
					this.RenderObject(i);
				}
			}
		};
		return Scene;
	})();
	Coal.Scene = Scene;
	
})(Coal||(Coal={}));
