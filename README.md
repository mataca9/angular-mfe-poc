# Angular Mfe Poc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Development server

Run `npm run start:shell` for shell application. Navigate to `http://localhost:4200/`.

Run `npm run start:remote-1` for remote-1 application. Navigate to `http://localhost:4201/`.

The applications will automatically reload if you change any of the source files.

> To run local, all application must be running at same time as remoteEntry.js is served dynamically on dev environment.

## Adding new mfe application

Generate a new remote application.

```ng generate application <application-name>```

Configure a new remote application.

```ng add @angular-architects/module-federation --project <application-name> --port <port-not-used-yet> --type remote```


## Configuring new mfe application

### At remote application

At new's application `webpack.config.js`, defines the `name` and exposed module at `exposes`.

```
// webpack.config.js (remote)
exposes: {
  "./DepartmentsModule":
    "./projects/remote-1/src/app/modules/departments/departments.module.ts",
},
```

### At shell application (static loading)

At shell's application `webpack.config.js`, defines the `remotes` and its path (remoteEntry).

```
// webpack.config.js (shell)
remotes: {
  remote1: "https://localhost:4201/remoteEntry.js",
},
```

> Important: verify if the remoteEntry.js path is correct (if ssl is set should use https).

### Adding routes to mfe (dynamic loading)

When using dynamic loading, you don't need to declare the remotes inside shell's `webpack.config.js`

The remote's module is loaded using `loadRemoteModule` provided from `@angular-architects/module-federation` where should be set the chosen remote application and a known module.

```
// app-routing.module.ts (shell)
const routes: Routes = [
  {
    path: 'departments',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://localhost:4201/remoteEntry.js',
        exposedModule: './DepartmentsModule',
      }).then((m) => m.DepartmentsModule),
  },
]
```

### Running applications

```
ng serve <application-name> -o --ssl
```
