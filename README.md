# Data-Knights

## Overview

### Purpose
Project uses movie production data to predict whether a new movie is likely to win an Oscar. Two relevant data sets are joined to create our table, then pre-process the data for supervised machine learning. Findings will be presented in a dashboard in Tableau and an interactive website.

### Content Outline

Topic: Movie Productions and Oscar Awards

Question to answer: To predict whether or not a new movie will win an Oscar. 

Dataset (link):
https://www.kaggle.com/datasets/successikuku/tmbd-movie-dataset
https://www.kaggle.com/datasets/unanimad/the-oscar-award

Database:

Machine Learning Model: Supervised Machine Learning

Technologies to use:

### Communication protocols
A group chat was formed on Slack. Slack is the primary form of communication for this project. We have one stand-in zoom scheduled per week in addition to the two regularly scheduled class times. Additional zoom meetings will be scheduled as needed throughout the course of this project.

## Segment 1


### Content for Segment 1

### Presentation for Segment 1

Topic: Movie Productions and Oscar Awards

Reason for topic choice: Topic was chosen to explore the process of how oscar winners were chosen. Analyzing a dataset related to movie production will help to explore the process of how Oscar winners are picked.

Question to answer: Given the data about a new movie can we predict whether or not it will win an oscar? 

Link to slide deck: https://docs.google.com/presentation/d/1PBKEbv_1AAcUWEmc93uS9961zodiyv0a-1vvWwRyaM0/edit#slide=id.g215d28312ee_0_0

### First datasource:
Dataset is titled "TMBD Movie Dataset". Data was found from https://www.kaggle.com/datasets/successikuku/tmbd-movie-dataset. Dataset contains 1286 rows and has 24 columns. 

### The column details of the "TMBD Movie Dataset" are:

ID: Movie ID

Popularity: Popularity score

Budget: Amount spent to make the movie

Revenue: Amount realized from the movie

original title: Movie title

Cast: Actors & Actresses in the movie

Homepage: Movie website

Director: Director(s) of the movie

Tagline: Catchphrase(s)/slogan of the movie

keywords: Words associated with a movie

Overview: Movie Summary

Runtime: length of a movie

Genres: Category

Production companies: Companies that produced the movie

Release date: Date movie was released

Vote count: Vote average

Release year: year movie was released

Budget adj: Budget In terms of 2010 dollars

Revenue adj: Revenue in terms of 2010 dollars

### Second datasource

The second datasoure is titled "The Oscar Award, 1927 - 2023" and was found at https://www.kaggle.com/datasets/unanimad/the-oscar-award. This file is scraped from the Academy Awards Database which contains the record of past Academy Award winners and nominees between 1927 and 2018.

## Progress Notes

### March 2, 2023

Summary of project goals:

We want to use movie production data to predict whether a new movie is likely to win an Oscar. We will start by joining two relevant data sets to create our table, then pre-process the data for supervised machine learning. To present our findings, we will create a dashboard in Tableau. Consists of 10,759 rows and 7 columns. The 7 columns are: year of the film, year of the ceremony, which ceremony it was, category, name, film, and winning status. 



### March 3, 2023

Added a branch for each teammember. Finalized datasource. Inspected datasource. Added two raw datasets to repo. Explored database and machine learning ideas. A google slide deck was started for the final project presentation. Assigned tasks for the upcoming week for segment 1.
* Margo - google decks / presentation
* Amy and John - database
* Ken -  Machine Learning Mockup
* Amy - start building website!

### March 5, 2023
-Ken: Machine Learning Outline
An artificial neural network has the advantage of being able to fit a complex set of data. They are well-suited to data sets with large numbers of features (columns, in tabular data) and many data points (rows). 

However, the advantages of neural networks come at a cost. Firstly, due to their flexibility, they are prone to overfitting the data. This means that they can achieve high levels of accuracy on data in the training set while still demonstrating mediocre performance when making predictions on new data. Fortunately, by measuring the loss between a model’s predictions and labeled testing data, we can evaluate whether a neural network is overfitting when it achieves high accuracy. Precision and recall are used to indicate what types of errors the model makes when its predictions are incorrect. 

Another consideration when implementing neural networks is processing time and power. This is particularly true when dealing with big data. While neural networks are able to attain high degrees of performance, they can be costly to train. Because of this, it is worth considering whether a different type of supervised machine learning algorithm might be more suited to the task and to the data, as efficiency is critical when dealing with extremely large data sets. 

Our problem is predicting whether a new movie is likely to win an Oscar award, so it is a binary classification problem. A random forest model could also prove to be an effective algorithm. This is due to the fact that random forest models are resistant to outliers and noisy data. They are also considered to be ‘robust’, or less prone to overfitting the data. These are exactly the typical shortcomings of artificial neural networks, which is why we will consider a random forest as an alternative method. 

The data with which we will be working contains about 12,000 rows, which is small enough that training a model can be done on a local device in a reasonable amount of time. Thus, we will consider the performances of both a neural network model and a random forest model. This will help us ensure that we are making the best use of available tools to make accurate predictions. 

In order to implement any supervised learning, however, the data will need to be processed. The movie production data contains columns with categorical variables and numeric values that vary greatly in their size. Some of the categorical columns even contain multiple variables in the same column, such as multiple actors under the ‘cast’ column for one movie. Pre-processing the data, then will likely involve separating each of the actors into their own columns. For example, Chris Prat will become a binary categorical feature of the model, and each film will either have Chris Prat in it or not. Then, with one-hot encoding, each column with categorical data can be cast as numeric data. This is important, as machine learning models require features to be provided in specific formats. Additionally, there are some columns that could likely be dropped from the data. Dollar figures for each movie’s budget and revenue earned are given in both raw numbers and as an adjusted figure in 2010 dollars. Including both in an analysis could skew the results. Other columns, such as IMDB ID, home page, and tagline, are unlikely to provide any meaningful contributions, and could be dropped. Popularity is also given as a floating point value in one column and as a categorical value in another column, so we would likely only consider keeping one of these features. Finally, the data will need to be scaled to account for the wide ranges of numeric data in the set. It is considered good practice to split training and testing data prior to scaling so that the model does not preemptively fit to the testing data.

With pre-processing complete, we will then be able to begin designing, training, and evaluating the machine learning models. Naturally, the number of nodes in the input layer must be equal to the number of features in the data that we will use. The output layer of the neural network will only contain one node, as that is all that is necessary in binary classification. With this data set, we will likely begin with two hidden layers, with the number of nodes in each layer decreasing as they move toward the output layer. 

The node in the output layer will use the sigmoid activation function, as it is well-suited to binary classification. Initially, we intend to use the ReLU activation function for each other node throughout the network. Other activation functions may prove to be more effective in experimentation. 

Stochastic Gradient Descent is a traditional optimization function used to update the parameters in a neural network. Precisely how it works is beyond the scope of this project. However, it is worth noting that gradient descent is subject to errors that the Adam optimization function is designed to address. Thus, the Adam function will be the first that we consider when designing the neural network.

