<script>
export default {
    data: {
        url: String,
    },

    beforeCreate() {

        if (this.$route.name === 'redirectAfter') {

            if (!window.location.search.includes('?to=')) {
                return window.location.href = '/';
            }

            this.url = window.location.search;
            return window.location.href = decodeURIComponent(this.url.slice(4)) //delete ?to=;
        }
    },
}
</script>
