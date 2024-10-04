from flask import Flask, render_template, request, redirect, url_for
import pickle
import pandas as pd

app = Flask(__name__)

# Load your trained model
model_path = 'health_model.pkl'
with open(model_path, 'rb') as file:
    model = pickle.load(file)

# Load CSV data
csv_file_path = 'driver_health_with_aqi.csv'
data = pd.read_csv(csv_file_path)

@app.route('/')
def home():
    # Render the home page
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Retrieve selected row from the CSV
    row_index = int(request.form.get("row_index"))  # Form will provide this index
    input_data = data.iloc[row_index, :-1].values  # Exclude label if present in last column
    
    # Predict with the model
    prediction = model.predict([input_data])
    
    # Render the result back in HTML
    return render_template('index.html', prediction_text=f'Prediction for row {row_index}: {prediction[0]}')

if __name__ == "__main__":
    app.run(debug=True)
