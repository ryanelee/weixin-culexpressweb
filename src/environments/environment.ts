// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api: 'http://localhost:8000/api',
  // api: 'http://api.culexpress.com/api',
  wechatApi: 'http://localhost:8080',
  wxConfig: {
    appId: 'wxbea82c7ca7971d97',
    appSecret: '63514d00948cb51f5cbb0952340ce0c1'
  }
};
