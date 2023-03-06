# Data-Knights

## Overview

### Purpose
Project uses movie production data to predict whether a new movie is likely to win an Oscar. Two relevant data sets are joined to create our table, then pre-process the data for supervised machine learning. Findings will be presented in a dashboard in Tableau.

### Content Outline

Topic: Movie Productions

Question to answer: To predict whether or not a new movie is likely to win an Oscar. 

Dataset (link):

Database:

Machine Learning Model: Supervised Machine Learning

Technologies to use:

### Communication protocols
A group chat was formed on Slack. Slack is the primary form of communication for this project. We have one stand-in zoom scheduled per week in addition to the two regularly scheduled class times. Additional zoom meetings will be scheduled as needed throughout the course of this project.

## Segment 1


### Content for Segment 1

### Presentation for Segment 1

Topic: 

Reason for topic choice:

Description of the data source:

Question to answer:

## Progess Notes
1. March 2, 2023

Summary of project goals:

We want to use movie production data to predict whether a new movie is likely to win an Oscar. We will start by joining two relevant data sets to create our table, then pre-process the data for supervised machine learning. To present our findings, we will create a dashboard in Tableau.

2. March 6, 2023

Progress update on SQL schema and database setup

- JAK has encountered some issues in importing our data from the movie.csv into the data base the current error faced is as follows 
"ERROR: extra data after last expected column
CONTEXT: COPY movieTable2, line 2: "0,135397,tt0369610,32.985763,150000000.0,1513528810.0,Jurassic World,Chris Pratt|Bryce Dallas Howard...""
We have checked the column entries twice and confirmed there are no typos in the columns along with no additional information in the columns or additional columns missed. 
Our next step is to confirm the dtypes are matched accordingly from the PGAdmin database to the pandas dataframe that we performed exploratory analysis on. After referring to the documentation on PG Admin as well as pandas we have decided to seek additional assistance from our TA omce class hours commence this evening. 
Once we have confirmed the cause of the current error we will post an update on the chosen direction in order to correct the error and how it was fixed in order to proceed with the construction of the database as well as the import of the csv file and its information.
