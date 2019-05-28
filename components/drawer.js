let gdrawer = {
	name: 'gdrawer',
	template: `
<v-navigation-drawer ref="drawer" app right :width="navigation.width" v-model="navigation.shown">
<v-toolbar color="primary">
  <v-toolbar-title class="headline">
    {{title}}
  </v-toolbar-title>
</v-toolbar>
<v-container><slot></slot> </v-container>

</v-navigation-drawer>
   `,
	props: ['title'],

	data: () => {
		return {
			navigation: {
				shown: true,
				width: 550,
				borderSize: 3,
				minSize: 300,
				maxSize: 1000
			}
		}
	},
	computed: {
		direction() {
			return this.navigation.shown === false ? 'Open' : 'Closed'
		}
	},
	methods: {
		setBorderWidth() {
			let i = this.$refs.drawer.$el.querySelector('.v-navigation-drawer__border')
			i.style.width = this.navigation.borderSize + 'px'
			i.style.cursor = 'ew-resize'
		},
		setEvents() {
			const minSize = this.navigation.minSize
			const el = this.$refs.drawer.$el
			const drawerBorder = el.querySelector('.v-navigation-drawer__border')
			const vm = this
			const direction = el.classList.contains('v-navigation-drawer--right') ? 'right' : 'left'

			resize = e => {
				document.body.style.cursor = 'ew-resize'
				let f = direction === 'right' ? document.body.scrollWidth - e.clientX : e.clientX
				if (f > this.navigation.minSize && f < this.navigation.maxSize) {
					el.style.width = f + 'px'
					vm.navigation.width = el.style.width
				}
			}

			drawerBorder.addEventListener(
				'mousedown',
				function(e) {
					if (e.offsetX < minSize) {
						m_pos = e.x
						el.style.transition = 'initial'

						document.addEventListener('mousemove', resize, false)
					}
				},
				false
			)

			document.addEventListener(
				'mouseup',
				function() {
					el.style.transition = ''
					document.body.style.cursor = ''
					document.removeEventListener('mousemove', resize, false)
				},
				false
			)
		}
	},
	mounted() {
		this.setBorderWidth()
		this.setEvents()
	}
}
