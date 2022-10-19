const deviceMixins = {
    data() {
        return {
            windowWidth: 600,
            interval: undefined
        }
    },
    mounted() {
        this.interval = setInterval(this.setListener(), 600)
    },
    computed: {
        isMobile() {
            return this.windowWidth <= 720
        },
        isTablet() {
            return this.windowWidth > 720 && this.windowWidth <= 1112
        },
        isDesktop() {
            return this.windowWidth > 1112
        },
        isMobileOrTablet() {
            return this.isMobile || this.isTablet
        },
        isDesktopOrTablet() {
            return this.isDesktop || this.isTablet
        }
    },
    methods: {
        setListener() {
            if (window) {
                this.windowWidth = window.innerWidth
                window.addEventListener('resize', () => {
                    this.windowWidth = window.innerWidth
                })
                clearInterval(this.interval)
            }
        }
    }
}

module.exports = { deviceMixins }
