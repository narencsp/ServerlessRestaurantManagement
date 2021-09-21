# Contributors 
Narendran Krishnakumar <br />
Zongyu Wu <br />
Tejaswi Chaudhary <br />
Vivekkumar Sanepara 


# Application Architecture
![ServerlessRestaurantManagement_Architecture](https://github.com/narencsp/ServerlessRestaurantManagement/blob/master/ServerlessRestaurantManagement_Architecture.png)
<p align="center">

    *Figure 1: Application Architecture*

</p>
# Problem Statement
A serverless Food Delivery system using multi-cloud deployment model 
and backend-as-a-service. The Food Delivery System- “Halifax Foodie,” should provide 
customization features and additional services for restaurant owners and limited services to 
customers. The application should provide online virtual assistance, which can quickly answer 
the queries of registered customers or guests. 
 
In addition, the application should provide a chat functionality between a registered customer 
and customer service representative if there are any delivery issues. Furthermore, the chat 
functionality can be extended to support customer escalation. 
 
The application will provide data security, user management, customer feedback polarity 
analysis, food item delivery tracker, restaurant ratings, customer recommendation, discount 
coupon, etc. As an additional feature, each restaurant can upload its top recipe on the system 
for checking similarity scores. 
 
We selected a serverless application to minimize the development and project 
running cost. In addition, we have identified two cloud platforms-AWS and GCP, to build, test, 
and deploy our application. We have decided to follow the official documentation of AWS and 
GCP to construct the different pieces. 
 
If we select server-oriented architecture, we need to manage and configure the backend 
service, which we cannot do due to the resource limitations. Therefore, serverless is the only 
solution we found at this point. We have obtained two types of accounts from AWS and GCP, 
which we can use for building, testing, and deploying their application. 
 
Since we will follow the agile method, we can build, test, and change each project component 
whenever there is a change in the requirements.

# System Components
#### User Management Module 
o Sign up validation – Customer, and Restaurant sign up validation. 
o Managing and storing User details. 
#### Authentication Module 
o User authentication Logic – Multifactor (ID-password, and Question Answer) 
#### Online Support Module 
o Bots should respond to queries – Online virtual assistance for application 
navigation, tracking, etc. 
#### Chat Module 
o Restaurant Customer Service Representative and Customer should be able to 
communicate – Instant Messaging Engine. 
o Customer and Restaurant Manager should be able to chat in case of escalation. 
#### Data Processing 
o A container-based application to extract named entities from food ratings and 
build a word cloud of food items people have selected. Use Elastic Beanstalk or 
ECS to deploy and manage your container. 
#### Machine Learning 
o Identify the similarity of the recipe and add appropriate tags –similarity check 
of recipe files based on various measures, such as Euclidean distance, etc. GCP 
ML and choice of algorithms could be used. E.g., if recipe files on Veg Pizza, Veg 
Curry, Green Salad, etc. are uploaded, then it should classify the files based on 
the similarity score 
#### Web Application Building and Hosting 
o Building a front-end application using a suitable framework and calling backend 
services- Using React, Nodejs, Lambda, etc. 
o Hosting of the entire application and user/client-facing interface. 
#### Other Essential Modules 
o Testing Module – Test cases must be validated. 
o Report Generation Module, e.g., User Statistics 
o Visualization Module

# Framework and Technologies 
We have used various tools, technologies, and frameworks for the implementation. In the 
beginning of the project, we analysed and compared different programming languages, 
collaboration tools and IDEs which would help us with the implementation provide robust code 
environment and flexibility of creating custom data structures. Below is the final list of 
frameworks and technologies selected to design a distributed database management system. 
#### Coding Language: React.js for front-end, Python/JavaScript for cloud/lambda function 
We have used JavaScript as our programming language for the project. JavaScript is a 
core language and provides support for all dynamic data structures, thus provided us 
flexibility to refer to various data structures.  
#### Serverless Technology used: AWS and Google Cloud services 
In the project, cloud services such as lambda function, s3, API gateway, DynamoDB were 
used. To deploy google cloud run, was used. To visualize data, google data studio was 
used. 
#### Project Version Control Tool: GitLab 
We used GitLab as a version control tool where we all collaborated and pushed our code 
to develop using feature-branches. Each member took care of their modules and pushed 
code in the feature branch after doing unit testing. After all the tests were passed, code 
was finally merged with main. 
#### OS supported: Windows 10, MacOS, Linux 
The prerequisite of using our code is the system must require JDK to operate the java 
program. Additionally, plugins must be installed for Gradle project, which is necessary 
when running the program on terminal. 
#### Application type: Web Application 
We created a console application and offered various options to the user to verify 
implementation of a database management system. 
#### Project Architecture Design: Draw.io 
We used draw.io for creating flowcharts and sequence diagrams.  
#### IDE: VS Code 
We used VS Code as the IDE as it offers various plugins so that we adhere to clean code 
standards and debug our application in case of failures.
