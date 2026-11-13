# AngularEssentials

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.3.

## Start and Initialization

In order to create an angular project install NodeJS, a packet manager like npm, pnmp or others. Then install the Angular CLI to use the angular commands during the coding process:

´´´bash
npm install -g @angular/cli
´´´

Now use the next command to create a new project, using the angular CLI:

´´´bash
ng new AngularProject
´´´

The project should be already created, now move to the project's folder and run the project:

´´´bash
cd AngularProject
ng serve
´´

This is using the CLI command, but you can also initialize the project using the customizable scripts in [package.json](package.json): 

´´´bash
npm start
´´

Note: Is possible to decide if install the CLI or not, but it helps makes the development much faster and easy.

## Framework intial structure

After creating a project there are a bunch of default files, here a quick review of each one and what is their role:

### Public

Like many other frameworks the public folder is meant to contain resources like images, icons or any other resources that can be exposed to the users.

### src

Is the folder that will contain the main files that form the app. It contains the *index.html*, *styles.scc*, *main.ts* that are basically the the files where is loaded the app and can control some resources globally.
Also there is the *app* folder, which is meant to contain the components, logic and piezes of code that together builds the platform. Inside it will always have for default the first component of the web-app (mostly used as the base where all will be loaded later) and two configuration files:
[app.config.ts](src/app/app.config.ts): File where are imported and configured some of the dependencies that will be used along the app, things like routing and database communication.
[app.html](src/app/app.html): HTML file of the first component.
[app.css](src/app/app.css): Styles sheet of the firts component.
[app.spec.ts](src/app/app.spec.ts): Its a file which contains the testing configurations for the component.
[app.ts](src/app/app.ts): The most important file of the component, where all the logic will be written to control the DOM or data.
[app.routes.ts](src/app/app.routes.ts): File where all the routes will be written and setted.

Note: In some versions like 19, it can have the sufix component, but essentially is the same file.

From here, any way to structure the code can be used as long as Angular allows it. Personally i use a *Feature based architecture* where components are organized by their category:
 ´´´bash
src/
└── app/
    ├── core/                
    │   ├── interfaces/
    │   └── services/        
    │
    ├── shared/              
    │   ├── ui_components/     
    │   └── pipes/
    │
    ├── layout/             
    │   ├── navbar/
    │   ├── sidebar/
    │   └── footer/
    │
    ├── features/            
    │   ├── home/
    │   ├── users/
    │   
    │
    ├── app.component.ts
    ├── app.config.ts
    └── app.routes.ts
´´

*core* Contains files related to services and globally used logic.
*shared* Is for components without logic but are sylized to be used in the app.
*layout* Main components that give the visual structure to the UI.
*features* Components that contain logic which manage a specific type of data or UI. Like "users", "products", "payments", etc.

### angular.json

File where some of the behavior and configurations of the framework can be customizable.

The rest of the files are the commonly integrated in other frameworks so im not explaining them now.

## Angular/TypeScript concepts

A quick overview of some basic concepts in order to undersant the framework.

 
### Components 

Are the main focus of the framework, these are the parts or pieces that are combined to make the App. Each one contains a TypeScript file where all the functions and behaviour of the component is setted, then there is a HTMl file that contains the HTML tags to show in the UI, also there is a CSS file which is for giving styles to the compontent HTML tags and for last there's a spec.ts meant for testing. This for files are already binded together so isn't needed to configure anything else to see the appied changes, and also things like styles or functions doesn't affect other components normally unless you set some type of communication.
To create a component use the angular cli or create each file by yourself:

´´´bash
ng generate component navbar
´´´

I do recommend naming components using a format like this "blue-button" instead of "blueButton" because of angular naming properties.

### Pipes

This are like filters that can be used in the HTML files to transform how the data is shown. Like a string to uppercase or formatted date:

´´´bash
<p>{{ todayDate | date:'shortDate' }}</p>
<p>{{ nombre | uppercase }}</p>
´´´

This pipes comes already with the framework, but you can create your custom pipes also:
´´´bash
ng generate pipe pipeName
´´´

Which will create a TypeScript file where all the behaviour of the pipe can be set and also a spec.ts file for testing

### Services 

### Interfaces

This are the way of TypeScript to set typing to an object or class commonly related to Models, that means it gives the object a template that needs to follow making the code more reliable.
You can create one using a usual TypeScript file and naming something like "item.model.ts". Then you can define the interface in the code:
´´´bash
export interface Item {
    id: number,
    name: string,
}
´´´
Here we set that a new interface is created with the name "Item" and is being exported so it can be used in other files in the project.
Between the brackets the properties names are setted and what type of data can store, also is possible to set some conditions or if the data field is always needed to create a new object

## Navigation

Angular projects mostly the single page app format. That means, the navigation isn't loading diferent files when the UI changes, instead what changes are the components that rotates in the location where the router-outlet tag is. Here, you can find it in the app.html file.

Since angular 19 the navigation is already configurated, so you just need to set the routes and way for the user to interact and trigger the navigation. Just to be sure, move to app.config.ts and verify that the provideRouter function is imported and setted with the router variable.

Then just move app.routes.ts to set new routes using a syintax like this:
´´´bash
    { path: '', component: Home },
    { path: 'item', component: Item },
´´´

### Trigger navigation

You can allow the user to navigate using a link or with a function that triggers the navigation.

Using the link is the most common and easy to understand. Just import the RouterLink method from angular@router in the TypesCript file of the component and then you can use it in the HTML file like this:
´´´bash
    <p><a routerLink="item">Nav with link</a></p>
´´´
Use it for simple navigation when you just need the user to move from one section to other.

Also, you can use the programatic way. You need to import inject from angular@core, router and activatedRoute from angular@router:
Then you need to initialize the methods:
´´´bash
    private route = inject(ActivatedRoute);
    private router = inject(Router);
´´´

Now you can set a function which triggers the navigation:
´´´bash
    goToItem() {
        this.router.navigate(['item'], { relativeTo: this.route });
    }
´´´
Finally, just set the function in a button or an HTML element so the user can interact with it. I recommen this type of navigation when you need the app to do something before the user changes section.

## Angular commands

Create project:
´´´bash
ng new AngularProject
´´´

Initialize the project:

´´´bash
ng serve
´´´

Or also with the command set in package.json
´´´bash
npm start
´´´

Create component: 

´´´bash
ng generate component navbar
´´´

## Bootstrap

To set bootstrap, install the library using the terminal:
´´´bash
npm install bootstrap@5.3.9
´´´

Then you need to find this files in the bootstrap node module folder:
* "node_modules/bootstrap/dist/css/bootstrap.min.css"
* "node_modules/bootstrap/dist/js/bootstrap.min.js"

Now move to the angular.json file and paste it in the style and script properties inside this file.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```
