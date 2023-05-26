# Final Project 
## Housing Cost Prediction Model 
Amr Ismail, Angel Chen, Bree PiperWilliams, Jennifer Duckworth, Lorela Cabral
Presentation: https://prezi.com/view/Yoe0tMeBLysebxIMqeLO/
![alt text](https://www.dice.com/binaries/large/content/gallery/dice/insights/2018/08/Cost-of-Living-Tech-Pros-Dice.png)

## Problem
The US is one of the most expensive places to live in the world. It can be challenging for renters and home buyers to determine if they are paying a fair price for their rental or home. 


## Solution
Build a machine learning model to predict rental prices and housing costs for different types of properties in various neighborhoods in the US. The model could take into account various features, such as: number of career opportunities in each state, house hold income, is cheaper to rent vs buy, which month is better to buy/rent, rate of increase. 


Data Source: https://www.zillow.com/research/data/

Technologies Used: 
* ETL read in CSV drop null values and make data consistent 
* Python Pandas for data manipulation
* Python Matplotlib
* Scikit-learn for machine learning algorithms
* HTML/Javascript 
* Tableau 

## Step 1  Machine Learning
### ETL
* Imported Depencies
* Read in csv files 
* drop null values  to trim down data grame 
* Find number of unique values to ensure data is consistent 
* Groupby average rent price & sales cost by year 
* Create a new data frame with averages 
* Merge two data frames by RegionID
* Reorganize columns to clump all the sales and all the rent data together
* Print dataframe to csv

![alt text](https://i.imgur.com/x741EJW.png)


### Unsupervised Learning 
* Print a histogram to look at the distribution of the data 
![alt text](https://i.imgur.com/ZcqZpVj.png)

* Use the `StandardScaler()` module from scikit-learn to normalize the data from the CSV file and then create a new Data Frame with the scaled data. 

![alt text](https://i.imgur.com/sMOsBZr.png)

* Set up the data to create an elbow curve to see how many clusters and what is the inertia associated with each cluster. Create a data frame and plot the line chart. 

![alt text](https://i.imgur.com/tiwOPe2.png)

![alt text](https://i.imgur.com/tmwmvI0.png)

![alt text](https://i.imgur.com/WYd8ChC.png)

* Create a PCA Model and assign names to the columns, finding the elbow curve a

![alt text](https://i.imgur.com/fzlLR7O.png)

### Supervised Learning 
* Repeat the first 4 steps of unsupervised learning 
* Used the State name column to generate one hot encoder
* We chose our focus as CA our explanatory variable because the majority of our group lives in CA. 
* Import the train test learn module and is feeding it to the x and y of the model 
* Print the classification report for the model & balance accuracy report 

![alt text](https://i.imgur.com/qXY7GU3.png)

* I nstantiate the random oversampler model and  assign a random_state parameter of 1 to the model
 * Fit the original training data to the random_oversampler model
* Instantiate the Logistic Regression model and Assign a random_state parameter of 1 to the model
* Print the classification report for the model & balance accuracy report 

![alt text](https://i.imgur.com/n1hMcKo.png)

### Conclusion: 
Looking at the decision matrix and the precision and recall values our model is more accurate at predicting non CA rental and sale price. 

## Step 2 Visualizations 
### Steps:
* Import csv file
* Create necessary parameters and calculated fields to organize the data
* Brainstormed relevant visualizations
* Adjusted the visualizations to be cohesive 
* Perform targeted analysis on based on trends that the visualization shows to inform end users



![alt text](https://i.imgur.com/5fXbkHM.png)

* There is an observed increase in housing sales in 2021 and 2022 and a sharp decline in 2023. The organized data reflects the expected trend from the macroeconomic happenings during that time. In 2021, mortgage rates hit a historic 30-year low of 2.65%. This increase in demand will cause sales prices to increase alongside it. In fact, C.A.R (California Association of Realtors) anticipated that the median home price will increase by 5.2% in 2022 after demands of 2021, which we can see materializing here as the sale price continues to increase from the year before. Sale prices started to decline in 2023 as mortgage rates kept rising, with 6.43% the week ending April 27th. Rising cost of  inflation and unemployment contributes to the growing consumer uncertainty and potentially leading to  "the largest housing correction in the post WWII era" (Yahoo Finance). As interest rates continue to rise while the Fed is tackling inflation, potential homeowners should look to save their money to buy property once the market cools off. 

![alt text](https://i.imgur.com/7MRsHLj.png)

![alt text](https://i.imgur.com/jWfWTos.png)

![alt text](https://i.imgur.com/gggGle3.png)

* fixed data to include latitude and longitude within the df
* created js and html file for the map. HTML file accessible by opening it through command line within the templates folder 

## Conclusion: 
* Looking at the decision matrix and the precision and recall values our model is more accurate at predicting non CA rental and sale price. 

* Initial indicator shows that cities in California with the highest rent are mostly centered in southern California in the Los Angeles area. Areas closer to the beach naturally have a higher price point than those farther inland. For example, Malibu had the fastest rate of growth at 19% in 2021 and 14% in 2022. Interestingly, this was during the onset of COVID. Coupled with quarantine and close to historically low interest rates, "properties that sometimes took years to attract buyers are now selling in months." (Forbes). This economic factor can also be a driving factor for why the cities experienced their respective highest rates of growth in 2022. For renters looking to live in California, this suggests areas away from the coast would be more affordable. On the contrary, for owners who are looking to rent, they can capitalize on this opportunity to open their houses to services such as Airbnb.
