<template>
    <div>
        <div class="base-tab">
            <ul>
                <li v-for="(tab, index) in baseTab" :key="index">
                    <button 
                        type="button" 
                        :class="{'active': currentTab === index}"
                        v-on:click="$emit('click', index)">
                        {{ tab.name }}
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BaseTab',
    props: {
        baseTab: {
            type: Array,
            required: true
        },
        currentTab: {
            type: Number,
            default: 0
        }
    }
}

</script>

<style scoped>
.base-tab ul {
    display: flex;
    align-items: center;
    border-bottom:1px solid #ddd;
    border-left:1px solid #ddd;
    margin-bottom:0;
}

.base-tab ul li button {
    border-top:1px solid #ddd;
    border-right:1px solid #ddd;
    background-color: #ddd;
    cursor: pointer;
    padding: 10px 20px;
}

.base-tab ul li button.active {
    background-color: #fff;
    border-bottom:1px solid #fff;
    color: #333;
    margin-bottom:-1px;
}


</style>


