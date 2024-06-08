# Real-Time Twitter Sentiment Analysis

## Project Overview
This project focuses on the development of a sentiment analysis application utilizing big data technologies. The primary goal is to build a scalable and efficient system capable of processing and analyzing large volumes of Twitter data in real-time. The core components include data ingestion, storage, processing, and front-end visualization.

## Supervision
This project was supervised by Prof. El Yussfi Yasyn.

## Technologies and Tools
- **Apache Kafka**: Stream processing
- **Pyspark**: Data preprocessing and machine learning
- **FastAPI**: Backend framework
- **React**: Frontend library
- **MongoDB**: Database

## Architecture and Implementation

![structure](https://github.com/Loubnaelghazi/big-data/assets/114692135/78ba49cc-cb69-4774-b839-b7eda8689b2c)

1. **Data Ingestion:** Real-time data ingestion from `twitter_training.csv` using Apache Kafka Streams.
2. **Data Preprocessing:** Preprocessing of data using Pyspark, NLTK, and other libraries.
3. **Model Training:** Training machine learning models (Logistic Regression, XGBoost) on the `twitter_training.csv` dataset.
4. **Model Serialization:** Saving the best model as a `.pkl` file.
5. **Real-Time Prediction:** Using the pre-trained model to predict tweet sentiments on `twitter_validation.csv`.
6. **Logging:** Saving output streams to MongoDB for result presentation.
7. **Web Application:** Presenting and utilizing results through a web application.


## Features
- **Stream Processing:** Uses Apache Kafka to handle real-time data streams from Twitter.
- **Data Preprocessing:** Employs Pyspark for necessary data preprocessing.
- **Machine Learning:** Trains supervised machine learning models to predict tweet sentiments.
- **Backend:** Implements FastAPI for backend operations.
- **Frontend:** Utilizes React to build a responsive user interface.
- **Database:** Stores and logs results in MongoDB.
- **Tokenization**: Splitting text into individual words.
- **Stop Words Removal**: Filtering out common stop words.
- **N-Grams**: Generating bigrams to capture context between adjacent words.
- **Feature Generation**: Using CountVectorizer to convert text into numerical features suitable for machine learning models.

### Machine Learning Model Training
Supervised learning models are trained on preprocessed data:
- **Logistic Regression** (best performing model, saved for future predictions)
- **Random Forest**
- **Naïve Bayes** 

### Real-Time Sentiment Prediction
The saved model predicts the sentiment (Negative, Positive, Neutral, Irrelevant) of incoming tweets in real-time, validated against the `twitter_validation.csv` dataset.

### Web Application Development with FastAPI and React
- **Backend**: Developed using FastAPI to create a robust RESTful API for data processing and retrieval.
- **Frontend**: Built using React with DaisyUI to provide an interactive user interface.

## Data Description
### Training Data: `twitter_training.csv`
- **Tweet ID**: int
- **Entity**: string
- **Sentiment**: string (Label)
- **Tweet content**: string

### Validation Data: `twitter_validation.csv`
- Contains 998 tweets with the same structure as the training data.
- The "Sentiment" column is the target for prediction.

Source of Data: [Kaggle - Twitter Entity Sentiment Analysis](https://www.kaggle.com/datasets/jp797498e/twitter-entity-sentiment-analysis)

## Installation and Setup

## Docker Setup

### Prerequisites
- Docker installed on your machine
- Docker Compose installed

  ### Build and Run the Application
1. **Clone the repository**:
    ```bash
    git clone https://github.com/Loubnaelghazi/big-data
    ```

2. **Run the backend**:
    ```bash
    uvicorn app.main:app --reload
    ```

3. **Run the frontend**:
    ```bash
    cd frontend
    npm install
    npm run dev 
    ```

## Contribution
Contributions are welcome! Please fork the repository and submit a pull request.


## Contact
For any inquiries, please contact:
- El ghazi Loubna
- Zaoui Hanane

---

Feel free to customize this README file further based on your project's specific details and requirements.

