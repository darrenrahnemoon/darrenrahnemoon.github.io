<template>
	<div class="col-fixed menu-column">
		<div class="menu">
			<div class="menu-line"></div>
			<div class="menu-items">
				<router-link class="menu-item" to="/journey" >My Journey</router-link>
				<router-link class="menu-item" to="/projects" >Projects</router-link>
				<router-link class="menu-signature" to="/">
					<img src="../assets/signature.svg">
				</router-link>
				<router-link class="menu-item" to="/gallery" >Gallery</router-link>
				<router-link class="menu-item" to="/blog" >Blog</router-link>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.menu-column {
	height: 100vh;
	width: 80px;

	.menu {
		background-color: var(--surface-900);
		position: relative;
		width: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		transform-origin: top left;
		transform: rotate(-90deg) translateX(-100%);
		overflow: hidden;
		height: 80px; // HACK
		white-space: nowrap;

		.menu-line {
			width: 100vh;
			position: absolute;
			height: 2px;
			background-color: var(--primary-500);
			z-index: 0;
		}
		.menu-items {
			position: absolute;
			z-index: 100;
			text-transform: uppercase;

			.menu-item, .menu-signature {
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
				img {
					height: 80px; // HACK
					vertical-align: middle;
					transition: all ease .15s;
				}
				&:hover {
					img {
						height: 90px; // HACK
					}
				}
			}

			.menu-item {
				position: relative;
				&::before, &::after {
					background-color: var(--primary-500);
					content: "";
					width: 0;
					height: 2px;
					position: absolute;
					transition: all ease 0.15s;
				}
				&:hover::before, &:hover::after {
					width: 50%;
				}
				&::before {
					top: -5px;
					left: 12px;
				}
				&::after {
					bottom: -5px;
					right: 12px;
				}
			}
		}
	}
}
</style>