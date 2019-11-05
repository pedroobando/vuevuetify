<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="success lighten-1" text v-on="on">Add new project</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2">Add new project</v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form" v-model="formValid">
          <v-text-field label="Title" v-model="title" :rules="inputRules" :counter="10" required prepend-icon="mdi-folder"></v-text-field>
          <v-textarea label="Information" v-model="content" :rules="inputRules" :counter="20" required prepend-icon="mdi-file-edit"></v-textarea>
          <v-text-field label="Person" v-model="person" :rules="inputRules" prepend-icon="mdi-file-edit"></v-text-field>
          
          <v-menu v-model="menu2" :close-on-content-click="false" max-width="290">
            <template v-slot:activator="{ on }">
              <v-text-field :value="formattedDate" label="Due date" prepend-icon="mdi-calendar" readonly v-on="on">
              </v-text-field>
            </template>
            <v-date-picker v-model="due2" @change="seleccionfecha"></v-date-picker>            
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn color="success darken-1" depressed @click="submit" :disabled="!formValid">Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import formatfns from 'date-fns/format';

export default {

  data: ()=>({
    dialog: false,
    menu2: false,
    title: '',
    content: '',
    person: '',
    due: new Date(),
    due2: new Date().toISOString().substr(0, 7),
    formValid: false,
    inputRules: [
      v => !!v || 'Data is required.',
      v => v.length >= 3 || 'Minimum length is 3 characters'
    ]
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.title, this.content, this.person, this.due);
        this.dialog = false;
      } else {
        this.formValid = false;
      }
    },
    seleccionfecha(fecha) {
      // console.log(fecha);
      // console.log(fecha.substr(0,4)+ '-'+fecha.substr(5,2)+'-'+fecha.substr(8,2));
      this.due = new Date(fecha.substr(0,4), fecha.substr(5,2), fecha.substr(8,2));
      // console.log(this.due);
      // this.formattedDate();
      this.menu2 = false;
    }

        
  },
  computed: {
    formatPicker() {
      const retFormat = formatfns(this.due,'yyyy-MM-dd');
      return retFormat;
    },
    formattedDate() {
      try {
        return this.due ? formatfns(this.due, 'do MMM yyyy') : ''
      } catch(error) {
        console.log(error);
        return '999999';
      }
    },
  }
}
</script>

<style>

</style>