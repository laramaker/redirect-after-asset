// Nova Asset JS
Nova.booting((Vue, router, store) => {
    router.addRoutes([
        {
            name: 'redirectAfter',
            path: '/redirectAfter',
            component: require('./components/RedirectAfter'),
        },
    ])
})
