<template>
  <div class="home">
    <h1>Home Page</h1>
    <p class="red white--text body-1 font-condensed capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos nihil excepturi quas maiores, ad nulla? Mollitia, necessitatibus eaque! Minima nam repellat fuga neque nihil dolor? Necessitatibus a amet voluptate?</p>
    <p class="red white--text body-1 font-weight-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos nihil excepturi quas maiores, ad nulla? Mollitia, necessitatibus eaque! Minima nam repellat fuga neque nihil dolor? Necessitatibus a amet voluptate?</p>
    <p class="pink white--text body-2 font-weight-thin">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, corporis, error ut rerum qui vitae voluptatum quaerat commodi quidem fugiat consequuntur hic nobis porro earum vel asperiores necessitatibus, dignissimos similique.</p>
    <p class="pink white--text body-2 font-italic font-weight-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, corporis, error ut rerum qui vitae voluptatum quaerat commodi quidem fugiat consequuntur hic nobis porro earum vel asperiores necessitatibus, dignissimos similique.</p>
    <p class="purple lighten-4 body-2 overline font-weight-medium font-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt aperiam eligendi tempore aspernatur, eum optio unde doloribus, incidunt dolorum iste doloremque eaque repellat animi blanditiis necessitatibus! Dolor, placeat sequi?</p>
    <p class="purple lighten-5 purple--text text--darken-4 body-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquam porro repellendus iusto corporis? Vero, labore, molestiae quaerat laboriosam eligendi quas ipsum eveniet iusto voluptatum inventore aliquid. Eius, aliquid dignissimos?</p>

    <v-btn raised color="yellow" class="pink--text ma-1">click me</v-btn>
    <v-btn text color="yellow" class="ma-1 blue--text">click me 2</v-btn>
    <v-btn depressed color="yellow" class="ma-1 success--text">click me 3</v-btn>
    <v-btn class="success--text ma-1">
      <v-icon left>mdi-clipboard-text-play-outline</v-icon><span class="text-uppercase">email</span>
    </v-btn>
    <div class="d-none d-sm-flex success--text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit mollitia excepturi perspiciatis eveniet tempore. Aliquam numquam ipsam laboriosam magni dolor nostrum quisquam expedita sapiente consequuntur ipsum voluptates iusto, odio tempore.</div>
    <div class="d-sm-none d-md-flex red lighten-5 blue--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum, eveniet aliquam eos eius corporis velit libero ullam. Itaque dicta unde architecto, voluptatem quo qui repellat atque pariatur! Rerum, repellendus.</div>
    <div class="d-md-inline purple lighten-5 pink--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore recusandae rem omnis ipsa provident saepe possimus suscipit? Voluptatem rem exercitationem unde maxime, ducimus alias fuga hic maiores illo animi iure.</div>
    <div class="d-md-block black yellow--text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam necessitatibus veritatis animi mollitia qui doloribus tempora aperiam tempore porro, commodi voluptate accusamus omnis perferendis numquam quas ducimus eligendi amet officia.</div>
    <div class="d-lg-none">hide on screens wider than lg11</div>
    <div class="d-none d-lg-block">hide on screens smaller than lg</div>
    <div class="d-sm-none">
      <v-btn block class="ma-3">Click me 1</v-btn>
      <v-btn block class="ma-3">Click me 2</v-btn>
      <v-btn block class="ma-3">Click me 3</v-btn>
    </div>
    <div class="d-none d-sm-flex">
      <v-btn width="200" class="d-lg-inline ma-3">Click me 4</v-btn>
      <v-btn width="200" class="d-lg-inline ma-3">Click me 5</v-btn>
      <v-btn class="d-lg-inline ma-3">Click me 6</v-btn>
    </div>    

    <v-container class="my-4">
      <v-row>
        <v-col md="6" cols="12" >
          <v-btn block class="primary">click me 1</v-btn>
        </v-col>
        <v-col sm="4" md="2" cols="12">
          <v-btn block class="primary">click me 2</v-btn>
        </v-col>
        <v-col sm="4" md="2" cols="12">
          <v-btn block class="primary">click me 2</v-btn>
        </v-col>
        <v-col sm="4" md="2" cols="12">
          <v-btn block class="primary">click me 2</v-btn>
        </v-col>
      </v-row>

      <v-row justify="space-between">
        <v-col cols="12" sm="4" md="2">
          <v-btn block class="primary">click me 2</v-btn>
        </v-col>
        <v-col cols="12" sm="4" md="2">
          <v-btn block class="primary">click me 2</v-btn>
        </v-col>
      </v-row>

      <v-row justify="space-around">
        <v-col cols="12" sm="4" md="2">
          <v-btn block class="primary">click me 2</v-btn>
        </v-col>
        <v-col cols="12" sm="4" md="2">
          <v-btn block class="primary">click me 2</v-btn>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" sm="4" md="2">
          <v-btn block class="primary">click me 2</v-btn>
        </v-col>
        <v-col cols="12" sm="4" md="2">
          <v-btn block class="primary">click me 2</v-btn>
        </v-col>
      </v-row>

      <v-row justify="end">
        <v-col cols="12" sm="4" md="2">
          <v-btn block class="primary">click me 2</v-btn>
        </v-col>
        <v-col cols="12" sm="4" md="2">
          <v-btn block class="primary">click me 2</v-btn>
        </v-col>
      </v-row>


    </v-container>

  </div>
</template>