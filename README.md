# Shared Analytics Framework Calculation Engine 

## Overview
Calculation Engine is a library for Excel-like calculations with some additional features like Calculation Graph or Custom Functions.

It is based on Apache POI project (forked) with changes mostly in evaluation part of that library.

## Version
Current version is: 0.6.

Released October 27, 2015.

Provided features:
* Cell evaluation (formula calculation)
* Workbook evaluation (workbook with formulas to workbook with data)
* Calculation graph building (feature attached to evaluation process)
* Custom functions: DEFINE, FUNCEXEC, DSLOOKUP, QUERY (see custom function documentation for details)
* .xlsx only support
* Import from .xlsx and export to .xlsx (data only)

## Modules
Project uses maven as build tool. Project modules description:
* apache-poi - code of forked Apache POI (original: https://github.com/apache/poi, forked: https://github.com/DataArt/ApachePoiFork) project with custom pom.xml to build it (since POI uses Ant as build tool it needs some custom steps to be used as maven dependency).
* apache-poi-fork and apache-poi-ooxml-fork - two maven modules to publish POI's jars to maven repository (since POI's ant build produces many jar files and CalculationEngine needs only two of them - they should be published to maven repository).
* poi-fork-parent - root maven module for _apache-poi_, _apache-poi-fork_ and _apache-poi-ooxml-fork_ - to build Apache POI and publish jars to local maven repository.
* code-quality - maven parent pom for code quality tools (_checkstyle_, _pmd_, _findbugs_, _errorprone_).
* engine-model - contains all _model_ classes (interfaces and realization), this module is a base dependency to all others.
* engine-data - contains all _data-related_ objects and objects to work with '_data_. _Data_ means external information - everything that can be stored somewhere (database, network, filesystem) - excel files, data sources, caches for data sets, etc. Since Calculation Engine does not require any particular data storage - it only provides APIs to implement them.
* engine-data-cache-impl - contains basic Cache implementations for engine-data module. Since library need some storage to save information to - it needs to be provided with implementation of JCache standard - EHCache (http://www.ehcache.org) is used here.
* engine-functions - contains all the custom functions and classes to load\use them in application.
* engine-evaluation - contains two major entities: _Evaluator_ and _Auditor_. _Evaluator_ is used to evaluate cells (calculate formulas). _Auditor_ is used to get audit information (execution graph, static graph). This module contains interfaces, realizationû and some internal classes for Evaluator and Auditor.
* engine-demo - contains only _demo_ classes to see how Calculation Engine can (and should) be used from outside applications.
* engine-root - maven root module to build 'engine-only' modules: _engine-model_, _engine-data_, _engine-functions_, _engine-valuation_. Since Apache POI fork should be build rarely and it takes some time - this new module to 'build fast' was introduced. 
* engine-tests - contains all the tests in project. Inside of this module there are three more modules: _engine-tests/engine-it_ (integration tests), _engine-tests/engine-it-graph_ (integration tests for graphs - based on xml compare), _engine-tests/engine-unit_ (unit tests).

## How to build
Once source code is downloaded, simply run next command:
```
mvn install
```
from root directory _calculation-engine_. It will build and install to local maven repository all the jars (first build takes time since new jars will be downloaded).


Next output jar files should be included in application (dependencies are not specified here):
* spreadsheetanalytics-model-[version].jar
* spreadsheetanalytics-data-[version].jar
* spreadsheetanalytics-functions-[version].jar
* spreadsheetanalytics-evaluation-[version].jar
 
Also the above jars required jars from Apache POI fork to be included as dependencies:
* poi-fork-[version].jar (current version is: poi-fork-3.13-beta1.jar)
* poi-ooxml-fork-[version].jar (current version is: poi-ooxml-fork-3.13-beta1.jar)

To add Calculation Engine as dependency to project use:
```
<dependency>
  <groupId>com.dataart</groupId>
  <artifactId>spreadsheetanalytics-evaluation</artifactId>
  <version>0.6</version>
</dependency>
```
Note: _spreadsheetanalytics-evaluation_ module has dependencies to all other modules, so they do need to be included.