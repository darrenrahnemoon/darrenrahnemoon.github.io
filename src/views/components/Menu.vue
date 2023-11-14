<script setup lang="ts">
import { gsap, Power0 }   from 'gsap';
import { onMounted, ref } from 'vue';
import SpeedDial          from 'primevue/speeddial';
import { MenuItem }       from 'primevue/menuitem';
import { useRouter }      from 'vue-router';

const router = useRouter();
const logo = ref(null);

const speedDialItems: MenuItem[] = [
	{
		label   : 'Home',
		icon    : 'pi pi-home',
		command : () => router.push('/'),
	},
	{
		label   : 'Journey',
		icon    : 'pi pi-forward',
		command : () => router.push('/journey'),
	},
	{
		label   : 'Projects',
		icon    : 'pi pi-wrench',
		command : () => router.push('/projects'),
	},
	{
		label   : 'Gallery',
		icon    : 'pi pi-images',
		command : () => router.push('/gallery'),
	},
	{
		label   : 'Rants',
		icon    : 'pi pi-comments',
		command : () => router.push('/rants'),
	},
];

onMounted(() => {
	for (const path of logo.value.children) {
		path.style.strokeDasharray = path.getTotalLength();
		path.style.strokeDashoffset = path.getTotalLength();
	}
	gsap.timeline({ delay : 0, ease : Power0.easeInOut })
		.from('.menu', { x : -100 }, 0)
		.to('.menu svg path', { strokeDashoffset : 0, duration : 3 }, 1)
		.fromTo('.menu-item.left', { opacity : 0, x : -100 }, { opacity : 1, x : 0, duration : 0.5 }, 1)
		.fromTo('.menu-item.right', { opacity : 0, x : 100 }, { opacity : 1, x : 0, duration : 0.5 }, 1)
		.fromTo('.menu-line', { width : 0 }, { width : '100%' }, 2);
});

</script>

