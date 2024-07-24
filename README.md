# Heart Disease Prediction Model

## Overview
This is an end-to-end machine learning classification project that predicts the likelihood of heart disease using six different algorithms: Logistic Regression, SVM, KNN, Decision Tree, Random Forest, and Gradient Boosting. The project includes data preprocessing, model training, and deployment using Flask, HTML, CSS, and JavaScript.

## Dataset
The dataset used in this project is `heart.csv` sourced from Kaggle. It contains various features related to heart health.

## Project Structure
- `app/` - Contains the Flask application
  - `templates/` - HTML templates
  - `static/` - CSS and JavaScript files
  - `app.py` - Main application file
- `models/` - Contains the machine learning models
  - `random_forest_model.pkl` - Trained Random Forest model
- `notebooks/` - Jupyter notebooks for data analysis and model training
  - `heart_disease_prediction.ipynb` - Main notebook with all steps
- `data/` - Contains the dataset
  - `heart.csv` - Original dataset
- `requirements.txt` - Python dependencies

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/heart-disease-prediction.git
    cd heart-disease-prediction
    ```

2. Create a virtual environment and activate it:
    ```bash
    python -m venv venv
    source venv/bin/activate # On Windows, use `venv\Scripts\activate`
    ```

3. Install the required packages:
    ```bash
    pip install -r requirements.txt
    ```

## Usage
1. Run the Flask application:
    ```bash
    python app/app.py
    ```

2. Open your browser and go to `http://127.0.0.1:5000` to access the web interface.

## Models and Accuracy
- Logistic Regression
- SVM
- KNN
- Decision Tree
- Random Forest (Highest accuracy)
- Gradient Boosting

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## Acknowledgements
- Kaggle for the dataset
- The developers of Flask, Scikit-learn, and other libraries used in this project.

