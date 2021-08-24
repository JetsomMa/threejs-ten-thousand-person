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
      attribute vec4 complementaryColor;
      
      varying vec4 vColor;

      void main() {
        vColor = complementaryColor;
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
        gl_PointSize = size * ( 300.0 / -mvPosition.z );
        gl_Position = projectionMatrix * mvPosition;
      }`,
  fragmentShader:
    /* glsl */
    `
      uniform sampler2D pointTexture;
			varying vec4 vColor;

			void main() {
				gl_FragColor = vColor * texture2D( pointTexture, gl_PointCoord );
			}`
};