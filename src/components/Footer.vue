<template>
  
        <footer>
            <v-row class="black" justify="center">
                <v-btn class="white--text" color="transparent" depressed v-for="link in links" :key="link.text" route :to="link.route"> {{ link.text }}</v-btn>
                <v-col class="black lighten-2 py-4 text-center white--text" cols="12">
                    {{ new Date().getFullYear() }} — <strong>Mage Creative</strong>
                </v-col>
            </v-row>
            
        </footer>
        
        
            
</template>

<script>
export default {
    data() {
        return {
            links: [
                { text: 'Features', route: '/features'},
                { text: 'Benefits', route: '/benefits'},
                { text: 'Get Started',route: '/started'},
                { text: 'Log In', route: '/login'},
            ]
        }
    }
}
</script>

<style scoped>
    .btn {
        color: palevioletred;
    }
</style>