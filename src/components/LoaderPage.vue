<template>
	<div class="fixed top-0 left-0 w-full h-full bg-[rgba(0,255,255,0.375)]">
	  <div class="mx-auto my-[100px] w-[750px] p-[200px] text-center">
		<div class="relative w-[16em] h-[16em] rounded-full pl">
		  <div class="absolute rounded-full pl__outer-ring"></div>
		  <div class="absolute rounded-full pl__inner-ring"></div>
		  <div class="absolute pl__track-cover"></div>
		  <div class="absolute pl__ball">
			<div class="pl__ball-texture"></div>
			<div class="pl__ball-outer-shadow"></div>
			<div class="pl__ball-inner-shadow"></div>
			<div class="pl__ball-side-shadows"></div>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	name: 'LoaderPage'
  }
  </script>
  
  <style>
  
  .pl {
	font-size: calc(16px + (20 - 16) * (100vw - 320px) / (1280 - 320));
  }
  .pl,
  .pl__ball,
  .pl__ball-inner-shadow,
  .pl__ball-side-shadows,
  .pl__ball-texture,
  .pl__inner-ring,
  .pl__outer-ring,
  .pl__track-cover {
	border-radius: 50%;
  }
  .pl {
	position: relative;
	width: 16em;
	height: 16em;
  }
  .pl__ball,
  .pl__ball-inner-shadow,
  .pl__ball-outer-shadow,
  .pl__ball-side-shadows,
  .pl__ball-texture,
  .pl__ball-texture:before,
  .pl__inner-ring,
  .pl__outer-ring,
  .pl__track-cover {
	position: absolute;
  }
  .pl__ball,
  .pl__ball-inner-shadow,
  .pl__ball-outer-shadow,
  .pl__ball-texture:before,
  .pl__track-cover {
	animation: ball 3s linear infinite;
  }
  .pl__ball {
	top: calc(50% - 1.25em);
	left: calc(50% - 1.25em);
	transform: rotate(0) translateY(-6.5em);
	width: 2.5em;
	height: 2.5em;
  }
  .pl__ball-inner-shadow {
	animation-name: ballInnerShadow;
	box-shadow:
	  0 0.1em 0.2em hsla(0, 0%, 0%, 0.3),
	  0 0 0.2em hsla(0, 0%, 0%, 0.1) inset,
	  0 -1em 0.5em hsla(0, 0%, 0%, 0.15) inset;
	width: 100%;
	height: 100%;
  }
  .pl__ball-outer-shadow {
	animation-name: ballOuterShadow;
	background-image: linear-gradient(hsla(0, 0%, 0%, 0.15), hsla(0, 0%, 0%, 0));
	border-radius: 0 0 50% 50% / 0 0 100% 100%;
	filter: blur(2px);
	top: 50%;
	left: 0;
	width: 100%;
	height: 250%;
	transform: rotate(20deg);
	transform-origin: 50% 0;
	z-index: -2;
  }
  .pl__ball-side-shadows {
	background-color: hsla(0, 0%, 0%, 0.1);
	filter: blur(2px);
	width: 100%;
	height: 100%;
	transform: scale(0.75, 1.1);
	z-index: -1;
  }
  .pl__ball-texture {
	overflow: hidden;
	width: 100%;
	height: 100%;
	transform: translate3d(0,0,0);
  }
  .pl__ball-texture:before {
	animation-name: ballTexture;
	animation-duration: 0.25s;
	background: url(https://assets.codepen.io/416221/snow.jpg) 0 0 / 50% 100%;
	content: "";
	display: block;
	filter: brightness(1.05);
	top: 0;
	right: 0;
	width: 200%;
	height: 100%;
	position: absolute;
  }
  .pl__inner-ring {
	box-shadow:
	  0 -0.25em 0.5em hsla(0, 0%, 100%, 0.4),
	  0 0.5em 0.75em hsla(0, 0%, 100%, 0.4) inset,
	  0 0.5em 0.375em hsla(0, 0%, 0%, 0.15),
	  0 -0.5em 0.75em hsla(0, 0%, 0%, 0.15) inset;
	top: 2.375em;
	left: 2.375em;
	width: calc(100% - 4.75em);
	height: calc(100% - 4.75em);
  }
  .pl__outer-ring {
	box-shadow:
	  0 -0.45em 0.375em hsla(0, 0%, 0%, 0.15),
	  0 0.5em 0.75em hsla(0, 0%, 0%, 0.15) inset,
	  0 0.25em 0.5em hsla(0, 0%, 100%, 0.4),
	  0 -0.5em 0.75em hsla(0, 0%, 100%, 0.4) inset;
	top: 0.75em;
	left: 0.75em;
	width: calc(100% - 1.5em);
	height: calc(100% - 1.5em);
  }
  .pl__track-cover {
	animation-name: trackCover;
	background-image: conic-gradient(hsla(223, 90%, 95%, 1) 210deg, hsla(223, 90%, 95%, 0) 270deg);
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
  }
  
  /* Keyframes */
  @keyframes ball {
	from {
	  transform: rotate(0) translateY(-6.5em);
	}
	50% {
	  transform: rotate(180deg) translateY(-6em);
	}
	to {
	  transform: rotate(360deg) translateY(-6.5em);
	}
  }
  @keyframes ballInnerShadow {
	from {
	  transform: rotate(0);
	}
	to {
	  transform: rotate(-360deg);
	}
  }
  @keyframes ballOuterShadow {
	from {
	  transform: rotate(20deg);
	}
	to {
	  transform: rotate(-340deg);
	}
  }
  @keyframes ballTexture {
	from {
	  transform: translateX(0);
	}
	to {
	  transform: translateX(50%);
	}
  }
  @keyframes trackCover {
	from {
	  transform: rotate(0);
	}
	to {
	  transform: rotate(360deg);
	}
  }
  </style>
  