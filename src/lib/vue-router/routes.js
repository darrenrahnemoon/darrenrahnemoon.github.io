export var routes = [
    { path: '/', component: function () { return import('$/views/home/Home.vue'); } },
    { path: '/journey', component: function () { return import('$/views/journey/Journey.vue'); } },
    { path: '/projects', component: function () { return import('$/views/projects/Projects.vue'); } },
    { path: '/project/:slug', component: function () { return import('$/views/projects/Project.vue'); } },
    { path: '/gallery', component: function () { return import('$/views/gallery/Gallery.vue'); } },
    { path: '/rants', component: function () { return import('$/views/rants/Rants.vue'); } },
    { path: '/:match(.*)*', component: function () { return import('$/views/components/404.vue'); } },
];
