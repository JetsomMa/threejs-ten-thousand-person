export const PersonShader = {
  uniforms: {
    pointTexture: {
      value: null
    }
  },
  vertexShader:
  /* glsl */
    `
    attribute float size;
    attribute vec4 color;
    attribute vec3 currentPosition;

    varying vec4 vColor;
    varying vec2 vUv;

    void main() {
      vColor = color;
      vUv = uv;
      vec3 vPosition = currentPosition + position * size;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( vPosition, 1.0 );
    }`,
  fragmentShader:
  /* glsl */
    `
    uniform sampler2D pointTexture;

    varying vec4 vColor;
    varying vec2 vUv;

    void main() {
      gl_FragColor = vColor * texture2D( pointTexture, vUv );
    }`
};