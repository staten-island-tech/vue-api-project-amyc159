<template>
    <div>

    </div>
</template>

<script>
export default {
    data () {
        return {
            vehicles: []
        };
    },
    mounted: functin () {
        this.fetchData();
    },
    methods: {
        fetchData: async function () {
            try {
                const resilt = await fetch(
                    `https://data.cityofnewyork.us/resource/h9gi-nx95.json`
                )
            }
        }
    }
}
</script>

<style scoped>

</style>