<template>
	<div class="menu-mobile block sm:hidden">
		<SpeedDial
			mask
			:model="speedDialItems"
			class="right-0 bottom-0"
			direction="up"
			button-class="p-button-sm"
			:tooltip-options="{ position : 'left', color : 'var(--color-primary)' }"
		/>
	</div>
	<div class="menu hidden sm:flex">
		<div class="menu-line" />
		<div class="menu-items">
			<router-link class="menu-item left" to="/journey">
				My Journey
			</router-link>
			<router-link class="menu-item left" to="/projects">
				Projects
			</router-link>
			<router-link class="menu-signature" to="/">
				<svg
					ref="logo"
					height="100%"
					stroke-miterlimit="10"
					style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"
					version="1.1"
					viewBox="0 0 300 160"
					width="100%"
					xml:space="preserve"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
				>
					<path
						d="M151.503 40.2711C153.603 46.1372 152.245 52.7478 151.778 58.9609C151.363 64.4764 150.76 69.9891 149.793 75.4349C148.771 81.1882 144.928 94.4506 143.443 100.711C142.877 103.097 142.448 105.513 141.991 107.921C141.678 109.569 141.531 111.262 141.008 112.856C139.506 117.43 139.688 111.933 139.845 109.606C140.066 106.333 140.438 103.071 140.83 99.8136C141.315 95.7904 141.725 91.7506 142.476 87.7685C145.936 69.4329 151.472 46.1866 166.503 33.5275C168.925 31.4873 172.342 28.7746 175.294 29.9227C184.397 33.4632 186.085 42.073 185.536 51.3683C184.599 67.2558 177.571 84.0351 165.553 94.6304C162.908 96.9624 150.374 105.529 147.267 99.6176C143.611 92.6589 156.227 81.9999 162.031 88.3758C167.373 94.2432 166.047 100.701 168.099 107.375C168.32 108.095 169.154 111.272 170.771 111.001C174.904 110.308 178.185 100.935 179.161 97.8248C179.569 96.523 180.435 93.7727 179.071 93.7328C173.353 93.5655 166.94 112.119 175.83 107.724C179.521 105.899 179.503 100.413 182.157 98.7688C182.867 98.3284 181.982 100.432 181.856 101.259C181.829 101.441 179.784 109.749 181.845 109.42C185.279 108.872 188.953 99.3427 189.904 97.3703C191.194 94.6953 192.359 91.9618 193.602 89.2649C198.279 79.1185 202.902 69.1449 208.283 59.3564C209.558 57.0368 213.365 50.8511 214.632 50.2102C216.585 49.2231 212.315 53.9229 211.235 55.8253C209.354 59.1384 207.497 62.4669 205.751 65.8533C199.531 77.9191 194.818 90.5167 189.426 102.949C188.168 105.849 187.532 107.11 186.105 109.545C185.625 110.364 184.189 112.782 184.464 111.873C185.743 107.658 193.314 95.146 197.354 93.6039C198.71 93.0865 197.978 96.493 197.804 97.9336C197.207 102.888 194.31 107.582 193.751 112.215C193.593 113.531 195.798 110.497 196.611 109.45C197.546 108.246 198.352 106.947 199.203 105.681C200.229 104.156 202.932 99.2783 205.153 98.2361C205.544 98.0528 205.602 99.0234 205.589 99.4547C205.551 100.74 202.582 108.226 205.654 108.596C208.961 108.995 211.619 101.263 212.386 99.4963C213.06 97.9443 215.297 93.9175 213.752 94.6081C210.167 96.2112 202.078 107.713 208.695 109.157C212.868 110.068 216.008 102.481 217.581 99.928C218.247 98.8481 220.218 95.677 219.889 96.9023C219.409 98.6933 214.226 106.918 215.439 108.027C216.368 108.874 220.602 102.523 220.798 102.259C222.412 100.088 223.779 97.7333 225.484 95.633C226.643 94.2049 227.798 92.7214 229.271 91.6196C232.278 89.3705 224.076 104.802 224.33 105.211C224.603 105.652 227.695 102.71 228.193 102.178C232.345 97.7453 235.942 91.892 240.935 88.3609C241.939 87.6515 240.691 90.8694 240.114 91.9544C239.194 93.6844 238.075 95.3039 237.169 97.0411C236.086 99.1165 232.014 107.475 237.554 108.359C240.965 108.904 247.233 99.7896 248.577 100.748C250.855 102.372 242.767 111.616 242.419 109.917C241.286 104.38 251.581 96.9837 255.3 94.9504C255.867 94.6403 256.916 94.4299 257.239 94.9896C258.933 97.9251 246.643 110.06 245.454 108.923C243.563 107.112 248.047 104.289 249.925 102.465C251.435 100.997 261.182 91.838 263.484 94.7705C265.767 97.6797 258.444 105.661 257.125 107.219C256.152 108.37 255.027 111.246 253.837 110.321C251.812 108.749 264.701 94.5906 266.579 96.5038C268.473 98.4333 262.899 103.709 262.069 104.9C261.461 105.774 259.607 108.342 260.382 107.612C263.301 104.859 265.578 101.483 268.455 98.6733C269.758 97.4008 271.169 96.2416 272.58 95.0891C277.004 91.4743 275.632 96.2969 274.225 99.1742C272.249 103.218 267.758 109.139 275.684 109.65C281.608 110.032 279.91 108.465 282.083 107.784"
						fill="none"
						opacity="1"
						stroke="#d1af62"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="3"
					/>
					<path
						d="M11.6594 33.3981C10.8434 35.03 11.8491 42.603 11.8608 43.4693C11.9026 46.5576 11.8293 49.6466 11.8608 52.7349C11.9863 65.03 12.8263 77.2959 12.6665 89.5959C12.5828 96.039 11.9151 102.164 11.2565 108.53C11.024 110.778 10.7726 113.204 10.048 115.378C9.98793 115.559 9.75048 115.939 9.64514 115.781C7.76349 112.959 8.3073 104.663 7.8323 101.279C7.51283 99.0023 7.20067 96.7221 7.0266 94.4301C5.63004 76.0421 8.24136 57.8724 16.0908 41.0522C20.7283 31.1147 29.8504 25.8924 39.6576 32.7938C49.6742 39.8425 48.6269 54.1807 46.7075 64.4176C43.8991 79.3958 37.8433 94.633 26.9678 105.509C24.681 107.795 22.2344 109.925 19.7164 111.954C16.9335 114.197 13.3528 118.763 10.2494 116.99C5.45522 114.25 13.8696 103.62 15.2851 102.084C22.9348 93.7835 31.4927 96.3444 41.4704 95.2358C46.0537 94.7265 50.1317 95.3328 50.1317 89.5959C50.1317 84.8607 43.7799 91.1392 43.4847 91.4087C39.7072 94.8577 29.1785 108.989 37.8448 112.961C43.752 115.669 53.3545 96.5014 53.3545 92.013C53.3545 90.7232 51.601 93.9284 50.9374 95.0344C48.6666 98.8192 46.9218 102.836 45.9018 107.12C45.5333 108.668 46.9681 111.705 48.9232 110.141C52.2843 107.452 60.6753 86.8106 67.0515 89.9987C67.9126 90.4292 65.7131 92.1326 65.6415 92.2144C64.7215 93.2659 63.9917 94.471 63.2244 95.6386C62.3666 96.9441 55.4984 111.057 58.1888 111.954C58.9102 112.195 59.7758 108.764 61.0087 106.516C62.8358 103.184 70.6374 88.5002 75.1085 89.3944C78.7737 90.1275 67.1761 103.353 66.2458 106.516C66.0217 107.278 65.2789 110.786 67.0515 110.947C70.7177 111.28 83.4079 98.0377 85.5827 95.0344C85.7209 94.8435 88.3813 90.8436 87.3955 89.9987C84.991 87.9377 80.6078 96.1797 80.3456 96.6458C78.6893 99.5903 75.2504 106.214 79.3385 109.134C81.1173 110.405 82.8336 106.431 84.1727 104.703C85.4642 103.036 86.6616 101.296 87.9998 99.6672C89.7518 97.5343 91.5285 95.4158 93.4383 93.423C94.6227 92.1871 95.9233 91.0612 97.2654 89.9987C97.5489 89.7743 98.3869 89.2529 98.2725 89.5959C98.2072 89.7919 83.1441 112.16 90.8198 103.494C92.2732 101.853 93.6673 100.16 95.0497 98.4586C97.159 95.8625 99.1106 93.1372 101.294 90.603C102.875 88.7682 104.446 86.8876 106.33 85.3659C106.351 85.3489 102.216 94.6074 102.1 94.8329C99.8399 99.2112 96.1139 106.677 103.107 108.933C109.026 110.842 118.073 101.601 119.221 103.897"
						fill="none"
						opacity="1"
						stroke="#d1af62"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="3"
					/>
				</svg>
			</router-link>
			<router-link class="menu-item right" to="/gallery">
				Gallery
			</router-link>
			<router-link class="menu-item right" to="/rants">
				Rants
			</router-link>
		</div>
	</div>
