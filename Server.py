from flask import Flask, redirect, request, render_template, jsonify
import json
import os

app = Flask(__name__)

#Will be used on start to open the index file
@app.route('/')
def index():
    return render_template('index.html')

#When Clicked the website will redirect the user to the home.html
@app.route('/home')
def homePage():
    return render_template('home.html')

@app.route('/signup')
def signUpPage():
    return render_template('templates\signUp.html')

if __name__ == "__main__":
    app.run(debug=True)
