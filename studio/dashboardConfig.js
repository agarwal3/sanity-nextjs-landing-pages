export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61eb214771d12e8167434d20',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-r1pogvu7',
                  apiId: 'a7c27109-2bab-453d-8b96-6e8ce1ddc07d'
                },
                {
                  buildHookId: '61eb21479f289ba0cb04ecef',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-uwytpfhy',
                  apiId: '1df0ecc3-b373-435e-a294-f4b94635088d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/agarwal3/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-uwytpfhy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
