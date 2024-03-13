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
    mounted: function () {
        this.fetchData();
    },
    methods: {
        fetchData: async function () {
            try {
                const response = await fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json');
                const data = await response.json();
                this.vehicles = data.response;
                
                //return vehicles
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style scoped>

</style>