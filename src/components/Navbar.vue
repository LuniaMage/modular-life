 
<template>
    <nav>
        <!-- Navigation Bar -->
        <v-app-bar app>
         
           <v-layout>
            <v-toolbar-title>
                <router-link to="/" class="logo"> 
                <span class="logo">Modular</span> 
                <span class="logo">Life</span>
                </router-link>
            </v-toolbar-title>
           </v-layout>
            

            <v-spacer></v-spacer>

            <v-btn depressed color="transparent" v-for="link in links" :key="link.text" route :to="link.route"> {{ link.text }}</v-btn>
           
      
        </v-app-bar>

    </nav>
</template>
 
 
 <style lang="scss">

 .logo {
     font-weight: lighter; 
     text-decoration: none;
     color: aqua;
     font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 }
     
 </style>
 
 <script>
 export default {
     data() {
         return {
            links: [
             { text: 'Features', route: '/features'},
             { text: 'Benefits', route: '/benefits'},
             { text: 'Get Started', route: '/started'},
             { text: 'Log In', route: '/login'},
            ]
         }
         
     },
 }
 </script>