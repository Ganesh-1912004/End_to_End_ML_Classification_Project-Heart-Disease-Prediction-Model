from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load the pre-trained model
with open('random_forest_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    features = [float(x) for x in request.form.values()]
    final_features = [np.array(features)]
    prediction = model.predict(final_features)
    output = "High risk of heart disease" if prediction[0] == 1 else "Low risk of heart disease"
    return render_template('result.html', prediction_text=output)

if __name__ == '__main__':
    app.run(debug=True)