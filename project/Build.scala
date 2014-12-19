import sbt._
import Keys._
import play.Project._

object ApplicationBuild extends Build {

  val appName = "krausen-webapp"
  val appVersion = "1.0.0-SNAPSHOT"

  val appDependencies = Seq(
    "joda-time" % "joda-time" % "2.3"
  )

  val distFolder = new File("target/dist")

  val main = play.Project(appName, appVersion, appDependencies).settings(
    target in com.typesafe.sbt.SbtNativePackager.Universal := distFolder
      //, resolvers += ( )
  ).settings(
    scalacOptions ++= Seq("-deprecation","-feature", "-unchecked","-language:postfixOps","-language:reflectiveCalls")
  )

}

