# Real-Time Twitter Sentiment Analysis

## Project Overview
This project focuses on the development of a sentiment analysis application utilizing big data technologies. The primary goal is to build a scalable and efficient system capable of processing and analyzing large volumes of Twitter data in real-time. The core components include data ingestion, storage, processing, and front-end visualization.

## Supervision
This project was supervised by Prof. El Yussfi Yasyn.

## Technologies Used
- **Apache Flume**: For collecting, aggregating, and moving large amounts of log data.
- **Apache Hadoop**: For distributed storage and processing of large data sets.
- **Apache Spark**: For big data processing with modules for streaming, SQL, machine learning, and graph processing.
- **MongoDB**: A NoSQL database for storing data in flexible, JSON-like documents.
- **FastAPI**: A modern, fast web framework for building APIs with Python.
- **React**: A JavaScript library for building user interfaces, particularly single-page applications.

## Architecture and Implementation
### Data Ingestion with Apache Flume
Apache Flume is configured to collect streaming data from Twitter and transfer it to Hadoop for storage and processing.

### Data Storage and Processing with Apache Hadoop
Twitter data is stored in Hadoop's HDFS (Hadoop Distributed File System). Data processing is done using Apache Spark with PySpark:
- **Tokenization**: Splitting text into individual words.
- **Stop Words Removal**: Filtering out common stop words.
- **N-Grams**: Generating bigrams to capture context between adjacent words.
- **Feature Generation**: Using CountVectorizer to convert text into numerical features suitable for machine learning models.

### Machine Learning Model Training
Supervised learning models are trained on preprocessed data:
- **Logistic Regression**
- **Random Forest**
- **Naïve Bayes** (best performing model, saved as a .pkl file for future predictions)

### Real-Time Sentiment Prediction
The saved model predicts the sentiment (Negative, Positive, Neutral, Irrelevant) of incoming tweets in real-time, validated against the `twitter_validation.csv` dataset.

### Database Integration with MongoDB
Predicted sentiment data is stored in MongoDB for efficient retrieval and presentation.

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
1. **Clone the repository**:
    ```bash
    git clone https://github.com/Loubnaelghazi/big-data
    ```

2. **Configure Apache Flume, Hadoop, Spark, and MongoDB** following their respective installation guides.

3. **Run the backend**:
    ```bash
    uvicorn app.main:app --reload
    ```

4. **Run the frontend**:
    ```bash
    cd frontend
    npm install
    npm run dev 
    ```

## Usage
1. **Start Apache Flume to begin data ingestion**.
2. **Launch the backend and frontend servers**.
3. **Access the web application** at `http://localhost:3000`.

## Contribution
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, please contact:
- El ghazi Loubna
- Zaoui Hanane

---

Feel free to customize this README file further based on your project's specific details and requirements.

