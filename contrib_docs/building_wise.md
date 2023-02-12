# Building WISE From Source
AUTHOR: spydmobile

## How we do it on github

The building of WISE is not a simple nor trivial thing. Before trying to build it on your own, consider how it is done in our build process in github.

This is best done wiht a series of flow charts.

### Triggering the build.

The first thing that happens is we chnage the version number of the application in a dedicated repo.

We might bump the version from `1.0.6-beta-6` to `1.0.6-beta-7`. This is done by modifying the `versions.properties` in the `WISE_Versions` repo.

This chart shows how that works:

#### Trigger Release Workflow

##### From WISE-Developers/WISE_Versions/main

```mermaid
flowchart TB
1[Build WISE Builder]
-->
2[Build WISE Manager]
-->
3[Build WISE]
-->
4[Build the WISE JS API]
-->
5[Build the WISE Java API]
-->
7[Complete]
```


But really this is more true to render like this:

# Trigger Release Workflow

## From WISE-Developers/WISE_Versions/main

```mermaid
flowchart TB
0[Trigger Release Workflow]
1[Build WISE Builder]
2[Build WISE Manager]
3[Build WISE]
4[Build the WISE JS API]
5[Build the WISE Java API]
7[Complete]
0-->1
0-->2
0-->3
0-->4
5-->7
4-->7
3-->7
2-->7
1-->7




```
