# Data Knights: The Oscar Awards

![screenshot_2023-03-08_at_8 32 56_pm_480](https://user-images.githubusercontent.com/111299372/223892892-fcc68062-787e-44be-9ba9-152674314a4d.png)

## Overview

### Purpose

An analysis on movie production and how it relates to Oscar winners. The production of a movie involves a lot of variables such as budget, cast, director, genre, and runtime. All of these variables directly relate to the popularity of a movie as well its gross profit. Analyzing a dataset related to movie production will help to explore the process of how Oscar winners are picked.

The Oscars are awards for artistic and technical merit for the American Film Industry. The Oscar Awards are formally known as the Academy Awards and are presented by the Academy of Motion Picture Arts and Sciences.

Project uses movie production data to predict whether a new movie is likely to win an Oscar. Two relevant data sets are joined to create our table. Then the data will be pre-processed for supervised machine learning. Findings will be presented in an interactive website using javascript.

### Communication protocols
A group chat was formed on Slack. Slack is the primary form of communication for this project. We have one stand-in zoom scheduled per week in addition to the two regularly scheduled class times. Additional zoom meetings will be scheduled as needed throughout the course of this project.

## Resources

### Software
* Website Dashboard: HTML, CSS, Javascript
* Machine Learning: sklearn, tensorflow
* Python: Jupyter Notebook, Pandas, matplotlib, numpy 
* Database: SQL, pgAdmin 

### Data Source

The first dataset is titled "TMBD Movie Dataset". Data was found from https://www.kaggle.com/datasets/successikuku/tmbd-movie-dataset. Dataset contains 1286 rows and has 24 columns. 

Screenshot of the "TMBD Movie Dataset":

![Screen Shot 2023-03-04 at 4 23 02 PM](https://user-images.githubusercontent.com/111299372/223214862-d552ed9f-c377-48ca-974c-e84da6e39ebb.png)

![Screen Shot 2023-03-04 at 4 24 57 PM](https://user-images.githubusercontent.com/111299372/223214872-f0e07932-db64-4eda-becb-beb0e3913835.png)


The second datasoure is titled "The Oscar Award, 1927 - 2023" and was found at https://www.kaggle.com/datasets/unanimad/the-oscar-award. This file is scraped from the Academy Awards Database which contains the record of past Academy Award winners and nominees between 1927 and 2023.

Screenshot of "The Oscar Award, 1927 - 2023" data:

![Screen Shot 2023-03-04 at 4 14 55 PM](https://user-images.githubusercontent.com/111299372/223214821-cbf409bb-d803-475c-a8ed-b77dc3608237.png)

## Project Outline

### Machine Learning Model

Machine Learning Model: A write up on our machine learning model is located in the progess notes from March 5, 2023. A mockup of the machine learning model has been written. The files are titled "Neural_Network.ipynb" and "Random_Forest.ipynb". They are were pushed to the KAV_branch and have been merged with the main branch. 

### Database

The data was imported into a Jupyter notebook. The data was then imported to SQL using Pandas. The database files and analysis are currently located on the JAK_branch. This branch also has the SQL queries saved to it and additional screenshots of the SQL tables in pgAdmin. 

![Screenshot 2023-03-15 at 7 21 01 PM](https://user-images.githubusercontent.com/111299372/225466661-b262012b-0493-4340-bf60-638a8aefc2f1.png)

<img width="869" alt="Screenshot 2023-03-06 at 9 13 00 PM" src="https://user-images.githubusercontent.com/114188120/223302687-a4dc14eb-a6fe-48e1-a1f8-6216e5a6cd19.png">


<img width="814" alt="Screenshot 2023-03-06 at 8 58 58 PM" src="https://user-images.githubusercontent.com/114188120/223302297-fea8ceb1-31d8-4a5f-8e8a-6a97d0ed79d9.png">

<img width="749" alt="Screenshot 2023-03-06 at 8 12 06 PM" src="https://user-images.githubusercontent.com/114188120/223302321-0be30e64-9439-4564-bd9b-4acdafd25a24.png">

## Final Dashboard Outline

Project uses JavaScript for the dashboard. Since the topic of movie productions is commonly searched for on the internet, having the dashboard hosted as a website will make the results of this project readily accessible and usable. 
The website will have five different tabs:
* Prediction
* Winners
* Money
* Visualize

This website will contain several interactive features:
* Users will be able to search the dataset to see if a particular movie has won an Oscar Award. Users can search by filtering by movie name, actor/actress name, and year released.
* Machine Learning is used to predict if a movie will win a future Oscar Award. Users will be able to enter a director name, an actor name, and a budget. The machine learning model will be used to predict if the entered combination of movie production will win an Oscar Award.


<img width="1259" alt="Prediction page" src="https://user-images.githubusercontent.com/111299372/224562912-64ab3f7b-d8fd-49d1-a820-967f04a8fe62.png">



## Analysis

### The Movie Database Analysis

The TMBD dataset was loaded into Jupyter notebook for data analysis and exploration. The data was then drilled down to specific subsets. From there several graphs and visualizations were made to analyze the dataset by popularity. There are four popularity choices: high, moderately high, medium, and low. Bar charts were made to visualize the popularity of a movie by its average vote, budget, revenue, and profit.

#### Average vote by popularity:

![vot_avg](https://user-images.githubusercontent.com/111299372/223892434-68afbc30-88df-4ea7-8828-1a461bbef8a2.png)

#### Average budget by popularity:

![average_budget](https://user-images.githubusercontent.com/111299372/223892433-ccdba72e-a9af-4baa-987e-373ffafe2c9c.png)

#### Average revenue by popularity:

![average_revenue](https://user-images.githubusercontent.com/111299372/223892439-dab86c90-bc0a-4788-a010-c4e1a902ce04.png)

#### Average profit by popularity:

![average_profit](https://user-images.githubusercontent.com/111299372/223892455-9a05c827-3294-4c58-9fcc-c1f9537cee91.png)

### The Oscar Award Analysis

The Oscar Awards dataset was imported into Jupyter Notebook for inspection and analysis. The dataset was checked for null values. Three columns of data had null values: name, film, and winner. The null values were dropped and their removal was verified before proceeding with the analysis. The data was checked for duplicated rows. The six duplicated rows were dropped and their removal was verified.


### Breakdown of Acting Categories

![number_acting](https://user-images.githubusercontent.com/111299372/224421973-db1f763c-03b1-459e-a090-b2723a5cd803.png)

#### Breakdown of Winning vs. Losing Nominations

![win_vs_lose](https://user-images.githubusercontent.com/111299372/224422042-9e71ef06-5da7-4eca-affd-f513cd975dc0.png)




## Results

The two datasets were merged in SQL to form the "all_movie_data" dataset. The all_movie_dataset was imported into Jupyter Notebook for analysis. The data was drilled down into subsets and used to create a barchart displaying the Oscar winners by popularity level of the film.

![winner_by_pop](https://user-images.githubusercontent.com/111299372/225704411-7e5856e5-7f1f-4eb1-ac77-ff93962a76f0.png)




## Progress Notes

### March 2, 2023

Summary of project goals:

We want to use movie production data to predict whether a new movie is likely to win an Oscar. We will start by joining two relevant data sets to create our table, then pre-process the data for supervised machine learning. To present our findings, we will create a dashboard in Tableau. Consists of 10,759 rows and 7 columns. The 7 columns are: year of the film, year of the ceremony, which ceremony it was, category, name, film, and winning status. 




### March 3, 2023

Added a branch for each teammember. Finalized datasource. Inspected datasource. Added two raw datasets to repo. Explored database and machine learning ideas. A google slide deck was started for the final project presentation. Assigned tasks for the upcoming week for segment 1.
* Margo - google decks / presentation / tableau
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

In order to implement any supervised learning, however, the data will need to be processed. The movie production data contains columns with categorical variables and numeric values that vary greatly in their size. Some of the categorical columns even contain multiple variables in the same column, such as multiple actors under the ‘cast’ column for one movie. Pre-processing the data, then, will likely involve separating each of the actors into their own columns. For example, Chris Prat will become a binary categorical feature of the model, and each film will either have Chris Prat in it or not. Then, with one-hot encoding, each column with categorical data can be cast as numeric data. This is important, as machine learning models require features to be provided in specific formats. Additionally, there are some columns that could likely be dropped from the data. Dollar figures for each movie’s budget and revenue earned are given in both raw numbers and as an adjusted figure in 2010 dollars. Including both in an analysis could skew the results. Other columns, such as IMDB ID, home page, and tagline, are unlikely to provide any meaningful contributions, and could reasonably be dropped. Popularity is also given as a floating point value in one column and as a categorical value in another column, so we would likely only consider keeping one of these features. Finally, the data will need to be scaled to account for the wide ranges of numeric data in the set. It is considered good practice to split training and testing data prior to scaling so that the model does not preemptively fit to the testing data.

With pre-processing complete, we will then be able to begin designing, training, and evaluating the machine learning models. Naturally, the number of nodes in the input layer must be equal to the number of features in the data that we will use. The output layer of the neural network will only contain one node, as that is all that is necessary in binary classification. With this data set, we will likely begin with two hidden layers, with the number of nodes in each layer decreasing as they move toward the output layer. 

The node in the output layer will use the sigmoid activation function, as it is well-suited to binary classification. Initially, we intend to use the ReLU activation function for each other node throughout the network. Other activation functions may prove to be more effective in experimentation. 

Stochastic Gradient Descent is a traditional optimization function used to update the parameters in a neural network. Precisely how it works is beyond the scope of this project. However, it is worth noting that gradient descent is subject to errors that the Adam optimization function is designed to address. Thus, the Adam function will be the first that we consider when designing the neural network.

