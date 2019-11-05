<template>
  <div class="project">
    <h1 class="title font-italic font-weight-regular grey--text">Project</h1>

    <v-container class="my-5">
      <v-expansion-panels popout>
      <v-expansion-panel  v-for="project in myProjects" :key="project.title">
        <v-expansion-panel-header>
          <span class="text-uppercase">{{ project.title }}</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="font-weight-bold grey--text">due by {{ project.due.toDate() | dateby }}</div>
          <div>{{ project.content }}</div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import db from '@/modules/fireBase';
import formatfns from 'date-fns/format';

export default {
  name:'project',
  data: () => ({
    projects: []
    // projects: [
    //   {title: 'Diseno de sitio web', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nam modi autem, fugiat non, nihil quis dicta ut molestiae minima, temporibus molestias totam. Itaque tempora placeat dolores consectetur, voluptatem earum?'},
    //   {title: 'Code up the homepage', person: 'Chin Liu', due: '20th Jul 2019', status: 'completed', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nam modi autem, fugiat non, nihil quis dicta ut molestiae minima, temporibus molestias totam. Itaque tempora placeat dolores consectetur, voluptatem earum?'},
    //   {title: 'Desing video thumbnails', person: 'Evan You', due: '13 Feb 2018', status: 'ongoing', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nam modi autem, fugiat non, nihil quis dicta ut molestiae minima, temporibus molestias totam. Itaque tempora placeat dolores consectetur, voluptatem earum?'},
    //   {title: 'Develoment project React', person: 'Jordan Walke', due: '14th Mar 2013', status: 'overdue', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nam modi autem, fugiat non, nihil quis dicta ut molestiae minima, temporibus molestias totam. Itaque tempora placeat dolores consectetur, voluptatem earum?'},
    //   {title: 'Create a community forum', person: 'The Net Ninja', due: '26 Ago 2018', status: 'completed', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nam modi autem, fugiat non, nihil quis dicta ut molestiae minima, temporibus molestias totam. Itaque tempora placeat dolores consectetur, voluptatem earum?'}      
    // ]
  }),
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person == 'The Net Ninja'
      });
    },
  },
  filters: {
    dateby(value) {
      let formatDate = formatfns(value, 'do MMM yyyy');
      return `${formatDate}`;
    }
  },
  methods: {
    formattedDate(timeStamp) {
      try {
        let dateProject = timeStamp.toDate();
        console.log(dateProject);
        return formatfns(dateProject, 'do MMM yyyy');
      } catch(error) {
        console.log(error);
        return 'ERROR DATE';
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

</style>