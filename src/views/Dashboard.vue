<template>
  <div class="dashboard">
    <h1 class="title font-italic font-weight-regular grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-row class="mb-3">

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn text small color="grey" v-on="on" @click="sortby('title')">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort project by name project</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn text small color="grey" @click="sortby('person')" v-on="on">
              <v-icon left small>mdi-account-circle</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort project by person project</span>
        </v-tooltip>

      </v-row>
      <v-card flat v-for="project in projects" :key="project.title">
        <v-row class="ml-0 pa-0" :class="`project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{project.due.toDate() | dateby}}</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="pt-3">
              <v-chip small :color="chipColor(project.status)" class="white--text caption">{{ project.status }}</v-chip>
            </div>
          </v-col>          
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import db from '@/modules/fireBase';
import formatfns from 'date-fns/format';

export default {
  name: 'home',
  data: () => ({
    projects: []
    // projects: [
    //   {title: 'Diseno de sitio web', person: 'The ninja coder', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nam modi autem, fugiat non, nihil quis dicta ut molestiae minima, temporibus molestias totam. Itaque tempora placeat dolores consectetur, voluptatem earum?'},
    //   {title: 'Code up the homepage', person: 'Chin Liu', due: '20th Jul 2019', status: 'completed', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nam modi autem, fugiat non, nihil quis dicta ut molestiae minima, temporibus molestias totam. Itaque tempora placeat dolores consectetur, voluptatem earum?'},
    //   {title: 'Desing video thumbnails', person: 'Evan You', due: '13 Feb 2018', status: 'ongoing', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nam modi autem, fugiat non, nihil quis dicta ut molestiae minima, temporibus molestias totam. Itaque tempora placeat dolores consectetur, voluptatem earum?'},
    //   {title: 'Develoment project React', person: 'Jordan Walke', due: '14th Mar 2013', status: 'overdue', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nam modi autem, fugiat non, nihil quis dicta ut molestiae minima, temporibus molestias totam. Itaque tempora placeat dolores consectetur, voluptatem earum?'},
    //   {title: 'Create a community forum', person: 'Steve Job', due: '26 Ago 2018', status: 'completed', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nam modi autem, fugiat non, nihil quis dicta ut molestiae minima, temporibus molestias totam. Itaque tempora placeat dolores consectetur, voluptatem earum?'}      
    // ]
  }),
  methods: {
    sortby(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1: 1);
    },
    chipColor(prop) {
      switch (prop) {
        case 'ongoing':
          return '#dd7513';
        case 'completed':
          return '#3cd1c2';
        case 'overdue':
          return '#c610df';
        default:
          break;
      }

    }
  },
  filters: {
    dateby(value) {
      try {
        let formatDate = formatfns(value, 'do MMM yyyy');
        return `${formatDate}`;
      } catch (error) {
        return 'Error Fecha';        
      }
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if(change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      });
    });
  }
}
</script>

<style>
  .project.completed {
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing {
    border-left: 4px solid #dd7513;
  }
  .project.overdue {
    border-left: 4px solid #c610df;
  }
  
  .v-chip.completed {
    background: #3cd1c2;
  }
  .v-chip.ongoing {
    background: #dd7513;
  }
  .v-chip.overdue {
    background: #c610df;
  }

</style>