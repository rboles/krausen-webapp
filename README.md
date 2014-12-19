# krausen-webapp

"Ahoy polloi... where did you come from, a scotch ad?"

## About

A sandbox app for learning AngularJS.

These are equations that I use to put together my home brew projects.

## Development

Intellij: File, Open, select the krausen-webapp directory.

IntelliJ should recognize that this is an SBT project. Enable auto-import.

Install the Chrome LiveReload extension. Make sure to select the option
"Allow access to file URLs" for local development work.

If you install LiveReload while you are working on krausen-webapp, open the
webapp in a new tab.

## Getting Started from Scratch

See: https://github.com/tuplejump/play-yeoman/tree/develop

Install dependencies:

Install npm

```
npm install -g yo
npm install -g grunt
npm install -g bower
```

Start play/sbt in the project folder

```
$ krausen-webapp> play
```

Update the project to pull new dependencies

```
[krausen-webapp] update
```

Generate the yeoman application

```
[krausen-webapp] yo angular
```

Edit the Gruntfile and disable Yeoman "connect" server as play serves the
application.

```
  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer',
      //'connect:livereload', //THIS LINE SHOULD BE COMMENTED
      'watch'
    ]);
```

Run the application

```
[krausen-webapp] ~run
```

Click on the liveReload plugin in the browser to connect and navigate to
http://localhost:9000/ui/




<p style="margin-top:64px;" align="center">
  <img title="You know, a jock"
  src="http://33.media.tumblr.com/tumblr_kwfb97SkXo1qz6f9yo1_500.jpg"/>
</p>

