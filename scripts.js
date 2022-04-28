const { createApp } = window.Vue;
const { createRouter, createWebHashHistory } = window.VueRouter;

const HomePage = {
    template: `<h1>Homepage</h1>`
};

const AboutPage = {
    template: `<h1>About</h1>`
};

const ContactPage = {
    template: `<h1>Contact</h1>`
};

const MoviePage = {
    props: ['name', 'year'],

    mounted() {
        fetch(`/api/${this.year}/${this.name}/`).catch(console.log)
    },

    template: `<h1>{{ $route.params.name }} ({{ $route.params.year }}) some other info</h1><div>asdasd</div>`
}

const ErrorPage = {
    template: `<h1>404</h1>`
};

const routes = [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/contact", component: ContactPage },
    { path: "/movie/:name/:year", component: MoviePage, props: true }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const RootComponent = {
    data() {
        return {};
    },

    template: `
  <header class="Header">
    <nav>
        <ul class="Header-list">
        <li>
            <router-link to="/" class="Header-item is-active"
            >Homepage</router-link
            >
        </li>
        <li>
            <router-link to="/about" class="Header-item">About Us</router-link>
        </li>
        <li>
            <router-link to="/contact" class="Header-item">Contact</router-link>
        </li>
        </ul>
    </nav>
    </header>

    <router-view></router-view>
  `
};

const app = createApp(RootComponent);
app.use(router);
app.mount("#app");

// const { createApp } = window.Vue;

// const calcRoute = () => {
//   const { pathname } = window.location;
//   if (pathname.endsWith("contact")) return "contact";
//   if (pathname.endsWith("about")) return "about";
//   if (pathname.endsWith("/") || pathname.endsWith("qBpeQZo")) return "home";
//   return false;
// };

// const RootComponent = {
//   data() {
//     return {
//       page: calcRoute()
//     };
//   },

//   computed: {
//     links() {
//       return [
//         {
//           "Header-item": true,
//           "is-active": this.page === "home"
//         },
//         {
//           "Header-item": true,
//           "is-active": this.page === "about"
//         },
//         {
//           "Header-item": true,
//           "is-active": this.page === "contact"
//         }
//       ];
//     }
//   },

//   template: `
//     <header class="Header">
//       <nav>
//         <ul class="Header-list">
//           <li><a href="/" :class="links[0]">Homepage</a></li>
//           <li><a href="/about-us" :class="links[1]">About Us</a></li>
//           <li><a href="/contact" :class="links[2]">Contact</a></li>
//         </ul>
//       </nav>
//     </header>

//     <main>
//       <h1 v-if="this.page === 'home'">Homepage</h1>
//       <h1 v-else-if="this.page === 'about'">About Us</h1>
//       <h1 v-else-if="this.page === 'contact'">Contact</h1>
//       <h1 v-else>404 Page does not exist</h1>
//     </main>
//   `
// };

// const app = createApp(RootComponent);
// app.mount("#app");