</template>

<style lang="scss">
.menu-mobile {
	position: fixed;
	bottom: 1em;
	right: 1em;
	z-index: 999;
	opacity: 0.7;
}
.menu {
	background-color: var(--surface-900);
	position: fixed;
	top: 0;
	left: 0;
	width: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	transform-origin: top left;
	transform: rotate(-90deg) translateX(-100%);
	overflow: hidden;
	height: 5rem; // HACK
	white-space: nowrap;

	.menu-line {
		width: 100vh;
		position: absolute;
		right : 0;
		height: 2px;
		background-color: var(--primary-500);
		z-index: 0;
	}
	.menu-items {
		position: absolute;
		z-index: 100;
		text-transform: uppercase;
		display: flex;
		align-items: center;
		justify-content: center;

		.menu-item, .menu-signature {
			display: block;
			background-color: var(--surface-b);
			padding-right: 12px;
			padding-left: 12px;
			margin-right: 12px;
			margin-left: 12px;

			&:hover {
				margin-right: 24px;
				margin-left: 24px;
				font-size: 1.3rem;
			}
		}

		.menu-signature {
			svg {
				height: 5rem; // HACK
				vertical-align: middle;
				transition: all ease .15s;
			}
			&:hover {
				svg {
					height: 90px; // HACK
				}
			}
		}

		.menu-item {
			position: relative;
			font-weight: 400;
			&::before, &::after {
				background-color: var(--primary-500);
				content: "";
				width: 0;
				height: 2px;
				position: absolute;
				transition: all ease 0.15s;
			}
			&::before {
				top: -5px;
				left: 12px;
			}
			&::after {
				bottom: -5px;
				right: 12px;
			}
			&:hover::before, &:hover::after {
				width: 50%;
			}
		}
	}
}

</style>
