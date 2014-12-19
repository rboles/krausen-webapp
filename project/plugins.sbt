// Comment to get more information during initialization
logLevel := Level.Info

// The Typesafe repository 
resolvers += "Typesafe repository" at "http://repo.typesafe.com/typesafe/releases/"

// Use the Play sbt plugin for Play projects
addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.2.6")

// Native package (for RPM support, among other things)
addSbtPlugin("com.typesafe.sbt" % "sbt-native-packager" % "0.8.0-M1")

// Use the play-yeoman plugin to get yeoman support in the Play console
addSbtPlugin("com.tuplejump" % "sbt-yeoman" % "0.6.4")

