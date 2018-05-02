// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBP2nWsX1FLgoFM5_3FD0-RQQQA3Slfyng',
        authDomain: 'local-coin.firebaseapp.com',
        databaseURL: 'https://local-coin.firebaseio.com',
        projectId: 'local-coin',
        storageBucket: 'local-coin.appspot.com',
        messagingSenderId: '563019498450'
    }
};
