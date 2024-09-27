$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/Bing.feature");
formatter.feature({
  "name": "Bing Search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bing"
    },
    {
      "name": "@search"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Doing Bing Search",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I open bing page",
  "keyword": "Given "
});
formatter.step({
  "name": "I check for the bing page title",
  "keyword": "When "
});
formatter.step({
  "name": "I search the \"\u003ckeyword\u003e\" in bing step",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "keyword"
      ]
    },
    {
      "cells": [
        "Bing Search"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Doing Bing Search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@bing"
    },
    {
      "name": "@search"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 114\nCurrent browser version is 129.0.6668.60 with binary path C:\\Users\\ShameemAkther\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-6\u0027, revision: \u00275f43a29cfc\u0027\nSystem info: host: \u0027IBM-519SMM3\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_192\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x007CA813+48355]\n\t(No symbol) [0x0075C4B1]\n\t(No symbol) [0x00665358]\n\t(No symbol) [0x006861AC]\n\t(No symbol) [0x00681EF3]\n\t(No symbol) [0x00680579]\n\t(No symbol) [0x006B0C55]\n\t(No symbol) [0x006B093C]\n\t(No symbol) [0x006AA536]\n\t(No symbol) [0x006882DC]\n\t(No symbol) [0x006893DD]\n\tGetHandleVerifier [0x00A2AABD+2539405]\n\tGetHandleVerifier [0x00A6A78F+2800735]\n\tGetHandleVerifier [0x00A6456C+2775612]\n\tGetHandleVerifier [0x008551E0+616112]\n\t(No symbol) [0x00765F8C]\n\t(No symbol) [0x00762328]\n\t(No symbol) [0x0076240B]\n\t(No symbol) [0x00754FF7]\n\tBaseThreadInitThunk [0x76A07BA9+25]\n\tRtlInitializeExceptionChain [0x7747C11B+107]\n\tRtlClearBits [0x7747C09F+191]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$1(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:75)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:216)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:136)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:75)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:163)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:150)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:105)\r\n\tat Steps.Hooks.setUp(Hooks.java:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I open bing page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.Steps.i_open_bing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the bing page title",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.Steps.i_check_for_the_bing_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I search the \"Bing Search\" in bing step",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Steps.i_search_the_keyword_in_bing_step(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("this is my failure message");
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat Steps.Hooks.tearDown(Hooks.java:37)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/java/Features/Google.feature");
formatter.feature({
  "name": "Google Search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@google"
    },
    {
      "name": "@search"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Doing Google Search",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I open google page",
  "keyword": "Given "
});
formatter.step({
  "name": "I check for the google page title",
  "keyword": "When "
});
formatter.step({
  "name": "I search the \"\u003ckeyword\u003e\" in google step",
  "keyword": "Then "
});
formatter.step({
  "name": "I skipping this step",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "keyword"
      ]
    },
    {
      "cells": [
        "Google Search"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Doing Google Search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@google"
    },
    {
      "name": "@search"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 114\nCurrent browser version is 129.0.6668.60 with binary path C:\\Users\\ShameemAkther\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-6\u0027, revision: \u00275f43a29cfc\u0027\nSystem info: host: \u0027IBM-519SMM3\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_192\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x007CA813+48355]\n\t(No symbol) [0x0075C4B1]\n\t(No symbol) [0x00665358]\n\t(No symbol) [0x006861AC]\n\t(No symbol) [0x00681EF3]\n\t(No symbol) [0x00680579]\n\t(No symbol) [0x006B0C55]\n\t(No symbol) [0x006B093C]\n\t(No symbol) [0x006AA536]\n\t(No symbol) [0x006882DC]\n\t(No symbol) [0x006893DD]\n\tGetHandleVerifier [0x00A2AABD+2539405]\n\tGetHandleVerifier [0x00A6A78F+2800735]\n\tGetHandleVerifier [0x00A6456C+2775612]\n\tGetHandleVerifier [0x008551E0+616112]\n\t(No symbol) [0x00765F8C]\n\t(No symbol) [0x00762328]\n\t(No symbol) [0x0076240B]\n\t(No symbol) [0x00754FF7]\n\tBaseThreadInitThunk [0x76A07BA9+25]\n\tRtlInitializeExceptionChain [0x7747C11B+107]\n\tRtlClearBits [0x7747C09F+191]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$1(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:75)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:216)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:136)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:75)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:163)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:150)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:105)\r\n\tat Steps.Hooks.setUp(Hooks.java:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I open google page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.Steps.i_open_google_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the google page title",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.Steps.i_check_for_the_google_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I search the \"Google Search\" in google step",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Steps.i_search_the_keyword_in_google_step(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I skipping this step",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.Steps.i_skipping_this_step()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("this is my failure message");
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat Steps.Hooks.tearDown(Hooks.java:37)\r\n",
  "status": "failed"
});
});