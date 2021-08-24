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
  // vertexShader:
  //   /* glsl */
  //   `
  //   attribute vec3 currentPosition;
  //   attribute float size;
  //   attribute vec4 complementaryColor;

  //   varying vec4 vColor;
  //   varying vec2 vUv;

  //   void main() {
  //     vColor = complementaryColor;
  //     vUv = uv;
  //     vec3 vPosition = position + currentPosition;
  //     gl_Position = projectionMatrix * modelViewMatrix * vec4( currentPosition, 1.0 );
  //   }`,
  // fragmentShader:
  //   /* glsl */
  //   `
  //   uniform sampler2D pointTexture;

  //   varying vec4 vColor;
  //   varying vec2 vUv;

  //   void main() {
  //     gl_FragColor = vColor * texture2D( pointTexture, vUv );
  //   }`
};