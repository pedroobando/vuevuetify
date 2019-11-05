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
          <v-btn color="success darken-1" depressed @click="submit" :loading="loadingSendData" :disabled="!formValid">Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import formatfns from 'date-fns/format';
import db from '@/modules/fireBase';

export default {
  name: 'addProject',
  created() {
    this.title = '';
    this.content= '';
    this.person = '';
    this.due = new Date();
    this.due2 = new Date().toISOString().substr(0, 7)
  },
  data: ()=>({
    dialog: false,
    menu2: false,
    title: '',
    content: '',
    person: '',
    due: new Date(),
    due2: new Date().toISOString().substr(0, 7),
    formValid: false,
    loadingSendData: false,
    inputRules: [
      v => !!v || 'Data is required.',
      v => v.length >= 3 || 'Minimum length is 3 characters'
    ]
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loadingSendData = true;
        const newProject = {
          title: this.title,
          content: this.content,
          due: this.due,
          person: this.person,
          status: 'ongoing'
        }

        db.collection('projects').add(newProject)
          .then(() => {
            this.loadingSendData = false;
            this.dialog = false;
            this.$emit('projectAdded');
            console.log('Add to db');
            // console.log(this.title, this.content, this.person, this.due);
          });        
      } else {
        this.formValid = false;
        // this.loadingSendData = false;
      }
    },
    seleccionfecha(fecha) {
      this.due = new Date(fecha.substr(0,4), fecha.substr(5,2), fecha.substr(8,2));

      this.menu2 = false;
      console.log(fecha);
      console.log(fecha.substr(5,2));
      console.log(this.due);
      console.log(this.due2);
      console.log(formatfns(this.due,'yyyy-MM-dd'));
      // console.log(formatfns(this.due2,'yyyy-MM-dd'));
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
        return 'ERROR DATE';
      }
    },
  }
}
</script>

<style>

</style>