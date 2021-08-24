export const  PersonShader = {
  uniforms: {
    color: {
      value: "#ffffff"
    },
    pointTexture: {
      value: null
    }
  },
  vertexShader:
    /* glsl */
    `
    attribute float size;
    attribute vec4 complementaryColor;
    attribute vec2 texCoord;

    varying vec4 vColor;
    varying vec2 vTexCoord;
    
    void main() {
      vTexCoord = texCoord;
      vColor = complementaryColor;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
  fragmentShader:
    /* glsl */
    `
    uniform vec3 color;
    uniform sampler2D pointTexture;

    varying vec4 vColor;
    varying vec2 vTexCoord;

    void main() {
      gl_FragColor = vec4( color * vec3(vColor.r, vColor.g, vColor.b), vColor.a );
      gl_FragColor = gl_FragColor * texture2D( pointTexture, vTexCoord );
    }`
};