import play.Project._
import com.tuplejump.sbt.yeoman.Yeoman

libraryDependencies ++= Seq()     

playScalaSettings

Yeoman.yeomanSettings

name := "krausen-webapp"

version := "1.0-SNAPSHOT"

