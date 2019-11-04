<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="success lighten-1" text v-on="on">Add new project</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2">Add new project</v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
          <v-textarea label="Information" v-model="content" prepend-icon="mdi-file-edit"></v-textarea>
          <v-text-field label="Person" v-model="person" prepend-icon="mdi-file-edit"></v-text-field>
          
          <v-menu v-model="menu2" :close-on-content-click="false" max-width="290">

            <template v-slot:activator="{ on }">
              <v-text-field :value="formattedDate" clearable label="Due date" readonly v-on="on">
              </v-text-field>
            </template>
            <v-date-picker v-model="due" @change="menu2 = false"></v-date-picker>            
          </v-menu>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success darken-1" text @click="submit">Add project</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format';

export default {

  data: ()=>({
    dialog: false,
    menu2: false,
    title: '',
    content: '',
    person: '',
    due: new Date(),
  }),
  methods: {
    submit() {
      console.log(this.title, this.content);
      this.dialog = false;
    }
  },
  computed: {
    formattedDate() {
      // const due = new Date();
      try {
        const valuex = this.due.toISOString().substr(0, 10)
        console.log(`formatted: ${valuex}`);
        const retFormat = format(valuex, 'do MMM yyyy');
        console.log(retFormat);
        return retFormat;
      } catch(error) {
        return '999999';
      }
    },
  }
}
</script>

<style>

</style>