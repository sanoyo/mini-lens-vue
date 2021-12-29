<template>
    <v-navigation-drawer v-model="drawer" permanent color="#F4F5F9" app>
        <v-list-item class="px-2 py-5">
            <v-list-item-title class="text-capitalize" align="center">
                <v-icon x-large>fas fa-asterisk</v-icon> Mini-lens
            </v-list-item-title>
        </v-list-item>
        <v-list nav dense>
            <v-list-item-group v-model="selectedItem" color="deep-purple">
                <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item> 
            </v-list-item-group>
        </v-list>
        <template v-slot:append>
                <div class="pa-2">
                    <v-card align="center" class="pa-3">
                        <v-card color="deep-purple" dark class="mt-5">
                            <v-list-item two-line>
                               <v-list-item-content>
                                   <v-list-item-title>Kubernetes</v-list-item-title>
                               </v-list-item-content>
                            </v-list-item>             
                        </v-card>
                    </v-card>
                </div>
        </template>
    </v-navigation-drawer>
</template>
<script>
export default {
    data: () => ({
        selectedItem: 0,
        drawer: null,
        items: [
            {icon: 'fas fa-home', text: 'Dashboard', route: '/home'},
        ]
    })
}
</script>
<style scoped>
div >>> .v-list a {
    text-decoration: none;
}
</style>