package com.dataart.spreadsheetanalytics;

import java.util.Collection;
import java.util.concurrent.TimeUnit;

import org.openjdk.jmh.annotations.Mode;
import org.openjdk.jmh.results.RunResult;
import org.openjdk.jmh.runner.Runner;
import org.openjdk.jmh.runner.options.ChainedOptionsBuilder;
import org.openjdk.jmh.runner.options.OptionsBuilder;
import org.openjdk.jmh.runner.options.TimeValue;

public class BenchmarkTestParent {

    public Collection<RunResult> launchBenchmark(String className) throws Exception {
        ChainedOptionsBuilder opts = new OptionsBuilder()
                                            .mode(Mode.SampleTime)
                                            .timeUnit(TimeUnit.MILLISECONDS)
                                            .warmupTime(TimeValue.seconds(1))
                                            .warmupIterations(3)
                                            .measurementTime(TimeValue.seconds(1))
                                            .measurementIterations(6)
                                            .timeout(TimeValue.seconds(30))
                                            .threads(3)
                                            .forks(0) //0 for debug, 1 for run
                                            .shouldFailOnError(true)
                                            .addProfiler(profilers.FlightRecordingProfiler.class);
        
        return new Runner(opts.include(className + ".*").build()).run();
    }

    public void addBenchmarkResultsToReport(String testName, String testDescription, String excelFile, Collection<RunResult> results) {
        //TODO: add static html with js with report data
        System.out.println(testName + " is added to report");
    }
}