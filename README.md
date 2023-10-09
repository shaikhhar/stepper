# Questions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Note about production deployment
Currently in the development, the proxy server is used to call the API to circumvent any CORS related issue.
While deploying to a development server, Please specify URL in the environment.production.ts file and use that API in the stepper.service.ts to call the API 
eg const response = await lastValueFrom(
      this.httpClient.post('${environment.api}/company-profile/input', this.getFormBody())
    );
And in the backend, enable CORS for the production Client IP so that Client can request the backend